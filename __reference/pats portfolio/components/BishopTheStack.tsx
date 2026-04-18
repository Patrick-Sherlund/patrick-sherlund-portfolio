import svgPaths from "../imports/svg-pagdlx3wn8";
import './BishopTheStack.css';
import BubbleIn from './BubbleIn';

function BishopTheStack() {
  return (
    <section id="the-stack" className="bishop-stack-section">
      <div className="bishop-stack-container">
        <BubbleIn>
          <h2 className="bishop-stack-title">The Stack</h2>
        </BubbleIn>
        
        <div className="bishop-stack-grid">
          {/* Left Column */}
          <div className="bishop-stack-column">
            {/* Frontend */}
            <BubbleIn>
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
            </BubbleIn>

            {/* Backend */}
            <BubbleIn>
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
            </BubbleIn>

            {/* ML */}
            <BubbleIn>
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
            </BubbleIn>
          </div>

          {/* Right Column */}
          <div className="bishop-stack-column">
            {/* Data */}
            <BubbleIn>
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
            </BubbleIn>

            {/* Workflow */}
            <BubbleIn>
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
            </BubbleIn>

            {/* Infra */}
            <BubbleIn>
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
            </BubbleIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BishopTheStack;