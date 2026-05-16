import React, { useState } from 'react';
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get In Touch</h2>

        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
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

              <button
                type="submit"
                disabled={submitted}
                className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-green-500 text-white font-semibold rounded-lg transition-all duration-300"
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center">
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-8">Connect With Me</h3>
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500/50 transition-all duration-300 group"
                >
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
            <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <p className="text-slate-300">
                💡 <span className="font-semibold">Quick Response:</span> I typically respond to emails within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
