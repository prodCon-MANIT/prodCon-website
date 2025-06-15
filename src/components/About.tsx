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
    <p>© 2024 Products and Consulting Club, MANIT Bhopal</p>
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
  background: "rgba(255, 255, 255, 0.07)",
  backdropFilter: "blur(60px)",
  borderRadius: "25px",
  border: "2px solid rgba(255, 255, 255, 0.2)",
  padding: "2rem",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
} as const;

const About: React.FC = () => {
  const missions = useMemo(() => [
    {
      title: "Transcend Theory",
      description: "Seamlessly integrate academic insight with actionable business strategies.",
      icon: "🚀"
    },
    {
      title: "Empower Talent",
      description: "Arm students with future-forward skills in consulting frameworks and product innovation.",
      icon: "💡"
    },
    {
      title: "Champion Critical Thinking",
      description: "Cultivate a mindset of analytical sharpness and structured problem-solving.",
      icon: "🧠"
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
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              textAlign: "center",
              marginBottom: "4rem",
              color: "#fff",
              textShadow: "0 0 20px rgba(147, 112, 219, 0.4)",
            }}
          >
            Where Strategy Meets Innovation
          </motion.h1>

          <div style={{ ...glassCardStyle, marginBottom: "4rem" }}>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.6, marginBottom: "1rem" }}>
              Welcome to the Products and Consulting Club of MANIT Bhopal — transforming theoretical knowledge into boardroom brilliance.
            </p>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.6 }}>
We are the nexus where academic rigor converges with industry acumen, sculpting visionary thinkers and future industry trailblazers in consulting and product management. Our multifaceted ecosystem thrives on immersive case simulations, elite business conclaves like VIVITSA, guesstimate marathons, and dynamic mock interview circuits — all meticulously designed to ignite analytical prowess and strategic finesse.
Beyond events, we orchestrate high-impact competitions, thought-provoking panel dialogues, and hands-on capstone projects, curating a launchpad for holistic professional growth and a springboard to stellar career trajectories.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                style={glassCardStyle}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{mission.icon}</div>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#fff" }}>{mission.title}</h3>
                <p style={{ lineHeight: 1.6 }}>{mission.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Resources Section */}
      <motion.div  id ="resource123"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          padding: "4rem 2rem",
          position: "relative",
          zIndex: 2,
          marginBottom: "2rem"
        }}
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
            <a
              href="https://drive.google.com/drive/folders/1your-folder-id"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                background: "rgba(147, 112, 219, 0.1)",
                border: "1px solid rgba(147, 112, 219, 0.2)",
                borderRadius: "8px",
                color: "#fff",
                textDecoration: "none",
                transition: "all 0.3s ease",
                fontSize: "1.1rem"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(147, 112, 219, 0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(147, 112, 219, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
                              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M7.73 13.31v-2.62l4.27-7.39h2.62l-4.27 7.39h5.23l-7.85 9.7 2.62-7.08z"/>
                </svg>
              Access Resources
            </a>
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default About; 