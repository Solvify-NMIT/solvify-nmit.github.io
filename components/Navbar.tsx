"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Sync with HomePage animation timeline: Intro finishes at 9400ms.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 9400); // Synchronized to 9400ms for instant appearance after jump
    return () => clearTimeout(timer);
  }, []);

  const leftLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "#about" },
    { name: "EVENTS", path: "#events" },
  ];

  const rightLinks = [
    // { name: "PROJECTS", path: "#projects" },
    { name: "TEAM", path: "#team" },
    { name: "CONTACT US", path: "#contact us" },
  ];

  if (!isVisible) return null;

  // Animation variants for the link containers
  const linkContainerVariants = {
    closed: {
      width: 0,
      opacity: 0,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }
    },
    open: {
      width: "auto",
      opacity: 1,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }
    }
  };

  return (
    <nav className="fixed top-4 sm:top-8 left-0 right-0 z-50 flex justify-center items-center pointer-events-none">
      {/* Container */}
      <motion.div
        layout
        className="pointer-events-auto bg-black/60 backdrop-blur-md border border-white/10 rounded-full shadow-2xl overflow-hidden"
        initial={{ borderRadius: 50 }}
      >
        <div className="flex items-center px-1 py-1 sm:px-2 sm:py-2">

          {/* LEFT LINKS CONTAINER */}
          <motion.div
            variants={linkContainerVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            className="overflow-hidden flex items-center"
          >
            {/* Responsive spacing for mobile (sm:gap-8, sm:px-8) */}
            <div className="flex items-center gap-4 px-4 sm:gap-8 sm:px-8 whitespace-nowrap">
              {leftLinks.map((item) => (
                <NavLink key={item.name} item={item} />
              ))}
            </div>
          </motion.div>

          {/* CENTER TOGGLE BUTTON (LOGO) - Responsive size */}
          <motion.button
            layout
            layoutId="solvify-logo-center" // THIS RECEIVES THE FLYING LOGO
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`
                    relative z-50 flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center 
                    rounded-full transition-all duration-300
                    ${isOpen ? 'bg-white/10' : 'bg-black/40'}
                    border-2 border-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.3)]
                    hover:shadow-[0_0_25px_rgba(255,215,0,0.6)]
                `}
          >
            {/* Responsive logo image size */}
            <img
              src="/solvify-logo.png"
              alt="Solvify"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
          </motion.button>

          {/* RIGHT LINKS CONTAINER */}
          <motion.div
            variants={linkContainerVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            className="overflow-hidden flex items-center"
          >
            {/* Responsive spacing for mobile (sm:gap-8, sm:px-8) */}
            <div className="flex items-center gap-4 px-4 sm:gap-8 sm:px-8 whitespace-nowrap">
              {rightLinks.map((item) => (
                <NavLink key={item.name} item={item} />
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </nav>
  );
};

// Sub-component for links
const NavLink = ({ item }: { item: { name: string; path: string } }) => {

  // Prevent navigation for development stage
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only prevent default if the link is an internal fragment link
    if (item.path.startsWith('#') && item.path !== '#') {
      e.preventDefault();
      // You can add smooth scrolling logic here later if needed
      // document.getElementById(item.path.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link
      href={item.path}
      onClick={handleClick} // Use the new click handler
      className="
                relative text-sm sm:text-base font-bold tracking-widest text-white/80 
                font-montserrat transition-all duration-300
                hover:text-[#FFD700] hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]
            "
    >
      {item.name}
    </Link>
  );
};

export default Navbar;