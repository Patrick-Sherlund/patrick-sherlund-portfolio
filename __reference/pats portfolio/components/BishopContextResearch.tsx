import { useEffect, useRef, useState } from 'react';
import './BishopContextResearch.css';
import imgDesignIteration1 from "figma:asset/a61f18f13497607b3359ea51dc1ac29e9722f8b6.png";
import imgScreenshot20251201At34750Pm1 from "figma:asset/c7a7d2926739cad6e9ebd9e5018ab99b3405829d.png";
import imgImage7662 from "figma:asset/c9f8840ef979277ff69331440016471a1b456782.png";
import imgScreenshot20241209At122529Pm1 from "figma:asset/abea3eb9330fa5fc4d113663717b0266556c6ac6.png";

const carouselImages = [
  {
    src: imgDesignIteration1,
    className: 'carousel-img-1'
  },
  {
    src: imgScreenshot20251201At34750Pm1,
    className: 'carousel-img-2'
  },
  {
    src: imgImage7662,
    className: 'carousel-img-3'
  },
  {
    src: imgScreenshot20241209At122529Pm1,
    className: 'carousel-img-4'
  },
];

function BishopContextResearch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contextResearchProgress, setContextResearchProgress] = useState(0);
  const [carouselVisible, setCarouselVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Phase 1: Context → User Research crossfade (0 to 1 viewport of scrolling)
      if (rect.top <= 0 && rect.top > -viewportHeight) {
        const scrollDistance = Math.abs(rect.top);
        const newProgress = Math.min(Math.max(scrollDistance / viewportHeight, 0), 1);
        setContextResearchProgress(newProgress);
        
        // Show carousel when we're halfway through the transition
        if (newProgress > 0.5) {
          setCarouselVisible(true);
        } else {
          setCarouselVisible(false);
        }
      } else if (rect.top > 0) {
        // Before the section
        setContextResearchProgress(0);
        setCarouselVisible(false);
      } else if (rect.top <= -viewportHeight) {
        // After first viewport - keep everything visible
        setContextResearchProgress(1);
        setCarouselVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bishop-context-research-wrapper" ref={containerRef}>
      <div className="bishop-context-research-content">
        {/* Context Panel (Why this started text) */}
        <div 
          className="bishop-context-panel"
          style={{ opacity: 1 - contextResearchProgress }}
        >
          <h3 className="bishop-context-title-text">Why this started</h3>
          <p className="bishop-context-text">
            We started this after the{" "}
            <strong>2024 Southeast Coastal hurricanes</strong>,
            when SAR teams{" "}
            <strong>struggled to find survivors</strong> quickly
            across flooded zones.
          </p>
        </div>

        {/* User Research Panel */}
        <div 
          className="bishop-research-panel"
          style={{ opacity: contextResearchProgress }}
        >
          <h2 className="bishop-research-title">User Research</h2>
        </div>

        {/* Infinite Carousel */}
        {carouselVisible && (
          <div className="bishop-carousel-container">
            <div className="bishop-carousel-track">
              {/* Render images twice for seamless loop */}
              {[...carouselImages, ...carouselImages, ...carouselImages].map((img, index) => (
                <div
                  key={index}
                  className={`bishop-carousel-image ${img.className}`}
                >
                  <img src={img.src} alt="" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BishopContextResearch;