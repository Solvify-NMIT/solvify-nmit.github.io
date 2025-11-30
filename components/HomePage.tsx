"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- COMPONENT: TERMINAL LOADER (Bottom Left) ---
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
        <div key={i} className="whitespace-nowrap">
          {line}
        </div>
      ))}
      <div className="animate-pulse text-[#FFD700]">_</div>
    </div>
  );
};

// --- SUB-COMPONENT: DECIPHER TEXT ---
const SequentialDecipher = ({ text, startTrigger, onComplete }: { text: string, startTrigger: boolean, onComplete?: () => void }) => {
  const [display, setDisplay] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890$#@%&";
  
  useEffect(() => {
    if (!startTrigger) {
        setDisplay(text.replace(/./g, ' '));
        return;
    }

    let revealIndex = 0;
    const interval = setInterval(() => {
      revealIndex += 0.3; 
      
      const currentString = text
        .split("")
        .map((char, i) => {
          if (i < Math.floor(revealIndex)) return char;
          if (i === Math.floor(revealIndex)) return chars[Math.floor(Math.random() * chars.length)];
          return "";
        })
        .join("");

      setDisplay(currentString);

      if (revealIndex >= text.length) {
        clearInterval(interval);
        if (onComplete) oncomplete();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text, startTrigger]);

  // Added min-h-[1em] for layout stability
  return <span className="inline-block min-h-[1em]">{display}</span>;
};


// --- NEW COMPONENT: THE LOGO THAT TRAVELS (MODIFIED FOR INFINITE ROTATION & STATIC SIZE) ---
const FlyingLogo = ({ sequenceStage }: { sequenceStage: number }) => {
  // Stage 2: Continuous Zoom/Rotate
  const isContinuous = sequenceStage === 2;
  const isExit = sequenceStage === 3;
  
  // Base Logo Position (Center of screen, shifted +5.5vw right to align with the gap)
  const customTranslateClass = 'translate-x-[calc(-50%+5.5vw)]'; 

  return (
    <AnimatePresence>
      <motion.div
        layoutId="solvify-logo-center"
        key="flying-logo"
        initial={{ 
          scale: 0.8, 
          rotate: 0,
          opacity: 1,
          zIndex: 999 
        }}
        animate={{
          // Continuous Rotation: 1440 degrees (4 turns) over 1.8s, repeating 
          rotate: isContinuous ? 1440 : 0, 
          // Scale fixed at 0.8 during Stage 2 (Removed growth)
          scale: 0.8, 

          // Final: Reposition to the navbar location (These use Framer-motion's X/Y properties)
          x: isExit ? -15 : 0,
          y: isExit ? -400 : 0,

          transition: {
            type: isContinuous ? "tween" : "spring",
            // Rotation duration: 1.8s (slow rotation)
            duration: isContinuous ? 1.8 : 1.0, 
            // Add delay before rotation starts (static hold for 0.4s)
            delay: isContinuous ? 0.4 : 0, 
            repeat: isContinuous ? Infinity : 0, // Continuous rotation
            ease: "linear",
          }
        }}
        // Positioned at the center, then adjusted horizontally by the custom class
        className={`fixed top-1/2 left-1/2 -translate-y-1/2 pointer-events-none ${customTranslateClass}`}
        style={{
            width: '10vw',
            maxWidth: '96px',
        }}
      >
        <img 
          src="/solvify-logo.png" 
          alt="Solvify Logo" 
          className="w-full h-full"
        />
      </motion.div>
    </AnimatePresence>
  );
};


// --- MAIN COMPONENT (IMPLEMENTING CUSTOM SEQUENCE) ---
const HomePage = ({ onIntroComplete }: { onIntroComplete: () => void }) => {
  const [stage, setStage] = useState(0); 
  const [isIntroDone, setIsIntroDone] = useState(false); 
  
  // 0: Drawing Outline (0s - 5000ms)
  // 1: Whitening / Fill (5000ms - 7000ms)
  // 2: Continuous Zoom/Rotate/Grow (7400ms - 8400ms) // 1s duration, starts after 0.4s delay
  // 3: Final Jump/Exit (8400ms onward)

  useEffect(() => {
    // Stage 1: Fill starts
    const t1 = setTimeout(() => setStage(1), 5000);
    
    // Stage 2: Continuous Zoom/Rotate starts (runs for 1 second)
    // Start time is synchronized to 7000ms + 400ms logo static hold = 7400ms
    const t2 = setTimeout(() => setStage(2), 7400); 

    // Stage 3: Final Jump/Exit (1.0s transition)
    // Stage 3 starts at 7400ms + 1000ms zoom duration = 8400ms
    const t3 = setTimeout(() => setStage(3), 8400); 

    // Final Hide (After logo jumps to navbar position)
    // Hide time adjusted to 8400ms + 1000ms transition = 9400ms
    const finalHideTimer = setTimeout(() => {
        setIsIntroDone(true);
        onIntroComplete(); 
    }, 9400); 

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(finalHideTimer);
    };
  }, [onIntroComplete]);

  // Use useEffect to manage body overflow state
  useEffect(() => {
    if (!isIntroDone) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isIntroDone]);


  // VARIANTS: Controls the screen's continuous zoom on the main text/background.
  const heroVariants = {
    // Initial/Default state
    visible: { 
      scale: 1, 
      x: 0, // Reset x translation
      opacity: 1, 
      transition: { duration: 0.5 } 
    },
    // Stage 2: Continuous Zoom In (Focal point must be the logo's position: +5.5vw)
    zoomInContinuous: {
      // Increased scale to 25 for maximum zoom effect
      scale: 25, 
      // CRITICAL FIX: Shift the entire background/text LEFT by 135vw (extreme over-compensation)
      x: '-135vw', 
      opacity: 1, 
      transition: { 
        duration: 1, 
        ease: "linear", 
        repeat: 0,
        // Delay zoom start by 0.4s to match logo rotation start
        delay: 0.4 
      } 
    },
    // Stage 3: Final exit
    exit: {
        scale: 3, 
        x: 0,
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" }
    }
  };


  // CRITICAL FIX: We keep the component mounted as a fixed overlay.
  const introContainerClass = isIntroDone ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto";

  // Determine the correct animation state based on the current stage
  const currentAnimation = 
    stage === 2 ? "zoomInContinuous" : 
    stage === 3 ? "exit" : "visible";


  return (
    <AnimatePresence>
      <motion.section 
          key="intro-container"
          className={`fixed w-full h-screen top-0 left-0 flex flex-col items-center justify-center overflow-hidden bg-[#050505] transition-opacity duration-1000 ${introContainerClass}`}
      >
        {/* Conditional rendering block for the Hero Content (Title/Terminal/Grid) */}
        {/* The condition ensures the content fades out only after the final jump (stage 3 is 'exit') */}
        {stage < 3 && ( 
          <motion.div
            key="hero-stage-content"
            variants={heroVariants}
            initial="visible"
            animate={currentAnimation}
            // Vertical offset (Confirmed to be 25vh)
            className="relative w-full h-screen flex flex-col items-center justify-start overflow-hidden"
            style={{ paddingTop: '25vh' }}
          >
            
            {/* Background Element (Cleaned: No custom classes) */}
            <div 
              className={`absolute inset-0 opacity-0 pointer-events-none`} 
            />
            
            {/* --- BOTTOM LEFT: TERMINAL LOADER --- */}
            <div className={`absolute bottom-8 left-8 md:bottom-12 md:left-12 transition-opacity duration-1000 ${stage >= 1 ? "opacity-40" : "opacity-100"}`}>
              <TerminalLoader />
            </div>
            
            {/* Center Hero Content */}
            <div className="z-10 text-center flex flex-col items-center w-full select-none">
              
              {/* 1. MASSIVE MAIN TITLE (RESTORED DRAWING SVG) */}
              <div className="relative w-full flex justify-center items-center">
                  <svg viewBox="0 0 1320 350" className="w-[95vw] max-w-[1600px] h-auto overflow-visible">
                    
                    <defs>
                      <clipPath id="text-fill-clip">
                        <rect 
                          x="0" 
                          y="0" 
                          width={stage >= 1 ? "100%" : "0%"} 
                          height="100%" 
                          className="transition-all ease-in-out"
                          style={{ transitionDuration: '2000ms' }}
                        />
                      </clipPath>
                    </defs>

                    {/* Layer 1: The Stroke (Outline) */}
                    <text
                      x="50%"
                      y="50%"
                      dy=".35em"
                      textAnchor="middle"
                      className={`
                        font-bebas text-[19vw] md:text-[200px] tracking-wide 
                        stroke-[#FFD700] stroke-[3px] fill-transparent
                      `}
                      style={{
                        strokeDasharray: '1035px', 
                        strokeDashoffset: '1035px', 
                        animation: "drawStroke 5s ease-in-out forwards"
                      }}
                    >
                      SOLVIFY NMIT
                    </text>

                    {/* Layer 2: The White Fill (Whitening) */}
                    <text
                      x="50%"
                      y="50%"
                      dy=".35em"
                      textAnchor="middle"
                      clipPath="url(#text-fill-clip)"
                      className={`
                        font-bebas text-[19vw] md:text-[200px] tracking-wide 
                        fill-white stroke-none
                      `}
                    >
                      SOLVIFY NMIT
                    </text>

                  </svg>
              </div>

              {/* 2. SUBTITLES - REMOVED: Handled by page.tsx after transition */}
              <div className="mt-2 flex flex-col md:flex-row items-center justify-center gap-4 text-lg md:text-3xl font-montserrat font-semibold tracking-[0.3em] uppercase">
                {/* Empty container for height consistency, text removed to hide before decipher */}
              </div>
            </div>
            
            {/* Styles */}
            <style jsx global>{`
              @keyframes drawStroke {
                0% { stroke-dashoffset: 1035px; }
                100% { stroke-dashoffset: 0px; }
              }
            `}</style>
          </motion.div>
        )} 

        {/* --- FLOATING LOGO (Active during stages 2 and 3) --- */}
        {(stage >= 2 && stage <= 3) && ( 
          <FlyingLogo 
            sequenceStage={stage} 
          />
        )}
      </motion.section>
    </AnimatePresence>
  );
};

export default HomePage;