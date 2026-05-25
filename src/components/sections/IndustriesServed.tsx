'use client';

import { Reveal } from '@/components/ui/Reveal';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const industries = [
  {
    title: 'Precision Logistics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    count: '250+ GLOBAL FLEETS',
    code: 'SEC_LOG_01'
  },
  {
    title: 'Heavy Construction',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200',
    count: '120+ MEGA PROJECTS',
    code: 'SEC_CON_02'
  },
  {
    title: 'Extractive Mining',
    image: 'https://images.unsplash.com/photo-1532329683184-6ffd13057d1c?auto=format&fit=crop&q=80&w=1200',
    count: '45+ EXTRACTION SITES',
    code: 'SEC_MIN_03'
  },
  {
    title: 'Fleet Operations',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200',
    count: '1.2K+ ACTIVE ASSETS',
    code: 'SEC_OPS_04'
  },
  {
    title: 'Defense Transport',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200',
    count: '80+ STRATEGIC PARTNERS',
    code: 'SEC_DEF_05'
  }
];

export default function IndustriesServed() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-15%"]);

  return (
    <section id="industries" ref={containerRef} className="py-32 bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-7xl mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="space-y-6">
              <Reveal preset="fade-right">
                <div className="flex items-center space-x-4">
                  <span className="tech-label text-accent">Market Verticals</span>
                  <div className="h-px w-12 bg-accent/30" />
                  <span className="tech-label">Sectors</span>
                </div>
              </Reveal>
              <Reveal delay={0.2} preset="blur-in">
                <h2 className="section-title mb-0">
                  Industries <br /> Served
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.4} preset="fade-left">
              <p className="text-muted text-lg max-w-md leading-relaxed border-l border-white/10 pl-8 py-2">
                We provide the structural backbone for sectors where failure is not an option. From deep-sea ports to high-altitude mining.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Horizontal Slider - Cleaner */}
        <div className="relative -mx-6 md:-mx-12">
          <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className="relative h-[450px] md:h-[600px] min-w-[320px] md:min-w-[500px] flex-shrink-0 overflow-hidden group border border-white/5 bg-surface"
              >
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
                
                <div className="absolute inset-0 p-12 flex flex-col justify-between z-20">
                  <span className="tech-label text-[10px] text-accent font-bold">NODE::{industry.code}</span>

                  <div className="space-y-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="tech-label text-[9px] text-white/40 tracking-widest block">{industry.count}</span>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight italic text-white group-hover:text-accent transition-colors">
                      {industry.title}
                    </h3>
                  </div>
                </div>

                {/* Minimal Accent */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-accent/0 group-hover:bg-accent/40 transition-all duration-700" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
