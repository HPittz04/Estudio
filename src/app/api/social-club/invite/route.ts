import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { getMembershipForUser } from "@/lib/membershipStore";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ message: "Autenticação necessária." }, { status: 401 });
  }

  const membership = await getMembershipForUser(session.user.id);
  if (!membership || membership.status !== "active") {
    return NextResponse.json({ message: "Precisamos de confirmar o pagamento." }, { status: 403 });
  }

  const inviteUrl = process.env.WHATSAPP_INVITE_URL;
  if (!inviteUrl) {
    return NextResponse.json({ message: "Link em falta. Contacta o administrador." }, { status: 500 });
  }

  return NextResponse.json({ inviteUrl });
}
