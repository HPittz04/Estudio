import type { Metadata } from "next";
import HomePage from "@/app/_components/HomePage";

export const metadata: Metadata = {
  title: "Produção musical, som imersivo e conteúdos áudio personalizados",
  description:
    "Estúdio 747 em Vendas Novas. Produção musical completa, captação, mistura, masterização, som imersivo e conteúdos áudio para artistas e marcas.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Estúdio 747 — Produção musical e som imersivo",
    description:
      "Produção artística, gravação, mistura híbrida, masterização e conteúdos áudio para artistas, marcas e criadores.",
    url: "/",
  },
};

export default function Page() {
  return <HomePage />;
}
