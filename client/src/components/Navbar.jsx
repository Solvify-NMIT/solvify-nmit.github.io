import React, { useState } from "react";
import logo from "../assets/solvifycroplogo.png";

const Navbar = ({ scrollToAbout, scrollToHome, scrollToEvent, scrollToProject, scrollToTeam, scrollToPhoto, scrollToInsta }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { link: "Home", action: scrollToHome },
    { link: "About", action: scrollToAbout },
    { link: "Event", action: scrollToEvent },
    { link: "Projects", action: scrollToProject },
    { link: "Team", action: scrollToTeam },
    { link: "Photos", action: scrollToPhoto },
    { link: "Feed", action: scrollToInsta },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-black text-white shadow-lg">
      <nav className="flex items-center justify-between px-6 md:px-28 py-4">
        {/* Logo */}
        <button onClick={scrollToHome}>
          <img src={logo} alt="Solvify Logo" className="w-10 md:w-12 rounded-lg" />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-semibold text-sm md:text-lg">
          {navItems.map(({ link, action }) => (
            <li key={link}>
              <button onClick={action} className="hover:text-yellow-400 transition duration-200">
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-black">
          {navItems.map(({ link, action }) => (
            <li key={link}>
              <button
                onClick={() => {
                  action();
                  setMenuOpen(false);
                }}
                className="text-lg hover:text-yellow-400 transition"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;