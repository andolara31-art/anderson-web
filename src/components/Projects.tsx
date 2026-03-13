import React from 'react';
import ScrollReveal from './ScrollReveal';
import Card3D from './Card3D';

export default function Projects() {
  const mainProjects = [
    {
      title: 'Last Signal',
      category: 'Experiencia Interactiva',
      description: 'Demo interactiva con enfoque narrativo que explora mecánicas de storytelling en el navegador.',
      tags: ['React', 'Three.js', 'Framer Motion'],
      link: '#',
      image: 'https://picsum.photos/seed/lastsignal/800/600',
      accentColor: '#00d4ff'
    },
    {
      title: 'LeadPilot CRM',
      category: 'Mini SaaS B2B',
      description: 'Plataforma CRM diseñada para organizar prospectos y automatizar flujos de seguimiento comercial.',
      tags: ['Next.js', 'TypeScript', 'Supabase'],
      link: '#',
      image: 'https://picsum.photos/seed/leadpilot/800/600',
      accentColor: '#f97316'
    },
    {
      title: 'Clario Advisory',
      category: 'Web Corporativa',
      description: 'Web corporativa premium para firma de consultoría, enfocada en rendimiento y diseño editorial.',
      tags: ['React', 'Tailwind', 'TypeScript', 'Framer Motion'],
      link: '#',
      image: 'https://picsum.photos/seed/clario/800/600',
      accentColor: '#a78bfa'
    }
  ];

  const secondaryProjects = [
    {
      title: 'Auto-Lead System',
      category: 'Automatización',
      description: 'Flujo automático de captura y seguimiento de prospectos para negocios locales.',
      tags: ['n8n', 'Zapier', 'Webhooks'],
      link: '#',
      image: 'https://picsum.photos/seed/autolead/800/600',
      accentColor: '#22c55e'
    },
    {
      title: 'Cyber Runner',
      category: 'Experimental',
      description: 'Mini juego interactivo desarrollado para explorar mecánicas de juego en el navegador.',
      tags: ['Canvas', 'JavaScript', 'Audio API'],
      link: '#',
      image: 'https://picsum.photos/seed/game/800/600',
      accentColor: '#ec4899'
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Tier 1: Main Projects */}
        <div className="mb-24">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-[11px] uppercase tracking-[2px] font-bold mb-4 block" style={{ color: '#00d4ff', opacity: 0.6 }}>
                  Proyectos
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                  Proyectos <span className="text-white/40">Principales</span>
                </h2>
                <p className="text-white/50 text-lg max-w-xl">
                  Soluciones digitales premium enfocadas en resultados comerciales y experiencia de usuario.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainProjects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.12}>
                <Card3D project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Tier 2: Complementary/Experimental */}
        <div>
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-[11px] uppercase tracking-[2px] font-bold mb-4 block" style={{ color: '#00d4ff', opacity: 0.6 }}>
                  Exploraciones
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                  Exploraciones <span className="text-white/40">&amp; Complementos</span>
                </h2>
                <p className="text-white/50 text-lg max-w-xl">
                  Automatizaciones, creatividad con IA y experimentos interactivos que complementan mi stack técnico.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secondaryProjects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.12}>
                <Card3D project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
