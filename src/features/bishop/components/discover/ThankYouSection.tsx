import Link from "next/link";
import { useRef } from "react";
import { DeviceFrame } from "@/shared/components/DeviceFrame";
import { VideoOverlay } from "@/shared/components/VideoOverlay";
import { useMobilePinnedSection } from "../../hooks/useMobilePinnedSection";

type ThankYouSectionProps = {
  isInteractive: boolean;
};

export function ThankYouSection({ isInteractive }: ThankYouSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobilePinned = useMobilePinnedSection(sectionRef, isInteractive);

  return (
    <section className={`bishop-thank-you-section ${isMobilePinned ? "bishop-mobile-pinned-section" : ""}`} ref={sectionRef}>
      <div className="bishop-thank-you-content">
        <div className="bishop-thank-you-copy">
          <h2>Thank you</h2>
          <p>
            To the SAR operators who trusted us with their feedback, field-tested early
            prototypes in difficult conditions, and never stopped pushing us to build
            something that saves lives!!
          </p>
          <p>
            To my Co-Founder and Lead Designer Shelby Reilly who slayed until the very end! :)
          </p>
          <p>
            And to the teams who keep moving when the clock doesn&apos;t stop.
          </p>
        </div>

        <div className="bishop-next-case-study">
          <Link href="/projects/aerot" className="bishop-next-case-study-media bishop-next-case-study-media-laptop" aria-label="View AEROT case study">
            <DeviceFrame device="laptop" title="AEROT">
              <VideoOverlay src="/assets/videos/aerot.mp4" className="video-container" />
            </DeviceFrame>
          </Link>
          <div className="bishop-next-case-study-text">
            <span>Next case study</span>
            <h3>
              <small>01</small> AEROT
            </h3>
            <dl className="bishop-next-case-study-meta">
              <div>
                <dt>Role</dt>
                <dd>Senior Software Engineer</dd>
              </div>
              <div>
                <dt>Timeline</dt>
                <dd>2024 - 2026</dd>
              </div>
              <div>
                <dt>Stack</dt>
                <dd>Full-stack, C++, Typescript, React</dd>
              </div>
            </dl>
            <p>
              Friendly force EM training for the United States Marine Corps.
            </p>
            <Link href="/projects/aerot" className="bishop-next-case-study-link">
              <span>View details</span>
              <span className="bishop-next-case-study-arrow" aria-hidden="true">&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
