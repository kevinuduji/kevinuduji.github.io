import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Companies from "./components/companies";
import Contact from "./components/contact";
import Projects from "./components/projects";

export default function Home() {
  // get current year once per render
  const currentYear = new Date().getFullYear();

  return (
    <div className="grid p-8 font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main className="flex flex-col xl:flex-row gap-8 items-start w-full px-6">
        {/* Left: Hero takes 50% width on XL and up */}
        <div className="w-full xl:w-1/2">
          <Hero />
        </div>

        {/* Right: Companies, Projects, Contact */}
        <div className="w-full xl:w-1/2 xl:pt-12 flex flex-col gap-6 space-y-20">
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

      <footer className="py-12 xl:pb-0 row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500 flex items-center gap-2 hover:text-gray-300/50">
          © {currentYear} Kevin Uduji. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
