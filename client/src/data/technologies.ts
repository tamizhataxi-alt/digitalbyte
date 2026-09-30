import type { TechnologyCategory } from '../types';

export const technologyCategories: TechnologyCategory[] = [
  {
    name: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'NestJS', 'PHP'],
  },
  {
    name: 'Mobile',
    items: ['React Native'],
  },
  {
    name: 'Database',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    name: 'Cloud',
    items: ['AWS', 'Cloud infrastructure', 'CI/CD'],
  },
  {
    name: 'AI',
    items: ['AI integrations', 'Machine Learning', 'Automation'],
  },
];
