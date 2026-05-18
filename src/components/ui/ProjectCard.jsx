import Button from './Button';
import Card from './Card';
import Badge from './Badge';

export default function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden">
      <div className="h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden relative">
        <picture>
          {/* Try AVIF, then WebP, fall back to the original image */}
          <source srcSet={project.image.replace(/\.[^.]+$/, '.avif')} type="image/avif" />
          <source srcSet={project.image.replace(/\.[^.]+$/, '.webp')} type="image/webp" />
          <img src={project.image} alt={project.alt || project.title} className="w-full h-full object-cover" loading="lazy" />
        </picture>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-slate-100">{project.title}</h3>
        <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="flex gap-4">
          <Button as="a" href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-500/20 text-blue-400 border border-blue-500/30">
            GitHub
          </Button>
          <Button as="a" href={project.demo} target="_blank" rel="noopener noreferrer" variant="secondary" className="flex-1">
            Live Demo
          </Button>
        </div>
      </div>
    </Card>
  );
}
