import React from 'react';
import Footer from './Footer';
import { motion } from 'framer-motion';

const containerStyle = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #1A0B2E 0%, #2D1B4E 50%, #392359 100%)",
  color: "#fff",
  position: "relative",
  overflow: "hidden",
}

const glassCardStyle = {
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(35px) saturate(160%)",
  borderRadius: "24px",
  border: "1px solid rgba(255, 255, 255, 0.03)",
  padding: "2.5rem",
  boxShadow: "0 8px 32px 0 rgba(26, 11, 46, 0.15)",
  transition: "all 0.4s ease-in-out",
}

const glowTextStyle = {
  textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
  background: "linear-gradient(to right, #fff, #e0e0e0)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold",
}

function About() {
  const missions = [
    {
      title: "Transcend Theory",
      description: "Seamlessly integrate academic insight with actionable business strategies."
    },
    {
      title: "Empower Talent",
      description: "Arm students with future-forward skills in consulting frameworks and product innovation."
    },
    {
      title: "Ace the Arena",
      description: "Drive placement excellence via resume masterclasses, mock evaluations, and strategic mentorship."
    },
    {
      title: "Ignite Collaboration",
      description: "Foster an ecosystem of peer-to-peer learning, expert interactions, and interdisciplinary synergy."
    },
    {
      title: "Champion Critical Thinking",
      description: "Cultivate a mindset of analytical sharpness, creative agility, and structured problem-solving."
    }
  ];

  const principles = [
    {
      title: "Connect",
      description: "We cultivate a thriving network by connecting students with industry experts, alumni, and like-minded peers. These connections foster mentorship, insight, and exposure to real-world practices, helping members explore diverse career paths and opportunities."
    },
    {
      title: "Collaborate",
      description: "Through collaborative workshops, case studies, and cross-functional projects, members engage in experiential learning that promotes knowledge-sharing, peer growth, and the development of crucial interpersonal and leadership skills."
    },
    {
      title: "Create",
      description: "Innovation lies at our core. We encourage members to ideate, strategize, and build impactful solutions. By simulating business challenges, we inspire creativity and empower future leaders to craft change in consulting and product domains."
    }
  ];

  return (
    <div style={containerStyle}>
      {/* Background Effects */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 50% 50%, rgba(103, 76, 192, 0.08), transparent 70%)",
        backdropFilter: "blur(100px)",
        zIndex: 0,
      }} />

      {/* Additional Background Layers */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "linear-gradient(45deg, rgba(89, 46, 169, 0.05) 0%, rgba(103, 76, 192, 0.05) 100%)",
        filter: "blur(120px)",
        zIndex: 0,
      }} />
      <div style={{
        position: "absolute",
        top: "-50%",
        left: "-50%",
        right: "-50%",
        bottom: "-50%",
        background: "radial-gradient(circle at 30% 30%, rgba(103, 76, 192, 0.05) 0%, transparent 70%)",
        filter: "blur(80px)",
        transform: "rotate(-15deg)",
        zIndex: 0,
      }} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          padding: "6rem 2rem",
          position: "relative",
          zIndex: 1,
          background: "linear-gradient(180deg, rgba(41, 23, 77, 0.05) 0%, rgba(59, 35, 89, 0.08) 100%)",
          backdropFilter: "blur(40px)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              ...glowTextStyle,
              fontSize: "clamp(2.5rem, 5vw, 3rem)",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Where Strategy Meets Innovation
          </motion.h1>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              ...glassCardStyle,
              maxWidth: "900px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            <p style={{ marginBottom: "1.5rem", fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.9)" }}>
              Welcome to the Products and Consulting Club of MANIT Bhopal — a vibrant, student-powered collective that transforms theoretical knowledge into boardroom brilliance.
            </p>
            <p style={{ marginBottom: "1.5rem", fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.9)" }}>
              We are the nexus where academic rigor converges with industry acumen, sculpting visionary thinkers and future industry trailblazers in consulting and product management.
            </p>
            <p style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.9)" }}>
              Our multifaceted ecosystem thrives on immersive case simulations, elite business conclaves like VIVITSA, guesstimate marathons, and dynamic mock interview circuits — all meticulously designed to ignite analytical prowess and strategic finesse.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        style={{
          padding: "6rem 2rem",
          background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              ...glassCardStyle,
              textAlign: "center",
            }}
          >
            <h2 style={{
              ...glowTextStyle,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              marginBottom: "2rem",
            }}>
              Vision
            </h2>
            <p style={{
              fontSize: "1.8rem",
              marginBottom: "2rem",
              background: "linear-gradient(to right, #fff, #e0e0e0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "600",
            }}>
              Inspire - Innovate - Impact
            </p>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem", color: "rgba(255, 255, 255, 0.9)" }}>
                To emerge as an eminent, student-led powerhouse that cultivates strategic visionaries, bold innovators, and transformational leaders in the realms of consulting and product management.
              </p>
              <p style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.9)" }}>
                Our vision is anchored in a culture of ideation, collaboration, and creation, where every MANITian is empowered to transcend boundaries, reimagine possibilities, and confidently conquer real-world business conundrums with poise and precision.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        style={{
          padding: "6rem 2rem",
          position: "relative",
          zIndex: 1,
          background: "linear-gradient(180deg, rgba(41, 23, 77, 0.05) 0%, rgba(59, 35, 89, 0.08) 100%)",
          backdropFilter: "blur(40px)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Add stronger background glow */}
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle at center, rgba(103, 76, 192, 0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
            zIndex: -1,
          }} />
          
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              ...glowTextStyle,
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              textAlign: "center",
              marginBottom: "4rem",
              background: "linear-gradient(to right, #fff, rgba(255, 255, 255, 0.9))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            Mission - Crafting Catalysts of Change
          </motion.h2>
          <motion.div 
            style={{
              display: "flex",
              gap: "2rem",
              overflowX: "hidden",
              padding: "2rem 0",
              width: "100%",
              position: "relative",
            }}
          >
            <motion.div
              style={{
                display: "flex",
                gap: "2rem",
                minWidth: "max-content",
                padding: "1rem",
              }}
              animate={{ 
                x: [0, -1000],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }}
            >
              {missions.map((mission, index) => (
                <motion.div
                  key={`first-${index}`}
                  whileHover={{ 
                    scale: 1.02,
                    background: "rgba(255, 255, 255, 0.04)",
                    boxShadow: "0 15px 45px rgba(26, 11, 46, 0.2), 0 0 30px rgba(103, 76, 192, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                  style={{
                    ...glassCardStyle,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    width: "320px",
                    minWidth: "320px",
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)",
                  }}
                >
                  <motion.h3
                    style={{
                      fontSize: "1.8rem",
                      marginBottom: "1.5rem",
                      color: "rgba(255, 255, 255, 1)",
                      fontWeight: "600",
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {mission.title}
                  </motion.h3>
                  <motion.p
                    style={{ 
                      color: "rgba(255, 255, 255, 0.9)", 
                      lineHeight: 1.8,
                      fontSize: "1.1rem",
                      letterSpacing: "0.3px",
                      textShadow: "0 1px 5px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {mission.description}
                  </motion.p>
                </motion.div>
              ))}
              {/* Duplicate set with same styling */}
              {missions.map((mission, index) => (
                <motion.div
                  key={`second-${index}`}
                  whileHover={{ 
                    scale: 1.02,
                    background: "rgba(255, 255, 255, 0.04)",
                    boxShadow: "0 15px 45px rgba(26, 11, 46, 0.2), 0 0 30px rgba(103, 76, 192, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                  }}
                  style={{
                    ...glassCardStyle,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    width: "320px",
                    minWidth: "320px",
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)",
                  }}
                >
                  <motion.h3
                    style={{
                      fontSize: "1.8rem",
                      marginBottom: "1.5rem",
                      color: "rgba(255, 255, 255, 1)",
                      fontWeight: "600",
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {mission.title}
                  </motion.h3>
                  <motion.p
                    style={{ 
                      color: "rgba(255, 255, 255, 0.9)", 
                      lineHeight: 1.8,
                      fontSize: "1.1rem",
                      letterSpacing: "0.3px",
                      textShadow: "0 1px 5px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {mission.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Principles Section */}
      <motion.section
        style={{
          padding: "6rem 2rem",
          background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              ...glowTextStyle,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              textAlign: "center",
              marginBottom: "4rem",
            }}
          >
            Our Principles: The 3Cs
          </motion.h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}>
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ translateY: -10 }}
                style={{
                  ...glassCardStyle,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <h3 style={{
                  fontSize: "1.8rem",
                  marginBottom: "1.5rem",
                  color: "#fff",
                  fontWeight: "600",
                }}>
                  {principle.title}
                </h3>
                <p style={{ color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.7 }}>
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          @keyframes glow {
            0% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
            50% { text-shadow: 0 0 30px rgba(255, 255, 255, 0.7); }
            100% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.5); }
          }
        `}
      </style>
    </div>
  );
}

export default About;