'use client';

import { useEffect } from 'react';

export default function MobileScrollFix() {
  useEffect(() => {
    const isTouch = matchMedia('(hover: none) and (pointer: coarse)').matches;
    const isPortrait = matchMedia('(orientation: portrait)').matches;
    if (!isTouch || !isPortrait) return;

    // unlock body/html
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    document.documentElement.style.height = 'auto';
    document.body.style.height = 'auto';

    // disable transform-based smooth scroll wrappers (if present)
    const ids = ['smooth-wrapper', 'smooth-content'];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.style.transform = 'none';
        el.style.willChange = 'auto';
        el.style.height = 'auto';
        el.style.overflow = 'visible';
        (el.style as any).webkitOverflowScrolling = 'touch';
      }
    });

    // if a menu lock class was left behind, remove it
    document.body.classList.remove('menu-open', 'cs_body_overlay');
  }, []);

  return null;
}
