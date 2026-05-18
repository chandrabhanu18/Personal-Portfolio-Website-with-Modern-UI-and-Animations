import { useEffect } from 'react';
import { projects, siteMeta } from '../data/siteData';
import Button from './ui/Button';
import ProjectCard from './ui/ProjectCard';

export default function Projects() {
  useEffect(() => {}, []);

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group"><ProjectCard project={project} /></div>
          ))}
        </div>

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
