import { HydratedVideo } from "@/shared/components/HydratedVideo";

type AiDetectionsSectionProps = {
  video: string;
};

export function AiDetectionsSection({ video }: AiDetectionsSectionProps) {
  return (
    <section className="bishop-ai-detections-section">
      <div className="bishop-ai-detections-content">
        <h2 className="bishop-ai-detections-title">
          <strong>View</strong> AI detections in the video, synced to the timeline
        </h2>

        <HydratedVideo
          className="bishop-ai-detections-video"
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
