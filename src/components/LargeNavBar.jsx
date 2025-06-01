import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import logo from "../assets/ProdCon_Logo.svg";
import fullLogo from "../assets/ProdCon_fullLogo.svg";
import {
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function LargeNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Track current active section on homepage
  const [activeSection, setActiveSection] = useState("home");

  const actions = [
    {
      label: "Home",
      onClick: () => {
        navigate("/");
        scroll.scrollToTop({ duration: 1300 });
        setActiveSection("home");
      },
      path: "/",
      section: "home",
    },
    {
      label: "Events",
      onClick: () => {
        navigate("/");
        setTimeout(() => {
          scroller.scrollTo("event-section", {
            duration: 1300,
            smooth: "easeInOutQuart",
            offset: -65,
          });
        }, 100);
        setActiveSection("event-section");
      },
      path: "/",
      section: "event-section",
    },
    {
      label: "Team",
      onClick: () => {
        navigate("/");
        setTimeout(() => {
          scroller.scrollTo("team-section", {
            duration: 1300,
            smooth: "easeInOutQuart",
            offset: -65,
          });
        }, 100);
        setActiveSection("team-section");
      },
      path: "/",
      section: "team-section",
    },
    {
      label: "About",
      onClick: () => {
        navigate("/about");
        window.scrollTo({
          top: 0,
          behavior: "smooth", // for smooth scrolling
        });
        setActiveSection("");
      },
      path: "/about",
    },
    {
      label: "Contact",
      onClick: () => {
        navigate("/contact");
        window.scrollTo({
          top: 0,
          behavior: "smooth", // for smooth scrolling
        });
        setActiveSection("");
      },
      path: "/contact",
    },
  ];

  return (
    <header className="hidden md:flex  fixed top-0 left-0 w-full  shadow-md z-50 items-center px-8 h-16">
      {/* Logo on left */}
      <div
        className="text-2xl font-bold text-white cursor-pointer select-none"
        onClick={() => scroll.scrollToTop({ duration: 500 })}
      >
        <img
          src={fullLogo}
          alt="ProdCon Logo"
          className="size-50 object-contain"
        />
      </div>

      <div className="flex-grow" />

      <nav>
        <ul className="flex space-x-8 text-white font-medium text-lg">
          {actions.map(({ label, onClick, path, section }, i) => {
            let isActive = false;

            if (path !== "/") {
              // For non-home routes, active if path matches
              isActive = location.pathname === path;
            } else {
              // For home route, active if current scroll section matches
              isActive = location.pathname === "/" && activeSection === section;
            }

            return (
              <li key={i}>
                <button
                  className={`transition-colors duration-200 focus:outline-none ${
                    isActive ? "text-blue-700 underline" : "text-white"
                  }`}
                  onClick={onClick}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

{
  /* <div className="ml-10 flex space-x-6 text-gray-300 text-xl">
        {[FaLinkedin, FaGithub, FaDiscord, FaInstagram, FaYoutube].map((Icon, i) => (
          <button
            key={i}
            onClick={() =>
              window.open(
                [
                  "https://linkedin.com",
                  "https://github.com",
                  "https://discord.com",
                  "https://instagram.com",
                  "https://youtube.com",
                ][i],
                "_blank"
              )
            }
            aria-label="social"
            className="hover:text-white transition-colors duration-200 focus:outline-none"
          >
            <Icon />
          </button>
        ))}
      </div> */
}
