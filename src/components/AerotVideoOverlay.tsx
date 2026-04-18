export function AerotVideoOverlay() {
  return (
    <div className="video-container">
      <video
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/videos/aerot.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
