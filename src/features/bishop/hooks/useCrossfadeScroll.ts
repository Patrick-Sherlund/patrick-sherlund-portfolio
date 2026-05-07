"use client";

import { useEffect, useState, type RefObject } from "react";

export function useCrossfadeScroll(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);
  const [isPastHalf, setIsPastHalf] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const hold = Math.min(450, viewportHeight * 0.45);
      const transitionDistance = viewportHeight;
      const total = hold + transitionDistance;

      if (rect.top <= 0 && rect.top > -total) {
        const scrollDistance = Math.abs(rect.top);
        const afterHold = Math.max(scrollDistance - hold, 0);
        const nextProgress = Math.min(Math.max(afterHold / transitionDistance, 0), 1);
        setProgress(nextProgress);
        setIsPastHalf(nextProgress > 0.5);
        return;
      }

      if (rect.top > 0) {
        setProgress(0);
        setIsPastHalf(false);
        return;
      }

      setProgress(1);
      setIsPastHalf(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return { progress, isPastHalf };
}
