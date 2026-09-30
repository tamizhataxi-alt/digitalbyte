export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  slug: string;
  icon: string;
  shortIntro?: string;
  capabilities?: string[];
  outcomes?: string[];
  detailRoute?: boolean;
}

export interface CaseStudyLiveProject {
  name: string;
  url: string;
  description?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  type: string;
  category: 'web' | 'mobile' | 'cloud' | 'ai';
  problem: string;
  approach: string;
  result: string;
  solution?: string;
  learnings?: string[];
  technologies: string[];
  hypothetical: boolean;
  excerpt: string;
  liveProjects?: CaseStudyLiveProject[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  demo: boolean;
  content: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TechnologyCategory {
  name: string;
  items: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ValueItem {
  number: string;
  title: string;
  description: string;
}
