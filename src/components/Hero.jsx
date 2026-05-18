import { useState, useEffect } from 'react';
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

  const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const shouldReduceMotion = prefersReducedMotion();

  return (
    <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden min-h-screen flex items-center">
      {/* Advanced Parallax Background Elements */}
      {!shouldReduceMotion && (
        <>
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" style={{ transform: `translateY(${offset * 0.5}px)` }} />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-vibrant-pink/10 rounded-full blur-3xl" style={{ transform: `translateY(${-offset * 0.3}px)` }} />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-vibrant-purple/5 rounded-full blur-3xl" style={{ transform: `translate(${ -150 }px, ${offset * 0.2}px)` }} />
        </>
      )}

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center">
          {/* Main heading with gradient animation */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text animate-gradient">
              Hi, I'm John Developer
            </h1>
            <div className="inline-block text-2xl text-accent">✨</div>
          </div>

          {/* Subtitle with enhanced styling */}
          <div>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-accent-light via-vibrant-green to-accent bg-clip-text text-transparent mb-6 font-semibold">
              Full Stack Developer | Creative Problem Solver | Tech Innovator
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              I craft beautiful, responsive web experiences with cutting-edge technologies. 
              Passionate about creating pixel-perfect designs and scalable solutions. 
              Let's build something extraordinary together.
            </p>
          </div>

          {/* CTA Buttons with enhanced design */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button as="a" href="#projects" className="bg-gradient-to-r from-accent to-vibrant-purple text-white shadow-lg shadow-accent/50 hover:shadow-xl">
              View My Work
            </Button>
            <Button as="a" href="#contact" variant="secondary" className="glass-effect text-accent border border-accent/50">
              Let's Connect
            </Button>
          </div>

          {/* Scroll Indicator with enhanced animation */}
          <div className="mt-16">
            <div className="text-accent">
              <svg 
                className="w-6 h-6 mx-auto filter drop-shadow-lg animate-bounce-slow" 
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
            </div>
            <p className="text-sm text-slate-400 mt-2">Scroll to explore</p>
          </div>

          {/* Floating tech badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {['React', 'Node.js', 'TypeScript', 'Tailwind', 'MongoDB'].map((tech, index) => (
              <span key={index} className="px-4 py-2 glass-effect text-sm text-accent border border-accent/30 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
