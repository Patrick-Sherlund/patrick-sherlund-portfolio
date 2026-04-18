interface StoryRailProps {
  activeStage: string;
  onStageClick: (stage: string) => void;
  isMobile: boolean;
}

export function StoryRail({ activeStage, onStageClick, isMobile }: StoryRailProps) {
  const stages = [
    { id: 'discover', label: 'Discover', subtitle: 'Understand needs' },
    { id: 'define', label: 'Define', subtitle: 'Frame the MVP' },
    { id: 'develop', label: 'Develop', subtitle: 'Iterate & build' },
    { id: 'deliver', label: 'Deliver', subtitle: 'Ship & validate' }
  ];

  if (isMobile) {
    return (
      <div className="sticky top-[73px] z-40 bg-[#e7f4ff] pb-4 mb-8">
        <div className="flex gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => onStageClick(stage.id)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap text-sm uppercase tracking-wide transition-all ${
                activeStage === stage.id
                  ? 'bg-[#111111] text-white'
                  : 'bg-white/60 border border-[rgba(17,17,17,0.15)] text-[#111111] hover:border-[rgba(17,17,17,0.3)]'
              }`}
            >
              {stage.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="hidden lg:block">
      <div className="sticky top-32">
        <div className="bg-white/80 backdrop-blur-sm border border-[rgba(17,17,17,0.1)] rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-[0.15em] text-[#4b5563]/70">Case Study Navigation</h3>
          </div>

          <div className="space-y-2">
            {stages.map((stage, index) => (
              <div key={stage.id} className="relative">
                <button
                  onClick={() => onStageClick(stage.id)}
                  className={`w-full text-left px-4 py-4 rounded-[16px] transition-all duration-300 relative group ${
                    activeStage === stage.id
                      ? 'bg-[#111111] text-white shadow-[0_4px_20px_rgb(0,0,0,0.15)]'
                      : 'hover:bg-white/90 text-[#111111] hover:shadow-[0_2px_10px_rgb(0,0,0,0.05)]'
                  }`}
                >
                  {activeStage === stage.id && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-white rounded-r shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                  )}
                  <div className={`flex items-baseline gap-3 mb-1.5 ${activeStage === stage.id ? '' : 'group-hover:translate-x-1 transition-transform duration-300'}`}>
                    <span className={`text-[10px] uppercase tracking-wider ${activeStage === stage.id ? 'text-white/50' : 'text-[#4b5563]/40'}`}>
                      0{index + 1}
                    </span>
                    <div className="uppercase tracking-[0.08em]">
                      {stage.label}
                    </div>
                  </div>
                  <div className={`text-xs ml-6 ${activeStage === stage.id ? 'text-white/60' : 'text-[#4b5563]/60'}`}>
                    {stage.subtitle}
                  </div>
                </button>
                {index < stages.length - 1 && (
                  <div className="h-3 flex items-center justify-center">
                    <div className={`w-[1px] h-full transition-colors duration-500 ${
                      stages.findIndex(s => s.id === activeStage) > index
                        ? 'bg-[#111111]/20'
                        : 'bg-[#111111]/10'
                    }`} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[rgba(17,17,17,0.08)]">
            <div className="flex items-center gap-2 text-[10px] text-[#4b5563]/50 uppercase tracking-[0.12em]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4b5563]/30" />
              Double Diamond Process
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}