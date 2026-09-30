import type { ProcessStep, ValueItem } from '../types';

export const capabilities = [
  'WEB',
  'MOBILE',
  'CLOUD',
  'DEVOPS',
  'AI / ML',
  'PRODUCT ENGINEERING',
];

export const whyPoints: ValueItem[] = [
  {
    number: '01',
    title: 'Clear thinking',
    description:
      'Every technical decision starts with the product problem, not the technology trend.',
  },
  {
    number: '02',
    title: 'Built to evolve',
    description:
      'We design systems that can grow as users, features and business requirements change.',
  },
  {
    number: '03',
    title: 'Practical delivery',
    description:
      'Small, measurable releases keep projects moving and make progress visible.',
  },
  {
    number: '04',
    title: 'Long-term mindset',
    description:
      'Launch is the beginning of product improvement, not the finish line.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understand the product, users, goals and constraints.',
  },
  {
    number: '02',
    title: 'Define',
    description:
      'Turn requirements into a clear product and technical roadmap.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Design, develop and integrate the product in focused iterations.',
  },
  {
    number: '04',
    title: 'Validate',
    description:
      'Test functionality, performance, usability and reliability.',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'Deploy, monitor and support the product after release.',
  },
];
