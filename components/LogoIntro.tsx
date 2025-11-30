"use client";

import { useEffect, useState } from "react";

const LogoIntro = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Just a quick blackout to prevent FOUC (Flash of Unstyled Content)
    // The real animation is now handled in HomePage.tsx for smoothness
    const timer = setTimeout(() => setIsVisible(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#050505] pointer-events-none transition-opacity duration-700 ease-out" />
  );
};

export default LogoIntro;