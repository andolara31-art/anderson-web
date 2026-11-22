import React, { useEffect } from 'react';
import { ArrowUpRight, Github, Layers, X } from 'lucide-react';
import type { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
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
              {project.natureLabel}
            </span>
            <span className="font-mono text-xs text-[#C9CDD8] truncate">
              {project.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar ficha del proyecto"
            className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] bg-[#1B202C] text-[#F7F7F4] border-2 border-[#F7F7F4] hover:bg-[#FFC83D] hover:text-[#121212] hover:border-[#121212] transition-colors cursor-pointer shrink-0"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Media / Visual Composition */}
        <div className="p-5 sm:p-8 space-y-6">
          {project.image ? (
            <div className="border-3 border-[#121212] bg-[#121212] overflow-hidden shadow-[5px_5px_0_#121212]">
              <img
                src={project.image}
                alt={project.imageAlt || project.title}
                className="w-full max-h-[420px] object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
          ) : (
            <div className="border-3 border-[#121212] bg-[#141822] text-[#F7F7F4] p-6 shadow-[5px_5px_0_#121212]">
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/15">
                <span className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#FFC83D]">
                  <Layers size={15} aria-hidden="true" />
                  Esquema estructural · Sin captura comercial publicada
                </span>
                <span className="font-mono text-[11px] text-[#9AA2B4]">
                  {project.title}
                </span>
              </div>
              <div className="grid sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 bg-[#1B202C] border border-white/15">
                  <div className="text-[#5EDBB0] font-bold mb-1">01. Captura</div>
                  <div className="text-[#C9CDD8]">
                    Entrada de prospectos desde formularios web y consultas.
                  </div>
                </div>
                <div className="p-3 bg-[#1B202C] border border-white/15">
                  <div className="text-[#FFC83D] font-bold mb-1">02. Seguimiento</div>
                  <div className="text-[#C9CDD8]">
                    Estados comerciales, notas internas y trazabilidad.
                  </div>
                </div>
                <div className="p-3 bg-[#1B202C] border border-white/15">
                  <div className="text-[#2046F0] font-bold mb-1">03. Conexión</div>
                  <div className="text-[#C9CDD8]">
                    Arquitectura preparada para automatizaciones y webhooks.
                  </div>
                </div>
              </div>
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
              {project.shortDescription}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#FFFFFF] border-3 border-[#121212] p-5">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#2046F0] mb-2">
                Problema que aborda
              </h4>
              <p className="text-sm text-[#2C2C28] leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="bg-[#FFFFFF] border-3 border-[#121212] p-5">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#2046F0] mb-2">
                Solución desarrollada
              </h4>
              <p className="text-sm text-[#2C2C28] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Stack & Transparency Note */}
          <div className="bg-[#ECECE8] border-3 border-[#121212] p-4 space-y-2">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#121212]">
              Stack tecnológico verificado
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs sm:text-sm text-[#2C2C28]">
              {project.stack.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="font-semibold">{tech}</span>
                  {idx < project.stack.length - 1 && (
                    <span aria-hidden="true" className="text-[#2046F0]">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
            {project.note && (
              <p className="text-xs text-[#4A4A46] pt-2 border-t border-[#121212]/15">
                {project.note}
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
                Visitar sitio en vivo
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
                Ver repositorio
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="ml-auto font-mono text-xs font-bold uppercase tracking-wider text-[#121212] hover:text-[#2046F0] underline underline-offset-4 py-2 px-1 cursor-pointer"
            >
              Cerrar ficha
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
