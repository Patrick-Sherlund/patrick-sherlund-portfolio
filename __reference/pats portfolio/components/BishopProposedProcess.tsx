import { useRef, useEffect, useState } from "react";
import { Plus, Upload, Eye, Send } from "lucide-react";
import "./BishopProposedProcess.css";

interface ProcessStep {
  id: number;
  label: string;
  icon: React.ReactNode;
  startTime: number;
  endTime: number;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    label: "Create Project",
    icon: <Plus size={24} />,
    startTime: 0,
    endTime: 2,
  },
  {
    id: 2,
    label: "Upload Video",
    icon: <Upload size={24} />,
    startTime: 2,
    endTime: 4,
  },
  {
    id: 3,
    label: "Review Results",
    icon: <Eye size={24} />,
    startTime: 4,
    endTime: 6,
  },
  {
    id: 4,
    label: "Share with Team",
    icon: <Send size={24} />,
    startTime: 6,
    endTime: 10,
  },
];

export function BishopProposedProcess() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeStep, setActiveStep] = useState<number>(1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;

      // Find which step should be active based on current time
      const step = processSteps.find(
        (s) => currentTime >= s.startTime && currentTime < s.endTime
      );

      if (step) {
        setActiveStep(step.id);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <section className="bishop-proposed-process">
      <div className="bishop-proposed-content">
        <h2 className="bishop-proposed-title">Our proposed process</h2>

        <div className="bishop-proposed-layout">
          {/* Left Side: State Tracker */}
          <div className="bishop-process-tracker">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`bishop-process-step ${
                  activeStep === step.id ? "active" : ""
                } ${activeStep > step.id ? "completed" : ""}`}
              >
                <div className="bishop-step-icon-wrapper">
                  <div className="bishop-step-icon">{step.icon}</div>
                  {index < processSteps.length - 1 && (
                    <div
                      className={`bishop-step-connector ${
                        activeStep > step.id ? "filled" : ""
                      }`}
                    />
                  )}
                </div>
                <div className="bishop-step-label">{step.label}</div>
              </div>
            ))}
          </div>

          {/* Right Side: Video */}
          <div className="bishop-process-video-container">
            <video
              ref={videoRef}
              className="bishop-process-video"
              src="https://github.com/Patrick-Sherlund/patrick-sherlund-portfolio/raw/refs/heads/master/public/assets/videos/User%20Survey%202.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
