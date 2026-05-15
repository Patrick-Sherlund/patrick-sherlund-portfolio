import { HydratedVideo } from "@/shared/components/HydratedVideo";

type AssociateDetectionsSectionProps = {
  video: string;
};

export function AssociateDetectionsSection({ video }: AssociateDetectionsSectionProps) {
  return (
    <section className="bishop-associate-detections-section">
      <div className="bishop-associate-detections-content">
        <h2 className="bishop-associate-detections-title">
          <strong>Associate</strong> detections with the SAR mission map
        </h2>

        <HydratedVideo
          className="bishop-associate-detections-video"
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    </section>
  );
}
