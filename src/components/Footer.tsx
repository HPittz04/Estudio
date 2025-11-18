import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const NAV_ITEMS = [
  { href: "/", label: "Início" },
  { href: "/quemsomos", label: "Quem somos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contactos", label: "Contactos" },
];

const SOCIALS = [
  {
    href: "https://www.facebook.com/profile.php?id=100077292452905",
    label: "Facebook",
    icon: FaFacebookF,
  },
  {
    href: "https://www.instagram.com/estudio.747/",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://open.spotify.com/intl-pt/artist/5CbzHDeokBLcwzUSyoa140?si=ky9Ri4fmRzWeWks4ZLV4Zw",
    label: "Spotify",
    icon: FaSpotify,
  },
  {
    href: "https://x.com/micshyne",
    label: "X (antigo Twitter)",
    icon: FaX,
  },
  {
    href: "https://www.youtube.com/@MICSHYNE",
    label: "YouTube",
    icon: FaYoutube,
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface/95 text-slate-100" aria-labelledby="footer-heading">
      <div className="bg-texture border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 md:grid-cols-4 sm:px-6">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Início do Estúdio 747">
              <Image
                src="/logo-747.png"
                alt="Logótipo Estúdio 747"
                width={160}
                height={60}
                className="h-14 w-auto drop-shadow"
              />
            </Link>
            <p className="text-sm text-slate-300">
              Produção musical, som imersivo, podcasts e conteúdos para marcas a partir de uma casa criativa em Vendas Novas.
            </p>
          </div>
          <nav aria-label="Mapa do site" className="space-y-3">
            <h2 id="footer-heading" className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">
              Navegação
            </h2>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-300" aria-hidden></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">Contactos</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:747estudio.rec@gmail.com"
                  className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                >
                  747estudio.rec@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:soro.music.geral@gmail.com"
                  className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                >
                  soro.music.geral@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+351967862700"
                  className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                >
                  +351 967 862 700
                </a>
              </li>
              <li>
                <a
                  href="tel:+351962404814"
                  className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                >
                  +351 962 404 814
                </a>
              </li>
              <li className="text-sm text-slate-300">
                Rua António Sérgio, 14<br />Vendas Novas, Portugal
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-200">Segue-nos</h2>
            <div className="flex flex-wrap items-center gap-2">
              {SOCIALS.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:border-white/30 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
                >
                  <Icon aria-hidden />
                </Link>
              ))}
            </div>
            <p className="text-xs text-slate-400">
              Horário sob marcação • Espaço inclusivo e acessível a todos os artistas
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 bg-black/30">
          <p className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-slate-400 sm:px-6">
            Estúdio 747 © {new Date().getFullYear()} • Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
