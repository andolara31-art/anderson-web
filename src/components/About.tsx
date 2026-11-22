import React, { useState } from 'react';
import { ArrowUpRight, Code2, Layers, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TornEdge from './TornEdge';
import { useLanguage } from '../context/LanguageContext';
import { PROFILE_LINKS } from '../data/profile';

const PORTRAIT_URL =
  'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/nv/hf_20260326_192810_29431f91-08f5-4a98-952e-964a99307e80%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJudi9oZl8yMDI2MDMyNl8xOTI4MTBfMjk0MzFmOTEtMDhmNS00YTk4LTk1MmUtOTY0YTk5MzA3ZTgwICgxKS5wbmciLCJpYXQiOjE3NzU5ODYxODIsImV4cCI6MTgwNzUyMjE4Mn0.nmCRljTgHh-PAtusyBD_IlaKjMEn3TiEUc6Ul7y7S7I';

export default function About() {
  const [imgError, setImgError] = useState(false);
  const { lang } = useLanguage();

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
              <p className="nuvro-kicker text-[#2046F0] mb-5">
                {lang === 'es' ? 'Sobre mí' : 'About me'}
              </p>
              <h2 className="font-display-nuvro text-[clamp(2.6rem,5.5vw,4.7rem)] text-[#121212] mb-6 max-w-2xl">
                {lang === 'es' ? (
                  <>
                    NO SOLO DISEÑO WEBS.{' '}
                    <span className="text-[#2046F0]">CONSTRUYO SISTEMAS.</span>
                  </>
                ) : (
                  <>
                    NOT JUST WEBSITES.{' '}
                    <span className="text-[#2046F0]">PRODUCTION SYSTEMS.</span>
                  </>
                )}
              </h2>

              <div className="space-y-5 text-base sm:text-lg text-[#2C2C28] leading-relaxed max-w-2xl">
                {lang === 'es' ? (
                  <>
                    <p>
                      Soy Anderson Agüero Lara, desarrollador de software
                      enfocado en crear productos digitales, aplicaciones web en
                      producción y herramientas prácticas para problemas reales.
                    </p>
                    <p>
                      Trabajo en la intersección entre ingeniería frontend,
                      servicios backend con APIs/Docker/Python, experiencia de
                      usuario, automatización e inteligencia artificial
                      aplicada.
                    </p>
                    <p>
                      También soy fundador de{' '}
                      <strong className="font-bold text-[#121212]">
                        NUVRO ENGINEER
                      </strong>
                      , estudio desde el cual diseño y despliego soluciones
                      digitales para negocios y productos propios desde Costa
                      Rica.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      I am Anderson Agüero Lara, a full-stack software developer
                      focused on shipping production web products, media
                      utilities, and practical commercial systems.
                    </p>
                    <p>
                      My work connects clean frontend architecture with Python
                      FastAPI &amp; Docker backends, serverless APIs, UX
                      clarity, and applied AI workflows.
                    </p>
                    <p>
                      I am also the founder of{' '}
                      <strong className="font-bold text-[#121212]">
                        NUVRO ENGINEER
                      </strong>
                      , building digital products and business web solutions
                      from Costa Rica for local and international clients.
                    </p>
                  </>
                )}
              </div>

              {/* Technical Pillars */}
              <div className="mt-10 grid sm:grid-cols-3 gap-5 sm:gap-4">
                <div className="bg-[#FFFFFF] border-3 border-[#121212] shadow-[4px_4px_0_#121212] p-4">
                  <Code2
                    size={20}
                    className="text-[#2046F0] mb-2"
                    aria-hidden="true"
                  />
                  <h3 className="font-bold text-sm text-[#121212] mb-1">
                    {lang === 'es'
                      ? 'Ingeniería Frontend & Full-Stack'
                      : 'Frontend & Full-Stack Engineering'}
                  </h3>
                  <p className="text-xs text-[#4A4A46] leading-relaxed">
                    {lang === 'es'
                      ? 'Código modular en React, TypeScript y servicios Docker/FastAPI.'
                      : 'Modular React, TypeScript, and containerized FastAPI services.'}
                  </p>
                </div>

                <div className="bg-[#FFFFFF] border-3 border-[#121212] shadow-[4px_4px_0_#121212] p-4">
                  <Layers
                    size={20}
                    className="text-[#2046F0] mb-2"
                    aria-hidden="true"
                  />
                  <h3 className="font-bold text-sm text-[#121212] mb-1">
                    {lang === 'es'
                      ? 'Producto, CRM & Flujos'
                      : 'Product, CRM & Automation'}
                  </h3>
                  <p className="text-xs text-[#4A4A46] leading-relaxed">
                    {lang === 'es'
                      ? 'Herramientas reales para prospectos, medios y operación diaria.'
                      : 'Practical tools for lead pipelines, media prep, and operations.'}
                  </p>
                </div>

                <div className="bg-[#FFFFFF] border-3 border-[#121212] shadow-[4px_4px_0_#121212] p-4">
                  <MapPin
                    size={20}
                    className="text-[#2046F0] mb-2"
                    aria-hidden="true"
                  />
                  <h3 className="font-bold text-sm text-[#121212] mb-1">
                    {lang === 'es'
                      ? 'Desde Costa Rica'
                      : 'Based in Costa Rica'}
                  </h3>
                  <p className="text-xs text-[#4A4A46] leading-relaxed">
                    {lang === 'es'
                      ? 'Palmares, Alajuela · Disponible para trabajo remoto.'
                      : 'UTC-6 timezone · Available for remote engineering teams.'}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Profile Card + Code Spec */}
          <div className="lg:col-span-5 min-w-0">
            <ScrollReveal delay={0.1}>
              <div className="comic-panel-light bg-[#F7F7F4] overflow-hidden">
                {/* Top Strip */}
                <div className="bg-[#121212] text-[#F7F7F4] px-5 py-3 flex items-center justify-between gap-3">
                  <span className="font-mono text-xs font-bold tracking-wider uppercase text-[#FFC83D]">
                    {lang === 'es'
                      ? 'Perfil de Ingeniería'
                      : 'Engineering Profile'}
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
                          alt={
                            lang === 'es'
                              ? 'Anderson Agüero Lara, desarrollador de software y fundador de NUVRO ENGINEER'
                              : 'Anderson Agüero Lara, software developer and founder of NUVRO ENGINEER'
                          }
                          className="w-full h-full object-cover"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={() => setImgError(true)}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-[#121212] text-[#FFC83D] p-3 text-center">
                          <span className="font-display-nuvro text-5xl leading-none">
                            AL
                          </span>
                          <span className="font-mono text-[10px] text-[#AEB5C4] mt-1">
                            COSTA RICA
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="sm:col-span-7 space-y-2 min-w-0">
                      <span className="inline-block px-2 py-0.5 bg-[#FFC83D] text-[#121212] border-2 border-[#121212] font-mono text-[11px] font-bold uppercase">
                        {lang === 'es' ? 'Fundador · NUVRO' : 'Founder · NUVRO'}
                      </span>
                      <h3 className="font-display-nuvro text-3xl text-[#121212]">
                        Anderson Agüero Lara
                      </h3>
                      <p className="text-sm text-[#4A4A46] leading-snug">
                        Software Developer &amp; Digital Product Builder · Costa
                        Rica (UTC-6).
                      </p>
                      <a
                        href={PROFILE_LINKS.nuvroSite}
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
                      <code>
                        {lang === 'es'
                          ? `{
  "nombre": "Anderson Agüero Lara",
  "empresa": "NUVRO ENGINEER",
  "ubicacion": "Costa Rica (UTC-6)",
  "foco": [
    "Aplicaciones web React & TypeScript",
    "Servicios Python (FastAPI) & Docker",
    "CRM, automatización e IA aplicada"
  ]
}`
                          : `{
  "name": "Anderson Agüero Lara",
  "company": "NUVRO ENGINEER",
  "location": "Costa Rica (UTC-6)",
  "focus": [
    "React & TypeScript web applications",
    "Python (FastAPI) & Docker backends",
    "CRM tooling, automation & applied AI"
  ]
}`}
                      </code>
                    </pre>
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
