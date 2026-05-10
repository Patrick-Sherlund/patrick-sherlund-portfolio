type ManageVideosSectionProps = {
  desktopImage: string;
  mobileImage: string;
};

export function ManageVideosSection({
  desktopImage,
  mobileImage,
}: ManageVideosSectionProps) {
  return (
    <section className="bishop-manage-videos-section">
      <div className="bishop-manage-videos-content">
        <h2 className="bishop-manage-videos-title">
          <strong>Manage</strong> client video library
        </h2>

        <picture className="bishop-manage-videos-media">
          <source media="(max-width: 640px)" srcSet={mobileImage} />
          <img
            src={desktopImage}
            alt="Bishop video library management and delete confirmation screens"
            className="bishop-manage-videos-image"
          />
        </picture>
      </div>
    </section>
  );
}
