import type { CSSProperties } from "react";
import { HydratedVideo } from "./HydratedVideo";

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
      <HydratedVideo
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={videoClassName}
        style={videoStyle}
      />
    </div>
  );
}
