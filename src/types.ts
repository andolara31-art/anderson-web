export type ProjectNature =
  | 'empresa'
  | 'producto'
  | 'caso-real'
  | 'propuesta'
  | 'en-construccion';

export type ProjectCategoryFilter =
  | 'todos'
  | 'productos'
  | 'webs'
  | 'casos';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  filterGroup: Exclude<ProjectCategoryFilter, 'todos'>;
  nature: ProjectNature;
  natureLabel: string;
  shortDescription: string;
  problem: string;
  solution: string;
  stack: string[];
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  accentTone: 'blue' | 'yellow' | 'mint' | 'coral';
  note?: string;
}

export type ExperienceLevel =
  | 'Uso profesional'
  | 'Uso en proyectos'
  | 'Exploración';

export interface TechItem {
  name: string;
  level: ExperienceLevel;
  context: string;
}

export interface TechCategory {
  id: string;
  title: string;
  subtitle: string;
  accent: 'blue' | 'yellow' | 'mint' | 'coral';
  items: TechItem[];
}

export interface LabModule {
  id: string;
  code: string;
  title: string;
  status: 'Implementado en proyectos' | 'Dominio técnico' | 'Área de experimentación';
  summary: string;
  technologies: string[];
  details: string[];
  architectureNote: string;
  accent: 'blue' | 'yellow' | 'mint' | 'coral';
}

export interface CertificationItem {
  id: string;
  institution: 'IBM' | 'Microsoft' | 'Meta' | 'Google' | 'Claude Academy';
  title: string;
  focus: string;
  status: 'referencia' | 'reservado';
  credentialUrl?: string;
  note: string;
}
