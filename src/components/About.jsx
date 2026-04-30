import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Cpu, Rocket, ChevronRight } from 'lucide-react';
import Footer from './Footer';

const CoreValueCard = ({ title, description, icon: Icon, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    viewport={{ once: true }}
    className="glass-card glass-card-hover p-8 rounded-3xl relative group overflow-hidden"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity`} />
    <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block group-hover:bg-purple-500/10 transition-colors">
      <Icon className="w-8 h-8 text-purple-400" />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </motion.div>
);

const About = () => {
  return (
    <div className="site-theme">
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-32">
        {/* Header Section */}
        <section className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest"
          >
            Our Philosophy
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
          >
            Driven by <span className="text-purple-500">Ideas</span>.<br />Defined by Impact.
          </motion.h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-400 leading-relaxed">
            The Product & Consulting Club at MANIT Bhopal (ProdCon) is a student-led ecosystem designed to bridge academic curiosity with strategic industry excellence.
          </p>
        </section>

        {/* Mission Vision Grid */}
        <section className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-12 rounded-[3rem] border-t border-white/10"
          >
            <Target className="w-12 h-12 text-purple-500 mb-8" />
            <h2 className="text-4xl font-bold mb-4">The Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Cultivating a bold culture of exploration and analytical thinking. We ensure learning goes beyond the classroom, providing hands-on experience with real-world projects and case studies.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card p-12 rounded-[3rem] border-t border-white/10"
          >
            <Eye className="w-12 h-12 text-indigo-500 mb-8" />
            <h2 className="text-4xl font-bold mb-4">The Vision</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              To be the premier launching pad for the next generation of Product Managers and Strategic Consultants, transforming ambition into measurable global business results.
            </p>
          </motion.div>
        </section>

        {/* Principles Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">The 3'C Pillars</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CoreValueCard 
              title="Connect" index={0} color="from-purple-500" icon={Users}
              description="Fostering a network where students and industry veterans bridge the gap between vision and execution." 
            />
            <CoreValueCard 
              title="Collaborate" index={1} color="from-indigo-500" icon={Cpu}
              description="Empowering cross-functional teams to solve real-world cases for startups and NGOs." 
            />
            <CoreValueCard 
              title="Create" index={2} color="from-pink-500" icon={Rocket}
              description="Turning deep insights into impact through rapid prototyping and user-centric business modeling." 
            />
          </div>
        </section>

        {/* Learning Resources CTA */}
        <section id="resources" className="pt-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="glass-card p-16 rounded-[4rem] text-center border-t border-purple-500/20 shadow-purple-500/5 shadow-2xl"
            >
              <h2 className="text-4xl font-bold mb-6">Learning Resources</h2>
              <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                Unlock our curated collection of frameworks, casebooks, and PM guides to jumpstart your career.
              </p>
              <a 
                href="https://drive.google.com/..." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-purple-600 hover:text-white transition-all group"
              >
                Access Hub <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;