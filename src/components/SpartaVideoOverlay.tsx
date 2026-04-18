export function SpartaVideoOverlay() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '92%',
          height: '92%',
          objectFit: 'cover',
          borderRadius: '8px'
        }}
      >
        <source src="/assets/videos/sparta.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
