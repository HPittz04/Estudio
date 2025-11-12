"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaSoundcloud,
  FaSpotify,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=100077292452905",
    label: "Facebook do Estúdio 747",
    icon: FaFacebookF,
  },
  {
    href: "https://www.instagram.com/estudio.747/",
    label: "Instagram do Estúdio 747",
    icon: FaInstagram,
  },
  {
    href: "https://open.spotify.com/intl-pt/artist/5CbzHDeokBLcwzUSyoa140?si=ky9Ri4fmRzWeWks4ZLV4Zw",
    label: "Spotify do Estúdio 747",
    icon: FaSpotify,
  },
  {
    href: "https://x.com/micshyne",
    label: "Perfil no X do Estúdio 747",
    icon: FaX,
  },
  {
    href: "https://www.youtube.com/@MICSHYNE",
    label: "YouTube do Estúdio 747",
    icon: FaYoutube,
  },
];

export default function TopBar() {
  const [hidden, setHidden] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldHide = currentScrollY > lastScrollY && currentScrollY > 64;
      setHidden(shouldHide);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateHeights = () => {
      const height = barRef.current?.offsetHeight ?? 0;

      if (typeof document !== "undefined") {
        document.documentElement.style.setProperty("--topbar-height", `${height}px`);
        document.documentElement.style.setProperty(
          "--topbar-visible-height",
          hidden ? "0px" : `${height}px`,
        );
      }
    };

    updateHeights();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateHeights);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateHeights);
      }
    };
  }, [hidden]);

  return (
    <div
      ref={barRef}
      className={`fixed inset-x-0 top-0 z-[60] bg-surface/80 backdrop-blur-md border-b border-white/10 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs text-slate-100 sm:px-6 sm:text-sm">
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-semibold uppercase tracking-widest text-primary-200">
            Estúdio 747 • Som imersivo & produção musical
          </span>
          <a
            href="mailto:747estudio.rec@gmail.com"
            className="inline-flex items-center gap-1 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
            aria-label="Enviar email para 747estudio.rec@gmail.com"
          >
            <HiOutlineMail aria-hidden className="text-base" />
            <span className="hidden sm:inline">747estudio.rec@gmail.com</span>
            <span className="sm:hidden">Email</span>
          </a>
          <a
            href="tel:+351967862700"
            className="inline-flex items-center gap-1 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
            aria-label="Ligar para o estúdio"
          >
            <HiOutlinePhone aria-hidden className="text-base" />
            <span className="hidden sm:inline">+351 967 862 700</span>
            <span className="sm:hidden">Ligar</span>
          </a>
        </div>
        <div className="flex items-center gap-2" aria-label="Redes sociais do estúdio">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-white/40 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
            >
              <Icon aria-hidden />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
