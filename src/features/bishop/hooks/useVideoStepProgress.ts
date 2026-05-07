"use client";

import { useEffect, useState, type RefObject } from "react";
import type { processSteps } from "../data/bishop-metrics";

type Step = (typeof processSteps)[number];

export function useVideoStepProgress(
  videoRef: RefObject<HTMLVideoElement | null>,
  steps: Step[]
) {
  const [activeStep, setActiveStep] = useState(1);
  const [stepProgress, setStepProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const handleTimeUpdate = () => {
      const step = steps.find(
        (item) => video.currentTime >= item.startTime && video.currentTime < item.endTime
      );

      if (!step) {
        return;
      }

      setActiveStep(step.id);

      const duration = step.endTime - step.startTime;
      const currentProgress = Math.min(
        Math.max((video.currentTime - step.startTime) / duration, 0),
        1
      );

      setStepProgress(currentProgress);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [steps, videoRef]);

  const selectStep = (stepId: number) => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const step = steps.find((item) => item.id === stepId);
    if (!step) {
      return;
    }

    video.currentTime = step.startTime;
    setActiveStep(stepId);
  };

  return { activeStep, stepProgress, selectStep };
}
