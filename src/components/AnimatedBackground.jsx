import { useEffect, useRef, useState } from 'react';

export default function AnimatedBackground() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const [started, setStarted] = useState(false);

  // Defer starting animations until the main thread is idle (or timeout), and respect reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduce) return;

    let handle = null;
    const start = () => setStarted(true);

    if ('requestIdleCallback' in window) {
      handle = window.requestIdleCallback(start, { timeout: 1500 });
    } else {
      handle = window.setTimeout(start, 1000);
    }

    return () => {
      if ('cancelIdleCallback' in window && handle) window.cancelIdleCallback(handle);
      else if (handle) window.clearTimeout(handle);
    };
  }, []);

  useEffect(() => {
    if (!started) return;
    const a1 = ref1.current?.animate(
      [
        { transform: 'translate(0px, 0px)' },
        { transform: 'translate(50px, 30px)' },
        { transform: 'translate(0px, 0px)' },
      ],
      { duration: 10000, iterations: Infinity, easing: 'ease-in-out' }
    );

    const a2 = ref2.current?.animate(
      [
        { transform: 'translate(0px, 0px)' },
        { transform: 'translate(-50px, -30px)' },
        { transform: 'translate(0px, 0px)' },
      ],
      { duration: 12000, iterations: Infinity, easing: 'ease-in-out' }
    );

    const a3 = ref3.current?.animate(
      [
        { transform: 'translate(0px, 0px)' },
        { transform: 'translate(30px, -50px)' },
        { transform: 'translate(0px, 0px)' },
      ],
      { duration: 15000, iterations: Infinity, easing: 'ease-in-out' }
    );

    return () => {
      a1?.cancel();
      a2?.cancel();
      a3?.cancel();
    };
  }, [started]);

  // Respect reduced motion via early return in effect; render static structure otherwise
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div ref={ref1} className="absolute w-96 h-96 bg-accent/5 rounded-full blur-3xl" style={{ top: '10%', left: '10%' }} />
      <div ref={ref2} className="absolute w-96 h-96 bg-vibrant-pink/5 rounded-full blur-3xl" style={{ bottom: '10%', right: '10%' }} />
      <div ref={ref3} className="absolute w-72 h-72 bg-vibrant-purple/5 rounded-full blur-3xl" style={{ top: '50%', right: '20%' }} />
    </div>
  );
}
