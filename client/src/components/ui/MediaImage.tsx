import type { MediaAsset } from '../../data/siteMedia';

type MediaImageProps = {
  media: MediaAsset;
  className?: string;
  priority?: boolean;
  overlay?: 'none' | 'light' | 'dark';
};

export function MediaImage({
  media,
  className = '',
  priority = false,
  overlay = 'none',
}: MediaImageProps) {
  const overlayClass = {
    none: '',
    light: 'bg-white/10',
    dark: 'bg-primary/35',
  }[overlay];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className="h-full w-full object-cover"
      />
      {overlay !== 'none' && (
        <div
          className={`pointer-events-none absolute inset-0 ${overlayClass}`}
          aria-hidden
        />
      )}
    </div>
  );
}
