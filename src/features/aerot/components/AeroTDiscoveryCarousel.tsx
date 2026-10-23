"use client";

import { aerotContent } from "../data/aerot-content";

export function AeroTDiscoveryCarousel({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="aerot-discovery-carousel" data-visible={isVisible}>
      <div
        className="aerot-discovery-carousel-viewport"
        id="aerot-discovery-photos"
        role="group"
        aria-label="AeroT discovery field photos"
        tabIndex={0}
      >
        <div className="aerot-discovery-carousel-track">
          {[false, true].map((isDuplicate) => (
            <div className="aerot-discovery-carousel-group" aria-hidden={isDuplicate || undefined} key={String(isDuplicate)}>
              {aerotContent.context.photos.map((photo, index) => (
                <figure
                  className="aerot-discovery-photo"
                  style={{ aspectRatio: `${photo.width} / ${photo.height}`, animationDelay: `${index * 80}ms` }}
                  key={photo.src}
                >
                  <img
                    src={photo.src}
                    alt={isDuplicate ? "" : photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading={isVisible ? "eager" : "lazy"}
                    decoding="async"
                  />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
