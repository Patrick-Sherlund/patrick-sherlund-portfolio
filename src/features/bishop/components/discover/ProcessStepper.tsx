import type { CSSProperties } from "react";
import { Activity, Cpu, Eye, GitBranch, Map, Plus, Radio, Send, Settings, Tablet, Upload, Wifi } from "lucide-react";

type Step = {
  id: number;
  label: string;
  icon: string;
};

type ProcessStepperProps = {
  steps: Step[];
  activeStep: number;
  stepProgress: number;
  onStepClick: (stepId: number) => void;
};

function getStepIcon(icon: string) {
  if (icon === "activity") {
    return <Activity size={24} />;
  }

  if (icon === "cpu") {
    return <Cpu size={24} />;
  }

  if (icon === "plus") {
    return <Plus size={24} />;
  }

  if (icon === "git") {
    return <GitBranch size={24} />;
  }

  if (icon === "map") {
    return <Map size={24} />;
  }

  if (icon === "upload") {
    return <Upload size={24} />;
  }

  if (icon === "radio") {
    return <Radio size={24} />;
  }

  if (icon === "eye") {
    return <Eye size={24} />;
  }

  if (icon === "settings") {
    return <Settings size={24} />;
  }

  if (icon === "tablet") {
    return <Tablet size={24} />;
  }

  if (icon === "wifi") {
    return <Wifi size={24} />;
  }

  return <Send size={24} />;
}

export function ProcessStepper({
  steps,
  activeStep,
  stepProgress,
  onStepClick,
}: ProcessStepperProps) {
  return (
    <div className="bishop-process-tracker">
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`bishop-process-step ${activeStep === step.id ? "active" : ""} ${activeStep > step.id ? "completed" : ""}`}
          onClick={() => onStepClick(step.id)}
        >
          <div className="bishop-step-icon-wrapper">
            <div className="bishop-step-icon">{getStepIcon(step.icon)}</div>
            {index < steps.length - 1 && (
              <div
                className={`bishop-step-connector ${activeStep > step.id ? "filled" : ""} ${activeStep === step.id ? "active" : ""}`}
                style={
                  {
                    "--progress": activeStep === step.id ? stepProgress : activeStep > step.id ? 1 : 0,
                  } as CSSProperties
                }
              />
            )}
          </div>
          <div className="bishop-step-label">{step.label}</div>
        </div>
      ))}
    </div>
  );
}
