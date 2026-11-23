import type { ProjectItem } from '../types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'nuvro-crm-hacienda',
    title: 'NUVRO CRM & FACTURACIÓN ELECTRÓNICA',
    subtitle: {
      es: 'Sistema Full-Stack · 13,300+ LOC · Hacienda Costa Rica',
      en: 'Full-Stack Sales OS · 13,300+ LOC · Costa Rica Hacienda E-Invoicing',
    },
    category: {
      es: 'Sistema Full-Stack · 13,300+ LOC',
      en: 'Full-Stack System · 13,300+ LOC',
    },
    filterGroup: 'productos',
    nature: 'producto',
    natureLabel: {
      es: 'Sistema Full-Stack',
      en: 'Full-Stack OS',
    },
    shortDescription: {
      es: 'Sistema operativo comercial con React 19, TypeScript y Supabase (Auth/DB): prospección en Google Maps, scoring de leads, señales de dolor, panel de analítica, generación automática de propuestas y contratos PDF (jsPDF / pdfjs-dist) y facturación electrónica de Hacienda Costa Rica con XML y firma digital XAdES-EPES (xadesjs + node-forge) en Vercel Serverless.',
      en: '13,300+ LOC full-stack sales OS built with React 19, TypeScript, and Supabase (Auth/DB) featuring Google Maps lead discovery, lead scoring, analytics, automated PDF proposal/contract generation (jsPDF/pdfjs-dist), and Costa Rica Hacienda electronic invoicing with XML + XAdES-EPES digital signing (xadesjs + node-forge) on Vercel Serverless.',
    },
    problem: {
      es: 'Operar prospección comercial, propuestas PDF y facturación electrónica oficial de Hacienda (XML firmado con XAdES-EPES) en herramientas desconectadas genera fricción y errores manuales.',
      en: 'Managing lead discovery, PDF contract workflows, and regulated Costa Rica Hacienda XML e-invoicing across disconnected tools creates manual errors and operational friction.',
    },
    solution: {
      es: 'Plataforma unificada de 13,300+ líneas de código con Supabase Auth/DB, prospección vía Google Maps API, scoring + señales de dolor, analítica, motor PDF (jsPDF/pdfjs-dist) y firma criptográfica XAdES-EPES en Vercel Serverless.',
      en: 'Unified 13,300+ LOC architecture combining Supabase Auth/DB, Google Maps API discovery, lead scoring & pain signals, analytics, PDF generation (jsPDF/pdfjs-dist), and XAdES-EPES XML signing on Vercel Serverless.',
    },
    architecturePoints: {
      es: [
        'Prospección y enriquecimiento desde Google Maps API con scoring automatizado y detección de señales de dolor.',
        'Autenticación, control de roles y persistencia relacional en Supabase (Auth/DB) con panel de analítica comercial.',
        'Generación y previsualización automatizada de propuestas comerciales y contratos PDF mediante jsPDF y pdfjs-dist.',
        'Emisión XML para Hacienda Costa Rica con firma digital XAdES-EPES (xadesjs + node-forge) ejecutada en Vercel Serverless.',
      ],
      en: [
        'Google Maps API lead discovery paired with automated lead scoring and pain-signal classification.',
        'Supabase Auth & relational PostgreSQL persistence powering a real-time commercial analytics dashboard.',
        'Automated PDF proposal and contract generation/rendering via jsPDF and pdfjs-dist.',
        'Costa Rica Hacienda XML electronic invoicing with XAdES-EPES cryptographic signing (xadesjs + node-forge) on Vercel Serverless.',
      ],
    },
    stack: {
      es: [
        'React 19',
        'TypeScript',
        'Supabase',
        'Vercel Serverless',
        'XAdES-EPES / Hacienda XML',
        'Google Maps API',
        'jsPDF',
      ],
      en: [
        'React 19',
        'TypeScript',
        'Supabase',
        'Vercel Serverless',
        'XAdES-EPES / Hacienda XML',
        'Google Maps API',
        'jsPDF',
      ],
    },
    previewId: 'nuvro-crm-hacienda',
    passwordProtected: true,
    accessLabel: {
      es: 'Acceso privado',
      en: 'Private access',
    },
    featured: true,
    accentTone: 'blue',
    note: {
      es: 'Acceso privado restringido por contener datos comerciales reales, certificados criptográficos y facturación electrónica.',
      en: 'Private production access restricted to protect live commercial data, cryptographic certificates, and electronic invoicing records.',
    },
  },
  {
    id: 'nuvro-asset-studio',
    title: 'NUVRO ASSET STUDIO',
    subtitle: {
      es: 'Video Engine 3.0 + Image Studio en producción.',
      en: 'Production Video Engine 3.0 + Batch Image Studio.',
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
      es: 'Frontend en React/TypeScript conectado a Vercel Serverless y un servicio Docker en Python (FastAPI) con yt-dlp, FFmpeg/ffprobe, protección SSRF y módulo Image Studio.',
      en: 'React/TypeScript frontend wired to Vercel Serverless and a Dockerized Python (FastAPI) backend with yt-dlp, FFmpeg/ffprobe, SSRF security guards, and Image Studio.',
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
        'Image Studio',
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
        'Image Studio',
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
      es: 'Recortador multimodal de video 9:16 con renderizado en navegador.',
      en: 'Multimodal 9:16 vertical video clipper with client-side browser rendering.',
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
      es: 'CRM web SaaS en producción para centralizar prospectos.',
      en: 'Live SaaS CRM web app for prospect management and follow-ups.',
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
    id: 'fumigadora-dds',
    title: 'FUMIGADORA DDS',
    subtitle: {
      es: 'Sitio comercial en producción para cliente real (7 provincias CR).',
      en: 'Production commercial website for a real client across 7 provinces.',
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
    id: 'nuvro-fit-engineer',
    title: 'NUVRO FIT / NUVRO ENGINEER',
    subtitle: {
      es: 'E-commerce propio, agencia fundada y catálogo Kiss by May (656 productos).',
      en: 'Brand e-commerce, founded studio & 656-SKU Kiss by May digital catalog.',
    },
    category: {
      es: 'E-commerce & Caso real (656 SKUs)',
      en: 'E-Commerce & Client Case (656 SKUs)',
    },
    filterGroup: 'casos',
    nature: 'empresa',
    natureLabel: {
      es: 'E-commerce & Agencia',
      en: 'E-Commerce & Studio',
    },
    shortDescription: {
      es: 'Plataforma e-commerce NUVRO FIT (nuvro.shop) junto al estudio NUVRO ENGINEER y el caso real de identidad y catálogo digital estructurado de 656 productos para Kiss by May.',
      en: 'NUVRO FIT brand e-commerce platform (nuvro.shop) paired with NUVRO ENGINEER studio and the Kiss by May visual system & 656-product digital catalog case study.',
    },
    problem: {
      es: 'Unificar comercio digital con dominio propio y brindar a negocios locales presencia web profesional más catálogos extensos (656 ítems) optimizados para móvil y WhatsApp.',
      en: 'Building a custom-domain storefront alongside a web studio delivering structured large-scale catalogs (656 SKUs) optimized for mobile and WhatsApp.',
    },
    solution: {
      es: 'Tienda web NUVRO FIT de alto contraste en nuvro.shop, ecosistema multipágina NUVRO ENGINEER y despliegue del catálogo comercial de 656 productos de Kiss by May.',
      en: 'High-contrast NUVRO FIT storefront at nuvro.shop, the multi-page NUVRO ENGINEER platform, and delivery of the 656-SKU Kiss by May digital catalog.',
    },
    stack: {
      es: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Catálogo 656 SKUs'],
      en: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', '656-SKU Catalog'],
    },
    image: 'https://www.nuvroenginer.site/assets/brand/nuvro-og-marca-v2.jpg',
    imageFit: 'contain',
    imageAlt: {
      es: 'NUVRO FIT y NUVRO ENGINEER — E-commerce y caso Kiss by May',
      en: 'NUVRO FIT & NUVRO ENGINEER — E-commerce and Kiss by May case study',
    },
    liveUrl: 'https://www.nuvro.shop',
    secondaryUrl: 'https://www.nuvroenginer.site',
    secondaryLabel: {
      es: 'NUVRO ENGINEER',
      en: 'NUVRO ENGINEER',
    },
    repoUrl: 'https://github.com/andolara31-art/nuvroengineer-',
    featured: true,
    accentTone: 'mint',
    note: {
      es: 'Incluye e-commerce en nuvro.shop y el caso real Kiss by May (656 productos) en nuvroenginer.site/casos/kiss-by-may.',
      en: 'Includes NUVRO FIT e-commerce at nuvro.shop and the 656-SKU Kiss by May case study at nuvroenginer.site/casos/kiss-by-may.',
    },
  },
];
