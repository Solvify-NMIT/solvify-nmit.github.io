"use client";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactPage() {

    return (
        <>
            <Navbar skipIntro={true} />
            <Contact />
            <Footer />

        </>
    );
}