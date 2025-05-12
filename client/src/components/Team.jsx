import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaLinkedin, FaGithub } from 'react-icons/fa';

const teamData = {
  2023: [
    {
      name: 'Alice',
      role: 'Backend Developer',
      image: '/team/alice.jpg',
      linkedin: 'https://linkedin.com/in/alice',
      github: 'https://github.com/alice',
    },
    {
      name: 'Bob',
      role: 'Frontend Developer',
      image: '/team/bob.jpg',
      linkedin: 'https://linkedin.com/in/bob',
      github: 'https://github.com/bob',
    },
    {
      name: 'Charlie',
      role: 'DevOps Engineer',
      image: '/team/charlie.jpg',
      linkedin: 'https://linkedin.com/in/charlie',
      github: 'https://github.com/charlie',
    },
    {
      name: 'David',
      role: 'Full Stack Developer',
      image: '/team/david.jpg',
      linkedin: 'https://linkedin.com/in/david',
      github: 'https://github.com/david',
    },
  ],
  2024: [
    {
      name: 'Eva',
      role: 'UI/UX Designer',
      image: '/team/eva.jpg',
      linkedin: 'https://linkedin.com/in/eva',
      github: 'https://github.com/eva',
    },
    {
      name: 'Frank',
      role: 'Cloud Architect',
      image: '/team/frank.jpg',
      linkedin: 'https://linkedin.com/in/frank',
      github: 'https://github.com/frank',
    },
    {
      name: 'Grace',
      role: 'Mobile Developer',
      image: '/team/grace.jpg',
      linkedin: 'https://linkedin.com/in/grace',
      github: 'https://github.com/grace',
    },
    {
      name: 'Hank',
      role: 'ML Engineer',
      image: '/team/hank.jpg',
      linkedin: 'https://linkedin.com/in/hank',
      github: 'https://github.com/hank',
    },
  ],
};

export default function TeamCarousel() {
  const years = Object.keys(teamData);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [index, setIndex] = useState(0);

  const members = teamData[selectedYear];
  const cardsPerView = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 3 : 4;

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % members.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [selectedYear]);

  const visibleTeam = [];
  for (let i = 0; i < cardsPerView; i++) {
    visibleTeam.push(members[(index + i) % members.length]);
  }

  return (
    <div className="bg-black  text-white py-12 px-4 relative">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#ffd149]">Meet Our Team</h2>

      {/* Dropdown */}
      <div className="flex justify-end mt-8 pr-10 mb-8">
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="bg-[#1a1a1a] border border-[#ffd149] text-white p-2 rounded-lg"
        >
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      {/* Carousel */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          className="text-[#ffd149] text-3xl hover:scale-110 transition"
        >
          <FaArrowLeft />
        </button>

        <div className="flex flex-wrap justify-center gap-8 transition-all duration-500">
          {visibleTeam.map((member, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] p-8 pl-12 rounded-2xl text-center shadow-md hover:scale-105 hover:shadow-yellow-500/20 transform transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full border-4 border-[#ffd149] hover:scale-110 transition-transform duration-300"
              />
              <h3 className="mt-4 text-xl font-semibold text-[#ffd149]">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
              <div className="mt-3 flex justify-center gap-4 text-[#ffd149] text-xl">
                <a href={member.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href={member.github} target="_blank" rel="noreferrer"><FaGithub /></a>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="text-[#ffd149] text-3xl hover:scale-110 transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}