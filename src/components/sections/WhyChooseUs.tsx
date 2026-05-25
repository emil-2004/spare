'use client';

import { Reveal } from '@/components/ui/Reveal';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Clock, Globe, Handshake } from 'lucide-react';

const features = [
  {
    title: 'OEM Reliability',
    description: 'Every component undergoes rigorous stress-testing to meet or exceed original equipment manufacturer specifications.',
    icon: ShieldCheck,
    tag: 'STRESS_TESTED'
  },
  {
    title: 'Logistics Velocity',
    description: 'AI-optimized supply chain nodes ensure rapid fulfillment and minimal operational downtime for critical fleets.',
    icon: Clock,
    tag: 'HIGH_PRIORITY'
  },
  {
    title: 'Industrial Scale',
    description: 'Specialized inventory management for large-scale mining, construction, and trans-continental logistics.',
    icon: Truck,
    tag: 'HEAVY_DUTY'
  },
  {
    title: 'Global Mesh',
    description: 'Strategically positioned distribution hubs forming a resilient network across all major industrial zones.',
    icon: Globe,
    tag: 'MESH_NETWORK'
  },
  {
    title: 'Strategic Sync',
    description: 'Direct manufacturer partnerships providing exclusive access to next-gen vehicle components.',
    icon: Handshake,
    tag: 'PARTNER_SYNC'
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="lg:col-span-8 space-y-6">
            <Reveal preset="fade-right">
              <div className="flex items-center space-x-4">
                <span className="tech-label text-accent">Strategic Advantage</span>
                <div className="h-px w-12 bg-accent/30" />
                <span className="tech-label">Value Prop</span>
              </div>
            </Reveal>
            <Reveal delay={0.2} preset="blur-in">
              <h2 className="section-title">
                Why Industry <br /> Leaders <span className="text-accent">Sync</span> With Us
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4">
            <Reveal delay={0.4} preset="fade-left">
              <p className="text-muted text-lg leading-relaxed border-l border-white/10 pl-8 py-2">
                We integrate high-performance engineering with tactical logistics to provide the world's most resilient parts ecosystem.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-background p-12 space-y-10 group hover:bg-white/[0.02] transition-all duration-700 relative"
            >
              <div className="flex justify-between items-start">
                <div className="w-14 h-14 bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-500">
                  <feature.icon className="text-accent group-hover:text-black transition-colors" size={28} strokeWidth={1} />
                </div>
                <span className="tech-label text-[8px] opacity-30">ADV_0{index + 1}</span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="tech-label text-[9px] text-accent font-bold">{feature.tag}</span>
                  <h3 className="text-2xl font-black uppercase tracking-tight italic text-white group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-40 transition-opacity">
                <div className="absolute bottom-4 right-4 w-4 h-px bg-accent" />
                <div className="absolute bottom-4 right-4 w-px h-4 bg-accent" />
              </div>
            </div>
          ))}
          
          <div className="hidden lg:flex bg-background p-12 items-center justify-center relative overflow-hidden">
            <div className="tech-grid w-full h-full absolute inset-0 opacity-5" />
            <div className="relative z-10 text-center space-y-4">
              <p className="tech-label text-[8px]">Operational Integrity</p>
              <div className="w-16 h-16 rounded-full border border-dashed border-white/10 animate-[spin_20s_linear_infinite] flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border border-accent/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
