import type { ReactNode } from "react";

type IterationTwoSectionProps = {
  title: string;
  subtitle: string;
  summary: ReactNode;
  headline: ReactNode;
  images: string[];
};

export function IterationTwoSection({
  title,
  subtitle,
  summary,
  headline,
  images,
}: IterationTwoSectionProps) {
  return (
    <div className="bishop-iteration-two-section">
      <div className="bishop-iteration-two-content">
        <div className="bishop-iteration-two-header">
          <h2 className="bishop-iteration-two-title">{title}</h2>
          <p className="bishop-iteration-two-subtitle">{subtitle}</p>
        </div>
        <p className="bishop-iteration-two-summary">{summary}</p>
        <h3 className="bishop-iteration-two-headline">{headline}</h3>
        <div className="bishop-inference-carousel" aria-label="Inference result carousel">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`Inference result frame ${index + 1}`}
              className="bishop-inference-frame"
              style={{ "--inference-index": index } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
