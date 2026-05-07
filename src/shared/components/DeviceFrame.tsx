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

export function DeviceFrame({ device, title, children }: DeviceFrameProps) {
  const deviceFrame = deviceFrames[device];

  if (device === "laptop") {
    return (
      <div className="project-laptop-container">
        <div className="laptop-screen">{children}</div>
        <img src={deviceFrame} alt="Laptop frame" className="laptop-frame" />
      </div>
    );
  }

  return (
    <div className={`device-container device-${device}`}>
      <div className={`device-screen device-screen-${device}`}>{children}</div>
      <img
        src={deviceFrame}
        alt={`${title} frame`}
        className={`device-frame device-frame-${device}`}
      />
    </div>
  );
}
