import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { homeServices } from '../../data/services';
import { homeServiceMedia } from '../../data/siteMedia';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

type ServiceId = keyof typeof homeServiceMedia;

export function ServiceAreasGrid() {
  const reduced = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState<ServiceId | null>(null);
  const [canHover, setCanHover] = useState(false);
  const floatRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    setCanHover(window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  }, []);

  const tick = useCallback(() => {
    const el = floatRef.current;
    if (!el) return;
    pos.current.x += (pos.current.tx - pos.current.x) * 0.08;
    pos.current.y += (pos.current.ty - pos.current.y) * 0.08;
    el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (!canHover || reduced || !activeId) {
      cancelAnimationFrame(rafRef.current);
      return;
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [activeId, canHover, reduced, tick]);

  const onRowMove = (e: React.MouseEvent) => {
    if (!canHover || reduced) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    pos.current.tx = e.clientX - rect.left - 140;
    pos.current.ty = e.clientY - rect.top - 100;
  };

  return (
    <div className="relative mt-2">
      <ul className="divide-y divide-border">
        {homeServices.map((service) => {
          const href = service.detailRoute
            ? `/services/${service.slug}`
            : `/services#${service.slug}`;
          const media = homeServiceMedia[service.id as ServiceId];
          const isActive = activeId === service.id;

          return (
            <li key={service.id}>
              <Link
                to={href}
                data-cursor-card
                onMouseEnter={() => setActiveId(service.id as ServiceId)}
                onMouseLeave={() => setActiveId(null)}
                onMouseMove={onRowMove}
                className={`group relative block overflow-hidden py-7 transition-[padding,background-color,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:py-9 ${
                  activeId && !isActive ? 'opacity-45' : 'opacity-100'
                } ${isActive ? 'md:py-11' : ''}`}
              >
                <span
                  className={`absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 ${
                    isActive ? 'scale-y-100' : ''
                  }`}
                  aria-hidden
                />

                <div className="grid grid-cols-[3.5rem_1fr_auto] items-center gap-4 md:grid-cols-[4.5rem_1fr_12rem] md:gap-8">
                  <span
                    className="font-display text-sm font-bold tabular-nums tracking-tight text-muted transition-colors duration-300 group-hover:text-foreground md:text-base"
                    aria-hidden
                  >
                    {service.number}
                  </span>

                  <div className="min-w-0">
                    <h3
                      className="font-display text-[clamp(1.35rem,3.5vw,2.75rem)] font-bold leading-[0.95] tracking-[-0.04em] text-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 md:group-hover:translate-x-4"
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`mt-3 max-w-lg text-sm leading-relaxed text-muted transition-all duration-500 md:text-[0.9375rem] ${
                        isActive ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'
                      } overflow-hidden md:overflow-visible`}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-end gap-3">
                    <ArrowRight
                      className={`h-5 w-5 shrink-0 text-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:text-accent ${
                        isActive ? 'translate-x-1 text-accent' : ''
                      }`}
                      aria-hidden
                    />
                  </div>
                </div>

                {canHover && !reduced && isActive && (
                  <div
                    ref={floatRef}
                    className="pointer-events-none absolute z-20 hidden h-[200px] w-[280px] overflow-hidden rounded-xl border border-border bg-white shadow-[0_28px_80px_-30px_rgba(0,0,0,0.45)] md:block"
                    style={{ left: 0, top: 0, willChange: 'transform' }}
                    aria-hidden
                  >
                    <img
                      src={media.src}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
