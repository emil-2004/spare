'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center overflow-hidden bg-background">
      {/* Cinematic Background Layer */}
      <motion.div 
        style={{ scale, y: yBg }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </motion.div>

      {/* Realistic Truck Detail - High-End Industrial Feel */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-end pointer-events-none z-10"
      >
        <img 
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=2000" 
          className="h-[90%] w-auto object-contain grayscale brightness-125 contrast-125 mix-blend-screen"
          alt="Industrial Component Detail"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Layered Content - Clean Grid Alignment */}
      <motion.div 
        style={{ opacity, y: yContent }}
        className="container-custom relative z-20 w-full"
      >
        <div className="max-w-4xl space-y-10">
          <Reveal preset="fade-right" delay={0.5}>
            <div className="flex items-center space-x-4">
              <span className="tech-label text-accent">Industrial Excellence</span>
              <div className="h-px w-12 bg-accent/30" />
              <span className="tech-label">Est. 1994</span>
            </div>
          </Reveal>
          
          <div className="space-y-6">
            <Reveal preset="blur-in" delay={0.7} duration={1.2}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter italic leading-[0.85] text-white">
                Engineered <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/40 to-white/10">
                  Reliability
                </span>
              </h1>
            </Reveal>
            
            <Reveal preset="fade-up" delay={0.9}>
              <p className="text-muted text-lg md:text-xl max-w-2xl leading-relaxed">
                Precision-crafted heavy duty components for the next generation of global logistics. 
                Where durability meets futuristic engineering.
              </p>
            </Reveal>
          </div>

          <Reveal preset="fade-up" delay={1.1}>
            <div className="flex flex-col sm:flex-row gap-6 items-center pt-4">
              <Button variant="primary" size="lg" className="min-w-[220px]">
                View Systems
              </Button>
              <div className="flex items-center space-x-4 px-6 py-3 border border-white/5 glass-panel">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                <span className="tech-label text-white/80">Network Status: Online</span>
              </div>
            </div>
          </Reveal>
        </div>
      </motion.div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background to-transparent z-30" />
    </section>
  );
}
