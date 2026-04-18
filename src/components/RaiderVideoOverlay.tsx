export function RaiderVideoOverlay() {
  return (
    <div style={{
      marginTop: '-1%',
      marginLeft: '-1%',
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
          width: '74%',
          height: '72%',
          objectFit: 'cover',
          borderRadius: '2px'
        }}
      >
        <source src="/assets/videos/raider.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
