import React, { useState, useEffect } from "react";
import web_gradient from "../assets/web_gradient.png";
import BlockInTextCard from "./BlockInTextCard";

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
              setDisplayed(""); // reset to start over
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

  // Use the hook with "ProdCon"
  const typedProdCon = useTypewriter("ProdCon", 150, 2000);

  return (
    <div
      className="pt-16 min-h-screen w-full bg-no-repeat bg-cover bg-center flex flex-col lg:flex-row text-white"
      style={{ backgroundImage: `url(${web_gradient})` }}
    >
      {/* 
        Added `pt-16` so that a fixed navbar of height `h-16`
        does not cover the top content. Adjust if your navbar height differs.
      */}

      {/* Left half: headings / title */}
      <section className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-16 lg:py-0 items-center">
        {/* “we are,” */}
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold mb-2">
          we are,
        </h2>

        {/* Typewriter “ProdCon” with fixed width so it doesn’t shift */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-2">
          <span className="inline-block w-[8ch] text-left whitespace-nowrap">
            {typedProdCon}
          </span>
        </h1>

        {/* Subhead lines */}
        <p className="text-xl sm:text-2xl lg:text-3xl mb-1">The Product & Consulting 
          <br className="sm:hidden" />
          Club of NIT-Bhopal</p>
        {/* <p className="text-xl sm:text-2xl lg:text-3xl">NIT-Bhopal</p> */}
      </section>

      {/* Right half: BlockInTextCard + paragraph + buttons */}
      <section className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center px-6 sm:px-8 lg:px-12 py-12 lg:py-0">
        <div className="max-w-lg">
          <BlockInTextCard
            text={
              <>
                <strong>Who we are ?</strong>
              </>
            }
            examples={[
              "Where Strategy Meets Innovation",
              "We are the strategic bridge between vision and impact",
              "Building next generation of Business leaders",
              "Driven by Ideas, Defined by Impact",
            ]}
          />

          <p className="mt-6 mb-6 text-base sm:text-lg leading-relaxed text-justify">
            Welcome to the Products and Consulting Club of MANIT Bhopal — where ideas meet industry. We bridge academic knowledge with real‐
            world consulting and product management skills. Our initiatives include case studies, guesstimates, and mock interviews. Flagship
            events like VIVITSA foster strategic thinking and business insight. Hands‐on projects and expert sessions drive holistic growth.
            Join us to shape your journey from campus to corporate.
          </p>

          {/* Buttons: text centered inside each, and layout wraps on very small screens */}
          <div className="flex flex-col sm:flex-row sm:justify-start sm:space-x-4 space-y-4 sm:space-y-0">
            <a
              href="/about"
              className="flex justify-center items-center bg-[#362FCC] text-base sm:text-xl text-white font-semibold px-6 sm:px-8 py-2 rounded-full shadow-md hover:bg-[#2b27a5] transition"
            >
              Know more
            </a>
            <a
              href="/resources"
              className="flex justify-center items-center border border-white text-base sm:text-xl text-white font-semibold px-4 sm:px-5 py-2 rounded-full shadow-md hover:bg-white hover:text-indigo-900 transition"
            >
              Resource
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;