import type { AnthropicCourseItem, EfSetCertification } from '../types';

export const EF_SET_CERT: EfSetCertification = {
  id: 'efset-c1',
  provider: 'EF SET',
  title: {
    es: 'Certificado Oficial de Inglés EF SET — C1 Avanzado',
    en: 'EF SET Official English Certificate — C1 Advanced',
  },
  level: 'C1 Advanced',
  score: '61 / 100',
  readingNote: {
    es: 'Lectura técnica: C2 Proficiente (99/100) · Documentación, código y comunicación escrita',
    en: 'Technical Reading: C2 Proficient (99/100) · Docs, architecture specs & async collaboration',
  },
  date: '2026',
  credentialUrl: 'https://cert.efset.org/es/i39Z5B',
};

export const ANTHROPIC_EDUCATION_META = {
  provider: 'Anthropic Education',
  date: 'Jun 2026',
  courseCount: 6,
};

export const ANTHROPIC_COURSES: AnthropicCourseItem[] = [
  {
    id: 'claude-101',
    title: 'Claude 101',
    focus: {
      es: 'Prompting estructurado, Projects, Artifacts y flujos diarios de ingeniería',
      en: 'Structured prompting, Projects, Artifacts, and daily engineering workflows',
    },
  },
  {
    id: 'ai-fluency',
    title: 'AI Fluency: Framework & Foundations',
    focus: {
      es: 'Colaboración responsable, delegación de tareas y criterio técnico con IA',
      en: 'Responsible AI collaboration, task delegation, and evaluation frameworks',
    },
  },
  {
    id: 'building-claude-api',
    title: 'Building with the Claude API',
    focus: {
      es: 'Integración API, streaming, JSON estructurado, RAG, Tool Use y evals',
      en: 'API integration, streaming, structured JSON, RAG pipelines, Tool Use & evals',
    },
  },
  {
    id: 'claude-code-action',
    title: 'Claude Code in Action',
    focus: {
      es: 'Flujos agénticos en CLI, gestión de contexto y automatización de desarrollo',
      en: 'Agentic CLI workflows, context management, and automated codebases',
    },
  },
  {
    id: 'agent-skills',
    title: 'Introduction to Agent Skills',
    focus: {
      es: 'Diseño de capacidades modulares y habilidades reutilizables para agentes',
      en: 'Designing modular agent capabilities and reusable skill definitions',
    },
  },
  {
    id: 'mcp-intro',
    title: 'Model Context Protocol (MCP)',
    focus: {
      es: 'Conexión estandarizada entre modelos, repositorios, APIs y fuentes de datos',
      en: 'Standardized client-server integrations across tools, APIs, and data sources',
    },
  },
];
