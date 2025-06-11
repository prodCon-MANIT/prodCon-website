import React, { useState, useEffect } from "react";
import web_gradient from "../assets/web_gradient.png";
import BlockInTextCard from "./BlockInTextCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function HeroSection() {
  const useTypewriter = (text, speed = 150, pause = 2000) => {
    const [displayed, setDisplayed] = useState("");
    useEffect(() => {
      let mounted = true;
      let index = 0;

      const type = () => {
        if (!mounted) return;
        const interval = setInterval(() => {
          setDisplayed(text.slice(0, index + 1));
          index++;
          if (index === text.length) {
            clearInterval(interval);
            setTimeout(() => {
              if (!mounted) return;
              setDisplayed("");
              index = 0;
              type();
            }, pause);
          }
        }, speed);
      };

      type();
      return () => {
        mounted = false;
      };
    }, [text, speed, pause]);

    return displayed;
  };

  const typedProdCon = useTypewriter("ProdCon", 150, 2000);

  return (
    <div
      className="relative min-h-screen w-full bg-no-repeat bg-cover bg-center flex flex-col lg:flex-row items-center justify-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${web_gradient})` }}
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
      <div className="absolute w-[800px] h-[800px] bg-purple-700/20 rounded-full blur-[120px] top-[-200px] left-[-150px] animate-pulse" />
      <div className="absolute w-[600px] h-[600px] bg-blue-700/20 rounded-full blur-[150px] bottom-[-200px] right-[-150px] animate-pulse" />

      {/* Left Section */}
      <motion.section
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 lg:px-16 py-16 lg:py-0"
      >
        <div className="max-w-xl mx-auto lg:mx-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl sm:text-2xl font-medium mb-4 text-purple-300"
          >
            we are,
          </motion.h2>
          
          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white"
            >
              <span className="inline-block min-w-[8ch] text-left">
                {typedProdCon}
                <span className="animate-blink">|</span>
              </span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-gray-300"
          >
            The Product & Consulting
            <br className="sm:hidden" />
            Club of NIT-Bhopal
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/about"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-lg font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
            >
              Know more
            </a>
            
            <Link to="/about#resource123">
            <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-lg font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
    Resources
  </button>
            </Link>
            
          </motion.div>
        </div>
      </motion.section>

      {/* Right Section */}
      <motion.section
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: -15 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center px-6 sm:px-8 lg:px-16 py-12 lg:py-0"
      >
        <div className="max-w-md w-full">
          <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 hover:shadow-purple-500/10 transition-all duration-500">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-semibold text-white mb-2">Who we are?</h2>
              <div className="h-0.5 w-16 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <BlockInTextCard
                text={<></>}
                examples={[
                  "Where Strategy Meets Innovation",
                  "The strategic bridge between vision and impact",
                  "Building next generation of Business leaders",
                  "Driven by Ideas, Defined by Impact",
                ]}
              />

              <p className="mt-6 text-base leading-relaxed text-gray-300/90">
                Welcome to the <span className="font-semibold text-white">Products and Consulting Club</span> of MANIT Bhopal —
                where <span className="text-purple-300 font-medium">ideas meet industry</span>. 
                Our initiatives include <span className="text-indigo-300 font-medium">case studies</span>, 
                <span className="text-purple-300 font-medium"> guesstimates</span>, and 
                <span className="text-indigo-300 font-medium"> mock interviews</span>. 
                Join us to shape your <span className="text-purple-300 font-medium">journey from campus to corporate</span>.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default HeroSection;
