import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import Events from './Events';
import TeamMembers from './TeamMembers';
import FAQ from './FAQ';
import Achievements from './Achievements';
import Footer from './Footer';

const Home = () => {
  useEffect(() => {
    const pendingSection = sessionStorage.getItem("pendingSection");
    if (!pendingSection) return;

    const timer = setTimeout(() => {
      const node = document.getElementById(pendingSection);
      if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
      sessionStorage.removeItem("pendingSection");
    }, 120);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="site-theme flex flex-col space-y-10">
      {/* Hero: Where Strategy Meets Innovation */}
      <HeroSection />

      {/* Proof of Excellence */}
      <Achievements />

      {/* Action: What we do */}
      <Events />

      {/* The Humans behind the Brand */}
      <TeamMembers />

      {/* Clarifications */}
      <div className="pb-20">
        <FAQ />
      </div>

      <Footer />
    </div>
  );
};

export default Home;