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
      className="relative pt-16 min-h-screen w-full bg-no-repeat bg-cover bg-center flex flex-col lg:flex-row text-white overflow-x-hidden"
      style={{ backgroundImage: `url(${web_gradient})` }}
    >
      {/* Radial glow background effect */}
      <div className="absolute w-[600px] h-[600px] bg-purple-700/15 rounded-full blur-[250px] top-[-200px] left-[-150px] z-10" />

      {/* Left Section */}
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-16 lg:py-0 items-center"
      >
        <h2 className="text-4xl sm:text-3xl lg:text-5xl font-semibold mb-4">
          𝐖𝐞 𝐚𝐫𝐞
        </h2>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-2">
          <span className="inline-flex text-left whitespace-nowrap">
            {typedProdCon.split("").map((char, i) => (
              <span key={i} className="relative inline-block">
                {/* Glow behind the letter */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-sm bg-[#A251EE] opacity-40 blur-md glow-animate"
                ></span>
                {/* Actual character */}
                <span className="relative z-10">{char}</span>
              </span>
            ))}
          </span>
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl mb-1 text-center sm:text-left">
          The Product & Consulting{" "}
          <br className="sm:hidden" />
          Club of NIT-Bhopal
        </p>
      </motion.section>

      {/* Right Section */}
      <motion.section
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: .8, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="relative z-10 w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center px-6 sm:px-8 lg:px-12 py-12 lg:py-0"
      >
        {/* Dynamic geometric background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Animated geometric shapes */}
          <div className="absolute w-64 h-64 border border-purple-400/20 rotate-45 top-[10%] right-[-50px] animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute w-32 h-32 border border-indigo-400/30 rotate-12 top-[40%] right-[20%] animate-pulse" />
          <div className="absolute w-48 h-48 border border-blue-400/15 -rotate-12 bottom-[20%] right-[-30px] animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          
          {/* Flowing wave pattern */}
          <div className="absolute inset-0">
            <svg className="absolute w-full h-full opacity-10" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path d="M0,100 Q100,50 200,100 T400,100 L400,400 L0,400 Z" fill="url(#waveGradient)">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0; 20,-10; 0,0"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </path>
              <path d="M0,200 Q150,150 300,200 T600,200 L600,400 L0,400 Z" fill="url(#waveGradient)" opacity="0.5">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0; -15,5; 0,0"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>
          
          {/* Hexagonal pattern overlay */}
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
          
          {/* Glowing dots constellation */}
          <div className="absolute w-1 h-1 bg-purple-400/80 rounded-full top-[15%] right-[10%] animate-ping" style={{ animationDelay: '0s' }} />
          <div className="absolute w-0.5 h-0.5 bg-indigo-400/60 rounded-full top-[35%] right-[30%] animate-ping" style={{ animationDelay: '1s' }} />
          <div className="absolute w-1.5 h-1.5 bg-blue-400/70 rounded-full top-[55%] right-[15%] animate-ping" style={{ animationDelay: '2s' }} />
          <div className="absolute w-0.5 h-0.5 bg-purple-300/60 rounded-full top-[75%] right-[25%] animate-ping" style={{ animationDelay: '0.5s' }} />
          <div className="absolute w-1 h-1 bg-indigo-300/70 rounded-full top-[25%] right-[35%] animate-ping" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-20 max-w-lg bg-gradient-to-br from-white/12 via-white/8 to-white/6 backdrop-blur-3xl border border-purple-400/30 shadow-2xl shadow-purple-900/20 p-6 rounded-3xl">
          {/* Glass effect overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          
          {/* Subtle inner glow */}
          <div className="absolute inset-0 rounded-3xl shadow-inner shadow-purple-400/10 pointer-events-none" />
          
          <div className="relative z-10">
            <BlockInTextCard
              text={
                <>
                  <strong>Who we are ?</strong>
                </>
              }
              examples={[
                "Where Strategy Meets Innovation",
                "The strategic bridge between vision and impact",
                "Building next generation of Business leaders",
                "Driven by Ideas, Defined by Impact",
              ]}
            />

            <p className="mt-6 mb-6 text-base sm:text-lg leading-relaxed text-justify text-white/90">
              Welcome to the <strong>Product and Consulting Club</strong> of MANIT Bhopal —
              where <span className="text-purple-300 font-medium">ideas meet industry</span>.
              We bridge academic knowledge with real‐world consulting and product management skills.
              Our initiatives include <strong>case studies</strong>, <strong>guesstimates</strong> and <strong>mock interviews</strong>.
              Flagship events like  foster strategic thinking and business insight.
              Join us to shape your <span className="text-indigo-300 font-medium">journey from campus to corporate</span>.
            </p>


            <div className="flex flex-col sm:flex-row sm:justify-start sm:space-x-4 space-y-4 sm:space-y-0">
              <a
                href="/about"
                className="relative overflow-hidden flex justify-center items-center bg-gradient-to-r from-[#382FCC] to-[#4C3AE6] text-base sm:text-xl text-white font-semibold px-6 sm:px-8 py-2 rounded-full shadow-lg shadow-purple-900/30 hover:shadow-xl hover:shadow-purple-900/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#2b27a5] to-[#3a2db8] opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Know more</span>
              </a>
              <a
                href="/about#resources"
                className="relative overflow-hidden flex justify-center items-center border border-white/60 bg-white backdrop-blur-sm text-base sm:text-xl text-[#2b27a5] font-semibold px-4 sm:px-5 py-2 rounded-full shadow-lg shadow-white/10 hover:bg-white hover:text-indigo-900 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Resource To Learn</span>
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default HeroSection;