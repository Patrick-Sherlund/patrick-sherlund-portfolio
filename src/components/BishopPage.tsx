"use client";

import { useEffect } from "react";
import { BackToProjects } from "./BackToProjects";
import { BishopCaseStudyHero } from "./BishopCaseStudyHero";
import BishopChallengeVision from "./BishopChallengeVision";
import { BishopDiscover } from "./BishopDiscover";
import BishopMyRoleStack from "./BishopMyRoleStack";
import BishopUsersSaw from "./BishopUsersSaw";

const BISHOP_VIDEOS = [
  "/assets/videos/bishop_demo.mp4",
  "/assets/videos/Bishop User Session 2.mp4",
  "/assets/videos/figma board.mp4",
  "/assets/videos/Bishop User Session.mp4",
  "/assets/videos/FigJam Board.mp4",
  "/assets/videos/bishop_demo_slowed.mp4",
];

export function BishopPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    BISHOP_VIDEOS.forEach((videoUrl) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "video";
      link.href = videoUrl;
      document.head.appendChild(link);
    });

    return () => {
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="video"]');
      preloadLinks.forEach((link) => {
        if (BISHOP_VIDEOS.some((url) => link.getAttribute("href") === url)) {
          link.remove();
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#e7f4ff]">
      <BackToProjects />
      <BishopCaseStudyHero />
      <BishopMyRoleStack />
      <BishopChallengeVision />
      <BishopUsersSaw />
      <BishopDiscover />
    </div>
  );
}
