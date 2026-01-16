"use client";

import React, { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamCard from "@/components/TeamCard";
import { getMembersByDomain, TeamMember } from "@/lib/data/MainTeamData";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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
    const [activeTab, setActiveTab] = useState<string>("");
    const [availableDomains, setAvailableDomains] = useState<TeamMember["domain"][]>([]);

    // Calculate available domains on mount or just derive it
    useEffect(() => {
        const valid = DOMAINS.filter((d) => getMembersByDomain(d).length > 0);
        setAvailableDomains(valid);
        if (valid.length > 0) setActiveTab(valid[0]);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Offset for sticky navbar + spacing
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
            setActiveTab(id);
        }
    };

    // Intersection Observer to update active tab on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveTab(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -50% 0px", // Trigger when section is near top/center
                threshold: [0, 0.1, 0.5],
            }
        );

        availableDomains.forEach((domain) => {
            const el = document.getElementById(domain);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [availableDomains]);

    // Framer Motion for sidebar animations
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.8]);

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FFD700] selection:text-black">
            <Navbar skipIntro={true} />

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-8 pt-32 pb-20">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* LEFT SIDEBAR (Sticky) */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block h-fit sticky top-32">
                        <motion.div style={{ scale, opacity }} className="flex flex-col gap-8">
                            <div>
                                <h1 className="font-bebas text-6xl text-[#FFD700] tracking-wider mb-2">
                                    THE TEAM
                                </h1>
                                <p className="font-montserrat text-white/70 text-sm leading-relaxed">
                                    Meet the passionate individuals driving innovation and creativity at Solvify.
                                    From tech wizards to design gurus, we are a diverse family.
                                </p>
                            </div>

                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-3 border-l-2 border-white/10 pl-6">
                                {availableDomains.map((domain) => (
                                    <button
                                        key={domain}
                                        onClick={() => scrollToSection(domain)}
                                        className={`text-left font-titillium text-lg uppercase tracking-widest transition-all duration-300 ${activeTab === domain
                                                ? "text-[#FFD700] font-bold md:translate-x-2"
                                                : "text-white/50 hover:text-white"
                                            }`}
                                    >
                                        {domain}
                                    </button>
                                ))}
                            </nav>


                        </motion.div>
                    </aside>

                    {/* MOBILE HEADER (Visible only on mobile) */}
                    <div className="lg:hidden mb-8 text-center">
                        <h1 className="font-bebas text-5xl text-[#FFD700] tracking-wider mb-2">
                            MEET THE TEAM
                        </h1>
                        <p className="font-montserrat text-white/70 text-sm px-4">
                            Swipe down to explore our departments.
                        </p>
                        {/* Mobile Quick Links Chips */}
                        <div className="flex flex-wrap gap-2 justify-center mt-6">
                            {availableDomains.map((domain) => (
                                <button
                                    key={'mob-' + domain}
                                    onClick={() => scrollToSection(domain)}
                                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border border-white/10 ${activeTab === domain ? 'bg-[#FFD700] text-black' : 'bg-white/5 text-white/70'
                                        }`}
                                >
                                    {domain}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT CONTENT (Scrollable) */}
                    <main className="flex-1 min-h-screen">
                        <div className="space-y-32">
                            {availableDomains.map((domain) => {
                                const members = getMembersByDomain(domain);
                                return (
                                    <section key={domain} id={domain} className="scroll-mt-32">
                                        {/* Section Header */}
                                        <div className="flex items-center gap-4 mb-12">
                                            <h2 className="font-bebas text-4xl md:text-5xl text-white opacity-90">
                                                {domain}
                                            </h2>
                                            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#FFD700]/50 to-transparent"></div>
                                        </div>

                                        {/* Grid */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
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
            </div>

            <Footer />
        </div>
    );
};

export default TeamPage;
