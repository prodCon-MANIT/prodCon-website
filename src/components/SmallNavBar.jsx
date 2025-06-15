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

// Mobile-only sidebar animations
const sidebarVariants = {
  open: ({ radius }) => ({
    clipPath: `circle(${radius}px at 50% 20px)`,
    transition: { duration: 1.2, ease: "easeInOut" },
  }),
  closed: {
    clipPath: "circle(0px at 90% 20px)",
    transition: { duration: 1.0, ease: "easeInOut" },
  },
};

// Menu items fade-in
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function smallNavBar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { width, height } = useWindowSize();

  // adjust radius: slightly larger than diagonal for small screens
  const radius = Math.hypot(width, height) * 1.1;

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
    <header className="fixed top-0  left-0 w-full z-50 shadow-md md:hidden">
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <motion.div
          className="text-lg font-bold text-white cursor-pointer"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onClick={() => {
            scroll.scrollToTop({ duration: 500 });
            closeMenu();
          }}
        >
         <img src={fullLogo} alt="ProdCon Logo" className=" w-auto" />
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

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-blue-950 overflow-hidden z-40"
            initial="closed"
            animate="open"
            exit="closed"
            custom={{ radius }}
            variants={sidebarVariants}
            style={{ transformOrigin: '90% 20px' }}
          >
            <motion.ul
              className="flex flex-col items-center mt-20"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{ visible: { transition: { staggerChildren: 0.2, delayChildren: 0.4 } } }}
            >
              {actions.map((item, idx) => (
                <motion.li
                  key={idx}
                  variants={itemVariants}
                  className="w-full text-center py-4 border-b border-gray-200"
                >
                  <button
                    onClick={item.onClick}
                    className="text-base font-medium text-white focus:outline-none"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="flex justify-center space-x-8 mt-10 text-xl text-white"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } } }}
            >
              {[FaLinkedin, FaGithub, FaDiscord, FaInstagram, FaYoutube].map((Icon, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => window.open(
                    ['https://linkedin.com','https://github.com','https://discord.com','https://instagram.com','https://youtube.com'][idx], '_blank')
                  }
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="focus:outline-none"
                >
                  <Icon size={20} />
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
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