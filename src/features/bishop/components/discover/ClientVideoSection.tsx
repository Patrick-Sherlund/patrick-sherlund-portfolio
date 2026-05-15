import { HydratedVideo } from "@/shared/components/HydratedVideo";

type ClientVideoSectionProps = {
  video: string;
};

export function ClientVideoSection({ video }: ClientVideoSectionProps) {
  return (
    <section className="bishop-client-video-section">
      <div className="bishop-client-video-content">
        <h2 className="bishop-client-video-title">
          <strong>Visualize</strong> human tracks on the client video
        </h2>

        <div className="bishop-client-video-frame">
          <HydratedVideo
            className="bishop-client-video"
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
}
