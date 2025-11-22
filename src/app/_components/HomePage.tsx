"use client";

import { motion, useReducedMotion, type Transition, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const FEATURE_CARDS = [
  {
    title: "Estúdio de gravação profissional",
    description:
      "Equipamento de topo, acompanhamento técnico-artístico e produção completa para dar voz às tuas ideias, da primeira take à master final.",
  },
  {
    title: "Espaço multidisciplinar flexível",
    description:
      "O Estúdio B adapta-se a ensaios, escrita, produção ou workshops, com acústica cuidada e atmosfera intimista para explorar novas ideias.",
  },
  {
    title: "Cowork criativo e acolhedor",
    description:
      "Estações individuais, Wi-Fi rápido e ambiente descontraído para artistas, freelancers e estudantes que procuram foco com boa energia.",
  },
];

const SERVICE_SECTIONS = [
  {
    id: "gravacao",
    eyebrow: "Estúdio de gravação",
    title: "Autenticidade com equipamento profissional.",
    description:
      "No Estúdio 747 encontras a estrutura certa para despir filtros, gravar com verdade e levar cada canção até ao detalhe final.",
    bullets: [
      "Gravação de voz, instrumentos, podcasts ou locuções",
      "Produção musical, arranjos e pré/pós-produção",
      "Mistura e masterização com atenção ao detalhe",
      "Acompanhamento técnico e artístico ao longo do processo",
      "Equipamento profissional, ambiente descontraído e criativo",
    ],
  },
  {
    id: "multidisciplinar",
    eyebrow: "Espaço multidisciplinar",
    title: "Estúdio B & Sala de Ensaios prontos para se moldar a ti.",
    description:
      "Um refúgio para experimentar e colaborar — ideal para ensaios, composição, produção ou encontros criativos que exigem flexibilidade.",
    bullets: [
      "Sala convertível para ensaios, produção, escrita ou workshops",
      "Boa acústica e ambiente intimista",
      "Horários flexíveis e uso por marcação",
    ],
  },
  {
    id: "cowork",
    eyebrow: "Cowork criativo",
    title: "Trabalha com alma, foco e boa companhia.",
    description:
      "Um espaço tranquilo para pousar o portátil, respirar fundo e avançar com projetos num ambiente estimulante e humano.",
    bullets: [
      "Secretárias individuais e Wi-Fi rápido",
      "Máquina de café sempre disponível",
      "Bar e música ambiente para manter o fluxo",
      "Acesso diário, semanal ou mensal",
    ],
  },
];

const GALLERY_IMAGES = [
  { src: "/mic.jpg", alt: "Microfone condensador iluminado na cabine vocal do Estúdio 747" },
  { src: "/interface.jpg", alt: "Interface de áudio e controlador central na régie do Estúdio 747" },
  { src: "/speaker.jpg", alt: "Monitores de referência e tratamento acústico na sala principal" },
  { src: "/mic2.jpg", alt: "Microfone preparado para captação de voz com iluminação ambiente" },
  { src: "/headphones.jpg", alt: "Auscultadores profissionais pousados sobre teclado MIDI" },
  { src: "/fotocapa-web.jpg", alt: "Artista em gravação acompanhada pela equipa do Estúdio 747" },
];

const MotionLink = motion(Link);
const PRIMARY_EASE = [0.22, 1, 0.36, 1] as const;
const STANDARD_EASE = [0.4, 0, 0.2, 1] as const;

export default function HomePage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const heroTextVariants = useMemo<Variants>(
    () => ({
      hidden: {
        opacity: 0,
        y: shouldReduceMotion ? 0 : 28,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.8,
          ease: PRIMARY_EASE,
        },
      },
    }),
    [shouldReduceMotion],
  );

  const heroMediaVariants = useMemo<Variants>(
    () => ({
      hidden: {
        opacity: 0,
        scale: shouldReduceMotion ? 1 : 0.96,
      },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.8,
          ease: PRIMARY_EASE,
          delay: shouldReduceMotion ? 0 : 0.1,
        },
      },
    }),
    [shouldReduceMotion],
  );

  const cardTransition = useMemo<Transition>(
    () => ({
      duration: shouldReduceMotion ? 0 : 0.6,
      ease: PRIMARY_EASE,
    }),
    [shouldReduceMotion],
  );

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
          <motion.div
            className="max-w-2xl space-y-6 text-center lg:text-left"
            variants={heroTextVariants}
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate={shouldReduceMotion ? undefined : "visible"}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-primary-300">Cultura criativa no interior</p>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Estúdio 747 — o sítio onde os egos ficam à porta.
            </h1>
            <p className="text-base text-slate-200 sm:text-lg">
              Fundado em 2021, o Estúdio 747 nasceu para elevar a cultura no interior e criar um espaço onde criatividade,
              verdade e desenvolvimento artístico andam de mãos dadas.
            </p>
            <p className="text-base text-slate-200 sm:text-lg">
              Aqui, a música vem sempre primeiro. Somos ponto de encontro para artistas, freelancers e sonhadores que
              procuram liberdade pessoal, espiritual e coletiva através da arte.
            </p>
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-left text-sm text-slate-200 shadow-lg">
              <p className="font-semibold uppercase tracking-[0.3em] text-primary-200">Disponibilizamos</p>
              <ul className="mt-4 space-y-2">
                <li className="flex gap-2">
                  <span>Estúdio de gravação profissional</span>
                </li>
                <li className="flex gap-2">
                  <span>Espaço multidisciplinar — Estúdio B / Sala de ensaios</span>
                </li>
                <li className="flex gap-2">
                  <span>Cowork acolhedor com foco e alma</span>
                </li>
              </ul>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-400">Entra no 747 e vê a tua evolução descolar.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <MotionLink
                href="/contactos"
                className="inline-flex items-center justify-center rounded-full bg-primary-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-surface shadow-glow transition hover:bg-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                whileFocus={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                Marcar sessão
              </MotionLink>
              <MotionLink
                href="/servicos"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
                whileFocus={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                Ver serviços
              </MotionLink>
            </div>
          </motion.div>
          <motion.div
            className="relative grid flex-1 gap-4 sm:grid-cols-2"
            variants={heroMediaVariants}
            initial={shouldReduceMotion ? undefined : "hidden"}
            animate={shouldReduceMotion ? undefined : "visible"}
          >
            {GALLERY_IMAGES.slice(0, 4).map(({ src, alt }, index) => (
              <motion.button
                key={src}
                type="button"
                onClick={() => openModal(index)}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 text-left shadow-lg transition hover:border-primary-300/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                whileFocus={shouldReduceMotion ? undefined : { y: -2 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: STANDARD_EASE }}
              >
                <span className="sr-only">Ampliar fotografia do estúdio</span>
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1280px) 240px, (min-width: 480px) 45vw, 80vw"
                    priority={index === 0}
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-slate-200">{alt}</p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-16" aria-labelledby="valores-heading">
        <div className="absolute inset-0 bg-texture opacity-80" aria-hidden></div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300">O que acontece no 747</p>
            <h2 id="valores-heading" className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Um hub criativo para gravar, ensaiar e trabalhar com propósito.
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Do primeiro take ao lançamento, tens equipa dedicada, tecnologia preparada e espaços pensados para alimentar a tua visão artística.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {FEATURE_CARDS.map(({ title, description }, index) => (
              <motion.article
                key={title}
                className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-surface/90 p-8 shadow-lg transition hover:border-primary-300/60 hover:shadow-glow"
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 28 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...cardTransition, delay: shouldReduceMotion ? 0 : index * 0.1 }}
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{description}</p>
                </div>
                <span className="mt-6 h-1 w-16 rounded-full bg-primary-300" aria-hidden></span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-surface/80 py-16"
        aria-labelledby="servicos-detalhes"
      >
        <div className="absolute inset-0 bg-texture opacity-60" aria-hidden></div>
        <div className="relative mx-auto max-w-5xl space-y-12 px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300">Serviços 747</p>
            <h2 id="servicos-detalhes" className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Espaços pensados para criar, experimentar e crescer.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Do estúdio principal ao cowork, cada sala foi desenhada para te dar foco, conforto e a liberdade de levar o teu
              projeto mais longe.
            </p>
          </div>
          {SERVICE_SECTIONS.map(({ id, eyebrow, title, description, bullets }) => (
            <article
              key={id}
              id={id}
              aria-labelledby={`${id}-titulo`}
              className="rounded-3xl border border-white/10 bg-surface/95 p-8 shadow-xl backdrop-blur"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300">{eyebrow}</p>
              <h3 id={`${id}-titulo`} className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                {title}
              </h3>
              <p className="mt-3 text-sm text-slate-300">{description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-200">
                {bullets.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-1 text-primary-200">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16" aria-labelledby="galeria-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300">Galeria</p>
              <h2 id="galeria-heading" className="text-3xl font-bold text-white sm:text-4xl">
                Entra nos bastidores do Estúdio 747.
              </h2>
              <p className="mt-2 max-w-3xl text-sm text-slate-300">
                Clica em qualquer imagem para ampliar. Utiliza as setas do teclado para navegar e a tecla ESC para regressar à grelha.
              </p>
            </div>
            <MotionLink
              href="/quemsomos"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.04 }}
              whileFocus={shouldReduceMotion ? undefined : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              Conhecer a equipa
            </MotionLink>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERY_IMAGES.map(({ src, alt }, index) => (
              <li key={src}>
                <motion.button
                  type="button"
                  onClick={() => openModal(index)}
                  className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg transition hover:border-primary-300/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
                  whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                  whileFocus={shouldReduceMotion ? undefined : { y: -4 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: STANDARD_EASE }}
                >
                  <span className="sr-only">Abrir {alt}</span>
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "4 / 3" }}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 1280px) 400px, (min-width: 768px) 45vw, 90vw"
                      loading="lazy"
                    />
                  </div>
                </motion.button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-16" aria-labelledby="video-heading">
        <div className="absolute inset-0 bg-texture opacity-70" aria-hidden></div>
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-300">Sessão 747</p>
          <h2 id="video-heading" className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Vê como transformamos ideias em camadas de som.
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-slate-300">
            Seguimos o teu projeto da primeira demo à peça final, com acompanhamento diário da equipa técnica e criativa.
          </p>
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
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: "4 / 3" }}
            >
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
