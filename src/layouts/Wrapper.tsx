
'use client';

import { useEffect } from "react";
import { gsap } from 'gsap';

import animationTitle from "@/utils/animationTitle";
import DarkLight from "@/components/common/DarkLight";
import MouseMove from "@/components/common/MouseMove";
import ScrollToTop from "@/components/common/ScrollToTop";

import { scrollSmother } from "@/utils/scrollSmother";
import { buttonAnimation } from "@/utils/buttonAnimation";

import { ScrollSmoother } from "@/plugins";
gsap.registerPlugin(ScrollSmoother);

const Wrapper = ({ children }: any) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const html = document.documentElement;

      // Only run ScrollSmoother on desktop screens
      if (!html.classList.contains('no-smooth') && window.innerWidth > 1024) {
        ScrollSmoother.create({
          smooth: 1.35,
          effects: true,
          smoothTouch: false,   // disable touch-smoothing on desktop
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      } else {
        // Ensure native scrolling works on mobile
        document.body.style.overflowY = "auto";
      }
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (!html.classList.contains('no-smooth') && window.innerWidth > 1024) {
      // Only trigger animations if ScrollSmoother is active
      // buttonAnimation();
      // animationTitle();
      scrollSmother();
    }
  }, []);

  return (
    <>
      <MouseMove />
      {children}
      <ScrollToTop />
      <DarkLight />
    </>
  );
};

export default Wrapper;
