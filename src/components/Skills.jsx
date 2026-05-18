import { useEffect } from 'react';
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

  useEffect(() => {}, []);

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Expertise</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">A comprehensive set of technical skills developed through years of practice and real-world projects</p>
        </div>

        {/* Skills Grid */}
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

        {/* Additional Technologies Section */}
        <div className="glass-effect-strong p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Other Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {['HTML5', 'CSS3', 'REST APIs', 'GraphQL', 'Redux', 'Jest Testing', 'Webpack', 'Sass/SCSS', 'Firebase', 'Linux', 'Vercel', 'Netlify', 'Figma', 'Agile/Scrum', 'SEO'].map((tech) => (
              <button key={tech} className="px-4 py-2 glass-effect border border-accent/50 rounded-full text-slate-300 hover:text-accent hover:border-accent hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 text-sm font-medium">{tech}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
