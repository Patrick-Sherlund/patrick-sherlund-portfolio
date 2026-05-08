type ConceptsSectionProps = {
  images: string[];
};

export function ConceptsSection({ images }: ConceptsSectionProps) {
  const carouselGroups = [images, images, images];

  return (
    <section className="bishop-concepts-section">
      <div className="bishop-concepts-content">
        <h2 className="bishop-concepts-title">Concepts, ideations, iterations</h2>
        <div className="bishop-concepts-carousel" aria-label="Bishop concept iterations carousel">
          <div className="bishop-concepts-carousel-track">
            {carouselGroups.map((group, groupIndex) => (
              <div className="bishop-concepts-collage" key={groupIndex} aria-hidden={groupIndex > 0}>
                {group.map((src, index) => (
                  <img
                    key={`${groupIndex}-${src}`}
                    src={src}
                    alt={groupIndex === 0 ? `Bishop concept iteration ${index + 1}` : ""}
                    className={`bishop-concept-image bishop-concept-image-${index + 1}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
