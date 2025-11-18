import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Entrar no Social Club",
  description: "Acede ao Social Club do Estúdio 747 para gerir a tua subscrição.",
};

export default function LoginPage() {
  return (
    <section className="bg-texture py-24">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 rounded-3xl bg-surface/70 px-6 py-12 text-white shadow-2xl shadow-black/40">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-primary-300">Social Club</p>
          <h1 className="mt-4 text-4xl font-bold">Entrar na área reservada</h1>
          <p className="mt-4 text-base text-slate-300">
            Usa as credenciais criadas durante o registo. Esta conta é independente de redes sociais para
            garantirmos que apenas membros ativos conseguem aceder ao link privado de WhatsApp.
          </p>
        </div>
        <LoginForm />
      </div>
    </section>
  );
}
