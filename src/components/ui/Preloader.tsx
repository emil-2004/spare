'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center p-10 overflow-hidden"
        >
          <div className="max-w-xs w-full space-y-10 relative z-10">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-accent flex items-center justify-center font-black text-xl text-black skew-x-[-12deg]">
                  T
                </div>
                <div className="space-y-1">
                  <span className="tech-label text-white text-[10px] block">System Initialization</span>
                  <span className="tech-label text-accent/60 text-[7px]">v4.0.2 // SECURE_BOOT</span>
                </div>
              </motion.div>
              
              <div className="space-y-3">
                <div className="h-px w-full bg-white/5 relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-accent origin-left"
                    style={{ scaleX: progress / 100 }}
                  />
                </div>
                <div className="flex justify-between items-center tech-label text-[8px]">
                  <span>LOADING_CORE_ASSETS</span>
                  <span className="text-accent font-bold">{progress}%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 tech-grid opacity-[0.03] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
