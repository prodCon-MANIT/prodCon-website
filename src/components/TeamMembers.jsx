import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import web_gradient from "../assets/web_gradient.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';

// Import team member images
import adityaRajMantriImg from '../assets/aditya_raj_mantri.jpg';
import yashSharmaImg from '../assets/yash_sharma.jpg';
import somilPrajapatiImg from '../assets/somil_prajapati.jpg';
import shayanFahimiImg from '../assets/shayan_fahimi.jpg';
import smritiShrivastavaImg from '../assets/smriti_shrivastava.jpg';
import ankitKumarYadavImg from '../assets/ankit_kumar_yadav.jpg';
import rahulHazraImg from '../assets/rahul_hazra.jpg';
import tanishqSardaImg from '../assets/tanishq_sarda.jpg';
import priyanshKashyapImg from '../assets/priyansh_kashyap.jpg';
import gautamKumarImg from '../assets/gautam.jpeg';
import kushagraTiwariImg from '../assets/kushagra.jpeg';
import sakshamGuliyaniImg from '../assets/saksham_guliyani.jpg';
import swatiHansdaImg from '../assets/SWATIP - Swati Hansda.jpg';

// Initialize FontAwesome library
library.add(fab, faLinkedin, faInstagram, faEnvelope);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hover: { y: -5, boxShadow: '0 15px 25px rgba(0, 0, 0, 0.3)' },
};

export default function TeamMembers() {
  const [visible, setVisible] = useState(true);
  const [filter, setFilter] = useState('All');

  const members = [
    
    { 
      name: 'Gautam Kumar', 
      position: 'Co-founder & VP', 
      department: 'Leadership', 
      image: gautamKumarImg,
      social: { 
        instagram: '#', 
        email: 'mailto:gautam@example.com', 
        linkedin: 'https://www.linkedin.com/in/gautam-kumar104/' 
      } 
    },
    { 
      name: 'Kushagra Tiwari', 
      position: 'Co-founder & President', 
      department: 'Leadership', 
      image: kushagraTiwariImg,
      social: { 
        instagram: '#', 
        email: 'mailto:kushagra@example.com', 
        linkedin: 'https://www.linkedin.com/in/kushagra-tiwari-373670229/' 
      } 
    },
    { 
      name: 'Saksham Guliyani', 
      position: 'Head of Product', 
      department: 'Product', 
      image: sakshamGuliyaniImg,
      social: { 
        instagram: '#', 
        email: 'mailto:saksham@example.com', 
        linkedin: 'https://www.linkedin.com/in/guliyanisaksham' 
      } 
    },
    { 
      name: 'Swati Hansda', 
      position: 'Research & Content Head (Product)', 
      department: 'Product', 
      image: swatiHansdaImg,
      social: { 
        instagram: '#', 
        email: 'mailto:swati@example.com', 
        linkedin: 'https://www.linkedin.com/in/swati-hansda-795b3a271/' 
      } 
    },
    { 
      name: 'Aditya Raj Mantri', 
      position: 'Overall Coordinator', 
      department: 'Leadership', 
      image: adityaRajMantriImg,
      social: { 
        instagram: '#', 
        email: 'mailto:aditya@example.com', 
        linkedin: 'https://www.linkedin.com/in/aditya-raj-mantri-868013267' 
      } 
    },
    { 
      name: 'Yash Sharma', 
      position: 'Research & Content Head (Consulting)', 
      department: 'Consulting', 
      image: yashSharmaImg,
      social: { 
        instagram: '#', 
        email: 'mailto:yash@example.com', 
        linkedin: 'https://www.linkedin.com/in/yash-sharma-195a3224b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' 
      } 
    },
    { 
      name: 'Somil Prajapati', 
      position: 'Logistics & Ops Secretary', 
      department: 'Operations', 
      image: somilPrajapatiImg,
      social: { 
        instagram: '#', 
        email: 'mailto:somil@example.com', 
        linkedin: 'https://www.linkedin.com/in/somil-prajapati-b552052b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' 
      } 
    },
    { 
      name: 'Shayan Fahimi', 
      position: 'Sponsorship Secretary', 
      department: 'Sponsorship', 
      image: shayanFahimiImg,
      social: { 
        instagram: '#', 
        email: 'mailto:shayan@example.com', 
        linkedin: 'https://www.linkedin.com/in/shayan-fahimi-82566b245' 
      } 
    },
    { 
      name: 'Smriti Shrivastava', 
      position: 'Treasurer', 
      department: 'Finance', 
      image: smritiShrivastavaImg,
      social: { 
        instagram: '#', 
        email: 'mailto:smriti@example.com', 
        linkedin: 'https://www.linkedin.com/in/smriti-shrivastava-a401451b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' 
      } 
    },
    { 
      name: 'Ankit Kumar Yadav', 
      position: 'Technical Head', 
      department: 'Technical', 
      image: ankitKumarYadavImg,
      social: { 
        instagram: '#', 
        email: 'mailto:ankit@example.com', 
        linkedin: 'https://www.linkedin.com/in/ankit-kumar-1065b3259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' 
      } 
    },
    { 
      name: 'Rahul Hazra', 
      position: 'Video Editing Head', 
      department: 'Creative', 
      image: rahulHazraImg,
      social: { 
        instagram: '#', 
        email: 'mailto:rahul@example.com', 
        linkedin: 'https://www.linkedin.com/in/rahul-hazra-3b1a7528b' 
      } 
    },
    { 
      name: 'Tanishq Sarda', 
      position: 'Head of Consulting', 
      department: 'Consulting', 
      image: tanishqSardaImg,
      social: { 
        instagram: '#', 
        email: 'mailto:tanishq@example.com', 
        linkedin: 'https://www.linkedin.com/in/sardatanishq' 
      } 
    },
    { 
      name: 'Priyansh Kashyap', 
      position: 'Designing Head', 
      department: 'Creative', 
      image: priyanshKashyapImg,
      social: { 
        instagram: '#', 
        email: 'mailto:priyansh@example.com', 
        linkedin: 'https://www.linkedin.com/in/priyansh-kashyap-9bbbb5259' 
      } 
    },
  ];

  const depts = ['All', ...new Set(members.map(m => m.department))];
  const list = filter === 'All' ? members : members.filter(m => m.department === filter);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, { threshold: 0.2 });

    const sec = document.getElementById('team-section');
    if (sec) obs.observe(sec);
    return () => obs.disconnect();
  }, []);

  return (
    <Element name="team-section" id="team-section">
      <div
        className="min-h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${web_gradient})` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/111" />

        <div className="relative z-10 container mx-auto px-6 py-20">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
              Meet Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 animate-gradient-x">
                Team
              </span>
            </h2>
            <p className="mt-3 text-gray-300 text-lg">The brilliant minds behind our success</p>
          </motion.div>

          {/* Filters */}
         
          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={visible ? 'visible' : 'hidden'}
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8 lg:gap-10"
          >
            {list.map((m) => (
              <motion.div key={m.name + m.position} variants={itemVariants}  className="relative group">
                <div className="p-4 sm:p-6 bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl group-hover:border-white/50 group-hover:bg-white/30">
                  {/* Avatar */}
                  <div className="relative mb-3 sm:mb-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center shadow-xl overflow-hidden border-2 sm:border-4 border-white/50 group-hover:border-white/80 transition-all duration-300">
                      {m.image ? (
                        <img 
                          src={m.image} 
                          alt={m.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl font-bold">
                          {m.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="text-sm sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                      {m.name}
                    </h3>
                    <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-xs font-bold px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full shadow-lg border border-white/20 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                      {m.position.split('(')[0].trim()}
                    </div>
                  </div>

                  {/* Social icons */}
                  <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 opacity-80 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                   
                    <a href={m.social.email} className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-red-500/50 hover:scale-110 transition-all duration-300 shadow-lg">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href={m.social.linkedin} className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-blue-500/50 hover:scale-110 transition-all duration-300 shadow-lg">
                      <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Element>
  );
}
