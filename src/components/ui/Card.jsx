import React from 'react';

export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-slate-800/50 rounded-lg border border-slate-700 p-6 ${className}`}>
      {children}
    </div>
  );
}
