import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Button from './ui/Button';

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden min-h-screen flex items-center">
      {/* Advanced Parallax Background Elements */}
      {!shouldReduceMotion && (
        <>
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
            style={{ y: offset * 0.5 }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-vibrant-pink/10 rounded-full blur-3xl"
            style={{ y: -offset * 0.3 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-vibrant-purple/5 rounded-full blur-3xl"
            style={{ y: offset * 0.2, x: -150 }}
          />
        </>
      )}

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center">
          {/* Main heading with gradient animation */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.8 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text animate-gradient">
              Hi, I'm John Developer
            </h1>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block text-2xl text-accent"
            >
              ✨
            </motion.div>
          </motion.div>

          {/* Subtitle with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl bg-gradient-to-r from-accent-light via-vibrant-green to-accent bg-clip-text text-transparent mb-6 font-semibold">
              Full Stack Developer | Creative Problem Solver | Tech Innovator
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              I craft beautiful, responsive web experiences with cutting-edge technologies. 
              Passionate about creating pixel-perfect designs and scalable solutions. 
              Let's build something extraordinary together.
            </p>
          </motion.div>

          {/* CTA Buttons with enhanced design */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button as="a" href="#projects" className="bg-gradient-to-r from-accent to-vibrant-purple text-white shadow-lg shadow-accent/50 hover:shadow-xl">
              View My Work
            </Button>
            <Button as="a" href="#contact" variant="secondary" className="glass-effect text-accent border border-accent/50">
              Let's Connect
            </Button>
          </motion.div>

          {/* Scroll Indicator with enhanced animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-accent"
            >
              <svg 
                className="w-6 h-6 mx-auto filter drop-shadow-lg" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </motion.div>
            <p className="text-sm text-slate-400 mt-2">Scroll to explore</p>
          </motion.div>

          {/* Floating tech badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {['React', 'Node.js', 'TypeScript', 'Tailwind', 'MongoDB'].map((tech, index) => (
              <motion.span
                key={index}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, delay: index * 0.2, repeat: Infinity }}
                className="px-4 py-2 glass-effect text-sm text-accent border border-accent/30 rounded-full"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
