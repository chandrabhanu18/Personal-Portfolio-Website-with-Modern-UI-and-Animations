import React, { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Anderson',
      role: 'CEO at TechFlow',
      image: '👩‍💼',
      text: 'John transformed our vision into an exceptional digital product. His attention to detail and innovative approach was exactly what we needed.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager at StartupXYZ',
      image: '👨‍💻',
      text: 'Working with John was a game-changer. He delivered beyond expectations and continuously went the extra mile.',
      rating: 5,
    },
    {
      name: 'Emma Wilson',
      role: 'Founder of DesignCo',
      image: '👩‍🎨',
      text: 'Exceptional developer with a creative mindset. John bridged the gap between design and development seamlessly.',
      rating: 5,
    },
    {
      name: 'David Kumar',
      role: 'CTO at InnovateTech',
      image: '👨‍🔬',
      text: 'John\'s technical expertise and problem-solving skills are remarkable. A true asset to any development team.',
      rating: 5,
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const [FM, setFM] = useState(null);
  useEffect(() => {
    let mounted = true;
    import('framer-motion').then((mod) => mounted && setFM(mod)).catch(() => {});
    return () => (mounted = false);
  }, []);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        {FM ? (
          <FM.motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, margin: '-100px' }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Client Testimonials</h2>
            <p className="text-lg text-slate-400">What clients and collaborators say about working with me</p>
          </FM.motion.div>
        ) : (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Client Testimonials</h2>
            <p className="text-lg text-slate-400">What clients and collaborators say about working with me</p>
          </div>
        )}

        {/* Testimonials grid */}
        {FM ? (
          <FM.motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <FM.motion.div key={index} variants={itemVariants} className="group">
                <div className="glass-effect p-6 rounded-xl hover-glow hover-lift h-full transition-all">
                  <div className="mb-4 flex gap-1">{[...Array(testimonial.rating)].map((_, i) => (<span key={i} className="text-lg text-accent">⭐</span>))}</div>
                  <p className="text-slate-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4"><div className="text-4xl">{testimonial.image}</div><div><h4 className="font-bold text-accent-light">{testimonial.name}</h4><p className="text-xs text-slate-400">{testimonial.role}</p></div></div>
                  <FM.motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="h-0.5 bg-gradient-to-r from-accent to-vibrant-pink mt-4" />
                </div>
              </FM.motion.div>
            ))}
          </FM.motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="glass-effect p-6 rounded-xl hover-glow hover-lift h-full transition-all">
                  <div className="mb-4 flex gap-1">{[...Array(testimonial.rating)].map((_, i) => (<span key={i} className="text-lg text-accent">⭐</span>))}</div>
                  <p className="text-slate-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4"><div className="text-4xl">{testimonial.image}</div><div><h4 className="font-bold text-accent-light">{testimonial.name}</h4><p className="text-xs text-slate-400">{testimonial.role}</p></div></div>
                  <div className="h-0.5 bg-gradient-to-r from-accent to-vibrant-pink mt-4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Additional stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <div className="glass-effect-strong p-8 rounded-2xl inline-block">
            <div className="grid grid-cols-2 gap-8 md:gap-16">
              <div>
                <p className="text-4xl font-bold gradient-text-light">98%</p>
                <p className="text-sm text-slate-400">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-4xl font-bold gradient-text-light">4.9/5</p>
                <p className="text-sm text-slate-400">Average Rating</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
