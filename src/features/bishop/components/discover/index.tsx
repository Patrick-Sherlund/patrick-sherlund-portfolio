"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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

type BishopDiscoverProps = {
  isInteractive: boolean;
};

export function BishopDiscover({ isInteractive }: BishopDiscoverProps) {
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
  const currentSectionRef = useRef<"discover" | "define">("discover");

  const { progress: contextResearchProgress, isPastHalf: carouselVisible } =
    useCrossfadeScroll(contextResearchRef, isInteractive);
  const { progress: personaLearnedProgress, isPastHalf: learnedContentVisible } =
    useCrossfadeScroll(personaLearnedRef, isInteractive);
  const { progress: problemSuccessProgress } = useCrossfadeScroll(problemSuccessRef, isInteractive);
  const { progress: proposedProvedProgress } = useCrossfadeScroll(proposedProvedRef, isInteractive);
  const { isHeaderSticky, showCentered } = useStickySection(
    sectionRef,
    headerRef,
    currentSection,
    isInteractive
  );
  const { activeStep, stepProgress, selectStep } = useVideoStepProgress(processVideoRef, processSteps);

  const selectCaseStudySection = useCallback((section: "discover" | "define") => {
    const target =
      section === "discover" ? sectionRef.current : problemSuccessRef.current;
    if (!target) {
      return;
    }

    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleDefineScroll = () => {
      const defineElement = defineStartRef.current;
      if (!defineElement) {
        return;
      }

      const defineRect = defineElement.getBoundingClientRect();
      const nextSection = defineRect.top <= 100 ? "define" : "discover";
      if (currentSectionRef.current !== nextSection) {
        currentSectionRef.current = nextSection;
        setCurrentSection(nextSection);
      }
    };

    window.addEventListener("scroll", handleDefineScroll, { passive: true });
    handleDefineScroll();

    return () => window.removeEventListener("scroll", handleDefineScroll);
  }, [isInteractive]);

  return (
    <section className="bishop-discover" ref={sectionRef}>
      <DiscoverHeader
        headerRef={headerRef}
        isHeaderSticky={isInteractive ? isHeaderSticky : true}
        showCentered={isInteractive ? showCentered : false}
        currentSection={currentSection}
        onSectionSelect={selectCaseStudySection}
        discoverTitle={bishopContent.discoverLabels.discoverTitle}
        discoverSubtitle={bishopContent.discoverLabels.discoverSubtitle}
        defineTitle={bishopContent.discoverLabels.defineTitle}
        defineSubtitle={bishopContent.discoverLabels.defineSubtitle}
      />

      <ContextResearchSection
        sectionRef={contextResearchRef}
        isInteractive={isInteractive}
        progress={contextResearchProgress}
        carouselVisible={carouselVisible}
        title={bishopContent.contextResearch.contextTitle}
        text={bishopContent.contextResearch.contextText}
        researchTitle={bishopContent.contextResearch.researchTitle}
        carouselImages={bishopMediaAssets.researchCarousel}
        carouselVideoRefs={carouselVideoRefs}
      />

      <PersonaLearnedSection
        sectionRef={personaLearnedRef}
        isInteractive={isInteractive}
        progress={personaLearnedProgress}
        learnedContentVisible={learnedContentVisible}
        personaTitle={bishopContent.personaLearned.personaTitle}
        learnedTitle={bishopContent.personaLearned.learnedTitle}
        personaAssets={bishopMediaAssets.personaCarousel}
        learnedCards={bishopContent.personaLearned.learnedCards}
      />

      <RealitySection
        title={bishopContent.reality.title}
        text={bishopContent.reality.text}
      />

      <ProblemSuccessSection
        wrapperRef={problemSuccessRef}
        defineStartRef={defineStartRef}
        isInteractive={isInteractive}
        progress={problemSuccessProgress}
        problemTitle={bishopContent.problem.title}
        problemText={bishopContent.problem.text}
        successTitle="What Success Looks Like"
        metrics={successMetrics}
      />

      <ProposedProvedSection
        wrapperRef={proposedProvedRef}
        isInteractive={isInteractive}
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
