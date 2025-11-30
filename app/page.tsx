"use client";

import AboutUs from "@/components/AboutUs";
import Instagram from "@/components/Instagram";
import Event from "@/components/Event";
import TeamHome from "@/components/TeamHome"
import ContactUsHome from "@/components/ContactUsHome";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import { useState, useEffect, useCallback } from "react"; 

// --- COMPONENT: SEQUENTIAL DECIPHER LOGIC (Functional Implementation) ---
const SequentialDecipher = ({ text, startTrigger, onComplete }) => {
    // Start with blank spaces matching the length of the text
    const [displayText, setDisplayText] = useState(text.replace(/./g, ' ')); 
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ12345567890$#@%&";
    
    // The animation logic is defined here
    const decipherLogic = useCallback(() => {
        if (!startTrigger) {
            setDisplayText(text.replace(/./g, ' '));
            return;
        }

        let revealIndex = 0;
        const interval = setInterval(() => {
            // Speed control (takes roughly 3 seconds to reveal the longest subtitle)
            revealIndex += 0.3; 
            
            const currentString = text
                .split("")
                .map((char, i) => {
                    if (i < Math.floor(revealIndex)) return char; // Revealed char
                    if (i === Math.floor(revealIndex)) return chars[Math.floor(Math.random() * chars.length)]; // Glitch char
                    return " "; // Unrevealed space
                })
                .join("");

            setDisplayText(currentString);

            if (revealIndex >= text.length) {
                clearInterval(interval);
                setDisplayText(text); // Show final text
                if (onComplete) oncomplete();
            }
        }, 50);

        return () => clearInterval(interval);
    }, [text, startTrigger, onComplete]);
    
    useEffect(() => {
        const cleanup = decipherLogic();
        return cleanup;
    }, [decipherLogic]);

    return <span className="inline-block min-h-[1em]">{displayText}</span>;
};


// --- COMPONENT: STATIC HOME PAGE CONTENT ---
// This renders the final, non-animated state of the title and subtitles, matching the TIGHTLY GROUPED CENTER alignment.
const StaticHomeContent = ({ startDecipher }) => (
    // This container reserves the full screen height (h-screen)
    <div className="h-screen w-full relative flex flex-col items-center justify-start bg-[#050505]">
        
        {/* 1. CONTENT BLOCK (Anchored to the top with responsive padding) */}
        <div 
            className="z-10 text-center flex flex-col items-center w-full" 
            // Responsive vertical position: 25vh for desktop/tablet, slightly higher (20vh) for mobile
            style={{ paddingTop: '25vh' }} 
        >
            
            {/* 1. MASSIVE MAIN TITLE (Final State) */}
            <div className="relative w-full flex justify-center items-center mb-2">
                <svg viewBox="0 0 1320 350" className="w-[95vw] max-w-[1600px] h-auto overflow-visible">
                    <text
                        x="50%"
                        y="50%"
                        dy=".35em"
                        textAnchor="middle"
                        className={`
                            font-bebas text-[19vw] md:text-[200px] tracking-wide 
                            fill-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]
                            stroke-none
                        `}
                    >
                        SOLVIFY NMIT
                    </text>
                </svg>
            </div>

            {/* 2. SUBTITLES (Final Decipher Trigger) */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-base md:text-3xl font-montserrat font-semibold tracking-[0.2em] md:tracking-[0.3em] uppercase">
                
                {/* Part 1: BRIDGING GAPS (Now triggered by startDecipher) */}
                <span className="text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.4)] min-w-[150px] md:min-w-[200px] text-center">
                    <SequentialDecipher text="BRIDGING GAPS" startTrigger={startDecipher} />
                </span>
                
                <span className="hidden md:inline text-gray-500 text-xl">•</span>
                
                {/* Part 2: SOLVING CHALLENGES (Now triggered by startDecipher) */}
                <span className="text-white min-w-[200px] md:min-w-[250px] text-center">
                    <SequentialDecipher text="SOLVING CHALLENGES" startTrigger={startDecipher} />
                </span>
            </div>
        </div>
        
        {/* Background Element - Cleaned to be just an empty div on the dark background */}
        <div className="absolute inset-0 pointer-events-none"></div>
    </div>
);


export default function Home() {
    const [introComplete, setIntroComplete] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);
    const [startDecipher, setStartDecipher] = useState(false); // NEW STATE for Decipher Trigger
    
    const handleIntroComplete = () => {
        // Step 1: Hide the fixed intro overlay
        setIntroComplete(true);
        
        // Step 2: Force scroll to the top of the content block (Y=0)
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); 
        
        // Step 3: Start Decipher animation and make content visible AFTER the scroll reset
        setTimeout(() => {
            setStartDecipher(true); // FINAL STEP: Start the animation on the static content
            setContentVisible(true);
        }, 100); // Small delay for browser to render initial StaticHomeContent
    };

    // Use useEffect to manage body overflow state
    useEffect(() => {
        if (!introComplete) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [introComplete]);

    return (
        <>
            
            {/* 1. Render HomePage (Fixed overlay) while the intro is running */}
            {!introComplete && (
                <HomePage onIntroComplete={handleIntroComplete} />
            )}

            {/* 2. Conditionally mount the rest of the page only after the intro is done */}
            <div 
                id="content-container"
                // Fade in the whole content block
                className={`relative z-10 transition-opacity duration-500 ${contentVisible ? "opacity-100" : "opacity-0"}`}
            >
                {/* Navbar is FIXED, so it floats over all content */}
                <Navbar /> 
                
                <div id="main-content-wrapper" className="relative z-10"> 
                    
                    {/* CRITICAL FIX: The Home Page Section (Page 1) */}
                    <div className="h-screen w-full relative bg-[#050505]">
                        <StaticHomeContent startDecipher={startDecipher} />
                    </div>


                    {/* The rest of the content starts here, flowing below the 100vh Home Section (Page 2) */}
                    <div id="subsequent-sections">
                        <AboutUs/>
                        <Event/>
                        <TeamHome/>
                        <Instagram/>
                        <ContactUsHome/>
                        <Footer /> 
                    </div>
                </div>
            </div>
        </>
    );
}