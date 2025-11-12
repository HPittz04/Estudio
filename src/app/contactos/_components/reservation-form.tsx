"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

type ReservationFormState = {
  fullName: string;
  email: string;
  sessionType: string;
  preferredDate: string;
  message: string;
};

type SubmissionStatus = "idle" | "loading" | "success" | "error";

const INITIAL_FORM_STATE: ReservationFormState = {
  fullName: "",
  email: "",
  sessionType: "",
  preferredDate: "",
  message: "",
};

const SESSION_OPTIONS = [
  { value: "producao-musical", label: "Produção musical" },
  { value: "gravacao", label: "Gravação" },
  { value: "mistura", label: "Mistura" },
  { value: "masterizacao", label: "Masterização" },
  { value: "podcast", label: "Podcast" },
  { value: "outro", label: "Outro" },
];

export function ReservationForm() {
  const [formState, setFormState] = useState<ReservationFormState>({ ...INITIAL_FORM_STATE });
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const updateField = (field: keyof ReservationFormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormState((previous) => ({ ...previous, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/reservas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { message?: string } | null;
        throw new Error(payload?.message ?? "Não foi possível enviar o pedido. Tenta novamente mais tarde.");
      }

      setStatus("success");
      setFormState({ ...INITIAL_FORM_STATE });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro inesperado. Tenta novamente mais tarde.",
      );
    }
  };

  const isLoading = status === "loading";

  return (
    <div className="rounded-3xl border border-white/10 bg-surface/90 p-8 shadow-lg">
      <div className="mb-8 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-300">Reserva a tua sessão</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Vamos organizar tudo contigo</h2>
        <p className="text-sm text-slate-300">
          Preenche o formulário e partilha o tipo de sessão que procuras. Respondemos geralmente em menos de 24 horas úteis.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-300">Nome completo</span>
            <input
              type="text"
              required
              value={formState.fullName}
              onChange={updateField("fullName")}
              autoComplete="name"
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-black"
              placeholder="Como te devemos tratar?"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-300">Email</span>
            <input
              type="email"
              required
              value={formState.email}
              onChange={updateField("email")}
              autoComplete="email"
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-black"
              placeholder="onde devemos responder"
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-300">Tipo de sessão</span>
            <select
              required
              value={formState.sessionType}
              onChange={updateField("sessionType")}
              className="w-full appearance-none rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-black"
            >
              <option value="" disabled>
                Escolhe uma opção
              </option>
              {SESSION_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-300">Data preferencial</span>
            <input
              type="date"
              value={formState.preferredDate}
              onChange={updateField("preferredDate")}
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-black"
            />
          </label>
        </div>

        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-300">Mensagem</span>
          <textarea
            required
            value={formState.message}
            onChange={updateField("message")}
            rows={5}
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-black"
            placeholder="Partilha mais detalhes sobre o teu projeto, disponibilidade ou necessidades técnicas."
          />
        </label>

        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex w-full items-center justify-center rounded-full bg-primary-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-black transition hover:bg-primary-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? "A enviar…" : "Enviar pedido"}
        </button>
      </form>

      <div className="mt-6 space-y-2 text-sm">
        {status === "success" ? (
          <p className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-emerald-200" role="status">
            Obrigado! Recebemos o teu pedido e entraremos em contacto em breve.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-red-200" role="alert">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </div>
  );
}
