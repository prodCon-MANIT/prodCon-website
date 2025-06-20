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
          𝐰𝐞 𝐚𝐫𝐞,
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
        className="relative  z-10 w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center px-6 sm:px-8 lg:px-12 py-12 lg:py-0"
      >
        <div className="max-w-lg bg-white/9  border border-purple-500  backdrop-blur-sm shadow-md p-6 rounded-2xl">
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
            Welcome to the <strong>Products and Consulting Club</strong> of MANIT Bhopal —
            where <span className="text-purple-300 font-medium">ideas meet industry</span>.
            We bridge academic knowledge with real‐world consulting and product management skills.
            Our initiatives include <strong>case studies</strong>, <strong>guesstimates</strong>, and <strong>mock interviews</strong>.
            Flagship events like  foster strategic thinking and business insight.
            Join us to shape your <span className="text-indigo-300 font-medium">journey from campus to corporate</span>.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-start sm:space-x-4 space-y-4 sm:space-y-0">
            <a
              href="/about"
              className="flex justify-center items-center bg-[#382FCC] text-base sm:text-xl text-white font-semibold px-6 sm:px-8 py-2 rounded-full shadow-md hover:bg-[#2b27a5] transition-transform transform hover:scale-105"
            >
              Know more
            </a>
            <a
              href="/about#resources123"
              className="flex justify-center items-center border border-white text-base sm:text-xl text-white font-semibold px-4 sm:px-5 py-2 rounded-full shadow-md hover:bg-white hover:text-indigo-900 transition-transform transform hover:scale-105"
            >
              Resource To Learn
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default HeroSection;