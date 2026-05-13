import { useRef } from "react";
import { useMobilePinnedSection } from "../../hooks/useMobilePinnedSection";

type RealitySectionProps = {
  isInteractive: boolean;
  title: string;
  text: React.ReactNode;
};

export function RealitySection({ isInteractive, title, text }: RealitySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobilePinned = useMobilePinnedSection(sectionRef, isInteractive);

  return (
    <div className={`bishop-reality-section ${isMobilePinned ? "bishop-mobile-pinned-section" : ""}`} ref={sectionRef}>
      <div className="bishop-reality-content">
        <div className="bishop-reality-header">
          <div className="bishop-reality-icon">😔</div>
          <h2 className="bishop-reality-title">{title}</h2>
        </div>
        <p className="bishop-reality-text">{text}</p>
      </div>
    </div>
  );
}
