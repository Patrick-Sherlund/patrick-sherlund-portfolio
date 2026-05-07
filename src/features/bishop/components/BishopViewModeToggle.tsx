"use client";

import { Slash, Sparkles } from "lucide-react";

export type BishopViewMode = "interactive" | "normal";

type BishopViewModeToggleProps = {
  viewMode: BishopViewMode;
  onViewModeChange: (viewMode: BishopViewMode) => void;
};

export function BishopViewModeToggle({
  viewMode,
  onViewModeChange,
}: BishopViewModeToggleProps) {
  const isInteractive = viewMode === "interactive";
  const nextViewMode = isInteractive ? "normal" : "interactive";

  return (
    <button
      type="button"
      className={`bishop-view-mode-toggle ${isInteractive ? "active" : ""}`}
      aria-label={isInteractive ? "Switch to normal scrolling view" : "Switch to interactive view"}
      aria-pressed={isInteractive}
      title={isInteractive ? "Interactive view" : "Normal scrolling view"}
      onClick={() => onViewModeChange(nextViewMode)}
    >
      <span className="bishop-view-mode-icon">
        <Sparkles size={21} strokeWidth={2.2} />
        {!isInteractive && <Slash className="bishop-view-mode-slash" size={25} strokeWidth={2.4} />}
      </span>
    </button>
  );
}
