import type { Metadata } from "next";
import RegisterForm from "./RegisterForm";

export const metadata: Metadata = {
  title: "Criar conta Social Club",
  description: "Regista os teus dados para subscrever o Social Club do Estúdio 747.",
};

export default function RegisterPage() {
  return (
    <section className="bg-texture py-24">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 rounded-3xl bg-surface/70 px-6 py-12 text-white shadow-2xl shadow-black/40">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-primary-300">Social Club</p>
          <h1 className="mt-4 text-4xl font-bold">Criar conta</h1>
          <p className="mt-4 text-base text-slate-300">
            Precisamos destes dados para associar os pagamentos à tua subscrição. Vais receber acesso imediato após o
            pagamento ser confirmado.
          </p>
        </div>
        <RegisterForm />
      </div>
    </section>
  );
}
