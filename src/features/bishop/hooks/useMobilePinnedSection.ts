"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export function useMobilePinnedSection<T extends HTMLElement>(
  sectionRef: RefObject<T | null>,
  enabled = true
) {
  const [isPinned, setIsPinned] = useState(false);
  const isPinnedRef = useRef(false);

  useEffect(() => {
    const setPinnedState = (nextValue: boolean) => {
      if (isPinnedRef.current === nextValue) {
        return;
      }

      isPinnedRef.current = nextValue;
      setIsPinned(nextValue);
    };

    if (!enabled) {
      setPinnedState(false);
      return;
    }

    const handlePosition = () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) {
        return;
      }

      const isMobileViewport = window.matchMedia("(max-width: 640px)").matches;
      if (!isMobileViewport) {
        setPinnedState(false);
        return;
      }

      const rect = sectionEl.getBoundingClientRect();
      const pinnedEl = sectionEl.firstElementChild as HTMLElement | null;
      const pinnedHeight = pinnedEl?.getBoundingClientRect().height || window.visualViewport?.height || window.innerHeight;
      const shouldPin = rect.top <= 0 && rect.bottom > pinnedHeight;

      setPinnedState(shouldPin);
    };

    const visualViewport = window.visualViewport;

    window.addEventListener("scroll", handlePosition, { passive: true });
    window.addEventListener("resize", handlePosition);
    visualViewport?.addEventListener("resize", handlePosition);
    visualViewport?.addEventListener("scroll", handlePosition);
    handlePosition();

    return () => {
      window.removeEventListener("scroll", handlePosition);
      window.removeEventListener("resize", handlePosition);
      visualViewport?.removeEventListener("resize", handlePosition);
      visualViewport?.removeEventListener("scroll", handlePosition);
    };
  }, [enabled, sectionRef]);

  return isPinned;
}
