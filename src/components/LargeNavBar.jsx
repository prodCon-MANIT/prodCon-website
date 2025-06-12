import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import fullLogo from "../assets/ProdCon_fullLogo.svg";

export default function LargeNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (section) => {
    setActiveSection(section);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(section), 300);
    } else {
      scrollToSection(section);
    }
  };

  const scrollToSection = (section) => {
    if (section === "home") {
      scroll.scrollToTop({ duration: 1300 });
    } else {
      scroller.scrollTo(section, {
        duration: 1300,
        smooth: true,
        offset: 0,
      });
    }
  };

  const actions = [
    { label: "Home", section: "home", path: "/" },
    { label: "Events", section: "event-section", path: "/" },
    { label: "Team", section: "team-section", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="hidden md:flex fixed top-0 left-0 w-full z-50 items-center px-8">
      <div className="flex-grow" />
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          left: "50%",
          top: "20px",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: "960px",
          zIndex: 50,
          background: scrolled ? "rgba(17, 25, 40, 0.75)" : "transparent",
          borderRadius: "2rem",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          padding: "0.75rem 2rem",
          height: "4.2rem",
          fontSize: "1rem",
          border: scrolled ? "1px solid rgba(255, 255, 255, 0.12)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.5)" : "none",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <img src={fullLogo} alt="ProdCon Logo" className="h-40 object-contain" />
        <ul className="flex space-x-6 text-white font-medium text-lg">
          {actions.map(({ label, section, path }, i) => {
            const isActive =
              path !== "/"
                ? location.pathname === path
                : location.pathname === "/" && activeSection === section;

            const handleClick = () => {
              if (path !== "/") {
                navigate(path);
                window.scrollTo({ top: 0, behavior: "smooth" });
                setActiveSection("");
              } else {
                handleNavigation(section);
              }
            };

            return (
              <li key={i} className="relative group">
                <button
                  className={`relative z-10 px-4 py-2 rounded-full transition duration-300 focus:outline-none ${
                    isActive ? "text-purple-300" : "text-white"
                  }`}
                  onClick={handleClick}
                >
                  {label}
                </button>
                <div className="absolute inset-1 opacity-1 group-hover:opacity-100 transition duration-300 blur-md bg-gradient-to-r from-purple-600 to-purple-400" />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
