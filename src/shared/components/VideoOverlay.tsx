import type { CSSProperties } from "react";

type VideoOverlayProps = {
  src: string;
  className?: string;
  wrapperStyle?: CSSProperties;
  videoClassName?: string;
  videoStyle?: CSSProperties;
};

export function VideoOverlay({
  src,
  className,
  wrapperStyle,
  videoClassName,
  videoStyle,
}: VideoOverlayProps) {
  return (
    <div className={className} style={wrapperStyle}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={videoClassName}
        style={videoStyle}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
