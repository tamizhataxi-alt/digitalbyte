import { Link } from 'react-router-dom';
import { brandLogo } from '../../data/siteMedia';

type BrandLogoProps = {
  className?: string;
  size?: 'header' | 'footer';
  /** @deprecated Glass header uses transparent PNG directly */
  onDark?: boolean;
};

const sizeClass = {
  header:
    'h-[3.35rem] w-auto max-w-[5.75rem] sm:h-[3.5rem] sm:max-w-[6rem] md:h-[3.75rem] md:max-w-[6.35rem]',
  footer:
    'h-[4.75rem] w-auto max-w-[8.25rem] md:h-[5.15rem] md:max-w-[8.85rem]',
};

export function BrandLogo({ className = '', size = 'header' }: BrandLogoProps) {
  return (
    <Link
      to="/"
      className={`group inline-flex shrink-0 items-center py-0.5 ${className}`}
      aria-label="Digital Byte home"
    >
      <img
        src={brandLogo.src}
        alt={brandLogo.alt}
        width={brandLogo.width}
        height={brandLogo.height}
        className={`block object-contain object-left object-center transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-[0.92] group-hover:scale-[1.02] ${sizeClass[size]}`}
        decoding="async"
        fetchPriority="high"
      />
    </Link>
  );
}
