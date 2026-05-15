"use client";

import { forwardRef, useEffect, useState, type VideoHTMLAttributes } from "react";

type HydratedVideoProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src"> & {
  src?: string;
};

export const HydratedVideo = forwardRef<HTMLVideoElement, HydratedVideoProps>(
  function HydratedVideo({ src, ...props }, ref) {
    const [mountedSrc, setMountedSrc] = useState<string>();

    useEffect(() => {
      setMountedSrc(src);
    }, [src]);

    return <video ref={ref} {...props} src={mountedSrc} />;
  }
);
