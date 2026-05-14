import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'JavaScript', level: 90, icon: '📜' },
        { name: 'Tailwind CSS', level: 88, icon: '🎨' },
        { name: 'Vue.js', level: 80, icon: '💚' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Python', level: 88, icon: '🐍' },
        { name: 'PostgreSQL', level: 82, icon: '🗄️' },
        { name: 'MongoDB', level: 85, icon: '🍃' },
      ],
    },
    {
      category: 'Tools & DevOps',
      skills: [
        { name: 'Git', level: 92, icon: '🔀' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'CI/CD', level: 80, icon: '⚙️' },
        { name: 'AWS', level: 78, icon: '☁️' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          data-aos="fade-up"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={categoryIndex * 100}
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-400">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium flex items-center gap-2">
                        <span className="text-2xl">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-12 border-t border-slate-700"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Other Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {['HTML5', 'CSS3', 'REST APIs', 'GraphQL', 'Redux', 'Testing', 'Webpack', 'Sass', 'Firebase', 'Linux'].map(
              (tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
