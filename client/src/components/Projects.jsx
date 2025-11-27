import React, { useState } from 'react';
import image from "../assets/Projects_comp1.svg"
import image1 from "../assets/Projects_comp2.svg"

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Sample project data
  const projects = [
    { id: 1, name: "Mini health chatbot", description: "classical Latin literature from 45 BC, making it over 2000 years old" },
    { id: 2, name: "Project Name", description: "classical Latin literature from 45 BC, making it over 2000 years old" },
    { id: 3, name: "Project Name", description: "classical Latin literature from 45 BC, making it over 2000 years old" },
    { id: 4, name: "Mini health chatbot", description: "classical Latin literature from 45 BC, making it over 2000 years old" },
    { id: 5, name: "Project Name", description: "classical Latin literature from 45 BC, making it over 2000 years old" },
    { id: 6, name: "Project Name", description: "classical Latin literature from 45 BC, making it over 2000 years old" },
  ];

  const toggleProjectView = () => {
    setShowAllProjects(!showAllProjects);
  };

  const ProjectCard = ({ project }) => (
    <div className='scale-90 '>
      <div className='bg-white rounded-full text-black text-2xl  py-2  text-center max-w-[50px]  font-bold relative top-4 left-36 '>{project.id}</div>
      <div  className="rounded-b-3xl rounded-t-3xl" style={{ boxShadow: '6px 6px 0px 0px rgba(255, 209, 73, 1)' }}>
             
        <div className='flex flex-col items-center border border-b-4 border-black '>
          
          <div className='bg-Yellow text-black w-full text-3xl font-bold px-8 py-4 text-center outline outline-white h-[100px] flex items-center justify-center'>{project.name}</div>
        </div>
        <div className='outline-[8px] flex flex-col items-center justify-center gap-4 bg-white h-[250px] rounded-b-3xl '>
          <div className='text-black text-xl px-8 font-normal text-center'>{project.description}</div>
          <button className="border border-black outline  text-black bg-white text-lg font-bold py-1 px-6 rounded-full w-1/2  ">
            View Project
          </button>
          <button className="bg-black text-Yellow text-sm py-1 font-semibold text-xl  rounded-full w-1/2">
            Github link
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white flex justify-between relative mt-40">
      {/* Left spiral div - placeholder for your image/svg */}
      <div className="relative top-[-100px] max-w-[250px]">
        <img src={image} />
      </div>

      <div className="py-12 px-6">
        <div className="text-center mb-12">
          <h1 className='text-5xl font-extrabold' style={{
            WebkitTextStroke: "1px #ffd149",
            color: "transparent",
          }}>PROJECTS</h1>
          <p className="text-md px-8 mt-10 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam alias aliquid omnis consequatur cum recusandae saepe id? Non reiciendis neque ullam ipsam totam explicabo impedit id accusantium, voluptas quaerat?
          </p>
        </div>

        {!showAllProjects ? (
          <>
            <div className="grid grid-cols-3 gap-8 mb-12">
              {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <div className="flex justify-center mb-12">
              <button
                className="bg-Yellow text-black px-8 py-2 rounded-full font-bold"
                onClick={toggleProjectView}
              >
                View All
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-3 gap-8 mb-12">
              {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8 mb-12">
              {projects.slice(3, 6).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <div className="flex justify-center mb-12">
              <button
                className="bg-Yellow text-black px-8 py-2 rounded-full font-bold"
                onClick={toggleProjectView}
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>

      <div className="relative top-[200px] max-w-[250px] ">
        <img src={image1} />
      </div>
    </div>
  );
};

export default Projects;