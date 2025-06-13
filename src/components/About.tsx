import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "./Footer";
import ThreeCs from "./ThreeCs";
import AnimatedBackground from "./AnimatedBackground";

function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Transforms
  const leftVisionY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"], { clamp: true });
  const leftMissionY = useTransform(scrollYProgress, [0.5, 1], ["100%", "0%"], { clamp: true });
  const rightVisionY = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"], { clamp: true });
  const rightMissionY = useTransform(scrollYProgress, [0.5, 1], ["-100%", "0%"], { clamp: true });
  const leftVisionX = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"], { clamp: true });
  const leftMissionX = useTransform(scrollYProgress, [0.5, 1], ["100%", "0%"], { clamp: true });
  const rightVisionX = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"], { clamp: true });
  const rightMissionX = useTransform(scrollYProgress, [0.5, 1], ["-100%", "0%"], { clamp: true });
  const commonTransition = { ease: [0.4, 0.0, 0.2, 1], duration: 0.8 };

  return (
    <div className="pt-25">
       <AnimatedBackground/> 
      {/* Intro Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center px-4 lg:px-0 pt-5">
        <div className="w-full sm:w-1/2">
          <ThreeCs />
        </div>
        <div className="w-full lg:w-1/2 p-6 text-white bg-blue-950 bg-opacity-70 rounded-lg shadow-lg text-lg leading-relaxed mt-6 lg:mt-0">
          <h1 className="mb-4 text-3xl font-bold text-blue-100">
            About Us – Where Strategy Meets Innovation
          </h1>
          <p className="mb-4">
            Welcome to the Products and Consulting Club of MANIT Bhopal — a vibrant, student-powered collective that transforms theoretical knowledge into boardroom brilliance.
          </p>
          <p className="mb-4">
            We are the nexus where academic rigor converges with industry acumen, sculpting visionary thinkers and future industry trailblazers in consulting and product management.
          </p>
          <p className="mb-4">
            Our multifaceted ecosystem thrives on immersive case simulations, elite business conclaves like VIVITSA, guesstimate marathons, and dynamic mock interview circuits — all meticulously designed to ignite analytical prowess and strategic finesse.
          </p>
          <p>
            Beyond events, we orchestrate high-impact competitions, thought-provoking panel dialogues, and hands-on capstone projects, curating a launchpad for holistic professional growth and a springboard to stellar career trajectories.
          </p>
        </div>
      </div>

      {/* Scroll Animation Section */}
      <div ref={ref} className="h-[200vh] mt-10">
        <div className="sticky top-0 lg:top-16 h-screen w-full flex flex-col lg:flex-row">
          {/* LEFT PANEL Titles */}
          <div className="relative overflow-hidden w-full lg:w-1/2 h-screen flex items-center justify-center lg:justify-center">
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold"
              style={{ x: leftVisionX, y: leftVisionY }}
              transition={commonTransition}
            >
              Vision (Add img)
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold"
              style={{ x: leftMissionX, y: leftMissionY }}
              transition={commonTransition}
            >
              Mission (Add img)
            </motion.div>
          </div>

          {/* RIGHT PANEL Content */}
          <div className="relative overflow-hidden w-full lg:w-1/2 h-screen flex flex-col items-center justify-start lg:justify-center">
            {/* Vision Content */}
            <motion.div
              className="absolute inset-0 lg:pt-20 p-4 py-10 h-fit flex flex-col items-start lg:items-center justify-start lg:justify-center"
              style={{ x: rightVisionX, y: rightVisionY }}
              transition={commonTransition}
            >
              <h2 className="font-bold text-2xl md:text-3xl mb-4 text-center lg:text-center text-white">
                Vision – Inspire • Innovate • Impact
              </h2>
              <div className="bg-blue-900 bg-opacity-90 p-6 md:p-10 rounded-xl shadow-xl w-full max-w-3xl mx-auto text-white text-left border border-white/10 backdrop-blur-sm h-full overflow-y-auto">
                <p className="text-base md:text-lg leading-relaxed">
                  To emerge as an eminent, student-led powerhouse that cultivates strategic visionaries, bold innovators, and transformational leaders in the realms of consulting and product management. Our vision is anchored in a culture of ideation, collaboration, and creation, where every MANITian is empowered to transcend boundaries, reimagine possibilities, and confidently conquer real-world business conundrums with poise and precision.
                </p>
              </div>
            </motion.div>

            {/* Mission Content */}
            <motion.div
              className="absolute inset-0 lg:pt-35 p-4 flex flex-col items-start lg:items-center justify-start lg:justify-center"
              style={{ x: rightMissionX, y: rightMissionY }}
              transition={commonTransition}
            >
              <h2 className="font-bold text-2xl md:text-3xl mb-4 text-center lg:text-center text-white">
                Mission – Crafting Catalysts of Change
              </h2>
              <div className="bg-blue-900 bg-opacity-90 p-6 md:p-10 rounded-xl shadow-xl w-full max-w-3xl mx-auto text-white text-left border border-white/10 backdrop-blur-sm h-full overflow-y-auto text-base md:text-lg leading-relaxed space-y-4">
                <p><span className="font-semibold">Transcend Theory –</span> Seamlessly integrate academic insight with actionable business strategies.</p>
                <p><span className="font-semibold">Empower Talent –</span> Arm students with future-forward skills in consulting frameworks and product innovation.</p>
                <p><span className="font-semibold">Ace the Arena –</span> Drive placement excellence via resume masterclasses, mock evaluations, and strategic mentorship.</p>
                <p><span className="font-semibold">Ignite Collaboration –</span> Foster an ecosystem of peer-to-peer learning, expert interactions, and interdisciplinary synergy.</p>
                <p><span className="font-semibold">Champion Critical Thinking –</span> Cultivate a mindset of analytical sharpness, creative agility, and structured problem-solving.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;