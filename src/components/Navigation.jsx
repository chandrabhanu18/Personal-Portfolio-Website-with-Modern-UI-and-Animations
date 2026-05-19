import React, { useState } from 'react';
import { siteMeta } from '../data/siteData';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = React.useRef(null);
  const firstLinkRef = React.useRef(null);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed w-full bg-primary/80 backdrop-blur-xl z-50 border-b border-accent/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl">💻</div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-accent to-vibrant-purple bg-clip-text text-transparent">
                {siteMeta.name}
              </h1>
              <p className="text-xs text-slate-400">{siteMeta.title}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative px-4 py-2 text-slate-300 hover:text-accent transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact" className="px-6 py-2 glass-effect border border-accent/50 rounded-lg text-accent hover:shadow-lg hover:shadow-accent/30 transition-all text-sm font-semibold">Let's Talk</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex flex-col space-y-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className="w-6 h-0.5 bg-accent transition-transform origin-center"
              style={{ transform: isOpen ? 'rotate(45deg) translateY(10px)' : 'none' }}
            />
            <div
              className="w-6 h-0.5 bg-accent"
              style={{ opacity: isOpen ? 0 : 1 }}
            />
            <div
              className="w-6 h-0.5 bg-accent transition-transform origin-center"
              style={{ transform: isOpen ? 'rotate(-45deg) translateY(-10px)' : 'none' }}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden glass-effect border-t border-accent/20 transition-[max-height,opacity] duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="p-4 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block text-slate-300 hover:text-accent py-2 px-4 rounded transition-colors duration-300"
                onClick={() => setIsOpen(false)}
                ref={index === 0 ? firstLinkRef : null}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block text-accent py-2 px-4 rounded border border-accent/50 text-center mt-4 hover:bg-accent/10"
              onClick={() => setIsOpen(false)}
            >
              Let's Connect
            </a>
          </div>
        </div>

        {/* Focus management for mobile menu */}
        {isOpen && (
          <FocusTrap
            onDeactivate={() => {
              setIsOpen(false);
              menuButtonRef.current?.focus();
            }}
            initialFocusRef={firstLinkRef}
          />
        )}
      </div>
    </nav>
  );
}

// Minimal focus trap component (no external dependencies)
function FocusTrap({ onDeactivate, initialFocusRef }) {
  React.useEffect(() => {
    const prev = document.activeElement;
    if (initialFocusRef && initialFocusRef.current) initialFocusRef.current.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') {
        onDeactivate && onDeactivate();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      if (prev && prev.focus) prev.focus();
    };
  }, [onDeactivate, initialFocusRef]);
  return null;
}
