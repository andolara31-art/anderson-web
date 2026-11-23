import type { ProjectItem } from '../types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'nuvro-asset-studio',
    title: 'NUVRO ASSET STUDIO',
    subtitle: {
      es: 'Estudio web de preparación de imágenes y descarga de video compatible con iPhone.',
      en: 'Production web studio for batch image preparation and iPhone-ready video processing.',
    },
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
    id: 'nuvro-clips-ia',
    title: 'NUVRO CLIPS IA',
    subtitle: {
      es: 'Recortador de videos verticales 9:16 con IA multimodal y renderizado en navegador.',
      en: 'Multimodal AI 9:16 vertical video clipper with client-side browser rendering.',
    },
    category: {
      es: 'Producto IA · PWA',
      en: 'AI Product · PWA',
    },
    filterGroup: 'productos',
    nature: 'producto',
    natureLabel: {
      es: 'Producto IA · PWA',
      en: 'AI Product · PWA',
    },
    shortDescription: {
      es: 'Aplicación full-stack (Next.js 16, React 19, TypeScript) que sube videos largos directo desde el móvil a Gemini Files API (evitando el límite de 4.5 MB de Vercel), detecta momentos virales con subtítulos por frases y renderiza clips 9:16 en el navegador con HTML5 Canvas y MediaRecorder (costo $0 de GPU). Incluye Vercel Blob, gestión de campañas y publicación multiplataforma vía API.',
      en: 'Full-stack Next.js 16 / React 19 / TypeScript PWA that uploads long videos directly from mobile browsers to the Gemini Files API (bypassing Vercel\'s 4.5 MB cap), detects viral moments with phrase-level captions, and renders 9:16 clips client-side via HTML5 Canvas + MediaRecorder ($0 cloud GPU cost), with Vercel Blob storage, campaign tools, and multi-platform API publishing.',
    },
    problem: {
      es: 'Subir videos largos desde móvil suele chocar contra el límite de 4.5 MB en funciones serverless y depender de servidores GPU encarece el renderizado de clips verticales.',
      en: 'Uploading long mobile videos hits Vercel\'s 4.5 MB serverless payload ceiling, while cloud GPU transcoding makes vertical clip rendering expensive.',
    },
    solution: {
      es: 'Carga directa cliente → Gemini Files API, análisis multimodal con detección de momentos virales y subtítulos por frases, renderizado local 9:16 mediante HTML5 Canvas + MediaRecorder ($0 GPU), Vercel Blob, gestión de campañas y publicación vía API.',
      en: 'Direct browser-to-Gemini Files API upload, multimodal viral-moment & phrase-caption detection, $0 GPU client-side 9:16 rendering with HTML5 Canvas + MediaRecorder, Vercel Blob storage, campaign management, and multi-platform API publishing.',
    },
    architecturePoints: {
      es: [
        'Ingesta directa móvil → Gemini Files API sin pasar por el payload de 4.5 MB de Vercel.',
        'IA multimodal para detectar fragmentos virales con marcas de tiempo y subtítulos por frases.',
        'Renderizado 9:16 100% en navegador con HTML5 Canvas + MediaRecorder (costo $0 de GPU).',
        'Almacenamiento con Vercel Blob, gestión de campañas, publicación multiplataforma vía API e instalable como PWA.',
      ],
      en: [
        'Direct mobile-to-Gemini Files API upload bypassing Vercel\'s 4.5 MB serverless payload cap.',
        'Multimodal AI detection of high-retention moments with phrase-level synchronized captions.',
        'Client-side 9:16 video rendering via HTML5 Canvas + MediaRecorder ($0 cloud GPU cost).',
        'Vercel Blob persistence, campaign manager, multi-platform API publishing, and installable PWA.',
      ],
    },
    stack: {
      es: [
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Gemini Files API',
        'Canvas / MediaRecorder',
        'Vercel Blob',
        'PWA',
      ],
      en: [
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Gemini Files API',
        'Canvas / MediaRecorder',
        'Vercel Blob',
        'PWA',
      ],
    },
    previewId: 'nuvro-clips-ia',
    liveUrl: 'https://app-six-psi-64.vercel.app/',
    passwordProtected: true,
    featured: true,
    accentTone: 'coral',
    note: {
      es: 'Acceso en vivo protegido por contraseña para resguardar credenciales de API (Gemini y publicación).',
      en: 'Live deployment is password-protected to safeguard API credentials (Gemini & publishing keys).',
    },
  },
  {
    id: 'leadpilot-crm',
    title: 'LEADPILOT',
    subtitle: {
      es: 'CRM SaaS en producción para centralizar prospectos y seguimiento comercial.',
      en: 'Live SaaS CRM for centralizing leads and commercial follow-up workflows.',
    },
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
    id: 'nuvro-fit',
    title: 'NUVRO FIT',
    subtitle: {
      es: 'Plataforma e-commerce de marca con dominio propio en Costa Rica.',
      en: 'Custom-domain fitness e-commerce storefront built for high-contrast browsing.',
    },
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
    subtitle: {
      es: 'Sitio comercial en producción para cliente real con cobertura en las 7 provincias.',
      en: 'Production client website covering nationwide 24/7 pest-control operations.',
    },
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
    subtitle: {
      es: 'Agencia de software fundada y caso real de catálogo digital (656 productos).',
      en: 'Founded web agency & live 656-SKU digital catalog commercial case study.',
    },
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
