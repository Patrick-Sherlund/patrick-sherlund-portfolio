import { useEffect, useRef, useState } from 'react';
import './BishopMyRoleStack.css';
import svgPaths from "../imports/svg-pagdlx3wn8";

function BishopMyRoleStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [myRoleStackProgress, setMyRoleStackProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollBuffer = 400; // 400px buffer before starting transition
      
      // My Role → The Stack crossfade (starts after 400px buffer)
      if (rect.top <= 0 && rect.top > -viewportHeight) {
        const scrollDistance = Math.abs(rect.top);
        
        // Subtract the buffer from scroll distance, then normalize to 0-1
        const adjustedScrollDistance = Math.max(0, scrollDistance - scrollBuffer);
        const fadeDistance = viewportHeight - scrollBuffer;
        const newProgress = Math.min(Math.max(adjustedScrollDistance / fadeDistance, 0), 1);
        setMyRoleStackProgress(newProgress);
      } else if (rect.top > 0) {
        // Before the section
        setMyRoleStackProgress(0);
      } else if (rect.top <= -viewportHeight) {
        // After crossfade complete
        setMyRoleStackProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bishop-my-role-stack-wrapper" ref={containerRef}>
      <div className="bishop-my-role-stack-content">
        {/* My Role Panel */}
        <div 
          className="bishop-my-role-panel"
          style={{ opacity: 1 - myRoleStackProgress }}
        >
          <h2 className="bishop-mrs-title">My role</h2>
          <p className="bishop-mrs-text">
            Engineered Bishop's search and rescue video intelligence pipeline to automate frame-by-frame review into prioritized human detections, cutting time-to-first-lead from hours to seconds.
          </p>
        </div>

        {/* The Stack Panel */}
        <div 
          className="bishop-stack-panel"
          style={{ opacity: myRoleStackProgress }}
        >
          <h2 className="bishop-mrs-title">The Stack</h2>
          
          <div className="bishop-stack-grid">
            {/* Left Column */}
            <div className="bishop-stack-column">
              {/* Frontend */}
              <div className="bishop-stack-item">
                <div className="bishop-stack-category">FRONTEND</div>
                <div className="bishop-stack-tech">
                  <div className="bishop-stack-icons">
                    {/* React Icon */}
                    <svg className="bishop-stack-icon" viewBox="0 0 50 50" fill="none">
                      <path clipRule="evenodd" d={svgPaths.p1f6d580} fill="black" fillOpacity="0.302" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p2c2ede00} fill="black" fillOpacity="0.989" fillRule="evenodd" />
                    </svg>
                    {/* Vite Icon */}
                    <svg className="bishop-stack-icon" viewBox="0 0 50 50" fill="none">
                      <path d={svgPaths.p286ccf00} stroke="black" strokeWidth="1.5" />
                      <path clipRule="evenodd" d={svgPaths.p3a97830} fill="black" fillRule="evenodd" stroke="black" />
                    </svg>
                  </div>
                  <span className="bishop-stack-name">React, vite (Typescript, Javascript)</span>
                </div>
              </div>

              {/* Backend */}
              <div className="bishop-stack-item">
                <div className="bishop-stack-category">BACKEND</div>
                <div className="bishop-stack-tech">
                  <div className="bishop-stack-icons">
                    {/* C++ Icon */}
                    <svg className="bishop-stack-icon" viewBox="0 0 50 50" fill="none">
                      <path clipRule="evenodd" d={svgPaths.p2e380100} fill="black" fillRule="evenodd" />
                    </svg>
                  </div>
                  <span className="bishop-stack-name">Drogon (C++)</span>
                </div>
              </div>

              {/* ML */}
              <div className="bishop-stack-item">
                <div className="bishop-stack-category">ML</div>
                <div className="bishop-stack-tech">
                  <div className="bishop-stack-icons">
                    {/* ONNX Icon */}
                    <svg className="bishop-stack-icon" viewBox="0 0 51 50" fill="none">
                      <path clipRule="evenodd" d={svgPaths.p394e3670} fill="black" fillOpacity="0.188" fillRule="evenodd" />
                      <path clipRule="evenodd" d={svgPaths.p833e770} fill="black" fillOpacity="0.739" fillRule="evenodd" />
                    </svg>
                  </div>
                  <span className="bishop-stack-name">ONNX Runtime (C++, Python)</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bishop-stack-column">
              {/* Data */}
              <div className="bishop-stack-item">
                <div className="bishop-stack-category">DATA</div>
                <div className="bishop-stack-tech">
                  <div className="bishop-stack-icons">
                    {/* PostgreSQL Icon */}
                    <svg className="bishop-stack-icon" viewBox="0 0 50 50" fill="none">
                      <path clipRule="evenodd" d={svgPaths.pc4d6f80} fill="black" fillOpacity="0.989" fillRule="evenodd" />
                    </svg>
                  </div>
                  <span className="bishop-stack-name">PostgreSQL</span>
                </div>
              </div>

              {/* Workflow */}
              <div className="bishop-stack-item">
                <div className="bishop-stack-category">WORKFLOW</div>
                <div className="bishop-stack-tech">
                  <div className="bishop-stack-icons">
                    {/* Git Icon */}
                    <svg className="bishop-stack-icon" viewBox="0 0 50 50" fill="none">
                      <path clipRule="evenodd" d={svgPaths.pa167800} fill="black" fillRule="evenodd" />
                    </svg>
                  </div>
                  <span className="bishop-stack-name">GitHub (Agile)</span>
                </div>
              </div>

              {/* Infra */}
              <div className="bishop-stack-item">
                <div className="bishop-stack-category">INFRA</div>
                <div className="bishop-stack-tech">
                  <div className="bishop-stack-icons">
                    {/* AWS Icon */}
                    <svg className="bishop-stack-icon" viewBox="0 0 50 50" fill="none">
                      <path clipRule="evenodd" d={svgPaths.p37ede1f0} fill="black" fillRule="evenodd" />
                    </svg>
                    {/* Docker Icon */}
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

export default BishopMyRoleStack;