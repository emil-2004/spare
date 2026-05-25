'use client';

import { Reveal } from '@/components/ui/Reveal';
import { motion } from 'framer-motion';
import { ArrowRight, Box, Cpu, Activity } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Axle-7 Tactical",
    category: "Drivetrain",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
    stats: { durability: "99%", load: "40T" }
  },
  {
    id: 2,
    name: "V-Series Hydraulic",
    category: "Braking",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200",
    stats: { durability: "97%", load: "25T" }
  },
  {
    id: 3,
    name: "Core-Engine X",
    category: "Power",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=1200",
    stats: { durability: "100%", load: "60T" }
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <Reveal preset="fade-right">
            <div>
              <span className="tech-label text-accent mb-4 block">Product Catalog</span>
              <h2 className="section-title mb-0">Engineered <br />Components</h2>
            </div>
          </Reveal>
          <Reveal preset="fade-left">
            <p className="text-muted max-w-sm text-lg leading-relaxed">
              Mission-critical spare parts designed for extreme industrial performance and longevity.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <Reveal key={product.id} preset="fade-up" delay={idx * 0.1}>
              <div className="group relative glass-panel overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="tech-label text-accent">{product.category}</span>
                    <span className="tech-label opacity-40">0{product.id}</span>
                  </div>
                  <h3 className="text-2xl font-bold italic uppercase">{product.name}</h3>
                  <div className="pt-4 border-t border-white/5 flex gap-6">
                    <div>
                      <p className="text-[10px] tech-label opacity-40">Durability</p>
                      <p className="text-sm font-bold">{product.stats.durability}</p>
                    </div>
                    <div>
                      <p className="text-[10px] tech-label opacity-40">Load Cap</p>
                      <p className="text-sm font-bold">{product.stats.load}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
