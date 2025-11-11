"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SERVICE_SPACES = [
  {
    id: "gravacao",
    eyebrow: "Estúdio de gravação",
    title: "Aqui a tua verdade ganha voz.",
    description:
      "No Estúdio 747 tens equipamento profissional e acompanhamento técnico-artístico para despir filtros e chegar à gravação que imaginaste.",
    bullets: [
      "Gravação de voz, instrumentos, podcasts ou locuções",
      "Produção musical, arranjos e pré/pós-produção",
      "Mistura e masterização com atenção ao detalhe",
      "Acompanhamento contínuo ao longo do processo",
    ],
  },
  {
    id: "multidisciplinar",
    eyebrow: "Espaço multidisciplinar",
    title: "Estúdio B & Sala de ensaios para explorar ideias.",
    description:
      "Um espaço flexível que funciona como sala de ensaios, zona de produção ou refúgio de escrita, sempre com boa acústica e ambiente intimista.",
    bullets: [
      "Sala convertível para ensaios, produção, escrita ou workshops",
      "Boa acústica e ambiente intimista",
      "Horários flexíveis e uso por marcação",
    ],
  },
  {
    id: "cowork",
    eyebrow: "Cowork criativo",
    title: "Trabalha com foco, alma e boa energia.",
    description:
      "Secretárias individuais, Wi-Fi rápido e música ambiente para artistas, freelancers, estudantes e equipas criativas que procuram tranquilidade.",
    bullets: [
      "Secretárias individuais e Wi-Fi rápido",
      "Máquina de café sempre disponível e bar",
      "Espaço calmo com boa energia e música ambiente",
      "Acesso diário, semanal ou mensal",
    ],
  },
];

const PORTFOLIO = [
  { src: "/1.jpg", alt: "Detalhe da mesa de mistura analógica do Estúdio 747" },
  { src: "/2.jpg", alt: "Guitarrista em gravação dentro da sala de ensaios" },
  { src: "/3.jpg", alt: "Faders iluminados durante sessão de mistura" },
  { src: "/4.jpg", alt: "Microfone vintage preparado para gravação vocal" },
  { src: "/5.jpg", alt: "Baterista captado em tempo real" },
  { src: "/6.jpg", alt: "Produtor a ajustar parâmetros na régie" },
  { src: "/7.jpg", alt: "Artista em cabine vocal com acompanhamento técnico" },
  { src: "/8.jpg", alt: "Sessão colaborativa com equipa criativa" },
  { src: "/9.jpg", alt: "Close-up da consola analógica" },
  { src: "/10.jpg", alt: "Sintetizador com iluminação ambiente" },
  { src: "/11.jpg", alt: "DJ a preparar set durante gravação" },
];

export default function ServicosContent() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (selected === null) return;
      if (event.key === "Escape") {
        event.preventDefault();
        setSelected(null);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setSelected((prev) => (prev === null ? 0 : (prev + 1) % PORTFOLIO.length));
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSelected((prev) => (prev === null ? 0 : (prev - 1 + PORTFOLIO.length) % PORTFOLIO.length));
      }
    };

    if (selected !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selected]);

  return (
    <div className="flex-1">
      <section className="relative isolate overflow-hidden bg-hero-surface">
        <div className="absolute inset-0 bg-black/55" aria-hidden></div>
        <div className="relative mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300">Serviços & Espaços</p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Estúdio 747 — o sítio onde os egos ficam à porta.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-200 sm:text-lg">
            Fundado em 2021 para elevar a cultura no interior, criámos um espaço onde a criatividade, a verdade e o desenvolvimento artístico andam de mãos dadas — da gravação ao cowork.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-200 sm:text-base">
            Aqui, a música vem primeiro. Explora os nossos estúdios, agenda ensaios ou reserva o cowork criativo para fazer as tuas ideias descolar.
          </p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-16" aria-labelledby="espacos-estudio">
        <div className="absolute inset-0 bg-texture opacity-70" aria-hidden></div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <h2 id="espacos-estudio" className="text-center text-3xl font-bold text-white sm:text-4xl">
            Escolhe o ambiente certo para o teu projeto
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-slate-300">
            Reserva apenas o espaço de que precisas ou cria connosco um plano completo que inclua captação, produção, mistura e acompanhamento criativo.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {SERVICE_SPACES.map(({ id, eyebrow, title, description, bullets }) => (
              <article
                key={id}
                className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-surface/90 p-8 shadow-lg transition hover:border-primary-300/60 hover:shadow-glow"
                id={id}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300">{eyebrow}</p>
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <p className="text-sm text-slate-300">{description}</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary-300" aria-hidden></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="cowork-callout">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 px-6 py-12 text-center shadow-lg sm:px-10">
          <h2 id="cowork-callout" className="text-3xl font-bold text-white sm:text-4xl">
            Entra no 747 e vê a tua evolução descolar.
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-200 sm:text-base">
            Artistas, freelancers e sonhadores encontram aqui um ponto de encontro para criar sem egos e com total foco na música. Diz-nos o que precisas e construímos contigo a experiência certa: uma sessão de gravação, um retiro criativo ou a tua nova base de trabalho.
          </p>
        </div>
      </section>

      <section className="py-16" aria-labelledby="portfolio-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300">Portfólio</p>
              <h2 id="portfolio-heading" className="text-3xl font-bold text-white sm:text-4xl">
                Histórias captadas no Estúdio 747.
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-slate-300">
                Abre qualquer fotografia para visualizar em ecrã completo. Usa ESC para fechar e as setas para navegar entre os momentos.
              </p>
            </div>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO.map(({ src, alt }, index) => (
              <li key={src}>
                <button
                  type="button"
                  onClick={() => setSelected(index)}
                  className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg transition hover:border-primary-300/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
                >
                  <span className="sr-only">Abrir {alt}</span>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 1280px) 400px, (min-width: 768px) 45vw, 90vw"
                      loading="lazy"
                    />
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {selected !== null && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-surface/95 p-6 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 id="portfolio-modal-title" className="sr-only">
              Visualização ampliada do portfólio
            </h3>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
              aria-label="Fechar portfólio"
            >
              ×
            </button>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={PORTFOLIO[selected].src}
                alt={PORTFOLIO[selected].alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 70vw, 90vw"
                priority
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  setSelected((prev) =>
                    prev === null ? 0 : (prev - 1 + PORTFOLIO.length) % PORTFOLIO.length,
                  );
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
              >
                <span aria-hidden>←</span>
                <span>Anterior</span>
              </button>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                {(selected ?? 0) + 1} / {PORTFOLIO.length}
              </span>
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  setSelected((prev) =>
                    prev === null ? 0 : (prev + 1) % PORTFOLIO.length,
                  );
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
              >
                <span>Seguinte</span>
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
