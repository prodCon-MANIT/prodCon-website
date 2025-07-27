import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import web_gradient from "../assets/web_gradient.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'motion/react';

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
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 "
          >
            {list.map((m) => (
              <motion.div key={m.name + m.position} variants={itemVariants}  className="relative group">
                <div className="p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-2xl shadow-xl border border-white/10 backdrop-blur-sm transition-transform transform group-hover:scale-105 group-hover:shadow-2xl group-hover:border-white/20">
                  {/* Avatar */}
                  <div className="relative mb-1">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg overflow-hidden">
                      {m.image ? (
                        <img 
                          src={m.image} 
                          alt={m.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                          {m.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className=" text-sm sm:text-xl font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                      {m.name}
                    </h3>
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                      {m.position.split('(')[0].trim()}
                    </div>
                  </div>

                  {/* Social icons */}
                  <div className="flex justify-center gap-4 mt-10 opacity-100 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                   
                    <a href={m.social.email} className="w-4 sm:w-9 mt-6 h-4 sm:h-9  rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-red-500/50  transition-all duration-300">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a href={m.social.linkedin} className="w-4 sm:w-9 mt-6 h-4 sm:h-9  rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-blue-500/50 transition-all duration-300">
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
