import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteMeta } from '../data/siteData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactLinks = [
    {
      name: 'Email',
      href: `mailto:${siteMeta.email}`,
      icon: '📧',
      label: siteMeta.email,
    },
    {
      name: 'GitHub',
      href: siteMeta.github,
      icon: '🐙',
      label: siteMeta.github.replace('https://', ''),
    },
    {
      name: 'LinkedIn',
      href: siteMeta.linkedin,
      icon: '💼',
      label: siteMeta.linkedin.replace('https://', ''),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: '🐦',
      label: '@yourhandle',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-slate-400 mb-12 max-w-2xl mx-auto"
        >
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-100 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-100 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-blue-500 text-slate-100 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-green-500 text-white font-semibold rounded-lg transition-all duration-300"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-8">Connect With Me</h3>
            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="block p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{link.icon}</span>
                    <div>
                      <p className="font-semibold text-slate-100">{link.name}</p>
                      <p className="text-slate-400 group-hover:text-blue-400 transition-colors">{link.label}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg"
            >
              <p className="text-slate-300">
                💡 <span className="font-semibold">Quick Response:</span> I typically respond to emails within 24 hours.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
