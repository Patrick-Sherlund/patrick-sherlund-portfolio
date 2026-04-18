export function BishopVideoOverlay() {
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
          width: 'auto',
          height: '75%',
          marginTop: '-6%',
          marginLeft: '-7%',
          objectFit: 'cover',
          borderRadius: '4px'
        }}
      >
        <source src="/assets/videos/bishop_demo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
