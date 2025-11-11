import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quem somos — Laboratório criativo Estúdio 747",
  description:
    "Fundado em 2021, o Estúdio 747 é um laboratório criativo em Vendas Novas onde a música vem primeiro e os egos ficam à porta.",
  alternates: {
    canonical: "/quemsomos",
  },
  openGraph: {
    title: "Equipa Estúdio 747",
    description:
      "Desde 2021 que a equipa do Estúdio 747 promove produção musical, comunidade e desenvolvimento artístico no interior.",
    url: "/quemsomos",
  },
};

const VALUES = [
  {
    title: "A música vem sempre primeiro",
    description:
      "Cada decisão criativa é tomada ao serviço da canção, com mentoria contínua desde a primeira maqueta até ao lançamento final.",
  },
  {
    title: "Egos ficam à porta",
    description:
      "Cultivamos um ambiente de respeito e confiança onde artistas de diferentes estilos encontram espaço para arriscar sem julgamentos.",
  },
  {
    title: "Liberdade criativa partilhada",
    description:
      "Acreditamos na criatividade como ferramenta de liberdade pessoal, espiritual e coletiva, potenciando colaborações que elevam toda a comunidade.",
  },
];

const SPACE_HIGHLIGHTS = [
  {
    title: "Estúdio de gravação profissional",
    description:
      "Equipado para dar voz às tuas ideias com produção musical, arranjos, captação, mistura e masterização acompanhadas de perto.",
  },
  {
    title: "Estúdio B / Sala de ensaios",
    description:
      "Um espaço multidisciplinar que se adapta a ensaios, produção, escrita ou workshops, sempre com boa acústica e marcações flexíveis.",
  },
  {
    title: "Cowork criativo",
    description:
      "Secretárias individuais, Wi-Fi rápido, café e boa energia para artistas, freelancers e estudantes que procuram foco e comunidade.",
  },
];

const TEAM = [
  {
    name: "Micshyne",
    role: "Produtor executivo & engenheiro de som",
    description:
      "Mais de 15 anos de produção musical, sound design e engenharia de mistura para artistas independentes e marcas internacionais.",
    portrait: "/7.jpg",
  },
  {
    name: "Soro Music",
    role: "Direção criativa & vocal coaching",
    description:
      "Artista, letrista e vocal coach que conduz sessões de interpretação, escrita e storytelling áudio para lançar músicas e campanhas com identidade.",
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
            O sítio onde a criatividade e a verdade andam de mãos dadas.
          </h1>
          <p className="mx-auto max-w-3xl text-base text-slate-200 sm:text-lg">
            Fundado em 2021, o Estúdio 747 nasceu para elevar a cultura no interior e provar que a música pode ser um motor de liberdade pessoal, espiritual e coletiva.
          </p>
          <p className="mx-auto max-w-3xl text-base text-slate-200 sm:text-lg">
            Aqui, os egos ficam à porta. Somos um ponto de encontro para artistas, freelancers e sonhadores que procuram um ambiente seguro para experimentar, crescer e lançar projetos com identidade.
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
            Mais do que um estúdio, somos um ponto de encontro para artistas, freelancers e sonhadores. Aqui celebramos a autenticidade e acreditamos que a criatividade é uma ferramenta de liberdade pessoal, espiritual e coletiva.
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

      <section className="py-16" aria-labelledby="espacos-747">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 id="espacos-747" className="text-center text-3xl font-bold text-white sm:text-4xl">
            Um ecossistema criativo ao teu dispor
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-slate-300">
            Do primeiro take à pós-produção ou à rotina diária de trabalho, tens três espaços pensados para apoiar cada fase da tua jornada artística.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {SPACE_HIGHLIGHTS.map(({ title, description }) => (
              <article
                key={title}
                className="rounded-3xl border border-white/10 bg-surface/90 p-8 text-left shadow-lg transition hover:border-primary-300/60 hover:shadow-glow"
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
