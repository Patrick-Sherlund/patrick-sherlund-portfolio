import { useRef, type PointerEvent } from "react";
import { useMobilePinnedSection } from "../../hooks/useMobilePinnedSection";

type ConceptsSectionProps = {
  isInteractive: boolean;
  images: string[];
};

export function ConceptsSection({ isInteractive, images }: ConceptsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
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
  const isMobilePinned = useMobilePinnedSection(sectionRef, isInteractive);
  const carouselGroups = [images, images, images];
  const isMobileCarouselPointer = () => window.matchMedia("(max-width: 640px)").matches;

  const setCarouselOffset = (offset: number) => {
    const track = carouselTrackRef.current;

    if (!track) {
      return;
    }

    track.style.setProperty("--bishop-concepts-carousel-swipe-offset", `${offset}px`);
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

  return (
    <section className={`bishop-concepts-section ${isMobilePinned ? "bishop-mobile-pinned-section" : ""}`} ref={sectionRef}>
      <div className="bishop-concepts-content">
        <h2 className="bishop-concepts-title">Concepts, ideations, iterations</h2>
        <div
          className="bishop-concepts-carousel"
          aria-label="Bishop concept iterations carousel"
          onPointerDown={handleCarouselPointerDown}
          onPointerMove={handleCarouselPointerMove}
          onPointerUp={endCarouselPointerDrag}
          onPointerCancel={endCarouselPointerDrag}
        >
          <div className="bishop-concepts-carousel-track" ref={carouselTrackRef}>
            {carouselGroups.map((group, groupIndex) => (
              <div className="bishop-concepts-collage" key={groupIndex} aria-hidden={groupIndex > 0}>
                {group.map((src, index) => (
                  <img
                    key={`${groupIndex}-${src}`}
                    src={src}
                    alt={groupIndex === 0 ? `Bishop concept iteration ${index + 1}` : ""}
                    className={`bishop-concept-image bishop-concept-image-${index + 1}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
