import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactos Estúdio 747",
  description:
    "Marca a tua sessão no Estúdio 747. Disponível para produção musical, som imersivo, podcasts e conteúdos comerciais em Vendas Novas ou remotamente.",
  alternates: {
    canonical: "/contactos",
  },
  openGraph: {
    title: "Fala com o Estúdio 747",
    description:
      "Contacta-nos por email ou telefone para agendar produção musical, gravação, mistura, masterização ou criação de conteúdos.",
    url: "/contactos",
  },
};

const CONTACT_METHODS = [
  {
    label: "E-mail",
    values: ["747estudio.rec@gmail.com", "soro.music.geral@gmail.com"],
    hrefPrefix: "mailto:",
  },
  {
    label: "Telefone",
    values: ["+351 967 862 700", "+351 962 404 814"],
    hrefPrefix: "tel:",
  },
];

export default function Contactos() {
  return (
    <div className="flex-1">
      <section className="relative isolate overflow-hidden bg-hero-surface">
        <div className="absolute inset-0 bg-black/55" aria-hidden></div>
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300">Contactos</p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Fala connosco!</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            Estamos prontos para te ajudar a dar o próximo passo no teu projeto. Escolhe o canal de contacto preferido ou agenda
            uma visita presencial ou remota.
          </p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-16" aria-labelledby="contactos-diretos">
        <div className="absolute inset-0 bg-texture opacity-70" aria-hidden></div>
        <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 sm:px-6 lg:flex-row">
          <div className="flex-1 space-y-8 rounded-3xl border border-white/10 bg-surface/90 p-8 shadow-lg">
            <div>
              <h2 id="contactos-diretos" className="text-3xl font-bold text-white sm:text-4xl">
                Linhas diretas
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Preferes email, chamada ou mensagem? Respondemos geralmente em menos de 24 horas úteis.
              </p>
            </div>
            <div className="space-y-6">
              {CONTACT_METHODS.map(({ label, values, hrefPrefix }) => (
                <div key={label}>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-300">{label}</h3>
                  <ul className="mt-2 space-y-2 text-base text-slate-200">
                    {values.map((value) => (
                      <li key={value}>
                        <a
                          href={`${hrefPrefix}${value.replace(/\s+/g, "")}`}
                          className="rounded-full px-3 py-1 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
                        >
                          {value}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="font-semibold uppercase tracking-[0.3em] text-primary-300">Morada</p>
              <p>Rua António Sérgio, 14 — Vendas Novas, Portugal</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Visitas sob marcação prévia.</p>
            </div>
          </div>
          <div className="flex-1 overflow-hidden rounded-3xl border border-white/10 bg-surface/90 shadow-lg">
            <iframe
              title="Localização do Estúdio 747"
              className="h-[420px] w-full"
              src="https://maps.google.com/maps?q=estudio747+Vendas+Novas&output=embed"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
