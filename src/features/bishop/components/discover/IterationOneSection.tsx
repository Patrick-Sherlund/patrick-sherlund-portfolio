"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, PointerEvent, ReactNode } from "react";

type IterationOneSectionProps = {
  title: string;
  subtitle: string;
  headline: ReactNode;
  papers: string[];
  magnifierImage: string;
  isPanelVisible: boolean;
};

type LensPosition = {
  x: number;
  y: number;
};

type MagnifierLayout = {
  stageWidth: number;
  stageHeight: number;
  carouselLeft: number;
  carouselTop: number;
  carouselWidth: number;
  carouselHeight: number;
  circleLeft: number;
  circleTop: number;
  circleSize: number;
  originX: number;
  originY: number;
};

type MagnifierStyle = CSSProperties & Record<`--${string}`, string>;

const clampValue = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const circleIntersectsRect = (circleX: number, circleY: number, radius: number, rect: DOMRect) => {
  const closestX = clampValue(circleX, rect.left, rect.right);
  const closestY = clampValue(circleY, rect.top, rect.bottom);
  const distanceX = circleX - closestX;
  const distanceY = circleY - closestY;

  return distanceX * distanceX + distanceY * distanceY <= radius * radius;
};

const readPixelValue = (styles: CSSStyleDeclaration, property: string, fallback: number) => {
  const value = Number.parseFloat(styles.getPropertyValue(property));
  return Number.isFinite(value) ? value : fallback;
};

export function IterationOneSection({
  title,
  subtitle,
  headline,
  papers,
  magnifierImage,
  isPanelVisible,
}: IterationOneSectionProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const headlineAnchorRef = useRef<HTMLSpanElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const magnifierRef = useRef<HTMLDivElement>(null);
  const paperRefs = useRef<(HTMLImageElement | null)[]>([]);
  const dragRef = useRef<{ offsetX: number; offsetY: number; pointerId: number } | null>(null);
  const hasDraggedRef = useRef(false);
  const [lensPosition, setLensPosition] = useState<LensPosition | null>(null);
  const [layout, setLayout] = useState<MagnifierLayout | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasWiggled, setHasWiggled] = useState(false);
  const [activePaperIndex, setActivePaperIndex] = useState<number | null>(null);

  const measureLayout = useCallback(() => {
    const stage = stageRef.current;
    const headlineElement = headlineRef.current;
    const headlineAnchorElement = headlineAnchorRef.current;
    const carouselElement = carouselRef.current;
    const magnifierElement = magnifierRef.current;

    if (!stage || !headlineElement || !headlineAnchorElement || !carouselElement || !magnifierElement) {
      return;
    }

    const stageRect = stage.getBoundingClientRect();
    const headlineAnchorRect = headlineAnchorElement.getBoundingClientRect();
    const carouselRect = carouselElement.getBoundingClientRect();
    const magnifierRect = magnifierElement.getBoundingClientRect();
    const styles = window.getComputedStyle(magnifierElement);
    const circleOffsetX = readPixelValue(styles, "--magnifier-circle-left", 4);
    const circleOffsetY = readPixelValue(styles, "--magnifier-circle-top", 0);
    const circleSize = readPixelValue(styles, "--magnifier-circle-size", 70);
    const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;
    const initialGap = isMobileViewport ? 6 : 24;
    const initialX = headlineAnchorRect.right - stageRect.left + initialGap;
    const initialY = isMobileViewport
      ? headlineAnchorRect.top - stageRect.top
      : headlineAnchorRect.top - stageRect.top - 44;
    const maxX = Math.max(stageRect.width - magnifierRect.width, 0);
    const maxY = Math.max(stageRect.height - magnifierRect.height, 0);

    setLensPosition((currentPosition) => {
      const basePosition = hasDraggedRef.current && currentPosition
        ? currentPosition
        : { x: initialX, y: initialY };

      return {
        x: clampValue(basePosition.x, 0, maxX),
        y: clampValue(basePosition.y, 0, maxY),
      };
    });

    setLayout({
      stageWidth: stageRect.width,
      stageHeight: stageRect.height,
      carouselLeft: carouselRect.left - stageRect.left,
      carouselTop: carouselRect.top - stageRect.top,
      carouselWidth: carouselRect.width,
      carouselHeight: carouselRect.height,
      circleLeft: circleOffsetX,
      circleTop: circleOffsetY,
      circleSize,
      originX: circleOffsetX + circleSize / 2,
      originY: circleOffsetY + circleSize / 2,
    });
  }, []);

  useEffect(() => {
    measureLayout();

    const stage = stageRef.current;
    const carouselElement = carouselRef.current;

    if (!stage || !carouselElement) {
      return;
    }

    const resizeObserver = new ResizeObserver(measureLayout);
    resizeObserver.observe(stage);
    resizeObserver.observe(carouselElement);
    window.addEventListener("resize", measureLayout);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measureLayout);
    };
  }, [measureLayout]);

  useEffect(() => {
    const stage = stageRef.current;

    if (!stage || hasWiggled || !isPanelVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setHasWiggled(true);
      },
      { threshold: 0.35 }
    );

    observer.observe(stage);

    return () => observer.disconnect();
  }, [hasWiggled, isPanelVisible]);

  const updateActivePaper = useCallback((position: LensPosition) => {
    const stage = stageRef.current;

    if (!stage || !layout) {
      setActivePaperIndex(null);
      return;
    }

    const stageRect = stage.getBoundingClientRect();
    const circleX = stageRect.left + position.x + layout.originX;
    const circleY = stageRect.top + position.y + layout.originY;
    const radius = layout.circleSize / 2;
    let nextActiveIndex: number | null = null;
    let nextActiveZIndex = Number.NEGATIVE_INFINITY;
    let nextActiveDistance = Number.POSITIVE_INFINITY;

    paperRefs.current.forEach((paper, index) => {
      if (!paper) {
        return;
      }

      const rect = paper.getBoundingClientRect();

      if (!circleIntersectsRect(circleX, circleY, radius, rect)) {
        return;
      }

      const zIndex = Number.parseInt(window.getComputedStyle(paper).zIndex, 10);
      const resolvedZIndex = Number.isFinite(zIndex) ? zIndex : 0;
      const distanceX = circleX - (rect.left + rect.width / 2);
      const distanceY = circleY - (rect.top + rect.height / 2);
      const distance = distanceX * distanceX + distanceY * distanceY;

      if (resolvedZIndex > nextActiveZIndex || (resolvedZIndex === nextActiveZIndex && distance < nextActiveDistance)) {
        nextActiveIndex = index;
        nextActiveZIndex = resolvedZIndex;
        nextActiveDistance = distance;
      }
    });

    setActivePaperIndex(nextActiveIndex);
  }, [layout]);

  const updateLensPosition = useCallback((clientX: number, clientY: number) => {
    const stage = stageRef.current;
    const magnifierElement = magnifierRef.current;
    const drag = dragRef.current;

    if (!stage || !magnifierElement || !drag) {
      return;
    }

    const stageRect = stage.getBoundingClientRect();
    const magnifierRect = magnifierElement.getBoundingClientRect();
    const maxX = Math.max(stageRect.width - magnifierRect.width, 0);
    const maxY = Math.max(stageRect.height - magnifierRect.height, 0);
    const nextPosition = {
      x: clampValue(clientX - stageRect.left - drag.offsetX, 0, maxX),
      y: clampValue(clientY - stageRect.top - drag.offsetY, 0, maxY),
    };

    setLensPosition(nextPosition);
    updateActivePaper(nextPosition);
  }, [updateActivePaper]);

  const stopDragging = useCallback(() => {
    const drag = dragRef.current;
    const magnifierElement = magnifierRef.current;

    if (drag && magnifierElement?.hasPointerCapture(drag.pointerId)) {
      magnifierElement.releasePointerCapture(drag.pointerId);
    }

    dragRef.current = null;
    setIsDragging(false);
    setActivePaperIndex(null);
  }, []);

  useEffect(() => {
    if (!isDragging) {
      return;
    }

    const handleWindowPointerMove = (event: globalThis.PointerEvent) => {
      const drag = dragRef.current;

      if (!drag || event.pointerId !== drag.pointerId) {
        return;
      }

      event.preventDefault();
      updateLensPosition(event.clientX, event.clientY);
    };

    const handleWindowPointerEnd = (event: globalThis.PointerEvent) => {
      const drag = dragRef.current;

      if (!drag || event.pointerId !== drag.pointerId) {
        return;
      }

      stopDragging();
    };

    window.addEventListener("pointermove", handleWindowPointerMove, { passive: false });
    window.addEventListener("pointerup", handleWindowPointerEnd);
    window.addEventListener("pointercancel", handleWindowPointerEnd);

    return () => {
      window.removeEventListener("pointermove", handleWindowPointerMove);
      window.removeEventListener("pointerup", handleWindowPointerEnd);
      window.removeEventListener("pointercancel", handleWindowPointerEnd);
    };
  }, [isDragging, stopDragging, updateLensPosition]);

  useEffect(() => {
    if (!isDragging || !window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    const preventTouchScroll = (event: TouchEvent) => event.preventDefault();
    const preventWheelScroll = (event: WheelEvent) => event.preventDefault();

    window.addEventListener("touchmove", preventTouchScroll, { passive: false });
    window.addEventListener("wheel", preventWheelScroll, { passive: false });

    return () => {
      window.removeEventListener("touchmove", preventTouchScroll);
      window.removeEventListener("wheel", preventWheelScroll);
    };
  }, [isDragging]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const magnifierElement = magnifierRef.current;

    if (!magnifierElement) {
      return;
    }

    event.preventDefault();
    const magnifierRect = magnifierElement.getBoundingClientRect();
    hasDraggedRef.current = true;
    dragRef.current = {
      offsetX: event.clientX - magnifierRect.left,
      offsetY: event.clientY - magnifierRect.top,
      pointerId: event.pointerId,
    };
    magnifierElement.setPointerCapture(event.pointerId);
    setIsDragging(true);
    updateLensPosition(event.clientX, event.clientY);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) {
      return;
    }

    event.preventDefault();
    updateLensPosition(event.clientX, event.clientY);
  };

  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (dragRef.current?.pointerId !== event.pointerId) {
      return;
    }

    stopDragging();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) {
      return;
    }

    const stage = stageRef.current;
    const magnifierElement = magnifierRef.current;

    if (!stage || !magnifierElement || !lensPosition) {
      return;
    }

    event.preventDefault();
    hasDraggedRef.current = true;

    const step = event.shiftKey ? 48 : 16;
    const stageRect = stage.getBoundingClientRect();
    const magnifierRect = magnifierElement.getBoundingClientRect();
    const maxX = Math.max(stageRect.width - magnifierRect.width, 0);
    const maxY = Math.max(stageRect.height - magnifierRect.height, 0);
    const nextX = event.key === "ArrowLeft"
      ? lensPosition.x - step
      : event.key === "ArrowRight"
        ? lensPosition.x + step
        : lensPosition.x;
    const nextY = event.key === "ArrowUp"
      ? lensPosition.y - step
      : event.key === "ArrowDown"
        ? lensPosition.y + step
        : lensPosition.y;

    setLensPosition({
      x: clampValue(nextX, 0, maxX),
      y: clampValue(nextY, 0, maxY),
    });
  };

  const isCarouselPaused = isDragging && activePaperIndex !== null;
  const carouselClassName = `bishop-research-paper-carousel ${isCarouselPaused ? "paused" : ""}`;
  const magnifierStyle: MagnifierStyle | undefined = lensPosition && layout
    ? {
        "--magnifier-x": `${lensPosition.x}px`,
        "--magnifier-y": `${lensPosition.y}px`,
        "--magnifier-ready": "1",
        "--zoom-stage-width": `${layout.stageWidth}px`,
        "--zoom-stage-height": `${layout.stageHeight}px`,
        "--zoom-stage-left": `${-(lensPosition.x + layout.circleLeft)}px`,
        "--zoom-stage-top": `${-(lensPosition.y + layout.circleTop)}px`,
        "--zoom-carousel-left": `${layout.carouselLeft}px`,
        "--zoom-carousel-top": `${layout.carouselTop}px`,
        "--zoom-carousel-width": `${layout.carouselWidth}px`,
        "--zoom-carousel-height": `${layout.carouselHeight}px`,
        "--zoom-origin-x": `${lensPosition.x + layout.originX}px`,
        "--zoom-origin-y": `${lensPosition.y + layout.originY}px`,
      }
    : undefined;

  return (
    <div className="bishop-iteration-one-section" ref={stageRef}>
      <div className="bishop-iteration-one-content">
        <div className="bishop-iteration-one-header">
          <h2 className="bishop-iteration-one-title">{title}</h2>
          <p className="bishop-iteration-one-subtitle">{subtitle}</p>
        </div>
        <div className="bishop-iteration-one-headline-wrap" ref={headlineRef}>
          <h3 className="bishop-iteration-one-headline">
            {headline}
            <span className="bishop-iteration-one-headline-anchor" ref={headlineAnchorRef} aria-hidden="true" />
          </h3>
        </div>
        <div className={carouselClassName} aria-label="Research paper carousel" ref={carouselRef}>
          {papers.map((paper, index) => (
            <img
              key={paper}
              ref={(element) => {
                paperRefs.current[index] = element;
              }}
              src={paper}
              alt={`Published research paper ${index + 1}`}
              className={`bishop-research-paper ${activePaperIndex === index ? "active" : ""}`}
              style={{ "--paper-index": index } as CSSProperties}
            />
          ))}
        </div>
      </div>
      <div
        className={`bishop-research-magnifier ${isDragging ? "dragging" : ""} ${hasWiggled ? "wiggle" : ""}`}
        ref={magnifierRef}
        style={magnifierStyle}
        role="button"
        tabIndex={0}
        aria-label="Drag magnifier over the research papers"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onKeyDown={handleKeyDown}
      >
        <div className="bishop-research-magnifier-lens" aria-hidden="true">
          <div className="bishop-research-magnifier-zoom-stage">
            <div className={`${carouselClassName} bishop-research-paper-carousel-zoom`}>
              {papers.map((paper, index) => (
                <img
                  key={`${paper}-zoom`}
                  src={paper}
                  alt=""
                  className={`bishop-research-paper ${activePaperIndex === index ? "active" : ""}`}
                  style={{ "--paper-index": index } as CSSProperties}
                  draggable={false}
                />
              ))}
            </div>
          </div>
        </div>
        <img
          src={magnifierImage}
          alt=""
          className="bishop-research-magnifier-image"
          draggable={false}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
