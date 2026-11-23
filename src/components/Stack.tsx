import React, { useState } from 'react';
import { Bot, Code2, Database, Palette } from 'lucide-react';
import { TECH_CATEGORIES } from '../data/stackAndLab';
import type { ExperienceLevelKey, TechCategory } from '../types';
import ScrollReveal from './ScrollReveal';
import TornEdge from './TornEdge';
import { useLanguage } from '../context/LanguageContext';

const LEVEL_STYLES: Record<ExperienceLevelKey, string> = {
  professional: 'bg-[#2046F0] text-[#FFFFFF] border-[#121212]',
  projects: 'bg-[#FFC83D] text-[#121212] border-[#121212]',
  exploring: 'bg-[#5EDBB0] text-[#121212] border-[#121212]',
};

const LEVEL_LABELS: Record<
  'all' | ExperienceLevelKey,
  { es: string; en: string }
> = {
  all: { es: 'Todas', en: 'All' },
  professional: { es: 'Uso profesional', en: 'Production use' },
  projects: { es: 'Uso en proyectos', en: 'Project stack' },
  exploring: { es: 'Exploración', en: 'Exploring' },
};

function getCategoryIcon(id: string) {
  switch (id) {
    case 'frontend':
      return <Code2 size={20} aria-hidden="true" />;
    case 'backend':
      return <Database size={20} aria-hidden="true" />;
    case 'ai-automation':
      return <Bot size={20} aria-hidden="true" />;
    default:
      return <Palette size={20} aria-hidden="true" />;
  }
}

const ACCENT_BG: Record<TechCategory['accent'], string> = {
  blue: '#2046F0',
  yellow: '#FFC83D',
  mint: '#5EDBB0',
  coral: '#FF5A4E',
};

export default function Stack() {
  const { lang, pick } = useLanguage();
  const [levelFilter, setLevelFilter] = useState<'all' | ExperienceLevelKey>(
    'all',
  );

  const levelOptions: ('all' | ExperienceLevelKey)[] = [
    'all',
    'professional',
    'projects',
    'exploring',
  ];

  return (
    <section
      id="stack"
      className="relative scroll-mt-20 bg-paper-grain py-20 md:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <p className="nuvro-kicker text-[var(--card-accent-text)] mb-4">
                {lang === 'es' ? 'Stack tecnológico' : 'Technical Stack'}
              </p>
              <h2 className="font-display-nuvro text-[clamp(2.6rem,5.5vw,4.8rem)] text-[var(--paper-text)] mb-3">
                {lang === 'es' ? (
                  <>
                    LAS HERRAMIENTAS DETRÁS{' '}
                    <span className="text-[#2046F0]">DEL CÓDIGO.</span>
                  </>
                ) : (
                  <>
                    THE TOOLS BEHIND{' '}
                    <span className="text-[#2046F0]">THE CODE.</span>
                  </>
                )}
              </h2>
              <p className="text-base sm:text-lg text-[var(--paper-muted)] max-w-2xl leading-relaxed">
                {lang === 'es'
                  ? 'Organizado por área técnica y nivel real de aplicación: uso profesional diario, implementación en proyectos y exploración continua.'
                  : 'Organized by engineering discipline and hands-on depth across production apps, deployed projects, and continuous R&D.'}
              </p>
            </div>

            {/* Interactive Level Filter */}
            <div
              role="group"
              aria-label={
                lang === 'es'
                  ? 'Filtrar tecnologías por nivel de experiencia'
                  : 'Filter technologies by experience level'
              }
              className="flex flex-wrap gap-2"
            >
              {levelOptions.map((option) => {
                const active = levelFilter === option;
                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setLevelFilter(option)}
                    className={`px-3.5 py-2 min-h-[42px] text-xs font-bold border-3 border-[var(--card-border)] transition-all cursor-pointer whitespace-nowrap ${
                      active
                        ? 'bg-[#121212] text-[#FFC83D] shadow-[4px_4px_0_#2046F0]'
                        : 'bg-[var(--card-bg)] text-[var(--paper-text)] hover:bg-[var(--card-surface)]'
                    }`}
                  >
                    {LEVEL_LABELS[option][lang]}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {TECH_CATEGORIES.map((category, idx) => {
            const filteredItems =
              levelFilter === 'all'
                ? category.items
                : category.items.filter(
                    (item) => item.levelKey === levelFilter,
                  );

            if (filteredItems.length === 0) return null;

            return (
              <ScrollReveal key={category.id} delay={idx * 0.06}>
                <div className="comic-panel-light h-full flex flex-col">
                  {/* Category Header */}
                  <div className="p-5 sm:p-6 border-b-3 border-[var(--card-border)] bg-[var(--card-surface)] flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display-nuvro text-3xl text-[var(--paper-text)] mb-1">
                        {pick(category.title)}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--paper-muted)]">
                        {pick(category.subtitle)}
                      </p>
                    </div>
                    <span
                      className="w-11 h-11 shrink-0 border-3 border-[var(--card-border)] shadow-[3px_3px_0_var(--card-shadow)] flex items-center justify-center text-[#121212]"
                      style={{ backgroundColor: ACCENT_BG[category.accent] }}
                    >
                      <span
                        className={
                          category.accent === 'blue'
                            ? 'text-[#FFFFFF]'
                            : 'text-[#121212]'
                        }
                      >
                        {getCategoryIcon(category.id)}
                      </span>
                    </span>
                  </div>

                  {/* Items List */}
                  <ul className="divide-y-2 divide-[var(--card-divider)] p-5 sm:p-6 flex-1">
                    {filteredItems.map((item) => (
                      <li
                        key={item.name}
                        className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div>
                          <div className="font-bold text-base text-[var(--paper-text)]">
                            {item.name}
                          </div>
                          <div className="text-xs text-[var(--paper-muted)] leading-relaxed">
                            {pick(item.context)}
                          </div>
                        </div>
                        <span
                          className={`self-start sm:self-center shrink-0 px-2.5 py-1 text-[11px] font-mono font-bold border-2 whitespace-nowrap ${LEVEL_STYLES[item.levelKey]}`}
                        >
                          {LEVEL_LABELS[item.levelKey][lang]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Torn Edge into Certifications */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-px">
        <TornEdge
          fill="var(--paper-torn-bg)"
          fiber="var(--card-border)"
          seed={103}
        />
      </div>
    </section>
  );
}
