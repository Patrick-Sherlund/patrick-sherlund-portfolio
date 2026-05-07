import { deviceAssets } from "@/shared/media/asset-paths";
import { ProcessStepper } from "./ProcessStepper";

type ProposedProvedSectionProps = {
  wrapperRef: React.RefObject<HTMLDivElement | null>;
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
  return (
    <div className="bishop-proposed-proved-wrapper" ref={wrapperRef}>
      <div className="bishop-proposed-proved-content">
        <div className="bishop-proposed-fade-panel" style={{ opacity: 1 - progress }}>
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
                      src="/assets/videos/bishop_demo_slowed.mp4"
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
          className="bishop-proved-panel"
          style={{ opacity: progress, pointerEvents: progress > 0.5 ? "auto" : "none" }}
        >
          <h2 className="bishop-proved-main-title">{provedTitle}</h2>
          <div className="bishop-proved-cards">
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
