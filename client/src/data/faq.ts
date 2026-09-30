export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export const homeFaq: FaqItem[] = [
  {
    id: 'scope',
    number: '01',
    question: 'Do you work from an existing brief or help shape the product?',
    answer:
      'Both. Some teams arrive with detailed requirements; others need help framing the problem, scope and technical direction. We usually start with a short discovery phase either way.',
  },
  {
    id: 'design',
    number: '02',
    question: 'Can we review design and architecture before development starts?',
    answer:
      'Yes. We align on user flows, interface direction and technical approach before major build work. Milestone reviews keep feedback structured and releases predictable.',
  },
  {
    id: 'launch',
    number: '03',
    question: 'What happens after launch?',
    answer:
      'We can support monitoring, fixes, performance tuning and iterative improvements. Long-term partnerships are common when products keep evolving after go-live.',
  },
  {
    id: 'stack',
    number: '04',
    question: 'Do you only work with specific technologies?',
    answer:
      'We favour modern, maintainable stacks (React, TypeScript, Node, cloud tooling and more), but the stack is chosen per product — not forced from a template.',
  },
];
