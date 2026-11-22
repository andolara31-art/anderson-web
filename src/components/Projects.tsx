import React, { useState } from 'react';
import { ArrowUpRight, Eye, Github, Layers } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import type { ProjectCategoryFilter, ProjectItem } from '../types';
import ScrollReveal from './ScrollReveal';
import ProjectModal from './ProjectModal';
import TornEdge from './TornEdge';
import { PixelSprite } from './PixelCrew';
import BatmanPeek from './BatmanPeek';

const FILTER_OPTIONS: { id: ProjectCategoryFilter; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'productos', label: 'Plataformas & CRM' },
  { id: 'webs', label: 'Webs & Menús' },
  { id: 'casos', label: 'Casos reales' },
];

const ACCENT_HEX: Record<ProjectItem['accentTone'], string> = {
  blue: '#2046F0',
  yellow: '#FFC83D',
  mint: '#5EDBB0',
  coral: '#FF5A4E',
};

function ProjectCard({
  project,
  isWide = false,
  onSelect,
}: {
  project: ProjectItem;
  isWide?: boolean;
  onSelect: (p: ProjectItem) => void;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const accent = ACCENT_HEX[project.accentTone];

  return (
    <article
      className={`comic-panel-light flex flex-col justify-between overflow-hidden h-full ${
        isWide ? 'lg:grid lg:grid-cols-12' : ''
      }`}
    >
      {/* Visual Frame */}
      <div
        className={`relative bg-[#121212] border-b-3 border-[#121212] overflow-hidden ${
          isWide
            ? 'lg:col-span-6 lg:border-b-0 lg:border-r-3 min-h-[240px] lg:min-h-[340px]'
            : 'aspect-[16/10]'
        }`}
      >
        {project.image && !imgFailed ? (
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
          />
        ) : (
          /* Visual architectural schematic when no live screenshot exists (e.g. NUVRO CRM) */
          <div className="w-full h-full p-5 flex flex-col justify-between bg-[#141822] text-[#F7F7F4] tech-grid-dark">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#FFC83D]">
                <Layers size={14} aria-hidden="true" />
                Módulo CRM · Vista de arquitectura
              </span>
              <span className="font-mono text-[10px] text-[#9AA2B4]">
                En desarrollo
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 my-3 sm:my-4">
              <div className="bg-[#1B202C] border border-white/15 p-2.5">
                <div className="font-mono text-[10px] text-[#5EDBB0] font-bold mb-1">
                  Nuevos
                </div>
                <div className="h-2 w-3/4 bg-white/25 mb-1.5" />
                <div className="h-2 w-1/2 bg-white/15" />
              </div>
              <div className="bg-[#1B202C] border border-[#2046F0] p-2.5">
                <div className="font-mono text-[10px] text-[#FFC83D] font-bold mb-1">
                  Seguimiento
                </div>
                <div className="h-2 w-5/6 bg-white/25 mb-1.5" />
                <div className="h-2 w-2/3 bg-white/15" />
              </div>
              <div className="bg-[#1B202C] border border-white/15 p-2.5">
                <div className="font-mono text-[10px] text-[#FF5A4E] font-bold mb-1">
                  Propuesta
                </div>
                <div className="h-2 w-2/3 bg-white/25 mb-1.5" />
                <div className="h-2 w-1/2 bg-white/15" />
              </div>
            </div>
            <p className="font-mono text-[11px] text-[#AEB5C4]">
              Estructura interna para flujo de prospectos NUVRO
            </p>
          </div>
        )}

        {/* Top Accent Strip */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-1.5"
          style={{ backgroundColor: accent }}
        />
      </div>

      {/* Content Body */}
      <div
        className={`p-5 sm:p-6 flex flex-col justify-between gap-5 min-w-0 ${
          isWide ? 'lg:col-span-6 lg:p-8' : 'flex-1'
        }`}
      >
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span
              className="inline-block px-2.5 py-0.5 text-[11px] font-mono font-bold uppercase border-2 border-[#121212] text-[#121212]"
              style={{ backgroundColor: accent === '#2046F0' ? '#FFC83D' : accent }}
            >
              {project.natureLabel}
            </span>
            <span className="font-mono text-xs text-[#4A4A46]">
              {project.category}
            </span>
          </div>

          <h3
            className={`font-display-nuvro text-[#121212] mb-2.5 ${
              isWide ? 'text-4xl sm:text-5xl' : 'text-3xl'
            }`}
          >
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-[#2C2C28] leading-relaxed mb-4">
            {project.shortDescription}
          </p>

          {/* Compact Problem / Solution teaser */}
          <div className="text-xs text-[#4A4A46] bg-[#ECECE8] border-2 border-[#121212]/20 p-3 mb-4 leading-relaxed">
            <strong className="text-[#121212]">Solución:</strong>{' '}
            {project.solution}
          </div>

          {/* Unboxed clean stack metadata */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-[#2046F0] font-semibold">
            {project.stack.map((tech, index) => (
              <React.Fragment key={tech}>
                <span>{tech}</span>
                {index < project.stack.length - 1 && (
                  <span aria-hidden="true" className="text-[#121212]/40">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t-2 border-[#121212]/10 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[42px] bg-[#121212] text-[#F7F7F4] hover:bg-[#2046F0] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <Eye size={14} aria-hidden="true" />
            Ver ficha
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 min-h-[42px] border-2 border-[#121212] bg-[#FFFFFF] hover:bg-[#FFC83D] text-[#121212] text-xs font-bold transition-colors"
            >
              Ver en vivo
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Repositorio en GitHub de ${project.title}`}
              className="inline-flex items-center justify-center min-w-[42px] min-h-[42px] border-2 border-[#121212] bg-[#FFFFFF] hover:bg-[#ECECE8] text-[#121212] transition-colors ml-auto"
            >
              <Github size={16} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategoryFilter>('todos');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const visibleProjects =
    filter === 'todos'
      ? PROJECTS
      : PROJECTS.filter((p) => p.filterGroup === filter);

  const primaryProject =
    filter === 'todos' ? visibleProjects[0] : null;
  const gridProjects =
    filter === 'todos' ? visibleProjects.slice(1) : visibleProjects;

  return (
    <section
      id="projects"
      className="relative bg-paper-torn py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <p className="nuvro-kicker text-[#2046F0] mb-4">
                Proyectos verificados
              </p>
              <h2 className="font-display-nuvro text-[clamp(2.6rem,5.5vw,4.8rem)] text-[#121212] mb-3">
                PRODUCTOS, CRM &amp;{' '}
                <span className="text-[#2046F0]">SISTEMAS WEB.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#4A4A46] max-w-2xl leading-relaxed">
                Cada ficha distingue claramente entre empresa fundada, productos
                en vivo, casos reales con clientes, propuestas de diseño web y
                módulos en desarrollo.
              </p>
            </div>

            {/* Interactive Category Tabs */}
            <div
              role="group"
              aria-label="Filtrar proyectos por categoría"
              className="flex flex-wrap gap-2"
            >
              {FILTER_OPTIONS.map((option) => {
                const active = filter === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(option.id)}
                    className={`px-4 py-2.5 min-h-[44px] text-xs sm:text-sm font-bold border-3 border-[#121212] transition-all cursor-pointer whitespace-nowrap ${
                      active
                        ? 'bg-[#FFC83D] text-[#121212] shadow-[4px_4px_0_#121212] -translate-y-0.5'
                        : 'bg-[#FFFFFF] text-[#121212] hover:bg-[#ECECE8]'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Featured Wide Project when viewing All */}
        {primaryProject && (
          <div className="mb-8 relative">
            <div
              aria-hidden="true"
              className="flex items-end justify-end gap-2 px-4 -mb-1 relative z-20 pointer-events-none"
            >
              <span className="font-hand-nuvro text-lg text-[#2046F0] -rotate-2">
                Sistema principal
              </span>
              <PixelSprite spriteName="superman" scale={3} className="px-float" />
            </div>
            <ScrollReveal>
              <ProjectCard
                project={primaryProject}
                isWide
                onSelect={setSelectedProject}
              />
            </ScrollReveal>
          </div>
        )}

        {/* Asymmetric Editorial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {gridProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={Math.min(index * 0.05, 0.25)}
              className={
                filter === 'todos' && index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }
            >
              <div className="relative h-full">
                {project.id === 'leadpilot' && (
                  <BatmanPeek
                    edge="top-right"
                    tone="yellow"
                    lines={['CRM en vivo', 'Next.js + Supabase']}
                    delay={0.12}
                  />
                )}
                {project.id === 'la-catrina-azul' && (
                  <BatmanPeek
                    edge="top-left"
                    tone="dark"
                    lines={['Diseño gastronómico', 'Menú interactivo']}
                    delay={0.12}
                  />
                )}
                <ProjectCard
                  project={project}
                  isWide={filter === 'todos' && index === 0}
                  onSelect={setSelectedProject}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Torn Edge into Build Lab Dark Canvas */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-px">
        <TornEdge fill="#0D1017" fiber="#121212" seed={61} />
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
