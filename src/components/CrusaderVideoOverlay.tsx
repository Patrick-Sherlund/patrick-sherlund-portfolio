export function CrusaderVideoOverlay() {
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
          width: '95%',
          height: '100%',
          objectFit: 'fill',
          borderRadius: '3px'
        }}
      >
        <source src="/assets/videos/crusader.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
