// Companies.js
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    name: "Duolingo",
    position: "Software Engineer Intern",
    duration: "Jun 2025 – Present",
    logo: "/duolingo_logo.png",
  },
  {
    id: 2,
    name: "CodePath",
    position: "Technical Interview Prep Tutor",
    duration: "Jul 2024 – Apr 2025",
    logo: "/codepath_logo.png",
  },
  {
    id: 3,
    name: "Jump Finance",
    position: "Software Engineer Intern",
    duration: "Jul 2024 – Sep 2024",
    logo: "/jumpfinance_logo.jpeg",
  },
  {
    id: 4,
    name: "Snap Inc.",
    position: "Software Engineer Program",
    duration: "Mar 2024 – May 2024",
    logo: "/snap_logo.webp",
  },
];

export default function Companies() {
  return (
    <div className="flex flex-col gap-8 w-full sm:px-6">
      <h2 className="text-4xl font-bold">Experience</h2>

      <div className="flex flex-col gap-6 w-full max-w-screen-lg">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex items-center border-2 border-gray-50/20 bg-transparent rounded-2xl p-4 gap-6"
          >
            {/* Logo takes ~1/3 of card */}
            <div className="h-24 w-24 flex-shrink-0">
              <img
                src={exp.logo}
                alt={exp.name}
                className="h-full w-full object-contain rounded-2xl"
              />
            </div>

            {/* Details take ~2/3 */}
            <div className="flex-1">
              <h3 className="text-base font-semibold">{exp.name}</h3>
              <p className="text-sm text-gray-50/50">{exp.position}</p>
              <p className="text-sm text-gray-600">{exp.duration}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <a
          href="https://www.linkedin.com/in/kevinuduji/"
          target="_blank"
          rel="noopener noreferrer"
          className="border-solid border-2 border-gray-50/20 backdrop-blur-lg bg-gray-950/30 rounded-2xl px-6 py-2 hover:bg-gray-800 text-base text-center font-medium transition-colors duration-200"
        >
          Connect on <FaLinkedin
                                  size={20}
                                  className="dark:text-[#ededed] justify-center items-center inline-flex ml-2 mb-1 transition-colors duration-200"
                                />
        </a>
      </div>
    </div>
  );
}
