import type { Metadata } from "next";
import { Bebas_Neue, Montserrat, Titillium_Web } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/Navbar"; // Removed from here
// import Footer from "@/components/Footer"; // REMOVED: Must be rendered conditionally in page.tsx
import LogoIntro from "@/components/LogoIntro";

// 1. Headline Font: Bebas Neue
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

// 2. Subtitle Font: Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// 3. Terminal Font: Titillium Web
const titillium = Titillium_Web({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-titillium",
});

export const metadata: Metadata = {
  title: "Solvify - Bridging Gaps",
  description: "The official website of Solvify Club",
};

// This component MUST return the <html> and <body> tags.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Mandatory Root Tags
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${montserrat.variable} ${titillium.variable} antialiased bg-[#050505] text-white overflow-x-hidden`}
      >
        {/* LogoIntro is rendered first. It is fixed and hides the entire screen until the animation is complete. */}
        <LogoIntro />
        
        {/* Main Content Area: Now completely reliant on children (page.tsx) */}
        <div className="relative z-0">
          <main>
            {children}
          </main>
          {/* Footer removed from here. It must be rendered inside the conditional block in page.tsx */}
        </div>
      </body>
    </html>
  );
}