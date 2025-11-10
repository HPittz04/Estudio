import Image from "next/image";
import Link from "next/link";

const VALUES = [
  {
    title: "Mentoria artística",
    description:
      "Acompanhamos cada artista antes, durante e depois da gravação para garantir que a visão criativa chega intacta ao público.",
  },
  {
    title: "Colaboração verdadeira",
    description:
      "Trabalhamos como uma extensão da tua equipa, criando um ambiente seguro para experimentar e arriscar.",
  },
  {
    title: "Compromisso com a qualidade",
    description:
      "Do setup de microfones ao mastering final, cada detalhe é afinado para que o resultado seja competitivo.",
  },
];

const TEAM = [
  {
    name: "Micshyne",
    role: "Produtor executivo & engenheiro de som",
    description:
      "Mais de 15 anos de experiência em produção musical, com créditos em projetos nacionais e internacionais.",
    portrait: "/7.jpg",
  },
  {
    name: "Soro Music",
    role: "Direção criativa & vocal coaching",
    description:
      "Artista, letrista e orientador vocal que garante performances autênticas e memoráveis.",
    portrait: "/8.jpg",
  },
];

export default function QuemSomos() {
  return (
    <div className="flex-1">
      <section className="relative isolate overflow-hidden bg-team-collage">
        <div className="absolute inset-0 bg-black/60" aria-hidden></div>
        <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-24 text-center sm:px-6 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300">Quem somos</p>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Um estúdio criado por artistas, para artistas.
          </h1>
          <p className="mx-auto max-w-3xl text-base text-slate-200 sm:text-lg">
            O Estúdio 747 é um espaço de criação sonora em Vendas Novas. Produção, captação, edição e pós-produção convivem com
            uma sala de ensaios pronta para acolher bandas, solistas e criativos de todas as áreas.
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center rounded-full bg-primary-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-surface shadow-glow transition hover:bg-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
            >
              Explorar serviços
            </Link>
            <Link
              href="/contactos"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
            >
              Falar connosco
            </Link>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-16" aria-labelledby="valores-estudio">
        <div className="absolute inset-0 bg-texture opacity-70" aria-hidden></div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <h2 id="valores-estudio" className="text-center text-3xl font-bold text-white sm:text-4xl">
            Manifesto do Estúdio 747
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-slate-300">
            Mais do que um estúdio, somos uma comunidade que celebra diversidade e respeito. Cada projeto é tratado com rigor e
            uma dose saudável de ousadia.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {VALUES.map(({ title, description }) => (
              <article
                key={title}
                className="rounded-3xl border border-white/10 bg-surface/90 p-8 shadow-lg transition hover:border-primary-300/60 hover:shadow-glow"
              >
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm text-slate-300">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="equipa-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300">Equipa</p>
              <h2 id="equipa-heading" className="text-3xl font-bold text-white sm:text-4xl">
                Pessoas que vivem para o som.
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-slate-300">
                Conhece os profissionais que vão estar a teu lado em cada take.
              </p>
            </div>
            <Link
              href="/contactos"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
            >
              Agendar visita guiada
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {TEAM.map(({ name, role, description, portrait }) => (
              <article
                key={name}
                className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-surface/90 shadow-lg transition hover:border-primary-300/60 hover:shadow-glow"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={portrait}
                    alt={`Retrato de ${name}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 480px, (min-width: 768px) 50vw, 90vw"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-8">
                  <h3 className="text-2xl font-semibold text-white">{name}</h3>
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary-300">{role}</p>
                  <p className="text-sm text-slate-300">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
