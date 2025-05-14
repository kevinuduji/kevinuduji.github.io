import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="flex flex-col w-full xl:w-1/2 min-h-screen items-center justify-between px-8 py-12 gap-8 xl:fixed">
      {/* Left - Text Content */}
      <div className="w-full xl:w-1/2 flex flex-col gap-8 items-center text-center xl:text-left">
        <img
          src="/kevin.jpg"
          alt="Hero Image"
          width={250}
          height={250}
          loading="eager"
          className="rounded-full shadow-xl object-cover border-[2px] border-gray-300/50"
        />    
        <h1 className="text-5xl font-bold">Kevin Uduji</h1>
        <p className="text-xl text-gray-700">Software Engineer @ Duolingo</p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a
            href="https://www.linkedin.com/in/kevinuduji/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-solid border-2 border-gray-50/20 backdrop-blur-lg bg-gray-950/30 rounded-full px-6 py-2 hover:text-black hover:bg-gray-200/85 text-sm sm:text-base text-center w-full sm:w-auto"
          >
            <FaLinkedin size={16} className="dark:text-[#ededed] inline"/>
            LinkedIn
          </a>
          <a
            href="https://github.com/kevinuduij"
            target="_blank"
            rel="noopener noreferrer"
            className="border-solid border-2 border-gray-50/20 backdrop-blur-lg bg-gray-950/30 rounded-full px-6 py-2 hover:text-black hover:bg-gray-200/85  text-sm sm:text-base text-center w-full sm:w-auto"
          >
            <FaGithub size={16} className="dark:text-[#ededed] inline-flex"/>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kevinuduji/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-solid border-2 border-gray-50/20 backdrop-blur-lg bg-gray-950/30 rounded-full px-6 py-2 hover:text-black hover:bg-gray-200/85  text-sm sm:text-base text-center w-full sm:w-auto"
          >
            <FaFileDownload size={16} className=" dark:text-[#ededed] inline-flex"/>
            Resume
          </a>
        </div>
      </div>

      
    </div>
  );
}
