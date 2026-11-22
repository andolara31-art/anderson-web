import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowDown,
  ArrowUpRight,
  Cpu,
  Database,
  Globe,
  Linkedin,
  Terminal,
  Webhook,
} from 'lucide-react';
import TornEdge from './TornEdge';
import { useLanguage } from '../context/LanguageContext';
import { PROFILE_LINKS } from '../data/profile';
import type { LocalizedText } from '../types';

interface SystemNode {
  id: string;
  label: LocalizedText;
  role: LocalizedText;
  tech: string;
  detail: LocalizedText;
  payload: LocalizedText;
  tone: string;
}

const SYSTEM_NODES: SystemNode[] = [
  {
    id: 'frontend',
    label: { es: '01. Frontend & UI', en: '01. Frontend & UI' },
    role: {
      es: 'Interfaz y experiencia de usuario',
      en: 'Interfaces & user experience',
    },
    tech: 'React · TypeScript · Tailwind CSS',
    detail: {
      es: 'Componentes accesibles, diseño editorial responsive y sistemas visuales propios como NUVRO ENGINEER y NUVRO ASSET STUDIO.',
      en: 'Accessible components, responsive editorial layouts, and custom design systems powering NUVRO ENGINEER and NUVRO ASSET STUDIO.',
    },
    payload: {
      es: `{
  "modulo": "frontend-system",
  "stack": ["React 19", "TypeScript", "Tailwind"],
  "enfoque": "velocidad, claridad y mobile-first"
}`,
      en: `{
  "module": "frontend-system",
  "stack": ["React 19", "TypeScript", "Tailwind"],
  "focus": "speed, clarity, and mobile-first"
}`,
    },
    tone: '#2046F0',
  },
  {
    id: 'api',
    label: { es: '02. Media & APIs', en: '02. Media & APIs' },
    role: {
      es: 'Serverless, Docker & Python FastAPI',
      en: 'Serverless, Docker & Python FastAPI',
    },
    tech: 'FastAPI · FFmpeg · Vercel Serverless',
    detail: {
      es: 'Motor Video Engine 3.0 en NUVRO ASSET STUDIO con yt-dlp, FFmpeg/ffprobe, protección SSRF y procesamiento por lotes.',
      en: 'Video Engine 3.0 in NUVRO ASSET STUDIO combining yt-dlp, FFmpeg/ffprobe, SSRF protection, and batch asset prep.',
    },
    payload: {
      es: `{
  "modulo": "nuvro-asset-studio",
  "runtime": ["Vercel Serverless", "Docker", "Python FastAPI"],
  "seguridad": "validación anti-SSRF + procesamiento por lotes"
}`,
      en: `{
  "module": "nuvro-asset-studio",
  "runtime": ["Vercel Serverless", "Docker", "Python FastAPI"],
  "security": "SSRF protection + batch processing"
}`,
    },
    tone: '#FFC83D',
  },
  {
    id: 'crm',
    label: { es: '03. CRM & Datos', en: '03. CRM & Data' },
    role: {
      es: 'Organización comercial',
      en: 'Commercial operations',
    },
    tech: 'Next.js · Supabase · SQL · LeadPilot',
    detail: {
      es: 'Estructuración de prospectos, catálogos comerciales y seguimiento operativo ordenado en aplicaciones web en vivo.',
      en: 'Structured prospect tracking, commercial catalogs, and operational workflows deployed in live web applications.',
    },
    payload: {
      es: `{
  "modulo": "commercial-data",
  "producto": "https://leadpilot-pi.vercel.app",
  "persistencia": "PostgreSQL / Supabase"
}`,
      en: `{
  "module": "commercial-data",
  "product": "https://leadpilot-pi.vercel.app",
  "persistence": "PostgreSQL / Supabase"
}`,
    },
    tone: '#5EDBB0',
  },
  {
    id: 'ai',
    label: { es: '04. IA Aplicada', en: '04. Applied AI' },
    role: {
      es: 'Asistencia y flujos inteligentes',
      en: 'Intelligent workflows & RAG',
    },
    tech: 'Claude · Gemini · RAG',
    detail: {
      es: 'Integración práctica de modelos de lenguaje para automatizar tareas, contenido estructurado y prototipos funcionales.',
      en: 'Practical LLM integration for task automation, structured generation, and reliable engineering workflows.',
    },
    payload: {
      es: `{
  "modulo": "ai-integration",
  "modelos": ["Claude", "Gemini", "ChatGPT"],
  "foco": "RAG, agentes y productividad real"
}`,
      en: `{
  "module": "ai-integration",
  "models": ["Claude", "Gemini", "ChatGPT"],
  "focus": "RAG, agents, and real productivity"
}`,
    },
    tone: '#FF5A4E',
  },
];

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const { lang, pick } = useLanguage();
  const [activeTab, setActiveTab] = useState<'nodos' | 'codigo' | 'terminal'>(
    'nodos',
  );
  const [activeNodeId, setActiveNodeId] = useState<string>('frontend');

  const activeNode =
    SYSTEM_NODES.find((node) => node.id === activeNodeId) ?? SYSTEM_NODES[0];

  const getNodeIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Globe size={16} aria-hidden="true" />;
      case 'api':
        return <Webhook size={16} aria-hidden="true" />;
      case 'crm':
        return <Database size={16} aria-hidden="true" />;
      default:
        return <Cpu size={16} aria-hidden="true" />;
    }
  };

  return (
    <section
      id="home"
      className="relative bg-ink-canvas tech-grid-dark overflow-hidden pt-10 md:pt-16 pb-20 md:pb-24"
    >
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#2046F0]/15 blur-[110px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-12 w-64 h-64 bg-halftone-dark opacity-40 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Identity */}
          <motion.div
            className="lg:col-span-6 min-w-0"
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="brand-sticker">
                {lang === 'es'
                  ? 'Costa Rica · Remoto & Proyectos Técnicos'
                  : 'Costa Rica · Remote Engineering & Product Builder'}
              </span>
            </div>

            <h1 className="font-display-nuvro text-[clamp(3rem,11vw,6.8rem)] leading-[0.94] tracking-[0.01em] text-[#F7F7F4] mb-6">
              <span className="block">ANDERSON</span>
              <span className="block text-[#F7F7F4] relative">
                AGÜERO LARA
                <span
                  aria-hidden="true"
                  className="block h-[6px] w-28 sm:w-40 bg-[#2046F0] mt-2 border-2 border-[#121212] shadow-[3px_3px_0_#FFC83D]"
                />
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FFC83D] mb-4 max-w-xl leading-snug">
              {lang === 'es'
                ? 'Desarrollo software. Construyo productos. Integro inteligencia artificial.'
                : 'Full-stack software developer building production web apps, media tools & applied AI.'}
            </p>

            <p className="text-base sm:text-lg text-[#C9CDD8] mb-8 max-w-xl leading-relaxed">
              {lang === 'es'
                ? 'Creo aplicaciones web en producción, herramientas comerciales, servicios con Docker/FastAPI y automatizaciones listas para resolver problemas reales.'
                : 'I ship production React & TypeScript applications, commercial tools, Docker/FastAPI backends, and practical automation workflows.'}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5">
              <a
                href="#projects"
                className="brand-btn brand-btn-yellow w-full sm:w-auto"
              >
                {lang === 'es' ? 'Explorar proyectos' : 'Explore projects'}
                <ArrowDown size={18} aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="brand-btn brand-btn-dark w-full sm:w-auto"
              >
                {lang === 'es' ? 'Hablemos' : "Let's talk"}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a
                href={PROFILE_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-4 py-2.5 border-2 border-white/25 bg-[#171B24] hover:border-[#FFC83D] hover:text-[#FFC83D] text-[#F7F7F4] text-sm font-mono font-bold transition-colors w-full sm:w-auto"
              >
                <Linkedin size={17} aria-hidden="true" />
                LinkedIn
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-[#AEB5C4]">
              <span>ANDERSON.AL</span>
              <span aria-hidden="true">·</span>
              <span>
                {lang === 'es'
                  ? 'Fundador de NUVRO ENGINEER'
                  : 'Founder of NUVRO ENGINEER'}
              </span>
              <span aria-hidden="true">·</span>
              <span>React · TypeScript · FastAPI · Docker</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Developer Environment Composition */}
          <motion.div
            className="lg:col-span-6 min-w-0 relative"
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between px-1 mb-2">
              <span className="font-mono text-xs text-[#FFC83D]">
                {lang === 'es'
                  ? '→ Seleccioná un módulo para inspeccionar el stack'
                  : '→ Select a module to inspect architecture'}
              </span>
            </div>

            <div className="relative bg-[#141822] border-4 border-[#121212] shadow-[10px_10px_0_#2046F0] overflow-hidden">
              {/* Editor Window Top Bar */}
              <div className="bg-[#0B0E14] border-b-3 border-[#121212] px-4 py-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <span className="w-3 h-3 bg-[#FF5A4E] border border-[#121212]" />
                  <span className="w-3 h-3 bg-[#FFC83D] border border-[#121212]" />
                  <span className="w-3 h-3 bg-[#5EDBB0] border border-[#121212]" />
                  <span className="ml-2 font-mono text-xs text-[#9AA2B4]">
                    anderson.workspace
                  </span>
                </div>

                {/* Switchable Workspace Views */}
                <div
                  role="tablist"
                  aria-label={
                    lang === 'es'
                      ? 'Vistas del entorno de desarrollo'
                      : 'Developer workspace views'
                  }
                  className="flex items-center gap-1.5"
                >
                  {(
                    [
                      {
                        id: 'nodos',
                        label: lang === 'es' ? 'Nodos API' : 'API Nodes',
                      },
                      {
                        id: 'codigo',
                        label: lang === 'es' ? 'sistema.ts' : 'system.ts',
                      },
                      { id: 'terminal', label: 'Terminal' },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-2.5 py-1 text-xs font-mono font-bold border-2 transition-colors cursor-pointer whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'bg-[#FFC83D] text-[#121212] border-[#121212]'
                          : 'bg-[#1B202C] text-[#C9CDD8] border-white/15 hover:border-[#2046F0]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Workspace Body */}
              <div className="p-4 sm:p-6">
                {activeTab === 'nodos' && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {SYSTEM_NODES.map((node) => {
                        const isSelected = node.id === activeNode.id;
                        return (
                          <button
                            key={node.id}
                            type="button"
                            onClick={() => setActiveNodeId(node.id)}
                            aria-pressed={isSelected}
                            className={`w-full h-full text-left p-3.5 border-3 transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#F7F7F4] text-[#121212] border-[#121212] shadow-[4px_4px_0_#FFC83D]'
                                : 'bg-[#1B202C] text-[#F7F7F4] border-[#2A3142] hover:border-[#2046F0]'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span
                                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider"
                                style={{
                                  color: isSelected ? '#2046F0' : node.tone,
                                }}
                              >
                                {getNodeIcon(node.id)}
                                {pick(node.label)}
                              </span>
                            </div>
                            <p
                              className={`text-sm font-bold leading-snug ${
                                isSelected ? 'text-[#121212]' : 'text-[#F7F7F4]'
                              }`}
                            >
                              {pick(node.role)}
                            </p>
                            <p
                              className={`font-mono text-[11px] mt-1 ${
                                isSelected ? 'text-[#4A4A46]' : 'text-[#9AA2B4]'
                              }`}
                            >
                              {node.tech}
                            </p>
                          </button>
                        );
                      })}
                    </div>

                    <div className="bg-[#0B0E14] border-2 border-[#2A3142] p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-bold text-[#5EDBB0] uppercase tracking-wider">
                          {lang === 'es' ? 'Nodo activo:' : 'Active node:'}{' '}
                          {pick(activeNode.label)}
                        </span>
                        <span className="font-mono text-[11px] text-[#9AA2B4]">
                          {activeNode.tech}
                        </span>
                      </div>
                      <p className="text-sm text-[#D6D8DF] leading-relaxed mb-3">
                        {pick(activeNode.detail)}
                      </p>
                      <pre className="font-mono text-xs text-[#C9CDD8] bg-[#141822] p-3 border border-white/10 overflow-x-auto leading-relaxed">
                        <code>{pick(activeNode.payload)}</code>
                      </pre>
                    </div>
                  </div>
                )}

                {activeTab === 'codigo' && (
                  <div className="bg-[#0B0E14] border-2 border-[#2A3142] p-4 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto">
                    <div className="text-[#9AA2B4] mb-2">
                      src/architecture/anderson.ts
                    </div>
                    <pre className="text-[#F7F7F4]">
                      <code>
                        {lang === 'es'
                          ? `export const engineerProfile = {
  nombre: "Anderson Agüero Lara",
  marca: "ANDERSON.AL",
  empresaFundada: "NUVRO ENGINEER",
  ubicacion: "Costa Rica (Disponible remoto)",
  especialidad: [
    "React + TypeScript + Vite",
    "Vercel Serverless + Docker + Python (FastAPI)",
    "CRM, procesamiento media y automatización",
    "Inteligencia artificial aplicada",
  ],
  enProduccion: [
    "https://nuvro-asset-studio.vercel.app",
    "https://www.nuvroenginer.site",
    "https://leadpilot-pi.vercel.app",
  ],
} as const;`
                          : `export const engineerProfile = {
  name: "Anderson Agüero Lara",
  brand: "ANDERSON.AL",
  foundedStudio: "NUVRO ENGINEER",
  location: "Costa Rica (Remote-ready)",
  specialties: [
    "React + TypeScript + Vite",
    "Vercel Serverless + Docker + Python (FastAPI)",
    "CRM tooling, media pipelines & automation",
    "Applied AI engineering",
  ],
  liveProducts: [
    "https://nuvro-asset-studio.vercel.app",
    "https://www.nuvroenginer.site",
    "https://leadpilot-pi.vercel.app",
  ],
} as const;`}
                      </code>
                    </pre>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="bg-[#0B0E14] border-2 border-[#2A3142] p-4 font-mono text-xs sm:text-[13px] leading-relaxed space-y-2.5">
                    <div className="flex items-center gap-2 text-[#5EDBB0]">
                      <Terminal size={14} aria-hidden="true" />
                      <span>anderson@nuvro:~/ecosistema</span>
                    </div>
                    <p className="text-[#F7F7F4]">
                      $ inspect --production nuvro-stack
                    </p>
                    <p className="text-[#C9CDD8]">
                      → asset-studio:{' '}
                      <span className="text-[#FFC83D]">
                        nuvro-asset-studio.vercel.app
                      </span>{' '}
                      (React · FastAPI · Docker · FFmpeg)
                    </p>
                    <p className="text-[#C9CDD8]">
                      → flagship-site:{' '}
                      <span className="text-[#5EDBB0]">nuvroenginer.site</span>{' '}
                      (React · TypeScript · Tailwind)
                    </p>
                    <p className="text-[#C9CDD8]">
                      → live-crm:{' '}
                      <span className="text-[#FFC83D]">
                        leadpilot-pi.vercel.app
                      </span>{' '}
                      (Next.js · Supabase)
                    </p>
                    <p className="text-[#C9CDD8]">
                      → brand-commerce:{' '}
                      <span className="text-[#5EDBB0]">nuvro.shop</span> (NUVRO FIT)
                    </p>
                    <p className="text-[#5EDBB0]">
                      {lang === 'es'
                        ? 'Listo para equipos remotos y proyectos técnicos.'
                        : 'Ready for remote engineering roles & technical builds.'}
                    </p>
                  </div>
                )}

                {/* Bottom Quick Bridge Strip */}
                <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-[#C9CDD8]">
                    <span className="font-mono text-[#FFC83D] font-bold">
                      NUVRO ENGINEER
                    </span>{' '}
                    ·{' '}
                    {lang === 'es'
                      ? 'Empresa fundada en Costa Rica'
                      : 'Founded in Costa Rica'}
                  </div>
                  <a
                    href={PROFILE_LINKS.nuvroSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#F7F7F4] hover:text-[#FFC83D] transition-colors"
                  >
                    nuvroenginer.site
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Signature NUVRO Torn Paper Transition into About Section */}
      <div className="absolute left-0 right-0 bottom-0 z-10">
        <TornEdge fill="#ECECE8" fiber="#F7F7F4" seed={17} />
      </div>
    </section>
  );
}
