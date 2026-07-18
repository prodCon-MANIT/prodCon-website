import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Users } from 'lucide-react';
import shreeshSinghImg from '../assets/shreesh_singh.jpeg';
import ritikaSoniImg from '../assets/ritika_soni.jpg';
import siddharthKumar from '../assets/siddharth_kumar.jpeg';
import umangRathodImg from '../assets/umang_rathod.jpg';
import anuragKalsoiaImg from '../assets/anurag_kalosia.jpg';
import tejasShrivastavaImg from '../assets/tejas_shrivastava.jpg';
import ishikaKumariImg from '../assets/ishika_kumari.png';
import raviRanjanImg from '../assets/ravi_ranjan.jpg';
import abhaSinghImg from '../assets/abha_singh.jpg';
import lakshyaWardhanImg from '../assets/lakshya_wardhan.jpeg';
import aashutoshGuptaImg from '../assets/aashutosh_gupta.jpg';

const members = [
  { name: 'Shreesh Singh', position: 'Coordinator', department: 'Leadership', image: shreeshSinghImg, email: 'shreeshsingh8934@gmail.com', linkedin: 'https://www.linkedin.com/in/shree-sh/' },
  { name: 'Umang Rathod', position: 'Co-Coordinator', department: 'Product', image: umangRathodImg, email: 'umangrathod7492@gmail.com', linkedin: 'https://www.linkedin.com/in/umang-rathod-8b16062b6/' },
  { name: 'Ishika Kumari', position: 'Co-coordinator', department: 'Consulting', image: ishikaKumariImg, email: 'ishikakumari5001@gmail.com', linkedin: 'https://www.linkedin.com/in/ishika-kumari-4b4431372/' },
  { name: 'Tejas Shrivastava', position: 'Product Management Head', department: 'Product', image: tejasShrivastavaImg, email: 'tjsshrivastava2005@gmail.com', linkedin: 'https://www.linkedin.com/in/tejas-shrivastava-07m05' },
  { name: 'Ravi Ranjan', position: 'Administrative Head', department: 'Finance', image: raviRanjanImg, email: 'raviranjan12059@gmail.com', linkedin: 'https://www.linkedin.com/in/ravi-ranjan-687458280/' },
  { name: 'Siddharth Kumar Gupta', position: 'Alumini relations Head', department: 'Leadership', image: siddharthKumar, email: 'siddharthkrgupta00007@gmail.com', linkedin: 'https://www.linkedin.com/in/siddharth-kumar-gupta-869247289/' },
  { name: 'lakshya wardhan shekhawat', position: 'Technical Head', department: 'Operations', image: lakshyaWardhanImg, email: 'lakshyawardhan2004@gmail.com', linkedin: 'https://www.linkedin.com/in/lakshyawardhan-shekhawat-095696263/' },
  { name: 'Ritika Soni', position: 'Research and Content Head (Product)', department: 'Leadership', image: ritikaSoniImg, email: 'ritikasoni913127@gmail.com', linkedin: 'https://www.linkedin.com/in/ritika-soni-792a5827b/' },
  { name: 'Anurag Kalosia', position: 'Content writer Head', department: 'Leadership', image: anuragKalsoiaImg, email: 'anuragkalosia2@gmail.com', linkedin: 'https://www.linkedin.com/in/anurag-kalosia/' },
  { name: 'Abha Singh', position: 'Designer Head', department: 'Technical', image: abhaSinghImg, email: 'abhasingh0903@gmail.com', linkedin: 'https://www.linkedin.com/in/abha-singh-7a54672ab/' },
  { name: 'Aashutosh Gupta', position: 'Senior Associate - Consulting', department: 'Creative', image: aashutoshGuptaImg, email: 'aashutosh1118@gmail.com', linkedin: 'https://www.linkedin.com/in/aashutosh-gupta-239764247/' },
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
              <img src={member.image} alt={member.name} className="h-full w-full object-cover object-top" loading="lazy" />
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