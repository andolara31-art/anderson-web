import type { ProjectItem } from '../types';

export const PROJECTS: ProjectItem[] = [
  {
    id: 'nuvro-engineer',
    title: 'NUVRO ENGINEER',
    category: 'Plataforma empresarial / Desarrollo web',
    filterGroup: 'productos',
    nature: 'empresa',
    natureLabel: 'Empresa fundada',
    shortDescription:
      'Ecosistema web y plataforma comercial de soluciones digitales, automatización e inteligencia artificial para negocios en Costa Rica.',
    problem:
      'Muchos negocios locales dependen únicamente de redes sociales sin una estructura web clara para explicar sus servicios, capturar consultas y presentar demostraciones interactivas.',
    solution:
      'Diseño y desarrollo de una plataforma multipágina con identidad cómic tecnológica propia, demostraciones interactivas de menús y webs, buscador interno, casos reales y flujo directo a WhatsApp.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: 'https://www.nuvroenginer.site/assets/brand/nuvro-og-marca-v2.jpg',
    imageAlt: 'Identidad visual y plataforma web de NUVRO ENGINEER',
    liveUrl: 'https://www.nuvroenginer.site',
    repoUrl: 'https://github.com/andolara31-art/nuvroengineer-',
    featured: true,
    accentTone: 'blue',
  },
  {
    id: 'leadpilot-crm',
    title: 'LeadPilot',
    category: 'Aplicación comercial / CRM',
    filterGroup: 'productos',
    nature: 'producto',
    natureLabel: 'Producto en vivo',
    shortDescription:
      'Herramienta web orientada a organizar prospectos y dar seguimiento estructurado a procesos comerciales.',
    problem:
      'El seguimiento manual de prospectos en chats y hojas dispersas provoca pérdida de contexto y oportunidades comerciales.',
    solution:
      'Interfaz centralizada para registrar prospectos, visualizar estados de seguimiento y ordenar el flujo comercial en un entorno web ágil.',
    stack: ['Next.js', 'TypeScript', 'Supabase'],
    image:
      'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/hf_20260315_144821_292329d5-191d-46bd-a75f-d73a0598a277%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvaGZfMjAyNjAzMTVfMTQ0ODIxXzI5MjMyOWQ1LTE5MWQtNDZiZC1hNzVmLWQ3M2EwNTk4YTI3NyAoMSkucG5nIiwiaWF0IjoxNzczNTkyNjIwLCJleHAiOjE4MDUxMjg2MjB9.gtFos3VqGtj9tnp9mWDrETztCnJFvngAMRKkND4vdyc',
    imageAlt: 'Interfaz de LeadPilot para gestión de prospectos',
    liveUrl: 'https://leadpilot-pi.vercel.app/',
    featured: true,
    accentTone: 'yellow',
  },
  {
    id: 'nuvro-fit',
    title: 'NUVRO FIT',
    category: 'Comercio digital / Experiencia web',
    filterGroup: 'productos',
    nature: 'producto',
    natureLabel: 'Proyecto de marca',
    shortDescription:
      'Plataforma digital de marca enfocada en suplementación deportiva, rendimiento físico y experiencia visual directa.',
    problem:
      'Comunicar una propuesta fitness con identidad propia y navegación clara para presentar catálogo y posicionamiento de marca.',
    solution:
      'Experiencia web de alto contraste orientada a producto, jerarquía tipográfica directa y presentación enfocada en conversión.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    image:
      'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/image.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvaW1hZ2Uud2VicCIsImlhdCI6MTc3MzYwNjU5MiwiZXhwIjoxODA1MTQyNTkyfQ.SpYXvZzRKYd0xfyR7NRPtVj_TLug_bQTpfKHGm0atr8',
    imageAlt: 'Vista principal de la marca NUVRO FIT',
    liveUrl: 'https://www.nuvro.shop/',
    accentTone: 'mint',
  },
  {
    id: 'kiss-by-may',
    title: 'Kiss by May',
    category: 'Identidad & Catálogo digital',
    filterGroup: 'casos',
    nature: 'caso-real',
    natureLabel: 'Caso real · cliente',
    shortDescription:
      'Renovación de identidad visual, piezas para redes y catálogo digital de 656 perfumes con precios en colones para envío por WhatsApp.',
    problem:
      'La tienda contaba con buen inventario pero carecía de consistencia visual, logotipo nítido y un catálogo ordenado para atender consultas rápidas.',
    solution:
      'Definición de sistema visual de marca, rediseño de historias informativas (pagos SINPE y entregas) y estructuración de catálogo digital listo para compartir.',
    stack: ['Sistema de Marca', 'Catálogo Digital', 'Figma'],
    image:
      'https://www.nuvroenginer.site/trabajos/kiss-by-may/catalogo-pagina-600.webp',
    imageAlt: 'Página de catálogo digital de perfumes Kiss by May',
    liveUrl: 'https://www.nuvroenginer.site/casos/kiss-by-may',
    accentTone: 'coral',
  },
  {
    id: 'nuvro-crm',
    title: 'NUVRO CRM',
    category: 'CRM / Herramientas comerciales',
    filterGroup: 'productos',
    nature: 'en-construccion',
    natureLabel: 'En desarrollo · arquitectura interna',
    shortDescription:
      'Iniciativa interna orientada a centralizar prospectos y procesos comerciales de NUVRO ENGINEER. Módulo en evolución junto a LeadPilot.',
    problem:
      'Integrar la captura desde formularios web, seguimiento comercial y trazabilidad de cada consulta en un flujo único adaptado a operación local.',
    solution:
      'Diseño de arquitectura modular centrada en estados de prospectos, historial de contacto y conexión futura con automatizaciones. No se publican funciones sin verificar en producción.',
    stack: ['TypeScript', 'React', 'APIs / Webhooks'],
    accentTone: 'blue',
    note: 'Proyecto en desarrollo interno. Se muestra representación estructural de módulos sin atribuir funciones productivas no verificadas.',
  },
  {
    id: 'cafeoteca',
    title: 'Cafeoteca Costa Rica',
    category: 'Diseño web editorial',
    filterGroup: 'webs',
    nature: 'propuesta',
    natureLabel: 'Propuesta de diseño',
    shortDescription:
      'Propuesta de sitio web editorial para cafetería de especialidad en Costa Rica, con animaciones de scroll y mapa de regiones cafetaleras.',
    problem:
      'Transmitir el origen del café costarricense y el reconocimiento internacional del espacio mediante una narrativa visual inmersiva.',
    solution:
      'Desarrollo de interfaz editorial con recorrido por regiones cafetaleras, ritmo tipográfico cuidado y transiciones fluidas al hacer scroll.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    image:
      'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/WhatsApp%20Image%202026-03-19%20at%2010.01.37%20PM.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMy0xOSBhdCAxMC4wMS4zNyBQTS5qcGVnIiwiaWF0IjoxNzczOTc5OTUxLCJleHAiOjE4MDU1MTU5NTF9.3BrfjuPPPM8n4g_jueS3KqpYOF_1UGYHB_3DF-pMiIg',
    imageAlt: 'Captura de la propuesta web Cafeoteca Costa Rica',
    liveUrl: 'https://cafeoteca-website.vercel.app',
    accentTone: 'mint',
  },
  {
    id: 'cantaritos',
    title: 'Cantaritos',
    category: 'Web & Menú digital',
    filterGroup: 'webs',
    nature: 'propuesta',
    natureLabel: 'Propuesta de diseño',
    shortDescription:
      'Propuesta web y menú digital pensada para restaurante y pub, optimizada para consulta rápida desde el teléfono.',
    problem:
      'Facilitar la lectura del menú y la identidad del local en dispositivos móviles sin archivos PDF pesados.',
    solution:
      'Maquetación móvil directa por secciones, navegación táctil y despliegue rápido en Vercel.',
    stack: ['React', 'Tailwind CSS', 'Vercel'],
    image:
      'https://www.nuvroenginer.site/trabajos/webs/cantaritos_arriba.webp',
    imageAlt: 'Captura móvil de la propuesta web Cantaritos',
    liveUrl: 'https://cantaritos-xi.vercel.app',
    accentTone: 'yellow',
  },
  {
    id: 'clandestino',
    title: 'Clandestino',
    category: 'Web & Menú digital',
    filterGroup: 'webs',
    nature: 'propuesta',
    natureLabel: 'Propuesta de diseño',
    shortDescription:
      'Propuesta de diseño web y carta digital enfocada en cocina peruana, con jerarquía visual clara para platillos y bebidas.',
    problem:
      'Presentar una propuesta gastronómica especializada de forma ordenada y atractiva desde cualquier celular.',
    solution:
      'Estructura web limpia centrada en fotografía gastronómica, categorías accesibles y carga ligera.',
    stack: ['React', 'Tailwind CSS', 'Vercel'],
    image:
      'https://www.nuvroenginer.site/trabajos/webs/clandestino_arriba.webp',
    imageAlt: 'Captura móvil de la propuesta web Clandestino',
    liveUrl: 'https://clandestino-beta.vercel.app',
    accentTone: 'coral',
  },
  {
    id: 'la-catrina-azul',
    title: 'La Catrina Azul',
    category: 'Web & Menú digital',
    filterGroup: 'webs',
    nature: 'propuesta',
    natureLabel: 'Propuesta de diseño',
    shortDescription:
      'Sitio web y carta digital de cocina mexicana en Palmares, Alajuela, con código abierto verificable en GitHub.',
    problem:
      'Dar presencia digital estructurada a la propuesta gastronómica y facilitar el acceso a su menú y ubicación.',
    solution:
      'Web responsive construida con React y Tailwind CSS, optimizada para navegación móvil en restaurante.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    image:
      'https://www.nuvroenginer.site/trabajos/webs/lacatrina-azul-website_arriba.webp',
    imageAlt: 'Captura móvil de La Catrina Azul',
    liveUrl: 'https://lacatrina-azul-website.vercel.app',
    repoUrl: 'https://github.com/andolara31-art/lacatrina-azul-website',
    accentTone: 'blue',
  },
  {
    id: 'el-barbero',
    title: "El Barbero Gentlemen's Shop",
    category: 'Diseño web / Dark luxury',
    filterGroup: 'webs',
    nature: 'propuesta',
    natureLabel: 'Propuesta de diseño',
    shortDescription:
      'Propuesta de rediseño web para barbería con tres sucursales en Costa Rica, estética dark luxury y transiciones suaves.',
    problem:
      'Unificar la presencia digital de múltiples sucursales bajo una identidad visual de mayor nivel.',
    solution:
      'Interfaz oscura de alto contraste con animaciones fluidas con Motion y estructura pensada para reservas y ubicación.',
    stack: ['React', 'Tailwind CSS', 'Motion'],
    image:
      'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/WhatsApp%20Image%202026-03-19%20at%209.50.49%20PM.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMy0xOSBhdCA5LjUwLjQ5IFBNLmpwZWciLCJpYXQiOjE3NzM5Nzg2NzgsImV4cCI6MTgwNTUxNDY3OH0.cGHr_QsNngnQ29QxpCK8ZthOISkpV9bfY4mErLehL2A',
    imageAlt: "Captura de la propuesta web El Barbero Gentlemen's Shop",
    liveUrl: 'https://elbarbero-website.vercel.app',
    accentTone: 'yellow',
  },
  {
    id: 'clario-advisory',
    title: 'Clario Advisory',
    category: 'Web corporativa',
    filterGroup: 'webs',
    nature: 'propuesta',
    natureLabel: 'Propuesta de diseño',
    shortDescription:
      'Propuesta web corporativa para firma de consultoría, enfocada en claridad editorial, tipografía limpia y velocidad.',
    problem:
      'Comunicar servicios de asesoría estratégica sin saturación visual ni plantillas pesadas.',
    solution:
      'Arquitectura modular con React, TypeScript y Tailwind CSS orientada a lectura ejecutiva.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    image:
      'https://fwjdikkenbolqnyadgyq.supabase.co/storage/v1/object/sign/ima/WhatsApp%20Image%202026-03-15%20at%209.33.12%20AM.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jNTU1MzE4Ny1lNWQ2LTQyN2ItYjQzZi1kZjVlZWE4MzAwZGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWEvV2hhdHNBcHAgSW1hZ2UgMjAyNi0wMy0xNSBhdCA5LjMzLjEyIEFNLmpwZWciLCJpYXQiOjE3NzM1OTI3MTMsImV4cCI6MTgwNTEyODcxM30.oaw1yt9z6sVfCjS-wEh8zDtK6lr0K-Y1ScZ5T6E8B3I',
    imageAlt: 'Captura de la propuesta web Clario Advisory',
    liveUrl: 'https://clario-advisory.vercel.app/',
    accentTone: 'blue',
  },
];
