import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import Stripe from "stripe";
import { authOptions } from "@/lib/authOptions";
import { markMembershipActive } from "@/lib/membershipStore";

export const runtime = "nodejs";

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecret ? new Stripe(stripeSecret, { apiVersion: "2024-06-20" }) : null;

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Autenticação necessária." }, { status: 401 });
  }

  let payload: { sessionId?: unknown };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Pedido inválido." }, { status: 400 });
  }

  const sessionId = typeof payload.sessionId === "string" ? payload.sessionId : "";
  if (!sessionId) {
    return NextResponse.json({ message: "session_id obrigatório." }, { status: 422 });
  }

  if (!stripe) {
    return NextResponse.json({ message: "Stripe não configurado." }, { status: 500 });
  }

  try {
    const checkout = await stripe.checkout.sessions.retrieve(sessionId);
    if (checkout.payment_status !== "paid") {
      return NextResponse.json({ message: "Pagamento ainda não confirmado." }, { status: 409 });
    }

    const metadataUserId = checkout.metadata?.userId;
    if (metadataUserId && metadataUserId !== session.user.id) {
      return NextResponse.json({ message: "Sessão pertence a outro utilizador." }, { status: 403 });
    }

    await markMembershipActive(session.user.id, checkout.id);

    return NextResponse.json({ message: "Membresia ativa." });
  } catch (error) {
    console.error("Erro ao confirmar pagamento", error);
    return NextResponse.json({ message: "Não foi possível confirmar o pagamento." }, { status: 502 });
  }
}
