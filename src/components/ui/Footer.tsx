'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, Terminal, Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-32 pb-16 relative overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Brand & System Status */}
        <div className="lg:col-span-4 space-y-8">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-accent flex items-center justify-center font-black text-black skew-x-[-12deg] transition-transform duration-500">
              T
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic text-white">Truck</span>
          </Link>
          
          <p className="text-muted text-base leading-relaxed max-w-sm">
            Architecting the future of heavy vehicle reliability. Providing mission-critical industrial components for global scale operations.
          </p>

          <div className="flex items-center gap-4 p-5 border border-white/5 bg-white/5 w-fit">
            <Cpu size={18} className="text-accent" />
            <div className="space-y-1">
              <p className="tech-label text-[8px]">System Status</p>
              <p className="tech-label text-white font-bold tracking-widest">STABLE_V4.0.2</p>
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-10">
          <div>
            <h4 className="tech-label text-white font-bold mb-8 flex items-center gap-2">
              Index
            </h4>
            <ul className="space-y-4">
              {['Home', 'Overview', 'Catalog', 'Industries', 'Contact'].map(link => (
                <li key={link}>
                  <Link href="#" className="text-muted hover:text-accent text-[10px] transition-colors uppercase tracking-widest font-bold block">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="tech-label text-white font-bold mb-8 flex items-center gap-2">
              Core Units
            </h4>
            <ul className="space-y-4">
              {['Engines', 'Braking', 'Suspension', 'Filters', 'Torque'].map(item => (
                <li key={item}>
                  <Link href="#" className="text-muted hover:text-accent text-[10px] transition-colors uppercase tracking-widest font-bold block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tactical Intel */}
        <div className="lg:col-span-3 space-y-10">
          <h4 className="tech-label text-white font-bold mb-8">
            Global Nodes
          </h4>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="text-accent shrink-0" size={18} strokeWidth={1} />
              <div className="space-y-1">
                <span className="tech-label text-[8px] opacity-30 block">HQ Node</span>
                <span className="text-muted text-[10px] font-bold uppercase tracking-widest leading-relaxed block">
                  123 Industrial Way, Suite 500, Global Port
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-accent shrink-0" size={18} strokeWidth={1} />
              <div className="space-y-1">
                <span className="tech-label text-[8px] opacity-30 block">Voice Sync</span>
                <span className="text-white font-bold tracking-widest text-xs block italic">
                  +1 (555) 000-TRUCK
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="tech-label text-[8px] text-muted/40 font-bold tracking-widest text-center">
          © 2026 TRUCK INDUSTRIAL SYSTEMS // ALL PROTOCOLS RESERVED.
        </p>
        
        <div className="flex space-x-8">
          <Link href="#" className="tech-label text-[8px] hover:text-white transition-colors">Privacy</Link>
          <Link href="#" className="tech-label text-[8px] hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
