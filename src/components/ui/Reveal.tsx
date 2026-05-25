'use client';

import { motion, useInView, useAnimation, Variant } from 'framer-motion';
import { useEffect, useRef } from 'react';

type AnimationPreset = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-up' | 'blur-in';

interface Props {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  duration?: number;
  preset?: AnimationPreset;
  staggerChildren?: number;
}

export const Reveal = ({ 
  children, 
  width = 'fit-content', 
  delay = 0.2, 
  duration = 0.8,
  preset = 'fade-up',
  staggerChildren = 0
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const variants: Record<string, Variant> = {
    'fade-up': { opacity: 0, y: 40 },
    'fade-down': { opacity: 0, y: -40 },
    'fade-left': { opacity: 0, x: 40 },
    'fade-right': { opacity: 0, x: -40 },
    'scale-up': { opacity: 0, scale: 0.9 },
    'blur-in': { opacity: 0, filter: 'blur(10px)' },
  };

  return (
    <div ref={ref} style={{ position: 'relative', width }}>
      <motion.div
        variants={{
          hidden: variants[preset],
          visible: { 
            opacity: 1, 
            y: 0, 
            x: 0, 
            scale: 1, 
            filter: 'blur(0px)',
            transition: {
              duration,
              delay,
              ease: [0.16, 1, 0.3, 1],
              staggerChildren
            }
          },
        }}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};
