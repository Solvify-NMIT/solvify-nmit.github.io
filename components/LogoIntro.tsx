"use client";

import { useEffect, useState } from "react";

const LogoIntro = () => {
  const [hideIntro, setHideIntro] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHideIntro(true), 750);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`w-screen h-screen pointer-events-none flex items-center justify-center z-99 fixed top-0 left-0 bg-black transition-opacity duration-700 ${hideIntro ? "opacity-0" : "opacity-100"}`} >
      <h1 className="text-white text-6xl font-bold tracking-wide opacity-0 animate-logoIntro">
        SOLVIFY
      </h1>
    </div>
  );
}

export default LogoIntro;