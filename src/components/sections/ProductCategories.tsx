'use client';

import { Reveal } from '@/components/ui/Reveal';
import { motion } from 'framer-motion';
import { ArrowUpRight, Settings, ShieldAlert, Zap, Filter, Truck, Power } from 'lucide-react';

const categories = [
  {
    title: 'Engine Systems',
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&q=80&w=1200',
    description: 'High-thermal stability components engineered for continuous load cycles.',
    code: 'UNIT_ENG_X'
  },
  {
    title: 'Kinetic Braking',
    icon: ShieldAlert,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200',
    description: 'Advanced friction materials with zero-fade performance under extreme heat.',
    code: 'UNIT_BRK_V'
  },
  {
    title: 'Dynamic Suspension',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1200',
    description: 'Reinforced geometry systems for high-tonnage stability on uneven terrain.',
    code: 'UNIT_SUS_P'
  },
  {
    title: 'Thermal Filtration',
    icon: Filter,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    description: 'Micron-level precision filtering for extended fluid lifecycle.',
    code: 'UNIT_FLT_Z'
  },
  {
    title: 'Torque Transmission',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200',
    description: 'Robust power transfer units optimized for high-torque industrial duty.',
    code: 'UNIT_TRN_M'
  },
  {
    title: 'Neural Electrical',
    icon: Power,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200',
    description: 'Next-gen vehicle architecture and high-voltage power distribution.',
    code: 'UNIT_ELC_Y'
  }
];

export default function ProductCategories() {
  return (
    <section id="categories" className="py-32 bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="space-y-6">
            <Reveal preset="fade-right">
              <div className="flex items-center space-x-4">
                <span className="tech-label text-accent">Core Ecosystem</span>
                <div className="h-px w-12 bg-accent/30" />
                <span className="tech-label">Architecture</span>
              </div>
            </Reveal>
            <Reveal delay={0.2} preset="blur-in">
              <h2 className="section-title">
                Specialized <br /> Systems
              </h2>
            </Reveal>
          </div>
          
          <Reveal delay={0.4} preset="fade-left">
            <p className="text-muted text-lg max-w-md leading-relaxed border-l border-white/10 pl-8 py-2">
              Our components are categorized by functional criticality, ensuring seamless integration into modern heavy vehicle architectures.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group relative h-[450px] bg-background overflow-hidden hover:bg-white/[0.02] transition-colors duration-700"
            >
              {/* Background Image - Clean & Professional */}
              <div className="absolute inset-0 grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-between z-20">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <span className="tech-label text-[10px] text-accent font-bold">NODE::{category.code}</span>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight italic text-white group-hover:text-accent transition-colors duration-500">
                      {category.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full group-hover:bg-accent group-hover:border-accent transition-all duration-500 flex-shrink-0">
                    <ArrowUpRight size={18} className="group-hover:text-black transition-colors" />
                  </div>
                </div>

                <div className="space-y-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <category.icon className="text-white/10 group-hover:text-accent transition-colors duration-500" size={40} strokeWidth={1} />
                  <p className="text-muted text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Minimal Accent */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/0 group-hover:bg-accent/30 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
