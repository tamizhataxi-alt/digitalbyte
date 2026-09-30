import { useEffect, useRef, useState } from 'react';

type CursorState = 'default' | 'link' | 'card' | 'click';

function resolveCursorState(element: Element | null): CursorState {
  if (!element) return 'default';

  if (element.closest('[data-cursor-card], a.group')) return 'card';

  if (
    element.closest(
      'a, button, .pill-btn, [role="button"], input[type="submit"], input[type="button"], select, textarea, label',
    )
  ) {
    return 'link';
  }

  return 'default';
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<CursorState>('default');
  const [visible, setVisible] = useState(false);

  const target = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const dotTrackRef = useRef<HTMLDivElement>(null);
  const ringTrackRef = useRef<HTMLDivElement>(null);
  const clickRef = useRef(false);
  const rafId = useRef(0);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const activate = () => {
      if (!finePointer.matches || reducedMotion.matches) {
        setEnabled(false);
        document.documentElement.classList.remove('custom-cursor-active');
        return;
      }
      setEnabled(true);
      document.documentElement.classList.add('custom-cursor-active');
    };

    activate();
    finePointer.addEventListener('change', activate);
    reducedMotion.addEventListener('change', activate);

    return () => {
      finePointer.removeEventListener('change', activate);
      reducedMotion.removeEventListener('change', activate);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      setVisible(true);

      if (clickRef.current) return;
      const hit = document.elementFromPoint(e.clientX, e.clientY);
      setState(resolveCursorState(hit));
    };

    const onLeave = () => setVisible(false);

    const onDown = () => {
      clickRef.current = true;
      setState('click');
    };

    const onUp = () => {
      clickRef.current = false;
      const hit = document.elementFromPoint(target.current.x, target.current.y);
      setState(resolveCursorState(hit));
    };

    const tick = () => {
      dotPos.current.x += (target.current.x - dotPos.current.x) * 0.42;
      dotPos.current.y += (target.current.y - dotPos.current.y) * 0.42;
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.1;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.1;

      if (dotTrackRef.current) {
        dotTrackRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringTrackRef.current) {
        ringTrackRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className={`custom-cursor ${visible ? 'is-visible' : ''}`}
      data-state={state}
      aria-hidden
    >
      <div ref={ringTrackRef} className="custom-cursor__track">
        <div className="custom-cursor__ring" />
      </div>
      <div ref={dotTrackRef} className="custom-cursor__track custom-cursor__track--dot">
        <div className="custom-cursor__dot" />
      </div>
    </div>
  );
}
