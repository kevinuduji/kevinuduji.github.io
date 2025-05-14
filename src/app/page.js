import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Companies from "./components/companies";
import Contact from "./components/contact";
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="grid p-8 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col xl:flex-row gap-8 items-start w-full px-6">
  {/* Left: Hero takes 50% width on XL and up */}
  <div className="w-full xl:w-1/2">
    <Hero />
  </div>

  {/* Right: Companies take the other 50% */}
  <div className="w-full xl:w-1/2 xl:pt-12 flex flex-col gap-6">
    <section id="experience">
      <Companies />
    </section>

    <section id="projects">
      <Projects />
    </section>

    <section id="misc">
      <Contact />
    </section>
  </div>

</main>
      <footer className="pb-12 xl:pb-0 row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} className="dark:text-[#ededed]"/>
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >

          <FaGithub size={24} className="dark:text-[#ededed]"/>
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileDownload size={24} className="dark:text-[#ededed]"/>
          Resume
        </a>
      </footer>
    </div>
  );
}
