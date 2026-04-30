import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Users } from 'lucide-react';
import adityaRajMantriImg from '../assets/aditya_raj_mantri.jpg';
import yashSharmaImg from '../assets/yash_sharma.jpg';
import somilPrajapatiImg from '../assets/somil_prajapati.jpg';
import smritiShrivastavaImg from '../assets/smriti_shrivastava.jpg';
import ankitKumarYadavImg from '../assets/ankit_kumar_yadav.jpg';
import rahulHazraImg from '../assets/rahul_hazra.jpg';
import priyanshKashyapImg from '../assets/priyansh_kashyap.jpg';
import gautamKumarImg from '../assets/gautam.jpeg';
import kushagraTiwariImg from '../assets/kushagraTiwariImg.jpg';
import sakshamGuliyaniImg from '../assets/saksham_guliyani.jpg';
import swatiHansdaImg from '../assets/SWATIP - Swati Hansda.jpg';
import ankitaTyagiImg from '../assets/ankita-tyagi.jpg';

const members = [
  { name: 'Ankita Tyagi', position: 'Mentor', department: 'Leadership', image: ankitaTyagiImg, email: 'mailto:ankita.tyagi05@gmail.com', linkedin: '' },
  { name: 'Kushagra Tiwari', position: 'Co-founder & President', department: 'Leadership', image: kushagraTiwariImg, email: 'mailto:Kushagrat808@gmail.com', linkedin: 'https://www.linkedin.com/in/kushagra-tiwari-373670229/' },
  { name: 'Gautam Kumar', position: 'Co-founder & VP', department: 'Leadership', image: gautamKumarImg, email: 'mailto:kumargautamsingh104@gmail.com', linkedin: 'https://www.linkedin.com/in/gautam-kumar104/' },
  { name: 'Saksham Guliyani', position: 'General Secretary & Head of Product', department: 'Product', image: sakshamGuliyaniImg, email: 'mailto:sakshamguliyani91@gmail.com', linkedin: 'https://www.linkedin.com/in/guliyanisaksham' },
  { name: 'Aditya Raj Mantri', position: 'Overall Coordinator', department: 'Leadership', image: adityaRajMantriImg, email: 'mailto:Adityamantri112014@gmail.com', linkedin: 'https://www.linkedin.com/in/aditya-raj-mantri-868013267' },
  { name: 'Swati Hansda', position: 'Research & Content Head (Product)', department: 'Product', image: swatiHansdaImg, email: 'mailto:swatihansda1505@gmail.com', linkedin: 'https://www.linkedin.com/in/swati-hansda-795b3a271/' },
  { name: 'Yash Sharma', position: 'Research & Content Head (Consulting)', department: 'Consulting', image: yashSharmaImg, email: 'mailto:ysharma.engineer@gmail.com', linkedin: 'https://www.linkedin.com/in/yash-sharma-195a3224b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'Smriti Shrivastava', position: 'Treasurer', department: 'Finance', image: smritiShrivastavaImg, email: 'mailto:smriti.shrivastava130304@gmail.com', linkedin: 'https://www.linkedin.com/in/smriti-shrivastava-a401451b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { name: 'Ankit Kumar Yadav', position: 'Technical Head', department: 'Technical', image: ankitKumarYadavImg, email: 'mailto:ankitofficial0723@gmail.com', linkedin: 'https://www.linkedin.com/in/ankit-kumar-1065b3259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { name: 'Somil Prajapati', position: 'Logistics & Ops Secretary', department: 'Operations', image: somilPrajapatiImg, email: 'mailto:Somilprajapati17@gmail.com', linkedin: 'https://www.linkedin.com/in/somil-prajapati-b552052b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
  { name: 'Rahul Hazra', position: 'Video Editing Head', department: 'Creative', image: rahulHazraImg, email: 'mailto:rahulhazra64@gmail.com', linkedin: 'https://www.linkedin.com/in/rahul-hazra-3b1a7528b' },
  { name: 'Priyansh Kashyap', position: 'Designing Head', department: 'Creative', image: priyanshKashyapImg, email: 'mailto:createdbypriyansh@gmail.com', linkedin: 'https://www.linkedin.com/in/priyansh-kashyap-9bbbb5259' },
];

const TeamMembers = () => {
  return (
    <section id="team-section" className="max-w-7xl mx-auto px-6 py-32">
      <div className="mb-20 flex flex-col items-center space-y-4 text-center">
        <div className="mb-2 rounded-2xl bg-purple-500/10 p-3 text-purple-500">
          <Users size={32} />
        </div>
        <h2 className="text-4xl font-black tracking-tight md:text-6xl">
          Our <span className="text-purple-600">Leadership</span>
        </h2>
        <p className="text-lg text-gray-400">The strategic minds steering ProdCon toward excellence.</p>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {members.map((member, idx) => (
          <motion.article
            key={`${member.name}-${idx}`}
            whileHover={{ y: -8 }}
            className="glass-card group flex flex-col items-center rounded-[2rem] border-t-2 border-t-transparent p-6 text-center hover:border-t-purple-500"
          >
            <div className="mb-6 h-24 w-24 overflow-hidden rounded-full border-2 border-white/10 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 transition-colors group-hover:border-purple-500/50">
              <img src={member.image} alt={member.name} className="h-full w-full object-cover" loading="lazy" />
            </div>

            <h3 className="mb-1 text-sm font-black uppercase tracking-tighter leading-tight text-white">{member.name}</h3>
            <p className="mb-6 rounded-lg bg-purple-500/5 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-purple-400">
              {member.position}
            </p>

            <div className="mt-auto flex gap-3">
              <a
                href={member.linkedin || '#'}
                target={member.linkedin ? '_blank' : undefined}
                rel={member.linkedin ? 'noopener noreferrer' : undefined}
                className="rounded-xl bg-white/5 p-2.5 text-gray-500 transition-all hover:bg-purple-600 hover:text-white"
              >
                <Linkedin size={14} />
              </a>
              <a href={member.email} className="rounded-xl bg-white/5 p-2.5 text-gray-500 transition-all hover:bg-red-500 hover:text-white">
                <Mail size={14} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;