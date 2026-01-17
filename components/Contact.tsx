
"use client";

import React, { useState } from "react";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [phoneError, setPhoneError] = useState<string | null>(null);

    const validatePhone = (phone: string) => {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPhoneError(null);
        setMessage(null);

        const form = e.currentTarget;
        const formData = {
            name: (form[0] as HTMLInputElement).value,
            email: (form[1] as HTMLInputElement).value,
            phone: (form[2] as HTMLInputElement).value,
            message: (form[3] as HTMLTextAreaElement).value,
        };

        if (!validatePhone(formData.phone)) {
            setPhoneError("Phone number must be exactly 10 digits.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setMessage("Sent successfully!");
                form.reset();
                setTimeout(() => setMessage(null), 3000);
            } else {
                setMessage("Failed to send the message. Please try again.");
            }
        } catch (error) {
            setMessage("An error occurred. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden bg-[#050505] text-white py-24 md:py-20">

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-[100px]" />
            </div>

            {/* Title Section */}
            <div className="mb-12 md:mb-16 z-10 w-full text-center">
                <h1 className="font-bebas text-[clamp(2.5rem,6vw,5rem)] font-black uppercase tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] px-4">
                    Contact Us
                </h1>
                <div className="mx-auto mt-4 h-[3px] w-[100px] bg-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.4)]"></div>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row-reverse w-[90%] lg:w-[85%] max-w-[1400px] gap-10 lg:gap-16">

                {/* Form Section */}
                <div className="flex-1">
                    <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.4)] mb-6">
                        Get in Touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="group">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#FFD700] focus:border-[#FFD700] transition-all duration-300 font-montserrat"
                                required
                            />
                        </div>

                        <div className="group">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#FFD700] focus:border-[#FFD700] transition-all duration-300 font-montserrat"
                                required
                            />
                        </div>

                        <div className="group">
                            <input
                                type="tel"
                                placeholder="Phone"
                                className={`w-full px-5 py-4 rounded-xl border ${phoneError ? "border-red-500" : "border-white/10"
                                    } bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#FFD700] focus:border-[#FFD700] transition-all duration-300 font-montserrat`}
                            />
                            {phoneError && (
                                <p className="mt-2 text-red-400 text-sm font-medium font-montserrat">{phoneError}</p>
                            )}
                        </div>

                        <div className="group">
                            <textarea
                                rows={5}
                                placeholder="How can we help you?"
                                className="w-full px-5 py-4 rounded-xl border border-white/10 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#FFD700] focus:border-[#FFD700] transition-all duration-300 resize-none font-montserrat"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full px-8 py-4 rounded-full bg-[#FFD700] hover:bg-[#E5C100] text-black font-bold uppercase tracking-wider transition-all duration-300 ease-in-out transform hover:scale-[1.02] shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] font-montserrat"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>

                    {message && (
                        <p
                            className={`mt-4 text-center font-montserrat font-semibold ${message.includes("successfully") ? "text-green-400" : "text-red-400"
                                }`}
                        >
                            {message}
                        </p>
                    )}
                </div>

                {/* Map Section */}
                <div className="flex-1 h-full min-h-[400px] lg:min-h-auto">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#FFD700]/30 shadow-[0_0_30px_rgba(255,215,0,0.1)] min-h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.521635379403!2d77.58508387484422!3d13.1294626872006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae170d10bb559b%3A0x2bb3892a626cf9ba!2sNitte%20Meenakshi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1760554935154"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="w-full h-full absolute inset-0 opacity-80 hover:opacity-100 transition-opacity duration-500"
                        ></iframe>

                        {/* Map Overlay Button */}
                        <a
                            href="https://maps.app.goo.gl/WW5XvcC2jwoXsjfx6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#050505]/80 border border-[#FFD700] flex items-center justify-center shadow-[0_0_15px_rgba(255,215,0,0.4)] transition-all duration-300 hover:scale-110 hover:bg-[#FFD700] hover:text-black group z-10"
                            aria-label="Open directions in map"
                        >
                            <svg
                                className="w-5 h-5 text-[#FFD700] group-hover:text-black transition-colors"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
