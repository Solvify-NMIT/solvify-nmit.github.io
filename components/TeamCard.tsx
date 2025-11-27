import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  social: {
    linkedin: string;
    instagram: string;
  };
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, social }) => {
  return (
    <div className="group relative flex h-[320px] flex-col items-center justify-center overflow-hidden rounded-[20px] border-2 border-transparent bg-[#f4d03f] p-5 text-center transition-all duration-300 hover:border-white/20 hover:bg-transparent hover:p-0 hover:scale-105 hover:z-10">
      {/* Shine effect */}
      <div className="pointer-events-none absolute -left-full top-0 z-[1] h-full w-1/2 -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-[left] duration-500 group-hover:left-full"></div>

      <div className="relative z-[2] mb-5 flex h-[140px] w-[140px] items-center justify-center transition-all duration-300 group-hover:mb-0 group-hover:h-1/2 group-hover:w-full group-hover:rounded-none">
        <div className="absolute h-[120px] w-[120px] rounded-full border-[3px] border-black bg-white transition-opacity duration-300 group-hover:opacity-0"></div>
        <img
          src={image}
          alt={name}
          className="relative z-[2] h-[110px] w-[110px] rounded-full object-cover transition-all duration-300 group-hover:h-full group-hover:w-full group-hover:rounded-none"
        />
      </div>

      <div className="relative z-[2] mt-0 w-full transition-all duration-300 group-hover:flex group-hover:h-1/2 group-hover:flex-col group-hover:items-center group-hover:justify-center">
        <h3 className="mb-[5px] mt-[10px] text-[1.5rem] font-[800] text-black transition-colors duration-300 group-hover:text-white">{name}</h3>
        <p className="mb-[15px] text-[1rem] font-[600] uppercase text-[#555] transition-colors duration-300 group-hover:text-[#ccc]">{role}</p>
        <div className="flex justify-center gap-[15px]">
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[1.5rem] text-black transition-all duration-300 hover:scale-110 hover:text-[#333] group-hover:text-white">
            <FaLinkedin />
          </a>
          <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="text-[1.5rem] text-black transition-all duration-300 hover:scale-110 hover:text-[#333] group-hover:text-white">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
