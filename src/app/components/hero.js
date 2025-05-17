import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="flex flex-col w-full xl:w-1/2 min-h-screen items-center justify-between px-2 sm:px-6 pt-12 xl:fixed">
      {/* Left - Text Content */}
      <div className="w-full xl:w-1/2 flex flex-col gap-7 items-center text-center xl:text-left">
        <img
          src="/kevin.jpg"
          alt="Hero Image"
          width={250}
          height={250}
          loading="eager"
          className="rounded-full shadow-xl object-cover border-[2px] border-gray-300/50"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">Kevin Uduji</h1>
          <p className="text-lg text-gray-50/50">
            Software Engineer @ Duolingo
          </p>
        </div>
        <button className="flex flex-col gap-4 w-full sm:w-auto justify-center">
          <a
            href="https://www.linkedin.com/in/kevinuduji/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-solid border-2 border-gray-50/20 backdrop-blur-lg bg-gray-950/30 rounded-full px-6 py-2 hover:bg-gray-800 text-base text-center w-full sm:w-auto transition-colors duration-200"
          >
            <FaLinkedin
              size={16}
              className="dark:text-[#ededed] inline-flex mr-2 transition-colors duration-200"
            />
            LinkedIn
          </a>
          <a
            href="https://github.com/kevinuduji"
            target="_blank"
            rel="noopener noreferrer"
            className="border-solid border-2 border-gray-50/20 backdrop-blur-lg bg-gray-950/30 rounded-full px-6 py-2 hover:bg-gray-800 text-base text-center w-full sm:w-auto transition-colors duration-200"
          >
            <FaGithub
              size={16}
              className="dark:text-[#ededed] inline-flex mr-2 transition-colors duration-200"
            />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kevinuduji/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-solid border-2 border-gray-50/20 backdrop-blur-lg bg-gray-950/30 rounded-full px-6 py-2 hover:bg-gray-800 text-base text-center w-full sm:w-auto transition-colors duration-200"
          >
            <FaFileDownload
              size={16}
              className="dark:text-[#ededed] inline-flex mr-2 transition-colors duration-200"
            />
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
}
