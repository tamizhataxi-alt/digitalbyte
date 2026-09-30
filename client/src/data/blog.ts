import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'plan-scalable-web-application',
    title: 'How to plan a scalable web application',
    category: 'Architecture',
    excerpt:
      'A practical framing for scope, data boundaries and release cadence before the first production deploy.',
    date: '2026-03-12',
    readingTime: '6 min read',
    demo: true,
    content: [
      'Scalable web applications rarely start with infrastructure—they start with clarity about what must work reliably on day one versus what can evolve later.',
      'Begin by mapping user journeys that generate load: authentication, search, checkout, reporting. Each journey implies data boundaries and caching opportunities.',
      'Choose a modular frontend structure so teams can ship features without entangling unrelated screens. Pair that with API contracts that version gracefully.',
      'Plan releases around measurable slices: a read-only dashboard before write actions, a single payment path before full subscription logic. Progress stays visible and risk stays bounded.',
      'This article is demo content for the Digital Byte website and reflects general product engineering guidance—not a specific client engagement.',
    ],
  },
  {
    slug: 'architecture-for-growing-product',
    title: 'Choosing the right architecture for a growing product',
    category: 'Product Engineering',
    excerpt:
      'When to keep a monolith, when to extract services, and how to decide without over-engineering early.',
    date: '2026-02-28',
    readingTime: '8 min read',
    demo: true,
    content: [
      'Architecture decisions should follow product traction, not anticipation of hypothetical scale.',
      'A well-structured monolith with clear module boundaries often outperforms premature microservices for early-stage products.',
      'Extract services when teams block each other on deploys, when scaling characteristics diverge, or when compliance requires hard isolation.',
      'Document integration points as contracts—events, APIs, shared schemas—so future splits do not become archaeology projects.',
      'Demo article: illustrative guidance only for the Digital Byte marketing site.',
    ],
  },
  {
    slug: 'ai-automation-in-business',
    title: 'Where AI automation can actually improve a business',
    category: 'AI & Automation',
    excerpt:
      'Focus on repetitive, well-defined workflows before chasing open-ended “AI transformation.”',
    date: '2026-01-15',
    readingTime: '5 min read',
    demo: true,
    content: [
      'Useful automation targets tasks with clear inputs, predictable outputs and human review paths when confidence is low.',
      'Document classification, support triage, and operational summarization are common starting points because success is measurable.',
      'Embed AI inside existing tools rather than asking teams to adopt a separate “AI product” unless the workflow truly warrants it.',
      'Plan for failure modes: stale data, ambiguous prompts, and privacy constraints should be designed into the flow from the start.',
      'Draft demo content for Digital Byte—not a guarantee of specific AI offerings for your organization.',
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
