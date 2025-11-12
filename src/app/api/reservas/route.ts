import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ReservationPayload = {
  fullName?: unknown;
  email?: unknown;
  sessionType?: unknown;
  preferredDate?: unknown;
  message?: unknown;
};

const SESSION_TYPE_LABELS: Record<string, string> = {
  "producao-musical": "Produção musical",
  gravacao: "Gravação",
  mistura: "Mistura",
  masterizacao: "Masterização",
  podcast: "Podcast",
  outro: "Outro",
};

function extractString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function resolveSessionLabel(value: string) {
  return SESSION_TYPE_LABELS[value] ?? value || "Não indicado";
}

export async function POST(request: Request) {
  let payload: ReservationPayload;

  try {
    payload = (await request.json()) as ReservationPayload;
  } catch {
    return NextResponse.json(
      { message: "Pedido inválido. Confirma os dados enviados." },
      { status: 400 },
    );
  }

  const fullName = extractString(payload.fullName);
  const email = extractString(payload.email);
  const sessionType = extractString(payload.sessionType);
  const preferredDate = extractString(payload.preferredDate);
  const message = extractString(payload.message);

  if (!fullName || !email || !sessionType || !message) {
    return NextResponse.json(
      {
        message:
          "Faltam dados obrigatórios. Verifica nome, email, tipo de sessão e mensagem antes de reenviar.",
      },
      { status: 400 },
    );
  }

  const smtpHost = process.env.RESERVAS_SMTP_HOST;
  const smtpPort = Number(process.env.RESERVAS_SMTP_PORT ?? "587");
  const smtpUser = process.env.RESERVAS_SMTP_USER;
  const smtpPass = process.env.RESERVAS_SMTP_PASS;
  const destination = process.env.RESERVAS_DESTINATION_EMAIL ?? smtpUser;

  if (!smtpHost || !smtpUser || !smtpPass || !destination) {
    return NextResponse.json(
      {
        message:
          "Configuração de email em falta. Contacta o responsável técnico para configurar as variáveis de ambiente.",
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const sessionLabel = resolveSessionLabel(sessionType);
  const formattedPreferredDate = preferredDate || "Não indicada";
  const textBody = [
    "Nova reserva recebida através do site.",
    "",
    `Nome: ${fullName}`,
    `Email: ${email}`,
    `Tipo de sessão: ${sessionLabel}`,
    `Data preferencial: ${formattedPreferredDate}`,
    "",
    "Mensagem:",
    message,
  ].join("\n");

  const htmlBody = `
    <p>Nova reserva recebida através do site.</p>
    <p><strong>Nome:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Tipo de sessão:</strong> ${sessionLabel}</p>
    <p><strong>Data preferencial:</strong> ${formattedPreferredDate}</p>
    <p><strong>Mensagem:</strong></p>
    <p>${message.replace(/\n/g, "<br />")}</p>
  `;

  try {
    await transporter.sendMail({
      from: `Estúdio 747 Reservas <${smtpUser}>`,
      to: destination,
      replyTo: email,
      subject: `Nova reserva de ${fullName}`,
      text: textBody,
      html: htmlBody,
    });
  } catch (error) {
    console.error("Falha ao enviar email de reserva", error);
    return NextResponse.json(
      {
        message: "Não conseguimos enviar o email neste momento. Tenta novamente dentro de alguns minutos.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Pedido enviado com sucesso." }, { status: 200 });
}
