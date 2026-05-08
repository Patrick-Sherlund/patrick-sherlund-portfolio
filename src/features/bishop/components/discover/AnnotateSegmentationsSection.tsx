import type { ReactNode } from "react";
import { useEffect, useState } from "react";

type AnnotateSegmentationsSectionProps = {
  headline: ReactNode;
  image: string;
  video: string;
  mobileImage: string;
  mobileVideo: string;
};

export function AnnotateSegmentationsSection({
  headline,
  image,
  video,
  mobileImage,
  mobileVideo,
}: AnnotateSegmentationsSectionProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bishop-annotate-section">
      <div className="bishop-annotate-content">
        <h3 className="bishop-annotate-headline">{headline}</h3>
        <div className="bishop-annotate-media-stack">
          <picture className="bishop-annotate-background-frame">
            <source media="(max-width: 640px)" srcSet={mobileImage} />
            <img
              src={image}
              alt="Dataset image library interface"
              className="bishop-annotate-background"
            />
          </picture>
          <div className="bishop-annotate-video-card">
            <video
              className="bishop-annotate-video"
              autoPlay
              loop
              muted
              playsInline
            >
              {isMounted && (
                <>
                  <source media="(max-width: 640px)" src={mobileVideo} type="video/mp4" />
                  <source src={video} type="video/mp4" />
                </>
              )}
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
