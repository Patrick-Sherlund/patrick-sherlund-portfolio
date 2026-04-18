import { useEffect, useRef, useState } from 'react';
import './BishopMyRole.css';

function BishopMyRole() {
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
    <section className="bishop-my-role" ref={sectionRef}>
      <div className="bishop-my-role-container">
        <h2 className={`bishop-my-role-title ${isVisible ? 'bubble-in' : ''}`}>
          My role
        </h2>

        <p className={`bishop-my-role-content ${isVisible ? 'bubble-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          Engineered Bishop's search and rescue video intelligence pipeline to automate frame-by-frame review into prioritized human detections, cutting time-to-first-lead from hours to seconds.
        </p>
      </div>
    </section>
  );
}

export default BishopMyRole;
