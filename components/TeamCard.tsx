"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Globe } from "lucide-react";
import { TeamMember } from "@/lib/data/teamData";

interface TeamCardProps {
    member: TeamMember;
    index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#FFD700] rounded-lg p-4 shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all duration-300 hover:scale-[1.02] group"
        >
            {/* Image Container */}
            <div className="w-full border-2 border-[#FFD700]/50 rounded-lg overflow-hidden mb-4">
                <div className="relative w-full aspect-square">
                    <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
            </div>

            {/* Name */}
            <h2 className="font-montserrat text-xl md:text-2xl font-bold text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.3)] mb-1 tracking-wide">
                {member.name}
            </h2>

            {/* Position */}
            <h3 className="font-montserrat text-sm md:text-base text-white mb-4">
                {member.position}
            </h3>

            {/* Social Links */}
            <div className="flex gap-2 justify-end mt-auto pt-2">
                {member.link && (
                    <a
                        href={member.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 text-[#FFD700] hover:text-[#FFF4B8] transition-all duration-200 opacity-70 hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]"
                        aria-label={`${member.name}'s website`}
                    >
                        <Globe size={24} />
                    </a>
                )}
                {member.github && (
                    <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 text-[#FFD700] hover:text-[#FFF4B8] transition-all duration-200 opacity-70 hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]"
                        aria-label={`${member.name}'s GitHub`}
                    >
                        <Github size={24} />
                    </a>
                )}
                {member.linkedin && (
                    <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-6 h-6 text-[#FFD700] hover:text-[#FFF4B8] transition-all duration-200 opacity-70 hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]"
                        aria-label={`${member.name}'s LinkedIn`}
                    >
                        <Linkedin size={24} />
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default TeamCard;

