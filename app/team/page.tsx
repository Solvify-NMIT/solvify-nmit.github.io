"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import { getMembersByDomain, TeamMember } from "@/lib/data/MainTeamData";
import { motion } from "framer-motion";

// Domains to check (order matters for display)
const DOMAINS: TeamMember["domain"][] = [
    "Heads",
    "Tech Team",
    "Design Team",
    "Content Team",
    "Operations Team",
    "PR Team",
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

            <div className="relative z-10 w-full pt-24 pb-20">

                {/* CENTERED HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 md:mb-16 text-center w-full"
                >
                    <h1 className="font-bebas text-[clamp(2.5rem,6vw,5rem)] font-black uppercase tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] mb-4">
                        MEET THE TEAM
                    </h1>
                    <div className="mx-auto h-[3px] w-[100px] bg-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.4)]"></div>
                </motion.div>

                {/* MAIN CONTENT */}
                <main className="min-h-screen">
                    <div className="space-y-16 md:space-y-24 w-[90%] lg:w-[85%] max-w-[1400px] mx-auto">
                        {availableDomains.map((domain) => {
                            const members = getMembersByDomain(domain);
                            return (
                                <section key={domain} id={domain} className="scroll-mt-40">
                                    {/* Section Header */}
                                    <div className="mb-6 md:mb-8 text-center md:text-left">
                                        <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.4)] tracking-wide inline-flex items-center gap-4">
                                            {domain}
                                        </h2>
                                    </div>

                                    {/* Grid */}
                                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
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
