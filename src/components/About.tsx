import React, { useState } from 'react';
import { ArrowUpRight, Code2, MapPin, Layers } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TornEdge from './TornEdge';
import BatmanPeek from './BatmanPeek';

const PORTRAIT_URL =
  'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/nv/hf_20260326_192810_29431f91-08f5-4a98-952e-964a99307e80%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJudi9oZl8yMDI2MDMyNl8xOTI4MTBfMjk0MzFmOTEtMDhmNS00YTk4LTk1MmUtOTY0YTk5MzA3ZTgwICgxKS5wbmciLCJpYXQiOjE3NzU5ODYxODIsImV4cCI6MTgwNzUyMjE4Mn0.nmCRljTgHh-PAtusyBD_IlaKjMEn3TiEUc6Ul7y7S7I';

export default function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="relative bg-paper-grain py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Editorial Copy Column */}
          <div className="lg:col-span-7 min-w-0">
            <ScrollReveal>
              <p className="nuvro-kicker text-[#2046F0] mb-5">Sobre mí</p>
              <h2 className="font-display-nuvro text-[clamp(2.6rem,5.5vw,4.7rem)] text-[#121212] mb-6 max-w-2xl">
                NO SOLO DISEÑO WEBS.{' '}
                <span className="text-[#2046F0]">CONSTRUYO SISTEMAS.</span>
              </h2>

              <div className="space-y-5 text-base sm:text-lg text-[#2C2C28] leading-relaxed max-w-2xl">
                <p>
                  Soy Anderson Agüero Lara, desarrollador enfocado en crear
                  productos digitales, aplicaciones web y soluciones
                  tecnológicas para problemas reales.
                </p>
                <p>
                  Me interesa especialmente conectar desarrollo de software,
                  experiencia de usuario, inteligencia artificial y
                  automatización.
                </p>
                <p>
                  También soy fundador de{' '}
                  <strong className="font-bold text-[#121212]">
                    NUVRO ENGINEER
                  </strong>
                  , un proyecto desde el que desarrollo soluciones digitales
                  para negocios en Costa Rica.
                </p>
              </div>

              {/* Technical Pillars — Zero fake metrics */}
              <div className="mt-10 grid sm:grid-cols-3 gap-5 sm:gap-4">
                <div className="bg-[#FFFFFF] border-3 border-[#121212] shadow-[4px_4px_0_#121212] p-4">
                  <Code2
                    size={20}
                    className="text-[#2046F0] mb-2"
                    aria-hidden="true"
                  />
                  <h3 className="font-bold text-sm text-[#121212] mb-1">
                    Ingeniería Frontend &amp; Full-Stack
                  </h3>
                  <p className="text-xs text-[#4A4A46] leading-relaxed">
                    Código modular en React y TypeScript pensado para escalar.
                  </p>
                </div>

                <div className="relative bg-[#FFFFFF] border-3 border-[#121212] shadow-[4px_4px_0_#121212] p-4">
                  <BatmanPeek
                    edge="top-right"
                    tone="dark"
                    lines={['Hecho para operar', 'Orden y claridad']}
                    delay={0.14}
                  />
                  <Layers
                    size={20}
                    className="text-[#2046F0] mb-2"
                    aria-hidden="true"
                  />
                  <h3 className="font-bold text-sm text-[#121212] mb-1">
                    Producto, CRM &amp; Flujos
                  </h3>
                  <p className="text-xs text-[#4A4A46] leading-relaxed">
                    Herramientas para ordenar prospectos, catálogos y operación.
                  </p>
                </div>

                <div className="bg-[#FFFFFF] border-3 border-[#121212] shadow-[4px_4px_0_#121212] p-4">
                  <MapPin
                    size={20}
                    className="text-[#2046F0] mb-2"
                    aria-hidden="true"
                  />
                  <h3 className="font-bold text-sm text-[#121212] mb-1">
                    Desde Costa Rica
                  </h3>
                  <p className="text-xs text-[#4A4A46] leading-relaxed">
                    Palmares, Alajuela · Colaboración local y remota.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Profile Card + Code Spec */}
          <div className="lg:col-span-5 min-w-0">
            <ScrollReveal delay={0.1}>
              <div className="relative">
                <BatmanPeek
                  edge="top-right"
                  tone="yellow"
                  lines={['Sin código relleno', 'Palmares, Alajuela']}
                  delay={0.2}
                />
                <div className="comic-panel-light bg-[#F7F7F4] overflow-hidden">
                {/* Top Strip */}
                <div className="bg-[#121212] text-[#F7F7F4] px-5 py-3 flex items-center justify-between gap-3">
                  <span className="font-mono text-xs font-bold tracking-wider uppercase text-[#FFC83D]">
                    Perfil de Ingeniería
                  </span>
                  <span className="font-mono text-[11px] text-[#C9CDD8]">
                    ANDERSON.AL
                  </span>
                </div>

                {/* Portrait + Factual Profile */}
                <div className="p-5 sm:p-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    <div className="sm:col-span-5 max-w-[180px] sm:max-w-none aspect-[4/5] bg-[#121212] border-3 border-[#121212] overflow-hidden">
                      {!imgError ? (
                        <img
                          src={PORTRAIT_URL}
                          alt="Anderson Agüero Lara, desarrollador de software y fundador de NUVRO ENGINEER"
                          className="w-full h-full object-cover"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={() => setImgError(true)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#121212] text-[#FFC83D] font-display-nuvro text-4xl">
                          AL
                        </div>
                      )}
                    </div>

                    <div className="sm:col-span-7 space-y-2 min-w-0">
                      <span className="inline-block px-2 py-0.5 bg-[#FFC83D] text-[#121212] border-2 border-[#121212] font-mono text-[11px] font-bold uppercase">
                        Fundador · NUVRO
                      </span>
                      <h3 className="font-display-nuvro text-3xl text-[#121212]">
                        Anderson Agüero Lara
                      </h3>
                      <p className="text-sm text-[#4A4A46] leading-snug">
                        Software Developer &amp; Digital Product Builder en
                        Costa Rica.
                      </p>
                      <a
                        href="https://www.nuvroenginer.site"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#2046F0] hover:underline pt-1"
                      >
                        nuvroenginer.site
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  {/* Factual Code Block */}
                  <div className="bg-[#121212] text-[#F7F7F4] p-4 border-3 border-[#121212] font-mono text-xs leading-relaxed overflow-x-auto">
                    <div className="text-[#9AA2B4] mb-1.5">
                      profile.manifest.json
                    </div>
                    <pre>
                      <code>{`{
  "nombre": "Anderson Agüero Lara",
  "empresa": "NUVRO ENGINEER",
  "ubicacion": "Costa Rica",
  "foco": [
    "Desarrollo web moderno",
    "CRM & herramientas comerciales",
    "APIs, automatización e IA"
  ]
}`}</code>
                    </pre>
                  </div>
                </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Bottom Torn Edge transition into Projects (#F7F7F4) */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-px">
        <TornEdge fill="#F7F7F4" fiber="#121212" seed={43} />
      </div>
    </section>
  );
}
