import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Nuvi from './Nuvi';
import ScrollReveal from './ScrollReveal';
import TornEdge from './TornEdge';
import BatmanPeek from './BatmanPeek';

export default function NuvroBridge() {
  return (
    <section
      id="nuvro"
      className="relative bg-[#2046F0] text-[#FFFFFF] py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-halftone-dark opacity-30 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="relative bg-[#121212] border-4 border-[#121212] shadow-[10px_10px_0_#FFC83D] p-6 sm:p-10 md:p-14 grid lg:grid-cols-12 gap-8 items-center">
            <BatmanPeek
              edge="top-left"
              tone="yellow"
              lines={['Mismo ADN NUVRO', 'Ingeniería + cómic']}
              delay={0.14}
            />
            <div className="lg:col-span-8 min-w-0">
              <div className="mb-4">
                <span className="brand-sticker">
                  Empresa fundada · NUVRO ENGINEER
                </span>
              </div>

              <h2 className="font-display-nuvro text-[clamp(2.6rem,5.5vw,4.8rem)] text-[#F7F7F4] mb-5">
                DE LA IDEA <span className="text-[#FFC83D]">AL PRODUCTO.</span>
              </h2>

              <p className="text-base sm:text-xl text-[#D6D8DF] leading-relaxed max-w-2xl mb-8">
                NUVRO ENGINEER es mi iniciativa de desarrollo tecnológico para
                negocios, donde aplico diseño, software e inteligencia
                artificial para construir soluciones digitales útiles.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://www.nuvroenginer.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-btn brand-btn-yellow"
                >
                  Conocer NUVRO ENGINEER
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
                <span className="font-mono text-xs text-[#AEB5C4]">
                  nuvroenginer.site · Costa Rica
                </span>
              </div>
            </div>

            {/* Nuvi Mascot Connecting Both Universes */}
            <div className="lg:col-span-4 min-w-0 flex flex-col items-center justify-center bg-[#F7F7F4] text-[#121212] border-4 border-[#121212] shadow-[6px_6px_0_#2046F0] p-6">
              <Nuvi
                pose="present"
                width={150}
                title="Nuvi, mascota cómic oficial de NUVRO ENGINEER"
              />
              <p className="font-hand-nuvro text-2xl text-[#2046F0] mt-2 -rotate-1 text-center">
                El mismo código, la misma firma.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Torn Edge into Contact Paper Section */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-px">
        <TornEdge fill="#ECECE8" fiber="#121212" seed={149} />
      </div>
    </section>
  );
}
