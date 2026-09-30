import type { NavItem } from '../types';

export const mainNav: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export const footerNav: NavItem[] = [
  ...mainNav,
  { label: 'Contact', href: '/contact' },
];

export const footerServices: NavItem[] = [
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'Mobile Development', href: '/services/mobile-development' },
  { label: 'Cloud & DevOps', href: '/services/cloud-devops' },
  { label: 'AI & ML', href: '/services/ai-ml' },
  { label: 'Product Engineering', href: '/services#product-engineering' },
];
