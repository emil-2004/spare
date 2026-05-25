'use client';

import { Reveal } from '@/components/ui/Reveal';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Target, Zap, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Vector Analysis',
    description: 'Technical assessment of fleet requirements and matching mission-critical components to specific load cycles.',
    icon: Target
  },
  {
    number: '02',
    title: 'System Identification',
    description: 'Digital pinpointing of industrial parts using OEM-mesh databases and high-precision technical cataloging.',
    icon: Zap
  },
  {
    number: '03',
    title: 'Tactical Procurement',
    description: 'Immediate fulfillment sequence initiated across global logistics nodes for minimum operational latency.',
    icon: Shield
  },
  {
    number: '04',
    title: 'Deployment Support',
    description: 'Real-time telemetry tracking and expert technical guidance for seamless system integration and uptime.',
    icon: CheckCircle2
  }
];

export default function Workflow() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const width = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="mb-20 space-y-6">
          <Reveal preset="fade-right">
            <div className="flex items-center space-x-4">
              <span className="tech-label text-accent">Execution Protocol</span>
              <div className="h-px w-12 bg-accent/30" />
              <span className="tech-label">Workflow</span>
            </div>
          </Reveal>
          <Reveal delay={0.2} preset="blur-in">
            <h2 className="section-title">
              Operational <br /> Workflow
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          {/* Timeline Bar - Cleaned Up */}
          <div className="absolute left-0 top-0 w-full h-px bg-white/5 hidden lg:block">
            <motion.div 
              style={{ width }} 
              className="h-full bg-accent" 
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-0 lg:pt-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative group border-l lg:border-l-0 lg:border-t border-white/5 pl-8 lg:pl-0 pt-8 lg:pt-0"
              >
                {/* Status Indicator */}
                <div className="absolute -top-[5px] left-0 hidden lg:flex flex-col items-center">
                  <div className="w-2.5 h-2.5 bg-background border border-white/20 rounded-full group-hover:border-accent group-hover:bg-accent transition-all duration-500" />
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-end justify-between">
                    <span className="text-6xl font-black text-white/[0.03] italic leading-none group-hover:text-accent/[0.05] transition-colors">
                      {step.number}
                    </span>
                    <step.icon className="text-white/10 group-hover:text-accent transition-colors duration-500" size={28} strokeWidth={1} />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-black uppercase tracking-tight italic text-white group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
