import { useRef, type PointerEvent } from "react";
import { HydratedVideo } from "@/shared/components/HydratedVideo";
import { useInViewOnce } from "../../hooks/useInViewOnce";

type CarouselAsset = {
  src: string;
  className: string;
  isVideo: boolean;
};

type ContextResearchSectionProps = {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  isInteractive: boolean;
  isMobilePinned: boolean;
  progress: number;
  carouselVisible: boolean;
  title: string;
  text: React.ReactNode;
  researchTitle: string;
  carouselImages: CarouselAsset[];
  carouselVideoRefs: React.MutableRefObject<(HTMLVideoElement | null)[]>;
};

export function ContextResearchSection({
  sectionRef,
  isInteractive,
  isMobilePinned,
  progress,
  carouselVisible,
  title,
  text,
  researchTitle,
  carouselImages,
  carouselVideoRefs,
}: ContextResearchSectionProps) {
  const researchPanelRef = useRef<HTMLDivElement>(null);
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({
    isDragging: false,
    pointerId: -1,
    startX: 0,
    startY: 0,
    offset: 0,
    startOffset: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
  });
  const normalCarouselVisible = useInViewOnce(researchPanelRef, !isInteractive);
  const isMobileCarouselPointer = () => window.matchMedia("(max-width: 640px)").matches;

  const setCarouselOffset = (offset: number) => {
    const track = carouselTrackRef.current;

    if (!track) {
      return;
    }

    track.style.setProperty("--bishop-carousel-swipe-offset", `${offset}px`);
  };

  const handleCarouselPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!isMobileCarouselPointer() || event.pointerType === "mouse") {
      return;
    }

    dragStateRef.current = {
      ...dragStateRef.current,
      isDragging: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startOffset: dragStateRef.current.offset,
      lastX: event.clientX,
      lastTime: performance.now(),
      velocity: 0,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleCarouselPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const dragState = dragStateRef.current;

    if (!dragState.isDragging || dragState.pointerId !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - dragState.startX;
    const deltaY = event.clientY - dragState.startY;

    if (Math.abs(deltaY) > Math.abs(deltaX) * 1.2) {
      return;
    }

    const nextOffset = dragState.startOffset + deltaX;
    const now = performance.now();
    const elapsed = Math.max(1, now - dragState.lastTime);

    dragState.velocity = (event.clientX - dragState.lastX) / elapsed;
    dragState.lastX = event.clientX;
    dragState.lastTime = now;
    dragState.offset = nextOffset;
    setCarouselOffset(nextOffset);
  };

  const endCarouselPointerDrag = (event: PointerEvent<HTMLDivElement>) => {
    const dragState = dragStateRef.current;

    if (!dragState.isDragging || dragState.pointerId !== event.pointerId) {
      return;
    }

    dragState.isDragging = false;
    dragState.offset += dragState.velocity * 220;
    setCarouselOffset(dragState.offset);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const renderCarousel = () => (
    <div
      className={`bishop-carousel-container ${!isInteractive && normalCarouselVisible ? "normal-bubble-visible" : ""}`}
      onPointerDown={handleCarouselPointerDown}
      onPointerMove={handleCarouselPointerMove}
      onPointerUp={endCarouselPointerDrag}
      onPointerCancel={endCarouselPointerDrag}
    >
      <div className="bishop-carousel-track" ref={carouselTrackRef}>
        {[...carouselImages, ...carouselImages, ...carouselImages].map((asset, index) => (
          <div key={index} className={`bishop-carousel-image ${asset.className}`}>
            {asset.isVideo ? (
              <HydratedVideo
                ref={(element) => {
                  if (element) {
                    carouselVideoRefs.current[index] = element;
                  }
                }}
                src={asset.src}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img src={asset.src} alt="" />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`bishop-context-research-wrapper ${isMobilePinned ? "bishop-mobile-pinned-section" : ""}`} ref={sectionRef}>
      {isInteractive && (
        <div data-case-study-nav-target data-case-study-nav-marker style={{ position: "absolute", top: "calc(min(450px, 45vh) + 100vh)", left: 0, width: 1, height: 1, pointerEvents: "none" }} />
      )}
      <div className="bishop-context-research-content">
        <div
          className="bishop-context-panel"
          {...(!isInteractive ? { "data-case-study-nav-target": "true", "data-case-study-nav-align": "center" } : {})}
          style={isInteractive ? { opacity: 1 - progress } : undefined}
        >
          <h3 className="bishop-context-title-text">{title}</h3>
          <p className="bishop-context-text">{text}</p>
        </div>

        <div
          ref={researchPanelRef}
          className="bishop-research-panel"
          {...(!isInteractive ? { "data-case-study-nav-target": "true", "data-case-study-nav-align": "center" } : {})}
          style={isInteractive ? { opacity: progress } : undefined}
        >
          <h2 className="bishop-research-title">{researchTitle}</h2>
          {!isInteractive && normalCarouselVisible && renderCarousel()}
        </div>

        {isInteractive && carouselVisible && renderCarousel()}
      </div>
    </div>
  );
}
