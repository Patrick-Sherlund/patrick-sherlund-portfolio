"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

type StickySection = "discover" | "define";

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
  currentSection: StickySection
) {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [showCentered, setShowCentered] = useState(false);
  const previousSectionRef = useRef<StickySection>("discover");

  useEffect(() => {
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
      const shouldBeSticky = sectionRect.top <= 0 && sectionRect.bottom > headerHeight;

      if (shouldBeSticky && !isHeaderSticky) {
        setIsHeaderSticky(true);
        window.setTimeout(() => {
          computeCenterShift();
          setShowCentered(true);
        }, 50);
        return;
      }

      if (!shouldBeSticky && isHeaderSticky) {
        setShowCentered(false);
        setIsHeaderSticky(false);
        headerEl.style.removeProperty("--discover-center-shift");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerRef, isHeaderSticky, sectionRef]);

  useEffect(() => {
    if (!isHeaderSticky) {
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
  }, [headerRef, isHeaderSticky, showCentered]);

  useEffect(() => {
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
