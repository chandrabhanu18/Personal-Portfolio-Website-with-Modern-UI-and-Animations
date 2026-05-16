import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { projects } from '../data/siteData';
import Button from './ui/Button';
import ProjectCard from './ui/ProjectCard';

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

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
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants} whileHover={shouldReduceMotion ? {} : { y: -8 }} transition={{ duration: 0.3 }} className="group">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button as="a" href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-blue-400 text-blue-400 hover:bg-blue-500/10">
            View All Projects on GitHub →
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
