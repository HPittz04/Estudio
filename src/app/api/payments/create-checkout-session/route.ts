import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import Stripe from "stripe";
import { authOptions } from "@/lib/authOptions";

export const runtime = "nodejs";

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecret ? new Stripe(stripeSecret, { apiVersion: "2024-06-20" }) : null;

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email || !session.user.id) {
    return NextResponse.json({ message: "Autenticação necessária." }, { status: 401 });
  }

  if (!stripe || !process.env.STRIPE_PRICE_ID) {
    return NextResponse.json(
      { message: "Configuração de Stripe em falta. Define as variáveis de ambiente." },
      { status: 500 },
    );
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.NEXTAUTH_URL ?? "http://localhost:3000";
  const successUrl = process.env.NEXT_PUBLIC_STRIPE_SUCCESS_URL ?? `${baseUrl}/social-club/confirm`;
  const cancelUrl = process.env.NEXT_PUBLIC_STRIPE_CANCEL_URL ?? `${baseUrl}/social-club`;

  try {
    const checkout = await stripe.checkout.sessions.create({
      mode: "subscription",
      success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl,
      customer_email: session.user.email,
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      metadata: {
        userId: session.user.id,
      },
    });

    if (!checkout.url) {
      throw new Error("Stripe não retornou URL de checkout");
    }

    return NextResponse.json({ url: checkout.url });
  } catch (error) {
    console.error("Falha ao criar sessão de checkout", error);
    return NextResponse.json({ message: "Não foi possível iniciar o pagamento." }, { status: 502 });
  }
}
