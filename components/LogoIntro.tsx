"use client";

import { useEffect, useState } from "react";

const LogoIntro = () => {
  const [hideIntro, setHideIntro] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHideIntro(true), 750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`w-screen h-screen pointer-events-none flex items-center justify-center z-50 fixed top-0 left-0 bg-black transition-opacity duration-700 ${hideIntro ? "opacity-0" : "opacity-100"
          }`}
      >
        <h1 className="text-white text-6xl font-bold tracking-wide opacity-0 animate-logoIntro">
          SOLVIFY
        </h1>
      </div>

      <style jsx global>{`
        @keyframes logoIntro {
          0% {
            opacity: 0;
            transform: scale(1);
          }
          100% {
            opacity: 1;
            transform: scale(8);
          }
        }
        .animate-logoIntro {
          animation: logoIntro 1.2s ease-out forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default LogoIntro;
