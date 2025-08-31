// components/common/DisableSmoothOnThisPage.tsx
'use client';

import { useEffect } from 'react';

export default function DisableSmoothOnThisPage() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    // Add a page-scope flag
    html.classList.add('no-smooth');
    body.classList.remove('menu-open', 'cs_body_overlay'); // Just in case

    // Ensure scrolling works across all devices
    html.style.overflow = 'visible'; // Allow scrolling
    body.style.overflow = 'visible';
    html.style.height = '100%'; // Ensure proper height
    body.style.height = '100%';
    body.style.position = 'relative'; // Avoid static positioning issues

    // Android-specific fix: Ensure proper scrolling
    (html.style as any).webkitOverflowScrolling = 'touch'; // Enable smooth scrolling on Android
    (body.style as any).webkitOverflowScrolling = 'touch';

    // Additional Android-specific fix for portrait mode
    if (/Android/i.test(navigator.userAgent)) {
      body.style.minHeight = '100vh'; // Ensure body takes full viewport height
    }

    return () => {
      html.classList.remove('no-smooth');
      // Cleanup styles
      html.style.overflow = '';
      body.style.overflow = '';
      html.style.height = '';
      body.style.height = '';
      body.style.position = ''; 
      (html.style as any).webkitOverflowScrolling = '';
      (body.style as any).webkitOverflowScrolling = '';
      body.style.minHeight = '';
    };
  }, []);

  return null;
}
