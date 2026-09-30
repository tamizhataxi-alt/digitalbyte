import type { Service } from '../types';

export const homeServices: Service[] = [
  {
    id: 'web',
    number: '01',
    title: 'Web Applications',
    description: 'Websites and web apps that are clear, fast, and simple for your customers to use.',
    slug: 'web-development',
    icon: 'globe',
    detailRoute: true,
  },
  {
    id: 'mobile',
    number: '02',
    title: 'Mobile Applications',
    description: 'Phone apps for booking trips, placing orders, and staying in touch with customers.',
    slug: 'mobile-development',
    icon: 'smartphone',
    detailRoute: true,
  },
  {
    id: 'cloud',
    number: '03',
    title: 'Cloud & DevOps',
    description: 'Stable hosting and smooth updates so your site stays online when you need it.',
    slug: 'cloud-devops',
    icon: 'cloud',
    detailRoute: true,
  },
  {
    id: 'ai',
    number: '04',
    title: 'AI & Machine Learning',
    description: 'Helpful automation — like sorting enquiries or suggesting answers to common questions.',
    slug: 'ai-ml',
    icon: 'brain',
    detailRoute: true,
  },
  {
    id: 'product',
    number: '05',
    title: 'Product Engineering',
    description: 'One team to plan, design, and build your product from idea through launch.',
    slug: 'product-engineering',
    icon: 'layers',
    detailRoute: false,
  },
];

export const detailedServices: Service[] = [
  {
    id: 'web-detail',
    number: '01',
    title: 'Web Application Development',
    slug: 'web-development',
    icon: 'globe',
    description:
      'We build web platforms that balance performance, usability and maintainability — from customer-facing products to internal operations tools.',
    shortIntro:
      'Modern web applications tailored to how your teams and customers actually work.',
    capabilities: [
      'Product discovery and technical planning',
      'Responsive UI development',
      'API integration and third-party services',
      'Performance optimization',
      'Accessibility-focused implementation',
      'Ongoing iteration after launch',
    ],
    outcomes: [
      'A cohesive web experience aligned with business workflows',
      'Architecture that supports new features without rework',
      'Clear release cadence with measurable milestones',
    ],
    detailRoute: true,
  },
  {
    id: 'mobile-detail',
    number: '02',
    title: 'Mobile App Development',
    slug: 'mobile-development',
    icon: 'smartphone',
    description:
      'Mobile products designed for clarity on small screens, reliable offline behavior and smooth release cycles.',
    shortIntro:
      'Native-feeling mobile experiences for iOS and Android from a single engineering approach.',
    capabilities: [
      'Cross-platform mobile development',
      'Push notifications and device integrations',
      'App store readiness and release support',
      'Mobile-specific UX patterns',
      'Secure authentication flows',
      'Analytics hooks for product learning',
    ],
    outcomes: [
      'Mobile journeys optimized for frequent user tasks',
      'Shared codebase where it makes sense, native where it matters',
      'Stable builds ready for staged rollouts',
    ],
    detailRoute: true,
  },
  {
    id: 'cloud-detail',
    number: '03',
    title: 'Cloud & DevOps',
    slug: 'cloud-devops',
    icon: 'cloud',
    description:
      'Infrastructure and delivery practices that keep releases predictable and systems observable.',
    shortIntro:
      'Cloud environments and pipelines built for teams who ship often and need clear rollback paths.',
    capabilities: [
      'Cloud architecture and environment setup',
      'CI/CD pipeline design',
      'Infrastructure as code',
      'Monitoring and alerting foundations',
      'Security baselines and secrets management',
      'Cost-aware scaling strategies',
    ],
    outcomes: [
      'Deployments that are repeatable and documented',
      'Fewer surprises between staging and production',
      'Operational visibility from day one',
    ],
    detailRoute: true,
  },
  {
    id: 'ai-detail',
    number: '04',
    title: 'AI & Machine Learning',
    slug: 'ai-ml',
    icon: 'brain',
    description:
      'We focus on AI features that solve concrete workflow problems — not experiments disconnected from product value.',
    shortIntro:
      'Practical automation, classification and assistive experiences embedded in your product.',
    capabilities: [
      'Workflow automation with AI services',
      'Document and data processing pipelines',
      'Recommendation and ranking prototypes',
      'Human-in-the-loop review flows',
      'Model integration and guardrails',
      'Evaluation against real usage scenarios',
    ],
    outcomes: [
      'AI capabilities scoped to measurable outcomes',
      'Clear boundaries around data usage and privacy',
      'Fallback paths when models are uncertain',
    ],
    detailRoute: true,
  },
  {
    id: 'api-detail',
    number: '05',
    title: 'API & Backend Engineering',
    slug: 'api-backend',
    icon: 'server',
    description:
      'Reliable backends that expose clean APIs, enforce business rules and scale with your product roadmap.',
    shortIntro:
      'Structured APIs and services that connect your frontend, partners and internal tools.',
    capabilities: [
      'REST and GraphQL API design',
      'Authentication and authorization',
      'Database modeling and migrations',
      'Background jobs and queues',
      'Third-party integrations',
      'API documentation for partner teams',
    ],
    outcomes: [
      'Consistent contracts between services and clients',
      'Data models that reflect real business entities',
      'Backends ready for incremental feature growth',
    ],
    detailRoute: false,
  },
  {
    id: 'product-detail',
    number: '06',
    title: 'Product Engineering',
    slug: 'product-engineering',
    icon: 'layers',
    description:
      'End-to-end partnership from shaping the problem through launch and continuous improvement.',
    shortIntro:
      'One team thinking across product, design and engineering so decisions stay aligned.',
    capabilities: [
      'Discovery workshops and scope framing',
      'Technical roadmaps tied to business goals',
      'Iterative design and development sprints',
      'Quality assurance and release planning',
      'Post-launch monitoring and refinement',
      'Knowledge transfer to your internal team',
    ],
    outcomes: [
      'Shared understanding of priorities before build starts',
      'Visible progress through small, shippable increments',
      'A product that keeps improving after go-live',
    ],
    detailRoute: false,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return detailedServices.find((s) => s.slug === slug);
}
