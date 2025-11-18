"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function PaymentConfirmation() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { status } = useSession();
  const [message, setMessage] = useState<string>("A confirmar pagamento...");
  const [error, setError] = useState<string | null>(null);

  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    async function confirm() {
      if (!sessionId || status !== "authenticated") {
        return;
      }

      try {
        const response = await fetch("/api/payments/confirm", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sessionId }),
        });

        if (!response.ok) {
          const data = await response.json().catch(() => ({ message: "Erro ao confirmar pagamento" }));
          throw new Error(data.message);
        }

        setMessage("Pagamento confirmado. Bem-vindo ao Social Club!");
        setError(null);
      } catch (err) {
        setError((err as Error).message);
      }
    }

    confirm();
  }, [sessionId, status]);

  useEffect(() => {
    if (status === "unauthenticated") {
      setError("Inicia sessão para concluíres o processo.");
    }
  }, [status]);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-slate-200">
      <p className="text-sm uppercase tracking-[0.4em] text-primary-300">Checkout Stripe</p>
      <h1 className="mt-4 text-3xl font-bold text-white">Estado do pagamento</h1>
      {sessionId ? (
        <p className="mt-4 text-sm text-slate-300">Referência: {sessionId}</p>
      ) : (
        <p className="mt-4 text-sm text-primary-300">Não recebemos o identificador da sessão.</p>
      )}
      {error ? <p className="mt-4 text-primary-200">{error}</p> : <p className="mt-4 text-slate-200">{message}</p>}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={() => router.push("/social-club")}
          className="rounded-full bg-primary-400 px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-surface shadow-lg transition hover:bg-primary-300"
        >
          Voltar ao Social Club
        </button>
        <Link
          href="/"
          className="rounded-full border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.3em] text-white transition hover:bg-white/10"
        >
          Explorar site
        </Link>
      </div>
    </div>
  );
}
