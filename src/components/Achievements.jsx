import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Zap } from 'lucide-react';

const achievementData = [
  {
    category: "Top National Recognition",
    icon: Trophy,
    color: "text-yellow-500",
    list: [
      "Winner – International Cenex Award, IIT Bombay",
      "Top 3 Teams – The Boardroom Competition, IIM Calcutta",
      "Finalist – Techniche, IIT Guwahati"
    ]
  },
  {
    category: "B-Plan Competitions",
    icon: Star,
    color: "text-blue-500",
    list: [
      "National Finalist – Pitch Perfect, IIT Bombay",
      "Top 15 – Xpanse B-Plan, IIT (BHU) Varanasi",
      "Top 8 – Disrupt, XLRI Jamshedpur"
    ]
  },
  {
    category: "Innovation & PM",
    icon: Zap,
    color: "text-purple-500",
    list: [
      "Winner – AI Electrify Challenge, Masters' Union",
      "2nd Runner Up – Produscope 2024, IIT-G",
      "Top 10 – Product Breakdown, IIT Indore"
    ]
  }
];

export default function Achievements() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20 space-y-4">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Achievements</h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievementData.map((group, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-[2rem] border-t-2 border-t-purple-500/20 group hover:border-t-purple-500 transition-all duration-500"
          >
            <group.icon className={`w-10 h-10 ${group.color} mb-6`} />
            <h3 className="text-xl font-bold mb-6 text-white">{group.category}</h3>
            <ul className="space-y-4">
              {group.list.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}