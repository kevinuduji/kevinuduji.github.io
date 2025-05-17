// Projects.js
import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "NSBE Website",
    stack: "React, API",
    image: "/nsbe_icon.png",
    link: "https://texasnsbe.org",
  },
  {
    id: 2,
    title: "'Netfilms'",
    stack: "React, Firebase",
    image: "/netfilms_icon.png",
    link: "https://github.com/kevinuduji/Netfilms",
  },
  {
    id: 3,
    title: "Blockchain Risk Analyzer",
    stack: "Python, NumPy, Pandas",
    image: "/webacy_icon.png",
    link: "https://github.com/kevinuduji/Smart-Contract-Data-Analyzer",
  },
  {
    id: 4,
    title: "'Your Olympic Games'",
    stack: "JavaScript, Snap Lenses",
    image: "/olympic.png",
    link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=29024b9be51246bd9bac179b44e4b666&metadata=01",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col gap-8 w-full sm:px-6">
      <h2 className="text-4xl font-bold">Projects</h2>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full max-w-screen-lg">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="h-full w-full flex items-center justify-center"
          >
            <div className="aspect-square border-2 border-gray-50/20 bg-transparent rounded-2xl overflow-hidden flex flex-col">
              {/* Image fills top 3/4 */}
              <div className="h-3/4 w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              {/* Title + tech in bottom 1/4 */}
              <div className="h-1/4 p-4 flex flex-col justify-center bg-transparent">
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="text-sm text-gray-50/50 mt-1">{p.stack}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* See more button for portfolio section */}
      <div className="flex justify-center mt-4">
        <a
          href="https://github.com/kevinuduji"
          target="_blank"
          rel="noopener noreferrer"
          className="border-solid border-2 border-gray-50/20 backdrop-blur-lg bg-gray-950/30 rounded-2xl px-6 py-2 hover:bg-gray-800 text-base text-center font-medium transition-colors duration-200"
        >
          See More <FaGithub
                        size={20}
                        className=" dark:text-[#ededed] justify-center items-center inline-flex ml-2 mb-1 transition-colors duration-200"
                      />
        </a>
      </div>
    </div>
  );
}
