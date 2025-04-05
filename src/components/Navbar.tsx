"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Até 150px, a navbar fica a 2rem (top-8). Depois, se posiciona no topo.
  const threshold = 30;
  const navbarTop = scrollY < threshold ? "2rem" : "0rem";

  // Fundo: de opacidade 0.5 a 1 conforme scroll.
  const bgOpacity = scrollY < threshold ? 0.5 + (scrollY / threshold) * 0.5 : 1;
  const bgColor = `rgba(26,26,46,${bgOpacity})`;

  // Padding: transição de py-4 para py-2.
  const paddingClass = scrollY < threshold ? "py-4" : "py-2";

  return (
    <nav
      style={{ top: navbarTop, backgroundColor: bgColor }}
      className={`fixed left-0 w-full z-40 shadow-md transition-all duration-300 ${paddingClass}`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-10 text-white">
        {/* Logotipo */}
        <Link href="/" className="ml-10">
          <Image
            src="/logo-747.png"
            alt="Estúdio 747"
            width={120}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        {/* Menu de Navegação */}
        <div className="flex space-x-8 text-sm font-semibold">
          <Link href="/" className="hover:text-gray-300">HOME</Link>
          <Link href="/quemsomos" className="hover:text-gray-300">QUEM SOMOS</Link>
          <Link href="/servicos" className="hover:text-gray-300">SERVIÇOS</Link>
          <Link href="/merch" className="hover:text-gray-300">MERCH</Link>
          <Link href="/soro" className="hover:text-gray-300">SORO</Link>
          <Link href="/contactos" className="hover:text-gray-300">CONTACTOS</Link>
          <button className="hover:text-gray-300">
  <AiOutlineSearch size={20} />
</button>
        </div>
      </div>
    </nav>
  );
}
