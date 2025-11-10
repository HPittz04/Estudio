import type { Metadata } from "next";
import ServicosContent from "@/app/servicos/ServicosContent";

export const metadata: Metadata = {
  title: "Serviços de produção musical, som imersivo e conteúdos",
  description:
    "Conhece as soluções do Estúdio 747: pré-produção, gravação, mistura híbrida, masterização, som imersivo, podcasts e conteúdos para marcas.",
  alternates: {
    canonical: "/servicos",
  },
  openGraph: {
    title: "Serviços Estúdio 747",
    description:
      "Pacotes completos ou modulares para produção musical, captação, mistura, masterização e criação de conteúdos áudio.",
    url: "/servicos",
  },
};

export default function Page() {
  return <ServicosContent />;
}
