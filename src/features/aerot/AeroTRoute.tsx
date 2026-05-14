"use client";

import Link from "next/link";
import { Activity, ChevronDown, Cpu, GitBranch, Map, Radio, Settings, Tablet, Wifi, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { useAccessibility } from "@/features/accessibility";
import { BackLink } from "@/shared/components/BackLink";
import { DeviceFrame } from "@/shared/components/DeviceFrame";
import { VideoOverlay } from "@/shared/components/VideoOverlay";
import { deviceAssets } from "@/shared/media/asset-paths";
import { bishopMediaAssets } from "@/features/bishop/data/bishop-assets";
import { DiscoverHeader, type DiscoverSectionId } from "@/features/bishop/components/discover/DiscoverHeader";
import { ProcessStepper } from "@/features/bishop/components/discover/ProcessStepper";
import { ProblemSuccessSection } from "@/features/bishop/components/discover/ProblemSuccessSection";
import { useCrossfadeScroll } from "@/features/bishop/hooks/useCrossfadeScroll";
import { useInViewOnce } from "@/features/bishop/hooks/useInViewOnce";
import { useMobilePinnedSection } from "@/features/bishop/hooks/useMobilePinnedSection";
import { useStickySection } from "@/features/bishop/hooks/useStickySection";
import { useVideoStepProgress } from "@/features/bishop/hooks/useVideoStepProgress";
import { aerotContent } from "./data/aerot-content";

type AeroTViewMode = "interactive" | "normal";

function AeroTIcon({ name, className }: { name: string; className?: string }) {
  const iconProps = { className, "aria-hidden": true, strokeWidth: 2 };

  if (name === "activity") {
    return <Activity {...iconProps} />;
  }

  if (name === "cpu") {
    return <Cpu {...iconProps} />;
  }

  if (name === "git") {
    return <GitBranch {...iconProps} />;
  }

  if (name === "map") {
    return <Map {...iconProps} />;
  }

  if (name === "radio") {
    return <Radio {...iconProps} />;
  }

  if (name === "settings") {
    return <Settings {...iconProps} />;
  }

  if (name === "tablet") {
    return <Tablet {...iconProps} />;
  }

  if (name === "wifi") {
    return <Wifi {...iconProps} />;
  }

  return <Zap {...iconProps} />;
}

function AeroTHero() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const opacity = Math.max(0, 1 - window.scrollY / 400);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToStart = () => {
    const firstSection = document.getElementById("aerot-case-study-start");
    if (!firstSection) {
      return;
    }

    const targetTop = firstSection.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  };

  return (
    <section className="bishop-hero-section aerot-hero-section">
      <div className="bishop-hero-container aerot-hero-container">
        <div className="bishop-hero-left aerot-hero-left">
          <div className="bishop-number">{aerotContent.hero.number}</div>
          <div className="aerot-wordmark-group">
            <h1 className="aerot-wordmark">{aerotContent.hero.title}</h1>
            <p className="aerot-subtitle">{aerotContent.hero.subtitle}</p>
          </div>
          <p className="bishop-description aerot-description">{aerotContent.hero.description}</p>
          <p className="bishop-timeline">{aerotContent.hero.timeline}</p>
          <div className="bishop-team-info aerot-hero-team-info">
            {aerotContent.hero.team.map((member, index) => (
              <div className="aerot-hero-team-group" key={member.name}>
                {index > 0 && <div className="bishop-team-divider">|</div>}
                <div className="bishop-team-column">
                  <div className="bishop-team-role">{member.role}</div>
                  <div className="bishop-team-name">{member.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bishop-hero-right aerot-hero-right">
          <div className="aerot-hero-device">
            <DeviceFrame device="laptop" title="AeroT">
              <VideoOverlay src="/assets/videos/aerot.mp4" className="video-container" />
            </DeviceFrame>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="bishop-scroll-indicator aerot-scroll-indicator"
        onClick={handleScrollToStart}
        style={{ opacity: scrollOpacity, transition: "opacity 0.1s linear" }}
      >
        <span className="bishop-scroll-text">See case study below</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} color="#6b7280" strokeWidth={2} />
        </motion.div>
      </button>
    </section>
  );
}

function AeroTTeam() {
  return (
    <section className="bishop-team-section aerot-team-section" id="aerot-case-study-start">
      <div className="bishop-team-section-content aerot-team-section-content">
        <h2 className="bishop-team-section-title">The Team</h2>
        <div className="aerot-team-layout">
          <article className="bishop-team-member-card aerot-team-lead-card">
            <img src={bishopMediaAssets.team.patrick} alt="Patrick Sherlund" className="bishop-team-member-image" />
            <h3 className="bishop-team-member-name">Patrick Sherlund</h3>
            <p className="bishop-team-member-role">Senior Software Engineer / Project Lead</p>
          </article>
          <div className="aerot-team-credits">
            <img src={aerotContent.images.wholeTeam.src} alt={aerotContent.images.wholeTeam.alt} className="aerot-team-credits-photo" />
            <div className="aerot-team-credit-group">
              <h3>Stakeholder Leadership</h3>
              {aerotContent.team.primary.map((member) => (
                <div className="aerot-team-credit" key={member.name}>
                  <span>{member.name}</span>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
            <div className="aerot-team-credit-group">
              <h3>Additional Contributors</h3>
              <div className="aerot-team-contributor-grid">
                {aerotContent.team.contributors.map((member) => (
                  <div className="aerot-team-credit" key={member.name}>
                    <span>{member.name}</span>
                    <p>{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type AeroTImageKey = keyof typeof aerotContent.images;

function getAeroTImage(imageKey?: string) {
  if (!imageKey || !(imageKey in aerotContent.images)) {
    return null;
  }

  return aerotContent.images[imageKey as AeroTImageKey];
}

function AeroTPhotoCard({ imageKey, className = "" }: { imageKey?: string; className?: string }) {
  const image = getAeroTImage(imageKey);

  if (!image) {
    return null;
  }

  return (
    <div className={`aerot-photo-card ${className}`}>
      <img src={image.src} alt={image.alt} />
    </div>
  );
}

function AeroTRoleStack({ isInteractive }: { isInteractive: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const isMobilePinned = useMobilePinnedSection(containerRef, isInteractive);
  const leftStack = aerotContent.role.stack.slice(0, 3);
  const rightStack = aerotContent.role.stack.slice(3);

  useEffect(() => {
    if (!isInteractive) {
      setProgress(0);
      return;
    }

    const handleScroll = () => {
      if (!containerRef.current) {
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const entryHold = Math.min(450, viewportHeight * 0.45);
      const transitionDistance = viewportHeight;

      if (rect.top <= 0 && rect.top > -(entryHold + transitionDistance)) {
        const scrollDistance = Math.abs(rect.top);
        const adjustedScrollDistance = Math.max(0, scrollDistance - entryHold);
        setProgress(Math.min(Math.max(adjustedScrollDistance / transitionDistance, 0), 1));
        return;
      }

      if (rect.top > 0) {
        setProgress(0);
        return;
      }

      setProgress(1);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInteractive]);

  const renderStackColumn = (items: typeof aerotContent.role.stack) => (
    <div className="bishop-stack-column">
      {items.map((item) => (
        <div className="bishop-stack-item" key={item.category}>
          <div className="bishop-stack-category">{item.category}</div>
          <div className="bishop-stack-tech">
            <div className="bishop-stack-icons">
              <AeroTIcon name={item.icon} className="bishop-stack-icon aerot-stack-icon" />
            </div>
            <span className="bishop-stack-name">{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={`bishop-my-role-stack-wrapper ${isMobilePinned ? "bishop-mobile-pinned-section" : ""}`} ref={containerRef}>
      <div className="bishop-my-role-stack-content">
        <div className="bishop-my-role-panel" style={isInteractive ? { opacity: 1 - progress } : undefined}>
          <h2 className="bishop-mrs-title">{aerotContent.role.title}</h2>
          <p className="bishop-mrs-text aerot-role-text">{aerotContent.role.text}</p>
        </div>
        <div className="bishop-stack-panel" style={isInteractive ? { opacity: progress } : undefined}>
          <h2 className="bishop-mrs-title">{aerotContent.role.stackTitle}</h2>
          <div className="bishop-stack-grid aerot-stack-grid">
            {renderStackColumn(leftStack)}
            {renderStackColumn(rightStack)}
          </div>
        </div>
      </div>
    </div>
  );
}

function AeroTChallengeVision({ isInteractive }: { isInteractive: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const visionPanelRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [bubbleProgress, setBubbleProgress] = useState(aerotContent.challengeVision.bubbles.map(() => 0));
  const normalBubblesVisible = useInViewOnce(visionPanelRef, !isInteractive);
  const isMobilePinned = useMobilePinnedSection(containerRef, isInteractive);

  useEffect(() => {
    if (!isInteractive) {
      setProgress(0);
      setBubbleProgress(aerotContent.challengeVision.bubbles.map(() => (normalBubblesVisible ? 1 : 0)));
      return;
    }

    const handleScroll = () => {
      if (!containerRef.current) {
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const entryHold = Math.min(450, viewportHeight * 0.45);
      const transitionDistance = viewportHeight;

      if (rect.top <= 0 && rect.top > -(entryHold + transitionDistance)) {
        const scrollDistance = Math.abs(rect.top);
        const adjustedScrollDistance = Math.max(0, scrollDistance - entryHold);
        setProgress(Math.min(Math.max(adjustedScrollDistance / transitionDistance, 0), 1));
        setBubbleProgress(aerotContent.challengeVision.bubbles.map(() => 0));
        return;
      }

      if (rect.top > 0) {
        setProgress(0);
        setBubbleProgress(aerotContent.challengeVision.bubbles.map(() => 0));
        return;
      }

      setProgress(1);
      const bubbleScrollStart = entryHold + transitionDistance;
      const scrollPerBubble = viewportHeight * 0.46;
      const bubbleScrollDistance = Math.abs(rect.top) - bubbleScrollStart;
      setBubbleProgress(
        aerotContent.challengeVision.bubbles.map((_, index) => {
          const bubbleStart = index * scrollPerBubble;
          const nextProgress = (bubbleScrollDistance - bubbleStart) / scrollPerBubble;
          return Math.min(Math.max(nextProgress, 0), 1);
        })
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInteractive, normalBubblesVisible]);

  const bubblePositions = [
    { top: "8%", left: "6%" },
    { top: "5%", left: "39%" },
    { top: "11%", left: "73%" },
    { top: "70%", left: "9%" },
    { top: "72%", left: "68%" },
  ];

  const renderBubbles = () =>
    aerotContent.challengeVision.bubbles.map((bubble, index) => {
      const bubbleState = bubbleProgress[index];
      const position = bubblePositions[index];
      const isTopRow = index < 3;

      return (
        <div
          className={`bishop-bubble-image aerot-signal-bubble ${isTopRow ? "bishop-bubble-top" : "bishop-bubble-bottom"} ${!isInteractive && bubbleState > 0 ? "normal-bubble-visible" : ""}`}
          key={bubble}
          style={{
            top: position.top,
            left: position.left,
            opacity: bubbleState,
            transform: `scale(${0.5 + bubbleState * 0.5})`,
          }}
        >
          <Radio aria-hidden="true" size={20} />
          <span>{bubble}</span>
        </div>
      );
    });

  return (
    <div className={`bishop-challenge-vision-wrapper ${isMobilePinned ? "bishop-mobile-pinned-section" : ""}`} ref={containerRef}>
      <div className="bishop-challenge-vision-content">
        <div className="bishop-challenge-panel" style={isInteractive ? { opacity: 1 - progress } : undefined}>
          <h2 className="bishop-cv-title">{aerotContent.challengeVision.challengeTitle}</h2>
          <p className="bishop-cv-text">{aerotContent.challengeVision.challengeText}</p>
        </div>
        <div ref={visionPanelRef} className="bishop-vision-panel" style={isInteractive ? { opacity: progress } : undefined}>
          <h2 className="bishop-cv-title bishop-vision-title aerot-vision-title">{aerotContent.challengeVision.visionTitle}</h2>
          <p className="bishop-cv-text">{aerotContent.challengeVision.visionText}</p>
          {!isInteractive && renderBubbles()}
        </div>
        {isInteractive && renderBubbles()}
      </div>
    </div>
  );
}

function AeroTOutcomes({ isInteractive }: { isInteractive: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isMobilePinned = useMobilePinnedSection(sectionRef, isInteractive);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <section className={`bishop-users-saw aerot-users-saw ${isMobilePinned ? "bishop-mobile-pinned-section" : ""}`} ref={sectionRef}>
      <div className="bishop-users-saw-container">
        <h2 className={`bishop-users-saw-title ${isVisible ? "bubble-in" : ""}`}>{aerotContent.outcomes.title}</h2>
        <div className="bishop-users-saw-stats aerot-users-saw-stats">
          {aerotContent.outcomes.stats.map((stat, index) => (
            <div className={`bishop-stat-card ${isVisible ? "bubble-in" : ""}`} style={{ animationDelay: `${0.2 + index * 0.16}s` }} key={stat.value}>
              <div className="bishop-stat-card-inner">
                <div className="bishop-stat-value">{stat.value}</div>
                <div className="bishop-stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AeroTVisualRail({ items }: { items: string[] }) {
  return (
    <div className="aerot-visual-rail" aria-label="AeroT image placeholders">
      {[...items, ...items].map((item, index) => (
        <article className={`aerot-visual-placeholder aerot-visual-placeholder-${(index % 4) + 1}`} key={`${item}-${index}`}>
          <span>Image direction</span>
          <p>{item}</p>
        </article>
      ))}
    </div>
  );
}

function AeroTStickySection({
  children,
  className,
  isMobilePinned,
  sectionRef,
}: {
  children: ReactNode;
  className: string;
  isMobilePinned: boolean;
  sectionRef: RefObject<HTMLElement | null>;
}) {
  return (
    <section
      className={`aerot-interactive-section ${className} ${isMobilePinned ? "bishop-mobile-pinned-section" : ""}`}
      ref={sectionRef}
    >
      <div className="aerot-interactive-section-content">{children}</div>
    </section>
  );
}

function AeroTContextSection({
  sectionRef,
  isInteractive,
  isMobilePinned,
  progress,
  railVisible,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  isInteractive: boolean;
  isMobilePinned: boolean;
  progress: number;
  railVisible: boolean;
}) {
  const researchPanelRef = useRef<HTMLDivElement>(null);
  const normalRailVisible = useInViewOnce(researchPanelRef, !isInteractive);

  return (
    <div className={`bishop-context-research-wrapper aerot-context-wrapper ${isMobilePinned ? "bishop-mobile-pinned-section" : ""}`} ref={sectionRef}>
      <div className="bishop-context-research-content">
        <div className="bishop-context-panel" style={isInteractive ? { opacity: 1 - progress } : undefined}>
          <h3 className="bishop-context-title-text">{aerotContent.context.title}</h3>
          <p className="bishop-context-text">{aerotContent.context.text}</p>
        </div>
        <div ref={researchPanelRef} className="bishop-research-panel aerot-research-panel" style={isInteractive ? { opacity: progress } : undefined}>
          <h2 className="bishop-research-title">{aerotContent.context.researchTitle}</h2>
          {(!isInteractive && normalRailVisible) && <AeroTVisualRail items={aerotContent.context.imageDirections} />}
        </div>
        {isInteractive && railVisible && <AeroTVisualRail items={aerotContent.context.imageDirections} />}
      </div>
    </div>
  );
}

function AeroTDiscoveryInsights({
  isMobilePinned,
  sectionRef,
}: {
  isMobilePinned: boolean;
  sectionRef: RefObject<HTMLElement | null>;
}) {
  return (
    <AeroTStickySection className="aerot-insights-section" isMobilePinned={isMobilePinned} sectionRef={sectionRef}>
      <div className="aerot-section-inner">
        <h2 className="aerot-section-title">{aerotContent.discoveryInsights.title}</h2>
        <div className="aerot-insight-grid">
          {aerotContent.discoveryInsights.cards.map((card) => (
            <article className="aerot-insight-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </AeroTStickySection>
  );
}

function AeroTArchitectureSection({
  isMobilePinned,
  sectionRef,
}: {
  isMobilePinned: boolean;
  sectionRef: RefObject<HTMLElement | null>;
}) {
  return (
    <AeroTStickySection className="aerot-architecture-section" isMobilePinned={isMobilePinned} sectionRef={sectionRef}>
      <div className="aerot-section-inner">
        <div className="aerot-section-heading">
          <h2 className="aerot-section-title">{aerotContent.architecture.title}</h2>
          <p className="aerot-section-lead">{aerotContent.architecture.text}</p>
        </div>
        <div className="aerot-architecture-grid">
          {aerotContent.architecture.surfaces.map((surface) => (
            <article className="aerot-architecture-card" key={surface.title}>
              <div className="aerot-card-eyebrow">{surface.eyebrow}</div>
              <h3>{surface.title}</h3>
              <p>{surface.text}</p>
              {surface.imageKey ? (
                <AeroTPhotoCard imageKey={surface.imageKey} className="aerot-card-photo" />
              ) : (
                <div className="aerot-card-visual-note">
                  <span>Placeholder</span>
                  <p>{surface.visual}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </AeroTStickySection>
  );
}

function AeroTDecisionSection({
  isInteractive,
  isMobilePinned,
  sectionRef,
}: {
  isInteractive: boolean;
  isMobilePinned: boolean;
  sectionRef: RefObject<HTMLElement | null>;
}) {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  useEffect(() => {
    if (!isInteractive) {
      setActiveGroupIndex(0);
      return;
    }

    const handleScroll = () => {
      const sectionElement = sectionRef.current;
      if (!sectionElement) {
        return;
      }

      const rect = sectionElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const entryHold = Math.min(260, viewportHeight * 0.28);
      const phaseDistance = viewportHeight * 0.82;
      const scrollDistance = Math.max(Math.abs(rect.top) - entryHold, 0);
      const nextIndex = Math.min(
        Math.max(Math.floor(scrollDistance / phaseDistance), 0),
        aerotContent.decisions.groups.length - 1
      );
      setActiveGroupIndex(nextIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInteractive, sectionRef]);

  return (
    <AeroTStickySection className="aerot-decisions-section aerot-decisions-scroll-section" isMobilePinned={isMobilePinned} sectionRef={sectionRef}>
      <div className="aerot-section-inner">
        <h2 className="aerot-section-title">{aerotContent.decisions.title}</h2>
        <div className="aerot-decision-groups aerot-decision-stage">
          {aerotContent.decisions.groups.map((group, groupIndex) => (
            <section
              className={`aerot-decision-group aerot-decision-stage-group ${groupIndex === activeGroupIndex ? "active" : ""}`}
              key={group.label}
            >
              <h3>{group.label}</h3>
              <div className="aerot-decision-card-grid">
                {group.cards.map((card) => (
                  <article className="aerot-decision-card" key={card}>
                    <p>{card}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </AeroTStickySection>
  );
}

function AeroTProcessProvedSection({
  wrapperRef,
  isInteractive,
  isMobilePinned,
  progress,
}: {
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  isInteractive: boolean;
  isMobilePinned: boolean;
  progress: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const provedPanelRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const normalProvedVisible = useInViewOnce(provedPanelRef, !isInteractive);
  const { activeStep, stepProgress, selectStep } = useVideoStepProgress(videoRef, aerotContent.process.steps);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`bishop-proposed-proved-wrapper aerot-process-proved-wrapper ${isMobilePinned ? "bishop-mobile-pinned-section" : ""}`} ref={wrapperRef}>
      <div className="bishop-proposed-proved-content">
        <div className="bishop-proposed-fade-panel" style={isInteractive ? { opacity: 1 - progress } : undefined}>
          <div className="bishop-proposed-process aerot-proposed-process">
            <div className="bishop-proposed-content">
              <h2 className="bishop-proposed-title">{aerotContent.process.title}</h2>
              <div className="bishop-proposed-layout aerot-proposed-layout">
                <ProcessStepper
                  steps={aerotContent.process.steps}
                  activeStep={activeStep}
                  stepProgress={stepProgress}
                  onStepClick={selectStep}
                />
                <div className="aerot-process-visual">
                  <video ref={videoRef} className="aerot-process-video" src={isMounted ? "/assets/videos/aerot.mp4" : undefined} autoPlay loop muted playsInline />
                  <div className="aerot-process-placeholder">
                    <span>Screen recording placeholder</span>
                    <p>{aerotContent.process.videoDirection}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          ref={provedPanelRef}
          className="bishop-proved-panel"
          style={isInteractive ? { opacity: progress, pointerEvents: progress > 0.5 ? "auto" : "none" } : undefined}
        >
          <h2 className="bishop-proved-main-title">{aerotContent.proved.title}</h2>
          <div className={`bishop-proved-cards ${!isInteractive && normalProvedVisible ? "normal-bubble-visible" : ""}`}>
            {aerotContent.proved.cards.map((card, index) => {
              const isCardVisible = isInteractive ? progress >= 0.58 + index * 0.1 : normalProvedVisible;

              return (
                <div className={`bishop-proved-card ${isCardVisible ? "bubble-in" : ""}`} key={card.top}>
                  <div className="bishop-proved-card-top">{card.top}</div>
                  <div className="bishop-proved-arrow">↓</div>
                  <div className="bishop-proved-card-bottom">{card.bottom}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function AeroTIterationsSection({
  isInteractive,
  isMobilePinned,
  sectionRef,
}: {
  isInteractive: boolean;
  isMobilePinned: boolean;
  sectionRef: RefObject<HTMLElement | null>;
}) {
  const [activeIterationIndex, setActiveIterationIndex] = useState(0);

  useEffect(() => {
    if (!isInteractive) {
      setActiveIterationIndex(0);
      return;
    }

    const handleScroll = () => {
      const sectionElement = sectionRef.current;
      if (!sectionElement) {
        return;
      }

      const rect = sectionElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const entryHold = Math.min(260, viewportHeight * 0.28);
      const phaseDistance = viewportHeight * 0.78;
      const scrollDistance = Math.max(Math.abs(rect.top) - entryHold, 0);
      const nextIndex = Math.min(
        Math.max(Math.floor(scrollDistance / phaseDistance), 0),
        aerotContent.iterations.cards.length - 1
      );
      setActiveIterationIndex(nextIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInteractive, sectionRef]);

  return (
    <AeroTStickySection className="aerot-iterations-section aerot-iterations-scroll-section" isMobilePinned={isMobilePinned} sectionRef={sectionRef}>
      <div className="aerot-section-inner aerot-iterations-inner">
        <div className="aerot-section-heading">
          <h2 className="aerot-section-title">{aerotContent.iterations.title}</h2>
          <p className="aerot-section-lead">{aerotContent.iterations.intro}</p>
        </div>
        <div className="aerot-iteration-grid aerot-iteration-stage">
          {aerotContent.iterations.cards.map((card, cardIndex) => (
            <article
              className={`aerot-iteration-card aerot-iteration-stage-card ${cardIndex === activeIterationIndex ? "active" : ""}`}
              key={card.title}
            >
              <div>
                <span>{card.title}</span>
                <h3>{card.subtitle}</h3>
                <p>{card.text}</p>
              </div>
              {card.imageKey ? (
                <AeroTPhotoCard imageKey={card.imageKey} className="aerot-card-photo aerot-iteration-photo" />
              ) : (
                <div className="aerot-card-visual-note">
                  <span>Carousel placeholder</span>
                  <p>{card.visual}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </AeroTStickySection>
  );
}

function AeroTLifecycleSection({
  isMobilePinned,
  sectionRef,
}: {
  isMobilePinned: boolean;
  sectionRef: RefObject<HTMLElement | null>;
}) {
  return (
    <AeroTStickySection className="aerot-lifecycle-section" isMobilePinned={isMobilePinned} sectionRef={sectionRef}>
      <div className="aerot-section-inner aerot-lifecycle-inner">
        <div className="aerot-section-heading">
          <h2 className="aerot-section-title">{aerotContent.lifecycle.title}</h2>
        </div>
        <div className="aerot-lifecycle-layout">
          <ol className="aerot-lifecycle-list">
            {aerotContent.lifecycle.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="aerot-lifecycle-visual">
            <span>Diagram placeholder</span>
            <p>{aerotContent.lifecycle.visual}</p>
          </div>
        </div>
      </div>
    </AeroTStickySection>
  );
}

function AeroTDeliveryLearningSection({
  wrapperRef,
  isInteractive,
  isMobilePinned,
  progress,
}: {
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  isInteractive: boolean;
  isMobilePinned: boolean;
  progress: number;
}) {
  return (
    <div className={`bishop-deliver-key-wrapper aerot-delivery-learning-wrapper ${isInteractive ? "" : "bishop-deliver-key-wrapper-normal"} ${isMobilePinned ? "bishop-mobile-pinned-section" : ""}`} ref={wrapperRef}>
      <div className="bishop-deliver-key-content aerot-delivery-learning-content">
        <div
          className="bishop-deliver-transition-panel aerot-delivery-panel"
          style={isInteractive ? { opacity: 1 - progress, pointerEvents: progress < 0.5 ? "auto" : "none" } : undefined}
        >
          <section className="aerot-delivery-section">
            <div className="aerot-section-inner aerot-delivery-inner">
              <div className="aerot-section-heading">
                <h2 className="aerot-section-title">{aerotContent.delivery.title}</h2>
                <p className="aerot-section-lead">{aerotContent.delivery.text}</p>
              </div>
              <AeroTPhotoCard imageKey={aerotContent.delivery.imageKey} className="aerot-delivery-photo" />
            </div>
          </section>
        </div>
        <div
          className="bishop-key-learnings-transition-panel aerot-learning-panel"
          style={isInteractive ? { opacity: progress, pointerEvents: progress > 0.5 ? "auto" : "none" } : undefined}
        >
          <section className="bishop-key-learnings-section aerot-key-learnings-section">
            <div className="bishop-key-learnings-content">
              <h2 className="bishop-key-learnings-title">{aerotContent.learnings.title}</h2>
              <div className="bishop-key-learnings-grid">
                {aerotContent.learnings.cards.map((card) => (
                  <article className="bishop-key-learning-card" key={card.title}>
                    <AeroTIcon name={card.icon} className="bishop-key-learning-icon" />
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function AeroTReflectionSection({
  isMobilePinned,
  sectionRef,
}: {
  isMobilePinned: boolean;
  sectionRef: RefObject<HTMLElement | null>;
}) {
  return (
    <AeroTStickySection className="bishop-thank-you-section aerot-reflection-section" isMobilePinned={isMobilePinned} sectionRef={sectionRef}>
      <div className="bishop-thank-you-content aerot-reflection-content">
        <div className="bishop-thank-you-copy">
          <h2>{aerotContent.reflection.title}</h2>
          {aerotContent.reflection.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="bishop-next-case-study">
          <Link href="/bishop" className="bishop-next-case-study-media aerot-next-case-study-media" aria-label="View Bishop case study">
            <div className="aerot-next-ipad-container">
              <div className="aerot-next-ipad-screen">
                <VideoOverlay
                  src="/assets/videos/bishop_demo.mp4"
                  wrapperStyle={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  videoStyle={{
                    width: "auto",
                    height: "75%",
                    marginTop: "-6%",
                    marginLeft: "-7%",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <img src={deviceAssets.devices.ipad} alt="Bishop iPad frame" className="aerot-next-ipad-frame" />
            </div>
          </Link>
          <div className="bishop-next-case-study-text">
            <span>Next case study</span>
            <h3>
              <small>02</small> Bishop
            </h3>
            <dl className="bishop-next-case-study-meta">
              <div>
                <dt>Role</dt>
                <dd>Co-Founder / Lead Software Engineer</dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>2025 - 2026</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>C++, TypeScript, React, Drogon, ONNX</dd>
              </div>
            </dl>
            <p>Search and rescue video intelligence built around edge computer vision and rapid mission review.</p>
            <Link href="/bishop" className="bishop-next-case-study-link">
              <span>View details</span>
              <span className="bishop-next-case-study-arrow" aria-hidden="true">&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </AeroTStickySection>
  );
}

function AeroTDiscover({ isInteractive }: { isInteractive: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contextRef = useRef<HTMLDivElement>(null);
  const insightsRef = useRef<HTMLElement>(null);
  const defineStartRef = useRef<HTMLDivElement>(null);
  const problemSuccessRef = useRef<HTMLDivElement>(null);
  const architectureRef = useRef<HTMLElement>(null);
  const decisionsRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const iterationsRef = useRef<HTMLElement>(null);
  const lifecycleRef = useRef<HTMLElement>(null);
  const deliveryRef = useRef<HTMLDivElement>(null);
  const reflectionRef = useRef<HTMLElement>(null);
  const [currentSection, setCurrentSection] = useState<DiscoverSectionId>("discover");
  const [isNormalHeaderPinned, setIsNormalHeaderPinned] = useState(false);
  const currentSectionRef = useRef<DiscoverSectionId>("discover");
  const { progress: contextProgress, isPastHalf: railVisible } = useCrossfadeScroll(contextRef, isInteractive);
  const { progress: problemSuccessProgress } = useCrossfadeScroll(problemSuccessRef, isInteractive);
  const { progress: processProgress } = useCrossfadeScroll(processRef, isInteractive);
  const { progress: deliveryProgress } = useCrossfadeScroll(deliveryRef, isInteractive);
  const isContextMobilePinned = useMobilePinnedSection(contextRef, isInteractive);
  const isInsightsMobilePinned = useMobilePinnedSection(insightsRef, isInteractive);
  const isProblemSuccessMobilePinned = useMobilePinnedSection(problemSuccessRef, isInteractive);
  const isArchitectureMobilePinned = useMobilePinnedSection(architectureRef, isInteractive);
  const isDecisionsMobilePinned = useMobilePinnedSection(decisionsRef, isInteractive);
  const isProcessMobilePinned = useMobilePinnedSection(processRef, isInteractive);
  const isIterationsMobilePinned = useMobilePinnedSection(iterationsRef, isInteractive);
  const isLifecycleMobilePinned = useMobilePinnedSection(lifecycleRef, isInteractive);
  const isDeliveryMobilePinned = useMobilePinnedSection(deliveryRef, isInteractive);
  const isReflectionMobilePinned = useMobilePinnedSection(reflectionRef, isInteractive);
  const isNormalHeaderMobilePinned = useMobilePinnedSection(sectionRef, !isInteractive);
  const { isHeaderSticky, showCentered } = useStickySection(sectionRef, headerRef, currentSection, isInteractive);

  const selectCaseStudySection = useCallback((section: DiscoverSectionId) => {
    const target =
      section === "discover"
        ? sectionRef.current
        : section === "define"
          ? problemSuccessRef.current
          : section === "develop"
            ? processRef.current
            : deliveryRef.current;

    if (!target) {
      return;
    }

    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isInteractive) {
      setIsNormalHeaderPinned(false);
      return;
    }

    const handleNormalHeaderPosition = () => {
      const sectionElement = sectionRef.current;
      const headerElement = headerRef.current;
      if (!sectionElement || !headerElement) {
        return;
      }

      const sectionRect = sectionElement.getBoundingClientRect();
      const headerHeight = headerElement.offsetHeight || 76;
      setIsNormalHeaderPinned(sectionRect.top <= 0 && sectionRect.bottom > headerHeight);
    };

    window.addEventListener("scroll", handleNormalHeaderPosition, { passive: true });
    window.addEventListener("resize", handleNormalHeaderPosition);
    handleNormalHeaderPosition();

    return () => {
      window.removeEventListener("scroll", handleNormalHeaderPosition);
      window.removeEventListener("resize", handleNormalHeaderPosition);
    };
  }, [isInteractive]);

  useEffect(() => {
    const handleScroll = () => {
      const defineElement = defineStartRef.current;
      const developElement = processRef.current;
      const deliverElement = deliveryRef.current;
      if (!defineElement) {
        return;
      }

      const defineRect = defineElement.getBoundingClientRect();
      const developRect = developElement?.getBoundingClientRect();
      const deliverRect = deliverElement?.getBoundingClientRect();
      const nextSection =
        deliverRect && deliverRect.top <= 100
          ? "deliver"
          : developRect && developRect.top <= 100
            ? "develop"
            : defineRect.top <= 100
              ? "define"
              : "discover";

      if (currentSectionRef.current !== nextSection) {
        currentSectionRef.current = nextSection;
        setCurrentSection(nextSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`bishop-discover aerot-discover ${isNormalHeaderMobilePinned ? "bishop-normal-mobile-header-pinned" : ""}`} ref={sectionRef}>
      <DiscoverHeader
        headerRef={headerRef}
        isHeaderSticky={isInteractive ? isHeaderSticky : isNormalHeaderPinned}
        showCentered={isInteractive ? showCentered : false}
        currentSection={currentSection}
        onSectionSelect={selectCaseStudySection}
        discoverTitle={aerotContent.discoverLabels.discoverTitle}
        discoverSubtitle={aerotContent.discoverLabels.discoverSubtitle}
        defineTitle={aerotContent.discoverLabels.defineTitle}
        defineSubtitle={aerotContent.discoverLabels.defineSubtitle}
        developTitle={aerotContent.discoverLabels.developTitle}
        developSubtitle={aerotContent.discoverLabels.developSubtitle}
        deliverTitle={aerotContent.discoverLabels.deliverTitle}
        deliverSubtitle={aerotContent.discoverLabels.deliverSubtitle}
      />
      <AeroTContextSection
        sectionRef={contextRef}
        isInteractive={isInteractive}
        isMobilePinned={isContextMobilePinned}
        progress={contextProgress}
        railVisible={railVisible}
      />
      <AeroTDiscoveryInsights
        isMobilePinned={isInsightsMobilePinned}
        sectionRef={insightsRef}
      />
      <ProblemSuccessSection
        wrapperRef={problemSuccessRef}
        defineStartRef={defineStartRef}
        isInteractive={isInteractive}
        isMobilePinned={isProblemSuccessMobilePinned}
        progress={problemSuccessProgress}
        problemTitle={aerotContent.problem.title}
        problemText={aerotContent.problem.text}
        successTitle="What Success Needed To Look Like"
        metrics={aerotContent.successMetrics}
      />
      <AeroTArchitectureSection
        isMobilePinned={isArchitectureMobilePinned}
        sectionRef={architectureRef}
      />
      <AeroTDecisionSection
        isInteractive={isInteractive}
        isMobilePinned={isDecisionsMobilePinned}
        sectionRef={decisionsRef}
      />
      <AeroTProcessProvedSection
        wrapperRef={processRef}
        isInteractive={isInteractive}
        isMobilePinned={isProcessMobilePinned}
        progress={processProgress}
      />
      <AeroTIterationsSection
        isInteractive={isInteractive}
        isMobilePinned={isIterationsMobilePinned}
        sectionRef={iterationsRef}
      />
      <AeroTLifecycleSection
        isMobilePinned={isLifecycleMobilePinned}
        sectionRef={lifecycleRef}
      />
      <AeroTDeliveryLearningSection
        wrapperRef={deliveryRef}
        isInteractive={isInteractive}
        isMobilePinned={isDeliveryMobilePinned}
        progress={deliveryProgress}
      />
      <AeroTReflectionSection
        isMobilePinned={isReflectionMobilePinned}
        sectionRef={reflectionRef}
      />
    </section>
  );
}

export function AeroTRoute() {
  const [viewMode, setViewMode] = useState<AeroTViewMode>("interactive");
  const { setInteractiveScrollingControl } = useAccessibility();
  const isInteractive = viewMode === "interactive";

  useEffect(() => {
    window.scrollTo(0, 0);

    const videoUrls = ["/assets/videos/aerot.mp4", "/assets/videos/bishop_demo.mp4"];
    videoUrls.forEach((videoUrl) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "video";
      link.href = videoUrl;
      document.head.appendChild(link);
    });

    return () => {
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="video"]');
      preloadLinks.forEach((link) => {
        if (videoUrls.some((url) => link.getAttribute("href") === url)) {
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
    <div className={`bishop-page bishop-page-${viewMode} aerot-page min-h-screen`}>
      <BackLink />
      <AeroTHero />
      <AeroTTeam />
      <AeroTRoleStack isInteractive={isInteractive} />
      <AeroTChallengeVision isInteractive={isInteractive} />
      <AeroTOutcomes isInteractive={isInteractive} />
      <AeroTDiscover isInteractive={isInteractive} />
    </div>
  );
}
