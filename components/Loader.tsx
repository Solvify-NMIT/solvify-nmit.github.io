"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- COMPONENT: TERMINAL LOADER ---
const TerminalLoader = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  const bootSequence = [
    "> KERNEL_INIT: 004F2A",
    "> LOADING ASSETS...",
    "> CONNECTING TO NEURAL NET...",
    "> COMPILING MODULES [OPTIMIZED]",
    "> VERIFYING INTEGRITY... OK",
    "> MOUNTING UI COMPONENTS...",
    "> ESTABLISHING SECURE LINK...",
    "> SYSTEM READY."
  ];

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    let accumulatedDelay = 0;

    bootSequence.forEach((line, index) => {
      const stepDelay = Math.random() * 400 + 800;
      accumulatedDelay += stepDelay;

      const timeout = setTimeout(() => {
        setLines((prev) => {
          const newLines = [...prev, line];
          if (newLines.length > 5) return newLines.slice(newLines.length - 5);
          return newLines;
        });
      }, accumulatedDelay);

      timeouts.push(timeout);

      if (index === bootSequence.length - 1) {
        const hideTimeout = setTimeout(() => {
          setIsVisible(false);
        }, accumulatedDelay + 2000);
        timeouts.push(hideTimeout);
      }
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="flex flex-col items-start justify-end h-32 font-titillium uppercase text-[10px] md:text-xs text-[#FFD700]/80 tracking-widest leading-relaxed overflow-hidden">
      {lines.map((line, i) => (
        <div key={i} className="whitespace-nowrap">{line}</div>
      ))}
      <div className="animate-pulse text-[#FFD700]">_</div>
    </div>
  );
};

// --- COMPONENT: FLYING LOGO ---
// const FlyingLogo = ({ sequenceStage }: { sequenceStage: number }) => {
//   // Stage 2: Fast Spin in center
//   // Stage 3: Glide to Navbar
//   const isContinuous = sequenceStage === 2;
//   const isExit = sequenceStage === 3;

//   const customTranslateClass = 'translate-x-[calc(-50%+5.5vw)]';

//   return (
//     <motion.div
//       layoutId="solvify-logo-center"
//       key="flying-logo"
//       initial={{ scale: 0, rotate: -180, opacity: 0, zIndex: 999 }}
//       animate={{
//         rotate: sequenceStage >= 2 ? 1080 : 0,
//         scale: sequenceStage === 2 ? 1.0 : 0.8,
//         opacity: sequenceStage >= 2 ? 1 : 0,
//         x: isExit ? -15 : 0,
//         y: isExit ? -400 : 0,
//       }}
//       transition={{
//         rotate: {
//           duration: isContinuous ? 1.2 : 0.8,
//           repeat: isContinuous ? Infinity : 0,
//           ease: "linear"
//         },
//         // Faster, smoother spring to prevent the 1-2s delay/glitch at the top
//         y: { type: "spring", stiffness: 200, damping: 30 },
//         x: { type: "spring", stiffness: 200, damping: 30 },
//         scale: { type: "spring", stiffness: 250, damping: 20 },
//         opacity: { duration: 0.3 }
//       }}
//       className={`fixed top-1/2 left-1/2 -translate-y-1/2 pointer-events-none ${customTranslateClass}`}
//       style={{ width: '10vw', maxWidth: '96px' }}
//     >
//       <img src="/solvify-logo.png" alt="Solvify Logo" className="w-full h-full object-contain" />
//     </motion.div>
//   );
// };

// --- MAIN LOADER COMPONENT ---
const Loader = ({ onIntroComplete }: { onIntroComplete: () => void }) => {
  const [stage, setStage] = useState(0);
  const [isIntroDone, setIsIntroDone] = useState(false);

  useEffect(() => {
    // Stage 1: Fill starts
    const t1 = setTimeout(() => setStage(1), 5000);

    // Stage 2: Zoom and Logo Spin start
    const t2 = setTimeout(() => setStage(2), 7000);

    // Stage 3: Logo starts gliding to top
    const t3 = setTimeout(() => setStage(3), 8200);

    // Final Handover - Snappy exit immediately after the logo reaches the top
    const finalHideTimer = setTimeout(() => {
      setIsIntroDone(true);
      if (typeof onIntroComplete === 'function') onIntroComplete();
    }, 8800);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(finalHideTimer);
    };
  }, [onIntroComplete]);

  const heroVariants = {
    visible: { scale: 1, x: 0, opacity: 1 },
    // This handles the explosive zoom-in through the text
    zoomInContinuous: {
      scale: 60,
      x: '-175vw',
      opacity: 0,
      transition: {
        duration: 1.4,
        ease: [0.7, 0, 0.3, 1] as [number, number, number, number],
        delay: 0.1
      }
    }
  };

  // Keep the zoom animation active through stages 2 and 3
  const currentAnimation = stage >= 2 ? "zoomInContinuous" : "visible";

  return (
    <div className={`fixed inset-0 z-100 bg-[#050505] transition-opacity duration-500 ${isIntroDone ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      <AnimatePresence>
        {/* We keep the SVG background text mounted through the zoom-in phase */}
        {stage < 3 && (
          <motion.div
            key="svg-container"
            variants={heroVariants}
            initial="visible"
            animate={currentAnimation}
            className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
          >
            <div className={`absolute bottom-8 left-8 md:bottom-12 md:left-12 transition-opacity duration-1000 ${stage >= 1 ? "opacity-40" : "opacity-100"}`}>
              <TerminalLoader />
            </div>

            <div className="z-10 text-center flex flex-col items-center w-full select-none -mt-20">
              <div className="relative w-full flex justify-center items-center">
                <svg viewBox="0 0 1320 350" className="w-[95vw] max-w-[1600px] h-auto overflow-visible">
                  <defs>
                    <clipPath id="text-fill-clip">
                      <rect x="0" y="0" width={stage >= 1 ? "100%" : "0%"} height="100%" className="transition-all ease-in-out" style={{ transitionDuration: '2000ms' }} />
                    </clipPath>
                    <clipPath id="text-stroke-clip">
                      <rect x={stage >= 1 ? "100%" : "0%"} y="0" width="100%" height="100%" className="transition-all ease-in-out" style={{ transitionDuration: '2000ms' }} />
                    </clipPath>
                  </defs>
                  <text x="50%" y="50%" dy=".35em" textAnchor="middle" clipPath="url(#text-stroke-clip)" className="font-bebas text-[19vw] md:text-[200px] tracking-wide stroke-[#FFD700] stroke-[3px] fill-transparent" style={{ strokeDasharray: '1035px', strokeDashoffset: '1035px', animation: "drawStroke 5s ease-in-out forwards" }}>
                    SOLVIFY
                  </text>
                  <text x="50%" y="50%" dy=".35em" textAnchor="middle" clipPath="url(#text-fill-clip)" className="font-bebas text-[19vw] md:text-[200px] tracking-wide fill-white stroke-none">
                    SOLVIFY
                  </text>
                </svg>
              </div>
            </div>

            <style jsx global>{`
              @keyframes drawStroke { 0% { stroke-dashoffset: 1035px; } 100% { stroke-dashoffset: 0px; } }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>

      {/* {(stage >= 2) && <FlyingLogo sequenceStage={stage} />} */}
    </div>
  );
};

export default Loader;