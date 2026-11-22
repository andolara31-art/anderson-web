import type { LabModule, TechCategory } from '../types';

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces rápidas, accesibles y sistemas visuales con personalidad.',
    accent: 'blue',
    items: [
      {
        name: 'React',
        level: 'Uso profesional',
        context: 'Arquitectura principal en NUVRO ENGINEER, webs y apps comerciales',
      },
      {
        name: 'TypeScript',
        level: 'Uso profesional',
        context: 'Tipado estricto de datos, componentes y contratos de interfaz',
      },
      {
        name: 'Tailwind CSS',
        level: 'Uso profesional',
        context: 'Sistemas de diseño, layouts responsive y tokens visuales',
      },
      {
        name: 'JavaScript',
        level: 'Uso profesional',
        context: 'Lógica cliente, manipulación DOM y utilidades web',
      },
      {
        name: 'HTML y CSS',
        level: 'Uso profesional',
        context: 'HTML semántico, SVG procedural, animaciones CSS y accesibilidad',
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend y datos',
    subtitle: 'Persistencia, integración de servicios y flujos de información.',
    accent: 'mint',
    items: [
      {
        name: 'APIs REST / Webhooks',
        level: 'Uso en proyectos',
        context: 'Integración de formularios, endpoints externos y mensajería',
      },
      {
        name: 'Supabase',
        level: 'Uso en proyectos',
        context: 'Base de datos, almacenamiento de activos y respaldo para apps web',
      },
      {
        name: 'Node.js',
        level: 'Uso en proyectos',
        context: 'Entornos de build, scripting y servicios backend ligeros',
      },
      {
        name: 'Bases de datos SQL',
        level: 'Uso en proyectos',
        context: 'Modelado relacional para prospectos, catálogos y registros',
      },
    ],
  },
  {
    id: 'ai-automation',
    title: 'IA y automatización',
    subtitle: 'Integración práctica de modelos, Python y flujos operativos.',
    accent: 'yellow',
    items: [
      {
        name: 'Claude / Gemini / ChatGPT',
        level: 'Uso profesional',
        context: 'Asistencia técnica, generación estructurada y diseño de prompts',
      },
      {
        name: 'Integración de modelos IA',
        level: 'Uso en proyectos',
        context: 'Generación visual asistida, contenido comercial y prototipos LLM',
      },
      {
        name: 'Python',
        level: 'Exploración',
        context: 'Scripts de automatización, procesamiento de datos y prototipos IA',
      },
      {
        name: 'Flujos de automatización',
        level: 'Uso en proyectos',
        context: 'Conexión de formularios web, captura de leads y rutas a WhatsApp',
      },
    ],
  },
  {
    id: 'design-deploy',
    title: 'Diseño y despliegue',
    subtitle: 'Del concepto visual a producción en Vercel y control de versiones.',
    accent: 'coral',
    items: [
      {
        name: 'GitHub',
        level: 'Uso profesional',
        context: 'Control de versiones y repositorios organizados por proyecto',
      },
      {
        name: 'Vercel',
        level: 'Uso profesional',
        context: 'Despliegue continuo, previews por rama y sitios en producción',
      },
      {
        name: 'Figma',
        level: 'Uso en proyectos',
        context: 'Exploración visual, prototipado rápido y sistemas de marca',
      },
      {
        name: 'Vite',
        level: 'Uso profesional',
        context: 'Empaquetado rápido y optimización de aplicaciones React',
      },
    ],
  },
];

export const BUILD_LAB_MODULES: LabModule[] = [
  {
    id: 'python-automation',
    code: 'LAB-01',
    title: 'Automatizaciones con Python',
    status: 'Área de experimentación',
    summary:
      'Scripts orientados a limpiar datos, transformar catálogos y reducir tareas repetitivas entre archivos y plataformas.',
    technologies: ['Python', 'JSON / CSV', 'Scripts CLI'],
    details: [
      'Normalización de listados de productos y precios para catálogos web',
      'Automatización de preparación de activos e imágenes por lotes',
      'Prototipos de conectores ligeros para tareas operativas',
    ],
    architectureNote:
      'Enfoque: usar Python como puente rápido para tareas donde una interfaz manual toma horas.',
    accent: 'yellow',
  },
  {
    id: 'api-integrations',
    code: 'LAB-02',
    title: 'Integraciones de APIs y Webhooks',
    status: 'Implementado en proyectos',
    summary:
      'Conexión entre sitios web, formularios estructurados, almacenamiento en la nube y canales de atención como WhatsApp.',
    technologies: ['REST APIs', 'Web3Forms', 'Supabase Storage'],
    details: [
      'Recepción y validación de formularios web con feedback en tiempo real',
      'Generación de mensajes prellenados y estructurados para WhatsApp',
      'Consumo seguro de activos y datos desde frontend tipado',
    ],
    architectureNote:
      'Implementado activamente en el ecosistema NUVRO ENGINEER y este portafolio.',
    accent: 'blue',
  },
  {
    id: 'ai-agents',
    code: 'LAB-03',
    title: 'Aplicaciones con IA y Agentes',
    status: 'Área de experimentación',
    summary:
      'Exploración de arquitecturas RAG, flujos agénticos y asistentes especializados conectados a conocimiento real de negocio.',
    technologies: ['Claude', 'Gemini', 'RAG / Contexto'],
    details: [
      'Diseño de prompts estructurados con salida verificable y sin alucinaciones',
      'Rutas de calificación inicial de consultas comerciales',
      'Estudio de patrones RAG y agentes (IBM RAG & Agentic AI)',
    ],
    architectureNote:
      'Estado: investigación aplicada y diseño de casos de uso reales para pymes.',
    accent: 'mint',
  },
  {
    id: 'commercial-tools',
    code: 'LAB-04',
    title: 'Herramientas comerciales y CRM',
    status: 'Implementado en proyectos',
    summary:
      'Interfaces enfocadas en ordenar prospectos, presentar propuestas y dar visibilidad a procesos comerciales diarios.',
    technologies: ['React', 'TypeScript', 'Supabase'],
    details: [
      'LeadPilot como aplicación web desplegada para organización de prospectos',
      'NUVRO CRM en diseño estructural para unificar flujos internos',
      'Formularios guiados que filtran requerimientos antes de cotizar',
    ],
    architectureNote:
      'Prioridad: herramientas simples que un negocio realmente use todos los días.',
    accent: 'yellow',
  },
  {
    id: 'data-processing',
    code: 'LAB-05',
    title: 'Procesamiento de información',
    status: 'Dominio técnico',
    summary:
      'Estructuración de datos heterogéneos (catálogos, menús, especificaciones) en esquemas TypeScript limpios y mantenibles.',
    technologies: ['TypeScript', 'SQL', 'Estructuras tipadas'],
    details: [
      'Separación estricta entre capas de datos, lógica y presentación UI',
      'Catálogos extensos (como 656 ítems en Kiss by May) organizados para lectura clara',
      'Validación de entradas de usuario antes de procesar o enviar',
    ],
    architectureNote:
      'Principio: los datos limpios hacen que la interfaz escale sin deuda técnica.',
    accent: 'coral',
  },
  {
    id: 'experimental-ui',
    code: 'LAB-06',
    title: 'Interfaces experimentales',
    status: 'Implementado en proyectos',
    summary:
      'Exploración visual combinando ingeniería frontend, estética cómic, bordes rasgados SVG y detalles pixel art sin perder accesibilidad.',
    technologies: ['SVG Procedural', 'CSS Motion', 'React'],
    details: [
      'Bordes de papel rasgado determinísticos con semilla fija (sin saltos de hidratación)',
      'Personajes pixel art dibujados en SVG píxel a píxel con prefers-reduced-motion',
      'Microinteracciones táctiles de alto contraste y accesibilidad por teclado',
    ],
    architectureNote:
      'La creatividad visual siempre respeta rendimiento, legibilidad y semántica web.',
    accent: 'blue',
  },
];
