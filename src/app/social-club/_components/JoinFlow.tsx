"use client";

import { useState } from "react";
import Link from "next/link";

async function createCheckoutSession() {
  const response = await fetch("/api/payments/create-checkout-session", {
    method: "POST",
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({ message: "Não foi possível criar o checkout." }));
    throw new Error(data.message ?? "Erro ao iniciar pagamento.");
  }

  const data = (await response.json()) as { url: string };
  return data.url;
}

async function fetchInviteLink() {
  const response = await fetch("/api/social-club/invite");
  if (!response.ok) {
    const data = await response.json().catch(() => ({ message: "Não conseguimos obter o link." }));
    throw new Error(data.message ?? "Erro ao obter link.");
  }

  const data = (await response.json()) as { inviteUrl: string };
  return data.inviteUrl;
}

type JoinFlowProps = {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
  } | null;
  membershipActive: boolean;
};

export default function JoinFlow({ user, membershipActive }: JoinFlowProps) {
  const [loadingCheckout, setLoadingCheckout] = useState(false);
  const [inviteLink, setInviteLink] = useState<string | null>(null);
  const [inviteError, setInviteError] = useState<string | null>(null);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  if (!user) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-slate-200">
        <p className="text-sm uppercase tracking-[0.4em] text-primary-300">Área reservada</p>
        <h2 className="mt-4 text-3xl font-bold text-white">Só para membros</h2>
        <p className="mt-4 text-base text-slate-300">
          Cria a tua conta ou inicia sessão para veres as opções de pagamento e receberes o link privado do WhatsApp.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/login"
            className="rounded-full border border-primary-400 px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-primary-300 transition hover:bg-primary-400/10"
          >
            Já tenho conta
          </Link>
          <Link
            href="/registar"
            className="rounded-full bg-primary-400 px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-surface shadow-lg transition hover:bg-primary-300"
          >
            Criar conta
          </Link>
        </div>
      </div>
    );
  }

  async function handleCheckout() {
    setCheckoutError(null);
    setLoadingCheckout(true);
    try {
      const url = await createCheckoutSession();
      window.location.href = url;
    } catch (error) {
      setCheckoutError((error as Error).message);
    } finally {
      setLoadingCheckout(false);
    }
  }

  async function handleRevealLink() {
    setInviteError(null);
    try {
      const url = await fetchInviteLink();
      setInviteLink(url);
    } catch (error) {
      setInviteError((error as Error).message);
    }
  }

  if (!membershipActive) {
    return (
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="text-sm uppercase tracking-[0.4em] text-primary-300">Olá {user.name ?? user.email}</p>
        <h2 className="mt-4 text-3xl font-bold text-white">Ativa a tua subscrição</h2>
        <p className="mt-4 text-base text-slate-300">
          Acesso ao WhatsApp privado, convites exclusivos para sessões no estúdio e eventos mensais. O valor é debitado
          automaticamente todos os meses e podes cancelar quando quiseres.
        </p>
        {checkoutError ? <p className="mt-4 text-sm text-primary-300">{checkoutError}</p> : null}
        <button
          type="button"
          onClick={handleCheckout}
          disabled={loadingCheckout}
          className="mt-6 w-full rounded-full bg-primary-400 px-4 py-3 text-sm font-bold uppercase tracking-[0.3em] text-surface transition hover:bg-primary-300 disabled:opacity-60"
        >
          {loadingCheckout ? "A redirecionar..." : "Ativar Social Club"}
        </button>
        <p className="mt-3 text-center text-xs text-slate-400">
          O pagamento é processado de forma segura via Stripe.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-emerald-400/30 bg-emerald-500/5 p-8">
      <p className="text-sm uppercase tracking-[0.4em] text-emerald-300">Membro ativo</p>
      <h2 className="mt-4 text-3xl font-bold text-white">Bem-vindo ao Social Club</h2>
      <p className="mt-4 text-base text-slate-300">
        Mantemos o link do grupo privado escondido para evitar partilhas não autorizadas. Carrega no botão abaixo e vamos
        revelá-lo em segurança.
      </p>
      {inviteError ? <p className="mt-4 text-sm text-primary-300">{inviteError}</p> : null}
      <button
        type="button"
        onClick={handleRevealLink}
        className="mt-6 w-full rounded-full bg-white/90 px-4 py-3 text-sm font-bold uppercase tracking-[0.3em] text-surface transition hover:bg-white"
      >
        Mostrar link do WhatsApp
      </button>
      {inviteLink ? (
        <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-4 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-200">Link seguro</p>
          <a
            href={inviteLink}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block break-words text-lg font-semibold text-primary-200 underline"
          >
            Entrar no grupo
          </a>
        </div>
      ) : null}
    </div>
  );
}
