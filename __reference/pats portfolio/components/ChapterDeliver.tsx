import { forwardRef } from 'react';
import { Video, Brain, Tag, MapPin, Clock, FileText, Bell, Settings, PlayCircle, CheckCircle2 } from 'lucide-react';

export const ChapterDeliver = forwardRef<HTMLDivElement>((props, ref) => {
  const mvpFeatureGroups = [
    { 
      icon: Video, 
      title: 'Video Intelligence',
      color: '#111111',
      features: [
        'Real-time & recorded video playback',
        'Live feed detection with confidence scores',
        'Color-coded timeline showing all detections',
        'Multi-file switching for mission review'
      ]
    },
    { 
      icon: Brain, 
      title: 'AI Detection Engine',
      color: '#111111',
      features: [
        'ML-powered object detection (timestamp + confidence)',
        'Editable color-coded tagging system',
        'Manual detection override capability',
        'High-confidence alert notifications'
      ]
    },
    { 
      icon: MapPin, 
      title: 'Mission Operations',
      color: '#111111',
      features: [
        'Synchronized map view with detection markers',
        'Operator notes and geolocation tagging',
        'Mission settings configuration',
        'Export to SAR reporting formats'
      ]
    }
  ];

  const learnings = [
    {
      title: 'Speed beats perfection in SAR',
      detail: 'Operators valued fast, "good enough" detections over slower, marginally more accurate ones'
    },
    {
      title: 'Context switching is costly',
      detail: 'Integrated video+map view eliminated need to switch between tools, reducing cognitive load'
    },
    {
      title: 'Confidence transparency builds trust',
      detail: 'Showing ML confidence scores helped operators calibrate trust and make better decisions'
    },
    {
      title: 'Field conditions require resilience',
      detail: '[FILL] Offline capability and simple UI critical for use in remote, high-stress environments'
    }
  ];

  return (
    <div ref={ref} className="scroll-mt-32">
      <div className="sticky top-[61px] z-30 bg-[#e7f4ff] py-6 mb-12 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-2 lg:px-2 border-b border-[rgba(17,17,17,0.08)] backdrop-blur-sm">
        <h2>04 — Deliver</h2>
        <p className="text-[#4b5563] mt-2">Ship MVP & validate</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left: What shipped */}
        <div>
          <h3 className="mb-4">What shipped in MVP</h3>
          <div className="space-y-4">
            {mvpFeatureGroups.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-white/80 border border-[rgba(17,17,17,0.15)] rounded-[20px] hover:border-[rgba(17,17,17,0.25)] transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base mb-1">{group.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-[#4b5563] ml-14">
                    {group.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span className="text-[#111111] mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Roadmap */}
        <div className="space-y-6">
          <div className="p-6 bg-white/80 border border-[rgba(17,17,17,0.15)] rounded-[20px]">
            <h3 className="mb-6 text-sm uppercase tracking-wider text-[#4b5563]">Roadmap</h3>
            
            <div className="space-y-6">
              {/* Next Quarter */}
              <div className="relative pl-8 border-l-2 border-[#111111]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#111111] border-2 border-white"></div>
                <div className="pb-6">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-[#111111] text-white text-xs rounded">Q2 2025</span>
                    <span className="text-xs uppercase tracking-wider text-[#4b5563]">Next</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#111111]">[FILL] Live drone feed integration</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#111111]">[FILL] Multi-operator collaboration</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#111111]">[FILL] Enhanced export templates</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Later This Year */}
              <div className="relative pl-8 border-l-2 border-[rgba(17,17,17,0.2)]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-[rgba(17,17,17,0.3)]"></div>
                <div className="pb-6">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-[rgba(17,17,17,0.1)] text-[#111111] text-xs rounded">Q3-Q4 2025</span>
                    <span className="text-xs uppercase tracking-wider text-[#4b5563]">Later</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#4b5563] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#4b5563]">[FILL] Mobile app for field use</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#4b5563] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#4b5563]">[FILL] Historical mission analytics</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#4b5563] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#4b5563]">[FILL] Custom ML model training</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Future */}
              <div className="relative pl-8 border-l-2 border-[rgba(17,17,17,0.1)]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-[rgba(17,17,17,0.15)]"></div>
                <div>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-[rgba(17,17,17,0.05)] text-[#4b5563] text-xs rounded">2026+</span>
                    <span className="text-xs uppercase tracking-wider text-[#9ca3af]">Future</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#9ca3af] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#9ca3af]">[FILL] Multi-drone coordination</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#9ca3af] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#9ca3af]">[FILL] Predictive search patterns</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-[#9ca3af] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#9ca3af]">[FILL] Integration with emergency dispatch systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px]">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#4b5563]">
              <div className="px-2 py-1 bg-[#111111] text-white rounded">Sanitized</div>
              <span>Proprietary details removed for public portfolio</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Validation + Impact */}
      <div className="mt-12 p-8 bg-[#111111] text-white rounded-[20px]">
        <h3 className="mb-6 text-white">Validation + Impact</h3>
        <div className="grid md:grid-cols-3 gap-6 text-white/80">
          <div>
            <div className="text-3xl mb-2"><strong className="text-white">3,700×</strong></div>
            <p className="text-sm">faster human detection vs manual scanning validated across multiple field deployments</p>
          </div>
          <div>
            <div className="text-3xl mb-2"><strong className="text-white">3 SAR teams</strong></div>
            <p className="text-sm">[FILL] deployed during beta period, supporting 12 certified operators across 8 real-world missions</p>
          </div>
          <div>
            <div className="text-3xl mb-2"><strong className="text-white">92%</strong></div>
            <p className="text-sm">[FILL] reduction in average time-to-first-find in controlled testing scenarios</p>
          </div>
        </div>
      </div>

      {/* Key learnings */}
      <div className="mt-12">
        <h3 className="mb-6">Key learnings</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {learnings.map((learning, index) => (
            <div
              key={index}
              className="p-5 bg-white/60 border-l-4 border-[#111111] rounded-r-[20px]"
            >
              <h4 className="mb-2">{learning.title}</h4>
              <p className="text-sm text-[#4b5563]">{learning.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gratitude */}
      <div className="mt-12 p-8 bg-white/80 border border-[rgba(17,17,17,0.2)] rounded-[20px] text-center max-w-3xl mx-auto">
        <div className="mb-4 text-4xl">🙏</div>
        <h3 className="mb-3">Gratitude</h3>
        <p className="text-sm text-[#4b5563]">
          To the SAR operators who trusted us with their feedback, field-tested early prototypes 
          in difficult conditions, and never stopped pushing us to build something that saves lives.
          <br /><br />
          To my engineering partner who turned ambitious ideas into production-ready code.
          <br /><br />
          And to the survivors who remind us why speed matters.
        </p>
      </div>
    </div>
  );
});

ChapterDeliver.displayName = 'ChapterDeliver';