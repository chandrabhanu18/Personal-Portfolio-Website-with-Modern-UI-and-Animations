export default function Timeline() {
  const milestones = [
    {
      year: '2019',
      title: 'Started Learning Web Development',
      description: 'Began my journey with HTML, CSS, and JavaScript fundamentals.',
      icon: '📚',
    },
    {
      year: '2020',
      title: 'First Full Stack Project',
      description: 'Built my first full stack application using React and Node.js.',
      icon: '🚀',
    },
    {
      year: '2021',
      title: 'Freelance Developer',
      description: 'Started freelancing and completed 20+ successful projects.',
      icon: '💼',
    },
    {
      year: '2022',
      title: 'Senior Developer Role',
      description: 'Promoted to senior developer and led a team of 5 developers.',
      icon: '👨‍💼',
    },
    {
      year: '2023',
      title: 'Tech Lead & Mentor',
      description: 'Mentored 15+ junior developers and architected 10+ large-scale projects.',
      icon: '🎓',
    },
    {
      year: '2024',
      title: 'Innovating with AI/ML',
      description: 'Exploring AI integration in web applications and building intelligent solutions.',
      icon: '🤖',
    },
  ];

  // animation variants removed (not used)

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">My Journey</h2>
          <p className="text-lg text-slate-400">From beginner to expert: A timeline of growth and achievement</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-vibrant-purple to-vibrant-pink opacity-30" />
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="flex-1">
                  <div className="glass-effect p-6 rounded-xl hover-glow transition-all">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{milestone.icon}</span>
                      <span className="text-sm font-bold text-accent">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-accent-light mb-2">{milestone.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-accent to-vibrant-pink shadow-lg shadow-accent/50" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="h-1 bg-gradient-to-r from-accent via-vibrant-purple to-vibrant-pink mt-16 rounded-full origin-top" />
      </div>
    </section>
  );
}
