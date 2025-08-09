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
import ankitatyagiImg from '../assets/Ankita_tyagi.jpg';
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
import ankitaTyagiImg from '../assets/ankitaTyagi.jpg';

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
      name: 'Kushagra Tiwari',
      position: 'Co-founder & President',
      department: 'Leadership',
      image: kushagraTiwariImg,
      social: {
        instagram: '#',
        email: 'mailto:Kushagrat808@gmail.com',
        linkedin: 'https://www.linkedin.com/in/kushagra-tiwari-373670229/'
      }
    },
    {
      name: 'Gautam Kumar',
      position: 'Co-founder & VP',
      department: 'Leadership',
      image: gautamKumarImg,
      social: {
        instagram: '#',
        email: 'mailto:kumargautamsingh104@gmail.com',
        linkedin: 'https://www.linkedin.com/in/gautam-kumar104/'
      }
    },
    {

      name: 'Ankita tyagi',
      position: 'General Secretary',
      department: 'Leadership',
      image: ankitatyagiImg,
      social: {
        instagram: '#',
        email: 'mailto:ankita.tyagi05@gmail.com',
    }
        
    },
    {
      name: 'Saksham Guliyani',
      position: 'Head of Product',
      department: 'Product',
      image: sakshamGuliyaniImg,
      social: {
        instagram: '#',
        email: 'mailto:sakshamguliyani91@gmail.com',
        linkedin: 'https://www.linkedin.com/in/guliyanisaksham'
      }
    },
    {
      name: 'Tanishq Sarda',
      position: 'Head of Consulting',
      department: 'Consulting',
      image: tanishqSardaImg,
      social: {
        instagram: '#',
        email: 'mailto:Sardatanishq@gmail.com',
        linkedin: 'https://www.linkedin.com/in/sardatanishq'
      }
    },
    {
      name: 'Aditya Raj Mantri',
      position: 'Overall Coordinator',
      department: 'Leadership',
      image: adityaRajMantriImg,
      social: {
        instagram: '#',
        email: 'mailto:Adityamantri112014@gmail.com',
        linkedin: 'https://www.linkedin.com/in/aditya-raj-mantri-868013267'
      }
    },
    {
      name: 'Swati Hansda',
      position: 'Research & Content Head (Product)',
      department: 'Product',
      image: swatiHansdaImg,
      social: {
        instagram: '#',
        email: 'mailto:swatihansda1505@gmail.com',
        linkedin: 'https://www.linkedin.com/in/swati-hansda-795b3a271/'
      }
    },
    {
      name: 'Yash Sharma',
      position: 'Research & Content Head (Consulting)',
      department: 'Consulting',
      image: yashSharmaImg,
      social: {
        instagram: '#',
        email: 'mailto:ysharma.engineer@gmail.com',
        linkedin: 'https://www.linkedin.com/in/yash-sharma-195a3224b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
      }
    },
    {
      name: 'Smriti Shrivastava',
      position: 'Treasurer',
      department: 'Finance',
      image: smritiShrivastavaImg,
      social: {
        instagram: '#',
        email: 'mailto:smriti.shrivastava130304@gmail.com',
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
        email: 'mailto:ankitofficial0723@gmail.com',
        linkedin: 'https://www.linkedin.com/in/ankit-kumar-1065b3259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
      }
    },
    {
      name: 'Shayan Fahimi',
      position: 'Sponsorship Secretary',
      department: 'Sponsorship',
      image: shayanFahimiImg,
      social: {
        instagram: '#',
        email: 'mailto:msfxinfinity@gmail.com',
        linkedin: 'https://www.linkedin.com/in/shayan-fahimi-82566b245'
      }
    },
    {
      name: 'Somil Prajapati',
      position: 'Logistics & Ops Secretary',
      department: 'Operations',
      image: somilPrajapatiImg,
      social: {
        instagram: '#',
        email: 'mailto:Somilprajapati17@gmail.com',
        linkedin: 'https://www.linkedin.com/in/somil-prajapati-b552052b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
      }
    },
    {
      name: 'Rahul Hazra',
      position: 'Video Editing Head',
      department: 'Creative',
      image: rahulHazraImg,
      social: {
        instagram: '#',
        email: 'mailto:rahulhazra64@gmail.com',
        linkedin: 'https://www.linkedin.com/in/rahul-hazra-3b1a7528b'
      }
    },
    {
      name: 'Priyansh Kashyap',
      position: 'Designing Head',
      department: 'Creative',
      image: priyanshKashyapImg,
      social: {
        instagram: '#',
        email: 'mailto:createdbypriyansh@gmail.com',
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

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-10 lg:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 px-4">
              Meet Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 animate-gradient-x">
                Leadership
              </span>
            </h2>
            <p className="mt-2 sm:mt-3 text-gray-300 text-sm sm:text-base lg:text-lg px-4">The brilliant minds behind Prodcon</p>
          </motion.div>

          {/* Filters */}

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={visible ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 max-w-xs sm:max-w-none mx-auto sm:mx-0"
          >
            {list.map((m) => (
              <motion.div key={m.name + m.position} variants={itemVariants} className="relative group">
                <div className="p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-xl sm:rounded-2xl shadow-xl border border-white/10 backdrop-blur-sm transition-transform transform group-hover:scale-105 group-hover:shadow-2xl group-hover:border-white/20 max-w-[280px] sm:max-w-none mx-auto sm:mx-0">
                  {/* Avatar */}
                  <div className="relative mb-2 sm:mb-3 lg:mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg overflow-hidden">
                      {m.image ? (
                        <img
                          src={m.image}
                          alt={m.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl font-bold">
                          {m.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300 leading-tight">
                      {m.name}
                    </h3>
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full opacity-100 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {m.position.split('(')[0].trim()}
                    </div>
                  </div>

                  {/* Social icons */}
                  <div className="flex justify-center gap-2 sm:gap-3 lg:gap-4 mt-8 sm:mt-8 lg:mt-10 opacity-100 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">

                    <a href={m.social.email} className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-red-500/50 transition-all duration-300">
                      <FontAwesomeIcon icon={faEnvelope} className="text-xs sm:text-sm" />
                    </a>
                    <a href={m.social.linkedin} className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-blue-500/50 transition-all duration-300">
                      <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-xs sm:text-sm" />
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