import React, { useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';



interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

// Optimized Particle Background Component
const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Reduce particle count and simplify their properties
    const PARTICLE_COUNT = 55;
    const CONNECTION_DISTANCE = 60;
    
    const createParticles = () => {
      const particles: Particle[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
        });
      }
      particlesRef.current = particles;
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = '#0F0B1F';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(148, 120, 219, 0.25)';
      ctx.lineWidth = 1.2;

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Simplified particle rendering
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(147, 112, 219, 0.7)';
        ctx.fill();
      });

      // Reduce connection checks with spatial partitioning
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const p1 = particlesRef.current[i];
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = dx * dx + dy * dy;
          
          if (distance < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
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

// Optimized Floating Orbs Component
const FloatingOrbs: React.FC = () => {
  // Reduce number of orbs and use useMemo to prevent unnecessary recalculations
  const orbs = useMemo(() => Array.from({ length: 3 }, (_, i) => ({
    id: i,
    size: Math.random() * 80 + 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 3,
  })), []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0, opacity: 0.5 }}>
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
            background: 'radial-gradient(circle at 30% 30%, rgba(147, 112, 219, 0.08), rgba(103, 76, 192, 0.03))',
            filter: 'blur(30px)',
            willChange: 'transform',
          }}
          initial={false}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -50, 30, 0],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Simple Footer Component
const Footer: React.FC = () => (
  <footer style={{
    padding: '2rem',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.7)',
    position: 'relative',
    zIndex: 2,
  }}>
    <p>© 2025 Products and Consulting Club, MANIT Bhopal</p>
  </footer>
);

// Main component styles with performance optimizations
const containerStyle = {
  minHeight: "100vh",
  background: "#0F0B1F",
  color: "#fff",
  position: "relative",
  overflow: "hidden",
} as const;

const glassCardStyle = {
  background: "linear-gradient(135deg, rgba(60,40,100,0.35) 0%, rgba(40,20,60,0.25) 100%)",
  backdropFilter: "blur(90px)",
  borderRadius: "25px",
  border: "2px solid rgba(186, 160, 255, 0.25)",
  padding: "1rem 1rem 2rem 2rem",
  boxShadow: "0 8px 32px 0 rgba(103, 76, 192, 0.18), 0 1.5px 8px 0 rgba(147,112,219,0.10)",
  transition: "box-shadow 0.3s, border 0.3s",
} as const;

// Light purple glassmorphism style for Mission and Vision
const lightPurpleGlassCardStyle = {
  background: "linear-gradient(135deg, rgba(186,160,255,0.22) 0%, rgba(147,112,219,0.13) 100%)",
  backdropFilter: "blur(60px)",
  borderRadius: "25px",
  border: "2px solid rgba(186, 160, 255, 0.25)",
  padding: "1rem 1rem 2rem 2rem",
  boxShadow: "0 8px 32px 0 rgba(147, 112, 219, 0.13), 0 1.5px 8px 0 rgba(186,160,255,0.10)",
  transition: "box-shadow 0.3s, border 0.3s",
} as const;

// Framer Motion variants for staggered Core Values
const coreValuesContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const coreValueItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const About: React.FC = () => {
  const missions = useMemo(() => [
    {
      title: "Connect",
      description: "We cultivate a thriving network by connecting students with industry experts, alumni, and like-minded peers",
    },
    {
      title: "Collaborate ",
      description: "We at Prodcon ,believe in the power of teamwork",
    },
    {
      title: "Create",
      description: " Innovation lies at our core",
    }
  ], []);

  // New: Mission and Vision content
  const missionVision = useMemo(() => [
    {
      title: "Mission",
      description: `At ProdCon, our mission is to foster a bold culture of exploration, strategic thinking, and purpose-driven execution. We are building a student-powered movement where ideas are tested, challenges are embraced, and learning goes beyond the classroom shaping minds that can navigate ambiguity, build solutions, and lead with clarity.\nThrough immersive experiences in product management and consulting, real-world collaborations, and cross-disciplinary problem-solving, we aim to nurture creators and changemakers who don't just adapt to the future, they shape it. Our mission is not to follow industry trends, but to set them within campus and far beyond it.`
    },
    {
      title: "Vision",
      description: `At ProdCon, we empower students to become bold problem solvers and future-ready leaders in product and consulting. We blend strategy, innovation, and hands-on exposure to turn curiosity into capability  and ambition into impact.`
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
          padding: "8rem 2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <motion.h1
            style={{
              fontSize: "clamp(2.7rem, 5vw, 3.7rem)",
              textAlign: "center",
              marginBottom: "4rem",
              color: "#fff",
              textShadow: "0 0 32px rgba(147, 112, 219, 0.25)",
              fontWeight: 700,
              letterSpacing: "0.01em",
            }}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
         About us
          </motion.h1>

          <motion.div style={{ ...glassCardStyle, marginBottom: "4rem" }}
            whileHover={{ scale: 1.04, boxShadow: "0 12px 36px 0 rgba(103, 76, 192, 0.22)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
          >
            <p style={{ fontSize: "1.2rem", lineHeight: 1.6 }}>
            The Product & Consulting Club at NIT Bhopal, widely known as ProdCon, is a premier, student-led initiative committed to building and nurturing future leaders in Consulting and product management of the World.  We aim to create a high-impact learning ecosystem that provides students with real-world exposure and fosters the development of structured problem-solving skills.
            </p>
          </motion.div>
          <motion.div  id ="resource123"
        initial={{ opacity: 0, scale: 0.92, y: 40 }}
        style={{
          padding: "4rem 2rem",
          position: "relative",
          zIndex: 2,
          marginBottom: "2rem"
        }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        >
        <div id="resources123" style={glassCardStyle}>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 2.5rem)",
            textAlign: "center",
            marginBottom: "2rem",
            color: "#fff",
            textShadow: "0 0 20px rgba(147, 112, 219, 0.4)",
          }}>
            Resources
          </h2>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem"
          }}>
            <motion.a
              href="https://drive.google.com/drive/folders/1aTNi4nMULJXcaZ_gZqkWv9N2g1pxXbtn"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.7rem",
                padding: "1rem 1rem",
                background: "linear-gradient(90deg, #a084e8 0%, #6f61c0 100%)",
                border: "none",
                borderRadius: "12px",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "1.15rem",
                boxShadow: "0 4px 18px 0 rgba(147,112,219,0.13)",
                transition: "all 0.3s cubic-bezier(.4,2,.6,1)",
                letterSpacing: "0.03em",
                cursor: "pointer",
                outline: "none"
              }}
              whileHover={{ scale: 1.09, background: "linear-gradient(90deg, #bfaaff 0%, #a084e8 100%)", boxShadow: "0 0 32px 0 #bfaaff, 0 8px 32px 0 rgba(147,112,219,0.18)", filter: 'brightness(1.10)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <svg
                width="30"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path d="M7.73 13.31v-2.62l4.27-7.39h2.62l-4.27 7.39h5.23l-7.85 9.7 2.62-7.08z"/>
              </svg>
              Access Resources
            </motion.a>
          </div>
        </div>
      </motion.div>

          {/* New grid layout for Mission, 3 Cs, and Vision */}
          <div
            className="about-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "auto auto",
              gap: "2rem",
              marginBottom: "2.5rem",
              alignItems: "start",
              maxWidth: "1000px",
              margin: "0 auto 2.5rem auto",
            }}
          >
            {/* Mission - top left */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.18, ease: 'easeOut' }}
              style={{ ...lightPurpleGlassCardStyle, gridColumn: '1 / 3', gridRow: 1 }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 32px 0 #bfaaff, 0 12px 36px 0 rgba(103, 76, 192, 0.22)", filter: 'brightness(1.08)' }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#fff" }}>Mission</h3>
              <p style={{ lineHeight: 1.6, whiteSpace: "pre-line" }}>{missionVision[0].description}</p>
            </motion.div>

            {/* Animated divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'circOut' }}
              style={{
                gridColumn: '1 / 4',
                gridRow: 1,
                margin: '2.2rem 0 1.2rem 0',
                height: '4px',
                background: 'linear-gradient(90deg, #bfaaff 0%, #6f61c0 100%)',
                borderRadius: '2px',
                boxShadow: '0 0 16px 0 #bfaaff',
                transformOrigin: 'left',
              }}
            />

            {/* 3 Cs heading and boxes - center, spanning two rows */}
            <div
              style={{
                gridColumn: 3,
                gridRow: "1 / span 2",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2 style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                textAlign: "center",
                marginBottom: "1.5rem",
                color: "#bfaaff",
                textShadow: "0 0 12px rgba(147, 112, 219, 0.18)",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em"
              }}>
                Core values 3 Cs:-
              </h2>
              <motion.div
                style={{ display: "grid", gridTemplateColumns: "2fr", gap: "1.2rem", width: "100%" }}
                variants={coreValuesContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {missions.map((mission, index) => (
                  <motion.div
                    key={index}
                    variants={coreValueItem}
                    style={glassCardStyle}
                    whileHover={{ scale: 1.07, boxShadow: "0 0 24px 0 #bfaaff, 0 12px 36px 0 rgba(103, 76, 192, 0.22)", filter: 'brightness(1.10)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#fff" }}>{mission.title}</h3>
                    <p style={{ lineHeight: 1.6 }}>{mission.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Vision - bottom left, below Mission */}
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.18, ease: 'easeOut' }}
              style={{ ...lightPurpleGlassCardStyle, gridColumn: '1 / 3', gridRow: 2, marginTop: "2.5rem" }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 32px 0 #bfaaff, 0 12px 36px 0 rgba(103, 76, 192, 0.22)", filter: 'brightness(1.08)' }}
              whileTap={{ scale: 0.98 }}
            >
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#fff" }}>Vision</h3>
              <p style={{ lineHeight: 1.6, whiteSpace: "pre-line" }}>{missionVision[1].description}</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Resources Section */}
     

      {/* Animated Footer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default About; 