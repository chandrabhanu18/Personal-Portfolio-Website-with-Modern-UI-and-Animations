import React from 'react';

export default function IconButton({ children, className = '', ...props }) {
  return (
    <button {...props} className={`inline-flex items-center justify-center p-2 rounded-md ${className}`}>
      {children}
    </button>
  );
}
