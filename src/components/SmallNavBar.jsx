import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Linkedin, Instagram, Youtube } from "lucide-react";
import fullLogo from "../assets/artboard@4x.png";

export default function SmallNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);

  const handleNavigate = (label) => {
    if (label === "Home") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (label === "Events") {
      sessionStorage.setItem("pendingSection", "event-section");
      navigate("/");
    } else if (label === "Team") {
      sessionStorage.setItem("pendingSection", "team-section");
      navigate("/");
    } else {
      navigate(`/${label.toLowerCase()}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    toggle();
  };

  return (
    <div className="md:hidden fixed top-0 left-0 w-full z-[100] px-4 py-4">
      <div className="flex h-14 items-center justify-between rounded-2xl border border-white/10 bg-black/75 px-5 shadow-xl">
        <img src={fullLogo} alt="Logo" className="h-8 scale-380 ml-2" />
        <button onClick={toggle} className="p-2 text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-[#090613] z-[99] p-8 flex flex-col"
          >
            <div className="flex justify-end mb-12">
              <button onClick={toggle} className="p-3 bg-white/5 rounded-2xl text-white"><X /></button>
            </div>
            
            <nav className="space-y-6">
              {["Home", "Events", "Team", "About", "Contact"].map((label) => (
                <button
                  key={label}
                  onClick={() => handleNavigate(label)}
                  className="block text-4xl font-black text-white tracking-tighter"
                >
                  {label}
                </button>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-white/5 flex gap-4">
              {[Linkedin, Instagram, Youtube].map((Icon, i) => (
                <Icon key={i} className="text-gray-500" size={20} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}