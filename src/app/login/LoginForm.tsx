"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setSubmitting(false);

    if (result?.error) {
      setError("Credenciais inválidas. Tenta novamente.");
      return;
    }

    router.push("/social-club");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-full bg-primary-400 px-4 py-3 text-sm font-bold uppercase tracking-[0.3em] text-surface transition hover:bg-primary-300 disabled:opacity-60"
      >
        {submitting ? "A entrar..." : "Entrar"}
      </button>
      <p className="text-center text-sm text-slate-300">
        Ainda não tens conta? <Link href="/registar" className="text-primary-300 underline">Criar acesso</Link>
      </p>
    </form>
  );
}
