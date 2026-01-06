"use client";
import React, { useState } from "react";
import { Lightbulb, X } from "lucide-react";

const AboutUs = () => {
  // State to manage the visibility of the full-screen modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-black font-['Geist',sans-serif] text-white py-12 md:py-0">
      
      {/* Background Elements or Title */}
      <h1 className="mb-8 md:mb-[5vh] z-10 text-[clamp(2.5rem,6vw,5rem)] font-black uppercase tracking-[2px] text-black [-webkit-text-stroke:1.5px_#D4AF37] drop-shadow-[0_0_25px_rgba(212,175,55,0.8)] md:drop-shadow-[0_0_50px_rgba(212,175,55,0.5)] text-center px-4">
        About Us
      </h1>

      <div className="z-10 flex w-[90%] lg:w-[80%] max-w-[1200px] flex-col items-center justify-between gap-10 lg:flex-row lg:gap-[5%]">
        
        {/* Text Section */}
        <div className="flex flex-[1.2] flex-col lg:block text-center lg:text-left">
          <div className="mx-auto mb-[20px] h-[3px] w-[100px] bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)] lg:mx-0 lg:mb-[30px]"></div>

          <p className="mb-5 text-justify text-[clamp(0.9rem,1.1vw,1.1rem)] leading-[1.8] text-[#cccccc] lg:text-justify max-lg:text-center">
            <span className="font-bold text-[#D4AF37]">Solvify Club</span> is one
            of the recently initiated clubs of the CSE department, NMIT! It is
            not only a club but also a community that brings people from
            different mind-sets all together, with the motto to tackle real
            world challenges.
          </p>

          <p className="mb-5 text-justify text-[clamp(1.1rem,1.3vw,1.3rem)] font-medium leading-[1.8] text-[#D4AF37] lg:text-justify max-lg:text-center">
            Prioritising continuous learning, the club has also given an
            opportunity to its members to explore, learn and experience in the
            field of both tech and real world entities, fostering innovation and
            creative thinking.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex flex-[0.8] justify-center gap-[30px] w-full">
          {/* Golden Photo Frame Wrapper */}
          <div
            onClick={toggleModal} // Click handler to open modal
            className="
              relative inline-block p-[2px]
              bg-gradient-to-br from-[#F2D16B] to-[#BA8A0A]
              rounded-[18px]
              shadow-[0_0_55px_rgba(242,209,107,0.9)]
              transition-all duration-300 ease-out
              cursor-pointer 
              group-hover:shadow-[0_0_55px_rgba(242,209,107,0.9)]
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
                rounded-[12px]
                transition-transform duration-500
                max-w-full
              "
            />
          </div>
        </div>
      </div>

      {/* --- FULL SCREEN MODAL --- */}
      {isModalOpen && (
        <div 
          
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[0_0_55px_rgba(242,209,107,0.9)]/40 p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={toggleModal} // Clicking background closes modal
        >
          {/* Close Button */}
          <button 
            
            className="absolute top-5 right-5 z-[10000] p-2 text-[#D4AF37]  transition-colors hover:text-[#F2D16B] drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]"
            onClick={toggleModal}
          >
            <X size={32} />
          </button>

          {/* Expanded Image */}
          <img 
            src="/Components for Website/AboutUsComp1.jpeg" 
            alt="Community Fullscreen" 
            className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-[0_0_50px_rgba(212,175,55,0.5)]"
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
          />
        </div>
      )}

    </div>
  );
};

export default AboutUs;