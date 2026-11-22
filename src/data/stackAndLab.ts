import type { LabModule, TechCategory } from '../types';

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'frontend',
    title: { es: 'Frontend', en: 'Frontend' },
    subtitle: {
      es: 'Interfaces rápidas, accesibles y sistemas visuales con personalidad.',
      en: 'Fast, accessible interfaces and purposeful visual design systems.',
    },
    accent: 'blue',
    items: [
      {
        name: 'React',
        levelKey: 'professional',
        context: {
          es: 'Arquitectura principal en NUVRO ASSET STUDIO, NUVRO ENGINEER y apps web',
          en: 'Core architecture across NUVRO ASSET STUDIO, NUVRO ENGINEER, and web apps',
        },
      },
      {
        name: 'TypeScript',
        levelKey: 'professional',
        context: {
          es: 'Tipado estricto de datos, componentes y contratos de interfaz',
          en: 'Strict type contracts for data models, UI components, and API payloads',
        },
      },
      {
        name: 'Tailwind CSS',
        levelKey: 'professional',
        context: {
          es: 'Sistemas de diseño, layouts responsive y tokens visuales',
          en: 'Design systems, responsive layouts, and custom visual tokens',
        },
      },
      {
        name: 'JavaScript',
        levelKey: 'professional',
        context: {
          es: 'Lógica cliente, manipulación DOM y utilidades web',
          en: 'Client-side logic, DOM workflows, and browser utilities',
        },
      },
      {
        name: 'HTML & CSS',
        levelKey: 'professional',
        context: {
          es: 'HTML semántico, SVG procedural, animaciones CSS y accesibilidad',
          en: 'Semantic HTML, procedural SVGs, CSS motion, and accessibility',
        },
      },
    ],
  },
  {
    id: 'backend',
    title: { es: 'Backend y datos', en: 'Backend & Data' },
    subtitle: {
      es: 'Persistencia, endpoints serverless, Docker y procesamiento seguro.',
      en: 'Persistence, serverless endpoints, Docker services, and secure processing.',
    },
    accent: 'mint',
    items: [
      {
        name: 'Python (FastAPI) & FFmpeg',
        levelKey: 'projects',
        context: {
          es: 'Motor media contenedorizado en Docker para NUVRO ASSET STUDIO (yt-dlp, ffprobe)',
          en: 'Dockerized media engine for NUVRO ASSET STUDIO (FastAPI, yt-dlp, ffprobe)',
        },
      },
      {
        name: 'APIs REST / Vercel Serverless',
        levelKey: 'projects',
        context: {
          es: 'Endpoints serverless, validación SSRF, formularios y webhooks',
          en: 'Serverless routes, SSRF guards, form pipelines, and webhooks',
        },
      },
      {
        name: 'Supabase / SQL',
        levelKey: 'projects',
        context: {
          es: 'Modelado relacional, almacenamiento y respaldo para LeadPilot y apps web',
          en: 'Relational modeling, storage, and persistence for LeadPilot and web apps',
        },
      },
      {
        name: 'Docker & Node.js',
        levelKey: 'projects',
        context: {
          es: 'Servicios contenedorizados, entornos de build y scripting',
          en: 'Containerized backend services, build pipelines, and tooling scripts',
        },
      },
    ],
  },
  {
    id: 'ai-automation',
    title: { es: 'IA y automatización', en: 'AI & Automation' },
    subtitle: {
      es: 'Integración práctica de modelos, procesamiento por lotes y flujos operativos.',
      en: 'Practical LLM workflows, batch pipelines, and operational automation.',
    },
    accent: 'yellow',
    items: [
      {
        name: 'Claude / Gemini / ChatGPT',
        levelKey: 'professional',
        context: {
          es: 'Asistencia técnica, generación estructurada y diseño de prompts',
          en: 'Engineering workflows, structured outputs, and prompt architecture',
        },
      },
      {
        name: 'Integración de modelos IA',
        levelKey: 'projects',
        context: {
          es: 'Prototipos LLM, flujos RAG y automatización de contenido comercial',
          en: 'LLM prototypes, RAG workflows, and commercial content automation',
        },
      },
      {
        name: 'Procesamiento por lotes',
        levelKey: 'projects',
        context: {
          es: 'Preparación de imágenes de producto y normalización multimedia',
          en: 'Batch product image preparation and media format normalization',
        },
      },
      {
        name: 'Flujos de automatización',
        levelKey: 'projects',
        context: {
          es: 'Conexión de formularios web, captura de leads y rutas a WhatsApp',
          en: 'Connecting web forms, lead capture, and structured WhatsApp handoffs',
        },
      },
    ],
  },
  {
    id: 'design-deploy',
    title: { es: 'Diseño y despliegue', en: 'Design & Deployment' },
    subtitle: {
      es: 'Del concepto visual a producción en Vercel y control de versiones.',
      en: 'From visual systems to Vercel production and Git workflows.',
    },
    accent: 'coral',
    items: [
      {
        name: 'Git & GitHub',
        levelKey: 'professional',
        context: {
          es: 'Control de versiones y repositorios organizados por proyecto',
          en: 'Version control and structured repositories per product',
        },
      },
      {
        name: 'Vercel',
        levelKey: 'professional',
        context: {
          es: 'Despliegue continuo, funciones serverless y sitios en producción',
          en: 'Continuous deployment, serverless functions, and production hosting',
        },
      },
      {
        name: 'Figma',
        levelKey: 'projects',
        context: {
          es: 'Exploración visual, prototipado rápido y sistemas de marca',
          en: 'Visual exploration, rapid prototyping, and brand systems',
        },
      },
      {
        name: 'Vite',
        levelKey: 'professional',
        context: {
          es: 'Empaquetado rápido y optimización de aplicaciones React',
          en: 'Fast bundling and production optimization for React apps',
        },
      },
    ],
  },
];

export const BUILD_LAB_MODULES: LabModule[] = [
  {
    id: 'python-automation',
    code: 'LAB-01',
    title: {
      es: 'Motores Media con Python & Docker',
      en: 'Python & Docker Media Engines',
    },
    statusKey: 'implemented',
    summary: {
      es: 'Servicios backend con FastAPI, FFmpeg/ffprobe y yt-dlp contenedorizados en Docker para procesamiento multimedia compatible con iOS.',
      en: 'Dockerized FastAPI services with FFmpeg/ffprobe and yt-dlp built for iPhone-compatible media processing and asset prep.',
    },
    technologies: ['Python (FastAPI)', 'Docker', 'FFmpeg/ffprobe', 'yt-dlp'],
    details: {
      es: [
        'Video Engine 3.0 en NUVRO ASSET STUDIO para salida MP4 compatible con iPhone',
        'Validación de URLs y protección SSRF antes de descargar o transcodificar medios',
        'Preparación y optimización de imágenes de producto por lotes',
      ],
      en: [
        'Video Engine 3.0 in NUVRO ASSET STUDIO delivering iPhone-compatible MP4 output',
        'URL validation and SSRF protection prior to fetching or transcoding external media',
        'Batch preparation and export workflows for product imagery',
      ],
    },
    architectureNote: {
      es: 'En producción: desplegado en NUVRO ASSET STUDIO combinando frontend Vite + Vercel Serverless + servicio Docker.',
      en: 'In production: deployed inside NUVRO ASSET STUDIO combining a Vite frontend, Vercel Serverless, and Docker.',
    },
    accent: 'yellow',
  },
  {
    id: 'api-integrations',
    code: 'LAB-02',
    title: {
      es: 'Integraciones de APIs y Webhooks',
      en: 'API & Webhook Integrations',
    },
    statusKey: 'implemented',
    summary: {
      es: 'Conexión entre sitios web, endpoints serverless, formularios estructurados y canales de atención directa.',
      en: 'Connecting web interfaces, serverless endpoints, structured forms, and direct customer messaging channels.',
    },
    technologies: ['REST APIs', 'Vercel Serverless', 'Webhooks'],
    details: {
      es: [
        'Recepción y validación de formularios web con feedback en tiempo real',
        'Generación de mensajes prellenados y estructurados para WhatsApp',
        'Consumo seguro de endpoints y activos desde frontend tipado',
      ],
      en: [
        'Real-time form submission, validation, and user feedback',
        'Structured pre-filled WhatsApp handoff payloads',
        'Type-safe REST consumption and serverless proxy routing',
      ],
    },
    architectureNote: {
      es: 'Implementado activamente en el ecosistema NUVRO ENGINEER y este portafolio.',
      en: 'Actively running across NUVRO ENGINEER products and this portfolio.',
    },
    accent: 'blue',
  },
  {
    id: 'ai-agents',
    code: 'LAB-03',
    title: {
      es: 'Aplicaciones con IA y Agentes',
      en: 'Applied AI & Agentic Systems',
    },
    statusKey: 'experimenting',
    summary: {
      es: 'Exploración de arquitecturas RAG, flujos agénticos y asistentes especializados conectados a conocimiento real de negocio.',
      en: 'Designing RAG pipelines, agentic workflows, and specialized assistants grounded in real business data.',
    },
    technologies: ['Claude', 'Gemini', 'RAG / Context'],
    details: {
      es: [
        'Diseño de prompts estructurados con salida verificable y sin alucinaciones',
        'Rutas de calificación inicial de consultas comerciales',
        'Patrones RAG y flujos agénticos (formación IBM RAG & Agentic AI)',
      ],
      en: [
        'Structured prompt contracts designed for verifiable, deterministic outputs',
        'Lead-qualification and customer triage workflows',
        'RAG and multi-step agent patterns (IBM RAG & Agentic AI foundation)',
      ],
    },
    architectureNote: {
      es: 'Estado: investigación aplicada y diseño de casos de uso reales para equipos remotos y pymes.',
      en: 'Status: applied R&D focused on practical automation for remote teams and SMBs.',
    },
    accent: 'mint',
  },
  {
    id: 'commercial-tools',
    code: 'LAB-04',
    title: {
      es: 'Herramientas comerciales y CRM',
      en: 'Commercial Tools & CRM',
    },
    statusKey: 'implemented',
    summary: {
      es: 'Interfaces enfocadas en ordenar prospectos, presentar propuestas y dar visibilidad a procesos comerciales diarios.',
      en: 'Focused interfaces built to organize leads, structure proposals, and keep daily commercial pipelines visible.',
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Supabase'],
    details: {
      es: [
        'LeadPilot como aplicación web en vivo para organización de prospectos',
        'Tableros por estado con seguimiento comercial sin fricción',
        'Formularios guiados que filtran requerimientos antes de cotizar',
      ],
      en: [
        'LeadPilot live web application for structured prospect management',
        'Stage-based pipeline views with low-friction follow-up tracking',
        'Guided intake flows to scope requirements before quoting',
      ],
    },
    architectureNote: {
      es: 'Prioridad: herramientas claras que un equipo comercial adopta desde el primer día.',
      en: 'Priority: clean operational tools a team actually uses every day.',
    },
    accent: 'yellow',
  },
  {
    id: 'data-processing',
    code: 'LAB-05',
    title: {
      es: 'Procesamiento de información',
      en: 'Data & Catalog Modeling',
    },
    statusKey: 'domain',
    summary: {
      es: 'Estructuración de datos heterogéneos (catálogos, menús, especificaciones) en esquemas TypeScript limpios y mantenibles.',
      en: 'Transforming messy inventories, menus, and specs into clean, strictly typed TypeScript data structures.',
    },
    technologies: ['TypeScript', 'SQL', 'Typed Schemas'],
    details: {
      es: [
        'Separación estricta entre capas de datos, lógica y presentación UI',
        'Catálogos extensos (como 656 ítems en Kiss by May) organizados para lectura clara',
        'Validación de entradas de usuario antes de procesar o enviar',
      ],
      en: [
        'Clear separation between data schemas, business logic, and UI components',
        'Large catalogs (656 SKUs in Kiss by May) structured for fast mobile browsing',
        'Input sanitization and schema checks prior to API execution',
      ],
    },
    architectureNote: {
      es: 'Principio: los datos limpios hacen que la interfaz escale sin deuda técnica.',
      en: 'Principle: clean data contracts allow interfaces to scale without tech debt.',
    },
    accent: 'coral',
  },
  {
    id: 'experimental-ui',
    code: 'LAB-06',
    title: {
      es: 'Sistemas UI y Rendimiento Web',
      en: 'UI Systems & Web Performance',
    },
    statusKey: 'implemented',
    summary: {
      es: 'Diseño de interfaces con identidad editorial propia, SVG procedural y accesibilidad real sin sacrificar velocidad.',
      en: 'Custom editorial UI systems, procedural SVG graphics, and semantic accessibility without sacrificing speed.',
    },
    technologies: ['React', 'Tailwind CSS', 'SVG Procedural'],
    details: {
      es: [
        'Bordes de papel rasgado determinísticos con semilla fija (sin saltos de hidratación)',
        'Navegación por teclado, contraste alto y soporte para prefers-reduced-motion',
        'Arquitectura bilingüe ES / EN pensada para reclutadores internacionales',
      ],
      en: [
        'Deterministic seeded SVG torn-paper edges with zero layout shift',
        'Keyboard navigation, high contrast ratios, and prefers-reduced-motion support',
        'Full ES / EN bilingual architecture for international technical teams',
      ],
    },
    architectureNote: {
      es: 'La identidad visual siempre respeta rendimiento, legibilidad y semántica web.',
      en: 'Visual identity always serves performance, legibility, and web standards.',
    },
    accent: 'blue',
  },
];
