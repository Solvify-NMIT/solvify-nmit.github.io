import React from 'react';

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image }) => {
  return (
    <div className="group relative flex h-[320px] flex-col items-center justify-center overflow-hidden rounded-[20px] border-2 border-transparent bg-[#f4d03f] p-0 text-center transition-all duration-500 hover:scale-105 hover:border-white/40 hover:shadow-[0_0_30px_rgba(244,208,63,0.4)]">
      {/* Shine effect */}
      <div className="pointer-events-none absolute -left-full top-0 z-[1] h-full w-1/2 -skew-x-[25deg] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-[left] duration-700 group-hover:left-full"></div>

      {/* Image Container - 65% height */}
      <div className="relative h-[65%] w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      </div>

      {/* Content Container - Remaining height */}
      <div className="relative z-[2] flex h-[35%] w-full flex-col items-center justify-center bg-[#f4d03f] transition-colors duration-500 group-hover:bg-black/90">
        <h3 className="mb-[5px] text-[1.5rem] font-[800] text-black transition-colors duration-500 group-hover:text-[#f4d03f]">{name}</h3>
        <p className="text-[1rem] font-[600] uppercase text-[#555] transition-colors duration-500 group-hover:text-white/80">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
