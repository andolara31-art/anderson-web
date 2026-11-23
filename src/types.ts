export type Language = 'es' | 'en';

export interface LocalizedText {
  es: string;
  en: string;
}

export interface LocalizedList {
  es: string[];
  en: string[];
}

export type ProjectNature =
  | 'empresa'
  | 'producto'
  | 'caso-real';

export type ProjectCategoryFilter =
  | 'todos'
  | 'productos'
  | 'casos';

export type ProjectPreviewId =
  | 'nuvro-asset-studio'
  | 'nuvro-clips-ia'
  | 'leadpilot-crm'
  | 'nuvro-fit'
  | 'fumigadora-dds';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: LocalizedText;
  category: LocalizedText;
  filterGroup: Exclude<ProjectCategoryFilter, 'todos'>;
  nature: ProjectNature;
  natureLabel: LocalizedText;
  shortDescription: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  architecturePoints?: LocalizedList;
  stack: LocalizedList;
  image?: string;
  imageFit?: 'cover' | 'contain';
  imageAlt?: LocalizedText;
  previewId?: ProjectPreviewId;
  liveUrl?: string;
  passwordProtected?: boolean;
  repoUrl?: string;
  featured?: boolean;
  accentTone: 'blue' | 'yellow' | 'mint' | 'coral';
  note?: LocalizedText;
}

export type ExperienceLevelKey =
  | 'professional'
  | 'projects'
  | 'exploring';

export interface TechItem {
  name: string;
  levelKey: ExperienceLevelKey;
  context: LocalizedText;
}

export interface TechCategory {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  accent: 'blue' | 'yellow' | 'mint' | 'coral';
  items: TechItem[];
}

export type LabStatusKey = 'implemented' | 'domain' | 'experimenting';

export interface LabModule {
  id: string;
  code: string;
  title: LocalizedText;
  statusKey: LabStatusKey;
  summary: LocalizedText;
  technologies: string[];
  details: LocalizedList;
  architectureNote: LocalizedText;
  accent: 'blue' | 'yellow' | 'mint' | 'coral';
}

export interface EfSetCertification {
  id: string;
  provider: 'EF SET';
  title: LocalizedText;
  level: string;
  score: string;
  readingNote: LocalizedText;
  date: string;
  credentialUrl: string;
}

export interface AnthropicCourseItem {
  id: string;
  title: string;
  focus: LocalizedText;
}
