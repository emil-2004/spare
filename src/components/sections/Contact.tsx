'use client';

import { Reveal } from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { Mail, Phone, MapPin, MessageSquare, ChevronDown, Terminal, Radio } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Column - Clean Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <Reveal preset="fade-right">
                <div className="flex items-center space-x-4">
                  <span className="tech-label text-accent">Communications</span>
                  <div className="h-px w-12 bg-accent/30" />
                  <span className="tech-label">Node 08</span>
                </div>
              </Reveal>
              <Reveal delay={0.2} preset="blur-in">
                <h2 className="section-title">
                  Initiate <br /> <span className="text-accent">Strategic</span> <br /> Contact
                </h2>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="text-muted text-lg leading-relaxed max-w-md border-l border-white/10 pl-8 py-2">
                  Establish direct synchronization with our technical specialists for mission-critical procurement and systems architecture.
                </p>
              </Reveal>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, label: 'Tactical Support', value: '+1 (555) 000-TRUCK' },
                { icon: Mail, label: 'Data Inquiry', value: 'SYSTEM@TRUCK.PARTS' },
                { icon: MapPin, label: 'Operational Hub', value: 'Logistics Dist, Node 500' }
              ].map((item, i) => (
                <div 
                  key={item.label}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 border border-white/5 bg-white/5 flex items-center justify-center group-hover:border-accent transition-all duration-500">
                    <item.icon size={22} className="text-accent" strokeWidth={1} />
                  </div>
                  <div className="space-y-1">
                    <span className="tech-label text-[8px] opacity-40">{item.label}</span>
                    <p className="text-white font-bold tracking-widest text-sm group-hover:text-accent transition-colors uppercase italic">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Simplified Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-12 md:p-16 border border-white/5">
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="tech-label text-[9px] text-muted">Operator Identity</label>
                    <input 
                      type="text" 
                      placeholder="FULL NAME"
                      className="w-full bg-transparent border-b border-white/10 py-3 text-lg focus:outline-none focus:border-accent transition-all text-white placeholder:text-white/10 font-bold italic"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="tech-label text-[9px] text-muted">Comms Vector</label>
                    <input 
                      type="email" 
                      placeholder="EMAIL ADDRESS"
                      className="w-full bg-transparent border-b border-white/10 py-3 text-lg focus:outline-none focus:border-accent transition-all text-white placeholder:text-white/10 font-bold italic"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="tech-label text-[9px] text-muted">Payload Type</label>
                  <select className="w-full bg-transparent border-b border-white/10 py-3 text-lg focus:outline-none focus:border-accent transition-all text-white cursor-pointer font-bold italic uppercase appearance-none">
                    <option className="bg-background">Strategic Procurement</option>
                    <option className="bg-background">Technical Architecture</option>
                    <option className="bg-background">Supply Chain Sync</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="tech-label text-[9px] text-muted">Mission Objectives</label>
                  <textarea 
                    rows={3}
                    placeholder="DEFINE REQUIREMENTS..."
                    className="w-full bg-transparent border-b border-white/10 py-3 text-lg focus:outline-none focus:border-accent transition-all text-white resize-none placeholder:text-white/10 font-bold italic"
                  ></textarea>
                </div>

                <Button variant="primary" className="w-full py-6 text-xs tracking-[0.4em] font-black h-16">
                  TRANSMIT SECURE INQUIRY
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
