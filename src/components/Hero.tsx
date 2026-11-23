import React, { useState } from 'react';
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
import { useTheme } from '../context/ThemeContext';
import { PROFILE_LINKS } from '../data/profile';
import type { LocalizedText } from '../types';

interface SystemNode {
  id: string;
  label: LocalizedText;
  role: LocalizedText;
  tech: string;
  detail: LocalizedText;
  payload: LocalizedText;
  toneVar: string;
}

const SYSTEM_NODES: SystemNode[] = [
  {
    id: 'frontend',
    label: { es: '01. Frontend & PWA', en: '01. Frontend & PWA' },
    role: {
      es: 'Next.js 16, React 19 & Canvas UI',
      en: 'Next.js 16, React 19 & Canvas UI',
    },
    tech: 'React 19 · Next.js 16 · TypeScript',
    detail: {
      es: 'Interfaces web rápidas, PWAs móviles y renderizado 9:16 client-side con HTML5 Canvas y MediaRecorder en NUVRO CLIPS IA.',
      en: 'Fast web apps, mobile PWAs, and $0-GPU client-side 9:16 rendering via HTML5 Canvas + MediaRecorder in NUVRO CLIPS IA.',
    },
    payload: {
      es: `{
  "modulo": "nuvro-clips-ia",
  "stack": ["Next.js 16", "React 19", "TypeScript", "PWA"],
  "render": "HTML5 Canvas + MediaRecorder ($0 GPU)"
}`,
      en: `{
  "module": "nuvro-clips-ia",
  "stack": ["Next.js 16", "React 19", "TypeScript", "PWA"],
  "render": "HTML5 Canvas + MediaRecorder ($0 GPU)"
}`,
    },
    toneVar: 'var(--tone-blue)',
  },
  {
    id: 'api',
    label: { es: '02. Media & Docker', en: '02. Media & Docker' },
    role: {
      es: 'Serverless, Docker & Python FastAPI',
      en: 'Serverless, Docker & Python FastAPI',
    },
    tech: 'FastAPI · FFmpeg · Vercel Serverless',
    detail: {
      es: 'Motor Video Engine 3.0 en NUVRO ASSET STUDIO con yt-dlp, FFmpeg/ffprobe, protección SSRF y preparación de imágenes por lotes.',
      en: 'Video Engine 3.0 in NUVRO ASSET STUDIO combining yt-dlp, FFmpeg/ffprobe, SSRF protection, and batch asset prep.',
    },
    payload: {
      es: `{
  "modulo": "nuvro-asset-studio",
  "runtime": ["Vercel Serverless", "Docker", "Python FastAPI"],
  "seguridad": "validación anti-SSRF + preparación por lotes"
}`,
      en: `{
  "module": "nuvro-asset-studio",
  "runtime": ["Vercel Serverless", "Docker", "Python FastAPI"],
  "security": "SSRF protection + batch processing"
}`,
    },
    toneVar: 'var(--tone-yellow)',
  },
  {
    id: 'crm',
    label: { es: '03. Sales OS & Hacienda', en: '03. Sales OS & E-Invoicing' },
    role: {
      es: '13,300+ LOC · XML XAdES-EPES',
      en: '13,300+ LOC · XAdES-EPES XML',
    },
    tech: 'Supabase · Google Maps · jsPDF · node-forge',
    detail: {
      es: 'Sistema operativo comercial con prospección Google Maps, scoring, PDFs automáticos y facturación electrónica Hacienda CR firmada con XAdES-EPES en Vercel Serverless.',
      en: '13,300+ LOC Sales OS with Google Maps lead discovery, lead scoring, PDF contracts, and Hacienda Costa Rica XML + XAdES-EPES digital signing on Vercel Serverless.',
    },
    payload: {
      es: `{
  "modulo": "nuvro-crm-hacienda",
  "escala": "13,300+ LOC · React 19 + Supabase",
  "facturacion": "XML Hacienda CR + XAdES-EPES (node-forge)"
}`,
      en: `{
  "module": "nuvro-crm-hacienda",
  "scale": "13,300+ LOC · React 19 + Supabase",
  "invoicing": "Costa Rica Hacienda XML + XAdES-EPES"
}`,
    },
    toneVar: 'var(--tone-mint)',
  },
  {
    id: 'ai',
    label: { es: '04. IA Aplicada', en: '04. Applied AI' },
    role: {
      es: 'Gemini Files API, Claude & MCP',
      en: 'Gemini Files API, Claude & MCP',
    },
    tech: 'Gemini · Claude API · MCP',
    detail: {
      es: 'Carga directa móvil a Gemini Files API (evitando el límite de 4.5 MB de Vercel), detección multimodal y flujos con Claude + MCP.',
      en: 'Direct mobile uploads to Gemini Files API (bypassing Vercel 4.5 MB cap), multimodal highlight detection, and Claude + MCP.',
    },
    payload: {
      es: `{
  "modulo": "ai-implementation",
  "modelos": ["Gemini Files API", "Claude API"],
  "protocolos": ["Tool Use", "MCP", "Anthropic Education"]
}`,
      en: `{
  "module": "ai-implementation",
  "models": ["Gemini Files API", "Claude API"],
  "protocols": ["Tool Use", "MCP", "Anthropic Education"]
}`,
    },
    toneVar: 'var(--tone-coral)',
  },
];

export default function Hero() {
  const { lang, pick } = useLanguage();
  const { theme } = useTheme();
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
      className="relative bg-ink-canvas tech-grid-dark overflow-hidden pt-10 md:pt-16 pb-20 md:pb-24 transition-colors duration-200"
    >
      <div
        aria-hidden="true"
        className={`absolute -top-24 -left-24 w-96 h-96 rounded-full blur-[110px] pointer-events-none ${
          theme === 'clean-paper' ? 'bg-[#2046F0]/10' : 'bg-[#2046F0]/15'
        }`}
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-12 w-64 h-64 bg-halftone-dark opacity-40 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Identity */}
          <div className="lg:col-span-6 min-w-0 hero-enter">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="brand-sticker">
                {lang === 'es'
                  ? 'Costa Rica · Remoto & Proyectos Técnicos'
                  : 'Costa Rica · Remote Engineering & AI Builder'}
              </span>
            </div>

            <h1 className="font-display-nuvro text-[clamp(3rem,11vw,6.8rem)] leading-[0.94] tracking-[0.01em] text-[var(--hero-text)] mb-5">
              <span className="block">ANDERSON</span>
              <span className="block text-[var(--hero-text)] relative">
                AGÜERO LARA
                <span
                  aria-hidden="true"
                  className="block h-[6px] w-28 sm:w-40 bg-[#2046F0] mt-2 border-2 border-[#121212] shadow-[3px_3px_0_#FFC83D]"
                />
              </span>
            </h1>

            <p className="font-mono text-sm sm:text-base font-bold uppercase tracking-wider text-[var(--hero-accent)] mb-3">
              Frontend / Full-Stack Developer | AI Implementation
            </p>

            <p className="text-lg sm:text-xl font-semibold text-[var(--hero-highlight)] mb-4 max-w-xl leading-snug">
              {lang === 'es'
                ? 'Desarrollo software. Construyo productos. Implemento inteligencia artificial.'
                : 'Building production web apps, SaaS tools, and multimodal AI workflows.'}
            </p>

            <p className="text-base sm:text-lg text-[var(--hero-muted)] mb-8 max-w-xl leading-relaxed">
              {lang === 'es'
                ? 'Creo aplicaciones en producción con React, Next.js y TypeScript, backends con Docker/FastAPI e integraciones reales con Gemini y Claude API.'
                : 'I ship production React, Next.js & TypeScript products, Docker/FastAPI media backends, and real-world Gemini & Claude API integrations.'}
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
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-4 py-2.5 border-2 border-[var(--hero-panel-border)] bg-[var(--hero-panel-bg)] hover:border-[#2046F0] hover:text-[var(--hero-accent)] text-[var(--hero-text)] text-sm font-mono font-bold transition-colors w-full sm:w-auto"
              >
                <Linkedin size={17} aria-hidden="true" />
                LinkedIn
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--hero-panel-border)] flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-[var(--hero-subtle)]">
              <span>ANDERSON.AL</span>
              <span aria-hidden="true">·</span>
              <span>
                {lang === 'es'
                  ? 'Fundador de NUVRO ENGINEER'
                  : 'Founder of NUVRO ENGINEER'}
              </span>
              <span aria-hidden="true">·</span>
              <span>EF SET C1 · Anthropic Education</span>
            </div>
          </div>

          {/* Right Column: Interactive Developer Environment Composition */}
          <div className="lg:col-span-6 min-w-0 relative hero-enter-delayed">
            <div className="flex items-center justify-between px-1 mb-2">
              <span className="font-mono text-xs font-semibold text-[var(--tone-yellow)]">
                {lang === 'es'
                  ? '→ Seleccioná un módulo para inspeccionar el stack'
                  : '→ Select a module to inspect architecture'}
              </span>
            </div>

            <div className="relative bg-[var(--hero-window-bg)] border-4 border-[var(--card-border)] shadow-[10px_10px_0_#2046F0] overflow-hidden">
              {/* Editor Window Top Bar */}
              <div className="bg-[var(--hero-window-bar)] border-b-3 border-[var(--card-border)] px-4 py-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <span className="w-3 h-3 bg-[#FF5A4E] border border-[#121212]" />
                  <span className="w-3 h-3 bg-[#FFC83D] border border-[#121212]" />
                  <span className="w-3 h-3 bg-[#5EDBB0] border border-[#121212]" />
                  <span className="ml-2 font-mono text-xs text-[var(--hero-subtle)]">
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
                          : 'bg-[var(--hero-panel-bg)] text-[var(--hero-muted)] border-[var(--hero-panel-border)] hover:border-[#2046F0]'
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
                        const activeLabelColor =
                          theme === 'clean-paper' ? '#FFC83D' : '#2046F0';

                        return (
                          <button
                            key={node.id}
                            type="button"
                            onClick={() => setActiveNodeId(node.id)}
                            aria-pressed={isSelected}
                            className={`w-full h-full text-left p-3.5 border-3 transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[var(--hero-active-bg)] text-[var(--hero-active-text)] border-[var(--card-border)] shadow-[4px_4px_0_#FFC83D]'
                                : 'bg-[var(--hero-panel-bg)] text-[var(--hero-text)] border-[var(--hero-panel-border)] hover:border-[#2046F0]'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2 mb-1.5">
                              <span
                                className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider"
                                style={{
                                  color: isSelected
                                    ? activeLabelColor
                                    : node.toneVar,
                                }}
                              >
                                {getNodeIcon(node.id)}
                                {pick(node.label)}
                              </span>
                            </div>
                            <p
                              className={`text-sm font-bold leading-snug ${
                                isSelected
                                  ? 'text-[var(--hero-active-text)]'
                                  : 'text-[var(--hero-text)]'
                              }`}
                            >
                              {pick(node.role)}
                            </p>
                            <p
                              className={`font-mono text-[11px] mt-1 ${
                                isSelected
                                  ? 'text-[var(--hero-active-muted)]'
                                  : 'text-[var(--hero-subtle)]'
                              }`}
                            >
                              {node.tech}
                            </p>
                          </button>
                        );
                      })}
                    </div>

                    <div className="bg-[var(--hero-window-bar)] border-2 border-[var(--hero-panel-border)] p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-bold text-[var(--hero-accent)] uppercase tracking-wider">
                          {lang === 'es' ? 'Nodo activo:' : 'Active node:'}{' '}
                          {pick(activeNode.label)}
                        </span>
                        <span className="font-mono text-[11px] text-[var(--hero-subtle)]">
                          {activeNode.tech}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--hero-muted)] leading-relaxed mb-3">
                        {pick(activeNode.detail)}
                      </p>
                      <pre className="font-mono text-xs text-[var(--hero-muted)] bg-[var(--hero-window-bg)] p-3 border border-[var(--hero-panel-border)] overflow-x-auto leading-relaxed">
                        <code>{pick(activeNode.payload)}</code>
                      </pre>
                    </div>
                  </div>
                )}

                {activeTab === 'codigo' && (
                  <div className="bg-[var(--hero-window-bar)] border-2 border-[var(--hero-panel-border)] p-4 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto">
                    <div className="text-[var(--hero-subtle)] mb-2">
                      src/architecture/anderson.ts
                    </div>
                    <pre className="text-[var(--hero-text)]">
                      <code>
                        {lang === 'es'
                          ? `export const engineerProfile = {
  nombre: "Anderson Agüero Lara",
  rol: "Frontend / Full-Stack Developer | AI Implementation",
  ubicacion: "Costa Rica (UTC-6 · Remoto)",
  ingles: "EF SET C1 Avanzado",
  especialidad: [
    "React 19 + Next.js 16 + TypeScript",
    "Gemini Files API + Canvas / MediaRecorder",
    "Docker + Python (FastAPI) + FFmpeg",
  ],
  productos: [
    "NUVRO ASSET STUDIO",
    "NUVRO CLIPS IA",
    "LEADPILOT",
  ],
} as const;`
                          : `export const engineerProfile = {
  name: "Anderson Agüero Lara",
  role: "Frontend / Full-Stack Developer | AI Implementation",
  location: "Costa Rica (UTC-6 · Remote-ready)",
  english: "EF SET C1 Advanced",
  specialties: [
    "React 19 + Next.js 16 + TypeScript",
    "Gemini Files API + Canvas / MediaRecorder",
    "Docker + Python (FastAPI) + FFmpeg",
  ],
  products: [
    "NUVRO ASSET STUDIO",
    "NUVRO CLIPS IA",
    "LEADPILOT",
  ],
} as const;`}
                      </code>
                    </pre>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="bg-[var(--hero-window-bar)] border-2 border-[var(--hero-panel-border)] p-4 font-mono text-xs sm:text-[13px] leading-relaxed space-y-2.5">
                    <div className="flex items-center gap-2 text-[var(--hero-accent)]">
                      <Terminal size={14} aria-hidden="true" />
                      <span>anderson@nuvro:~/ecosistema</span>
                    </div>
                    <p className="text-[var(--hero-text)] font-semibold">
                      $ inspect --production nuvro-stack
                    </p>
                    <p className="text-[var(--hero-muted)]">
                      → asset-studio:{' '}
                      <span className="text-[var(--tone-yellow)] font-bold">
                        nuvro-asset-studio.vercel.app
                      </span>{' '}
                      (React · FastAPI · Docker · FFmpeg)
                    </p>
                    <p className="text-[var(--hero-muted)]">
                      → clips-ia:{' '}
                      <span className="text-[var(--tone-coral)] font-bold">
                        NUVRO CLIPS IA
                      </span>{' '}
                      (Next.js 16 · Gemini Files API · Canvas 9:16 PWA)
                    </p>
                    <p className="text-[var(--hero-muted)]">
                      → live-crm:{' '}
                      <span className="text-[var(--tone-mint)] font-bold">
                        leadpilot-pi.vercel.app
                      </span>{' '}
                      (Next.js · Supabase)
                    </p>
                    <p className="text-[var(--hero-muted)]">
                      → live-domains:{' '}
                      <span className="text-[var(--tone-yellow)] font-bold">
                        nuvro.shop · fumigadoradds.com · nuvroenginer.site
                      </span>
                    </p>
                    <p className="text-[var(--hero-accent)] font-semibold">
                      {lang === 'es'
                        ? 'Listo para equipos remotos e implementación IA.'
                        : 'Ready for remote engineering teams & AI builds.'}
                    </p>
                  </div>
                )}

                {/* Bottom Quick Bridge Strip */}
                <div className="mt-4 pt-4 border-t border-[var(--hero-panel-border)] flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-[var(--hero-muted)]">
                    <span className="font-mono text-[var(--tone-yellow)] font-bold">
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
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[var(--hero-text)] hover:text-[var(--hero-accent)] transition-colors"
                  >
                    nuvroenginer.site
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signature NUVRO Torn Paper Transition into About Section */}
      <div className="absolute left-0 right-0 bottom-0 z-10">
        <TornEdge
          fill="var(--hero-torn-fill)"
          fiber="var(--hero-torn-fiber)"
          seed={17}
        />
      </div>
    </section>
  );
}
