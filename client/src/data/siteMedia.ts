/** Each asset is used in exactly one place (case-study art is per-slug only). */

export type MediaAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type MarketingHeroVisual = MediaAsset & {
  /** `immersive` = edge-to-edge cover; `classic` = original contain layout */
  layout: 'immersive' | 'classic';
};

export const brandLogo = {
  src: '/media/digital-byte-logo.png',
  alt: 'Digital Byte',
  width: 400,
  height: 400,
} as const satisfies MediaAsset;

export const heroMedia = {
  poster: {
    src: '/media/hero-home-banner.png',
    alt: 'Software developer working with holographic code displays in a modern engineering studio',
  },
  video: '/media/hero-loop.mp4',
};

/**
 * Hero banner image (layout/sizes unchanged in `MarketingHeroComposition`).
 * Set to `'legacy'` to restore the original `hero-marketing-visual.png`.
 */
export const MARKETING_HERO_VISUAL_VARIANT = 'current' as 'current' | 'legacy';

const marketingHeroVisuals = {
  current: {
    src: '/media/hero-marketing-visual-futuristic.jpg',
    alt: 'Futuristic business scene with ultra-modern digital ambiance',
    width: 1920,
    height: 1080,
    layout: 'immersive',
  },
  legacy: {
    src: '/media/hero-marketing-visual.png',
    alt: 'Digital marketing professional with laptop, analytics and social media growth elements',
    width: 1400,
    height: 1400,
    layout: 'classic',
  },
} satisfies Record<string, MarketingHeroVisual>;

export const marketingHeroMedia = {
  visual: marketingHeroVisuals[MARKETING_HERO_VISUAL_VARIANT],
  /** Original banner asset — swap variant to `'legacy'` above to use this again */
  legacyVisual: marketingHeroVisuals.legacy,
};

export const featuredWorkMedia = {
  taxiShowcase: {
    src: '/media/featured-taxi-innova.png',
    alt: 'White Toyota Innova Crysta taxi — booking websites built for Tamil Nadu fleet operators',
    width: 1200,
    height: 900,
  },
} as const satisfies Record<string, MediaAsset>;

export const homeServiceMedia: Record<
  'web' | 'mobile' | 'cloud' | 'ai' | 'product',
  MediaAsset
> = {
  web: {
    src: '/media/service-home-web.png',
    alt: 'Web application dashboard illustration',
  },
  mobile: {
    src: '/media/service-home-mobile.png',
    alt: 'Mobile application screens illustration',
  },
  cloud: {
    src: '/media/service-home-cloud.png',
    alt: 'Cloud and DevOps infrastructure illustration',
  },
  ai: {
    src: '/media/service-home-ai.png',
    alt: 'AI and machine learning neural network illustration',
  },
  product: {
    src: '/media/service-home-product.png',
    alt: 'Product engineering launch illustration',
  },
};

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
