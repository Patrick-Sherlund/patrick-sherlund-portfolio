import svgPaths from "@/lib/svg-r3w32ldrgh";
import { useRef, type PointerEvent } from "react";
import { useInViewOnce } from "../../hooks/useInViewOnce";
import { LearnedCardIcon } from "./icons";

type PersonaAsset = {
  src: string;
};

type LearnedCard = {
  title: string;
  text: React.ReactNode;
  icon: "simplicity" | "time" | "operators";
};

type PersonaLearnedSectionProps = {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  isInteractive: boolean;
  isMobilePinned: boolean;
  progress: number;
  learnedContentVisible: boolean;
  personaTitle: string;
  learnedTitle: string;
  personaAssets: PersonaAsset[];
  learnedCards: readonly LearnedCard[];
};

export function PersonaLearnedSection({
  sectionRef,
  isInteractive,
  isMobilePinned,
  progress,
  learnedContentVisible,
  personaTitle,
  learnedTitle,
  personaAssets,
  learnedCards,
}: PersonaLearnedSectionProps) {
  const personaPanelRef = useRef<HTMLDivElement>(null);
  const learnedPanelRef = useRef<HTMLDivElement>(null);
  const personaCarouselTrackRef = useRef<HTMLDivElement>(null);
  const personaDragStateRef = useRef({
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
  const normalPersonaVisible = useInViewOnce(personaPanelRef, !isInteractive);
  const normalLearnedVisible = useInViewOnce(learnedPanelRef, !isInteractive);
  const repeatedPersonaAssets = [
    ...personaAssets,
    ...personaAssets,
    ...personaAssets,
    ...personaAssets,
    ...personaAssets,
    ...personaAssets,
  ];
  const isMobileCarouselPointer = () => window.matchMedia("(max-width: 640px)").matches;

  const setPersonaCarouselOffset = (offset: number) => {
    const track = personaCarouselTrackRef.current;

    if (!track) {
      return;
    }

    track.style.setProperty("--bishop-persona-carousel-swipe-offset", `${offset}px`);
  };

  const handlePersonaPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!isMobileCarouselPointer() || event.pointerType === "mouse") {
      return;
    }

    personaDragStateRef.current = {
      ...personaDragStateRef.current,
      isDragging: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startOffset: personaDragStateRef.current.offset,
      lastX: event.clientX,
      lastTime: performance.now(),
      velocity: 0,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePersonaPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const dragState = personaDragStateRef.current;

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
    setPersonaCarouselOffset(nextOffset);
  };

  const endPersonaPointerDrag = (event: PointerEvent<HTMLDivElement>) => {
    const dragState = personaDragStateRef.current;

    if (!dragState.isDragging || dragState.pointerId !== event.pointerId) {
      return;
    }

    dragState.isDragging = false;
    dragState.offset += dragState.velocity * 220;
    setPersonaCarouselOffset(dragState.offset);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div className={`bishop-persona-learned-wrapper ${isMobilePinned ? "bishop-mobile-pinned-section" : ""}`} ref={sectionRef}>
      <div className="bishop-persona-learned-content">
        <div
          ref={personaPanelRef}
          className="bishop-persona-panel"
          style={isInteractive ? { opacity: 1 - progress } : undefined}
        >
          <h2 className="bishop-persona-section-title">{personaTitle}</h2>
          <div
            className={`bishop-persona-carousel-wrapper ${!isInteractive && normalPersonaVisible ? "normal-bubble-visible" : ""}`}
            onPointerDown={handlePersonaPointerDown}
            onPointerMove={handlePersonaPointerMove}
            onPointerUp={endPersonaPointerDrag}
            onPointerCancel={endPersonaPointerDrag}
          >
            <div className="bishop-persona-carousel-track" ref={personaCarouselTrackRef}>
              {repeatedPersonaAssets.map(
                (persona, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <img
                      key={`persona-${index}`}
                      src={persona.src}
                      alt={`Persona ${(index % personaAssets.length) + 1}`}
                      className={`bishop-persona-carousel-card ${isEven ? "offset-top" : "offset-bottom"}`}
                      width={1307}
                      height={799}
                      loading="eager"
                      decoding="async"
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>

        <div
          ref={learnedPanelRef}
          className="bishop-learned-main-panel"
          style={isInteractive ? { opacity: progress } : undefined}
        >
          <h2 className="bishop-learned-title">{learnedTitle}</h2>

          {(!isInteractive || learnedContentVisible) && (
            <div className={`bishop-learned-cards ${!isInteractive && normalLearnedVisible ? "normal-bubble-visible" : ""}`}>
              {learnedCards.map((card) => (
                <div className="bishop-learned-card" key={card.title}>
                  <LearnedCardIcon icon={card.icon} svgPaths={svgPaths} />
                  <h3 className="bishop-learned-card-title">{card.title}</h3>
                  <p className="bishop-learned-card-text">{card.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
