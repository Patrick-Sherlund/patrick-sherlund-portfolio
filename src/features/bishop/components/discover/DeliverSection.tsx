import type { RefObject } from "react";
import { VideoOverlay } from "@/shared/components/VideoOverlay";
import { deviceAssets } from "@/shared/media/asset-paths";

type DeliverSectionProps = {
  sectionRef?: RefObject<HTMLDivElement | null>;
  sparkleLeft: string;
  sparkleRight: string;
  videoSrc: string;
};

export function DeliverSection({
  sectionRef,
  sparkleLeft,
  sparkleRight,
  videoSrc,
}: DeliverSectionProps) {
  return (
    <div ref={sectionRef} className="bishop-deliver-section">
      <div className="bishop-deliver-inner">
        <div className="bishop-deliver-main">
          <h3 className="bishop-deliver-headline">
            <img src={sparkleLeft} alt="" className="bishop-deliver-sparkle" />
            <span>
              The <strong>Minimal</strong>, but <strong>viable</strong> product
            </span>
            <img src={sparkleRight} alt="" className="bishop-deliver-sparkle" />
          </h3>

          <div className="bishop-deliver-ipad-container">
            <div className="bishop-deliver-ipad-screen">
              <VideoOverlay
                src={videoSrc}
                className="bishop-deliver-video-overlay"
                videoClassName="bishop-deliver-video"
              />
            </div>
            <img
              src={deviceAssets.devices.ipad}
              alt="Bishop MVP on iPad"
              className="bishop-deliver-ipad-frame"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
