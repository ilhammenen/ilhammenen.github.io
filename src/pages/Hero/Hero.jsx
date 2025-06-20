import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import bgVideo from "@/assets/bg-video.mp4"; // ✅ Local video file

const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 z-10">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="absolute inset-0">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="none" stroke="white" strokeWidth="0.5" className="opacity-40 animate-gridPulse" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default function Hero() {
  const words = [
    "Full-Stack Developer & UI/UX",
    "JavaScript Developer",
    "Learning Computer Networking",
    "Designer & Developer",
  ];

  const [code] = useState(`
const profile = {
    name: 'Ilham Ramli',
    title: 'Full-Stack Developer | Designer Enthusiast | Problem Solver',
    skills: [
        'React', 'NextJS', 'Redux', 'Express',
        'MySQL', 'MariaDB', 'Docker', 'AWS', 'TypeScript',
        'Git', 'Linux', 'UI/UX developer'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true, 
    Creative: true, 
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5
        );
    }
};
  `);

  useEffect(() => {
    Prism.highlightAll();

    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .hero { padding-top: 12rem !important; }
        .hero .container { padding-top: 10rem !important; margin-top: 5rem !important; }
        .hero-section-padding { padding-top: 12rem !important; }
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      document.documentElement.style.setProperty(
        "--hero-padding-top",
        isTargetResolution ? "12rem" : "0"
      );
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <>
      <main className="bg-[#020617] text-white min-h-screen relative">
        <section
          className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding"
          style={{ paddingTop: "var(--hero-padding-top, 0)" }}
        >
          {/* ✅ Background Video */}
          <div className="absolute inset-0 w-full h-full z-0">
            <video
              className="w-full h-full object-cover opacity-30"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={bgVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none" />
          </div>

          <GridBackground />
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            <Meteors number={10} />
          </div>

          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6 sm:mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-gray-300 text-xs sm:text-sm font-medium">
                  Welcome to menen universe
                </span>
              </div>

              <div className="relative mb-6 sm:mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <SparklesText text="Hello" />
                  <span className="relative inline-block">
                    I&apos;m
                    <span className="typing-effect gradient-text"> Ilham Ramli</span>
                  </span>
                </h1>
              </div>

              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6">
                <i className="fas fa-rocket text-blue-400 animate-bounce"></i>
                <FlipWords className="text-xl text-blue-400 font-medium" words={words} />
              </div>

              <p className="text-base sm:text-xl text-gray-300/90 mb-8 max-w-xl">
                JavaScript lover 🚀 | Html creator 🔧 | Crafting frameworks and coding the future 💻✨
              </p>

              {/* 🌐 Social Links */}
              <div className="flex gap-5 items-center mb-8">
                <a href="https://github.com/ilhammenen" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a href="mailto:ilhammenen11@gmail.com" className="text-gray-400 hover:text-white transition">
                  <i className="fas fa-envelope text-2xl"></i>
                </a>
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
                <a href="https://www.instagram.com/ilhammenen?igsh=bmtqa2kwbnRiN3dy&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a href="https://github.com/seraprogrammer" className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl hover:scale-105">
                  <span className="px-6 py-3 bg-gray-900 rounded-[11px] text-white font-medium">Learn More</span>
                </a>
                <a href="#" className="group inline-flex items-center gap-3 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 hover:scale-105">
                  <span className="px-6 py-3 bg-gray-900 border border-gray-700/50 rounded-[11px] text-gray-300 font-medium">Get Resume</span>
                </a>
              </div>
            </div>

            {/* 💻 Code Preview */}
            <div className="w-full lg:w-1/2">
              <div className="gradient-border">
                <div className="code-window bg-[#091121]">
                  <div className="window-header">
                    <div className="window-dot bg-red-500"></div>
                    <div className="window-dot bg-yellow-500"></div>
                    <div className="window-dot bg-green-500"></div>
                    <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                      <i className="fas fa-code"></i>
                      developer.js
                    </span>
                  </div>
                  <pre className="language-javascript">
                    <code className="language-javascript">{code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-3 z-10">
          <span className="text-gray-100 text-3xl font-bold flex items-center gap-3">
            <i className="fas fa-mouse text-blue-400 text-4xl"></i>
            About me
          </span>
          <i className="fas fa-chevron-down text-blue-400 text-5xl"></i>
        </div>

        <PortfolioPage />
      </main>
    </>
  );
}
