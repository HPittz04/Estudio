import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1a1a2e] text-gray-300 px-10 py-4 flex items-center justify-between z-50">
      {/* Logotipo */}
      <Link href="/" className="ml-10">
        <Image src="/logo-747.png" alt="Estúdio 747" width={120} height={50} className="h-18 w-auto" />
      </Link>

      {/* Menu de Navegação */}
      <div className="flex space-x-8 text-sm font-semibold">
        <Link href="/" className="hover:text-white">HOME</Link>
        <Link href="/quemsomos" className="hover:text-white">QUEM SOMOS</Link>
        <Link href="/servicos" className="hover:text-white">SERVIÇOS</Link>
        <Link href="/merch" className="hover:text-white">MERCH</Link>
        <Link href="/soro" className="hover:text-white">SORO</Link>
        <Link href="/contactos" className="hover:text-white">CONTACTOS</Link>
        <button className="hover:text-white">
          🔍 {/* Ícone de pesquisa */}
        </button>
      </div>
    </nav>
  );
}