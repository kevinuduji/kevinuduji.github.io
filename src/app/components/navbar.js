"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
  const [hideMobileNav, setHideMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;

      // Hide only on scroll, show at bottom
      setHideMobileNav(!isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* Top Nav - Desktop */}
      <header className="flex justify-between items-center px-6 py-4">
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <img src="/logowhite.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Center - Nav Links (XL: vertical left-side) */}
        <nav className="hidden xl:flex flex-col fixed top-1/2 left-6 -translate-y-1/2 gap-4 px-4 space-y-4 items-start z-40">
          <Link
            href="#experience"
            className="font-medium hover:text-gray-300/50 transition-colors duration-200"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="font-medium hover:text-gray-300/50 transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            href="#misc"
            className="font-medium hover:text-gray-300/50 transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Right - Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/kevinuduji/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300/50 transition-colors duration-200"
          >
            <FaLinkedin
              size={28}
              className="dark:text-[#ededed] transition-colors duration-200"
            />
          </a>
          <a
            href="https://github.com/kevinuduji"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300/50 transition-colors duration-200"
          >
            <FaGithub
              size={28}
              className="dark:text-[#ededed] transition-colors duration-200"
            />
          </a>
        </div>
      </header>

      {/* Bottom Nav - Mobile Only */}
      <nav
        className={`fixed bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 flex xl:hidden space-x-6 items-center border-2 border-gray-50/20 backdrop-blur-md bg-gray-950/30 rounded-full z-50 transition-opacity duration-500 ${
          hideMobileNav ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link
          href="#experience"
          className="font-medium hover:text-gray-300/50 transition-colors duration-200"
        >
          Experience
        </Link>
        <Link
          href="#projects"
          className="font-medium hover:text-gray-300/50 transition-colors duration-200"
        >
          Projects
        </Link>
        <Link
          href="#misc"
          className="font-medium hover:text-gray-300/50 transition-colors duration-200"
        >
          Contact
        </Link>
      </nav>
    </>
  );
}
