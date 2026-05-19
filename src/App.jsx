import { Suspense, lazy, useEffect, useState } from 'react';
import Navigation from './components/Navigation';
const Hero = lazy(() => import('./components/Hero'));
const LazyAnimatedBackground = lazy(() => import('./components/AnimatedBackground'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Statistics = lazy(() => import('./components/Statistics'));
const Timeline = lazy(() => import('./components/Timeline'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
import './App.css';

function App() {
  const [animateReady, setAnimateReady] = useState(false);

  useEffect(() => {
    // Defer mounting the animated background until idle to reduce initial work
    if (typeof window === 'undefined') return;
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(() => setAnimateReady(true), { timeout: 1500 });
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(() => setAnimateReady(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-gradient-to-b from-primary via-secondary to-primary text-slate-100 min-h-screen overflow-hidden">
      {/* Skip link for accessibility */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-blue-600 text-white px-3 py-2 rounded">Skip to main content</a>
      {/* Animated background elements (lazy, mounted after idle) */}
      {animateReady && (
        <Suspense fallback={null}>
          <LazyAnimatedBackground />
        </Suspense>
      )}

      {/* Main content */}
      <div className="relative z-10">
        <Navigation />
        <main id="main">
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
        <Suspense fallback={null}>
          <Contact />
          <Footer />
        </Suspense>
        </main>
      </div>
    </div>
  );
}

export default App;
