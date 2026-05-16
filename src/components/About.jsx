import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-aos="fade-right"
          >
            <div className="relative w-48 h-48 mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-75"></div>
              <div className="relative w-full h-full bg-slate-800 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/avatar.svg" alt="John Developer avatar" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </motion.div>

          {/* Right side - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            data-aos="fade-left"
          >
            <div className="space-y-4">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience building web applications. 
                I specialize in creating responsive, user-friendly interfaces and robust backend systems.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Currently, I'm focusing on learning advanced web animation techniques and exploring the latest 
                in AI integration with web technologies. I love collaborating with teams and bringing creative ideas to life.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                When I'm not coding, you can find me exploring new tech blogs, contributing to open-source projects, 
                or enjoying outdoor activities.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Quick Facts</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>🎓 Computer Science Graduate</li>
                  <li>💼 Currently at Tech Company XYZ</li>
                  <li>🌍 Based in San Francisco, CA</li>
                  <li>🎯 Focused on Full-Stack Development</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
