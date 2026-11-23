import React, { useState } from 'react';
import {
  Bot,
  Code2,
  Cpu,
  Database,
  Sparkles,
  Webhook,
} from 'lucide-react';
import { BUILD_LAB_MODULES } from '../data/stackAndLab';
import type { LabModule, LabStatusKey } from '../types';
import ScrollReveal from './ScrollReveal';
import TornEdge from './TornEdge';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const ACCENT_VAR: Record<LabModule['accent'], string> = {
  blue: 'var(--tone-blue)',
  yellow: 'var(--tone-yellow)',
  mint: 'var(--tone-mint)',
  coral: 'var(--tone-coral)',
};

const STATUS_LABELS: Record<LabStatusKey, { es: string; en: string }> = {
  implemented: {
    es: 'Implementado en producción',
    en: 'Implemented in production',
  },
  domain: {
    es: 'Dominio técnico',
    en: 'Core competency',
  },
  experimenting: {
    es: 'I+D aplicado',
    en: 'Applied R&D',
  },
};

function getModuleIcon(id: string) {
  switch (id) {
    case 'python-automation':
      return <Code2 size={18} aria-hidden="true" />;
    case 'api-integrations':
      return <Webhook size={18} aria-hidden="true" />;
    case 'ai-agents':
      return <Bot size={18} aria-hidden="true" />;
    case 'commercial-tools':
      return <Cpu size={18} aria-hidden="true" />;
    case 'data-processing':
      return <Database size={18} aria-hidden="true" />;
    default:
      return <Sparkles size={18} aria-hidden="true" />;
  }
}

export default function BuildLab() {
  const { lang, pick, pickList } = useLanguage();
  const { theme } = useTheme();
  const [selectedId, setSelectedId] = useState<string>(BUILD_LAB_MODULES[0].id);

  const selectedModule =
    BUILD_LAB_MODULES.find((m) => m.id === selectedId) ?? BUILD_LAB_MODULES[0];

  const getStatusText = (key: LabStatusKey) => STATUS_LABELS[key][lang];

  return (
    <section
      id="build-lab"
      className="relative bg-lab-canvas tech-grid-dark py-20 md:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="nuvro-kicker text-[var(--tone-yellow)] mb-4">
                {lang === 'es'
                  ? 'Laboratorio de Ingeniería'
                  : 'Engineering Lab'}
              </p>
              <h2 className="font-display-nuvro text-[clamp(2.8rem,6vw,5.2rem)] text-[var(--lab-text)] mb-3">
                THE BUILD <span className="text-[#2046F0]">LAB.</span>
              </h2>
              <p className="text-lg text-[var(--lab-muted)] max-w-xl">
                {lang === 'es'
                  ? 'Arquitecturas en producción, flujos backend y prototipos técnicos.'
                  : 'Production architectures, backend pipelines, and technical R&D.'}
              </p>
            </div>
            <p className="font-mono text-xs text-[var(--lab-subtle)] max-w-sm border-2 border-[var(--lab-card-border)] bg-[var(--lab-card-bg)] px-4 py-3">
              {lang === 'es'
                ? 'Cada módulo distingue explícitamente entre implementaciones en vivo, dominio técnico y líneas de I+D.'
                : 'Each module clearly separates production systems, core engineering skills, and ongoing R&D.'}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Connected Lab Modules */}
          <div className="lg:col-span-7 min-w-0 grid sm:grid-cols-2 gap-4">
            {BUILD_LAB_MODULES.map((mod) => {
              const isSelected = mod.id === selectedModule.id;
              const accent = ACCENT_VAR[mod.accent];
              const activeAccentColor =
                theme === 'clean-paper' ? '#FFC83D' : '#2046F0';

              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => setSelectedId(mod.id)}
                  aria-pressed={isSelected}
                  className={`text-left p-5 border-3 transition-all cursor-pointer flex flex-col justify-between gap-4 ${
                    isSelected
                      ? 'bg-[var(--lab-active-bg)] text-[var(--lab-active-text)] border-[var(--card-border)] shadow-[6px_6px_0_#2046F0] -translate-x-0.5 -translate-y-0.5'
                      : 'bg-[var(--lab-card-bg)] text-[var(--lab-text)] border-[var(--lab-card-border)] hover:border-[#2046F0]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className="inline-flex items-center gap-2 font-mono text-xs font-bold"
                        style={{
                          color: isSelected ? activeAccentColor : accent,
                        }}
                      >
                        {getModuleIcon(mod.id)}
                        {mod.code}
                      </span>
                      <span
                        className={`font-mono text-[10px] font-bold uppercase px-2 py-0.5 border ${
                          isSelected
                            ? 'bg-[#FFC83D] text-[#121212] border-[#121212]'
                            : 'bg-[var(--lab-badge-bg)] text-[var(--lab-badge-text)] border-[var(--lab-card-border)]'
                        }`}
                      >
                        {getStatusText(mod.statusKey)}
                      </span>
                    </div>

                    <h3 className="font-display-nuvro text-2xl mb-2">
                      {pick(mod.title)}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isSelected
                          ? 'text-[var(--lab-active-muted)]'
                          : 'text-[var(--lab-subtle)]'
                      }`}
                    >
                      {pick(mod.summary)}
                    </p>
                  </div>

                  <div
                    className={`font-mono text-[11px] pt-3 border-t flex flex-wrap gap-x-2 gap-y-1 ${
                      isSelected
                        ? theme === 'clean-paper'
                          ? 'border-white/20 text-[#FFC83D] font-bold'
                          : 'border-[#121212]/15 text-[#2046F0] font-bold'
                        : 'border-[var(--lab-card-border)] text-[var(--lab-subtle)]'
                    }`}
                  >
                    {mod.technologies.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {idx < mod.technologies.length - 1 && (
                          <span aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Connected Architecture Inspector */}
          <div className="lg:col-span-5 min-w-0 lg:sticky lg:top-24 relative mt-2 lg:mt-0">
            <div className="bg-[var(--lab-card-bg)] border-4 border-[var(--card-border)] shadow-[8px_8px_0_#FFC83D] overflow-hidden">
              <div className="bg-[#2046F0] text-[#FFFFFF] px-5 py-3.5 border-b-3 border-[var(--card-border)] flex items-center justify-between gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider">
                  {lang === 'es' ? 'Módulo conectado' : 'Active module'} ·{' '}
                  {selectedModule.code}
                </span>
                <span className="font-mono text-xs bg-[#121212] text-[#FFC83D] px-2 py-0.5 font-bold">
                  {getStatusText(selectedModule.statusKey)}
                </span>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <h3 className="font-display-nuvro text-3xl text-[var(--lab-text)] mb-2">
                    {pick(selectedModule.title)}
                  </h3>
                  <p className="text-sm text-[var(--lab-muted)] leading-relaxed">
                    {pick(selectedModule.summary)}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--hero-accent)] mb-3">
                    {lang === 'es'
                      ? 'Capacidades y alcance real'
                      : 'Capabilities & scope'}
                  </h4>
                  <ul className="space-y-2.5">
                    {pickList(selectedModule.details).map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2.5 text-sm text-[var(--lab-text)]"
                      >
                        <span
                          aria-hidden="true"
                          className="w-2 h-2 mt-2 bg-[#FFC83D] border border-[#121212] shrink-0"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[var(--lab-card-inner)] border-2 border-[var(--lab-card-border)] p-4">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--tone-yellow)] font-bold mb-1">
                    {lang === 'es' ? 'Nota técnica' : 'Engineering note'}
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--lab-muted)] leading-relaxed">
                    {pick(selectedModule.architectureNote)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Torn Edge into Stack Paper Section */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-px">
        <TornEdge
          fill="var(--lab-torn-fill)"
          fiber="var(--lab-torn-fiber)"
          seed={89}
        />
      </div>
    </section>
  );
}
