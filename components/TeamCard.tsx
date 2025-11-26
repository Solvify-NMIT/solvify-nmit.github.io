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
    <div className="team-card">
      <div className="image-container">
        <div className="circle-bg"></div>
        <img src={image} alt={name} className="profile-img" />
      </div>
      <div className="card-content">
        <h3 className="name">{name}</h3>
        <p className="role">{role}</p>
        <div className="social-links">
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href={social.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
