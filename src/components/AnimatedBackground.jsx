// src/components/AnimatedBackground.js
import React, { useEffect, useRef } from "react";

function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    let animationFrameId;

    let width  = (canvas.width  = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const numParticles        = 50;
    const CONNECTION_DISTANCE = 60;

    class Particle {
      constructor() {
        this.x      = Math.random() * width;
        this.y      = Math.random() * height;
        this.radius = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.color  = "rgba(147,112,219,0.7)";
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.fillStyle = "#0F0B1F";
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(148,120,219,0.25)";
      ctx.lineWidth   = 1.2;

      for (let i = 0; i < numParticles; i++) {
        for (let j = i + 1; j < numParticles; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          if (dx*dx + dy*dy < CONNECTION_DISTANCE*CONNECTION_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => { p.update(); p.draw(); });
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    function handleResize() {
      width  = canvas.width  = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
    position: "fixed",         // Must be in quotes
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1,                // JS property name: camelCase
    pointerEvents: "none",
    backgroundColor: "#0F0B1F" // Must be in quotes and camelCase
  }}
    />
  );
}

export default AnimatedBackground;
