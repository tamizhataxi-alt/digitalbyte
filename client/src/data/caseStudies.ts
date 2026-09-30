import type { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'taxi-booking',
    title: 'Taxi Booking System',
    industry: 'Mobility',
    type: 'Web & Mobile App',
    category: 'mobile',
    hypothetical: false,
    excerpt:
      'End-to-end ride booking with live driver tracking, fare estimates and admin dispatch tools.',
    problem:
      'A transport operator needed to move off phone-based bookings and give riders a reliable way to request trips, pay and track arrivals.',
    approach:
      'Designed rider and driver apps with a central dispatch panel, fare rules, trip history and notification workflows.',
    result:
      'A unified booking flow from request to drop-off with operational visibility for coordinators.',
    solution:
      'React Native apps for riders and drivers, a web admin console for fleet oversight, and a Node.js API handling matching, pricing and trip state.',
    learnings: [
      'Location updates need clear battery and accuracy trade-offs on driver devices.',
      'Fare transparency at booking time reduces support calls after the trip.',
      'Dispatch tools work best when exceptions (cancellations, no-shows) are first-class flows.',
    ],
    technologies: ['React Native', 'React', 'Node.js', 'PostgreSQL', 'Maps API'],
    liveProjects: [
      {
        name: 'droptaxi1.com',
        url: 'https://droptaxi1.com',
        description: 'Online taxi booking platform with trip requests and fleet operations.',
      },
      {
        name: 'tamizhataxi.in',
        url: 'https://tamizhataxi.in',
        description: 'Regional ride-booking website for local taxi services.',
      },
    ],
  },
  {
    slug: 'ecommerce-website',
    title: 'E-commerce Website',
    industry: 'Retail',
    type: 'Online Store',
    category: 'web',
    hypothetical: false,
    excerpt:
      'Custom storefront with catalog management, checkout, order tracking and a merchant admin dashboard.',
    problem:
      'The business was outgrowing a template store and needed flexible catalog, promotions and order workflows.',
    approach:
      'Built a modular commerce front end with a secure checkout path and an admin area for products, inventory and orders.',
    result:
      'A faster shopping experience and a back office aligned with how the team actually fulfills orders.',
    solution:
      'Server-rendered and SPA hybrid storefront, payment gateway integration, role-based admin and reporting for sales and stock.',
    learnings: [
      'Checkout should minimize steps without hiding delivery and tax rules.',
      'Admin product forms benefit from validation that matches storefront rules.',
      'Staging environments for payment providers prevent costly misconfiguration.',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MySQL', 'AWS'],
  },
  {
    slug: 'erp-system',
    title: 'ERP System',
    industry: 'Enterprise',
    type: 'Business Platform',
    category: 'web',
    hypothetical: false,
    excerpt:
      'Integrated ERP covering finance, inventory, procurement and role-based operational dashboards.',
    problem:
      'Teams were juggling spreadsheets and disconnected tools for stock, purchasing and accounting visibility.',
    approach:
      'Mapped core business entities and built a modular ERP with shared data services and approval workflows.',
    result:
      'One system of record for operations with auditable changes and department-specific views.',
    solution:
      'Web application with modules for inventory, purchase orders, invoicing and management dashboards, backed by a structured relational model.',
    learnings: [
      'ERP rollouts succeed when one department goes live deeply before expanding modules.',
      'Permissions and audit logs are not optional for finance-adjacent data.',
      'Reporting views should reuse the same definitions as transactional screens.',
    ],
    technologies: ['React', 'NestJS', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    slug: 'inventory-management',
    title: 'Inventory Management',
    industry: 'Operations',
    type: 'Warehouse & Stock',
    category: 'cloud',
    hypothetical: false,
    excerpt:
      'Warehouse stock control with barcode scanning, reorder alerts and integration hooks for sales channels.',
    problem:
      'Stock levels across warehouses and sales channels were frequently out of sync, causing overselling and manual reconciliations.',
    approach:
      'Delivered a stock service with warehouse bins, movement history and automated low-stock notifications.',
    result:
      'More accurate availability data and fewer manual stock checks across teams.',
    solution:
      'Cloud-hosted inventory API, operator UI for receipts and transfers, and event hooks for the e-commerce catalog.',
    learnings: [
      'Every stock movement needs a reason code to debug discrepancies later.',
      'Integrations should be idempotent when marketplaces retry order webhooks.',
      'Mobile-friendly scanning flows matter more than dense desktop tables in warehouses.',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'CI/CD'],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
