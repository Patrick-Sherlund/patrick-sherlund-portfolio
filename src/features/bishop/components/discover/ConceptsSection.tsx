type ConceptsSectionProps = {
  images: string[];
};

export function ConceptsSection({ images }: ConceptsSectionProps) {
  return (
    <section className="bishop-concepts-section">
      <div className="bishop-concepts-content">
        <h2 className="bishop-concepts-title">Concepts, ideations, iterations</h2>
        <div className="bishop-concepts-collage">
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Bishop concept iteration ${index + 1}`}
              className={`bishop-concept-image bishop-concept-image-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
