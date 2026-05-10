"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

type StickySection = "discover" | "define" | "develop" | "deliver";

function getTranslateX(el: HTMLElement) {
  const transform = window.getComputedStyle(el).transform;
  if (!transform || transform === "none") {
    return 0;
  }

  const matrix2d = transform.match(/^matrix\((.+)\)$/);
  if (matrix2d) {
    const parts = matrix2d[1].split(",").map((part) => parseFloat(part.trim()));
    return parts[4] || 0;
  }

  const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
  if (matrix3d) {
    const parts = matrix3d[1].split(",").map((part) => parseFloat(part.trim()));
    return parts[12] || 0;
  }

  return 0;
}

export function useStickySection(
  sectionRef: RefObject<HTMLElement | null>,
  headerRef: RefObject<HTMLDivElement | null>,
  currentSection: StickySection,
  enabled = true
) {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [showCentered, setShowCentered] = useState(false);
  const isHeaderStickyRef = useRef(false);
  const showCenteredRef = useRef(false);
  const previousSectionRef = useRef<StickySection>("discover");
  const centerTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const setStickyState = (nextValue: boolean) => {
      if (isHeaderStickyRef.current === nextValue) {
        return;
      }

      isHeaderStickyRef.current = nextValue;
      setIsHeaderSticky(nextValue);
    };

    const setCenteredState = (nextValue: boolean) => {
      if (showCenteredRef.current === nextValue) {
        return;
      }

      showCenteredRef.current = nextValue;
      setShowCentered(nextValue);
    };

    if (!enabled) {
      if (centerTimeoutRef.current !== null) {
        window.clearTimeout(centerTimeoutRef.current);
        centerTimeoutRef.current = null;
      }
      setCenteredState(false);
      setStickyState(false);
      headerRef.current?.style.removeProperty("--discover-center-shift");
      return;
    }

    const computeCenterShift = () => {
      const headerEl = headerRef.current;
      if (!headerEl) {
        return;
      }

      const contentEl = headerEl.querySelector(".bishop-discover-header-content") as HTMLDivElement | null;
      if (!contentEl) {
        return;
      }

      const headerRect = headerEl.getBoundingClientRect();
      const contentRect = contentEl.getBoundingClientRect();
      const headerStyles = window.getComputedStyle(headerEl);
      const paddingLeft = parseFloat(headerStyles.paddingLeft) || 0;
      const paddingRight = parseFloat(headerStyles.paddingRight) || 0;
      const usableWidth = headerRect.width - paddingLeft - paddingRight;
      const desiredLeft = headerRect.left + paddingLeft + (usableWidth - contentRect.width) / 2;
      const currentTranslateX = getTranslateX(contentEl);
      const baselineLeft = contentRect.left - currentTranslateX;
      const shift = desiredLeft - baselineLeft;

      headerEl.style.setProperty("--discover-center-shift", `${shift}px`);
    };

    const handleScroll = () => {
      const sectionEl = sectionRef.current;
      const headerEl = headerRef.current;
      if (!sectionEl || !headerEl) {
        return;
      }

      const sectionRect = sectionEl.getBoundingClientRect();
      const headerHeight = headerEl.offsetHeight;
      const isMobileViewport = window.matchMedia("(max-width: 640px)").matches;
      const stickyTolerance = isMobileViewport ? 64 : 0;
      const hasReachedTop = isHeaderStickyRef.current
        ? sectionRect.top <= stickyTolerance
        : sectionRect.top <= 0;
      const hasEnoughRoom = isHeaderStickyRef.current
        ? sectionRect.bottom > headerHeight - stickyTolerance
        : sectionRect.bottom > headerHeight;
      const shouldBeSticky = hasReachedTop && hasEnoughRoom;

      if (shouldBeSticky && !isHeaderStickyRef.current) {
        setStickyState(true);
        centerTimeoutRef.current = window.setTimeout(() => {
          centerTimeoutRef.current = null;
          computeCenterShift();
          setCenteredState(true);
        }, 50);
        return;
      }

      if (!shouldBeSticky && isHeaderStickyRef.current) {
        if (centerTimeoutRef.current !== null) {
          window.clearTimeout(centerTimeoutRef.current);
          centerTimeoutRef.current = null;
        }
        setCenteredState(false);
        setStickyState(false);
        headerEl.style.removeProperty("--discover-center-shift");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (centerTimeoutRef.current !== null) {
        window.clearTimeout(centerTimeoutRef.current);
        centerTimeoutRef.current = null;
      }
    };
  }, [enabled, headerRef, sectionRef]);

  useEffect(() => {
    if (!enabled || !isHeaderSticky) {
      return;
    }

    const handleResize = () => {
      const headerEl = headerRef.current;
      if (!headerEl) {
        return;
      }

      const contentEl = headerEl.querySelector(".bishop-discover-header-content") as HTMLDivElement | null;
      if (!contentEl) {
        return;
      }

      const headerRect = headerEl.getBoundingClientRect();
      const contentRect = contentEl.getBoundingClientRect();
      const headerStyles = window.getComputedStyle(headerEl);
      const paddingLeft = parseFloat(headerStyles.paddingLeft) || 0;
      const paddingRight = parseFloat(headerStyles.paddingRight) || 0;
      const usableWidth = headerRect.width - paddingLeft - paddingRight;
      const desiredLeft = headerRect.left + paddingLeft + (usableWidth - contentRect.width) / 2;
      const currentTranslateX = getTranslateX(contentEl);
      const baselineLeft = contentRect.left - currentTranslateX;
      const shift = desiredLeft - baselineLeft;

      headerEl.style.setProperty("--discover-center-shift", `${shift}px`);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [enabled, headerRef, isHeaderSticky, showCentered]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const headerEl = headerRef.current;
    if (!headerEl || !isHeaderSticky || !showCentered || previousSectionRef.current === currentSection) {
      return;
    }

    previousSectionRef.current = currentSection;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const contentEl = headerEl.querySelector(".bishop-discover-header-content") as HTMLDivElement | null;
        if (!contentEl) {
          return;
        }

        const headerRect = headerEl.getBoundingClientRect();
        const contentRect = contentEl.getBoundingClientRect();
        const headerStyles = window.getComputedStyle(headerEl);
        const paddingLeft = parseFloat(headerStyles.paddingLeft) || 0;
        const paddingRight = parseFloat(headerStyles.paddingRight) || 0;
        const usableWidth = headerRect.width - paddingLeft - paddingRight;
        const desiredLeft = headerRect.left + paddingLeft + (usableWidth - contentRect.width) / 2;
        const currentTranslateX = getTranslateX(contentEl);
        const baselineLeft = contentRect.left - currentTranslateX;
        const shift = desiredLeft - baselineLeft;

        headerEl.style.setProperty("--discover-center-shift", `${shift}px`);
      });
    });
  }, [currentSection, headerRef, isHeaderSticky, showCentered]);

  return { isHeaderSticky, showCentered };
}
