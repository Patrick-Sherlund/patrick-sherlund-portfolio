import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useCrossfadeScroll } from "../../hooks/useCrossfadeScroll";
import { AiDetectionsSection } from "./AiDetectionsSection";
import { AnnotateSegmentationsSection } from "./AnnotateSegmentationsSection";
import { AssociateDetectionsSection } from "./AssociateDetectionsSection";
import { ClientVideoSection } from "./ClientVideoSection";
import { IterationOneSection } from "./IterationOneSection";
import { IterationThreeSection } from "./IterationThreeSection";
import { IterationTwoSection } from "./IterationTwoSection";
import { ManageVideosSection } from "./ManageVideosSection";
import { TrackDetectionsSection } from "./TrackDetectionsSection";
import { TrainModelSection } from "./TrainModelSection";

type DesignDecisionGroup = {
  label: ReactNode;
  cards: ReactNode[];
};

type DesignDecisionsSectionProps = {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  isInteractive: boolean;
  title: string;
  groups: DesignDecisionGroup[];
  iterationTitle: string;
  iterationSubtitle: string;
  iterationHeadline: ReactNode;
  papers: string[];
  magnifierImage: string;
  annotateHeadline: ReactNode;
  annotateImage: string;
  annotateVideo: string;
  annotateMobileImage: string;
  annotateMobileVideo: string;
  trainModelImage: string;
  iterationTwoTitle: string;
  iterationTwoSubtitle: string;
  iterationTwoSummary: ReactNode;
  iterationTwoHeadline: ReactNode;
  inferenceImages: string[];
  trackerV1: string;
  trackerV4: string;
  clientVideo: string;
  iterationThreeDesktopImage: string;
  iterationThreeMobileImage: string;
  aiDetectionsVideo: string;
  manageVideosDesktopImage: string;
  manageVideosMobileImage: string;
  mapDemoVideo: string;
};

function clamp(value: number) {
  return Math.min(Math.max(value, 0), 1);
}

function useStickyStageProgress(ref: React.RefObject<HTMLElement | null>, enabled: boolean) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!enabled) {
      setProgress(0);
      return;
    }

    const handleScroll = () => {
      const element = ref.current;
      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableDistance = Math.max(rect.height - viewportHeight, viewportHeight);

      if (rect.top > 0) {
        setProgress(0);
        return;
      }

      if (rect.bottom <= viewportHeight) {
        setProgress(1);
        return;
      }

      setProgress(clamp(Math.abs(rect.top) / scrollableDistance));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [enabled, ref]);

  return progress;
}

export function DesignDecisionsSection({
  sectionRef,
  isInteractive,
  title,
  groups,
  iterationTitle,
  iterationSubtitle,
  iterationHeadline,
  papers,
  magnifierImage,
  annotateHeadline,
  annotateImage,
  annotateVideo,
  annotateMobileImage,
  annotateMobileVideo,
  trainModelImage,
  iterationTwoTitle,
  iterationTwoSubtitle,
  iterationTwoSummary,
  iterationTwoHeadline,
  inferenceImages,
  trackerV1,
  trackerV4,
  clientVideo,
  iterationThreeDesktopImage,
  iterationThreeMobileImage,
  aiDetectionsVideo,
  manageVideosDesktopImage,
  manageVideosMobileImage,
  mapDemoVideo,
}: DesignDecisionsSectionProps) {
  const developStageRef = useRef<HTMLDivElement>(null);
  const trainIterationRef = useRef<HTMLDivElement>(null);
  const trackerClientRef = useRef<HTMLDivElement>(null);
  const iterationAiRef = useRef<HTMLDivElement>(null);
  const manageMapRef = useRef<HTMLDivElement>(null);
  const stageProgress = useStickyStageProgress(developStageRef, isInteractive);
  const { progress: trainIterationProgress } = useCrossfadeScroll(trainIterationRef, isInteractive);
  const { progress: trackerClientProgress } = useCrossfadeScroll(trackerClientRef, isInteractive);
  const { progress: iterationAiProgress } = useCrossfadeScroll(iterationAiRef, isInteractive);
  const { progress: manageMapProgress } = useCrossfadeScroll(manageMapRef, isInteractive);
  const firstTransitionProgress = clamp(stageProgress / 0.28);
  const secondTransitionProgress = clamp((stageProgress - 0.58) / 0.28);
  const designOpacity = isInteractive ? 1 - firstTransitionProgress : undefined;
  const gatherOpacity = isInteractive ? 1 - secondTransitionProgress : undefined;
  const annotateOpacity = isInteractive ? secondTransitionProgress : undefined;
  const gatherPointerEvents =
    isInteractive && gatherOpacity !== undefined && gatherOpacity > 0.08
      ? "auto"
      : "none";

  return (
    <div className="bishop-develop-iteration-wrapper" ref={sectionRef}>
      <div className="bishop-develop-sticky-stage" ref={developStageRef}>
        <div className="bishop-develop-iteration-content">
          <div
            className="bishop-design-decisions-panel"
            style={isInteractive ? { opacity: designOpacity } : undefined}
          >
            <section className="bishop-design-decisions-section">
              <div className="bishop-design-decisions-content">
                <h2 className="bishop-design-decisions-title">{title}</h2>
                <div className="bishop-design-decisions-groups">
                  {groups.map((group, groupIndex) => (
                    <section className="bishop-design-decision-group" key={groupIndex}>
                      <h3 className="bishop-design-decision-label">{group.label}</h3>
                      <div className="bishop-design-decision-cards">
                        {group.cards.map((card, index) => (
                          <div
                            className={`bishop-design-decision-card ${index === 0 ? "rainbow" : ""}`}
                            key={`${groupIndex}-${index}`}
                          >
                            <p>{card}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div
            className="bishop-iteration-one-panel"
            style={
              isInteractive
                ? { opacity: gatherOpacity, pointerEvents: gatherPointerEvents }
                : undefined
            }
          >
            <IterationOneSection
              title={iterationTitle}
              subtitle={iterationSubtitle}
              headline={iterationHeadline}
              papers={papers}
              magnifierImage={magnifierImage}
              isPanelVisible={!isInteractive || (gatherOpacity !== undefined && gatherOpacity > 0.7)}
            />
          </div>

          <div
            className="bishop-annotate-transition-panel"
            style={
              isInteractive
                ? { opacity: annotateOpacity, pointerEvents: stageProgress > 0.72 ? "auto" : "none" }
                : undefined
            }
          >
            <AnnotateSegmentationsSection
              headline={annotateHeadline}
              image={annotateImage}
              video={annotateVideo}
              mobileImage={annotateMobileImage}
              mobileVideo={annotateMobileVideo}
            />
          </div>
        </div>
      </div>

      <div className="bishop-train-iteration-wrapper" ref={trainIterationRef}>
        <div className="bishop-train-iteration-content">
          <div
            className="bishop-train-model-transition-panel"
            style={
              isInteractive
                ? { opacity: 1 - trainIterationProgress, pointerEvents: trainIterationProgress < 0.5 ? "auto" : "none" }
                : undefined
            }
          >
            <TrainModelSection image={trainModelImage} />
          </div>
          <div
            className="bishop-iteration-two-transition-panel"
            style={
              isInteractive
                ? { opacity: trainIterationProgress, pointerEvents: trainIterationProgress > 0.5 ? "auto" : "none" }
                : undefined
            }
          >
            <IterationTwoSection
              title={iterationTwoTitle}
              subtitle={iterationTwoSubtitle}
              summary={iterationTwoSummary}
              headline={iterationTwoHeadline}
              images={inferenceImages}
            />
          </div>
        </div>
      </div>

      <div
        className={`bishop-tracker-client-wrapper ${isInteractive ? "" : "bishop-tracker-client-wrapper-normal"}`}
        ref={trackerClientRef}
      >
        <div className="bishop-tracker-client-content">
          <div
            className="bishop-tracker-transition-panel"
            style={
              isInteractive
                ? {
                    opacity: 1 - trackerClientProgress,
                    pointerEvents: trackerClientProgress < 0.5 ? "auto" : "none",
                  }
                : undefined
            }
          >
            <TrackDetectionsSection v1Video={trackerV1} v4Video={trackerV4} />
          </div>
          <div
            className="bishop-client-video-transition-panel"
            style={
              isInteractive
                ? {
                    opacity: trackerClientProgress,
                    pointerEvents: trackerClientProgress > 0.5 ? "auto" : "none",
                  }
                : undefined
            }
          >
            <ClientVideoSection video={clientVideo} />
          </div>
        </div>
      </div>

      <div
        className={`bishop-iteration-ai-wrapper ${isInteractive ? "" : "bishop-iteration-ai-wrapper-normal"}`}
        ref={iterationAiRef}
      >
        <div className="bishop-iteration-ai-content">
          <div
            className="bishop-iteration-three-transition-panel"
            style={
              isInteractive
                ? {
                    opacity: 1 - iterationAiProgress,
                    pointerEvents: iterationAiProgress < 0.5 ? "auto" : "none",
                  }
                : undefined
            }
          >
            <IterationThreeSection
              desktopImage={iterationThreeDesktopImage}
              mobileImage={iterationThreeMobileImage}
            />
          </div>
          <div
            className="bishop-ai-detections-transition-panel"
            style={
              isInteractive
                ? {
                    opacity: iterationAiProgress,
                    pointerEvents: iterationAiProgress > 0.5 ? "auto" : "none",
                  }
                : undefined
            }
          >
            <AiDetectionsSection video={aiDetectionsVideo} />
          </div>
        </div>
      </div>

      <div
        className={`bishop-manage-map-wrapper ${isInteractive ? "" : "bishop-manage-map-wrapper-normal"}`}
        ref={manageMapRef}
      >
        <div className="bishop-manage-map-content">
          <div
            className="bishop-manage-videos-transition-panel"
            style={
              isInteractive
                ? {
                    opacity: 1 - manageMapProgress,
                    pointerEvents: manageMapProgress < 0.5 ? "auto" : "none",
                  }
                : undefined
            }
          >
            <ManageVideosSection
              desktopImage={manageVideosDesktopImage}
              mobileImage={manageVideosMobileImage}
            />
          </div>
          <div
            className="bishop-associate-detections-transition-panel"
            style={
              isInteractive
                ? {
                    opacity: manageMapProgress,
                    pointerEvents: manageMapProgress > 0.5 ? "auto" : "none",
                  }
                : undefined
            }
          >
            <AssociateDetectionsSection video={mapDemoVideo} />
          </div>
        </div>
      </div>
    </div>
  );
}
