import React, { useEffect, useRef, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const PARTICLE_COUNT = 60;
    const CONNECTION_DISTANCE = 80;

    const createParticles = () => {
      const particles: Particle[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
      particlesRef.current = particles;
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(15, 11, 31, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(148, 120, 219, 0.3)';
      ctx.lineWidth = 1.5;

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(191, 170, 255, 0.8)';
        ctx.fill();
      });

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p1 = particlesRef.current[i];
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            const opacity = 1 - (distance / CONNECTION_DISTANCE);
            ctx.strokeStyle = `rgba(186, 160, 255, ${opacity * 0.4})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    handleResize();
    animate();

    window.addEventListener('resize', handleResize);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

const FloatingOrbs: React.FC = () => {
  const orbs = useMemo(() => [
    {
      id: 1,
      size: 120,
      x: 10,
      y: 20,
      duration: 25,
      delay: 0,
      color: 'rgba(147, 112, 219, 0.08)'
    },
    {
      id: 2,
      size: 180,
      x: 80,
      y: 60,
      duration: 30,
      delay: 5,
      color: 'rgba(103, 76, 192, 0.05)'
    },
    {
      id: 3,
      size: 100,
      x: 30,
      y: 70,
      duration: 20,
      delay: 2,
      color: 'rgba(186, 160, 255, 0.06)'
    }
  ], []);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 0,
      opacity: 0.7
    }}>
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          style={{
            position: 'absolute',
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            borderRadius: '50%',
            background: `radial-gradient(circle at 30% 30%, ${orb.color}, transparent 70%)`,
            filter: 'blur(40px)',
            willChange: 'transform',
          }}
          animate={{
            x: [0, 20, -10, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const Footer: React.FC = () => (
  <motion.footer
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    style={{
      padding: '2rem',
      textAlign: 'center',
      color: 'rgba(255, 255, 255, 0.7)',
      position: 'relative',
      zIndex: 2,
      fontSize: '0.9rem',
    }}
  >
    <p>©️ {new Date().getFullYear()} Products and Consulting Club, MANIT Bhopal</p>
  </motion.footer>
);

const MissionIcon: React.FC = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
    style={{
      width: 60,
      height: 60,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, rgba(186,160,255,0.2) 0%, rgba(147,112,219,0.15) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '1.5rem',
      border: '1px solid rgba(186, 160, 255, 0.3)',
      boxShadow: '0 0 20px rgba(147, 112, 219, 0.2)',
    }}
  >
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="url(#paint0_linear)"
        strokeWidth="1.5"
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="url(#paint1_linear)"
        strokeWidth="1.5"
      />
      <defs>
        <linearGradient id="paint0_linear" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BFAAFF" />
          <stop offset="1" stopColor="#9370DB" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="9" y1="9" x2="15" y2="15" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BFAAFF" />
          <stop offset="1" stopColor="#9370DB" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
);

const VisionIcon: React.FC = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
    style={{
      width: 60,
      height: 60,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, rgba(186,160,255,0.2) 0%, rgba(147,112,219,0.15) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '1.5rem',
      border: '1px solid rgba(186, 160, 255, 0.3)',
      boxShadow: '0 0 20px rgba(147, 112, 219, 0.2)',
    }}
  >
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <path
        d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
        stroke="url(#paint0_linear)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="url(#paint1_linear)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="paint0_linear" x1="1" y1="4" x2="23" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BFAAFF" />
          <stop offset="1" stopColor="#9370DB" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="9" y1="9" x2="15" y2="15" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BFAAFF" />
          <stop offset="1" stopColor="#9370DB" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
);

const MissionVisionCard: React.FC<{
  title: string;
  description: string;
  index: number;
}> = ({ title, description, index }) => {
  const isMission = index === 0;

  return (
    <motion.div
      style={{
        ...lightPurpleGlassCardStyle,
        padding: "2.5rem",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 40px rgba(147, 112, 219, 0.3)"
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index, duration: 0.6 }}
    >
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "80px",
        height: "80px",
        background: "linear-gradient(135deg, rgba(191, 170, 255, 0.15), transparent 70%)",
        borderBottomLeftRadius: "100%",
        zIndex: 0,
      }} />

      <div style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "1.5rem",
        position: "relative",
        zIndex: 1,
      }}>
        {isMission ? <MissionIcon /> : <VisionIcon />}

        <motion.h3
          style={{
            fontSize: "1.8rem",
            margin: 0,
            color: "#fff",
            fontWeight: 700,
            background: "linear-gradient(90deg, #bfaaff, #a084e8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          {title}
        </motion.h3>
      </div>

      <motion.p
        style={{
          lineHeight: 1.7,
          fontSize: "1.1rem",
          position: "relative",
          zIndex: 1,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {description}
      </motion.p>

      <div style={{
        position: "absolute",
        bottom: "1.5rem",
        right: "1.5rem",
        display: "flex",
        gap: "0.5rem",
      }}>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "rgba(191, 170, 255, 0.6)",
            }}
            animate={{
              y: [0, -5, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

const ConnectIcon: React.FC = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
    style={{
      width: 80,
      height: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem',
    }}
  >
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <path
        d="M32 44C41.3888 44 49 36.3888 49 27C49 17.6112 41.3888 10 32 10C22.6112 10 15 17.6112 15 27C15 36.3888 22.6112 44 32 44Z"
        stroke="url(#connectGradient)"
        strokeWidth="2"
      />
      <path
        d="M22 40L18 54"
        stroke="url(#connectGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M42 40L46 54"
        stroke="url(#connectGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 44V54"
        stroke="url(#connectGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="32"
        cy="27"
        r="3"
        fill="url(#connectGradient)"
      />
      <defs>
        <linearGradient id="connectGradient" x1="15" y1="10" x2="49" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BFAAFF" />
          <stop offset="1" stopColor="#9370DB" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
);

const CollaborateIcon: React.FC = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
    style={{
      width: 80,
      height: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem',
    }}
  >
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <path
        d="M40 36C43.866 36 47 32.866 47 29C47 25.134 43.866 22 40 22C36.134 22 33 25.134 33 29C33 32.866 36.134 36 40 36Z"
        stroke="url(#collaborateGradient)"
        strokeWidth="2"
      />
      <path
        d="M24 36C27.866 36 31 32.866 31 29C31 25.134 27.866 22 24 22C20.134 22 17 25.134 17 29C17 32.866 20.134 36 24 36Z"
        stroke="url(#collaborateGradient)"
        strokeWidth="2"
      />
      <path
        d="M28 41C28 42.3261 28.5268 43.5979 29.4645 44.5355C30.4021 45.4732 31.6739 46 33 46H35C36.3261 46 37.5979 45.4732 38.5355 44.5355C39.4732 43.5979 40 42.3261 40 41"
        stroke="url(#collaborateGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 41C12 42.3261 12.5268 43.5979 13.4645 44.5355C14.4021 45.4732 15.6739 46 17 46H19C20.3261 46 21.5979 45.4732 22.5355 44.5355C23.4732 43.5979 24 42.3261 24 41"
        stroke="url(#collaborateGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M36 29L40 29"
        stroke="url(#collaborateGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 29L28 29"
        stroke="url(#collaborateGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="collaborateGradient" x1="17" y1="22" x2="47" y2="46" gradientUnits="userSpaceOnUuse">
          <stop stopColor="#BFAAFF" />
          <stop offset="1" stopColor="#9370DB" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
);

const CreateIcon: React.FC = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
    style={{
      width: 80,
      height: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem',
    }}
  >
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <path
        d="M32 20V44"
        stroke="url(#createGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 32H44"
        stroke="url(#createGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 54C43.0457 54 52 45.0457 52 34C52 22.9543 43.0457 14 32 14C20.9543 14 12 22.9543 12 34C12 45.0457 20.9543 54 32 54Z"
        stroke="url(#createGradient)"
        strokeWidth="2"
      />
      <path
        d="M42 22L46 18"
        stroke="url(#createGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="createGradient" x1="12" y1="14" x2="52" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BFAAFF" />
          <stop offset="1" stopColor="#9370DB" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
);

const About: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (location.hash === '#resources') {
      const timer = setTimeout(() => {
        const element = document.getElementById('resources');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const isMobile = windowWidth < 768;

  const coreValues = useMemo(() => [
    {
      title: "Connect",
      description: "Building a platform where students, industry experts, and alumni can connect & foster a powerful network of opportunities and knowledge sharing.",
      icon: <ConnectIcon />,
      color: "#BFAAFF"
    },
    {
      title: "Collaborate",
      description: "At ProdCon,We empower our  teams to solve complex challenges and co-create innovative solutions by collaborating with Startups, NGOs through diverse perspectives and shared expertise.",
      icon: <CollaborateIcon />,
      color: "#A084E8"
    },
    {
      title: "Create",
      description: "Creating a space  to transform ideas into reality through user-centric experimentation, rapid prototyping, and delivering innovation in Product &  Strategy through solutions with measurable impact.",
      icon: <CreateIcon />,
      color: "#9370DB"
    }
  ], []);

  const missionVision = useMemo(() => [
    {
      title: "Mission",
      description: `At ProdCon, our mission is to cultivate a bold culture of exploration, analytical thinking, and purpose-driven execution to make a real impact.
We are building a student-first Community where ideas are tested, challenges are embraced, and learning goes beyond the classroom . Students gain hands-on experience with real projects which  empower & shape their minds to navigate ambiguity, make a real impact, lead with clarity and purpose in the realms of Product and Consulting.
`
    },
    {
      title: "Vision",
      description: `At ProdCon, we empower students to become bold problem-solvers and future-ready business leaders to make a ground impact in the world of Product and Consulting. We blend strategy, innovation, and hands-on exposure to transform curiosity into excellence, and ambition into impact.`
    }
  ], []);

  return (
    <div style={containerStyle}>
      <ParticleBackground />
      <FloatingOrbs />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          padding: isMobile ? "4rem 1rem" : "8rem 2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            <motion.h1
              style={{
                fontSize: "clamp(2.7rem, 5vw, 4rem)",
                marginBottom: "1.5rem",
                color: "#fff",
                fontWeight: 800,
                letterSpacing: "0.01em",
                background: "linear-gradient(90deg, #bfaaff, #a084e8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.2
              }}
            >
              About ProdCon Club
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "150px" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                height: "4px",
                background: "linear-gradient(90deg, #bfaaff, #6f61c0)",
                borderRadius: "2px",
                margin: "0 auto",
                boxShadow: "0 0 16px 0 rgba(191, 170, 255, 0.5)"
              }}
            />
          </motion.div>

          <motion.div
            style={{
              ...glassCardStyle,
              marginBottom: "4rem",
              padding: isMobile ? "1.5rem" : "2.5rem"
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 12px 40px 0 rgba(103, 76, 192, 0.25)"
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
          >
            <p style={{
              fontSize: "1.2rem",
              lineHeight: 1.7,
              textAlign: "left",
              maxWidth: "900px",
              margin: "0 auto"
            }}>
              The Product & Consulting Club at NIT Bhopal, widely known as ProdCon, is a premier student-led initiative dedicated to building and nurturing future leaders in Product Management and Consulting.
              We aim to create a high-impact learning ecosystem that offers students real-world exposure, accelerates professional growth, and fosters the development of structured problem-solving, strategic thinking, and decision-making skills.
            </p>
          </motion.div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: "2.5rem",
            marginBottom: "3rem"
          }}>
            {missionVision.map((item, index) => (
              <MissionVisionCard
                key={index}
                index={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>


          <div style={{ margin: "4rem 0" }}>
            <motion.h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                textAlign: "center",
                marginBottom: "3rem",
                color: "#bfaaff",
                fontWeight: 700,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Guiding Principles: The 3'C
            </motion.h2>

            <motion.div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                gap: "2rem"
              }}
              variants={coreValuesContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={coreValueItem}
                  className='md:text-center text-left'
                  style={{
                    ...glassCardStyle,
                    padding: "2rem",
                    
                    position: "relative",
                    overflow: "hidden",
                    border: `1px solid ${value.color}33`,
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 20px 40px ${value.color}22`
                  }}
                >
                  <div style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    display: "flex",
                    gap: "0.3rem",
                  }}>
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: value.color,
                          opacity: 0.6,
                        }}
                        animate={{
                          y: [0, -3, 0],
                        }}
                        transition={{
                          duration: 1.5 + i,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>

                  {value.icon}

                  <h3 style={{
                    fontSize: "1.8rem",
                    marginBottom: "1rem",
                    color: value.color,
                    fontWeight: 700
                  }}
                  className='text-center'>
                    {value.title}
                  </h3>
                  <p style={{
                    lineHeight: 1.7,
                    fontSize: "1.1rem"
                  }}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            id="resources"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              ...glassCardStyle,
              padding: "3rem 2rem",
              margin: "4rem auto",
              maxWidth: "700px",
              textAlign: "center",
              position: "relative",
            }}
          >
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "60px",
              height: "60px",
              background: "linear-gradient(135deg, rgba(191, 170, 255, 0.1), transparent 70%)",
              borderBottomRightRadius: "100%",
            }} />

            <h2 style={{
              fontSize: "clamp(1.8rem, 3vw, 2.3rem)",
              marginBottom: "1.5rem",
              color: "#fff",
              fontWeight: 700
            }}>
              Learning Resources
            </h2>
            <p style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto"
            }}>
              Access our curated collection of resources to kickstart your journey in product management and consulting.
            </p>
            <motion.a
              href="https://drive.google.com/drive/folders/1aTNi4nMULJXcaZ_gZqkWv9N2g1pxXbtn"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.7rem",
                padding: "1rem 2rem",
                background: "linear-gradient(90deg, #a084e8 0%, #6f61c0 100%)",
                borderRadius: "12px",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1.15rem",
                boxShadow: "0 4px 20px rgba(147, 112, 219, 0.3)",
                position: "relative",
                zIndex: 1,
              }}
              whileHover={{
                scale: 1.08,
                background: "linear-gradient(90deg, #bfaaff 0%, #a084e8 100%)",
                boxShadow: "0 0 32px rgba(191, 170, 255, 0.5)"
              }}
              whileTap={{ scale: 0.97 }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path d="M7.73 13.31v-2.62l4.27-7.39h2.62l-4.27 7.39h5.23l-7.85 9.7 2.62-7.08z" />
              </svg>
              Access Resources
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

const containerStyle = {
  minHeight: "100vh",
  background: "#0F0B1F",
  color: "#fff",
  position: "relative",
  overflow: "hidden",
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
} as const;

const glassCardStyle = {
  background: "linear-gradient(135deg, rgba(60,40,100,0.25) 0%, rgba(40,20,60,0.15) 100%)",
  backdropFilter: "blur(16px)",
  borderRadius: "24px",
  border: "1px solid rgba(186, 160, 255, 0.2)",
  padding: "2rem",
  boxShadow: "0 12px 32px rgba(103, 76, 192, 0.15)",
  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
} as const;

const lightPurpleGlassCardStyle = {
  background: "linear-gradient(135deg, rgba(186,160,255,0.15) 0%, rgba(147,112,219,0.1) 100%)",
  backdropFilter: "blur(16px)",
  borderRadius: "24px",
  border: "1px solid rgba(186, 160, 255, 0.2)",
  padding: "2rem",
  boxShadow: "0 12px 32px rgba(147, 112, 219, 0.1)",
  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
} as const;

const coreValuesContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const coreValueItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  },
};

export default About;