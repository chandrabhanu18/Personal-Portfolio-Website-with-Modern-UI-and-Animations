// Centralized site data: replace placeholders with real content
export const siteMeta = {
  // Replace these example values with your real personal details
  name: 'Mandiga Chandra Bhanu',
  title: 'AI Engineer',
  email: 'mandigachandrabhanu@gmail.com',
  github: 'https://github.com/chandrabhanu18',
  linkedin: '',
  twitter: '',
  siteUrl: '',
};

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with product management, cart and payments.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com/johndeveloper/ecommerce',
    demo: 'https://johndeveloper.dev/demos/ecommerce',
    image: '/project-placeholder-1.svg',
    alt: 'Screenshot of E-Commerce Platform',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Collaborative task management with real-time updates and team features.',
    tech: ['React', 'Firebase', 'Redux', 'Socket.io'],
    github: 'https://github.com/johndeveloper/task-app',
    demo: 'https://johndeveloper.dev/demos/task-app',
    image: '/project-placeholder-2.svg',
    alt: 'Screenshot of Task Management App',
  },
  {
    id: 3,
    title: 'AI Chat Application',
    description:
      'Chat application powered by AI with context awareness and conversation history.',
    tech: ['React', 'Express', 'PostgreSQL', 'OpenAI API'],
    github: 'https://github.com/johndeveloper/ai-chat',
    demo: 'https://johndeveloper.dev/demos/ai-chat',
    image: '/project-placeholder-3.svg',
    alt: 'Screenshot of AI Chat Application',
  },
];

export default { siteMeta, projects };
