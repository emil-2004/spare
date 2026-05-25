'use client';

import { Reveal } from '@/components/ui/Reveal';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { label: 'Operational History', value: '25Y', sub: 'EST. 2001' },
  { label: 'Active Inventory', value: '12K', sub: 'OEM CERTIFIED' },
  { label: 'Global Partners', value: '850', sub: 'TIER 1 NODES' },
  { label: 'Sectors Supported', value: '15', sub: 'HEAVY DUTY' },
];

export default function CompanyOverview() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yStats = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" ref={containerRef} className="py-32 bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <Reveal preset="fade-right">
                <div className="flex items-center space-x-4">
                  <span className="tech-label text-accent">Our Legacy</span>
                  <div className="h-px w-12 bg-accent/30" />
                  <span className="tech-label">Est. 2001</span>
                </div>
              </Reveal>
              
              <Reveal delay={0.2} preset="blur-in">
                <h2 className="section-title">
                  Engineering <br />
                  Industrial <br />
                  <span className="text-accent">Excellence</span>
                </h2>
              </Reveal>
            </div>

            <div className="space-y-8 border-l border-white/10 pl-8">
              <Reveal delay={0.4}>
                <p className="text-muted text-xl md:text-2xl leading-relaxed max-w-2xl">
                  TRUCK Systems operates at the intersection of precision engineering and heavy duty logistics. 
                  We architect the structural reliability of global commerce through superior component design.
                </p>
              </Reveal>
              
              <Reveal delay={0.6}>
                <div className="flex flex-wrap items-center gap-10">
                  <div className="flex flex-col">
                    <span className="tech-label text-[10px] mb-1">Standard</span>
                    <span className="text-white font-bold tracking-wider text-sm uppercase">OEM Certified</span>
                  </div>
                  <div className="h-8 w-px bg-white/10 hidden sm:block" />
                  <div className="flex flex-col">
                    <span className="tech-label text-[10px] mb-1">Quality</span>
                    <span className="text-white font-bold tracking-wider text-sm uppercase">Tier 1 Logistics</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Stats Column - Clean & Structured */}
          <motion.div 
            style={{ y: yStats }}
            className="lg:col-span-5 grid grid-cols-2 gap-px bg-white/5 border border-white/5"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-background p-10 space-y-4 hover:bg-white/[0.02] transition-colors duration-500 group relative"
              >
                <div className="space-y-1">
                  <p className="text-5xl md:text-6xl font-black text-white italic tracking-tighter group-hover:text-accent transition-colors duration-500">
                    {stat.value}
                  </p>
                  <p className="tech-label text-accent text-[10px]">{stat.label}</p>
                </div>
                <p className="tech-label text-[8px] opacity-30">{stat.sub}</p>
                
                {/* Subtle Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
