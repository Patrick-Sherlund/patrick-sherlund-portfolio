import type { ReactNode } from "react";
import { AnnotateSegmentationsSection } from "./AnnotateSegmentationsSection";
import { IterationOneSection } from "./IterationOneSection";

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
  annotateMobileImage: string;
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
  annotateMobileImage,
}: DesignDecisionsSectionProps) {
  const designProgress = Math.min(progress * 2, 1);
  const annotateProgress = Math.max((progress - 0.5) * 2, 0);
  const gatherOpacity = isInteractive
    ? Math.min(designProgress, 1 - annotateProgress)
    : undefined;

  return (
    <div className={`bishop-develop-iteration-wrapper ${isMobilePinned ? "bishop-mobile-pinned-section" : ""}`} ref={sectionRef}>
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
              ? { opacity: gatherOpacity, pointerEvents: progress > 0.25 && progress < 0.75 ? "auto" : "none" }
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

        <div
          className="bishop-annotate-segmentations-panel"
          style={
            isInteractive
              ? { opacity: annotateProgress, pointerEvents: progress > 0.75 ? "auto" : "none" }
              : undefined
          }
        >
          <AnnotateSegmentationsSection
            headline={annotateHeadline}
            image={annotateImage}
            mobileImage={annotateMobileImage}
          />
        </div>
      </div>
    </div>
  );
}
