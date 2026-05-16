import React, { useState, useEffect } from 'react';
import ProgressBar from './ui/ProgressBar';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: '🎨',
      color: 'from-accent to-vibrant-purple',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'TypeScript', level: 92, icon: '📘' },
        { name: 'Tailwind CSS', level: 95, icon: '💨' },
        { name: 'Framer Motion', level: 90, icon: '✨' },
      ],
    },
    {
      category: 'Backend',
      icon: '⚙️',
      color: 'from-vibrant-purple to-vibrant-pink',
      skills: [
        { name: 'Node.js', level: 88, icon: '🟢' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'PostgreSQL', level: 87, icon: '🗄️' },
        { name: 'MongoDB', level: 90, icon: '🍃' },
      ],
    },
    {
      category: 'DevOps & Tools',
      icon: '🔧',
      color: 'from-vibrant-pink to-vibrant-orange',
      skills: [
        { name: 'Git & GitHub', level: 95, icon: '🔀' },
        { name: 'Docker', level: 82, icon: '🐳' },
        { name: 'CI/CD Pipeline', level: 85, icon: '⚡' },
        { name: 'AWS & Cloud', level: 80, icon: '☁️' },
      ],
    },
  ];

  const [FM, setFM] = useState(null);
  useEffect(() => {
    let mounted = true;
    import('framer-motion').then((mod) => mounted && setFM(mod)).catch(() => {});
    return () => (mounted = false);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        {FM ? (
          <FM.motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: '-100px' }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">A comprehensive set of technical skills developed through years of practice and real-world projects</p>
          </FM.motion.div>
        ) : (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">A comprehensive set of technical skills developed through years of practice and real-world projects</p>
          </div>
        )}

        {/* Skills Grid */}
        {FM ? (
          <FM.motion.div className="grid md:grid-cols-3 gap-8 mb-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
            {skillCategories.map((category) => (
              <FM.motion.div key={category.category} variants={itemVariants} className="group">
                <div className="glass-effect-strong p-8 rounded-2xl h-full hover-glow hover-lift transition-all">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="text-4xl">{category.icon}</div>
                    <div>
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>{category.category}</h3>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, index) => (
                      <FM.motion.div key={skill.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-slate-300 font-medium flex items-center gap-2"><span className="text-xl">{skill.icon}</span>{skill.name}</span>
                          <FM.motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: index * 0.15 }} viewport={{ once: true }} className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>{skill.level}%</FM.motion.span>
                        </div>
                        <div><ProgressBar level={skill.level} colorClass={category.color} /></div>
                      </FM.motion.div>
                    ))}
                  </div>

                  <FM.motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} className={`h-1 bg-gradient-to-r ${category.color} mt-6 rounded-full origin-left`} />
                </div>
              </FM.motion.div>
            ))}
          </FM.motion.div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category) => (
              <div key={category.category} className="group">
                <div className="glass-effect-strong p-8 rounded-2xl h-full hover-glow hover-lift transition-all">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="text-4xl">{category.icon}</div>
                    <div>
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>{category.category}</h3>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-slate-300 font-medium flex items-center gap-2"><span className="text-xl">{skill.icon}</span>{skill.name}</span>
                          <span className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>{skill.level}%</span>
                        </div>
                        <div><ProgressBar level={skill.level} colorClass={category.color} /></div>
                      </div>
                    ))}
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${category.color} mt-6 rounded-full origin-left`} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Additional Technologies Section */}
        {FM ? (
          <FM.motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true, margin: '-100px' }} className="glass-effect-strong p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Other Technologies & Tools</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {['HTML5', 'CSS3', 'REST APIs', 'GraphQL', 'Redux', 'Jest Testing', 'Webpack', 'Sass/SCSS', 'Firebase', 'Linux', 'Vercel', 'Netlify', 'Figma', 'Agile/Scrum', 'SEO'].map((tech, index) => (
                <FM.motion.button key={tech} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.1, y: -5 }} transition={{ delay: index * 0.05 }} viewport={{ once: true }} className="px-4 py-2 glass-effect border border-accent/50 rounded-full text-slate-300 hover:text-accent hover:border-accent hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 text-sm font-medium">{tech}</FM.motion.button>
              ))}
            </div>
          </FM.motion.div>
        ) : (
          <div className="glass-effect-strong p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Other Technologies & Tools</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {['HTML5', 'CSS3', 'REST APIs', 'GraphQL', 'Redux', 'Jest Testing', 'Webpack', 'Sass/SCSS', 'Firebase', 'Linux', 'Vercel', 'Netlify', 'Figma', 'Agile/Scrum', 'SEO'].map((tech) => (
                <button key={tech} className="px-4 py-2 glass-effect border border-accent/50 rounded-full text-slate-300 hover:text-accent hover:border-accent hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 text-sm font-medium">{tech}</button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
