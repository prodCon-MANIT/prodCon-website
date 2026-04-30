import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fullLogo from "../assets/artboard@4x.png";

export default function LargeNavBar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToSection = (sectionId) => {
    sessionStorage.setItem("pendingSection", sectionId);
    navigate("/");
  };

  const navItems = [
    { label: "Home", onClick: () => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); } },
    { label: "Events", onClick: () => navigateToSection("event-section") },
    { label: "Team", onClick: () => navigateToSection("team-section") },
    { label: "About", onClick: () => { navigate("/about"); window.scrollTo(0, 0); } },
    { label: "Contact", onClick: () => { navigate("/contact"); window.scrollTo(0, 0); } },
  ];

  return (
    <header className="hidden md:block fixed top-6 left-0 w-full z-[100] px-6">
      <nav className={`mx-auto max-w-5xl h-16 flex items-center justify-between px-8 rounded-full border transition-all duration-500 ${
        scrolled 
          ? "bg-black/75 border-white/10 shadow-2xl" 
          : "bg-transparent border-transparent"
      }`}>
        <img src={fullLogo} alt="Logo" className="h-10 scale-380 ml-6 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate("/")} />
        
        <ul className="flex items-center gap-2">
          {navItems.map((item, i) => (
            <li key={i}>
              <button
                onClick={item.onClick}
                className="relative px-5 py-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}