import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="text-2xl">💻</div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-accent to-vibrant-purple bg-clip-text text-transparent">
                John Dev
              </h1>
              <p className="text-xs text-slate-400">Full Stack Developer</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative px-4 py-2 text-slate-300 hover:text-accent transition-colors duration-300 group"
              >
                {item.label}
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-vibrant-purple"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 glass-effect border border-accent/50 rounded-lg text-accent hover:shadow-lg hover:shadow-accent/30 transition-all text-sm font-semibold"
          >
            Let's Talk
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            ref={menuButtonRef}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex flex-col space-y-1.5"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-6 h-0.5 bg-accent transition-transform origin-center"
              animate={isOpen ? { rotate: 45, translateY: 10 } : { rotate: 0 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-accent"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-accent transition-transform origin-center"
              animate={isOpen ? { rotate: -45, translateY: -10 } : { rotate: 0 }}
            />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden glass-effect border-t border-accent/20"
        >
          <div className="p-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
                className="block text-slate-300 hover:text-accent py-2 px-4 rounded transition-colors duration-300"
                onClick={() => setIsOpen(false)}
                ref={index === 0 ? firstLinkRef : null}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: -20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.4 }}
              className="block text-accent py-2 px-4 rounded border border-accent/50 text-center mt-4 hover:bg-accent/10"
              onClick={() => setIsOpen(false)}
            >
              Let's Connect
            </motion.a>
          </div>
        </motion.div>

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
  }, []);
  return null;
}
