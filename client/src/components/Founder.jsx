// FounderSection.jsx
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function FounderSection() {
  return (
    <div className="bg-black text-white flex flex-col md:flex-row items-center justify-center py-20 px-8 md:px-20 gap-10">
      <div className="w-full md:w-1/2">
        <img src="/team/founder.jpg" alt="Founder" className="rounded-3xl w-full max-w-sm mx-auto hover:scale-105 transition duration-500 border-4 border-[#ffd149]" />
      </div>
      <div className="w-full md:w-1/2">
        {/* <h2 className="text-4xl font-bold text-[#ffd149] mb-4">Meet the Founder</h2> */}
        <p className="text-lg text-gray-300 mb-6">
          Hi, I'm Saurav, founder of Solvify Club. I'm passionate about helping students grow technically   and personally. I believe in the power of collaboration and innovation to solve real-world problems. My vision for Solvify is to create a community where students can learn, share, and grow together.
        </p>
        <div className="flex gap-4 text-[#ffd149]">
          <a href="https://linkedin.com/in/your-link" target="_blank" rel="noopener noreferrer" className="text-2xl"><FaLinkedin /></a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="text-2xl"><FaTwitter /></a>
        </div>
      </div>
    </div>
  );
}