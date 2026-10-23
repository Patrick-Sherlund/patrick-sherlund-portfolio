"use client";

import { useCallback, useEffect, useRef } from "react";

export function getProjectScrollTop(section: HTMLElement) {
  const content = section.querySelector<HTMLElement>(".project-container") ?? section;
  const rect = content.getBoundingClientRect();
  const headerHeight = document.querySelector(".project-category-controls-sticky")?.getBoundingClientRect().height ?? 0;
  const top = Math.max(headerHeight + 24, (window.innerHeight - rect.height) / 2);
  return Math.max(0, window.scrollY + rect.top - top);
}

export function useProjectArrowNavigation() {
  const destination = useRef<number | null>(null);

  const scrollTo = useCallback((top: number) => {
    destination.current = top;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.classList.contains("a11y-reduce-motion");
    window.scrollTo({ top, behavior: reduceMotion ? "instant" : "smooth" });
  }, []);

  const scrollToProject = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) scrollTo(getProjectScrollTop(section));
  }, [scrollTo]);

  useEffect(() => {
    const resetDestination = () => { destination.current = null; };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey ||
        !["ArrowDown", "ArrowUp"].includes(event.key) || !window.matchMedia("(min-width: 1024px)").matches) return;

      const target = event.target;
      if (target instanceof HTMLElement &&
        target.closest("input, textarea, select, button, a, [contenteditable], [role='button'], [role='dialog']") &&
        !target.closest("[data-project-navigation-prompt]")) return;

      const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-home-project]"));
      if (!sections.length) return;
      const down = event.key === "ArrowDown";
      const currentY = destination.current ?? window.scrollY;
      const headerHeight = document.querySelector(".project-category-controls-sticky")?.getBoundingClientRect().height ?? 0;
      const readingTallProject = destination.current === null && sections.some((section) => {
        const rect = section.querySelector(".project-container")?.getBoundingClientRect();
        if (!rect || rect.height <= window.innerHeight - headerHeight - 48) return false;
        return down
          ? rect.top <= headerHeight + 26 && rect.bottom > window.innerHeight - 24
          : rect.top < headerHeight + 22 && rect.bottom > headerHeight + 24;
      });
      if (readingTallProject) return;

      const positions = [0, ...sections.map(getProjectScrollTop)];
      const nextY = down
        ? positions.find((position) => position > currentY + 4)
        : positions.findLast((position) => position < currentY - 4);
      if (nextY === undefined) return;
      event.preventDefault();
      if (!event.repeat) scrollTo(nextY);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scrollend", resetDestination);
    window.addEventListener("wheel", resetDestination, { passive: true });
    window.addEventListener("touchstart", resetDestination, { passive: true });
    window.addEventListener("pointerdown", resetDestination, { passive: true });
    window.addEventListener("resize", resetDestination);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scrollend", resetDestination);
      window.removeEventListener("wheel", resetDestination);
      window.removeEventListener("touchstart", resetDestination);
      window.removeEventListener("pointerdown", resetDestination);
      window.removeEventListener("resize", resetDestination);
    };
  }, [scrollTo]);

  return scrollToProject;
}
