import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowDown,
  ArrowUpRight,
  Cpu,
  Database,
  Globe,
  Terminal,
  Webhook,
} from 'lucide-react';
import { PixelSprite } from './PixelCrew';
import TornEdge from './TornEdge';
import BatmanPeek from './BatmanPeek';

interface SystemNode {
  id: string;
  label: string;
  role: string;
  tech: string;
  detail: string;
  payload: string;
  tone: string;
}

const SYSTEM_NODES: SystemNode[] = [
  {
    id: 'frontend',
    label: '01. Frontend & UI',
    role: 'Interfaz y experiencia de usuario',
    tech: 'React · TypeScript · Tailwind CSS',
    detail:
      'Componentes accesibles, diseño editorial responsive y sistemas visuales propios como NUVRO ENGINEER.',
    payload: `{
  "modulo": "frontend-system",
  "stack": ["React 19", "TypeScript", "Tailwind"],
  "enfoque": "velocidad, claridad y mobile-first"
}`,
    tone: '#2046F0',
  },
  {
    id: 'api',
    label: '02. APIs & Flujos',
    role: 'Conectores y automatización',
    tech: 'REST APIs · Webhooks · Python',
    detail:
      'Conexión entre formularios web, webhooks, procesamiento de datos y rutas directas hacia WhatsApp.',
    payload: `{
  "modulo": "automation-bridge",
  "entradas": ["Web Forms", "Webhooks"],
  "salidas": ["CRM Pipeline", "WhatsApp Struct"]
}`,
    tone: '#FFC83D',
  },
  {
    id: 'crm',
    label: '03. CRM & Datos',
    role: 'Organización comercial',
    tech: 'Supabase · SQL · LeadPilot',
    detail:
      'Estructuración de prospectos, catálogos comerciales y seguimiento operativo ordenado.',
    payload: `{
  "modulo": "commercial-data",
  "proyectos": ["LeadPilot", "NUVRO CRM (arch)"],
  "persistencia": "PostgreSQL / Supabase"
}`,
    tone: '#5EDBB0',
  },
  {
    id: 'ai',
    label: '04. IA Aplicada',
    role: 'Asistencia y flujos inteligentes',
    tech: 'Claude · Gemini · RAG (estudio)',
    detail:
      'Integración práctica de modelos de lenguaje para automatizar tareas, contenido y prototipos funcionales.',
    payload: `{
  "modulo": "ai-integration",
  "modelos": ["Claude", "Gemini", "ChatGPT"],
  "foco": "RAG, agentes y productividad real"
}`,
    tone: '#FF5A4E',
  },
];

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const [activeTab, setActiveTab] = useState<'nodos' | 'codigo' | 'terminal'>('nodos');
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
      {/* Subtle blueprint glow & halftone corner */}
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
                Costa Rica · The Engineer Behind NUVRO
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
              Desarrollo software. Construyo productos. Integro inteligencia artificial.
            </p>

            <p className="text-base sm:text-lg text-[#C9CDD8] mb-8 max-w-xl leading-relaxed">
              Creo aplicaciones web, herramientas comerciales y automatizaciones que
              transforman ideas en soluciones digitales funcionales.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#projects"
                className="brand-btn brand-btn-yellow w-full sm:w-auto"
              >
                Explorar proyectos
                <ArrowDown size={18} aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="brand-btn brand-btn-dark w-full sm:w-auto"
              >
                Hablemos
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-[#AEB5C4]">
              <span>ANDERSON.AL</span>
              <span aria-hidden="true">·</span>
              <span>Fundador de NUVRO ENGINEER</span>
              <span aria-hidden="true">·</span>
              <span>React · TypeScript · APIs · IA</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Developer Environment Composition */}
          <motion.div
            className="lg:col-span-6 min-w-0 relative"
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Subtle integrated pixel-art sprites perched naturally on top edge */}
            <div
              aria-hidden="true"
              className="flex items-end justify-between px-3 sm:px-4 -mb-1 relative z-20 pointer-events-none"
            >
              <span className="font-hand-nuvro text-lg sm:text-xl text-[#FFC83D] -rotate-2">
                Tocá un nodo del sistema
              </span>
              <div className="flex items-end gap-3 mr-2 sm:mr-4">
                <PixelSprite spriteName="flash" scale={3} className="px-speed" />
                <PixelSprite spriteName="dev" scale={3} />
              </div>
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
                  aria-label="Vistas del entorno de desarrollo"
                  className="flex items-center gap-1.5"
                >
                  {(
                    [
                      { id: 'nodos', label: 'Nodos API' },
                      { id: 'codigo', label: 'sistema.ts' },
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
                  <div className="space-y-6">
                    {/* Connected Nodes Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-4">
                      {SYSTEM_NODES.map((node) => {
                        const isSelected = node.id === activeNode.id;
                        return (
                          <div key={node.id} className="relative">
                            <button
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
                                  {node.label}
                                </span>
                              </div>
                              <p
                                className={`text-sm font-bold leading-snug ${
                                  isSelected ? 'text-[#121212]' : 'text-[#F7F7F4]'
                                }`}
                              >
                                {node.role}
                              </p>
                              <p
                                className={`font-mono text-[11px] mt-1 ${
                                  isSelected ? 'text-[#4A4A46]' : 'text-[#9AA2B4]'
                                }`}
                              >
                                {node.tech}
                              </p>
                            </button>

                            {node.id === 'frontend' && (
                              <BatmanPeek
                                edge="bottom-right"
                                tone="yellow"
                                lines={['React + TS limpio', 'UI sin plantillas']}
                                delay={0.18}
                              />
                            )}
                            {node.id === 'crm' && (
                              <BatmanPeek
                                edge="left-border"
                                tone="dark"
                                lines={['Flujo comercial real', 'Supabase + SQL']}
                                delay={0.32}
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Active Node Inspector */}
                    <div className="relative bg-[#0B0E14] border-2 border-[#2A3142] p-4">
                      <BatmanPeek
                        edge="top-right"
                        tone="dark"
                        lines={[`Módulo: ${activeNode.id}`, 'Inspección en vivo']}
                        delay={0.42}
                      />
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-bold text-[#5EDBB0] uppercase tracking-wider">
                          Nodo activo: {activeNode.label}
                        </span>
                        <span className="font-mono text-[11px] text-[#9AA2B4]">
                          {activeNode.tech}
                        </span>
                      </div>
                      <p className="text-sm text-[#D6D8DF] leading-relaxed mb-3">
                        {activeNode.detail}
                      </p>
                      <pre className="font-mono text-xs text-[#C9CDD8] bg-[#141822] p-3 border border-white/10 overflow-x-auto leading-relaxed">
                        <code>{activeNode.payload}</code>
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
                      <code>{`export const engineerProfile = {
  nombre: "Anderson Agüero Lara",
  marca: "ANDERSON.AL",
  empresaFundada: "NUVRO ENGINEER",
  ubicacion: "Costa Rica",
  especialidad: [
    "Aplicaciones web en React + TypeScript",
    "Herramientas comerciales y CRM",
    "Integración de APIs y automatización",
    "Inteligencia artificial aplicada",
  ],
  proyectosEnVivo: [
    "https://www.nuvroenginer.site",
    "https://leadpilot-pi.vercel.app",
    "https://www.nuvro.shop",
  ],
} as const;`}</code>
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
                      $ inspect --ecosistema nuvro-engineer
                    </p>
                    <p className="text-[#C9CDD8]">
                      → web-principal: <span className="text-[#FFC83D]">nuvroenginer.site</span> (React · Vite · CSS Comic System)
                    </p>
                    <p className="text-[#C9CDD8]">
                      → crm-prospectos: <span className="text-[#5EDBB0]">leadpilot-pi.vercel.app</span> (Next.js · Supabase)
                    </p>
                    <p className="text-[#C9CDD8]">
                      → marca-digital: <span className="text-[#FFC83D]">nuvro.shop</span> (NUVRO FIT)
                    </p>
                    <p className="text-[#C9CDD8]">
                      → propuestas-web: Cafeoteca · Cantaritos · Clandestino · La Catrina Azul
                    </p>
                    <p className="text-[#5EDBB0]">
                      Listo para construir el próximo producto.
                    </p>
                  </div>
                )}

                {/* Bottom Quick Bridge Strip */}
                <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-[#C9CDD8]">
                    <span className="font-mono text-[#FFC83D] font-bold">
                      NUVRO ENGINEER
                    </span>{' '}
                    · Empresa fundada en Costa Rica
                  </div>
                  <a
                    href="https://www.nuvroenginer.site"
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
