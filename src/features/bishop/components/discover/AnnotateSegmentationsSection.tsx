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
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const updateSelectedVideo = () => {
      setSelectedVideo(mediaQuery.matches ? mobileVideo : video);
    };

    updateSelectedVideo();
    mediaQuery.addEventListener("change", updateSelectedVideo);

    return () => mediaQuery.removeEventListener("change", updateSelectedVideo);
  }, [mobileVideo, video]);

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
              key={selectedVideo ?? "pending"}
              src={selectedVideo ?? undefined}
              className="bishop-annotate-video"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </div>
  );
}
