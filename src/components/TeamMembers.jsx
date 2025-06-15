import React from 'react';
import { Element } from 'react-scroll';
import web_gradient from "../assets/web_gradient.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

// Initialize FontAwesome library
library.add(fab, faLinkedin, faInstagram);

function TeamMembers() {
  const teamMembers = [
    {
      name: "xyz",
      position: "Coordinator (Admin)",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "mailto:example@email.com"
    },
    {
      name: "xyz",
      position: "Coordinator (Finance)",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "mailto:example@email.com"
    },
    {
      name: "xyz",
      position: "Co-Coordinator (Admin)",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "mailto:example@email.com"
    },
    {
      name: "S.",
      position: "Co-Coordinator (Finance)",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "mailto:example@email.com"
    },
    {
      name: "xxyz",
      position: "Technical Head",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "mailto:example@email.com"
    },
    {
      name: "xyz",
      position: "Marketing Head",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      email: "mailto:example@email.com"
    }
  ];

  return (
    <Element name="team-section">
      <div 
        className="min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${web_gradient})` }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-20 py-20">
          {/* Enhanced Heading Section */}
          <div className="text-center mb-10">
            <h1 className="text-6xl font-bold text-white mb-4">
              Our Team
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
              <span className="text-white/90 text-lg font-light">Building the Future Together</span>
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center group">
                {/* Enhanced Circular Background */}
                <div className="w-48 h-48 rounded-full bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className=" inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 border-2 border-white/40 rounded-full"></div>
                  <span className="text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {member.name.charAt(0)}
                  </span>
                </div>

                {/* Enhanced Member Info */}
                <h3 className="text-2xl font-semibold text-white mb-2 text-center group-hover:text-white/80 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-white/70 mb-4 text-center font-light">
                  {member.position}
                </p>

                {/* Enhanced Social Links */}
                <div className="flex gap-6">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transform hover:scale-110 transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                  <a 
                    href={member.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transform hover:scale-110 transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                  <a 
                    href={member.email}
                    className="text-white/70 hover:text-white transform hover:scale-110 transition-all duration-300"
                  >
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}

export default TeamMembers;
