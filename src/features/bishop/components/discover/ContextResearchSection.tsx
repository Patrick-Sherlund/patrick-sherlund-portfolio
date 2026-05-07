type CarouselAsset = {
  src: string;
  className: string;
  isVideo: boolean;
};

type ContextResearchSectionProps = {
  sectionRef: React.RefObject<HTMLDivElement | null>;
  progress: number;
  carouselVisible: boolean;
  title: string;
  text: React.ReactNode;
  researchTitle: string;
  carouselImages: CarouselAsset[];
  carouselVideoRefs: React.MutableRefObject<(HTMLVideoElement | null)[]>;
  setHoveredCarouselVideo: (index: number | null) => void;
};

export function ContextResearchSection({
  sectionRef,
  progress,
  carouselVisible,
  title,
  text,
  researchTitle,
  carouselImages,
  carouselVideoRefs,
  setHoveredCarouselVideo,
}: ContextResearchSectionProps) {
  return (
    <div className="bishop-context-research-wrapper" ref={sectionRef}>
      <div className="bishop-context-research-content">
        <div className="bishop-context-panel" style={{ opacity: 1 - progress }}>
          <h3 className="bishop-context-title-text">{title}</h3>
          <p className="bishop-context-text">{text}</p>
        </div>

        <div className="bishop-research-panel" style={{ opacity: progress }}>
          <h2 className="bishop-research-title">{researchTitle}</h2>
        </div>

        {carouselVisible && (
          <div className="bishop-carousel-container">
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
                      onMouseEnter={() => setHoveredCarouselVideo(index)}
                      onMouseLeave={() => setHoveredCarouselVideo(null)}
                    />
                  ) : (
                    <img src={asset.src} alt="" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
