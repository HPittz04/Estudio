import { NextResponse } from "next/server";
import { createUser } from "@/lib/userStore";

export async function POST(request: Request) {
  let payload: { name?: unknown; email?: unknown; password?: unknown };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Pedido inválido." }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : "";
  const password = typeof payload.password === "string" ? payload.password : "";

  if (!name || !email || password.length < 8) {
    return NextResponse.json(
      {
        message: "Verifica nome, email e password (mínimo 8 caracteres).",
      },
      { status: 422 },
    );
  }

  try {
    const user = await createUser({ name, email, password });
    return NextResponse.json({
      message: "Conta criada com sucesso.",
      user: { id: user.id, email: user.email, name: user.name },
    });
  } catch (error) {
    return NextResponse.json({ message: (error as Error).message }, { status: 409 });
  }
}
