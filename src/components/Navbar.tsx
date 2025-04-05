"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const threshold = 30;
  const navbarTop = scrollY < threshold ? "2rem" : "0rem";
  const bgOpacity = scrollY < threshold ? 0.5 + (scrollY / threshold) * 0.5 : 1;
  const bgColor = `rgba(26,26,46,${bgOpacity})`;
  const paddingClass = scrollY < threshold ? "py-4" : "py-2";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      style={{ top: navbarTop, backgroundColor: bgColor }}
      className={`fixed left-0 w-full z-40 shadow-md transition-all duration-300 ${paddingClass}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-10 flex justify-between items-center text-white">
        {/* Logotipo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-747.png"
            alt="Estúdio 747"
            width={120}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6 text-sm font-semibold">
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

        {/* Botão Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="hover:text-white-300">
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
  <div className="md:hidden bg-[rgba(26,26,46,0.9)]">
    <ul className="flex flex-col space-y-4 p-4 text-center text-sm font-semibold text-white">
      <li>
        <Link onClick={toggleMenu} href="/" className="hover:text-gray-300">HOME</Link>
      </li>
      <li>
        <Link onClick={toggleMenu} href="/quemsomos" className="hover:text-gray-300">QUEM SOMOS</Link>
      </li>
      <li>
        <Link onClick={toggleMenu} href="/servicos" className="hover:text-gray-300">SERVIÇOS</Link>
      </li>
      <li>
        <Link onClick={toggleMenu} href="/merch" className="hover:text-gray-300">MERCH</Link>
      </li>
      <li>
        <Link onClick={toggleMenu} href="/soro" className="hover:text-gray-300">SORO</Link>
      </li>
      <li>
        <Link onClick={toggleMenu} href="/contactos" className="hover:text-gray-300">CONTACTOS</Link>
      </li>
    </ul>
  </div>
)}
    </nav>
  );
}
