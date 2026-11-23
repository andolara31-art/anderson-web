import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Nuvi from './Nuvi';
import ScrollReveal from './ScrollReveal';
import TornEdge from './TornEdge';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { PROFILE_LINKS } from '../data/profile';

export default function NuvroBridge() {
  const { lang } = useLanguage();
  const { theme } = useTheme();

  return (
    <section
      id="nuvro"
      className="relative bg-[var(--bridge-bg)] py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-200"
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 pointer-events-none ${
          theme === 'clean-paper'
            ? 'bg-halftone-light opacity-35'
            : 'bg-halftone-dark opacity-30'
        }`}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="relative bg-[var(--bridge-card-bg)] text-[var(--bridge-card-text)] border-4 border-[var(--card-border)] shadow-[10px_10px_0_#FFC83D] p-6 sm:p-10 md:p-14 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 min-w-0">
              <div className="mb-4">
                <span className="brand-sticker">
                  {lang === 'es'
                    ? 'Empresa fundada · NUVRO ENGINEER'
                    : 'Founded Studio · NUVRO ENGINEER'}
                </span>
              </div>

              <h2 className="font-display-nuvro text-[clamp(2.6rem,5.5vw,4.8rem)] text-[var(--bridge-card-text)] mb-5">
                {lang === 'es' ? (
                  <>
                    DE LA IDEA{' '}
                    <span className="text-[var(--bridge-highlight)]">
                      AL PRODUCTO.
                    </span>
                  </>
                ) : (
                  <>
                    FROM IDEA{' '}
                    <span className="text-[var(--bridge-highlight)]">
                      TO PRODUCT.
                    </span>
                  </>
                )}
              </h2>

              <p className="text-base sm:text-xl text-[var(--bridge-card-muted)] leading-relaxed max-w-2xl mb-8">
                {lang === 'es'
                  ? 'NUVRO ENGINEER es mi iniciativa de desarrollo tecnológico donde aplico ingeniería web, diseño y automatización para construir herramientas y productos digitales en producción.'
                  : 'NUVRO ENGINEER is my software studio where I combine frontend engineering, backend tooling, and applied AI to ship real digital products.'}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={PROFILE_LINKS.nuvroSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-btn brand-btn-yellow"
                >
                  {lang === 'es'
                    ? 'Conocer NUVRO ENGINEER'
                    : 'Visit NUVRO ENGINEER'}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <span
                  className={`font-mono text-xs ${
                    theme === 'clean-paper'
                      ? 'text-[var(--paper-muted)]'
                      : 'text-[#AEB5C4]'
                  }`}
                >
                  nuvroenginer.site · Costa Rica
                </span>
              </div>
            </div>

            {/* Nuvi Mascot Connecting Both Universes */}
            <div className="lg:col-span-4 min-w-0 flex flex-col items-center justify-center bg-[var(--bridge-mascot-bg)] text-[var(--bridge-mascot-text)] border-4 border-[var(--card-border)] shadow-[6px_6px_0_var(--bridge-mascot-shadow)] p-6">
              <Nuvi
                pose="present"
                width={150}
                title={
                  lang === 'es'
                    ? 'Nuvi, mascota oficial de NUVRO ENGINEER'
                    : 'Nuvi, official mascot of NUVRO ENGINEER'
                }
              />
              <p className="font-hand-nuvro text-2xl text-[#2046F0] mt-2 -rotate-1 text-center">
                {lang === 'es'
                  ? 'El mismo código, la misma firma.'
                  : 'Same engineering, same signature.'}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Torn Edge into Contact Paper Section */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-px">
        <TornEdge
          fill="var(--paper-bg)"
          fiber="var(--card-border)"
          seed={149}
        />
      </div>
    </section>
  );
}
