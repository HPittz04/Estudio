"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube, FaSpotify, FaSoundcloud, FaTwitter } from "react-icons/fa";

export default function TopBar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div className="max-w-6xl mx-auto px-4 sm:px-10 h-full flex justify-end items-center">
      <Link href="https://www.facebook.com/profile.php?id=100077292452905" className="ml-4 hover:text-gray-300">
          <FaFacebookF />
        </Link>
        <Link href="https://www.instagram.com/estudio.747/" className="ml-4 hover:text-gray-300">
          <FaInstagram />
        </Link>
        <Link href="https://open.spotify.com/intl-pt/artist/5CbzHDeokBLcwzUSyoa140?si=ky9Ri4fmRzWeWks4ZLV4Zw" className="ml-4 hover:text-gray-300">
          <FaSpotify />
        </Link>
        <Link href="https://x.com/micshyne" className="ml-4 hover:text-gray-300">
          <FaTwitter />
        </Link>
        <Link href="https://soundcloud.com/micshyne-music" className="ml-4 hover:text-gray-300">
          <FaSoundcloud />
        </Link>
        <Link href="https://www.youtube.com/@MICSHYNE" className="ml-4 hover:text-gray-300">
          <FaYoutube />
        </Link>
      </div>
    </div>
  );
}

