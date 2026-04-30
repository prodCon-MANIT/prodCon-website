import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, FileText, Sparkles, Target, BriefcaseBusiness, Lightbulb } from 'lucide-react';
import BlockInTextCard from "./BlockInTextCard";

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#090613] px-6 pb-24 pt-20">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            MANIT Bhopal
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
            PROD<span className="text-purple-600">CON</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-lg">
            Where Strategy Meets Innovation. The premier Product & Consulting hub for future business leaders.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1l4A9mHgrlD2b-SuR34R9GLdGFws-Mfh7/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-xl shadow-white/5"
            >
              <FileText size={20} /> Download Brochure
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/about"
              className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              Explore Club <ChevronRight size={20} />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content - Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-12 rounded-[3rem] relative"
        >
          <div className="space-y-6">
            <BlockInTextCard
              text={<span className="text-purple-400 font-bold uppercase tracking-tighter text-sm">Our Identity</span>}
              examples={[
                "Strategy Meets Innovation",
                "Vision into Impact",
                "The Future of Business",
                "Driven by Ideas"
              ]}
            />
            <p className="text-gray-300 text-lg leading-relaxed text-justify">
              Welcome to ProdCon — where <strong>ideas meet industry</strong>. 
              We bridge the gap between campus knowledge and global corporate strategy through case studies, guesstimates, and mock cycles.
            </p>
            <div className="flex items-center justify-between border-t border-white/10 pt-6">
              <div className="flex -space-x-3">
                {[Sparkles, Target, BriefcaseBusiness, Lightbulb].map((Icon, i) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#090613] bg-gradient-to-br from-violet-500/70 to-indigo-500/70 text-white"
                  >
                    <Icon size={14} />
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Join 100+ Strategists</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;