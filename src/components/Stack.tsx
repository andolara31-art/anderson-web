import React, { useState } from 'react';
import {
  Bot,
  Code2,
  Database,
  Palette,
} from 'lucide-react';
import { TECH_CATEGORIES } from '../data/stackAndLab';
import type { ExperienceLevel, TechCategory } from '../types';
import ScrollReveal from './ScrollReveal';
import TornEdge from './TornEdge';
import BatmanPeek from './BatmanPeek';

const LEVEL_OPTIONS: ('Todas' | ExperienceLevel)[] = [
  'Todas',
  'Uso profesional',
  'Uso en proyectos',
  'Exploración',
];

const LEVEL_STYLES: Record<ExperienceLevel, string> = {
  'Uso profesional': 'bg-[#2046F0] text-[#FFFFFF] border-[#121212]',
  'Uso en proyectos': 'bg-[#FFC83D] text-[#121212] border-[#121212]',
  Exploración: 'bg-[#5EDBB0] text-[#121212] border-[#121212]',
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
  const [levelFilter, setLevelFilter] = useState<'Todas' | ExperienceLevel>('Todas');

  return (
    <section
      id="stack"
      className="relative bg-paper-grain py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <p className="nuvro-kicker text-[#2046F0] mb-4">
                Stack tecnológico
              </p>
              <h2 className="font-display-nuvro text-[clamp(2.6rem,5.5vw,4.8rem)] text-[#121212] mb-3">
                LAS HERRAMIENTAS DETRÁS{' '}
                <span className="text-[#2046F0]">DEL CÓDIGO.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#4A4A46] max-w-2xl leading-relaxed">
                Organizado por área técnica y nivel real de aplicación: uso
                profesional diario, implementación en proyectos y áreas de
                exploración continua.
              </p>
            </div>

            {/* Interactive Level Filter */}
            <div
              role="group"
              aria-label="Filtrar tecnologías por nivel de experiencia"
              className="flex flex-wrap gap-2"
            >
              {LEVEL_OPTIONS.map((option) => {
                const active = levelFilter === option;
                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setLevelFilter(option)}
                    className={`px-3.5 py-2 min-h-[42px] text-xs font-bold border-3 border-[#121212] transition-all cursor-pointer whitespace-nowrap ${
                      active
                        ? 'bg-[#121212] text-[#FFC83D] shadow-[4px_4px_0_#2046F0]'
                        : 'bg-[#FFFFFF] text-[#121212] hover:bg-[#F7F7F4]'
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {TECH_CATEGORIES.map((category, idx) => {
            const filteredItems =
              levelFilter === 'Todas'
                ? category.items
                : category.items.filter((item) => item.level === levelFilter);

            if (filteredItems.length === 0) return null;

            return (
              <ScrollReveal key={category.id} delay={idx * 0.06}>
                <div className="relative h-full flex flex-col">
                  {category.id === 'backend' && (
                    <BatmanPeek
                      edge="top-right"
                      tone="dark"
                      lines={['Datos vigilados', 'SQL y rutas limpias']}
                      delay={0.12}
                    />
                  )}
                  {category.id === 'ai-automation' && (
                    <BatmanPeek
                      edge="top-right"
                      tone="yellow"
                      lines={['IA aplicada real', 'Claude + Gemini']}
                      delay={0.18}
                    />
                  )}
                  <div className="comic-panel-light h-full flex flex-col flex-1">
                  {/* Category Header */}
                  <div className="p-5 sm:p-6 border-b-3 border-[#121212] bg-[#F7F7F4] flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display-nuvro text-3xl text-[#121212] mb-1">
                        {category.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4A4A46]">
                        {category.subtitle}
                      </p>
                    </div>
                    <span
                      className="w-11 h-11 shrink-0 border-3 border-[#121212] shadow-[3px_3px_0_#121212] flex items-center justify-center text-[#121212]"
                      style={{ backgroundColor: ACCENT_BG[category.accent] }}
                    >
                      <span
                        className={
                          category.accent === 'blue' ? 'text-[#FFFFFF]' : 'text-[#121212]'
                        }
                      >
                        {getCategoryIcon(category.id)}
                      </span>
                    </span>
                  </div>

                  {/* Items List */}
                  <ul className="divide-y-2 divide-[#121212]/10 p-5 sm:p-6 flex-1">
                    {filteredItems.map((item) => (
                      <li
                        key={item.name}
                        className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div>
                          <div className="font-bold text-base text-[#121212]">
                            {item.name}
                          </div>
                          <div className="text-xs text-[#4A4A46] leading-relaxed">
                            {item.context}
                          </div>
                        </div>
                        <span
                          className={`self-start sm:self-center shrink-0 px-2.5 py-1 text-[11px] font-mono font-bold border-2 whitespace-nowrap ${LEVEL_STYLES[item.level]}`}
                        >
                          {item.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Torn Edge into Certifications */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-px">
        <TornEdge fill="#F7F7F4" fiber="#121212" seed={103} />
      </div>
    </section>
  );
}
