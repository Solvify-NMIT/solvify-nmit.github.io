import React, { useState } from 'react';
import image from "../assets/Projects_comp1.svg";
import image1 from "../assets/Projects_comp2.svg";

const ProjectCard = ({ project }) => (
  <div className="transform scale-90">
    <div className="bg-white rounded-full text-black text-2xl py-2 text-center w-12 font-bold relative top-4 left-36">
      {project.id}
    </div>

    <div className="rounded-3xl shadow-[6px_6px_0px_0px_#ffd149] overflow-hidden">
      <div className="border-b-4 border-black bg-yellow-400 text-black text-2xl md:text-3xl font-bold h-[100px] flex items-center justify-center">
        {project.name}
      </div>

      <div className="bg-white text-black flex flex-col items-center justify-center gap-4 px-6 py-4 h-[250px]">
        <p className="text-center text-base md:text-lg">{project.description}</p>
        <button className="border border-black text-black bg-white text-sm md:text-base font-bold py-1 px-4 rounded-full w-1/2">
          View Project
        </button>
        <button className="bg-black text-yellow-400 text-sm md:text-base py-1 font-semibold rounded-full w-1/2">
          GitHub Link
        </button>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    { id: 1, name: "Mini health chatbot", description: "An AI-powered health assistant chatbot to give instant responses based on symptoms." },
    { id: 2, name: "Code Collab", description: "Real-time collaborative code editor supporting multiple languages and live sharing." },
    { id: 3, name: "Career Portal", description: "Centralized career portal with resources, internships, and mentor connections." },
    { id: 4, name: "Event Manager", description: "One-stop dashboard for organizing and tracking Solvify events." },
    { id: 5, name: "Bridge2Code", description: "Upcoming education platform bridging college learning and industry skills." },
    { id: 6, name: "Solvify Connect", description: "Internal communication tool built for smooth coordination among club teams." },
  ];

  const toggleProjectView = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section id="projects" className="min-h-screen bg-black text-white px-4 md:px-12 mt-40 flex flex-col items-center relative">
      {/* Decorative SVGs */}
      <img src={image} alt="Left design" className="absolute left-0 top-[-80px] w-40 md:w-60" />
      <img src={image1} alt="Right design" className="absolute right-0 bottom-[-80px] w-40 md:w-60" />

      {/* Heading */}
      <div className="text-center mb-12">
        <h1
          className="text-4xl md:text-5xl font-extrabold"
          style={{ WebkitTextStroke: "1px #ffd149", color: "transparent" }}
        >
          PROJECTS
        </h1>
        <p className="text-md md:text-lg mt-8 max-w-3xl mx-auto">
          Discover the impactful solutions built by our team—from health chatbots to internal tools that streamline our operations.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {(showAllProjects ? projects : projects.slice(0, 3)).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleProjectView}
        className="bg-yellow-400 text-black font-bold px-8 py-2 rounded-full transition duration-300 hover:bg-yellow-300"
      >
        {showAllProjects ? "Close" : "View All"}
      </button>
    </section>
  );
};

export default Projects;