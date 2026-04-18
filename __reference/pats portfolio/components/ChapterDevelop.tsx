import { forwardRef, useState } from 'react';
import { ArtifactCard } from './ArtifactCard';
import { ChevronLeft, ChevronRight, ArrowRight, Zap, Code, Cpu, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ChapterDevelop = forwardRef<HTMLDivElement>((props, ref) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const decisions = [
    {
      theme: 'Performance',
      rationale: 'Tons of data, must be fast',
      decision: '[FILL] Client-side processing with Web Workers; optimized frame sampling; caching layer for repeat reviews'
    },
    {
      theme: 'Visual-first',
      rationale: 'Video + map integration',
      decision: '[FILL] Split-pane layout with synchronized playback; map markers linked to timeline position'
    },
    {
      theme: 'Clear indicators',
      rationale: 'Quick comprehension + action',
      decision: '[FILL] Color-coded timeline; confidence badges; visual hierarchy prioritizing high-confidence hits'
    },
    {
      theme: 'User-centered',
      rationale: 'Rapid prototyping → field testing → updates',
      decision: '[FILL] Weekly operator feedback sessions; 2-week sprint cycles; prioritized backlog based on field pain points'
    },
    {
      theme: 'Customizable',
      rationale: 'Adjust confidence threshold',
      decision: '[FILL] Slider control for confidence filtering; saved operator preferences; mission-specific profiles'
    }
  ];

  const iterations = [
    {
      title: 'Iteration 1 — Core detection',
      caption: 'Week 2 • Basic video + AI detections',
      tag: 'Design' as const,
      demonstrates: '[FILL] Established fundamental video player controls and detection list UI pattern'
    },
    {
      title: 'Iteration 2 — Timeline view',
      caption: 'Week 5 • Added visual timeline',
      tag: 'Design' as const,
      demonstrates: '[FILL] Color-coded timeline dramatically reduced time-to-find for operators in testing'
    },
    {
      title: 'Iteration 3 — Map integration',
      caption: 'Week 9 • Spatial context',
      tag: 'Design' as const,
      demonstrates: '[FILL] Combined video + map view enabled 40% faster location identification vs video alone'
    },
    {
      title: 'Iteration 4 — Field refinements',
      caption: 'Week 14 • Operator feedback',
      tag: 'Implementation' as const,
      demonstrates: '[FILL] Added customizable confidence threshold and tag system based on field deployment learnings'
    },
    {
      title: 'Iteration 5 — Export & handoff',
      caption: 'Week 18 • Mission reporting',
      tag: 'Implementation' as const,
      demonstrates: '[FILL] Export functionality enabled seamless shift handoffs and official SAR documentation'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % iterations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + iterations.length) % iterations.length);
  };

  return (
    <div ref={ref} className="scroll-mt-32">
      <div className="sticky top-[61px] z-30 bg-[#e7f4ff] py-6 mb-12 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-2 lg:px-2 border-b border-[rgba(17,17,17,0.08)] backdrop-blur-sm">
        <h2>03 — Develop</h2>
        <p className="text-[#4b5563] mt-2">Iterate & build</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Narrative column */}
        <div className="space-y-8">
          <div className="p-8 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px]">
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="flex items-center justify-center gap-3">
                <div className="w-20 h-20 rounded-full border-[3px] border-[#111111] flex items-center justify-center bg-white shrink-0">
                  <span className="text-sm">Build</span>
                </div>
                <div className="text-xl text-[#111111]">→</div>
                <div className="w-20 h-20 rounded-full border-[3px] border-[#111111] flex items-center justify-center bg-white shrink-0">
                  <span className="text-sm">Measure</span>
                </div>
                <div className="text-xl text-[#111111]">→</div>
                <div className="w-20 h-20 rounded-full border-[3px] border-[#111111] flex items-center justify-center bg-white shrink-0">
                  <span className="text-sm">Learn</span>
                </div>
              </div>
              <p className="text-sm uppercase tracking-[0.15em] text-[#4b5563]">Continuous Iteration Loop</p>
            </div>
          </div>

          <div>
            <h3 className="mb-6">Decision log</h3>
            <div className="space-y-3">
              {decisions.map((decision, index) => (
                <div
                  key={index}
                  className="relative pl-12 pr-4 py-4 bg-white/60 border-l-4 border-[#111111] rounded-r-[20px] shadow-soft"
                >
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#111111] text-white flex items-center justify-center shrink-0">
                    <span className="text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <div className="mb-1.5">
                      <strong className="text-[#111111]">{decision.theme}</strong> <span className="text-[#4b5563]">—</span> <span className="text-[#4b5563]">{decision.rationale}</span>
                    </div>
                    <p className="text-sm text-[#4b5563]">{decision.decision}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Artifacts column */}
        <div className="space-y-6">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <ArtifactCard
                  title={iterations[currentSlide].title}
                  caption={iterations[currentSlide].caption}
                  tag={iterations[currentSlide].tag}
                  demonstrates={iterations[currentSlide].demonstrates}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-[rgba(17,17,17,0.15)] bg-white/60 flex items-center justify-center hover:bg-white hover:border-[#111111] transition-all"
              aria-label="Previous iteration"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {iterations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'w-8 bg-[#111111]' 
                      : 'w-2 bg-[rgba(17,17,17,0.2)] hover:bg-[rgba(17,17,17,0.4)]'
                  }`}
                  aria-label={`Go to iteration ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-[rgba(17,17,17,0.15)] bg-white/60 flex items-center justify-center hover:bg-white hover:border-[#111111] transition-all"
              aria-label="Next iteration"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px] text-xs text-[#4b5563] italic">
            • Carousel interaction: arrow navigation through {iterations.length} iteration snapshots
          </div>

          {/* System Architecture */}
          <div className="p-6 bg-white/80 border border-[rgba(17,17,17,0.2)] rounded-[20px]">
            <h3 className="mb-6 text-sm uppercase tracking-wider text-[#4b5563]">
              System architecture
            </h3>
            
            <div className="space-y-3">
              {/* Video Input */}
              <div className="flex items-center justify-center">
                <div className="group relative px-4 py-2 bg-[#111111] text-white rounded-lg text-xs">
                  <div className="flex items-center gap-2">
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Video Input</span>
                  </div>
                </div>
              </div>

              {/* Split arrow */}
              <div className="flex items-center justify-center gap-16">
                <div className="text-[#4b5563]">↙</div>
                <div className="text-[#4b5563]">↘</div>
              </div>

              {/* Parallel processing */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-center">
                  <div className="group relative px-4 py-2 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-lg hover:border-[rgba(17,17,17,0.3)] transition-colors text-xs">
                    <div className="flex items-center gap-2 text-[#111111]">
                      <Monitor className="w-3.5 h-3.5" />
                      <span>Metadata Service</span>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 bg-[#111111] text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                      Frames & metadata
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="group relative px-4 py-2 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-lg hover:border-[rgba(17,17,17,0.3)] transition-colors text-xs">
                    <div className="flex items-center gap-2 text-[#111111]">
                      <Zap className="w-3.5 h-3.5" />
                      <span>ML Pipeline</span>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 bg-[#111111] text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                      YOLOv8 detections
                    </div>
                  </div>
                </div>
              </div>

              {/* Merge arrow */}
              <div className="flex items-center justify-center gap-16">
                <div className="text-[#4b5563]">↘</div>
                <div className="text-[#4b5563]">↙</div>
              </div>

              {/* Tracking Engine */}
              <div className="flex justify-center">
                <div className="group relative px-4 py-2 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-lg hover:border-[rgba(17,17,17,0.3)] transition-colors text-xs">
                  <div className="flex items-center gap-2 text-[#111111]">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Detection Service</span>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 bg-[#111111] text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    Correlation & tracking
                  </div>
                </div>
              </div>

              <div className="flex justify-center text-[#4b5563]">↓</div>

              {/* REST API */}
              <div className="flex justify-center">
                <div className="group relative px-4 py-2 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-lg hover:border-[rgba(17,17,17,0.3)] transition-colors text-xs">
                  <div className="flex items-center gap-2 text-[#111111]">
                    <Code className="w-3.5 h-3.5" />
                    <span>REST API</span>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 bg-[#111111] text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    Aggregates results
                  </div>
                </div>
              </div>

              <div className="flex justify-center text-[#4b5563]">↓</div>

              {/* UI Layer */}
              <div className="flex justify-center">
                <div className="group relative px-4 py-2 bg-[#111111] text-white rounded-lg text-xs">
                  <div className="flex items-center gap-2">
                    <Code className="w-3.5 h-3.5" />
                    <span>UI Layer</span>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 bg-[#111111] text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    React + WebSocket
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ChapterDevelop.displayName = 'ChapterDevelop';