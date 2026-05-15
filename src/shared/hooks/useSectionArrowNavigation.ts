import { useEffect } from "react";

type UseSectionArrowNavigationOptions = {
  rootSelector: string;
  targetSelector: string;
};

function isInteractiveControlTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tagName = target.tagName.toLowerCase();
  return (
    target.isContentEditable ||
    tagName === "input" ||
    tagName === "textarea" ||
    tagName === "select" ||
    tagName === "button" ||
    tagName === "a" ||
    Boolean(target.closest("[role='button']"))
  );
}

function getSectionTop(section: Element) {
  return section.getBoundingClientRect().top + window.scrollY;
}

function getTargetY(target: Element) {
  return getProgressTargetY(target) ?? getElementTargetY(target);
}

function getProgressTargetY(target: Element, progressOverride?: string | null) {
  const progress = target.getAttribute("data-case-study-nav-progress");
  const progressContainerSelector = target.getAttribute("data-case-study-nav-progress-container");
  const resolvedProgress = progressOverride ?? progress;

  if (resolvedProgress && progressContainerSelector) {
    const progressContainer = target.closest(progressContainerSelector);
    if (progressContainer instanceof HTMLElement) {
      const rect = progressContainer.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const entryHold = Math.min(450, window.innerHeight * 0.45);
      const scrollableDistance = Math.max(rect.height - window.innerHeight - entryHold, window.innerHeight);
      return top + entryHold + Number(resolvedProgress) * scrollableDistance;
    }
  }

  return null;
}

function getElementTargetY(target: Element) {
  const rect = target.getBoundingClientRect();
  const top = rect.top + window.scrollY;
  const align = target.getAttribute("data-case-study-nav-align");

  if (align === "center") {
    return top + rect.height / 2 - window.innerHeight / 2;
  }

  return top;
}

function getTargetBounds(target: Element, y: number, fallbackTolerance: number) {
  const activeStart = getProgressTargetY(target, target.getAttribute("data-case-study-nav-active-start"));
  const activeEnd = getProgressTargetY(target, target.getAttribute("data-case-study-nav-active-end"));

  return {
    start: activeStart ?? y - fallbackTolerance,
    end: activeEnd ?? y + fallbackTolerance,
  };
}

export function useSectionArrowNavigation({ rootSelector, targetSelector }: UseSectionArrowNavigationOptions) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.key !== "ArrowDown" && event.key !== "ArrowUp") || event.defaultPrevented || isInteractiveControlTarget(event.target)) {
        return;
      }

      const root = document.querySelector(rootSelector);
      if (!root) {
        return;
      }

      const targets = Array.from(root.querySelectorAll(targetSelector)).filter((target) => {
        const rect = target.getBoundingClientRect();
        return rect.width > 0 || rect.height > 0 || target.hasAttribute("data-case-study-nav-marker");
      });

      if (targets.length === 0) {
        return;
      }

      const currentY = window.scrollY;
      const navigationTolerance = Math.min(260, Math.max(80, window.innerHeight * 0.22));
      const targetYValues = targets
        .map((target) => {
          const y = getTargetY(target);
          const bounds = getTargetBounds(target, y, navigationTolerance);
          return { y, ...bounds };
        })
        .sort((first, second) => first.y - second.y);
      const activeIndex = targetYValues.findIndex((target) => currentY >= target.start && currentY <= target.end);
      const directionalIndex = event.key === "ArrowDown"
        ? targetYValues.findIndex((target) => target.y > currentY + navigationTolerance)
        : targetYValues.findLastIndex((target) => target.y < currentY - navigationTolerance);
      const nextIndex = activeIndex === -1
        ? directionalIndex
        : event.key === "ArrowDown"
          ? activeIndex + 1
          : activeIndex - 1;
      const targetIndex = nextIndex < 0 || nextIndex >= targetYValues.length
        ? event.key === "ArrowDown" ? targetYValues.length - 1 : 0
        : nextIndex;

      event.preventDefault();

      if (Math.abs(targetYValues[targetIndex].y - currentY) <= navigationTolerance) {
        return;
      }

      window.scrollTo({
        top: Math.max(0, targetYValues[targetIndex].y),
        behavior: "smooth",
      });
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true });
    return () => window.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [rootSelector, targetSelector]);
}
