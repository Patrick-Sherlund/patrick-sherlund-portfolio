'use client';

import { useEffect, useRef, useState } from 'react';

export function BishopUsersSaw() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="bishop-users-saw" ref={sectionRef}>
      <div className="bishop-users-saw-container">
        <h2 className={`bishop-users-saw-title ${isVisible ? 'bubble-in' : ''}`}>
          Our users saw...
        </h2>

        <div className="bishop-users-saw-stats">
          <div className={`bishop-stat-card ${isVisible ? 'bubble-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="bishop-stat-card-inner">
              <div className="bishop-stat-value">30% ↓</div>
              <div className="bishop-stat-label">Time-to-first-find reduction</div>
            </div>
          </div>

          <div className={`bishop-stat-card ${isVisible ? 'bubble-in' : ''}`} style={{ animationDelay: '0.4s' }}>
            <div className="bishop-stat-card-inner">
              <div className="bishop-stat-value">3,400×</div>
              <div className="bishop-stat-label">Faster video review</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
