"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const FEATURE_CARDS = [
  {
    title: "Produção completa",
    description:
      "Planeamento, captação, edição e pós-produção com equipa dedicada a cada fase do teu projeto sonoro.",
  },
  {
    title: "Tecnologia de referência",
    description:
      "Equipamentos profissionais, sala tratada acusticamente e workflows híbridos entre analógico e digital.",
  },
  {
    title: "Acompanhamento humano",
    description:
      "Mentoria artística, direção vocal e apoio criativo para tirares o máximo da tua sessão.",
  },
];

const GALLERY_IMAGES = [
  { src: "/mic.jpg", alt: "Microfone iluminado em estúdio" },
  { src: "/interface.jpg", alt: "Interface de áudio e computador" },
  { src: "/speaker.jpg", alt: "Monitores de referência do estúdio" },
  { src: "/mic2.jpg", alt: "Microfone condensador preparado para gravação" },
  { src: "/headphones.jpg", alt: "Auscultadores profissionais sobre teclado" },
  { src: "/fotocapa-web.jpg", alt: "Artista a gravar voz no Estúdio 747" },
];

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (event.key === "Escape") {
        event.preventDefault();
        setSelectedIndex(null);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % GALLERY_IMAGES.length));
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        setSelectedIndex((prev) => (prev === null ? 0 : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
      }
    };

    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex]);

  const openModal = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  const showPrev = () =>
    setSelectedIndex((prev) => (prev === null ? 0 : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  const showNext = () => setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % GALLERY_IMAGES.length));

  return (
    <div className="flex-1">
      <section className="relative isolate overflow-hidden bg-hero-surface">
        <div className="absolute inset-0 bg-black/50" aria-hidden></div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24 pt-24 sm:px-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-6 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-primary-300">Estúdio 747</p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Produção áudio imersiva para artistas que querem soar a futuro.
            </h1>
            <p className="text-base text-slate-200 sm:text-lg">
              Da pré-produção à masterização, abrimos as portas de um espaço pensado para a criatividade, com mentoria dedicada e
              tecnologia de ponta.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contactos"
                className="inline-flex items-center justify-center rounded-full bg-primary-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-surface shadow-glow transition hover:bg-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
              >
                Marcar sessão
              </Link>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
              >
                Ver serviços
              </Link>
            </div>
          </div>
          <div className="relative grid flex-1 gap-4 sm:grid-cols-2">
            {GALLERY_IMAGES.slice(0, 4).map(({ src, alt }, index) => (
              <button
                key={src}
                type="button"
                onClick={() => openModal(index)}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 text-left shadow-lg transition hover:border-primary-300/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
              >
                <span className="sr-only">Ampliar fotografia do estúdio</span>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 240px, (min-width: 640px) 45vw, 80vw"
                    priority={index === 0}
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-slate-200">{alt}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-16" aria-labelledby="valores-heading">
        <div className="absolute inset-0 bg-texture opacity-80" aria-hidden></div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300">Experiência 747</p>
            <h2 id="valores-heading" className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Cada sessão é desenhada à medida das tuas ideias.
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Unimos sensibilidade artística e conhecimento técnico para transformar demos em lançamentos prontos para qualquer
              plataforma.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {FEATURE_CARDS.map(({ title, description }) => (
              <article
                key={title}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-surface/90 p-8 shadow-lg transition hover:border-primary-300/60 hover:shadow-glow"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{description}</p>
                </div>
                <span className="mt-6 h-1 w-16 rounded-full bg-primary-300" aria-hidden></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="galeria-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300">Galeria</p>
              <h2 id="galeria-heading" className="text-3xl font-bold text-white sm:text-4xl">
                Espreita o ambiente do Estúdio 747.
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-slate-300">
                Clique em qualquer imagem para ver em ecrã completo. Utiliza as setas do teclado para navegar e a tecla ESC para
                sair.
              </p>
            </div>
            <Link
              href="/quemsomos"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
            >
              Conhecer a equipa
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_IMAGES.map(({ src, alt }, index) => (
              <li key={src}>
                <button
                  type="button"
                  onClick={() => openModal(index)}
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

      <section className="relative isolate overflow-hidden py-16" aria-labelledby="video-heading">
        <div className="absolute inset-0 bg-texture opacity-70" aria-hidden></div>
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300">Watch</p>
          <h2 id="video-heading" className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Sente a energia do estúdio em ação.
          </h2>
          <div className="mt-8 aspect-video w-full overflow-hidden rounded-3xl border border-white/10 shadow-xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/eAMHDVh7h5M?si=T8ZeCYix8DDDUh_P"
              title="Vídeo de apresentação do Estúdio 747"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-4"
          onClick={closeModal}
          role="presentation"
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-surface/95 p-6 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="galeria-modal-titulo"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 id="galeria-modal-titulo" className="sr-only">
              Visualização ampliada da galeria
            </h3>
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
              aria-label="Fechar galeria"
            >
              ×
            </button>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={GALLERY_IMAGES[selectedIndex].src}
                alt={GALLERY_IMAGES[selectedIndex].alt}
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
                  showPrev();
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
              >
                <span aria-hidden>←</span>
                <span>Anterior</span>
              </button>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                {selectedIndex + 1} / {GALLERY_IMAGES.length}
              </span>
              <button
                type="button"
                onClick={(event) => {
                  event.preventDefault();
                  showNext();
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
