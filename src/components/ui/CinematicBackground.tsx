'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CinematicBackground() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      duration: Math.random() * 25 + 15,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Particles - Reduced count and size */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, x: `${p.x}%`, y: `${p.y}%` }}
          animate={{
            opacity: [0, 0.2, 0],
            y: [`${p.y}%`, `${p.y - 5}%`],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bg-accent/30 rounded-full blur-[1px]"
          style={{ width: p.size, height: p.size }}
        />
      ))}

      {/* Industrial Glow Lines - More subtle */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
            x: [-50, 50],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/10 to-transparent"
        />
      </div>

      {/* Animated Ambient Light Gradients - Reduced opacity */}
      <motion.div
        animate={{
          opacity: [0.01, 0.03, 0.01],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-accent/10 rounded-full blur-[180px]"
      />
    </div>
  );
}
