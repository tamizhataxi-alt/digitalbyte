import type { LucideIcon } from 'lucide-react';
import {
  Coins,
  FileCheck,
  MessageCircle,
  SlidersHorizontal,
  Sparkles,
  Users,
} from 'lucide-react';

export type GalleryParallaxImage = {
  src: string;
  alt: string;
  /** Tailwind aspect ratio class */
  aspect: string;
};

export const galleryParallaxLeftColumn: GalleryParallaxImage[] = [
  {
    src: '/media/gallery/01-creator-desk.jpg',
    alt: 'Creator planning digital content at a modern desk',
    aspect: 'aspect-[3/4]',
  },
  {
    src: '/media/gallery/02-analytics.png',
    alt: 'Marketing analytics dashboard on a laptop',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/media/gallery/03-team.jpg',
    alt: 'Creative team collaborating on brand strategy',
    aspect: 'aspect-[5/6]',
  },
  {
    src: '/media/gallery/04-growth.jpg',
    alt: 'Celebrating strong campaign growth metrics',
    aspect: 'aspect-[3/4]',
  },
];

export const galleryParallaxRightColumn: GalleryParallaxImage[] = [
  {
    src: '/media/gallery/05-strategy.png',
    alt: 'Strategist reviewing digital marketing performance',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/media/gallery/06-collab.jpg',
    alt: 'Design workshop with color and layout exploration',
    aspect: 'aspect-[3/4]',
  },
  {
    src: '/media/gallery/07-design.jpg',
    alt: 'UX and visual design session at a shared table',
    aspect: 'aspect-[5/6]',
  },
  {
    src: '/media/gallery/08-smm.png',
    alt: 'Social media marketing dashboard on a wide display',
    aspect: 'aspect-[4/5]',
  },
];

export type GalleryParallaxFeature = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const galleryParallaxFeatures: GalleryParallaxFeature[] = [
  {
    number: '01',
    title: 'Results-driven approach',
    description: "We focus on strategies that don't just look good — they perform.",
    icon: FileCheck,
  },
  {
    number: '02',
    title: 'Customized solutions',
    description: 'Every brand is different. We tailor every campaign to your goals.',
    icon: SlidersHorizontal,
  },
  {
    number: '03',
    title: 'Full-service team',
    description: 'From content creation to paid ads, SEO and product engineering.',
    icon: Users,
  },
  {
    number: '04',
    title: 'Transparent communication',
    description: "You're always in the loop with clear updates and reporting.",
    icon: MessageCircle,
  },
  {
    number: '05',
    title: 'Affordable & scalable',
    description: "Whether you're a startup or scaling enterprise, we grow with you.",
    icon: Coins,
  },
  {
    number: '06',
    title: 'Client-centric mindset',
    description: 'Your success is our mission — we treat your brand like our own.',
    icon: Sparkles,
  },
];
