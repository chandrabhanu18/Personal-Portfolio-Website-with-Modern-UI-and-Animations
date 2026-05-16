import React from 'react';

export default function ProgressBar({ level = 50, colorClass = 'from-accent to-vibrant-purple' }) {
  const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const transitionStyle = prefersReducedMotion() ? 'width 0.1s ease-out' : 'width 1.2s ease-out';

  return (
    <div className="w-full bg-slate-800/50 rounded-full h-2.5 overflow-hidden border border-slate-700/50">
      <div
        className={`h-full bg-gradient-to-r ${colorClass} shadow-lg`}
        style={{ width: `${level}%`, transition: transitionStyle, boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
      />
    </div>
  );
}
