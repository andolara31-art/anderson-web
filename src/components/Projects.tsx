import React, { useState } from 'react';
import { ArrowUpRight, Eye, Github, Lock } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import type { ProjectCategoryFilter, ProjectItem } from '../types';
import ScrollReveal from './ScrollReveal';
import ProjectModal from './ProjectModal';
import ProjectPreview from './ProjectPreview';
import TornEdge from './TornEdge';
import { useLanguage } from '../context/LanguageContext';

const ACCENT_HEX: Record<ProjectItem['accentTone'], string> = {
  blue: '#2046F0',
  yellow: '#FFC83D',
  mint: '#5EDBB0',
  coral: '#FF5A4E',
};

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: ProjectItem;
  index: number;
  onSelect: (p: ProjectItem) => void;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const { lang, pick, pickList } = useLanguage();
  const accent = ACCENT_HEX[project.accentTone];
  const stackItems = pickList(project.stack);
  const isFirstFlagship = index === 0 && project.id === 'nuvro-asset-studio';

  return (
    <article
      className={`comic-panel-light flex flex-col justify-between overflow-hidden h-full ${
        isFirstFlagship ? 'ring-2 ring-[#FFC83D]' : ''
      }`}
    >
      {/* Visual Frame */}
      <div className="relative bg-[#121212] border-b-3 border-[#121212] overflow-hidden aspect-[16/10]">
        {project.image && !imgFailed ? (
          <img
            src={project.image}
            alt={project.imageAlt ? pick(project.imageAlt) : project.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgFailed(true)}
            className={`w-full h-full transition-transform duration-500 ${
              project.imageFit === 'contain'
                ? 'object-contain bg-[#0E1117] p-2.5'
                : 'object-cover object-top hover:scale-[1.03]'
            }`}
          />
        ) : (
          <ProjectPreview
            previewId={project.previewId ?? 'nuvro-clips-ia'}
            lang={lang}
          />
        )}

        {/* Top Accent Strip */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-1.5"
          style={{ backgroundColor: accent }}
        />
      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-6 flex flex-col justify-between gap-5 min-w-0 flex-1">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex flex-wrap items-center gap-2">
              {isFirstFlagship && (
                <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-extrabold uppercase bg-[#121212] text-[#FFC83D] border-2 border-[#121212]">
                  {lang === 'es' ? '#1 Principal' : '#1 Flagship'}
                </span>
              )}
              <span
                className="inline-block px-2.5 py-0.5 text-[11px] font-mono font-bold uppercase border-2 border-[#121212] text-[#121212]"
                style={{
                  backgroundColor: accent === '#2046F0' ? '#FFC83D' : accent,
                }}
              >
                {pick(project.natureLabel)}
              </span>
            </div>
            <span className="font-mono text-xs text-[#4A4A46]">
              {pick(project.category)}
            </span>
          </div>

          <h3 className="font-display-nuvro text-3xl text-[#121212] mb-1">
            {project.title}
          </h3>

          {project.subtitle && (
            <p className="text-xs font-semibold text-[#2046F0] mb-2.5 leading-snug">
              {pick(project.subtitle)}
            </p>
          )}

          <p className="text-sm text-[#2C2C28] leading-relaxed mb-4">
            {pick(project.shortDescription)}
          </p>

          {/* Compact Problem / Solution teaser */}
          <div className="text-xs text-[#4A4A46] bg-[#ECECE8] border-2 border-[#121212]/20 p-3 mb-4 leading-relaxed">
            <strong className="text-[#121212]">
              {lang === 'es' ? 'Arquitectura:' : 'Architecture:'}
            </strong>{' '}
            {pick(project.solution)}
          </div>

          {/* Unboxed clean stack metadata */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-[#2046F0] font-semibold">
            {stackItems.map((tech, techIdx) => (
              <React.Fragment key={tech}>
                <span>{tech}</span>
                {techIdx < stackItems.length - 1 && (
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
            {lang === 'es' ? 'Ver ficha' : 'Case details'}
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[42px] border-2 border-[#121212] bg-[#FFFFFF] hover:bg-[#FFC83D] text-[#121212] text-xs font-bold transition-colors"
            >
              {project.passwordProtected && (
                <Lock size={12} aria-hidden="true" className="text-[#4A4A46]" />
              )}
              {project.passwordProtected
                ? lang === 'es'
                  ? 'Acceso protegido'
                  : 'Protected app'
                : lang === 'es'
                  ? 'Ver en vivo'
                  : 'Live demo'}
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                lang === 'es'
                  ? `Repositorio en GitHub de ${project.title}`
                  : `GitHub repository for ${project.title}`
              }
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
  const { lang } = useLanguage();
  const [filter, setFilter] = useState<ProjectCategoryFilter>('todos');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  const filterOptions: { id: ProjectCategoryFilter; label: string }[] =
    lang === 'es'
      ? [
          { id: 'todos', label: 'Todos (6)' },
          { id: 'productos', label: 'Plataformas & IA' },
          { id: 'casos', label: 'Clientes & Agencia' },
        ]
      : [
          { id: 'todos', label: 'All (6)' },
          { id: 'productos', label: 'Platforms & AI' },
          { id: 'casos', label: 'Clients & Studio' },
        ];

  const visibleProjects =
    filter === 'todos'
      ? PROJECTS
      : PROJECTS.filter((p) => p.filterGroup === filter);

  return (
    <section
      id="projects"
      className="relative scroll-mt-20 bg-paper-torn py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <p className="nuvro-kicker text-[#2046F0] mb-4">
                {lang === 'es' ? 'Proyectos curados' : 'Curated engineering work'}
              </p>
              <h2 className="font-display-nuvro text-[clamp(2.6rem,5.5vw,4.8rem)] text-[#121212] mb-3">
                {lang === 'es' ? (
                  <>
                    PRODUCTOS IA, CRM &amp;{' '}
                    <span className="text-[#2046F0]">SISTEMAS EN VIVO.</span>
                  </>
                ) : (
                  <>
                    AI PRODUCTS, CRM &amp;{' '}
                    <span className="text-[#2046F0]">LIVE SYSTEMS.</span>
                  </>
                )}
              </h2>
              <p className="text-base sm:text-lg text-[#4A4A46] max-w-2xl leading-relaxed">
                {lang === 'es'
                  ? 'Selección de 6 proyectos reales en producción: motores media con Docker/FFmpeg, IA multimodal con renderizado cliente-side, CRM SaaS y sitios comerciales con dominio propio.'
                  : 'Focused 6-project selection spanning Docker/FFmpeg media tools, multimodal AI with $0-GPU client rendering, SaaS CRM, and real client deployments.'}
              </p>
            </div>

            {/* Interactive Category Tabs */}
            <div
              role="group"
              aria-label={
                lang === 'es'
                  ? 'Filtrar proyectos por categoría'
                  : 'Filter projects by category'
              }
              className="flex flex-wrap gap-2"
            >
              {filterOptions.map((option) => {
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

        {/* Balanced 3x2 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={Math.min(index * 0.05, 0.25)}
            >
              <ProjectCard
                project={project}
                index={index}
                onSelect={setSelectedProject}
              />
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
