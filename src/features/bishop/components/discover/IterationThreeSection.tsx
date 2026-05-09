type IterationThreeSectionProps = {
  desktopImage: string;
  mobileImage: string;
};

export function IterationThreeSection({
  desktopImage,
  mobileImage,
}: IterationThreeSectionProps) {
  return (
    <section className="bishop-iteration-three-section">
      <div className="bishop-iteration-three-content">
        <div className="bishop-iteration-three-header">
          <h2 className="bishop-iteration-three-title">Iteration 3</h2>
          <p className="bishop-iteration-three-subtitle">
            Week 6 • Create, View, Manage &amp; Associate
          </p>
        </div>

        <h3 className="bishop-iteration-three-headline">
          <strong>Create</strong> projects and associate them with videos
        </h3>

        <picture className="bishop-iteration-three-media">
          <source media="(max-width: 640px)" srcSet={mobileImage} />
          <img
            src={desktopImage}
            alt="Bishop project creation, upload, and project management screens"
            className="bishop-iteration-three-image"
          />
        </picture>
      </div>
    </section>
  );
}
