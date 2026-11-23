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
        name: 'React 19 & Next.js 16',
        levelKey: 'professional',
        context: {
          es: 'Arquitectura principal en NUVRO ASSET STUDIO, NUVRO CLIPS IA y LeadPilot',
          en: 'Core architecture across NUVRO ASSET STUDIO, NUVRO CLIPS IA, and LeadPilot',
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
        name: 'HTML5 Canvas & MediaRecorder',
        levelKey: 'projects',
        context: {
          es: 'Renderizado de video 9:16 cliente-side a costo $0 de GPU en NUVRO CLIPS IA',
          en: 'Client-side 9:16 video rendering at $0 cloud GPU cost in NUVRO CLIPS IA',
        },
      },
      {
        name: 'PWA & Web Performance',
        levelKey: 'professional',
        context: {
          es: 'Aplicaciones web instalables, carga móvil y accesibilidad semántica',
          en: 'Installable web apps, mobile speed optimization, and semantic accessibility',
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
        name: 'Vercel Serverless & Vercel Blob',
        levelKey: 'projects',
        context: {
          es: 'Rutas serverless, validación SSRF, almacenamiento de medios y webhooks',
          en: 'Serverless routes, SSRF protection, media blob storage, and webhooks',
        },
      },
      {
        name: 'Supabase / SQL',
        levelKey: 'projects',
        context: {
          es: 'Modelado relacional, autenticación y respaldo para LeadPilot y apps web',
          en: 'Relational modeling, storage, and persistence for LeadPilot and web apps',
        },
      },
      {
        name: 'Docker & Node.js',
        levelKey: 'projects',
        context: {
          es: 'Servicios contenedorizados, entornos de build y tooling full-stack',
          en: 'Containerized backend services, build pipelines, and full-stack tooling',
        },
      },
    ],
  },
  {
    id: 'ai-automation',
    title: { es: 'IA y automatización', en: 'AI & Automation' },
    subtitle: {
      es: 'Integración práctica de modelos multimodales, MCP y flujos operativos.',
      en: 'Practical multimodal LLM integration, MCP workflows, and automation.',
    },
    accent: 'yellow',
    items: [
      {
        name: 'Gemini Files API & Claude API',
        levelKey: 'professional',
        context: {
          es: 'Análisis de video largo en NUVRO CLIPS IA, JSON estructurado y tool use',
          en: 'Long-video analysis in NUVRO CLIPS IA, structured outputs, and tool use',
        },
      },
      {
        name: 'Anthropic MCP & Agent Skills',
        levelKey: 'projects',
        context: {
          es: 'Conexión estandarizada de herramientas y flujos agénticos (Anthropic Education)',
          en: 'Standardized Model Context Protocol integrations and agentic workflows',
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
        name: 'Publicación multiplataforma & APIs',
        levelKey: 'projects',
        context: {
          es: 'Gestión de campañas, webhooks y automatización comercial vía API',
          en: 'Campaign tooling, webhooks, and multi-platform API publishing',
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
    id: 'ai-agents',
    code: 'LAB-02',
    title: {
      es: 'IA Multimodal & Renderizado en Navegador',
      en: 'Multimodal AI & Client-Side Rendering',
    },
    statusKey: 'implemented',
    summary: {
      es: 'Arquitectura híbrida en NUVRO CLIPS IA: subida directa móvil → Gemini Files API (evitando el límite de 4.5 MB de Vercel) y renderizado 9:16 con HTML5 Canvas + MediaRecorder.',
      en: 'Hybrid pipeline in NUVRO CLIPS IA: direct mobile upload to Gemini Files API (bypassing Vercel\'s 4.5 MB cap) plus $0-GPU 9:16 rendering with HTML5 Canvas + MediaRecorder.',
    },
    technologies: ['Next.js 16', 'Gemini Files API', 'Canvas / MediaRecorder', 'Vercel Blob'],
    details: {
      es: [
        'Ingesta directa de video largo desde móvil sin saturar payloads serverless',
        'Detección multimodal de momentos virales y subtítulos sincronizados por frases',
        'Renderizado 9:16 client-side a costo $0 de GPU en la nube y publicación vía API',
      ],
      en: [
        'Direct long-video ingestion from mobile browsers bypassing serverless payload limits',
        'Multimodal highlight detection with phrase-level synchronized captions',
        'Zero-GPU cloud cost 9:16 rendering in-browser plus multi-platform API publishing',
      ],
    },
    architectureNote: {
      es: 'Implementado en NUVRO CLIPS IA (PWA) con acceso protegido por contraseña para resguardar credenciales de API.',
      en: 'Implemented in NUVRO CLIPS IA (PWA) with password-protected live access to safeguard API keys.',
    },
    accent: 'coral',
  },
  {
    id: 'api-integrations',
    code: 'LAB-03',
    title: {
      es: 'Integraciones de APIs, MCP y Webhooks',
      en: 'APIs, MCP & Webhook Integrations',
    },
    statusKey: 'implemented',
    summary: {
      es: 'Conexión entre aplicaciones web, endpoints serverless, almacenamiento Blob/Supabase y canales de publicación o atención directa.',
      en: 'Connecting web interfaces, serverless endpoints, Blob/Supabase storage, and external publishing or messaging APIs.',
    },
    technologies: ['REST APIs', 'Vercel Serverless', 'MCP / Tool Use'],
    details: {
      es: [
        'Publicación multiplataforma vía API y gestión de campañas digitales',
        'Recepción y validación de formularios web con feedback en tiempo real',
        'Estandarización de herramientas con Model Context Protocol (MCP)',
      ],
      en: [
        'Multi-platform API publishing and digital campaign tooling',
        'Real-time form submission, validation, and user feedback',
        'Tool and resource orchestration following Model Context Protocol (MCP)',
      ],
    },
    architectureNote: {
      es: 'Implementado activamente en el ecosistema NUVRO y este portafolio.',
      en: 'Actively running across NUVRO products and this portfolio.',
    },
    accent: 'blue',
  },
  {
    id: 'commercial-tools',
    code: 'LAB-04',
    title: {
      es: 'Herramientas comerciales y CRM SaaS',
      en: 'Commercial Tools & SaaS CRM',
    },
    statusKey: 'implemented',
    summary: {
      es: 'Interfaces enfocadas en ordenar prospectos, gestionar campañas y dar visibilidad a procesos comerciales diarios.',
      en: 'Focused interfaces built to organize leads, manage campaigns, and keep daily commercial pipelines visible.',
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Supabase'],
    details: {
      es: [
        'LeadPilot como aplicación SaaS en vivo para organización de prospectos',
        'Tableros por estado con seguimiento comercial sin fricción',
        'Flujos estructurados orientados a conversión real en producción',
      ],
      en: [
        'LeadPilot live SaaS web application for structured prospect management',
        'Stage-based pipeline views with low-friction follow-up tracking',
        'Structured workflows built for real-world commercial conversion',
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
      es: 'Estructuración de datos heterogéneos (catálogos, medios, campañas) en esquemas TypeScript limpios y mantenibles.',
      en: 'Transforming messy inventories, media assets, and campaigns into clean, strictly typed TypeScript data structures.',
    },
    technologies: ['TypeScript', 'SQL', 'Typed Schemas'],
    details: {
      es: [
        'Separación estricta entre capas de datos, lógica y presentación UI',
        'Catálogos extensos (como 656 ítems en Kiss by May) organizados para lectura clara',
        'Validación de entradas de usuario y URLs antes de procesar o enviar',
      ],
      en: [
        'Clear separation between data schemas, business logic, and UI components',
        'Large catalogs (656 SKUs in Kiss by May) structured for fast mobile browsing',
        'Strict input and URL validation prior to API execution',
      ],
    },
    architectureNote: {
      es: 'Principio: los datos limpios hacen que la interfaz escale sin deuda técnica.',
      en: 'Principle: clean data contracts allow interfaces to scale without tech debt.',
    },
    accent: 'mint',
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
