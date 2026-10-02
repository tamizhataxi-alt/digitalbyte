export const EASE_OUT_EXPO = 'expo.out';
export const EASE_SMOOTH = 'cubic-bezier(0.22, 1, 0.36, 1)';

/** GSAP-compatible ease string */
export const GSAP_EASE = 'power3.out';

export type RevealVariant =
  | 'text'
  | 'heading'
  | 'image'
  | 'card'
  | 'shape'
  | 'fade'
  | 'slide-left'
  | 'slide-right';

export function getRevealFrom(variant: RevealVariant, reduced: boolean) {
  if (reduced) {
    return { opacity: 0 };
  }

  switch (variant) {
    case 'heading':
      return { opacity: 0, y: 100 };
    case 'text':
      return { opacity: 0, y: 60 };
    case 'image':
      return { opacity: 0.7, scale: 1.08 };
    case 'card':
      return { opacity: 0, y: 80, scale: 0.96 };
    case 'shape':
      return { opacity: 0, y: 40, rotation: -8 };
    case 'slide-left':
      return { opacity: 0, x: -48, y: 24 };
    case 'slide-right':
      return { opacity: 0, x: 48, y: 24 };
    default:
      return { opacity: 0, y: 40 };
  }
}

export function getRevealTo(variant: RevealVariant, reduced: boolean) {
  if (reduced) {
    return { opacity: 1 };
  }

  switch (variant) {
    case 'image':
      return { opacity: 1, scale: 1 };
    case 'shape':
      return { opacity: 1, y: 0, rotation: 0 };
    case 'card':
      return { opacity: 1, y: 0, scale: 1 };
    default:
      return { opacity: 1, y: 0, x: 0 };
  }
}
