"use client";

import React from "react";
import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import { coreTeam, teamMembers } from "@/lib/data/teamData";

const TeamHome = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-[#050505] text-white py-12 md:py-16">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-16 z-10 w-full"
      >
        <h1 className="font-bebas text-[clamp(2.5rem,6vw,5rem)] font-black uppercase tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] text-center px-4">
          Meet The Team
        </h1>
        <div className="mx-auto mt-4 h-[3px] w-[100px] bg-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.4)]"></div>
      </motion.div>

      {/* Core Team Section */}
      <div className="w-[90%] lg:w-[85%] max-w-[1400px] mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-montserrat text-2xl md:text-3xl font-bold text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.4)] mb-6 md:mb-8 text-center md:text-left tracking-wide"
        >
          Core Team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {coreTeam.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>

      {/* Team Members Section */}
      <div className="w-[90%] lg:w-[85%] max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-montserrat text-2xl md:text-3xl font-bold text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.4)] mb-6 md:mb-8 text-center md:text-left tracking-wide"
        >
          Team Members
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.name}
              member={member}
              index={coreTeam.length + index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamHome;
