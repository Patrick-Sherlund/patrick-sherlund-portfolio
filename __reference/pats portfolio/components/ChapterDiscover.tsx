import { forwardRef } from 'react';
import { ArtifactCard } from './ArtifactCard';
import { AlertCircle, Compass, Quote } from 'lucide-react';

export const ChapterDiscover = forwardRef<HTMLDivElement>((props, ref) => {
  const quotes = [
    {
      text: '"Every minute counts. We need to review hours of footage in minutes, not days."',
      author: '[FILL] Sarah Chen, SAR Coordinator'
    },
    {
      text: '"When you\'re staring at a screen for 8 hours straight, you start missing things. The fatigue is real."',
      author: '[FILL] Mike Rodriguez, Drone Operator'
    },
    {
      text: '"After 72 hours, survival rates drop dramatically. Speed is everything."',
      author: '[FILL] Dr. James Park, Emergency Response Researcher'
    }
  ];

  return (
    <div ref={ref} className="scroll-mt-32">
      <div className="sticky top-[61px] z-30 bg-[#e7f4ff] py-6 mb-12 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-2 lg:px-2 border-b border-[rgba(17,17,17,0.08)] backdrop-blur-sm">
        <h2>01 — Discover</h2>
        <p className="text-[#4b5563] mt-2">Understand needs (engineers participate)</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Narrative column */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Compass className="w-5 h-5 text-[#4b5563]" />
              <h3>Mission context</h3>
            </div>
            <p className="text-[#4b5563]">
              Bishop was created in direct response to the tragic 2024 Southeast Coastal Hurricane disasters, 
              where search and rescue teams faced overwhelming challenges locating survivors across vast 
              flood zones. The catastrophic scale revealed a critical gap: existing drone technology could 
              capture extensive footage, but human operators couldn't process it fast enough.
            </p>
          </div>

          <div className="p-6 bg-white/60 border-l-4 border-[#111111] rounded-r-[20px]">
            <h3 className="mb-3">Current process pain</h3>
            <p className="text-[#4b5563]">
              Manual video scanning was limited to one person watching footage at 1× speed. With drones 
              capturing 8+ hours of video per mission, this created an impossible bottleneck. Operators 
              experienced severe fatigue, missed detections, and delays that cost lives.
            </p>
          </div>

          <div className="p-6 bg-[#111111] text-white rounded-[20px] border-l-4 border-[#ff6b6b]">
            <div className="flex items-start gap-3 mb-3">
              <AlertCircle className="w-5 h-5 text-[#ff6b6b] shrink-0 mt-0.5" />
              <h3 className="text-white">Urgency callout</h3>
            </div>
            <p className="text-white/80">
              Research shows survival likelihood plummets after 72 hours. Every hour of delay in reviewing 
              drone footage directly impacts rescue success rates.
            </p>
          </div>

          <div>
            <h3 className="mb-6">Top 3 insights</h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full border-[3px] border-[#111111] bg-white flex items-center justify-center shrink-0">
                  <span className="text-lg">01</span>
                </div>
                <p className="text-[#4b5563] pt-2">
                  [FILL] Operators need confidence scores to prioritize review — not all detections are equal
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full border-[3px] border-[#111111] bg-white flex items-center justify-center shrink-0">
                  <span className="text-lg">02</span>
                </div>
                <p className="text-[#4b5563] pt-2">
                  [FILL] Visual context (map + video) together enables faster decision-making than either alone
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full border-[3px] border-[#111111] bg-white flex items-center justify-center shrink-0">
                  <span className="text-lg">03</span>
                </div>
                <p className="text-[#4b5563] pt-2">
                  [FILL] Field conditions demand rugged, offline-capable tools with minimal training requirements
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Artifacts column */}
        <div className="space-y-6">
          <ArtifactCard
            title="Market research"
            caption="Gap analysis of existing SAR technology"
            tag="Research"
            demonstrates="[FILL] Identified zero commercial solutions offering real-time AI detection for SAR drone footage"
          />
          
          <ArtifactCard
            title="User identification"
            caption="SAR teams & drone operators"
            tag="Research"
            demonstrates="[FILL] Primary users: certified drone pilots with SAR training; secondary: SAR coordinators reviewing flagged footage"
          />
          
          <ArtifactCard
            title="User research flows"
            caption="Current process mapping + pain points"
            tag="Research"
            demonstrates="[FILL] Documented 12-step manual review process with 3 critical bottlenecks causing 4-6 hour delays"
          />
        </div>

        {/* User Voices - Full Width */}
        <div className="lg:col-span-2">
          <h3 className="mb-8 text-sm uppercase tracking-wider text-[#4b5563]">User voices</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <div key={index} className="bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px] p-6 shadow-soft">
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#e7f4ff] border-2 border-[rgba(17,17,17,0.1)] flex items-center justify-center shadow-sm">
                    <Quote className="w-5 h-5 text-[#111111]" />
                  </div>
                  <div className="flex-1">
                    <p className="italic mb-4 text-[#111111] leading-relaxed">{quote.text}</p>
                    <p className="text-sm text-[#4b5563]">— {quote.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

ChapterDiscover.displayName = 'ChapterDiscover';