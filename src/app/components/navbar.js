'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Navbar() {
    const [hideMobileNav, setHideMobileNav] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const isBottom =
          window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
  
        // Hide only on scroll, show at bottom
        setHideMobileNav(!isBottom);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
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
        <nav className="hidden xl:flex flex-col fixed top-1/2 left-6 -translate-y-1/2 gap-4 backdrop-blur-lg bg-gray-950/30 rounded-2xl px-4 space-y-4 items-start shadow-lg z-40">
        <Link href="#experience" className="font-medium hover:text-gray-300/50">Experience</Link>
        <Link href="#projects" className="font-medium hover:text-gray-300/50">Projects</Link>
        <Link href="#misc" className="font-medium hover:text-gray-300/50">Contact</Link>
        </nav>


        {/* Right - Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/kevinuduji/"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-gray-300/50"
          >
            <FaLinkedin size={28} className=" dark:text-[#ededed]" />
          </a>
          <a
            href="https://github.com/kevinuduij"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-gray-300/50"
          >
            <FaGithub size={28} className="dark:text-[#ededed]"/>
          </a>
        </div>
      </header>

      {/* Bottom Nav - Mobile Only */}
      <nav
        className={`fixed bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 flex xl:hidden space-x-6 items-center border-2 border-gray-50/20 backdrop-blur-md bg-gray-950/30 rounded-full z-50 transition-opacity duration-500 ${
          hideMobileNav ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Link href="#experience" className="font-medium hover:bg-gray-200/85 rounded-full hover:text-black">Experience</Link>
        <Link href="#projects" className="font-medium hover:bg-gray-200/85 rounded-full hover:text-black">Projects</Link>
        <Link href="#misc" className="font-medium hover:bg-gray-200/85 rounded-full hover:text-black">Misc</Link>
      </nav>
    </>
  );
}
