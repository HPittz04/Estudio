import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import JoinFlow from "./_components/JoinFlow";
import { authOptions } from "@/lib/authOptions";
import { getMembershipForUser } from "@/lib/membershipStore";

export const metadata: Metadata = {
  title: "Social Club • Comunidade exclusiva",
  description:
    "Acede a eventos privados, sessões mensais e ao grupo de WhatsApp reservado a membros com subscrição ativa.",
};

export default async function SocialClubPage() {
  const session = await getServerSession(authOptions);
  const membership = session?.user?.id ? await getMembershipForUser(session.user.id) : null;

  return (
    <section className="bg-texture py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-3xl bg-surface/80 px-6 py-12 text-white shadow-2xl shadow-black/40 lg:flex-row lg:gap-16 lg:px-10">
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-primary-300">Social Club</p>
          <h1 className="mt-4 text-4xl font-bold lg:text-5xl">Entrar no círculo privado do Estúdio 747</h1>
          <p className="mt-6 text-lg text-slate-300">
            O Social Club é onde partilhamos convites para listening sessions, eventos surpresa, masterclasses e o link
            oficial do nosso grupo privado de WhatsApp. Tudo fica protegido atrás de autenticação e pagamento para
            garantirmos uma comunidade segura.
          </p>
          <ul className="mt-8 space-y-4 text-base text-slate-200">
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary-300" aria-hidden />
              Acesso imediato ao grupo de WhatsApp após pagamento confirmado
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary-300" aria-hidden />
              Convites exclusivos para sessões ao vivo no estúdio
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-primary-300" aria-hidden />
              Cancelamento simples através da área reservada
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <JoinFlow user={session?.user ?? null} membershipActive={membership?.status === "active"} />
        </div>
      </div>
    </section>
  );
}
