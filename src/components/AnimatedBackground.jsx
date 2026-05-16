import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function AnimatedBackground() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <>
        <motion.div
          className="absolute w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-vibrant-pink/5 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          style={{ bottom: '10%', right: '10%' }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-vibrant-purple/5 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ top: '50%', right: '20%' }}
        />
      </>
    </div>
  );
}
