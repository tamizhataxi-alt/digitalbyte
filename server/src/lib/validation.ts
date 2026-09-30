const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_RE.test(value);
}

export function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

export const ALLOWED_SERVICES = [
  'Web Development',
  'Mobile App Development',
  'Cloud & DevOps',
  'AI / ML',
  'API / Backend Development',
  'Other',
];

export const ALLOWED_BUDGETS = [
  'Under ₹1 Lakh',
  '₹1–3 Lakh',
  '₹3–5 Lakh',
  '₹5 Lakh+',
  'Not sure yet',
];
