import React, { useEffect, useRef, useCallback } from 'react';
import './FullPageScroll.css';

const TRANSITION_MS = 870;

export default function FullPageScroll({ children, currentIndex, onNavigate }) {
  const pageRefs    = useRef([]);
  const isAnimating = useRef(false);
  const touchStartY = useRef(null);
  const total       = React.Children.count(children);

  const navigate = useCallback((direction) => {
    if (isAnimating.current) return;
    const next = currentIndex + direction;
    if (next < 0 || next >= total) return;

    isAnimating.current = true;
    onNavigate(next);
    setTimeout(() => { isAnimating.current = false; }, TRANSITION_MS + 80);
  }, [currentIndex, onNavigate, total]);

  /* ── Wheel ──────────────────────────────────────────────────── */
  useEffect(() => {
    const handleWheel = (e) => {
      const page = pageRefs.current[currentIndex];
      if (!page) return;

      // ── Horizontal-scroll section (Timeline) ─────────────────
      const hScroll = page.querySelector('.fps-h-scroll');
      if (hScroll) {
        e.preventDefault();
        const atRight = hScroll.scrollLeft + hScroll.clientWidth >= hScroll.scrollWidth - 2;
        const atLeft  = hScroll.scrollLeft <= 2;

        if      (e.deltaY > 0 && !atRight) hScroll.scrollLeft += Math.abs(e.deltaY);
        else if (e.deltaY > 0 &&  atRight) navigate(1);
        else if (e.deltaY < 0 && !atLeft)  hScroll.scrollLeft -= Math.abs(e.deltaY);
        else if (e.deltaY < 0 &&  atLeft)  navigate(-1);
        return;
      }

      // ── Normal vertical section ───────────────────────────────
      const atBottom = page.scrollTop + page.clientHeight >= page.scrollHeight - 2;
      const atTop    = page.scrollTop <= 2;

      if (e.deltaY > 0 && atBottom) {
        e.preventDefault();
        navigate(1);
      } else if (e.deltaY < 0 && atTop) {
        e.preventDefault();
        navigate(-1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [navigate, currentIndex]);

  /* ── Touch ──────────────────────────────────────────────────── */
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      if (touchStartY.current === null) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      const page  = pageRefs.current[currentIndex];
      if (!page) return;

      // ── Horizontal-scroll section ─────────────────────────────
      const hScroll = page.querySelector('.fps-h-scroll');
      if (hScroll) {
        const atRight = hScroll.scrollLeft + hScroll.clientWidth >= hScroll.scrollWidth - 5;
        const atLeft  = hScroll.scrollLeft <= 5;

        if      (delta > 50 && !atRight) hScroll.scrollLeft += 320;
        else if (delta > 50 &&  atRight) navigate(1);
        else if (delta < -50 && !atLeft) hScroll.scrollLeft -= 320;
        else if (delta < -50 &&  atLeft) navigate(-1);

        touchStartY.current = null;
        return;
      }

      // ── Normal section ────────────────────────────────────────
      const atBottom = page.scrollTop + page.clientHeight >= page.scrollHeight - 5;
      const atTop    = page.scrollTop <= 5;

      if (delta > 70 && atBottom)    navigate(1);
      else if (delta < -70 && atTop) navigate(-1);
      touchStartY.current = null;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend',   handleTouchEnd,   { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend',   handleTouchEnd);
    };
  }, [navigate, currentIndex]);

  /* ── Keyboard ───────────────────────────────────────────────── */
  useEffect(() => {
    const handleKeydown = (e) => {
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      const page    = pageRefs.current[currentIndex];
      const hScroll = page?.querySelector('.fps-h-scroll');

      if (hScroll) {
        const atRight = hScroll.scrollLeft + hScroll.clientWidth >= hScroll.scrollWidth - 2;
        const atLeft  = hScroll.scrollLeft <= 2;

        if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
          e.preventDefault();
          if (!atRight) hScroll.scrollLeft += 320;
          else navigate(1);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
          e.preventDefault();
          if (!atLeft) hScroll.scrollLeft -= 320;
          else navigate(-1);
        }
        return;
      }

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        navigate(1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        navigate(-1);
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [navigate, currentIndex]);

  /* ── Render ─────────────────────────────────────────────────── */
  return (
    <div className="fps-viewport">
      {React.Children.map(children, (child, i) => {
        const offset = i - currentIndex;
        const cls =
          offset === 0 ? 'fps-current' :
          offset <  0 ? 'fps-above'   :
                        'fps-below';
        return (
          <div
            key={i}
            className={`fps-page ${cls}`}
            ref={el => { pageRefs.current[i] = el; }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
