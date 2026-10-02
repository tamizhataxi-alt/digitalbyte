export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
  avatarAlt: string;
};

export const clientTestimonials: Testimonial[] = [
  {
    id: 'anbarasan',
    quote:
      'Digital Byte rebuilt our booking flow for droptaxi1.com — fewer drop-offs on mobile and clearer fare breakdowns for outstation trips across Tamil Nadu.',
    name: 'Anbarasan K.',
    role: 'Fleet Owner · Coimbatore',
    avatarSrc: '/media/gallery/03-team.jpg',
    avatarAlt: 'Anbarasan K., fleet owner',
  },
  {
    id: 'kavitha',
    quote:
      'From start to finish, communication was seamless and the design blew us away. Tamizhataxi.in finally feels like a brand our drivers are proud to share.',
    name: 'Kavitha M.',
    role: 'Operations Lead · Chennai',
    avatarSrc: '/media/gallery/05-strategy.png',
    avatarAlt: 'Kavitha M., operations lead',
  },
  {
    id: 'rajesh',
    quote:
      'They treated our taxi platform like a product, not a brochure — fast pages, Tamil-first copy, and integrations that actually match how we dispatch cars.',
    name: 'Rajesh Kumar',
    role: 'Travel Agent · Madurai',
    avatarSrc: '/media/gallery/02-analytics.png',
    avatarAlt: 'Rajesh Kumar, travel agent',
  },
  {
    id: 'meenakshi',
    quote:
      'Our campaign landing pages load in seconds even on 4G. The team understood peak-season traffic and built for it without overcomplicating the stack.',
    name: 'Meenakshi S.',
    role: 'Marketing Head · Trichy',
    avatarSrc: '/media/gallery/07-design.jpg',
    avatarAlt: 'Meenakshi S., marketing head',
  },
  {
    id: 'vignesh',
    quote:
      'From start to finish, the communication was seamless and the design blew us away. They really know how to bring a regional brand to life online.',
    name: 'Vignesh P.',
    role: 'Founder · SaaS · Chennai',
    avatarSrc: '/media/gallery/01-creator-desk.jpg',
    avatarAlt: 'Vignesh P., founder',
  },
  {
    id: 'pradeep',
    quote:
      'Admin dashboards for routes, drivers, and payouts were delivered on time. Support tickets from our ops team dropped within the first month.',
    name: 'Pradeep R.',
    role: 'Tech Lead · Salem',
    avatarSrc: '/media/gallery/06-collab.jpg',
    avatarAlt: 'Pradeep R., tech lead',
  },
  {
    id: 'divya',
    quote:
      'SEO and local listings were wired in properly — we rank for key city pairs and the site still feels clean, not stuffed with keywords.',
    name: 'Divya L.',
    role: 'Growth · Erode',
    avatarSrc: '/media/gallery/08-smm.png',
    avatarAlt: 'Divya L., growth lead',
  },
  {
    id: 'karthik',
    quote:
      'Payment links, WhatsApp handoffs, and driver onboarding all sit in one experience. Exactly what we needed for a multi-city taxi network.',
    name: 'Karthik V.',
    role: 'Product · Tiruppur',
    avatarSrc: '/media/gallery/04-growth.jpg',
    avatarAlt: 'Karthik V., product manager',
  },
  {
    id: 'lakshmi',
    quote:
      'They stayed patient through revisions and never lost sight of performance. Our customers notice the difference every time they book a cab.',
    name: 'Lakshmi N.',
    role: 'Customer Experience · Pondicherry',
    avatarSrc: '/media/gallery/05-strategy.jpg',
    avatarAlt: 'Lakshmi N., customer experience',
  },
];
