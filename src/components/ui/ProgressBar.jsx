import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ProgressBar({ level = 50, colorClass = 'from-accent to-vibrant-purple' }) {
  const shouldReduce = useReducedMotion();
  return (
    <div className="w-full bg-slate-800/50 rounded-full h-2.5 overflow-hidden border border-slate-700/50">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: shouldReduce ? 0.1 : 1.2, ease: 'easeOut' }}
        className={`h-full bg-gradient-to-r ${colorClass} shadow-lg`}
        style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
      />
    </div>
  );
}
