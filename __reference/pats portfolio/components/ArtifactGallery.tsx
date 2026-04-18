import { useState } from 'react';
import { X, Search, Palette, Box, Code, BarChart3 } from 'lucide-react';

export function ArtifactGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedArtifact, setSelectedArtifact] = useState<number | null>(null);

  const filters = ['All', 'Research', 'Design', 'Architecture', 'Implementation', 'Results'];
  
  // Category metadata
  const categoryMeta: Record<string, { color: string, bgColor: string, icon: any }> = {
    'Research': { color: 'text-blue-600', bgColor: 'bg-blue-50/50', icon: Search },
    'Design': { color: 'text-purple-600', bgColor: 'bg-purple-50/50', icon: Palette },
    'Architecture': { color: 'text-green-600', bgColor: 'bg-green-50/50', icon: Box },
    'Implementation': { color: 'text-orange-600', bgColor: 'bg-orange-50/50', icon: Code },
    'Results': { color: 'text-pink-600', bgColor: 'bg-pink-50/50', icon: BarChart3 }
  };

  const artifacts = [
    { id: 1, title: 'Market gap analysis', category: 'Research', caption: 'Competitive landscape review', demonstrates: '[FILL] No existing commercial solutions for AI-assisted SAR drone video review' },
    { id: 2, title: 'User flow mapping', category: 'Research', caption: 'Current process documentation', demonstrates: '[FILL] Identified 3 critical bottlenecks in manual review workflow' },
    { id: 3, title: 'Initial wireframes', category: 'Design', caption: 'Early concept sketches', demonstrates: '[FILL] Split-pane layout concept emerged from operator feedback sessions' },
    { id: 4, title: 'Timeline UI iterations', category: 'Design', caption: 'Visual detection display', demonstrates: '[FILL] Color-coding pattern tested against 5 alternatives for fastest comprehension' },
    { id: 5, title: 'System architecture', category: 'Architecture', caption: 'Technical infrastructure', demonstrates: '[FILL] Web Workers architecture enables 3,700 fps processing on client' },
    { id: 6, title: 'ML pipeline design', category: 'Architecture', caption: 'Detection processing flow', demonstrates: '[FILL] YOLOv8 integration with confidence filtering and frame sampling optimization' },
    { id: 7, title: 'Video player component', category: 'Implementation', caption: 'Core playback interface', demonstrates: '[FILL] Custom video player with detection markers and timeline scrubbing' },
    { id: 8, title: 'Map integration', category: 'Implementation', caption: 'Geospatial context layer', demonstrates: '[FILL] Real-time synchronization between video playback and map marker position' },
    { id: 9, title: 'Field testing results', category: 'Results', caption: 'Validation metrics', demonstrates: '[FILL] 3,700× speed improvement validated across 8 real-world missions' },
    { id: 10, title: 'Operator feedback synthesis', category: 'Results', caption: 'User research insights', demonstrates: '[FILL] 12 operators rated system 9.2/10 for ease of use after <30min training' },
  ];

  const filteredArtifacts = activeFilter === 'All' 
    ? artifacts 
    : artifacts.filter(a => a.category === activeFilter);

  return (
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-2 py-16 lg:py-24 border-t border-[rgba(17,17,17,0.1)]">
      <div className="mb-12">
        <h2>Artifact Gallery</h2>
        <p className="text-[#4b5563] mt-2">Design & development artifacts from the project</p>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-xl uppercase text-sm tracking-wide transition-all ${
              activeFilter === filter
                ? 'bg-[#111111] text-white shadow-soft'
                : 'bg-white/60 border border-[rgba(17,17,17,0.15)] text-[#111111] hover:border-[rgba(17,17,17,0.3)]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArtifacts.map((artifact, index) => {
          const meta = categoryMeta[artifact.category as keyof typeof categoryMeta];
          const Icon = meta?.icon;
          
          return (
            <div
              key={artifact.id}
              onClick={() => setSelectedArtifact(artifact.id)}
              className="group p-6 bg-white/60 border border-[rgba(17,17,17,0.15)] rounded-[20px] shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer bubble-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={`relative aspect-[4/3] ${meta?.bgColor} rounded-xl mb-4 flex items-center justify-center border border-[rgba(17,17,17,0.08)] overflow-hidden group-hover:border-[rgba(17,17,17,0.15)] transition-colors`}>
                {/* Decorative icon background */}
                {Icon && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
                    <Icon className="w-32 h-32" strokeWidth={1} />
                  </div>
                )}
                <div className="text-center p-4 relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 border border-[rgba(17,17,17,0.1)] mb-2 ${meta?.color}`}>
                    {Icon && <Icon className="w-6 h-6" strokeWidth={1.5} />}
                  </div>
                  <div className="text-xs text-[#4b5563]">Click to view</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base flex-1">{artifact.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  {Icon && (
                    <div className={`w-5 h-5 rounded ${meta?.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-3 h-3 ${meta?.color}`} strokeWidth={2} />
                    </div>
                  )}
                  <span className="text-xs uppercase tracking-wider text-[#4b5563]">
                    {artifact.category}
                  </span>
                </div>
                <p className="text-sm text-[#4b5563] leading-relaxed">{artifact.caption}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedArtifact !== null && (() => {
        const selectedArtifactData = artifacts.find(a => a.id === selectedArtifact);
        const meta = selectedArtifactData ? categoryMeta[selectedArtifactData.category as keyof typeof categoryMeta] : null;
        const Icon = meta?.icon;
        
        return (
          <div 
            className="fixed inset-0 bg-[#111111]/90 z-50 flex items-center justify-center p-6 animate-fade-in"
            onClick={() => setSelectedArtifact(null)}
          >
            <div 
              className="max-w-6xl w-full bg-white rounded-[28px] overflow-hidden shadow-soft-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid lg:grid-cols-[1.2fr_1fr]">
                {/* Left: Large media with decorative background */}
                <div className={`relative aspect-[4/3] lg:aspect-auto ${meta?.bgColor} flex items-center justify-center p-12 border-r border-[rgba(17,17,17,0.08)]`}>
                  {/* Large decorative icon watermark */}
                  {Icon && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.06]">
                      <Icon className="w-64 h-64" strokeWidth={0.5} />
                    </div>
                  )}
                  
                  <div className="text-center relative z-10">
                    {/* Icon badge */}
                    {Icon && (
                      <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/90 border border-[rgba(17,17,17,0.1)] mb-6 ${meta?.color} shadow-soft`}>
                        <Icon className="w-10 h-10" strokeWidth={1.5} />
                      </div>
                    )}
                    <div className="text-sm text-[#4b5563]">Full artifact preview</div>
                    <div className="text-xs text-[#4b5563]/60 mt-1">Placeholder for actual artifact</div>
                  </div>
                </div>

                {/* Right: Details with better design */}
                <div className="p-10 space-y-8 bg-gradient-to-br from-white to-[rgba(17,17,17,0.02)]">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl mb-3">{selectedArtifactData?.title}</h3>
                      {/* Category badge */}
                      <div className="flex items-center gap-2">
                        {Icon && (
                          <div className={`w-6 h-6 rounded-lg ${meta?.bgColor} flex items-center justify-center flex-shrink-0`}>
                            <Icon className={`w-3.5 h-3.5 ${meta?.color}`} strokeWidth={2} />
                          </div>
                        )}
                        <span className="text-sm uppercase tracking-wider text-[#4b5563]">
                          {selectedArtifactData?.category}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedArtifact(null)}
                      className="p-2.5 hover:bg-[rgba(17,17,17,0.08)] rounded-xl transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Caption section */}
                  <div className="p-5 bg-white/60 border border-[rgba(17,17,17,0.08)] rounded-2xl">
                    <div className="text-xs uppercase tracking-wider text-[#4b5563] mb-2">Caption</div>
                    <p className="text-[#111111] leading-relaxed">
                      {selectedArtifactData?.caption}
                    </p>
                  </div>

                  {/* What this demonstrates */}
                  <div className="p-5 bg-white/60 border border-[rgba(17,17,17,0.08)] rounded-2xl">
                    <div className="text-xs uppercase tracking-wider text-[#4b5563] mb-2">What this demonstrates</div>
                    <p className="text-sm text-[#4b5563] leading-relaxed">
                      {selectedArtifactData?.demonstrates}
                    </p>
                  </div>

                  {/* Footer action */}
                  <div className="pt-6 border-t border-[rgba(17,17,17,0.1)]">
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#111111] text-white rounded-xl text-sm hover:bg-[#2a2a2a] transition-colors shadow-soft"
                    >
                      [FILL] View full resolution →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}