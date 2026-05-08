import type { ReactNode } from "react";

type AnnotateSegmentationsSectionProps = {
  headline: ReactNode;
  image: string;
  mobileImage: string;
};

export function AnnotateSegmentationsSection({
  headline,
  image,
  mobileImage,
}: AnnotateSegmentationsSectionProps) {
  return (
    <div className="bishop-annotate-section">
      <div className="bishop-annotate-content">
        <h3 className="bishop-annotate-headline">{headline}</h3>
        <picture className="bishop-annotate-picture">
          <source media="(max-width: 640px)" srcSet={mobileImage} />
          <img
            src={image}
            alt="Segmentation annotation interface"
            className="bishop-annotate-image"
          />
        </picture>
      </div>
    </div>
  );
}
