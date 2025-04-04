import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaSpotify, FaTwitter, FaSoundcloud, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-gray-300 text-center py-10">
      {/* Logotipo grande */}
      <div className="flex justify-center">
        <Image src="/747.png" alt="Estúdio 747" width={300} height={150} className="w-auto h-40" />
      </div>

      {/* Links de navegação */}
      <nav className="mt-6">
        <ul className="flex justify-center space-x-8 text-sm font-semibold">
          <li><Link href="/" className="hover:text-white">HOME</Link></li>
          <li><Link href="/quemsomos" className="hover:text-white">QUEM SOMOS</Link></li>
          <li><Link href="/servicos" className="hover:text-white">SERVIÇOS</Link></li>
          <li><Link href="/merch" className="hover:text-white">MERCH</Link></li>
          <li><Link href="/soro" className="hover:text-white">SORO</Link></li>
          <li><Link href="/contactos" className="hover:text-white">CONTACTOS</Link></li>
        </ul>
      </nav>

      {/* Redes sociais */}
      <div className="flex justify-center space-x-6 mt-6 text-xl">
        <Link href="#" className="hover:text-white"><FaFacebookF /></Link>
        <Link href="#" className="hover:text-white"><FaInstagram /></Link>
        <Link href="#" className="hover:text-white"><FaSpotify /></Link>
        <Link href="#" className="hover:text-white"><FaTwitter /></Link>
        <Link href="#" className="hover:text-white"><FaSoundcloud /></Link>
        <Link href="#" className="hover:text-white"><FaYoutube /></Link>
      </div>

      {/* Texto de copyright */}
      <p className="text-sm mt-4">Estúdio 747 © 2025 | Todos os direitos reservados.</p>
    </footer>
  );
}