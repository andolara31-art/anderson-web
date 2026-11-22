import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Github, X } from 'lucide-react';
import type { ProjectItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import ProjectPreview from './ProjectPreview';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { lang, pick, pickList } = useLanguage();
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setImgFailed(false);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const stackItems = pickList(project.stack);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6 bg-[#0B0D12]/85 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F7F7F4] text-[#121212] border-4 border-[#121212] shadow-[10px_10px_0_#2046F0]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="sticky top-0 z-20 bg-[#121212] text-[#F7F7F4] px-5 py-3.5 border-b-4 border-[#121212] flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5 min-w-0">
            <span className="px-2 py-0.5 bg-[#FFC83D] text-[#121212] font-mono text-[11px] font-bold uppercase">
              {pick(project.natureLabel)}
            </span>
            <span className="font-mono text-xs text-[#C9CDD8] truncate">
              {pick(project.category)}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={
              lang === 'es'
                ? 'Cerrar ficha del proyecto'
                : 'Close project details'
            }
            className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] bg-[#1B202C] text-[#F7F7F4] border-2 border-[#F7F7F4] hover:bg-[#FFC83D] hover:text-[#121212] hover:border-[#121212] transition-colors cursor-pointer shrink-0"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Media / Visual Composition */}
        <div className="p-5 sm:p-8 space-y-6">
          {project.image && !imgFailed ? (
            <div className="border-3 border-[#121212] bg-[#0E1117] overflow-hidden shadow-[5px_5px_0_#121212]">
              <img
                src={project.image}
                alt={project.imageAlt ? pick(project.imageAlt) : project.title}
                onError={() => setImgFailed(true)}
                className={`w-full max-h-[420px] ${
                  project.imageFit === 'contain'
                    ? 'object-contain p-4 mx-auto'
                    : 'object-cover object-top'
                }`}
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <div className="border-3 border-[#121212] overflow-hidden shadow-[5px_5px_0_#121212] min-h-[220px]">
              <ProjectPreview
                previewId={project.previewId ?? 'nuvro-crm'}
                lang={lang}
                compact={false}
              />
            </div>
          )}

          {/* Header */}
          <div>
            <h3
              id="project-modal-title"
              className="font-display-nuvro text-4xl sm:text-5xl text-[#121212] mb-3"
            >
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-[#2C2C28] leading-relaxed">
              {pick(project.shortDescription)}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#FFFFFF] border-3 border-[#121212] p-5">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#2046F0] mb-2">
                {lang === 'es' ? 'Problema que aborda' : 'Problem addressed'}
              </h4>
              <p className="text-sm text-[#2C2C28] leading-relaxed">
                {pick(project.problem)}
              </p>
            </div>
            <div className="bg-[#FFFFFF] border-3 border-[#121212] p-5">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#2046F0] mb-2">
                {lang === 'es' ? 'Solución desarrollada' : 'Built solution'}
              </h4>
              <p className="text-sm text-[#2C2C28] leading-relaxed">
                {pick(project.solution)}
              </p>
            </div>
          </div>

          {/* Stack & Transparency Note */}
          <div className="bg-[#ECECE8] border-3 border-[#121212] p-4 space-y-2">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#121212]">
              {lang === 'es'
                ? 'Stack tecnológico'
                : 'Technical stack'}
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs sm:text-sm text-[#2C2C28]">
              {stackItems.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="font-semibold">{tech}</span>
                  {idx < stackItems.length - 1 && (
                    <span aria-hidden="true" className="text-[#2046F0]">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
            {project.note && (
              <p className="text-xs text-[#4A4A46] pt-2 border-t border-[#121212]/15">
                {pick(project.note)}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-btn brand-btn-yellow"
              >
                {lang === 'es' ? 'Visitar sitio en vivo' : 'Open live site'}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-btn"
              >
                <Github size={17} aria-hidden="true" />
                {lang === 'es' ? 'Ver repositorio' : 'View repository'}
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="ml-auto font-mono text-xs font-bold uppercase tracking-wider text-[#121212] hover:text-[#2046F0] underline underline-offset-4 py-2 px-1 cursor-pointer"
            >
              {lang === 'es' ? 'Cerrar ficha' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
