"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function TopBar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Thresholds ajustados: começa a desaparecer a partir de 20px e some completamente aos 40px
  const thresholdStart = 20;
  const thresholdEnd = 40;
  let topBarOpacity = 1;
  if (scrollY < thresholdStart) {
    topBarOpacity = 1;
  } else if (scrollY > thresholdEnd) {
    topBarOpacity = 0;
  } else {
    topBarOpacity = 1 - (scrollY - thresholdStart) / (thresholdEnd - thresholdStart);
  }

  return (
    <div
      style={{ opacity: topBarOpacity }}
      className="fixed top-0 left-0 w-full h-8 z-50 bg-[#1a1a2e] text-white transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-10 h-full flex justify-end items-center">
        <Link href="#" className="ml-4 hover:text-gray-300">
          <FaInstagram />
        </Link>
        <Link href="#" className="ml-4 hover:text-gray-300">
          <FaFacebookF />
        </Link>
        <Link href="#" className="ml-4 hover:text-gray-300">
          <FaYoutube />
        </Link>
      </div>
    </div>
  );
}
