'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';

const parts = [
  {
    id: 'chassis',
    name: 'Reinforced Chassis',
    image: 'https://images.unsplash.com/photo-1532634896-26909d0d4b89?auto=format&fit=crop&q=80&w=1200',
    initial: { x: -400, y: 150, opacity: 0, rotate: -10, scale: 0.9 },
    final: { x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 },
    mobileFinal: { x: 0, y: -40, opacity: 1, rotate: 0, scale: 0.75 },
    range: [0, 0.2]
  },
  {
    id: 'engine',
    name: 'V8-Turbo Engine',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1200',
    initial: { x: 400, y: -150, opacity: 0, rotate: 15, scale: 0.7 },
    final: { x: 40, y: -60, opacity: 1, rotate: 0, scale: 0.85 },
    mobileFinal: { x: 15, y: -15, opacity: 1, rotate: 0, scale: 0.6 },
    range: [0.25, 0.45]
  },
  {
    id: 'wheel-front',
    name: 'Heavy Duty Wheels',
    image: 'https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?auto=format&fit=crop&q=80&w=1200',
    initial: { x: -250, y: 400, opacity: 0, rotate: -30, scale: 0.6 },
    final: { x: -120, y: 120, opacity: 1, rotate: 0, scale: 0.75 },
    mobileFinal: { x: -50, y: 80, opacity: 1, rotate: 0, scale: 0.5 },
    range: [0.5, 0.7]
  },
  {
    id: 'braking',
    name: 'Kinetic Braking System',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200',
    initial: { x: 250, y: 400, opacity: 0, rotate: 30, scale: 0.6 },
    final: { x: 120, y: 120, opacity: 1, rotate: 0, scale: 0.75 },
    mobileFinal: { x: 50, y: 80, opacity: 1, rotate: 0, scale: 0.5 },
    range: [0.75, 0.95]
  }
];

interface AssemblyPartProps {
  part: typeof parts[0];
  progress: any;
  isMobile: boolean;
}

function AssemblyPart({ part, progress, isMobile }: AssemblyPartProps) {
  const finalX = isMobile ? part.mobileFinal.x : part.final.x;
  const finalY = isMobile ? part.mobileFinal.y : part.final.y;
  const finalScale = isMobile ? part.mobileFinal.scale : part.final.scale;
  
  const x = useTransform(progress, part.range, [part.initial.x, finalX], { clamp: true });
  const y = useTransform(progress, part.range, [part.initial.y, finalY], { clamp: true });
  const opacity = useTransform(progress, part.range, [0, 1], { clamp: true });
  const rotate = useTransform(progress, part.range, [part.initial.rotate, part.final.rotate], { clamp: true });
  const scale = useTransform(progress, part.range, [part.initial.scale, finalScale], { clamp: true });
  
  const springX = useSpring(x, { stiffness: 60, damping: 25 });
  const springY = useSpring(y, { stiffness: 60, damping: 25 });
  
  return (
    <motion.div
      style={{ 
        x: springX, 
        y: springY, 
        opacity, 
        rotate, 
        scale, 
        zIndex: 30,
        position: 'absolute',
        top: '50%',
        left: '50%',
      }}
      className="pointer-events-none -translate-x-1/2 -translate-y-1/2"
    >
      <div className="relative group pointer-events-auto">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative border border-white/5 glass-panel p-1 md:p-2 overflow-hidden shadow-2xl">
            <img 
              src={part.image} 
              alt={part.name}
              className="w-48 md:w-[500px] h-auto object-contain grayscale brightness-110 contrast-110"
              loading="eager"
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
        
        {/* Simplified Part Label */}
        <motion.div 
          style={{ opacity: useTransform(opacity, [0.9, 1], [0, 1]) }}
          className="absolute -top-12 left-0 whitespace-nowrap pointer-events-none"
        >
          <div className="flex items-center space-x-3">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="tech-label text-accent font-bold text-xs">{part.name}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function TruckAssembly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [percent, setPercent] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const unsubscribe = smoothProgress.on("change", (latest) => {
      setPercent(Math.round(latest * 100));
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
      unsubscribe();
    };
  }, [smoothProgress]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-background z-20">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Atmosphere - Much Cleaner */}
        <div className="absolute inset-0 tech-grid opacity-10" />
        
        {/* Central Assembly Area */}
        <div className="container-custom relative w-full h-full flex items-center justify-center z-10">
          {parts.map((part) => (
            <AssemblyPart 
              key={part.id} 
              part={part} 
              progress={smoothProgress} 
              isMobile={isMobile} 
            />
          ))}
          
          {/* Subtle Core Glow */}
          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0.8, 1], [0, 0.2], { clamp: true }),
              scale: useTransform(smoothProgress, [0.8, 1], [1, 1.5], { clamp: true })
            }}
            className="absolute inset-0 bg-accent/10 blur-[150px] rounded-full z-0 pointer-events-none"
          />
        </div>

        {/* Professional HUD Overlay - Simplified & Aligned */}
        <div className="absolute inset-0 p-12 md:p-24 pointer-events-none flex flex-col justify-between z-40">
          <div className="flex justify-between items-start">
            <Reveal preset="fade-right">
              <div className="space-y-4">
                <span className="tech-label text-accent">Module Assembly Seq.</span>
                <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-white">
                  Technical <br /> Architecture
                </h2>
              </div>
            </Reveal>
            <div className="tech-label text-right space-y-1 opacity-60 text-[10px]">
              <p className="text-accent font-bold">STATUS: {percent > 95 ? 'COMPLETE' : 'IN_PROGRESS'}</p>
              <p>REF: ASM-V8-H4</p>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div className="tech-label opacity-40 max-w-xs text-[9px] leading-relaxed hidden md:block">
              <p>System-wide component synchronization. Establishing high-integrity connections across modular chassis architecture.</p>
            </div>
            <div className="flex flex-col items-end space-y-4 min-w-[180px]">
              <div className="space-y-2 w-full">
                <div className="flex justify-between tech-label text-[9px]">
                  <span>SYNC_PROGRESS</span>
                  <span className="text-accent font-bold">{percent}%</span>
                </div>
                <div className="h-1 w-full bg-white/5 relative overflow-hidden rounded-full">
                  <motion.div 
                    style={{ scaleX: smoothProgress }}
                    className="absolute inset-0 bg-accent origin-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
