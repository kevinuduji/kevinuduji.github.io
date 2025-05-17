// Companies.js
import React from "react";

const experiences = [
  {
    id: 1,
    name: "Duolingo",
    position: "Software Engineer Intern",
    duration: "May 2024 – Present",
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
    id: 3,
    name: "Snap Inc.",
    position: "Software Engineer Program",
    duration: "Mar 2024 – May 2024",
    logo: "/snap_logo.webp",
  },
];

export default function Companies() {
  return (
    <div className="flex flex-col gap-8 w-full px-2 sm:px-6">
      <h2 className="text-4xl font-bold">Work Experience</h2>

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
    </div>
  );
}
