import React, { useState, useEffect } from "react";
import fullLogo from '../assets/ProdCon_fullLogo.svg'
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll, scroller } from "react-scroll";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaLinkedin, FaGithub, FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Hook to get window size (only small screens matter here)
function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
}

// Menu items fade-in
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function smallNavBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { width, height } = useWindowSize();

  const closeMenu = () => setMenuOpen(false);

  // actions for menu items, including new "Home"
  const actions = [
    {
      label: "Home",
      onClick: () => {
        navigate("/");
        closeMenu();
        scroll.scrollToTop({ duration: 1000 });
      }
    },
    {
      label: "Events",
      onClick: () => {
        navigate("/");
        setTimeout(() => {
          scroller.scrollTo("event-section", {
            duration: 1300,
            smooth: "easeInOutQuart",
            offset: -60,
          });
        }, 100);
        closeMenu();
      }
    },
    {
      label: "Team",
      onClick: () => {
        navigate("/");
        setTimeout(() => {
          scroller.scrollTo("team-section", {
            duration: 1800,
            smooth: "easeInOutQuart",
            offset: -60,
          });
        }, 50);
        closeMenu();
      }
    },
    {
      label: "About",
      onClick: () => {
        closeMenu();
        navigate("/about");
      }
    },
    {
      label: "Contact",
      onClick: () => {
        closeMenu();
        navigate("/contact");
      }
    }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg md:hidden">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <motion.div
          className="cursor-pointer"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 20, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onClick={() => {
            scroll.scrollToTop({ duration: 500 });
            closeMenu();
          }}
        >
         <img src={fullLogo} alt="ProdCon Logo" className="h-10 scale-350 " />
        </motion.div>

        {/* Hamburger / Cross */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="relative z-50 p-2 bg-white rounded-full text-blue-950 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
        </button>
      </div>

      {/* Professional Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-0 left-0 w-screen h-screen bg-blue-950/95 backdrop-blur-md z-40 shadow-2xl"
          >
            {/* Header Section */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <div className="flex items-center space-x-3">
                <img src={fullLogo} alt="ProdCon Logo" className="h-15 scale-250 w-auto" />
              </div>
              
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 py-6">
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="space-y-2 px-4"
                variants={{ 
                  visible: { 
                    transition: { 
                      staggerChildren: 0.1,
                      delayChildren: 0.1 
                    } 
                  } 
                }}
              >
                {actions.map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="group"
                  >
                    <button
                      onClick={item.onClick}
                      className="w-full flex items-center space-x-4 px-4 py-3 rounded-xl text-white hover:bg-white/10 hover:text-blue-200 transition-all duration-200 group-hover:translate-x-1 text-left"
                    >
                      <span className="font-medium text-base">
                        {item.label}
                      </span>
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            {/* Footer Section */}
            <div className="p-6 border-t border-white/20">
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="mb-6"
              >
                <p className="text-sm font-medium text-blue-200 mb-3 text-center">
                  Connect with us
                </p>
                <div className="flex justify-center space-x-4">
                  {[
                    { 
                      icon: <FaLinkedin />, 
                      link: "https://www.linkedin.com/company/prodcon-the-product-consulting-club-manit-bhopal%C2%A0-nit-b/posts/?feedView=all",
                      label: "LinkedIn"
                    },
                    { 
                      icon: <FaInstagram />, 
                      link: "https://www.instagram.com/prodcon.manit/",
                      label: "Instagram"
                    },
                    { 
                      icon: <FaYoutube />, 
                      link: "https://youtube.com",
                      label: "YouTube"
                    },
                  ].map((social, idx) => (
                    <button
                      key={idx}
                      onClick={() => window.open(social.link, '_blank')}
                      className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white hover:text-blue-200 transition-all duration-200 hover:scale-105"
                      aria-label={social.label}
                    >
                      <span className="text-lg">
                        {social.icon}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Footer Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center"
              >
                <p className="text-xs text-blue-300">
                  © 2025 ProdCon MANIT
                </p>
              </motion.div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
























// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { animateScroll as scroll, scroller } from "react-scroll";
// import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
// import { FaLinkedin, FaGithub, FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// // Hook to get window size (only small screens matter here)
// function useWindowSize() {
//   const [size, setSize] = useState({ width: 0, height: 0 });
//   useEffect(() => {
//     const handleResize = () => {
//       setSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   return size;
// }

// // Mobile-only sidebar animations
// const sidebarVariants = {
//   open: ({ radius }) => ({
//     clipPath: `circle(${radius}px at 90% 20px)`,
//     transition: { duration: 1.2, ease: "easeInOut" },
//   }),
//   closed: {
//     clipPath: "circle(0px at 90% 20px)",
//     transition: { duration: 1.0, ease: "easeInOut" },
//   },
// };

// // Menu items fade-in
// const itemVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// export default function MobileNav() {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { width, height } = useWindowSize();

//   // adjust radius: slightly larger than diagonal for small screens
//   const radius = Math.hypot(width, height) * 1.1;

//   const closeMenu = () => setMenuOpen(false);

//   // actions for menu items
//   const actions = [
//     {
//       label: "Events",
//       onClick: () => {
//         navigate("/");
//         setTimeout(() => {
//       scroller.scrollTo("event-section", {
//         duration: 1300,
//         smooth: "easeInOutQuart",
//         offset: -60,
//       });
//     }, 100); 
//         closeMenu();
//       }
//     },
//     {
//       label: "Team",
//       onClick: () => {
//         navigate("/");
//     setTimeout(() => {
//       scroller.scrollTo("team-section", {
//         duration: 1300,
//         smooth: "easeInOutQuart",
//         offset: -60,
//       });
//     }, 100); 
        

//         closeMenu();
//       }
//     },
//     {
//       label: "About",
//       onClick: () => {
//         closeMenu();
//         navigate("/about");
//       }
//     },
//     {
//       label: "Contact",
//       onClick: () => {
//         closeMenu();
//         navigate("/contact");
//       }
//     }
//   ];

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-gray-600 shadow-md md:hidden">
//       <div className="flex justify-between items-center p-4">
//         {/* Logo */}
//         <motion.div
//           className="text-lg font-bold text-gray-300 cursor-pointer"
//           initial={{ x: -20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           onClick={() => {
//             scroll.scrollToTop({ duration: 500 });
//             closeMenu();
//           }}
//         >
//           MyLogo
//         </motion.div>

//         {/* Hamburger / Cross */}
//         <button
//           onClick={() => setMenuOpen(prev => !prev)}
//           className="relative z-50 p-2 bg-gray-300 rounded-full text-white focus:outline-none"
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             className="fixed inset-0 bg-gray-400 overflow-hidden z-40"
//             initial="closed"
//             animate="open"
//             exit="closed"
//             custom={{ radius }}
//             variants={sidebarVariants}
//             style={{ transformOrigin: '90% 20px' }}
//           >
//             <motion.ul
//               className="flex flex-col items-center mt-20"
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               variants={{ visible: { transition: { staggerChildren: 0.2, delayChildren: 0.4 } } }}
//             >
//               {actions.map((item, idx) => (
//                 <motion.li
//                   key={idx}
//                   variants={itemVariants}
//                   className="w-full text-center py-4 border-b border-gray-200"
//                 >
//                   <button
//                     onClick={item.onClick}
//                     className="text-base font-medium text-white focus:outline-none"
//                   >
//                     {item.label}
//                   </button>
//                 </motion.li>
//               ))}
//             </motion.ul>

//             <motion.div
//               className="flex justify-center space-x-8 mt-10 text-xl text-white"
//               initial="hidden"
//               animate="visible"
//               exit="hidden"
//               variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } } }}
//             >
//               {[FaLinkedin, FaGithub, FaDiscord, FaInstagram, FaYoutube].map((Icon, idx) => (
//                 <motion.button
//                   key={idx}
//                   onClick={() => window.open(
//                     ['https://linkedin.com','https://github.com','https://discord.com','https://instagram.com','https://youtube.com'][idx], '_blank')
//                   }
//                   variants={itemVariants}
//                   whileHover={{ scale: 1.1 }}
//                   className="focus:outline-none"
//                 >
//                   <Icon size={20} />
//                 </motion.button>
//               ))}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }