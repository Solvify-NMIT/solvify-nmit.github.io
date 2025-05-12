import React from 'react';
import image1 from "../assets/Hero_comp1.svg";
import logo from "../assets/solvifycroplogo.png";
import image2 from "../assets/Hero_comp2.svg";

const Home = ({ scrollToProject }) => {
  return (
    <section className="min-h-screen pt-32 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between bg-black text-white gap-10">
      {/* Left SVG */}
      <div className="order-1 md:order-none hidden md:block">
  <img src={image1} className="w-52 md:w-80" alt="Left Illustration" />
</div>

      {/* Center Content */}
      <div className="flex flex-col items-center text-center gap-6">
        <img src={logo} className="rounded-lg w-24 md:w-40" alt="Solvify Logo" />
        <h2 className="text-yellow-400 text-3xl md:text-4xl font-light tracking-wide">Solvify</h2>
        <h1 className="text-yellow-400 text-3xl md:text-5xl font-bold">BRIDGING GAPS</h1>
        <h1 className="text-2xl md:text-5xl font-bold">SOLVING CHALLENGES</h1>
        <button
          onClick={scrollToProject}
          className="bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold text-md md:text-lg px-5 py-2 rounded-full transition duration-300"
        >
          GO TO PROJECTS
        </button>
      </div>

      {/* Right SVG */}
      <div className="hidden md:block relative top-16">
        <img src={image2} className="w-52 md:w-80 max-h-[500px]" alt="Right Illustration" />
      </div>
    </section>
  );
};

export default Home;