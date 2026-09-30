export interface EngagementTier {
  id: string;
  name: string;
  summary: string;
  highlights: string[];
}

export const engagementTiers: EngagementTier[] = [
  {
    id: 'discovery',
    name: 'Discovery',
    summary: 'Clarify the product, scope and technical direction before build.',
    highlights: [
      'Workshops and requirements framing',
      'Architecture options and trade-offs',
      'Roadmap with phased delivery',
      'Indicative timeline and team shape',
    ],
  },
  {
    id: 'build',
    name: 'Product build',
    summary: 'End-to-end design and engineering for web, mobile and cloud products.',
    highlights: [
      'Iterative design and development',
      'API and integration work',
      'QA, staging and release support',
      'Documentation and handover',
    ],
  },
  {
    id: 'scale',
    name: 'Scale & improve',
    summary: 'Keep shipping after launch with performance and feature iteration.',
    highlights: [
      'Post-launch monitoring setup',
      'Performance and reliability tuning',
      'Feature increments and refactors',
      'DevOps and pipeline improvements',
    ],
  },
];
