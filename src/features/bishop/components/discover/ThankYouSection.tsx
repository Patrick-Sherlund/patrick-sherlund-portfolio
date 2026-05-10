import Link from "next/link";
import { deviceAssets } from "@/shared/media/asset-paths";

export function ThankYouSection() {
  return (
    <section className="bishop-thank-you-section">
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
          <Link href="/projects/crusader" className="bishop-next-case-study-media" aria-label="View CRUSADER case study">
            <div className="bishop-next-display-screen">
              <video src="/assets/videos/crusader.mp4" autoPlay loop muted playsInline />
            </div>
            <img
              src={deviceAssets.devices.appleDisplay}
              alt="CRUSADER radar control preview"
              className="bishop-next-display-frame"
            />
          </Link>
          <div className="bishop-next-case-study-text">
            <span>Next case study</span>
            <h3>
              <small>05</small> CRUSADER
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
                <dd>TypeScript, React, C++, Drogon</dd>
              </div>
            </dl>
            <p>
              Radar control and predictive tracking for Navico and Furuno hardware.
            </p>
            <Link href="/projects/crusader" className="bishop-next-case-study-link">
              <span>View details</span>
              <span className="bishop-next-case-study-arrow" aria-hidden="true">&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
