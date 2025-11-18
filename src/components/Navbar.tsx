"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/quemsomos", label: "Quem somos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/social-club", label: "Social Club" },
  { href: "/contactos", label: "Contactos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isElevated, setIsElevated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsElevated(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      style={{ top: "var(--topbar-visible-height, 0px)" }}
      className={`sticky z-50 border-b border-white/10 bg-gradient-to-b from-surface/95 via-surface/90 to-surface/60 backdrop-blur-xl transition-shadow ${isElevated ? "shadow-lg shadow-black/40" : "shadow-none"}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-white sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Voltar ao início">
          <Image
            src="/logo-747.png"
            alt="Logótipo do Estúdio 747"
            width={132}
            height={48}
            className="h-12 w-auto drop-shadow-lg"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 ${
                  isActive
                    ? "text-white after:absolute after:-bottom-2 after:left-0 after:h-[3px] after:w-full after:bg-primary-300"
                    : "text-slate-200/80 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contactos"
            className="rounded-full bg-primary-400 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-surface shadow-lg transition hover:bg-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
          >
            Reservar sessão
          </Link>
        </nav>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <FaTimes aria-hidden /> : <FaBars aria-hidden />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={`md:hidden transform-gpu border-t border-white/10 bg-surface/95 text-white transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0"
        }`}
        aria-label="Navegação principal em dispositivos móveis"
      >
        <ul className="space-y-2 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em]">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`block rounded-full px-4 py-2 text-center transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 ${
                    isActive ? "bg-primary-400 text-surface" : "hover:bg-white/10"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/contactos"
              className="block rounded-full bg-primary-400 px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.3em] text-surface shadow-lg transition hover:bg-primary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200"
            >
              Reservar sessão
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
