import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            By The Numbers
          </h2>
          <p className="text-lg text-slate-400">
            Achievements and milestones that define my journey
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-effect-strong p-8 rounded-2xl text-center hover-glow hover-lift h-full transition-all">
                {/* Icon */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="text-5xl mb-4 inline-block"
                >
                  {stat.icon}
                </motion.div>

                {/* Value */}
                <div className="mb-4">
                  <span className="text-5xl font-bold gradient-text-light">
                    {stat.value}
                  </span>
                  <span className="text-2xl text-accent ml-1">{stat.suffix}</span>
                </div>

                {/* Label */}
                <p className="text-slate-300 text-sm font-medium">{stat.label}</p>

                {/* Animated underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="h-0.5 bg-gradient-to-r from-accent via-vibrant-pink to-vibrant-purple mt-4 mx-auto"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-accent via-vibrant-pink to-vibrant-purple mt-16 rounded-full opacity-50"
        />
      </div>
    </section>
  );
}
