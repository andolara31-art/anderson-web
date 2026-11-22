import type { PixelSpriteName } from '../components/PixelCrew';
import type { TrailVariant } from '../components/CharacterParticleTrail';
import type { SummonableCharacter } from '../context/CharacterConfigContext';

export interface WisdomEntry {
  code: string;
  context: string;
  quote: string;
}

export interface CharacterSecretFile {
  id: PixelSpriteName;
  codename: string;
  role: string;
  origin: 'Crew base NUVRO' | 'Escuadrón técnico';
  accent: string;
  trailVariant?: TrailVariant;
  summonKey?: SummonableCharacter;
  bio: string;
  designLore: {
    gridSpec: string;
    paletteNotes: string;
    visualTrait: string;
  };
  devWisdomHistory: WisdomEntry[];
}

export const CHARACTER_SECRET_FILES: CharacterSecretFile[] = [
  {
    id: 'batman',
    codename: 'BATMAN',
    role: 'Guardián de bordes & tipado estricto',
    origin: 'Escuadrón técnico',
    accent: '#FFC83D',
    trailVariant: 'batarang',
    summonKey: 'batman',
    bio: 'Patrulla los bordes de cada tarjeta y formulario en ANDERSON.AL. Aparece en puntos concretos del recorrido para recordar que la solidez de un sistema vive en los casos límite.',
    designLore: {
      gridSpec: '14×13 px · SVG crispEdges',
      paletteNotes: 'Tinta #121212, grafito #2A303C, ojos blancos animados #F7F7F4 y cinturón #FFC83D.',
      visualTrait: 'Orejas pixeladas y mirada vigilante que parpadea con pasos CSS (px-blink).',
    },
    devWisdomHistory: [
      {
        code: 'LOG-01',
        context: 'Tipado y contratos',
        quote: 'Un buen tipo en TypeScript evita bugs a medianoche.',
      },
      {
        code: 'LOG-02',
        context: 'Mantenibilidad',
        quote: 'El código limpio se nota cuando otra persona lo lee.',
      },
      {
        code: 'LOG-03',
        context: 'Pruebas de borde',
        quote: 'Validá los bordes antes de celebrar el deploy.',
      },
    ],
  },
  {
    id: 'superman',
    codename: 'SUPERMAN',
    role: 'Arquitectura núcleo & sistemas vivos',
    origin: 'Escuadrón técnico',
    accent: '#2046F0',
    trailVariant: 'krypton',
    summonKey: 'superman',
    bio: 'Custodia el bloque principal de proyectos verificados. Representa la diferencia entre productos reales en producción y maquetas visuales sin sustento.',
    designLore: {
      gridSpec: '14×13 px · SVG crispEdges',
      paletteNotes: 'Azul NUVRO #2046F0, capa roja #E63946 y emblema #FFC83D.',
      visualTrait: 'Silueta clásica con capa en los laterales y flotación sutil sobre la ficha destacada.',
    },
    devWisdomHistory: [
      {
        code: 'LOG-01',
        context: 'Escalabilidad',
        quote: 'Arquitectura simple hoy escala mejor que magia compleja.',
      },
      {
        code: 'LOG-02',
        context: 'Separación de capas',
        quote: 'Separá datos, lógica y vista; tu yo futuro lo agradece.',
      },
      {
        code: 'LOG-03',
        context: 'Prioridad técnica',
        quote: 'Primero hacelo claro, después optimizá lo que pesa.',
      },
    ],
  },
  {
    id: 'flash',
    codename: 'FLASH',
    role: 'Rendimiento, respuesta & fluidez',
    origin: 'Escuadrón técnico',
    accent: '#FF5A4E',
    trailVariant: 'speed-force',
    summonKey: 'flash',
    bio: 'Vive encima del entorno interactivo del Hero. Simboliza cargas ligeras, respuestas inmediatas al tocar un nodo y transiciones que respetan el dispositivo.',
    designLore: {
      gridSpec: '14×13 px · SVG crispEdges',
      paletteNotes: 'Carmesí #E63946, relámpagos #FFC83D y destello blanco en el pecho.',
      visualTrait: 'Aletas laterales en el casco y micro-impulso horizontal (px-speed-dash).',
    },
    devWisdomHistory: [
      {
        code: 'LOG-01',
        context: 'Renderizado UI',
        quote: 'Menos re-renders, más fluidez en móvil.',
      },
      {
        code: 'LOG-02',
        context: 'Peso de bundle',
        quote: 'Cada kilobyte que no enviás carga al instante.',
      },
      {
        code: 'LOG-03',
        context: 'Latencia percibida',
        quote: 'Si tarda en responder, el usuario ya se fue.',
      },
    ],
  },
  {
    id: 'google',
    codename: 'GOOGLE · ANDROID',
    role: 'Experiencia móvil, accesibilidad & UX',
    origin: 'Escuadrón técnico',
    accent: '#5EDBB0',
    trailVariant: 'android',
    summonKey: 'google',
    bio: 'Acompaña la sección de certificaciones y las alertas de scroll para recordar que el diseño limpio, legible y accesible en pantallas pequeñas es parte central de la ingeniería.',
    designLore: {
      gridSpec: '14×13 px · SVG crispEdges',
      paletteNotes: 'Verde Android #34A853 combinado con azul #4285F4, rojo #EA4335 y amarillo #FBBC05.',
      visualTrait: 'Antenas pixeladas en la cabeza y torso cuatricolor de Google.',
    },
    devWisdomHistory: [
      {
        code: 'LOG-01',
        context: 'Mobile-first',
        quote: 'Diseñá primero para pulgar y pantallas de 360px.',
      },
      {
        code: 'LOG-02',
        context: 'Accesibilidad WCAG',
        quote: 'Buen contraste y foco visible también son ingeniería.',
      },
      {
        code: 'LOG-03',
        context: 'Usabilidad',
        quote: 'La mejor interfaz es la que no necesita manual.',
      },
    ],
  },
  {
    id: 'claude',
    codename: 'CLAUDE',
    role: 'IA aplicada & automatización práctica',
    origin: 'Escuadrón técnico',
    accent: '#D97757',
    bio: 'Supervisa el inspector técnico de The Build Lab. Representa la integración honesta de modelos de lenguaje donde realmente reducen trabajo manual.',
    designLore: {
      gridSpec: '14×13 px · SVG crispEdges',
      paletteNotes: 'Terracota #D97757, detalle claro #F4A27E y acento #FFC83D.',
      visualTrait: 'Chispas superiores y visor claro de estilo robot editorial.',
    },
    devWisdomHistory: [
      {
        code: 'LOG-01',
        context: 'Flujos con IA',
        quote: 'Usá IA para acelerar flujos reales, no para esconder falta de criterio.',
      },
      {
        code: 'LOG-02',
        context: 'Documentación',
        quote: 'Un buen prompt no sustituye entender el problema del negocio.',
      },
    ],
  },
  {
    id: 'bit',
    codename: 'BIT',
    role: 'Vigía del header & identidad NUVRO',
    origin: 'Crew base NUVRO',
    accent: '#2046F0',
    bio: 'Bot clásico heredado directamente de la barra superior de NUVRO ENGINEER. Se asoma desde detrás del menú y marca el puente visual entre empresa y portafolio.',
    designLore: {
      gridSpec: '14×13 px · SVG crispEdges',
      paletteNotes: 'Azul NUVRO #2046F0, tinta #121212 y visor papel #F7F7F4.',
      visualTrait: 'Ciclo continuo de asomo vertical (px-peek) desde el borde inferior del header.',
    },
    devWisdomHistory: [
      {
        code: 'LOG-01',
        context: 'Consistencia de marca',
        quote: 'Un sistema visual coherente se reconoce antes de leer el título.',
      },
    ],
  },
  {
    id: 'dev',
    codename: 'DEV',
    role: 'Constructor de producto & código diario',
    origin: 'Crew base NUVRO',
    accent: '#FF5A4E',
    bio: 'Personaje desarrollador original de NUVRO ENGINEER. Comparte espacio junto a Flash en el workspace del Hero como guiño al trabajo cotidiano frente al editor.',
    designLore: {
      gridSpec: '14×12 px · SVG crispEdges',
      paletteNotes: 'Coral #FF5A4E, cabello oscuro #3B2418 y tono piel #E8B48A.',
      visualTrait: 'Brazos alzados sobre el borde y parpadeo sincronizado de ojos.',
    },
    devWisdomHistory: [
      {
        code: 'LOG-01',
        context: 'Iteración constante',
        quote: 'Probar cada flujo real vale más que diez mockups sin código.',
      },
    ],
  },
  {
    id: 'chispa',
    codename: 'CHISPA',
    role: 'Ideas rápidas & microdetalles cómic',
    origin: 'Crew base NUVRO',
    accent: '#FFC83D',
    bio: 'La mascota amarilla de NUVRO ENGINEER. Aporta el toque creativo y cercano que rompe la rigidez de las páginas técnicas genéricas.',
    designLore: {
      gridSpec: '14×12 px · SVG crispEdges',
      paletteNotes: 'Amarillo NUVRO #FFC83D con mejillas coral #FF5A4E.',
      visualTrait: 'Inclinación periódica juguetona (px-tilt) en la barra de navegación en escritorio.',
    },
    devWisdomHistory: [
      {
        code: 'LOG-01',
        context: 'Personalidad',
        quote: 'Un detalle sutil bien hecho hace memorable un portafolio técnico.',
      },
    ],
  },
  {
    id: 'termi',
    codename: 'TERMI',
    role: 'Terminal clásica & estado del sistema',
    origin: 'Crew base NUVRO',
    accent: '#5EDBB0',
    bio: 'Monitor retro menta heredado de NUVRO ENGINEER. Saluda con su brazo pixelado en el borde derecho del header tanto en móvil como en PC.',
    designLore: {
      gridSpec: '14×11 px · SVG crispEdges',
      paletteNotes: 'Pantalla menta #5EDBB0 con carcasa #121212 y cursor parpadeante.',
      visualTrait: 'Prompt `>_` animado (px-cursor) y saludo mecánico periódico (px-wave).',
    },
    devWisdomHistory: [
      {
        code: 'LOG-01',
        context: 'Diagnóstico',
        quote: 'Cuando algo falla en producción, la consola clara te ahorra horas.',
      },
    ],
  },
];

export function getInsightKey(
  characterId: PixelSpriteName,
  code: string,
): string {
  return `${characterId}:${code}`;
}

export const ALL_INSIGHT_KEYS: string[] = CHARACTER_SECRET_FILES.flatMap(
  (file) =>
    file.devWisdomHistory.map((entry) => getInsightKey(file.id, entry.code)),
);

export const TOTAL_UNIQUE_INSIGHTS = ALL_INSIGHT_KEYS.length;

