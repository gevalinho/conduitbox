// components/providers/SmoothScrollProvider.tsx
'use client';
import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";  // or GSAP's ScrollSmoother

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const isTouch = matchMedia("(hover: none) and (pointer: coarse)").matches;
    if (isTouch) return; // phones/tablets -> native scroll

    // init your smoother here (Lenis / GSAP), and clean it up in return()
  }, []);

  return <>{children}</>;
}
