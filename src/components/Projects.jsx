import React, { useState, useEffect } from 'react';
import { projects, siteMeta } from '../data/siteData';
import Button from './ui/Button';
import ProjectCard from './ui/ProjectCard';

export default function Projects() {
  const [FM, setFM] = useState(null);
  useEffect(() => {
    let mounted = true;
    import('framer-motion')
      .then((mod) => mounted && setFM(mod))
      .catch(() => {});
    return () => (mounted = false);
  }, []);

  const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const shouldReduceMotion = FM ? FM.useReducedMotion() : prefersReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {FM ? (
          <FM.motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Featured Projects
          </FM.motion.h2>
        ) : (
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>
        )}

        {FM ? (
          <FM.motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <FM.motion.div key={project.id} variants={itemVariants} whileHover={shouldReduceMotion ? {} : { y: -8 }} transition={{ duration: 0.3 }} className="group">
                <ProjectCard project={project} />
              </FM.motion.div>
            ))}
          </FM.motion.div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group"><ProjectCard project={project} /></div>
            ))}
          </div>
        )}

        {/* View More */}
        <div className="text-center mt-12">
          <Button as="a" href={siteMeta.github} target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-blue-400 text-blue-400 hover:bg-blue-500/10">
            View All Projects on GitHub →
          </Button>
        </div>
      </div>
    </section>
  );
}
