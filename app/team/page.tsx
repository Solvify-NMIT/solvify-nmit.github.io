"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import { getMembersByDomain, TeamMember } from "@/lib/data/MainTeamData";
import { motion } from "framer-motion";

// Domains to check (order matters for display)
const DOMAINS: TeamMember["domain"][] = [
    "Lead",
    "Core Team",
    "Technical",
    "Graphics",
    "Documentation",
    "Social Media",
];

const TeamPage = () => {
    const [availableDomains, setAvailableDomains] = useState<TeamMember["domain"][]>([]);

    // Calculate available domains on mount
    useEffect(() => {
        const valid = DOMAINS.filter((d) => getMembersByDomain(d).length > 0);
        setAvailableDomains(valid);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FFD700] selection:text-black">
            <Navbar skipIntro={true} />

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-8 pt-24 pb-20">

                {/* CENTERED HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 max-w-4xl mx-auto"
                >
                    <h1 className="font-bebas text-8xl md:text-9xl text-[#FFD700] tracking-wider mb-6 leading-none drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                        THE TEAM
                    </h1>
                    <p className="font-montserrat text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        Meet the passionate individuals driving innovation and creativity at Solvify.
                        From tech wizards to design gurus, we are a diverse family.
                    </p>
                </motion.div>

                {/* MAIN CONTENT */}
                <main className="min-h-screen">
                    <div className="space-y-32">
                        {availableDomains.map((domain) => {
                            const members = getMembersByDomain(domain);
                            return (
                                <section key={domain} id={domain} className="scroll-mt-40">
                                    {/* Section Header */}
                                    <div className="relative mb-16 group">
                                        <div className="flex items-end gap-6">
                                            <h2 className="font-bebas text-6xl md:text-8xl text-white opacity-90 tracking-wide">
                                                {domain}
                                            </h2>
                                            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#FFD700]/30 to-transparent mb-4 group-hover:from-[#FFD700]/60 transition-colors duration-500"></div>
                                        </div>
                                        <div className="text-white/40 text-sm font-montserrat uppercase tracking-[0.3em] mt-2 ml-1">
                                            {members.length} member{members.length !== 1 ? 's' : ''}
                                        </div>
                                    </div>

                                    {/* Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                        {members.map((member, idx) => (
                                            <TeamCard
                                                key={`${member.name}-${idx}`}
                                                member={member}
                                                index={idx}
                                            />
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default TeamPage;
