import { useState, useEffect } from 'react';

export default function Statistics() {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, experience: 0, success: 0 });

  useEffect(() => {
    const intervals = [];
    const targets = { projects: 50, clients: 30, experience: 5, success: 98 };

    Object.keys(targets).forEach((key) => {
      let current = 0;
      const increment = targets[key] / 30;
      const interval = setInterval(() => {
        current += increment;
        if (current >= targets[key]) {
          setCounts((prev) => ({ ...prev, [key]: targets[key] }));
          clearInterval(interval);
        } else {
          setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 50);
      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const stats = [
    { label: 'Projects Completed', value: counts.projects, suffix: '+', icon: '🚀' },
    { label: 'Happy Clients', value: counts.clients, suffix: '+', icon: '😊' },
    { label: 'Years Experience', value: counts.experience, suffix: '+', icon: '⭐' },
    { label: 'Success Rate', value: counts.success, suffix: '%', icon: '✅' },
  ];

  // animation variants removed (not used)

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">By The Numbers</h2>
          <p className="text-lg text-slate-400">Achievements and milestones that define my journey</p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="glass-effect-strong p-8 rounded-2xl text-center hover-glow hover-lift h-full transition-all">
                <div className="text-5xl mb-4 inline-block">{stat.icon}</div>
                <div className="mb-4">
                  <span className="text-5xl font-bold gradient-text-light">{stat.value}</span>
                  <span className="text-2xl text-accent ml-1">{stat.suffix}</span>
                </div>
                <p className="text-slate-300 text-sm font-medium">{stat.label}</p>
                <div className="h-0.5 bg-gradient-to-r from-accent via-vibrant-pink to-vibrant-purple mt-4 mx-auto" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-accent via-vibrant-pink to-vibrant-purple mt-16 rounded-full opacity-50" />
      </div>
    </section>
  );
}
