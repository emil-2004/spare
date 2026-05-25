'use client';

import { Reveal } from '@/components/ui/Reveal';
import { motion } from 'framer-motion';
import { Quote, ShieldCheck, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "TRUCK Industrial Systems has been our primary component architect for over a decade. Their reliability in the deep-core mining sector is unmatched.",
    author: "Robert Chen",
    position: "Fleet Director, Global Mining Corp",
    avatar: "https://i.pravatar.cc/150?u=robert",
    node: "NODE_01_WEST"
  },
  {
    quote: "When operational latency costs thousands per minute, we trust TRUCK for rapid fulfillment. They understand the true physics of modern logistics.",
    author: "Sarah Jenkins",
    position: "Operations Lead, FastTrack Logistics",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    node: "NODE_04_ASIA"
  },
  {
    quote: "The quality of their heavy-duty kinetic systems has significantly reduced our maintenance cycles and increased overall asset lifespan.",
    author: "Marcus Thorne",
    position: "Chief Engineer, BuildStrong Infra",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    node: "NODE_09_EURO"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-surface relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-20 space-y-6">
          <Reveal width="100%" preset="fade-down">
            <span className="tech-label text-accent">Strategic Validation</span>
          </Reveal>
          <Reveal width="100%" delay={0.2} preset="blur-in">
            <h2 className="section-title">
              Partner <span className="text-accent">Feedback</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-background p-12 flex flex-col group hover:bg-white/[0.02] transition-all duration-700 relative h-full"
            >
              <div className="flex justify-between items-start mb-10">
                <Quote className="text-accent/10 group-hover:text-accent/30 transition-colors" size={48} strokeWidth={1} />
                <div className="flex flex-col items-end">
                  <span className="tech-label text-[8px] text-accent font-bold">VERIFIED_PARTNER</span>
                </div>
              </div>
              
              <p className="text-white text-lg md:text-xl leading-relaxed italic mb-12 font-medium">
                "{testimonial.quote}"
              </p>
              
              <div className="mt-auto pt-10 border-t border-white/5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-white/10 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover" 
                      crossOrigin="anonymous"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-1">
                      {testimonial.author}
                    </h4>
                    <p className="text-muted text-[8px] font-bold uppercase tracking-[0.2em]">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
