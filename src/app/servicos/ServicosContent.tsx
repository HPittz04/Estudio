"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SERVICES = [
  {
    title: "Pré-produção & direção artística",
    items: [
      "Sessões de discovery para alinhar referências e objetivos",
      "Arranjos, beatmaking e seleção de músicos e parceiros",
      "Planeamento de cronograma, orçamento e entregáveis",
    ],
  },
  {
    title: "Gravação e sessões híbridas",
    items: [
      "Cabines tratadas acusticamente e microfones premium",
      "Captação multicanal para voz, bandas e instrumentos solistas",
      "Sessões remotas com streaming de áudio em alta resolução",
    ],
  },
  {
    title: "Mistura, master e som imersivo",
    items: [
      "Mixagem híbrida com hardware analógico e controlo digital",
      "Masters otimizados para Spotify, YouTube, Apple Music e rádios",
      "Versões binaurais e entregas Dolby Atmos Ready quando necessário",
    ],
  },
  {
    title: "Conteúdo e ativações",
    items: [
      "Produção de podcasts, spots e voice-overs multilingue",
      "Live sessions, videocasts e making of com equipa de vídeo parceira",
      "Pacotes de conteúdo social e consultoria de lançamento",
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
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300">Serviços</p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Soluções integradas para lançamentos com identidade.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-200 sm:text-lg">
            Combinamos produção musical, engenharia de som e estratégia de conteúdo para que cada single, EP, álbum ou campanha
            saia com a qualidade que imaginas.
          </p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-16" aria-labelledby="lista-servicos">
        <div className="absolute inset-0 bg-texture opacity-70" aria-hidden></div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <h2 id="lista-servicos" className="text-center text-3xl font-bold text-white sm:text-4xl">
            O nosso fluxo de trabalho
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-slate-300">
            Escolhe as etapas que precisas ou constrói connosco um pacote à medida do teu calendário e orçamento.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {SERVICES.map(({ title, items }) => (
              <article
                key={title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-surface/90 p-8 shadow-lg transition hover:border-primary-300/60 hover:shadow-glow"
              >
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  {items.map((item) => (
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
