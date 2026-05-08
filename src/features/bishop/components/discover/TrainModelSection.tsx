type TrainModelSectionProps = {
  image: string;
};

export function TrainModelSection({ image }: TrainModelSectionProps) {
  return (
    <section className="bishop-train-model-section">
      <div className="bishop-train-model-content">
        <h3 className="bishop-train-model-headline">
          <strong>Train</strong> & fine tune the model
        </h3>
        <img
          src={image}
          alt="Machine learning model training output"
          className="bishop-train-model-image"
        />
      </div>
    </section>
  );
}
