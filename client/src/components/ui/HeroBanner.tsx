import { useEffect, useRef, useState } from 'react';
import { heroMedia } from '../../data/siteMedia';

export function HeroBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<'loading' | 'video' | 'image'>('loading');

  useEffect(() => {
    let cancelled = false;

    fetch(heroMedia.video, { method: 'HEAD' })
      .then((res) => {
        if (cancelled) return;
        if (res.ok) setMode('video');
        else setMode('image');
      })
      .catch(() => {
        if (!cancelled) setMode('image');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (mode !== 'video') return;
    const video = videoRef.current;
    if (!video) return;
    const onError = () => setMode('image');
    video.addEventListener('error', onError);
    return () => video.removeEventListener('error', onError);
  }, [mode]);

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-secondary md:aspect-[16/11] lg:aspect-[4/5]">
      {mode === 'video' && (
        <video
          ref={videoRef}
          className="hero-media-motion h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={heroMedia.poster.src}
          aria-label={heroMedia.poster.alt}
        >
          <source src={heroMedia.video} type="video/mp4" />
        </video>
      )}

      {(mode === 'image' || mode === 'loading') && (
        <img
          src={heroMedia.poster.src}
          alt={heroMedia.poster.alt}
          className="hero-media-motion h-full w-full object-cover"
          fetchPriority="high"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
      <p className="absolute bottom-4 left-4 right-4 text-[10px] uppercase tracking-[0.2em] text-white/80">
        Product engineering · Web · Mobile · Cloud
      </p>
    </div>
  );
}
