import { Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
const Hero = lazy(() => import('./components/Hero'));
const LazyAnimatedBackground = lazy(() => import('./components/AnimatedBackground'));
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
  // (cursor tracking removed — not currently used)

  return (
    <div className="bg-gradient-to-b from-primary via-secondary to-primary text-slate-100 min-h-screen overflow-hidden">
      {/* Animated background elements (lazy) */}
      <Suspense fallback={null}>
        <LazyAnimatedBackground />
      </Suspense>

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
