import svgPaths from "@/lib/svg-r3w32ldrgh";
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
  progress: number;
  learnedContentVisible: boolean;
  personaTitle: string;
  learnedTitle: string;
  personaAssets: PersonaAsset[];
  isPersonaHovering: boolean;
  setIsPersonaHovering: (value: boolean) => void;
  learnedCards: readonly LearnedCard[];
};

export function PersonaLearnedSection({
  sectionRef,
  progress,
  learnedContentVisible,
  personaTitle,
  learnedTitle,
  personaAssets,
  isPersonaHovering,
  setIsPersonaHovering,
  learnedCards,
}: PersonaLearnedSectionProps) {
  return (
    <div className="bishop-persona-learned-wrapper" ref={sectionRef}>
      <div className="bishop-persona-learned-content">
        <div className="bishop-persona-panel" style={{ opacity: 1 - progress }}>
          <h2 className="bishop-persona-section-title">{personaTitle}</h2>
          <div className="bishop-persona-carousel-wrapper">
            <div className={`bishop-persona-carousel-track ${isPersonaHovering ? "paused" : ""}`}>
              {[...personaAssets, ...personaAssets, ...personaAssets, ...personaAssets].map(
                (persona, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <img
                      key={`persona-${index}`}
                      src={persona.src}
                      alt={`Persona ${(index % personaAssets.length) + 1}`}
                      className={`bishop-persona-carousel-card ${isEven ? "offset-top" : "offset-bottom"}`}
                      onMouseEnter={() => setIsPersonaHovering(true)}
                      onMouseLeave={() => setIsPersonaHovering(false)}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>

        <div className="bishop-learned-main-panel" style={{ opacity: progress }}>
          <h2 className="bishop-learned-title">{learnedTitle}</h2>

          {learnedContentVisible && (
            <div className="bishop-learned-cards">
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
