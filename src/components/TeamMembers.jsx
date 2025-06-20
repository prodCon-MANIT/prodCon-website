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
      
    },
    {
      name: "xyz",
      position: "Coordinator (Finance)",
      
    },
    {
      name: "xyz",
      position: "Co-Coordinator (Admin)",
      
    },
    {
      name: "S.",
      position: "Co-Coordinator (Finance)",
      
    },
    {
      name: "xxyz",
      position: "Technical Head",
      
    },
    {
      name: "xyz",
      position: "Marketing Head",
      
    } ,
    {
      name: "xyz",
      position: "Marketing Head",
      
    },{
      name: "xyz",
      position: "Marketing Head",
      
    },{
      name: "xyz",
      position: "Marketing Head",
      
    }
    ,{
      name: "xyz",
      position: "Marketing Head",
      
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-50 gap-y-16 max-w-3xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center group">
                {/* Enhanced Circular Background */}
                <div className="w-38 h-38 rounded-full bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className=" inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 border-2 border-white/40 rounded-full"></div>
                 
                </div>

                {/* Enhanced Member Info */}
                <h3 className="text-2xl font-semibold text-white mb-2 text-center group-hover:text-white/80 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-white/70 mb-4 text-center font-light">
                  {member.position}
                </p>

                {/* Enhanced Social Links */}
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
}

export default TeamMembers;
