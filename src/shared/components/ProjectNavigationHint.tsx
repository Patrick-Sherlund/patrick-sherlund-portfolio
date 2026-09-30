"use client";

import { useEffect, useState, type ReactNode } from "react";
import styles from "./ProjectNavigationHint.module.css";

export function ProjectNavigationHint({ children }: { children?: ReactNode }) {
  const [phase, setPhase] = useState<"pending" | "visible" | "leaving" | "hidden">("pending");

  useEffect(() => {
    setPhase("visible");
    let hideTimer: number | undefined;

    const dismiss = () => {
      window.clearTimeout(displayTimer);
      window.removeEventListener("keydown", handleKeyDown);
      setPhase("leaving");
      hideTimer = window.setTimeout(() => setPhase("hidden"), 200);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        dismiss();
      }
    };

    const displayTimer = window.setTimeout(dismiss, 6000);
    window.addEventListener("keydown", handleKeyDown, { passive: true });

    return () => {
      window.clearTimeout(displayTimer);
      window.clearTimeout(hideTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const hint = phase === "visible" || phase === "leaving" ? (
    <span className={styles.hint} data-state={phase} aria-hidden="true">
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
    <span className={styles.replacement} data-state={phase}>
      {hint}
      <span className={styles.fallback}>{children}</span>
    </span>
  );
}
