"use client";

import { useEffect, useState } from "react";
import { useAccessibility } from "@/features/accessibility";
import { BackLink } from "@/shared/components/BackLink";
import { bishopMediaAssets } from "./data/bishop-assets";
import { BishopChallengeVision } from "./components/BishopChallengeVision";
import { BishopDiscover } from "./components/discover";
import { BishopHero } from "./components/BishopHero";
import { BishopRoleStack } from "./components/BishopRoleStack";
import { BishopUsersSaw } from "./components/BishopUsersSaw";

type BishopViewMode = "interactive" | "normal";

export function BishopRoute() {
  const [viewMode, setViewMode] = useState<BishopViewMode>("interactive");
  const { setInteractiveScrollingControl } = useAccessibility();
  const isInteractive = viewMode === "interactive";

  useEffect(() => {
    window.scrollTo(0, 0);

    bishopMediaAssets.videos.forEach((videoUrl) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "video";
      link.href = videoUrl;
      document.head.appendChild(link);
    });

    return () => {
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="video"]');
      preloadLinks.forEach((link) => {
        if (bishopMediaAssets.videos.some((url) => link.getAttribute("href") === url)) {
          link.remove();
        }
      });
    };
  }, []);

  useEffect(() => {
    setInteractiveScrollingControl({
      enabled: isInteractive,
      setEnabled: (enabled) => setViewMode(enabled ? "interactive" : "normal"),
    });

    return () => setInteractiveScrollingControl(null);
  }, [isInteractive, setInteractiveScrollingControl]);

  return (
    <div className={`bishop-page bishop-page-${viewMode} min-h-screen bg-[#e7f4ff]`}>
      <BackLink />
      <BishopHero />
      <BishopRoleStack isInteractive={isInteractive} />
      <BishopChallengeVision isInteractive={isInteractive} />
      <BishopUsersSaw />
      <BishopDiscover isInteractive={isInteractive} />
    </div>
  );
}
