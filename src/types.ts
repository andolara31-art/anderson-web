import type { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
  demoUrl: string;
  githubUrl: string;
  image: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Tool {
  name: string;
  icon: ReactNode;
}
