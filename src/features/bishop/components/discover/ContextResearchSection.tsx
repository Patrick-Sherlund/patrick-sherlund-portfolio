import { useRef } from "react";
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
  const normalCarouselVisible = useInViewOnce(researchPanelRef, !isInteractive);

  const renderCarousel = () => (
    <div className={`bishop-carousel-container ${!isInteractive && normalCarouselVisible ? "normal-bubble-visible" : ""}`}>
      <div className="bishop-carousel-track">
        {[...carouselImages, ...carouselImages, ...carouselImages].map((asset, index) => (
          <div key={index} className={`bishop-carousel-image ${asset.className}`}>
            {asset.isVideo ? (
              <video
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
      <div className="bishop-context-research-content">
        <div
          className="bishop-context-panel"
          style={isInteractive ? { opacity: 1 - progress } : undefined}
        >
          <h3 className="bishop-context-title-text">{title}</h3>
          <p className="bishop-context-text">{text}</p>
        </div>

        <div
          ref={researchPanelRef}
          className="bishop-research-panel"
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
