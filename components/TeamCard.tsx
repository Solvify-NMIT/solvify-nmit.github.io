"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Globe } from "lucide-react";
import { TeamMember } from "@/lib/data/MainTeamData";

interface TeamCardProps {
    member: TeamMember;
    index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="group relative flex flex-col items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 shadow-lg transition-all duration-500"
        >
            {/* Image Container */}
            <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-black/20 border border-white/5 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60 transition-opacity duration-300" />
                <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition-transform duration-700"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center w-full">
                {/* Name */}
                <h2 className="font-bebas text-xl md:text-2xl tracking-wider text-white transition-colors duration-300 mb-1">
                    {member.name}
                </h2>

                {/* Position */}
                <h3 className="font-montserrat text-[10px] md:text-xs font-semibold text-white/60 uppercase tracking-[0.2em] mb-3 border-b border-white/10 pb-3 mx-2 transition-colors duration-300">
                    {member.position}
                </h3>

                {/* Social Links */}
                <div className="flex gap-4 justify-center items-center">
                    {member.link && (
                        <a
                            href={member.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/50 hover:text-[#FFD700] transition-all duration-300"
                            aria-label={`${member.name}'s website`}
                        >
                            <Globe size={20} />
                        </a>
                    )}
                    {member.github && (
                        <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/50 hover:text-[#FFD700] transition-all duration-300"
                            aria-label={`${member.name}'s GitHub`}
                        >
                            <Github size={20} />
                        </a>
                    )}
                    {member.linkedin && (
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/50 hover:text-[#FFD700] transition-all duration-300"
                            aria-label={`${member.name}'s LinkedIn`}
                        >
                            <Linkedin size={20} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default TeamCard;

