import { useRef } from "react";
import type { ReactNode } from "react";
import { useCrossfadeScroll } from "../../hooks/useCrossfadeScroll";
import { AnnotateSegmentationsSection } from "./AnnotateSegmentationsSection";
import { IterationOneSection } from "./IterationOneSection";
import { TrainModelSection } from "./TrainModelSection";

type DesignDecisionGroup = {
  label: ReactNode;
  cards: ReactNode[];
};

type DesignDecisionsSectionProps = {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  isInteractive: boolean;
  isMobilePinned: boolean;
  progress: number;
  title: string;
  groups: DesignDecisionGroup[];
  iterationTitle: string;
  iterationSubtitle: string;
  iterationHeadline: ReactNode;
  papers: string[];
  annotateHeadline: ReactNode;
  annotateImage: string;
  annotateVideo: string;
  annotateMobileImage: string;
  annotateMobileVideo: string;
  trainModelImage: string;
};

export function DesignDecisionsSection({
  sectionRef,
  isInteractive,
  isMobilePinned,
  progress,
  title,
  groups,
  iterationTitle,
  iterationSubtitle,
  iterationHeadline,
  papers,
  annotateHeadline,
  annotateImage,
  annotateVideo,
  annotateMobileImage,
  annotateMobileVideo,
  trainModelImage,
}: DesignDecisionsSectionProps) {
  const annotateTrainRef = useRef<HTMLDivElement>(null);
  const designProgress = Math.min(progress * 2, 1);
  const gatherOpacity = isInteractive ? designProgress : undefined;
  const { progress: annotateTrainProgress } = useCrossfadeScroll(annotateTrainRef, isInteractive);

  return (
    <div className={`bishop-develop-iteration-wrapper ${isMobilePinned ? "bishop-mobile-pinned-section" : ""}`} ref={sectionRef}>
      <div className="bishop-develop-sticky-stage">
        <div className="bishop-develop-iteration-content">
          <div
            className="bishop-design-decisions-panel"
            style={isInteractive ? { opacity: 1 - designProgress } : undefined}
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
                ? { opacity: gatherOpacity, pointerEvents: progress > 0.25 ? "auto" : "none" }
                : undefined
            }
          >
            <IterationOneSection
              title={iterationTitle}
              subtitle={iterationSubtitle}
              headline={iterationHeadline}
              papers={papers}
            />
          </div>
        </div>
      </div>

      <div className="bishop-annotate-train-wrapper" ref={annotateTrainRef}>
        <div className="bishop-annotate-train-content">
          <div
            className="bishop-annotate-transition-panel"
            style={isInteractive ? { opacity: 1 - annotateTrainProgress } : undefined}
          >
            <AnnotateSegmentationsSection
              headline={annotateHeadline}
              image={annotateImage}
              video={annotateVideo}
              mobileImage={annotateMobileImage}
              mobileVideo={annotateMobileVideo}
            />
          </div>

          <div
            className="bishop-train-model-transition-panel"
            style={
              isInteractive
                ? { opacity: annotateTrainProgress, pointerEvents: annotateTrainProgress > 0.5 ? "auto" : "none" }
                : undefined
            }
          >
            <TrainModelSection image={trainModelImage} />
          </div>
        </div>
      </div>
    </div>
  );
}
