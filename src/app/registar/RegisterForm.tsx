"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

async function registerUser(name: string, email: string, password: string) {
  const response = await fetch("/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({ message: "Erro desconhecido" }));
    throw new Error(data.message ?? "Não foi possível criar a conta.");
  }
}

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      await registerUser(name, email, password);
      setSuccess("Conta criada. Vamos iniciar sessão automaticamente.");
      await signIn("credentials", { email, password, redirect: false });
      router.push("/social-club");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
        Nome completo
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-primary-300 focus:outline-none"
        />
      </label>
      <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
        Email
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-primary-300 focus:outline-none"
        />
      </label>
      <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
        Password
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          minLength={8}
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-primary-300 focus:outline-none"
        />
      </label>
      {error ? <p className="text-sm text-primary-300">{error}</p> : null}
      {success ? <p className="text-sm text-emerald-300">{success}</p> : null}
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-primary-400 px-4 py-3 text-sm font-bold uppercase tracking-[0.3em] text-surface transition hover:bg-primary-300 disabled:opacity-60"
      >
        {submitting ? "A registar..." : "Criar conta"}
      </button>
    </form>
  );
}
