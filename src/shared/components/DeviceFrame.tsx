import type { ReactNode } from "react";
import { deviceAssets } from "@/shared/media/asset-paths";
import type { ProjectDevice } from "@/features/home/data/projects";

type DeviceFrameProps = {
  device: ProjectDevice;
  title: string;
  children: ReactNode;
};

const deviceFrames: Record<ProjectDevice, string> = {
  laptop: deviceAssets.devices.laptop,
  ipad: deviceAssets.devices.ipad,
  iphone: deviceAssets.devices.iphone,
  mmc: deviceAssets.devices.mmc,
  "apple-display": deviceAssets.devices.appleDisplay,
};

const deviceDimensions: Record<ProjectDevice, { width: number; height: number }> = {
  laptop: { width: 1071, height: 964 },
  ipad: { width: 1140, height: 906 },
  iphone: { width: 376, height: 737 },
  mmc: { width: 957, height: 715 },
  "apple-display": { width: 1024, height: 773 },
};

export function DeviceFrame({ device, title, children }: DeviceFrameProps) {
  const deviceFrame = deviceFrames[device];

  if (device === "laptop") {
    return (
      <div className="project-laptop-container">
        <div className="laptop-screen">{children}</div>
        <img src={deviceFrame} {...deviceDimensions[device]} alt="Laptop frame" className="laptop-frame" />
      </div>
    );
  }

  return (
    <div className={`device-container device-${device}`}>
      <div className={`device-screen device-screen-${device}`}>{children}</div>
      <img
        src={deviceFrame}
        {...deviceDimensions[device]}
        alt={`${title} frame`}
        className={`device-frame device-frame-${device}`}
      />
    </div>
  );
}
