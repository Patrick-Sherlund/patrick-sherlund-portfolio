"use client";

import { useEffect } from "react";
import { BackLink } from "@/shared/components/BackLink";
import { bishopMediaAssets } from "./data/bishop-assets";
import { BishopChallengeVision } from "./components/BishopChallengeVision";
import { BishopDiscover } from "./components/discover";
import { BishopHero } from "./components/BishopHero";
import { BishopRoleStack } from "./components/BishopRoleStack";
import { BishopUsersSaw } from "./components/BishopUsersSaw";

export function BishopRoute() {
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

  return (
    <div className="min-h-screen bg-[#e7f4ff]">
      <BackLink />
      <BishopHero />
      <BishopRoleStack />
      <BishopChallengeVision />
      <BishopUsersSaw />
      <BishopDiscover />
    </div>
  );
}
