import { deviceAssets } from "@/shared/media/asset-paths";
import { useEffect, useRef, useState } from "react";
import { useInViewOnce } from "../../hooks/useInViewOnce";
import { ProcessStepper } from "./ProcessStepper";

type ProposedProvedSectionProps = {
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  isInteractive: boolean;
  progress: number;
  title: string;
  videoRef: React.RefObject<HTMLVideoElement | null>;
  processSteps: {
    id: number;
    label: string;
    icon: string;
  }[];
  activeStep: number;
  stepProgress: number;
  onStepClick: (stepId: number) => void;
  provedTitle: string;
  provedCards: {
    top: string;
    bottom: string;
  }[];
};

export function ProposedProvedSection({
  wrapperRef,
  isInteractive,
  progress,
  title,
  videoRef,
  processSteps,
  activeStep,
  stepProgress,
  onStepClick,
  provedTitle,
  provedCards,
}: ProposedProvedSectionProps) {
  const provedPanelRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const normalProvedVisible = useInViewOnce(provedPanelRef, !isInteractive);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bishop-proposed-proved-wrapper" ref={wrapperRef}>
      <div className="bishop-proposed-proved-content">
        <div
          className="bishop-proposed-fade-panel"
          style={isInteractive ? { opacity: 1 - progress } : undefined}
        >
          <div className="bishop-proposed-process">
            <div className="bishop-proposed-content" style={{ transform: "translateY(60px)" }}>
              <h2 className="bishop-proposed-title">{title}</h2>

              <div className="bishop-proposed-layout" style={{ transform: "translateY(-30px)" }}>
                <ProcessStepper
                  steps={processSteps}
                  activeStep={activeStep}
                  stepProgress={stepProgress}
                  onStepClick={onStepClick}
                />

                <div className="bishop-process-video-container">
                  <div className="bishop-process-ipad-screen">
                    <video
                      ref={videoRef}
                      className="bishop-process-video"
                      src={isMounted ? "/assets/videos/bishop_demo_slowed.mp4" : undefined}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                  <img
                    src={deviceAssets.devices.ipad}
                    alt="iPad frame"
                    className="bishop-process-ipad-frame"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={provedPanelRef}
          className="bishop-proved-panel"
          style={
            isInteractive
              ? { opacity: progress, pointerEvents: progress > 0.5 ? "auto" : "none" }
              : undefined
          }
        >
          <h2 className="bishop-proved-main-title">{provedTitle}</h2>
          <div className={`bishop-proved-cards ${!isInteractive && normalProvedVisible ? "normal-bubble-visible" : ""}`}>
            {provedCards.map((card) => (
              <div className="bishop-proved-card" key={card.top}>
                <div className="bishop-proved-card-top">{card.top}</div>
                <div className="bishop-proved-arrow">↓</div>
                <div className="bishop-proved-card-bottom">{card.bottom}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
