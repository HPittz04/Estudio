import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://estudio747.com").replace(/\/$/, "");

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MusicRecordingStudio",
  name: "Estúdio 747",
  description:
    "Estúdio 747 em Vendas Novas: produção musical completa, som imersivo, podcasts e conteúdos áudio para artistas e marcas.",
  url: siteUrl,
  telephone: "+351 967 862 700",
  email: "747estudio.rec@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua António Sérgio, 14",
    addressLocality: "Vendas Novas",
    addressRegion: "Évora",
    postalCode: "7080-081",
    addressCountry: "Portugal",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=100077292452905",
    "https://www.instagram.com/estudio.747/",
    "https://open.spotify.com/intl-pt/artist/5CbzHDeokBLcwzUSyoa140",
    "https://x.com/micshyne",
    "https://soundcloud.com/micshyne-music",
    "https://www.youtube.com/@MICSHYNE",
  ],
  areaServed: {
    "@type": "Country",
    name: "Portugal",
  },
  serviceOffered: [
    "Produção musical",
    "Gravação multicanal",
    "Mistura e masterização",
    "Som imersivo",
    "Produção de podcasts",
    "Conteúdos áudio para marcas",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "14:00",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Estúdio 747 | Produção musical, som imersivo e conteúdos áudio",
    template: "%s | Estúdio 747",
  },
  description:
    "Estúdio 747 em Vendas Novas: produção artística, gravação, mistura híbrida, masterização, som imersivo e conteúdos áudio para artistas e marcas.",
  keywords: [
    "estúdio de gravação",
    "produção musical",
    "som imersivo",
    "mistura e masterização",
    "podcasts",
    "conteúdos áudio",
    "Vendas Novas",
    "Portugal",
  ],
  authors: [{ name: "Estúdio 747" }],
  creator: "Estúdio 747",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Estúdio 747 | Produção musical, som imersivo e conteúdos áudio",
    description:
      "Produção artística, gravação, mistura híbrida, masterização, podcasts e conteúdos áudio para artistas, marcas e criadores.",
    url: siteUrl,
    siteName: "Estúdio 747",
    locale: "pt_PT",
    type: "website",
    images: [
      {
        url: "/logo-747.png",
        width: 1200,
        height: 630,
        alt: "Logótipo Estúdio 747",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estúdio 747 | Produção musical, som imersivo e conteúdos áudio",
    description:
      "Estúdio 747 em Vendas Novas: produção musical completa, som imersivo e conteúdos áudio para artistas e marcas.",
    creator: "@micshyne",
    images: ["/logo-747.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-surface text-slate-100 antialiased">
        <a href="#conteudo-principal" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary-400 focus:px-4 focus:py-2 focus:text-surface">
          Saltar para o conteúdo principal
        </a>
        <TopBar />
        <Navbar />
        <main id="conteudo-principal" className="flex min-h-screen flex-col pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
