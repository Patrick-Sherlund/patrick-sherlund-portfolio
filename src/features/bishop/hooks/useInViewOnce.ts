"use client";

import { useEffect, useState, type RefObject } from "react";

export function useInViewOnce<T extends HTMLElement>(
  ref: RefObject<T | null>,
  enabled: boolean
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!enabled) {
      setIsInView(true);
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [enabled, ref]);

  return isInView;
}
