import React from 'react';
import ScrollReveal from './ScrollReveal';
import Card3D from './Card3D';

export default function Projects() {
  const mainProjects = [
    {
      title: 'NUVRO FIT',
      category: 'Performance Brand',
      description: 'Marca fitness premium enfocada en suplementación, rendimiento, disciplina y progreso físico real.',
      tags: ['E-commerce', 'Fitness Brand', 'Suplementos'],
      link: 'https://www.nuvro.shop/',
      image: 'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/image.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvaW1hZ2Uud2VicCIsImlhdCI6MTc3MzYwNjU5MiwiZXhwIjoxODA1MTQyNTkyfQ.SpYXvZzRKYd0xfyR7NRPtVj_TLug_bQTpfKHGm0atr8',
      accentColor: '#00FF87'
    },
    {
      title: 'LeadPilot CRM',
      category: 'Mini SaaS B2B',
      description: 'Plataforma CRM diseñada para organizar prospectos y automatizar flujos de seguimiento comercial.',
      tags: ['Next.js', 'TypeScript', 'Supabase'],
      link: 'https://leadpilot-pi.vercel.app/',
      image: 'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/hf_20260315_144821_292329d5-191d-46bd-a75f-d73a0598a277%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvaGZfMjAyNjAzMTVfMTQ0ODIxXzI5MjMyOWQ1LTE5MWQtNDZiZC1hNzVmLWQ3M2EwNTk4YTI3NyAoMSkucG5nIiwiaWF0IjoxNzczNTkyNjIwLCJleHAiOjE4MDUxMjg2MjB9.gtFos3VqGtj9tnp9mWDrETztCnJFvngAMRKkND4vdyc',
      accentColor: '#f97316'
    },
    {
      title: 'Clario Advisory',
      category: 'Web Corporativa',
      description: 'Web corporativa premium para firma de consultoría, enfocada en rendimiento y diseño editorial.',
      tags: ['React', 'Tailwind', 'TypeScript', 'Framer Motion'],
      link: 'https://clario-advisory.vercel.app/',
      image: 'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/WhatsApp%20Image%202026-03-15%20at%209.33.12%20AM.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMy0xNSBhdCA5LjMzLjEyIEFNLmpwZWciLCJpYXQiOjE3NzM1OTI3MTMsImV4cCI6MTgwNTEyODcxM30.oaw1yt9z6sVfCjS-wEh8zDtK6lr0K-Y1ScZ5T6E8B3I',
      accentColor: '#a78bfa'
    }
  ];

  const secondaryProjects = [
    {
      title: "El Barbero Gentlemen's Shop",
      category: 'DISEÑO WEB',
      description: 'Rediseño web completo para barbería premium con 3 sucursales en Costa Rica. Diseño dark luxury con animaciones cinematográficas.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      link: 'https://elbarbero-website.vercel.app',
      image: 'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/WhatsApp%20Image%202026-03-19%20at%209.50.49%20PM.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMy0xOSBhdCA5LjUwLjQ5IFBNLmpwZWciLCJpYXQiOjE3NzM5Nzg2NzgsImV4cCI6MTgwNTUxNDY3OH0.cGHr_QsNngnQ29QxpCK8ZthOISkpV9bfY4mErLehL2A',
      accentColor: '#c5a059'
    },
    {
      title: 'Cafeoteca Costa Rica',
      category: 'DISEÑO WEB',
      description: 'Sitio web premium para la única cafetería de Costa Rica entre las 100 mejores del mundo (#76). Diseño editorial con animaciones de scroll y mapa de regiones cafetaleras.',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://cafeoteca-website.vercel.app',
      image: 'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/WhatsApp%20Image%202026-03-19%20at%2010.01.37%20PM.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMy0xOSBhdCAxMC4wMS4zNyBQTS5qcGVnIiwiaWF0IjoxNzczOTc5OTUxLCJleHAiOjE4MDU1MTU5NTF9.3BrfjuPPPM8n4g_jueS3KqpYOF_1UGYHB_3DF-pMiIg',
      accentColor: '#00FF87'
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
