'use client';

import { useEffect, useRef, useState } from 'react';
import svgPaths from "@/lib/svg-pagdlx3wn8";
import { useMobilePinnedSection } from '../hooks/useMobilePinnedSection';

type BishopRoleStackProps = {
  isInteractive: boolean;
};

export function BishopRoleStack({ isInteractive }: BishopRoleStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [myRoleStackProgress, setMyRoleStackProgress] = useState(0);
  const isMobilePinned = useMobilePinnedSection(containerRef, isInteractive);

  useEffect(() => {
    if (!isInteractive) {
      setMyRoleStackProgress(0);
      return;
    }

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const entryHold = Math.min(450, viewportHeight * 0.45);
      const transitionDistance = viewportHeight;
      
      if (rect.top <= 0 && rect.top > -(entryHold + transitionDistance)) {
        const scrollDistance = Math.abs(rect.top);
        const adjustedScrollDistance = Math.max(0, scrollDistance - entryHold);
        const newProgress = Math.min(Math.max(adjustedScrollDistance / transitionDistance, 0), 1);
        setMyRoleStackProgress(newProgress);
      } else if (rect.top > 0) {
        setMyRoleStackProgress(0);
      } else if (rect.top <= -(entryHold + transitionDistance)) {
        setMyRoleStackProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInteractive]);

  return (
    <div className={`bishop-my-role-stack-wrapper ${isMobilePinned ? "bishop-mobile-pinned-section" : ""}`} ref={containerRef}>
      {isInteractive && (
        <>
          <div data-case-study-nav-target data-case-study-nav-marker style={{ position: "absolute", top: 0, left: 0, width: 1, height: 1, pointerEvents: "none" }} />
          <div data-case-study-nav-target data-case-study-nav-marker style={{ position: "absolute", top: "calc(min(450px, 45vh) + 100vh)", left: 0, width: 1, height: 1, pointerEvents: "none" }} />
        </>
      )}
      <div className="bishop-my-role-stack-content">
        <div 
          className="bishop-my-role-panel"
          {...(!isInteractive ? { "data-case-study-nav-target": "true", "data-case-study-nav-align": "center" } : {})}
          style={isInteractive ? { opacity: 1 - myRoleStackProgress } : undefined}
        >
          <h2 className="bishop-mrs-title">My role</h2>
          <p className="bishop-mrs-text">
            Engineered Bishop's search and rescue video intelligence pipeline to automate frame-by-frame review into prioritized human detections, cutting time-to-first-lead from hours to seconds.
          </p>
        </div>

        <div 
          className="bishop-stack-panel"
          {...(!isInteractive ? { "data-case-study-nav-target": "true", "data-case-study-nav-align": "center" } : {})}
          style={isInteractive ? { opacity: myRoleStackProgress } : undefined}
        >
          <h2 className="bishop-mrs-title">The Stack</h2>
          
          <div className="bishop-stack-grid">
            <div className="bishop-stack-column">
              <div className="bishop-stack-item">
                <div className="bishop-stack-category">FRONTEND</div>
                <div className="bishop-stack-tech">
                  <div className="bishop-stack-icons">
                    <svg className="bishop-stack-icon" viewBox="0 0 50 50" fill="none">
                      <path clipRule="evenodd" d={svgPaths.p1f6d580} fill="black" fillOpacity="0.302" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p2c2ede00} fill="black" fillOpacity="0.989" fillRule="evenodd" />
                    </svg>
                    <svg className="bishop-stack-icon" viewBox="0 0 50 50" fill="none">
                      <path d={svgPaths.p286ccf00} stroke="black" strokeWidth="1.5" />
                      <path clipRule="evenodd" d={svgPaths.p3a97830} fill="black" fillRule="evenodd" stroke="black" />
                    </svg>
                  </div>
                  <span className="bishop-stack-name">React, vite (Typescript, Javascript)</span>
                </div>
              </div>

              <div className="bishop-stack-item">
                <div className="bishop-stack-category">BACKEND</div>
                <div className="bishop-stack-tech">
                  <div className="bishop-stack-icons">
                    <svg className="bishop-stack-icon" viewBox="0 0 50 50" fill="none">
                      <path clipRule="evenodd" d={svgPaths.p2e380100} fill="black" fillRule="evenodd" />
                    </svg>
                  </div>
                  <span className="bishop-stack-name">Drogon (C++)</span>
                </div>
              </div>

              <div className="bishop-stack-item">
                <div className="bishop-stack-category">ML</div>
                <div className="bishop-stack-tech">
                  <div className="bishop-stack-icons">
                    <svg className="bishop-stack-icon" viewBox="0 0 51 50" fill="none">
                      <path clipRule="evenodd" d={svgPaths.p394e3670} fill="black" fillOpacity="0.188" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p833e770} fill="black" fillOpacity="0.739" fillRule="evenodd" />
                    </svg>
                  </div>
                  <span className="bishop-stack-name">ONNX Runtime (C++, Python)</span>
                </div>
              </div>
            </div>

            <div className="bishop-stack-column">
              <div className="bishop-stack-item">
                <div className="bishop-stack-category">DATA</div>
                <div className="bishop-stack-tech">
                  <div className="bishop-stack-icons">
                    <svg className="bishop-stack-icon" viewBox="0 0 50 50" fill="none">
                      <path clipRule="evenodd" d={svgPaths.pc4d6f80} fill="black" fillOpacity="0.989" fillRule="evenodd" />
                    </svg>
                  </div>
                  <span className="bishop-stack-name">PostgreSQL</span>
                </div>
              </div>

              <div className="bishop-stack-item">
                <div className="bishop-stack-category">WORKFLOW</div>
                <div className="bishop-stack-tech">
                  <div className="bishop-stack-icons">
                    <svg className="bishop-stack-icon" viewBox="0 0 50 50" fill="none">
                      <path clipRule="evenodd" d={svgPaths.pa167800} fill="black" fillRule="evenodd" />
                    </svg>
                  </div>
                  <span className="bishop-stack-name">GitHub (Agile)</span>
                </div>
              </div>

              <div className="bishop-stack-item">
                <div className="bishop-stack-category">INFRA</div>
                <div className="bishop-stack-tech">
                  <div className="bishop-stack-icons">
                    <svg className="bishop-stack-icon" viewBox="0 0 50 50" fill="none">
                      <path clipRule="evenodd" d={svgPaths.p37ede1f0} fill="black" fillRule="evenodd" />
                    </svg>
                    <svg className="bishop-stack-icon" viewBox="0 0 50 50" fill="none">
                      <path clipRule="evenodd" d={svgPaths.p3bce4a00} fill="black" fillOpacity="0.639" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.pf303780} fill="black" fillOpacity="0.978" fillRule="evenodd" />
                    </svg>
                  </div>
                  <span className="bishop-stack-name">AWS, Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
