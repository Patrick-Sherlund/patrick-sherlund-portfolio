import svgPaths from "@/lib/svg-r3w32ldrgh";
import { useRef } from "react";
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

  return (
    <div className={`bishop-persona-learned-wrapper ${isMobilePinned ? "bishop-mobile-pinned-section" : ""}`} ref={sectionRef}>
      <div className="bishop-persona-learned-content">
        <div
          ref={personaPanelRef}
          className="bishop-persona-panel"
          style={isInteractive ? { opacity: 1 - progress } : undefined}
        >
          <h2 className="bishop-persona-section-title">{personaTitle}</h2>
          <div className={`bishop-persona-carousel-wrapper ${!isInteractive && normalPersonaVisible ? "normal-bubble-visible" : ""}`}>
            <div className="bishop-persona-carousel-track">
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
