"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./ProjectNavigationHint.module.css";

export function ProjectNavigationHint({ children, variant = "project", startWhenVisible = false }: {
  children?: ReactNode;
  variant?: "project" | "home";
  startWhenVisible?: boolean;
}) {
  const [phase, setPhase] = useState<"pending" | "visible" | "leaving" | "hidden">("pending");
  const replacementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let displayTimer: number | undefined;
    let hideTimer: number | undefined;
    let observer: IntersectionObserver | undefined;

    const dismiss = () => {
      window.clearTimeout(displayTimer);
      observer?.disconnect();
      window.removeEventListener("keydown", handleKeyDown);
      setPhase("leaving");
      hideTimer = window.setTimeout(() => setPhase("hidden"), 200);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        dismiss();
      }
    };

    const show = () => {
      observer?.disconnect();
      setPhase("visible");
      displayTimer = window.setTimeout(dismiss, 6000);
    };
    if (startWhenVisible && replacementRef.current) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.95) show();
      }, { threshold: 0.95 });
      observer.observe(replacementRef.current);
    } else {
      show();
    }
    window.addEventListener("keydown", handleKeyDown, { passive: true });

    return () => {
      window.clearTimeout(displayTimer);
      window.clearTimeout(hideTimer);
      observer?.disconnect();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [startWhenVisible]);

  const hint = phase === "visible" || phase === "leaving" ? (
    <span className={styles.hint} data-state={phase} data-variant={variant} aria-hidden="true">
      <span className={styles.keys}>
        <kbd className={`${styles.key} ${styles.up}`}>↑</kbd>
        <kbd className={`${styles.key} ${styles.left}`}>←</kbd>
        <kbd className={`${styles.key} ${styles.down}`}>↓</kbd>
        <kbd className={`${styles.key} ${styles.right}`}>→</kbd>
      </span>
      <span className={styles.copy}>Use ↑ ↓ to navigate</span>
    </span>
  ) : null;

  if (!children) {
    return hint;
  }

  return (
    <span ref={replacementRef} className={styles.replacement} data-state={phase} data-variant={variant}>
      {hint}
      <span className={styles.fallback}>{children}</span>
    </span>
  );
}
