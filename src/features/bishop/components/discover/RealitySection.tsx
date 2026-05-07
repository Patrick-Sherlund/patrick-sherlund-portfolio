type RealitySectionProps = {
  title: string;
  text: React.ReactNode;
};

export function RealitySection({ title, text }: RealitySectionProps) {
  return (
    <div className="bishop-reality-section">
      <div className="bishop-reality-content">
        <div className="bishop-reality-header">
          <div className="bishop-reality-icon">😔</div>
          <h2 className="bishop-reality-title">{title}</h2>
        </div>
        <p className="bishop-reality-text">{text}</p>
      </div>
    </div>
  );
}
