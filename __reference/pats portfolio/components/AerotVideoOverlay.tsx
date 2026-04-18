export function AerotVideoOverlay() {
  return (
    <div className="video-container">
      <video
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://github.com/Patrick-Sherlund/patrick-sherlund-portfolio/raw/refs/heads/master/public/assets/videos/aerot.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
