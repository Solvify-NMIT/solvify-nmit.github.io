"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const AboutUs = () => {
  // State to manage the visibility of the full-screen modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-[#050505] text-white py-12 md:py-16">

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 md:mb-[5vh] z-10 w-full"
      >
        <h1 className="font-bebas text-[clamp(2.5rem,6vw,5rem)] font-black uppercase tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] text-center px-4">
          About Us
        </h1>
        <div className="mx-auto mt-4 h-[3px] w-[100px] bg-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.4)]"></div>
      </motion.div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10 flex w-[90%] lg:w-[85%] max-w-[1400px] flex-col items-center justify-between gap-10 lg:flex-row lg:gap-[5%]"
      >

        {/* Text Section */}
        <div className="flex flex-[1.2] flex-col lg:block text-center lg:text-left font-montserrat">
          <p className="mb-6 text-justify text-base md:text-lg leading-[1.8] text-white lg:text-justify max-lg:text-center">
            <span className="font-bold text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.3)]">Solvify Club</span> is one
            of the recently initiated clubs of the CSE department, NMIT! It is
            not only a club but also a community that brings people from
            different mind-sets all together, with the motto to tackle real
            world challenges.
          </p>

          <p className="mb-6 text-justify text-base md:text-lg font-semibold leading-[1.8] text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.4)] lg:text-justify max-lg:text-center tracking-wide">
            Prioritising continuous learning, the club has also given an
            opportunity to its members to explore, learn and experience in the
            field of both tech and real world entities, fostering innovation and
            creative thinking.
          </p>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-[0.8] justify-center gap-[30px] w-full"
        >
          {/* Golden Photo Frame Wrapper */}
          <div
            onClick={toggleModal}
            className="
              relative inline-block p-[3px]
              bg-gradient-to-br from-[#FFD700] via-[#FFF4B8] to-[#FFD700]
              rounded-[18px]
              shadow-[0_0_30px_rgba(255,215,0,0.5)]
              transition-all duration-300 ease-out
              cursor-pointer 
              hover:shadow-[0_0_40px_rgba(255,215,0,0.8)]
              hover:scale-[1.03]
              max-w-full
            "
          >
            <img
              src="/Components for Website/AboutUsComp1.jpeg"
              alt="Community"
              className="
                block
                max-h-[280px] md:max-h-[360px] w-auto
                object-contain
                rounded-[15px]
                transition-transform duration-500
                max-w-full
              "
            />
          </div>
        </motion.div>
      </motion.div>

      {/* --- FULL SCREEN MODAL --- */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]/90 p-4 backdrop-blur-md"
          onClick={toggleModal}
        >
          {/* Close Button */}
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="absolute top-5 right-5 z-[10000] p-3 rounded-full bg-[#050505]/80 border-2 border-[#FFD700] text-[#FFD700] transition-all duration-300 hover:bg-[#FFD700] hover:text-[#050505] shadow-[0_0_15px_rgba(255,215,0,0.6)] hover:shadow-[0_0_25px_rgba(255,215,0,0.9)]"
            onClick={toggleModal}
          >
            <X size={28} />
          </motion.button>

          {/* Expanded Image */}
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            src="/Components for Website/AboutUsComp1.jpeg"
            alt="Community Fullscreen"
            className="max-h-[85vh] max-w-full rounded-lg object-contain border-2 border-[#FFD700] shadow-[0_0_50px_rgba(255,215,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

    </div>
  );
};

export default AboutUs;