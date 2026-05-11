"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { bishopMediaAssets } from "../../data/bishop-assets";
import { bishopContent } from "../../data/bishop-content";
import { processSteps, successMetrics } from "../../data/bishop-metrics";
import { useCrossfadeScroll } from "../../hooks/useCrossfadeScroll";
import { useStickySection } from "../../hooks/useStickySection";
import { useMobilePinnedSection } from "../../hooks/useMobilePinnedSection";
import { useVideoStepProgress } from "../../hooks/useVideoStepProgress";
import { ContextResearchSection } from "./ContextResearchSection";
import { ConceptsSection } from "./ConceptsSection";
import { DesignDecisionsSection } from "./DesignDecisionsSection";
import { DiscoverHeader, type DiscoverSectionId } from "./DiscoverHeader";
import { DeliverSection } from "./DeliverSection";
import { KeyLearningsSection } from "./KeyLearningsSection";
import { PersonaLearnedSection } from "./PersonaLearnedSection";
import { ProblemSuccessSection } from "./ProblemSuccessSection";
import { ProposedProvedSection } from "./ProposedProvedSection";
import { RealitySection } from "./RealitySection";
import { ThankYouSection } from "./ThankYouSection";

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
  const developStartRef = useRef<HTMLDivElement>(null);
  const deliverStartRef = useRef<HTMLDivElement>(null);
  const processVideoRef = useRef<HTMLVideoElement>(null);
  const carouselVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [currentSection, setCurrentSection] = useState<DiscoverSectionId>("discover");
  const [isNormalHeaderPinned, setIsNormalHeaderPinned] = useState(false);
  const currentSectionRef = useRef<DiscoverSectionId>("discover");

  const { progress: contextResearchProgress, isPastHalf: carouselVisible } =
    useCrossfadeScroll(contextResearchRef, isInteractive);
  const { progress: personaLearnedProgress, isPastHalf: learnedContentVisible } =
    useCrossfadeScroll(personaLearnedRef, isInteractive);
  const { progress: problemSuccessProgress } = useCrossfadeScroll(problemSuccessRef, isInteractive);
  const { progress: proposedProvedProgress } = useCrossfadeScroll(proposedProvedRef, isInteractive);
  const { progress: deliverKeyProgress } = useCrossfadeScroll(deliverStartRef, isInteractive);
  const isContextResearchMobilePinned = useMobilePinnedSection(contextResearchRef, isInteractive);
  const isPersonaLearnedMobilePinned = useMobilePinnedSection(personaLearnedRef, isInteractive);
  const isProblemSuccessMobilePinned = useMobilePinnedSection(problemSuccessRef, isInteractive);
  const isProposedProvedMobilePinned = useMobilePinnedSection(proposedProvedRef, isInteractive);
  const isDeliverKeyMobilePinned = useMobilePinnedSection(deliverStartRef, isInteractive);
  const isNormalHeaderMobilePinned = useMobilePinnedSection(sectionRef, !isInteractive);
  const { isHeaderSticky, showCentered } = useStickySection(
    sectionRef,
    headerRef,
    currentSection,
    isInteractive
  );
  const { activeStep, stepProgress, selectStep } = useVideoStepProgress(processVideoRef, processSteps);

  const selectCaseStudySection = useCallback((section: DiscoverSectionId) => {
    const target =
      section === "discover"
        ? sectionRef.current
        : section === "define"
          ? problemSuccessRef.current
          : section === "develop"
            ? developStartRef.current
            : deliverStartRef.current;
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
    const handleDefineScroll = () => {
      const defineElement = defineStartRef.current;
      const developElement = developStartRef.current;
      const deliverElement = deliverStartRef.current;
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

    window.addEventListener("scroll", handleDefineScroll, { passive: true });
    handleDefineScroll();

    return () => window.removeEventListener("scroll", handleDefineScroll);
  }, [isInteractive]);

  return (
    <>
      <section
        className={`bishop-discover ${isNormalHeaderMobilePinned ? "bishop-normal-mobile-header-pinned" : ""}`}
        ref={sectionRef}
      >
        <DiscoverHeader
          headerRef={headerRef}
          isHeaderSticky={isInteractive ? isHeaderSticky : isNormalHeaderPinned}
          showCentered={isInteractive ? showCentered : false}
          currentSection={currentSection}
          onSectionSelect={selectCaseStudySection}
          discoverTitle={bishopContent.discoverLabels.discoverTitle}
          discoverSubtitle={bishopContent.discoverLabels.discoverSubtitle}
          defineTitle={bishopContent.discoverLabels.defineTitle}
          defineSubtitle={bishopContent.discoverLabels.defineSubtitle}
          developTitle={bishopContent.discoverLabels.developTitle}
          developSubtitle={bishopContent.discoverLabels.developSubtitle}
          deliverTitle={bishopContent.discoverLabels.deliverTitle}
          deliverSubtitle={bishopContent.discoverLabels.deliverSubtitle}
        />

        <ContextResearchSection
          sectionRef={contextResearchRef}
          isInteractive={isInteractive}
          isMobilePinned={isContextResearchMobilePinned}
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
          isMobilePinned={isPersonaLearnedMobilePinned}
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
          isMobilePinned={isProblemSuccessMobilePinned}
          progress={problemSuccessProgress}
          problemTitle={bishopContent.problem.title}
          problemText={bishopContent.problem.text}
          successTitle="What Success Looks Like"
          metrics={successMetrics}
        />

        <ProposedProvedSection
          wrapperRef={proposedProvedRef}
          isInteractive={isInteractive}
          isMobilePinned={isProposedProvedMobilePinned}
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

        <ConceptsSection images={bishopMediaAssets.concepts} />

        <DesignDecisionsSection
          sectionRef={developStartRef}
          isInteractive={isInteractive}
          title={bishopContent.designDecisions.title}
          groups={bishopContent.designDecisions.groups}
          iterationTitle={bishopContent.iterationOne.title}
          iterationSubtitle={bishopContent.iterationOne.subtitle}
          iterationHeadline={bishopContent.iterationOne.headline}
          papers={bishopMediaAssets.researchPapers}
          magnifierImage={bishopMediaAssets.magnifyingGlass}
          annotateHeadline={bishopContent.iterationOne.annotateHeadline}
          annotateImage={bishopMediaAssets.annotateImage}
          annotateVideo={bishopMediaAssets.annotateVideo}
          annotateMobileImage={bishopMediaAssets.annotateMobileImage}
          annotateMobileVideo={bishopMediaAssets.annotateMobileVideo}
          trainModelImage={bishopMediaAssets.trainModel}
          iterationTwoTitle={bishopContent.iterationTwo.title}
          iterationTwoSubtitle={bishopContent.iterationTwo.subtitle}
          iterationTwoSummary={bishopContent.iterationTwo.summary}
          iterationTwoHeadline={bishopContent.iterationTwo.headline}
          inferenceImages={bishopMediaAssets.inferenceFrames}
          trackerV1={bishopMediaAssets.trackerV1}
          trackerV4={bishopMediaAssets.trackerV4}
          clientVideo={bishopMediaAssets.clientVideo}
          iterationThreeDesktopImage={bishopMediaAssets.iterationThreeDesktop}
          iterationThreeMobileImage={bishopMediaAssets.iterationThreeMobile}
          aiDetectionsVideo={bishopMediaAssets.aiDetections}
          manageVideosDesktopImage={bishopMediaAssets.manageVideosDesktop}
          manageVideosMobileImage={bishopMediaAssets.manageVideosMobile}
          mapDemoVideo={bishopMediaAssets.mapDemo}
        />

        <div
          className={`bishop-deliver-key-wrapper ${isInteractive ? "" : "bishop-deliver-key-wrapper-normal"} ${isDeliverKeyMobilePinned ? "bishop-mobile-pinned-section" : ""}`}
          ref={deliverStartRef}
        >
          <div className="bishop-deliver-key-content">
            <div
              className="bishop-deliver-transition-panel"
              style={
                isInteractive
                  ? {
                      opacity: 1 - deliverKeyProgress,
                      pointerEvents: deliverKeyProgress < 0.5 ? "auto" : "none",
                    }
                  : undefined
              }
            >
              <DeliverSection
                sparkleLeft={bishopMediaAssets.sparkleLeft}
                sparkleRight={bishopMediaAssets.sparkleRight}
                videoSrc={bishopMediaAssets.videos[0]}
              />
            </div>
            <div
              className="bishop-key-learnings-transition-panel"
              style={
                isInteractive
                  ? {
                      opacity: deliverKeyProgress,
                      pointerEvents: deliverKeyProgress > 0.5 ? "auto" : "none",
                    }
                  : undefined
              }
            >
              <KeyLearningsSection />
            </div>
          </div>
        </div>

        <ThankYouSection />
      </section>
    </>
  );
}
