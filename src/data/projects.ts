import type { ProjectItem } from '../types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'nuvro-asset-studio',
    title: 'NUVRO ASSET STUDIO',
    category: {
      es: 'App web en vivo / Video Engine 3.0',
      en: 'Live Web App / Video Engine 3.0',
    },
    filterGroup: 'productos',
    nature: 'producto',
    natureLabel: {
      es: 'Producto en vivo',
      en: 'Live Product',
    },
    shortDescription: {
      es: 'Aplicación web en producción con Video Engine 3.0 para preparar imágenes de producto por lotes y descargar videos públicos en MP4 compatible con iPhone.',
      en: 'Production web app powered by Video Engine 3.0 for batch product image preparation and downloading public videos in iPhone-compatible MP4.',
    },
    problem: {
      es: 'Equipos digitales pierden tiempo preparando imágenes por lote y lidiando con descargas de video incompatibles con iOS o utilidades sin validación de seguridad.',
      en: 'Digital teams waste time preparing product image batches and dealing with iOS-incompatible video downloads or unvalidated utilities.',
    },
    solution: {
      es: 'Frontend en React/TypeScript conectado a Vercel Serverless y un servicio Docker en Python (FastAPI) con yt-dlp, FFmpeg/ffprobe, protección SSRF y módulo de preparación de imágenes.',
      en: 'React/TypeScript frontend wired to Vercel Serverless and a Dockerized Python (FastAPI) backend with yt-dlp, FFmpeg/ffprobe, SSRF security guards, and a batch image prep module.',
    },
    stack: {
      es: [
        'React',
        'TypeScript',
        'Vite',
        'Vercel Serverless',
        'Docker',
        'Python (FastAPI)',
        'yt-dlp',
        'FFmpeg/ffprobe',
        'Seguridad SSRF',
        'Preparación de imágenes',
      ],
      en: [
        'React',
        'TypeScript',
        'Vite',
        'Vercel Serverless',
        'Docker',
        'Python (FastAPI)',
        'yt-dlp',
        'FFmpeg/ffprobe',
        'SSRF Security',
        'Batch Image Prep',
      ],
    },
    previewId: 'nuvro-asset-studio',
    liveUrl: 'https://nuvro-asset-studio.vercel.app',
    featured: true,
    accentTone: 'yellow',
  },
  {
    id: 'leadpilot-crm',
    title: 'LEADPILOT',
    category: {
      es: 'CRM Web SaaS / En vivo',
      en: 'Live SaaS CRM',
    },
    filterGroup: 'productos',
    nature: 'producto',
    natureLabel: {
      es: 'SaaS en vivo',
      en: 'Live SaaS',
    },
    shortDescription: {
      es: 'CRM web SaaS en vivo para gestión de prospectos, control de seguimiento y organización comercial en tiempo real.',
      en: 'Live SaaS CRM web application for lead management, pipeline tracking, and structured sales follow-ups.',
    },
    problem: {
      es: 'El seguimiento manual de prospectos en chats y hojas dispersas provoca pérdida de contexto y oportunidades comerciales.',
      en: 'Tracking leads manually across scattered chats and spreadsheets causes lost context and missed commercial opportunities.',
    },
    solution: {
      es: 'Plataforma web centralizada construida con React/Next.js, TypeScript y Supabase para registrar prospectos, visualizar estados y ordenar el pipeline comercial.',
      en: 'Centralized web workspace built with React/Next.js, TypeScript, and Supabase to capture leads, monitor stages, and execute commercial follow-up.',
    },
    stack: {
      es: ['React', 'Next.js', 'TypeScript', 'Supabase'],
      en: ['React', 'Next.js', 'TypeScript', 'Supabase'],
    },
    previewId: 'leadpilot-crm',
    liveUrl: 'https://leadpilot-pi.vercel.app',
    featured: true,
    accentTone: 'mint',
  },
  {
    id: 'nuvro-crm',
    title: 'NUVRO CRM',
    category: {
      es: 'Arquitectura interna / Flujos CRM',
      en: 'Internal Architecture / CRM Workflows',
    },
    filterGroup: 'productos',
    nature: 'arquitectura',
    natureLabel: {
      es: 'Arquitectura interna',
      en: 'Internal Architecture',
    },
    shortDescription: {
      es: 'Arquitectura interna de gestión de prospectos y flujos comerciales diseñada para unificar captura web, calificación y automatización.',
      en: 'Internal lead-management architecture and commercial workflow system engineered to unify web intake, qualification, and automation.',
    },
    problem: {
      es: 'Unificar la captura desde formularios web, reglas de calificación y trazabilidad operativa bajo contratos de datos estrictos.',
      en: 'Unifying multi-channel web form capture, lead scoring rules, and operational traceability under strict typed contracts.',
    },
    solution: {
      es: 'Diseño modular orientado a eventos con esquemas TypeScript, estados de seguimiento y conectores webhook preparados para integrarse con herramientas operativas.',
      en: 'Event-driven modular architecture featuring typed TypeScript schemas, pipeline state machines, and webhook connectors.',
    },
    stack: {
      es: ['TypeScript', 'React', 'PostgreSQL', 'Webhooks / APIs'],
      en: ['TypeScript', 'React', 'PostgreSQL', 'Webhooks / APIs'],
    },
    previewId: 'nuvro-crm',
    accentTone: 'blue',
    note: {
      es: 'Sistema de arquitectura interna de NUVRO ENGINEER documentado a nivel de módulos y flujo de datos.',
      en: 'Internal NUVRO ENGINEER system architecture documented at the module and data-flow level.',
    },
  },
  {
    id: 'nuvro-fit',
    title: 'NUVRO FIT',
    category: {
      es: 'E-commerce de marca / Dominio propio',
      en: 'Brand E-Commerce / Custom Domain',
    },
    filterGroup: 'productos',
    nature: 'producto',
    natureLabel: {
      es: 'Plataforma en vivo',
      en: 'Live Storefront',
    },
    shortDescription: {
      es: 'Plataforma e-commerce de marca con dominio propio enfocada en suplementación deportiva, ropa fitness y experiencia de compra directa.',
      en: 'Custom-domain brand e-commerce platform focused on sports supplementation, fitness apparel, and direct product navigation.',
    },
    problem: {
      es: 'Presentar una línea fitness con identidad visual propia, catálogo claro y conversión directa sin plantillas genéricas.',
      en: 'Launching a fitness brand with a distinct identity, clear catalog browsing, and direct conversion without generic templates.',
    },
    solution: {
      es: 'Tienda web responsive de alto contraste con jerarquía orientada a producto, despliegue en dominio propio y flujo ágil de consultas.',
      en: 'High-contrast responsive storefront deployed on a custom domain with product-first hierarchy and fast inquiry routing.',
    },
    stack: {
      es: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      en: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    },
    previewId: 'nuvro-fit',
    liveUrl: 'https://www.nuvro.shop',
    accentTone: 'mint',
  },
  {
    id: 'fumigadora-dds',
    title: 'FUMIGADORA DDS',
    category: {
      es: 'Cliente real / Producción 24/7',
      en: 'Real Client / Production Site',
    },
    filterGroup: 'casos',
    nature: 'caso-real',
    natureLabel: {
      es: 'Cliente en producción',
      en: 'Client Production',
    },
    shortDescription: {
      es: 'Sitio comercial en producción para cliente real con dominio propio, enfocado en servicios de control de plagas en las 7 provincias de Costa Rica.',
      en: 'Production commercial website for a real client on a custom domain, serving pest-control operations across all 7 provinces of Costa Rica.',
    },
    problem: {
      es: 'El negocio necesitaba presencia digital confiable, respaldo de certificación sanitaria y captura rápida de solicitudes de servicio 24/7.',
      en: 'The company needed a trustworthy web presence highlighting regulatory certification and fast 24/7 service lead capture.',
    },
    solution: {
      es: 'Sitio web comercial optimizado para SEO local, velocidad móvil, detalle claro de cobertura nacional y canal directo de cotización.',
      en: 'Commercial web platform optimized for local SEO, mobile speed, nationwide coverage clarity, and direct quote conversion.',
    },
    stack: {
      es: ['React', 'TypeScript', 'Tailwind CSS', 'SEO Local'],
      en: ['React', 'TypeScript', 'Tailwind CSS', 'Local SEO'],
    },
    previewId: 'fumigadora-dds',
    liveUrl: 'https://www.fumigadoradds.com',
    accentTone: 'coral',
  },
  {
    id: 'nuvro-engineer-kiss-by-may',
    title: 'NUVRO ENGINEER + KISS BY MAY',
    category: {
      es: 'Agencia fundada & Caso real (656 SKUs)',
      en: 'Founded Studio & Client Case (656 SKUs)',
    },
    filterGroup: 'casos',
    nature: 'empresa',
    natureLabel: {
      es: 'Agencia & Caso real',
      en: 'Agency & Case Study',
    },
    shortDescription: {
      es: 'Agencia de desarrollo fundada en Costa Rica y caso real de presencia comercial junto al catálogo digital estructurado de 656 productos para Kiss by May.',
      en: 'Founded software studio in Costa Rica paired with a real commercial case study featuring a structured 656-product digital catalog for Kiss by May.',
    },
    problem: {
      es: 'Negocios locales requerían una presencia web profesional y catálogos extensos (656 ítems con precios en colones) fáciles de consultar desde móvil.',
      en: 'Local businesses needed professional web architecture and large inventories (656 priced SKUs) formatted for instant mobile browsing.',
    },
    solution: {
      es: 'Plataforma web de NUVRO ENGINEER con identidad propia, demostraciones interactivas y despliegue del caso real de catálogo e identidad comercial Kiss by May.',
      en: 'Custom NUVRO ENGINEER platform with interactive demos plus delivery of the Kiss by May visual system and 656-item digital catalog.',
    },
    stack: {
      es: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Arquitectura UI'],
      en: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'UI Architecture'],
    },
    image: 'https://www.nuvroenginer.site/assets/brand/nuvro-og-marca-v2.jpg',
    imageFit: 'contain',
    imageAlt: {
      es: 'NUVRO ENGINEER — Agencia fundada y caso real Kiss by May',
      en: 'NUVRO ENGINEER — Founded studio and Kiss by May case study',
    },
    liveUrl: 'https://www.nuvroenginer.site',
    repoUrl: 'https://github.com/andolara31-art/nuvroengineer-',
    featured: true,
    accentTone: 'blue',
    note: {
      es: 'Incluye el caso publicado en nuvroenginer.site/casos/kiss-by-may con catálogo digital de 656 productos.',
      en: 'Includes the published case study at nuvroenginer.site/casos/kiss-by-may featuring a 656-product digital catalog.',
    },
  },
];
