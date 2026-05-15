"use client";

import { useEffect, useRef, useState } from "react";
import { bishopMediaAssets } from "../data/bishop-assets";
import { useInViewOnce } from "../hooks/useInViewOnce";
import { useMobilePinnedSection } from "../hooks/useMobilePinnedSection";

const bubblePositions = [
  { top: "8%", left: "5%", width: 213.63, height: 150 },
  { top: "5%", left: "40%", width: 278.39, height: 150 },
  { top: "10%", left: "75%", width: 211.83, height: 150 },
  { top: "68%", left: "8%", width: 281.76, height: 150 },
  { top: "70%", left: "70%", width: 280.28, height: 150 },
];

const bubbleImages = bishopMediaAssets.bubbles;

type BishopChallengeVisionProps = {
  isInteractive: boolean;
};

export function BishopChallengeVision({ isInteractive }: BishopChallengeVisionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const visionPanelRef = useRef<HTMLDivElement>(null);
  const [challengeVisionProgress, setChallengeVisionProgress] = useState(0);
  const [bubbleProgress, setBubbleProgress] = useState<number[]>([0, 0, 0, 0, 0]);
  const normalBubblesVisible = useInViewOnce(visionPanelRef, !isInteractive);
  const isMobilePinned = useMobilePinnedSection(containerRef, isInteractive);

  useEffect(() => {
    if (!isInteractive) {
      setChallengeVisionProgress(0);
      setBubbleProgress(normalBubblesVisible ? [1, 1, 1, 1, 1] : [0, 0, 0, 0, 0]);
      return;
    }

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const entryHold = Math.min(450, viewportHeight * 0.45);
      const transitionDistance = viewportHeight;

      if (rect.top <= 0 && rect.top > -(entryHold + transitionDistance)) {
        const scrollDistance = Math.abs(rect.top);
        const adjustedScrollDistance = Math.max(0, scrollDistance - entryHold);
        const newProgress = Math.min(Math.max(adjustedScrollDistance / transitionDistance, 0), 1);
        setChallengeVisionProgress(newProgress);
        setBubbleProgress([0, 0, 0, 0, 0]);
      } else if (rect.top > 0) {
        setChallengeVisionProgress(0);
        setBubbleProgress([0, 0, 0, 0, 0]);
      } else if (rect.top <= -(entryHold + transitionDistance)) {
        setChallengeVisionProgress(1);
        const bubbleScrollStart = entryHold + transitionDistance;
        const scrollPerBubble = viewportHeight * 0.5;
        const totalBubbleScroll = scrollPerBubble * 5;
        const bubbleScrollDistance = Math.abs(rect.top) - bubbleScrollStart;

        if (bubbleScrollDistance < 0) {
          setBubbleProgress([0, 0, 0, 0, 0]);
        } else if (bubbleScrollDistance > totalBubbleScroll) {
          setBubbleProgress([1, 1, 1, 1, 1]);
        } else {
          const newBubbleProgress = bubbleImages.map((_, index) => {
            const bubbleStart = index * scrollPerBubble;
            const progress = (bubbleScrollDistance - bubbleStart) / scrollPerBubble;
            return Math.min(Math.max(progress, 0), 1);
          });
          setBubbleProgress(newBubbleProgress);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInteractive, normalBubblesVisible]);

  const renderBubbles = (progressValues: number[]) =>
    bubbleImages.map((img, index) => {
      const position = bubblePositions[index];
      const progress = progressValues[index];
      const isTopRow = index < 3;

      return (
        <div
          key={index}
          className={`bishop-bubble-image ${isTopRow ? "bishop-bubble-top" : "bishop-bubble-bottom"} ${!isInteractive && progress > 0 ? "normal-bubble-visible" : ""}`}
          style={{
            top: position.top,
            left: position.left,
            width: `${position.width}px`,
            height: `${position.height}px`,
            opacity: progress,
            transform: `scale(${0.5 + progress * 0.5})`,
          }}
        >
          <img src={img} alt="" />
        </div>
      );
    });

  return (
    <div className={`bishop-challenge-vision-wrapper ${isMobilePinned ? "bishop-mobile-pinned-section" : ""}`} ref={containerRef}>
      {isInteractive && (
        <>
          <div data-case-study-nav-target data-case-study-nav-marker style={{ position: "absolute", top: 0, left: 0, width: 1, height: 1, pointerEvents: "none" }} />
          <div data-case-study-nav-target data-case-study-nav-marker style={{ position: "absolute", top: "calc(min(450px, 45vh) + 350vh)", left: 0, width: 1, height: 1, pointerEvents: "none" }} />
        </>
      )}
      <div className="bishop-challenge-vision-content">
        <div
          className="bishop-challenge-panel"
          {...(!isInteractive ? { "data-case-study-nav-target": "true", "data-case-study-nav-align": "center" } : {})}
          style={isInteractive ? { opacity: 1 - challengeVisionProgress } : undefined}
        >
          <h2 className="bishop-cv-title">The Challenge</h2>
          <p className="bishop-cv-text">
            Locating <strong>distressed humans</strong> quickly &amp; efficiently during <strong>search &amp; rescue</strong> missions.
          </p>
        </div>

        <div
          ref={visionPanelRef}
          className="bishop-vision-panel"
          {...(!isInteractive ? { "data-case-study-nav-target": "true", "data-case-study-nav-align": "center" } : {})}
          style={isInteractive ? { opacity: challengeVisionProgress } : undefined}
        >
          <h2 className="bishop-cv-title bishop-vision-title">
            <img src={bishopMediaAssets.sparkle} alt="" className="vision-sparkle-img" /> The Vision
          </h2>
          <p className="bishop-cv-text">
            <strong>AI powered</strong> drone search &amp; rescue application designed for <strong>speed, safety,</strong> and <strong>hope.</strong>
          </p>
          {!isInteractive && renderBubbles(bubbleProgress)}
        </div>

        {isInteractive && renderBubbles(bubbleProgress)}
      </div>
    </div>
  );
}
