"use client";

import { useEffect, useRef, useState } from "react";
import { bishopMediaAssets } from "../../data/bishop-assets";
import { bishopContent } from "../../data/bishop-content";
import { processSteps, successMetrics } from "../../data/bishop-metrics";
import { useCrossfadeScroll } from "../../hooks/useCrossfadeScroll";
import { useStickySection } from "../../hooks/useStickySection";
import { useVideoStepProgress } from "../../hooks/useVideoStepProgress";
import { ContextResearchSection } from "./ContextResearchSection";
import { DiscoverHeader } from "./DiscoverHeader";
import { PersonaLearnedSection } from "./PersonaLearnedSection";
import { ProblemSuccessSection } from "./ProblemSuccessSection";
import { ProposedProvedSection } from "./ProposedProvedSection";
import { RealitySection } from "./RealitySection";

export function BishopDiscover() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contextResearchRef = useRef<HTMLDivElement>(null);
  const personaLearnedRef = useRef<HTMLDivElement>(null);
  const defineStartRef = useRef<HTMLDivElement>(null);
  const problemSuccessRef = useRef<HTMLDivElement>(null);
  const proposedProvedRef = useRef<HTMLDivElement>(null);
  const processVideoRef = useRef<HTMLVideoElement>(null);
  const carouselVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [currentSection, setCurrentSection] = useState<"discover" | "define">("discover");
  const [isPersonaHovering, setIsPersonaHovering] = useState(false);
  const [hoveredCarouselVideo, setHoveredCarouselVideo] = useState<number | null>(null);

  const { progress: contextResearchProgress, isPastHalf: carouselVisible } =
    useCrossfadeScroll(contextResearchRef);
  const { progress: personaLearnedProgress, isPastHalf: learnedContentVisible } =
    useCrossfadeScroll(personaLearnedRef);
  const { progress: problemSuccessProgress } = useCrossfadeScroll(problemSuccessRef);
  const { progress: proposedProvedProgress } = useCrossfadeScroll(proposedProvedRef);
  const { isHeaderSticky, showCentered } = useStickySection(sectionRef, headerRef, currentSection);
  const { activeStep, stepProgress, selectStep } = useVideoStepProgress(processVideoRef, processSteps);

  useEffect(() => {
    const handleDefineScroll = () => {
      const defineElement = defineStartRef.current;
      if (!defineElement) {
        return;
      }

      const defineRect = defineElement.getBoundingClientRect();
      setCurrentSection(defineRect.top <= 100 ? "define" : "discover");
    };

    window.addEventListener("scroll", handleDefineScroll, { passive: true });
    handleDefineScroll();

    return () => window.removeEventListener("scroll", handleDefineScroll);
  }, []);

  useEffect(() => {
    if (hoveredCarouselVideo === null) {
      carouselVideoRefs.current.forEach((video) => {
        video?.play().catch(() => {});
      });
      return;
    }

    carouselVideoRefs.current.forEach((video, index) => {
      if (video && index !== hoveredCarouselVideo) {
        video.pause();
      }
    });
  }, [hoveredCarouselVideo]);

  return (
    <section className="bishop-discover" ref={sectionRef}>
      <DiscoverHeader
        headerRef={headerRef}
        isHeaderSticky={isHeaderSticky}
        showCentered={showCentered}
        currentSection={currentSection}
        discoverTitle={bishopContent.discoverLabels.discoverTitle}
        discoverSubtitle={bishopContent.discoverLabels.discoverSubtitle}
        defineTitle={bishopContent.discoverLabels.defineTitle}
        defineSubtitle={bishopContent.discoverLabels.defineSubtitle}
      />

      <ContextResearchSection
        sectionRef={contextResearchRef}
        progress={contextResearchProgress}
        carouselVisible={carouselVisible}
        title={bishopContent.contextResearch.contextTitle}
        text={bishopContent.contextResearch.contextText}
        researchTitle={bishopContent.contextResearch.researchTitle}
        carouselImages={bishopMediaAssets.researchCarousel}
        carouselVideoRefs={carouselVideoRefs}
        setHoveredCarouselVideo={setHoveredCarouselVideo}
      />

      <PersonaLearnedSection
        sectionRef={personaLearnedRef}
        progress={personaLearnedProgress}
        learnedContentVisible={learnedContentVisible}
        personaTitle={bishopContent.personaLearned.personaTitle}
        learnedTitle={bishopContent.personaLearned.learnedTitle}
        personaAssets={bishopMediaAssets.personaCarousel}
        isPersonaHovering={isPersonaHovering}
        setIsPersonaHovering={setIsPersonaHovering}
        learnedCards={bishopContent.personaLearned.learnedCards}
      />

      <RealitySection
        title={bishopContent.reality.title}
        text={bishopContent.reality.text}
      />

      <ProblemSuccessSection
        wrapperRef={problemSuccessRef}
        defineStartRef={defineStartRef}
        progress={problemSuccessProgress}
        problemTitle={bishopContent.problem.title}
        problemText={bishopContent.problem.text}
        successTitle="What Success Looks Like"
        metrics={successMetrics}
      />

      <ProposedProvedSection
        wrapperRef={proposedProvedRef}
        progress={proposedProvedProgress}
        title={bishopContent.proposed.title}
        videoRef={processVideoRef}
        processSteps={processSteps}
        activeStep={activeStep}
        stepProgress={stepProgress}
        onStepClick={selectStep}
        provedTitle={bishopContent.proved.title}
        provedCards={bishopContent.proved.cards}
      />
    </section>
  );
}
