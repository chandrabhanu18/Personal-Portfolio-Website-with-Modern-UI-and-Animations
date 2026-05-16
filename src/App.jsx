import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Statistics = lazy(() => import('./components/Statistics'));
const Timeline = lazy(() => import('./components/Timeline'));
const Testimonials = lazy(() => import('./components/Testimonials'));
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const shouldReduceMotion = useReducedMotion();

  // Track cursor for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-gradient-to-b from-primary via-secondary to-primary text-slate-100 min-h-screen overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {!shouldReduceMotion && (
          <>
            <motion.div
              className="absolute w-96 h-96 bg-accent/5 rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              style={{ top: '10%', left: '10%' }}
            />
            <motion.div
              className="absolute w-96 h-96 bg-vibrant-pink/5 rounded-full blur-3xl"
              animate={{
                x: [0, -50, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 12, repeat: Infinity }}
              style={{ bottom: '10%', right: '10%' }}
            />
            <motion.div
              className="absolute w-72 h-72 bg-vibrant-purple/5 rounded-full blur-3xl"
              animate={{
                x: [0, 30, 0],
                y: [0, -50, 0],
              }}
              transition={{ duration: 15, repeat: Infinity }}
              style={{ top: '50%', right: '20%' }}
            />
          </>
        )}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Suspense
          fallback={
            <div className="py-20">
              <div className="max-w-6xl mx-auto text-center text-slate-400">Loading content…</div>
            </div>
          }
        >
          <About />
          <Skills />
          <Statistics />
          <Projects />
          <Timeline />
          <Testimonials />
        </Suspense>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
