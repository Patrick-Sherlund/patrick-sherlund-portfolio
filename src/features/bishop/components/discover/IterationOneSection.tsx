import type { ReactNode } from "react";

type IterationOneSectionProps = {
  title: string;
  subtitle: string;
  headline: ReactNode;
  papers: string[];
};

export function IterationOneSection({
  title,
  subtitle,
  headline,
  papers,
}: IterationOneSectionProps) {
  return (
    <div className="bishop-iteration-one-section">
      <div className="bishop-iteration-one-content">
        <div className="bishop-iteration-one-header">
          <h2 className="bishop-iteration-one-title">{title}</h2>
          <p className="bishop-iteration-one-subtitle">{subtitle}</p>
        </div>
        <h3 className="bishop-iteration-one-headline">{headline}</h3>
        <div className="bishop-research-paper-carousel" aria-label="Research paper carousel">
          {papers.map((paper, index) => (
            <img
              key={paper}
              src={paper}
              alt={`Published research paper ${index + 1}`}
              className="bishop-research-paper"
              style={{ "--paper-index": index } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
