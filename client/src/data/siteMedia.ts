/** Each asset is used in exactly one place (case-study art is per-slug only). */

export type MediaAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export const heroMedia = {
  poster: {
    src: '/media/hero-home-banner.png',
    alt: 'Software developer working with holographic code displays in a modern engineering studio',
  },
  video: '/media/hero-loop.mp4',
};

export const featuredWorkMedia = {
  taxiShowcase: {
    src: '/media/featured-taxi-showcase.jpg',
    alt: 'Taxi in front of the Gateway of India — booking websites we built for real fleets',
  },
} as const satisfies Record<string, MediaAsset>;

export const sectionMedia = {
  strategy: {
    src: '/media/section-strategy.jpg',
    alt: 'Engineer writing code on a laptop during product planning',
  },
  process: {
    src: '/media/section-process.jpg',
    alt: 'Software team collaborating around monitors in an agile sprint',
  },
  quote: {
    src: '/media/section-quote.jpg',
    alt: 'Close-up of hands typing on a keyboard with code on screen',
  },
  engagement: {
    src: '/media/section-engagement.jpg',
    alt: 'Cloud infrastructure diagram on a screen in a development office',
  },
} as const satisfies Record<string, MediaAsset>;

export const caseStudyMedia: Record<string, MediaAsset> = {
  'taxi-booking': {
    src: '/media/case-taxi-booking.png',
    alt: 'Passenger booking a taxi on a smartphone app with a yellow cab on the street',
  },
  'ecommerce-website': {
    src: '/media/case-ecommerce-website.jpg',
    alt: 'E-commerce website product catalog and shopping cart on a laptop screen',
  },
  'erp-system': {
    src: '/media/case-erp-system.jpg',
    alt: 'Enterprise resource planning dashboard with finance and operations metrics',
  },
  'inventory-management': {
    src: '/media/case-inventory-management.jpg',
    alt: 'Warehouse team managing inventory with barcode scanner and stock dashboard',
  },
};

/** One hero image per service detail route (`/services/:slug`). */
export const serviceMedia: Record<string, MediaAsset> = {
  'web-development': {
    src: '/media/service-web-development.jpg',
    alt: 'Developer building a modern web application on a laptop with code and UI on screen',
  },
  'mobile-development': {
    src: '/media/service-mobile-development.jpg',
    alt: 'Person using a smartphone app with a clean mobile interface',
  },
  'cloud-devops': {
    src: '/media/service-cloud-devops.jpg',
    alt: 'Cloud infrastructure and global network connectivity visualized on digital displays',
  },
  'ai-ml': {
    src: '/media/service-ai-ml.jpg',
    alt: 'Artificial intelligence and machine learning visualization with neural network patterns',
  },
};

export const pageMedia = {
  about: {
    src: '/media/page-about.jpg',
    alt: 'Product team whiteboarding a software roadmap in a bright office',
  },
  services: {
    src: '/media/page-services.jpg',
    alt: 'Full-stack developer workstation with multiple monitors showing code',
  },
  contact: {
    src: '/media/page-contact.jpg',
    alt: 'Minimal desk setup prepared for a remote product consultation call',
  },
} as const satisfies Record<string, MediaAsset>;

export const blogMedia: Record<string, MediaAsset> = {
  'plan-scalable-web-application': {
    src: '/media/blog-scalable-web.jpg',
    alt: 'Web application wireframes and system diagram on a desk',
  },
  'architecture-for-growing-product': {
    src: '/media/blog-architecture.jpg',
    alt: 'Software architecture sketch with microservices nodes on a whiteboard',
  },
  'ai-automation-in-business': {
    src: '/media/blog-ai-automation.jpg',
    alt: 'Machine learning workflow visualization on a developer workstation',
  },
};
