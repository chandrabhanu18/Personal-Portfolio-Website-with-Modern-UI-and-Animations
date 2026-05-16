import React from 'react';

export default function Button({ children, variant = 'primary', className = '', as: Component = 'button', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all focus:outline-none focus-visible:ring-2';
  const variants = {
    primary: 'px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white',
    ghost: 'px-4 py-2 text-slate-200 hover:text-accent',
  };

  return (
    <Component className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </Component>
  );
}
