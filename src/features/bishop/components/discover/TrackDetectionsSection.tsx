"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, PointerEvent } from "react";
import { HydratedVideo } from "@/shared/components/HydratedVideo";

type TrackDetectionsSectionProps = {
  v1Video: string;
  v4Video: string;
  isActive?: boolean;
};

type SliderStyle = CSSProperties & Record<`--${string}`, string>;

const clampValue = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function TrackDetectionsSection({ v1Video, v4Video, isActive = true }: TrackDetectionsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const v1Ref = useRef<HTMLVideoElement>(null);
  const v4Ref = useRef<HTMLVideoElement>(null);
  const isDraggingRef = useRef(false);
  const sliderPositionRef = useRef(50);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const v1 = v1Ref.current;
    const v4 = v4Ref.current;

    if (!v1 || !v4) {
      return;
    }

    const syncVideos = () => {
      if (Math.abs(v1.currentTime - v4.currentTime) > 0.18) {
        v4.currentTime = v1.currentTime;
      }

      if (v1.paused && !v4.paused) {
        v4.pause();
      }

      if (!v1.paused && v4.paused) {
        void v4.play();
      }
    };

    v1.addEventListener("timeupdate", syncVideos);
    v1.addEventListener("play", syncVideos);
    v1.addEventListener("pause", syncVideos);

    return () => {
      v1.removeEventListener("timeupdate", syncVideos);
      v1.removeEventListener("play", syncVideos);
      v1.removeEventListener("pause", syncVideos);
    };
  }, []);

  const setSliderValue = (nextPosition: number, syncState: boolean) => {
    const nextValue = clampValue(nextPosition, 0, 100);
    const container = containerRef.current;

    sliderPositionRef.current = nextValue;
    container?.style.setProperty("--tracker-slider-position", `${nextValue}%`);
    if (container) {
      const sliderX = (container.getBoundingClientRect().width * nextValue) / 100;
      container.style.setProperty("--tracker-slider-x", `${sliderX}px`);
    }

    if (syncState) {
      setSliderPosition(nextValue);
      return;
    }

    container?.setAttribute("aria-valuenow", `${Math.round(nextValue)}`);
  };

  const updateSliderPosition = (clientX: number, syncState = false) => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const rect = container.getBoundingClientRect();
    const nextPosition = ((clientX - rect.left) / rect.width) * 100;
    setSliderValue(nextPosition, syncState);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    event.preventDefault();
    container.setPointerCapture(event.pointerId);
    isDraggingRef.current = true;
    setIsDragging(true);
    updateSliderPosition(event.clientX, true);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) {
      return;
    }

    event.preventDefault();
    updateSliderPosition(event.clientX);
  };

  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;

    if (container?.hasPointerCapture(event.pointerId)) {
      container.releasePointerCapture(event.pointerId);
    }

    isDraggingRef.current = false;
    setSliderValue(sliderPositionRef.current, true);
    setIsDragging(false);
  };

  const moveSliderWithKey = (key: string, shiftKey: boolean) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(key)) {
      return;
    }

    const step = shiftKey ? 10 : 5;

    const currentPosition = sliderPositionRef.current;
    let nextPosition = currentPosition;

    if (key === "Home") {
      nextPosition = 0;
    } else if (key === "End") {
      nextPosition = 100;
    } else {
      nextPosition = clampValue(
        key === "ArrowLeft" ? currentPosition - step : currentPosition + step,
        0,
        100
      );
    }

    setSliderValue(nextPosition, true);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      return;
    }

    event.preventDefault();
    moveSliderWithKey(event.key, event.shiftKey);
  };

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const handleWindowKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.defaultPrevented || !["ArrowLeft", "ArrowRight"].includes(event.key)) {
        return;
      }

      const section = sectionRef.current;
      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportMidpoint = window.innerHeight / 2;
      const isCentered = rect.top <= viewportMidpoint && rect.bottom >= viewportMidpoint;

      if (!isCentered) {
        return;
      }

      event.preventDefault();
      moveSliderWithKey(event.key, event.shiftKey);
    };

    window.addEventListener("keydown", handleWindowKeyDown);
    return () => window.removeEventListener("keydown", handleWindowKeyDown);
  }, [isActive]);

  const sliderStyle: SliderStyle = {
    "--tracker-slider-position": `${sliderPosition}%`,
  };

  return (
    <section className="bishop-track-detections-section" ref={sectionRef}>
      <div className="bishop-track-detections-content">
        <h2 className="bishop-track-detections-title">
          <strong>Track multiple detections</strong> over time
        </h2>

        <div
          className={`bishop-tracker-comparison ${isDragging ? "dragging" : ""}`}
          ref={containerRef}
          style={sliderStyle}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          onKeyDown={handleKeyDown}
          role="slider"
          aria-label="Compare V1 and V4 tracking videos"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(sliderPosition)}
          tabIndex={0}
        >
          <div className="bishop-tracker-label bishop-tracker-label-left">V1</div>
          <div className="bishop-tracker-label bishop-tracker-label-right">V4 🪄</div>
          <HydratedVideo
            ref={v1Ref}
            className="bishop-tracker-video bishop-tracker-video-base"
            src={v1Video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <HydratedVideo
            ref={v4Ref}
            className="bishop-tracker-video bishop-tracker-video-after"
            src={v4Video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="bishop-tracker-divider" aria-hidden="true" />
          <div className="bishop-tracker-handle" aria-hidden="true">
            <span />
          </div>
        </div>

        <p className="bishop-track-detections-caption">Detect, Aggregate, Coalesce -&gt; Track</p>
      </div>
    </section>
  );
}
