// components/common/DisableSmoothOnThisPage.tsx
'use client';

import { useEffect } from 'react';

export default function DisableSmoothOnThisPage() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    // add a page-scope flag
    html.classList.add('no-smooth');
    body.classList.remove('menu-open', 'cs_body_overlay'); // just in case

    // hard unlock
    html.style.overflow = 'auto';
    body.style.overflow = 'auto';
    html.style.height = 'auto';
    body.style.height = 'auto';
    body.style.position = 'static';

    return () => {
      html.classList.remove('no-smooth');
      // don't reset styles; other pages can apply their own
    };
  }, []);

  return null;
}
