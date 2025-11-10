import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Estúdio 747",
  description: "Produção áudio, gravação e pós-produção em Vendas Novas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
