import { forwardRef } from 'react';
import { Target, Zap, TrendingUp, Clock, Cpu, Lightbulb, CheckCircle, XCircle, Upload, Bot, Eye, Send, Award } from 'lucide-react';

export const ChapterDefine = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="scroll-mt-32">
      <div className="sticky top-[61px] z-30 bg-[#e7f4ff] py-6 mb-12 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-2 lg:px-2 border-b border-[rgba(17,17,17,0.08)] backdrop-blur-sm">
        <h2>02 — Define</h2>
        <p className="text-[#4b5563] mt-2">Frame the MVP (Tanzu-style)</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left column - Narrative flow */}
        <div className="space-y-8">
          {/* Problem Statement */}
          <div className="p-6 bg-white/60 border-l-4 border-[#111111] rounded-r-[20px]">
            <div className="flex items-start gap-3 mb-3">
              <Target className="w-5 h-5 text-[#111111] shrink-0 mt-0.5" />
              <h3>Problem statement</h3>
            </div>
            <p className="text-[#4b5563]">
              SAR drone operators need a way to automatically detect people in hours of video footage 
              because manual review is too slow to save lives within the critical 72-hour window.
            </p>
          </div>

          {/* Success Metrics */}
          <div>
            <h3 className="mb-6">Success metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px] shadow-soft">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-[#111111]" />
                  <span className="text-xs uppercase tracking-wider text-[#4b5563]">Speed</span>
                </div>
                <div className="text-2xl mb-1">3,700x</div>
                <p className="text-xs text-[#4b5563]">faster detection</p>
              </div>

              <div className="p-5 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px] shadow-soft">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-[#111111]" />
                  <span className="text-xs uppercase tracking-wider text-[#4b5563]">Accuracy</span>
                </div>
                <div className="text-2xl mb-1">90%+</div>
                <p className="text-xs text-[#4b5563]">detection rate</p>
              </div>

              <div className="p-5 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px] shadow-soft">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-[#111111]" />
                  <span className="text-xs uppercase tracking-wider text-[#4b5563]">Training</span>
                </div>
                <div className="text-2xl mb-1">&lt;30 min</div>
                <p className="text-xs text-[#4b5563]">to get started</p>
              </div>

              <div className="p-5 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px] shadow-soft">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4 text-[#111111]" />
                  <span className="text-xs uppercase tracking-wider text-[#4b5563]">Hardware</span>
                </div>
                <div className="text-2xl mb-1">Real-time</div>
                <p className="text-xs text-[#4b5563]">on standard CPU</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Scope & Artifacts */}
        <div className="space-y-6">
          {/* MVP Scope & Non-goals - Side by side compact */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-gradient-to-br from-green-50/50 to-white/60 border border-green-200/50 rounded-[20px]">
              <h3 className="mb-3 text-xs uppercase tracking-wider flex items-center gap-2 text-[#4b5563]">
                <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                MVP Scope
              </h3>
              <ul className="space-y-1.5 text-xs">
                <li className="flex items-center gap-1.5 text-[#4b5563]">
                  <CheckCircle className="w-3 h-3 text-green-600 shrink-0" />
                  Video playback
                </li>
                <li className="flex items-center gap-1.5 text-[#4b5563]">
                  <CheckCircle className="w-3 h-3 text-green-600 shrink-0" />
                  AI detection
                </li>
                <li className="flex items-center gap-1.5 text-[#4b5563]">
                  <CheckCircle className="w-3 h-3 text-green-600 shrink-0" />
                  Timeline view
                </li>
                <li className="flex items-center gap-1.5 text-[#4b5563]">
                  <CheckCircle className="w-3 h-3 text-green-600 shrink-0" />
                  Map integration
                </li>
                <li className="flex items-center gap-1.5 text-[#4b5563]">
                  <CheckCircle className="w-3 h-3 text-green-600 shrink-0" />
                  Export results
                </li>
                <li className="flex items-center gap-1.5 text-[#4b5563]">
                  <CheckCircle className="w-3 h-3 text-green-600 shrink-0" />
                  Tag detections
                </li>
              </ul>
            </div>

            <div className="p-5 bg-gradient-to-br from-red-50/50 to-white/60 border border-red-200/50 rounded-[20px]">
              <h3 className="mb-3 text-xs uppercase tracking-wider flex items-center gap-2 text-[#4b5563]">
                <XCircle className="w-3.5 h-3.5 text-red-600" />
                Non-goals
              </h3>
              <ul className="space-y-1.5 text-xs">
                <li className="flex items-center gap-1.5 text-[#4b5563]">
                  <XCircle className="w-3 h-3 text-red-600 shrink-0" />
                  [FILL] Multi-user collab
                </li>
                <li className="flex items-center gap-1.5 text-[#4b5563]">
                  <XCircle className="w-3 h-3 text-red-600 shrink-0" />
                  [FILL] Live drone feed
                </li>
                <li className="flex items-center gap-1.5 text-[#4b5563]">
                  <XCircle className="w-3 h-3 text-red-600 shrink-0" />
                  [FILL] Custom ML training
                </li>
                <li className="flex items-center gap-1.5 text-[#4b5563]">
                  <XCircle className="w-3 h-3 text-red-600 shrink-0" />
                  [FILL] Mobile app
                </li>
                <li className="flex items-center gap-1.5 text-[#4b5563]">
                  <XCircle className="w-3 h-3 text-red-600 shrink-0" />
                  [FILL] Historical analytics
                </li>
              </ul>
            </div>
          </div>

          {/* Story Map */}
          <div className="p-6 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px]">
            <h3 className="text-sm uppercase tracking-wider text-[#4b5563] mb-5">Story map</h3>

            <div className="space-y-0">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center shrink-0 relative z-10">
                    <Upload className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-0.5 h-full bg-[rgba(17,17,17,0.15)] -mt-1"></div>
                </div>
                <div className="flex-1 pb-6">
                  <div className="mb-1.5">Import video</div>
                  <ul className="text-xs text-[#4b5563] space-y-0.5">
                    <li>• [FILL] Select file from disk</li>
                    <li>• [FILL] Validate format/codec</li>
                    <li>• [FILL] Extract metadata</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 -mt-2">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center shrink-0 relative z-10">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-0.5 h-full bg-[rgba(17,17,17,0.15)] -mt-1"></div>
                </div>
                <div className="flex-1 pb-6">
                  <div className="mb-1.5">Run detection</div>
                  <ul className="text-xs text-[#4b5563] space-y-0.5">
                    <li>• [FILL] Process video frames</li>
                    <li>• [FILL] Generate confidence scores</li>
                    <li>• [FILL] Build timeline</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 -mt-2">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center shrink-0 relative z-10">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-0.5 h-full bg-[rgba(17,17,17,0.15)] -mt-1"></div>
                </div>
                <div className="flex-1 pb-6">
                  <div className="mb-1.5">Review results</div>
                  <ul className="text-xs text-[#4b5563] space-y-0.5">
                    <li>• [FILL] Jump to detections</li>
                    <li>• [FILL] Tag individuals</li>
                    <li>• [FILL] Add notes</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 -mt-2">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center shrink-0 relative z-10">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-1.5">Export findings</div>
                  <ul className="text-xs text-[#4b5563] space-y-0.5">
                    <li>• [FILL] Generate report</li>
                    <li>• [FILL] Export coordinates</li>
                    <li>• [FILL] Share with team</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full width sections below */}
        <div className="lg:col-span-2 space-y-8">
          {/* How might we - Beautiful card layout */}
          <div>
            <h3 className="mb-6">How might we...</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px] shadow-soft hover:shadow-md transition-shadow">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#e7f4ff] border-2 border-[rgba(17,17,17,0.1)] flex items-center justify-center shrink-0">
                    <Lightbulb className="w-4 h-4 text-[#111111]" />
                  </div>
                  <p className="text-[#4b5563] text-sm pt-1">
                    [FILL] ...process video faster than real-time without specialized hardware?
                  </p>
                </div>
              </div>
              <div className="p-5 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px] shadow-soft hover:shadow-md transition-shadow">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#e7f4ff] border-2 border-[rgba(17,17,17,0.1)] flex items-center justify-center shrink-0">
                    <Lightbulb className="w-4 h-4 text-[#111111]" />
                  </div>
                  <p className="text-[#4b5563] text-sm pt-1">
                    [FILL] ...surface high-confidence detections while allowing operator review of uncertain cases?
                  </p>
                </div>
              </div>
              <div className="p-5 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px] shadow-soft hover:shadow-md transition-shadow">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#e7f4ff] border-2 border-[rgba(17,17,17,0.1)] flex items-center justify-center shrink-0">
                    <Lightbulb className="w-4 h-4 text-[#111111]" />
                  </div>
                  <p className="text-[#4b5563] text-sm pt-1">
                    [FILL] ...integrate map context to help operators quickly locate flagged individuals?
                  </p>
                </div>
              </div>
              <div className="p-5 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px] shadow-soft hover:shadow-md transition-shadow">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#e7f4ff] border-2 border-[rgba(17,17,17,0.1)] flex items-center justify-center shrink-0">
                    <Lightbulb className="w-4 h-4 text-[#111111]" />
                  </div>
                  <p className="text-[#4b5563] text-sm pt-1">
                    [FILL] ...design for high-stress, time-critical field conditions?
                  </p>
                </div>
              </div>
              <div className="p-5 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px] shadow-soft hover:shadow-md transition-shadow md:col-span-2">
                <div className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#e7f4ff] border-2 border-[rgba(17,17,17,0.1)] flex items-center justify-center shrink-0">
                    <Lightbulb className="w-4 h-4 text-[#111111]" />
                  </div>
                  <p className="text-[#4b5563] text-sm pt-1">
                    [FILL] ...enable quick handoff between operators during extended missions?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feasibility Spikes */}
          <div className="p-6 bg-white/80 border border-[rgba(17,17,17,0.2)] rounded-[20px]">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-[#111111]" />
              <h3 className="text-sm uppercase tracking-wider text-[#4b5563]">Feasibility spikes</h3>
            </div>
            <p className="text-[#4b5563] text-sm mb-4">
              [FILL] Early technical validation experiments:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm text-[#4b5563]">YOLOv8 person detection accuracy on aerial footage: <strong className="text-[#111111]">94% recall</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm text-[#4b5563]">Video processing speed on CPU: <strong className="text-[#111111]">3,700 frames/min</strong> sustained</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <p className="text-sm text-[#4b5563]">Browser-based playback of annotated timelines: smooth at <strong className="text-[#111111]">60fps</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ChapterDefine.displayName = 'ChapterDefine';