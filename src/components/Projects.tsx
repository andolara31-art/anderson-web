import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const mainProjects = [
    {
      title: 'Nexus SaaS Dashboard',
      type: 'Mini SaaS',
      description: 'Panel de administración premium para gestión de datos en tiempo real con analíticas avanzadas.',
      stack: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
      demoUrl: '#',
      githubUrl: '#',
      image: 'https://picsum.photos/seed/nexus/800/600'
    },
    {
      title: 'E-Commerce Luxe',
      type: 'Página Web',
      description: 'Tienda online minimalista enfocada en productos de lujo con una experiencia de usuario fluida.',
      stack: ['Vite', 'React', 'Motion', 'Stripe'],
      demoUrl: '#',
      githubUrl: '#',
      image: 'https://picsum.photos/seed/luxe/800/600'
    },
    {
      title: 'Portfolio v1',
      type: 'Landing Page',
      description: 'Landing page personal con animaciones complejas y diseño ultra-moderno.',
      stack: ['React', 'Motion', 'Tailwind'],
      demoUrl: '#',
      githubUrl: '#',
      image: 'https://picsum.photos/seed/port/800/600'
    }
  ];

  const secondaryProjects = [
    {
      title: 'Auto-Lead System',
      type: 'Automatización',
      description: 'Flujo automático de captura y seguimiento de prospectos para negocios locales.',
      stack: ['n8n', 'Zapier', 'Webhooks'],
      demoUrl: '#',
      githubUrl: '#',
      image: 'https://picsum.photos/seed/autolead/800/600'
    },
    {
      title: 'AI Brand Visuals',
      type: 'Creatividad IA',
      description: 'Serie de piezas publicitarias generadas con IA para una campaña de marca tecnológica.',
      stack: ['Midjourney', 'Photoshop', 'IA'],
      demoUrl: '#',
      githubUrl: '#',
      image: 'https://picsum.photos/seed/aivisual/800/600'
    },
    {
      title: 'Cyber Runner',
      type: 'Experimental',
      description: 'Mini juego interactivo desarrollado para explorar mecánicas de juego en el navegador.',
      stack: ['Canvas', 'JavaScript', 'Audio API'],
      demoUrl: '#',
      githubUrl: '#',
      image: 'https://picsum.photos/seed/game/800/600'
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Tier 1: Main Projects */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                Proyectos <span className="text-white/40">Principales</span>
              </h2>
              <p className="text-white/40 text-lg max-w-xl">
                Soluciones digitales premium enfocadas en resultados comerciales y experiencia de usuario.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-white/10">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={project.demoUrl} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubUrl} className="p-3 bg-black text-white border border-white/20 rounded-full hover:scale-110 transition-transform">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="px-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">
                    {project.type}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech: string) => (
                      <span key={tech} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/10 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tier 2: Complementary/Experimental */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                Exploraciones <span className="text-white/40">&amp; Complementos</span>
              </h2>
              <p className="text-white/40 text-lg max-w-xl">
                Automatizaciones, creatividad con IA y experimentos interactivos que complementan mi stack técnico.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondaryProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-white/10">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a href={project.demoUrl} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubUrl} className="p-3 bg-black text-white border border-white/20 rounded-full hover:scale-110 transition-transform">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="px-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2 block">
                    {project.type}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech: string) => (
                      <span key={tech} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/10 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
