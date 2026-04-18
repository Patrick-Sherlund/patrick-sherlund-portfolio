import { useEffect, useRef, useState } from 'react';

export function RecruiterDetails() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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

  const languages = [
    'TypeScript',
    'C++',
    'JavaScript',
    'Python',
    'SQL'
  ];

  const stackGroups = [
    { label: 'Frontend', items: 'React, Vite' },
    { label: 'Backend', items: 'Drogon (C++)' },
    { label: 'ML', items: 'ONNX Runtime' },
    { label: 'Data', items: 'PostgreSQL' },
    { label: 'Infra', items: 'AWS, Docker' },
    { label: 'Workflow', items: 'Git' }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative border-t border-[rgba(17,17,17,0.06)] bg-[#e7f4ff]"
    >
      {/* Content Container */}
      <div className="relative max-w-[1280px] mx-auto px-20 py-24 lg:py-28">
        
        {/* Title */}
        <div className={`mb-14 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-[42px] lg:text-[48px] text-[#111111] tracking-[-0.03em] leading-[1.2]">
            Technical Scope
          </h2>
        </div>

        {/* Two Column Grid (5/7 split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-28">
          
          {/* Left Column: Programming Languages (5 columns) */}
          <div className={`lg:col-span-5 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Section Header */}
            <div className="mb-10">
              <div className="text-[12px] uppercase tracking-[0.18em] text-[#111111]/50 font-medium">
                Programming Languages
              </div>
            </div>
            
            {/* Languages List with Vertical Accent */}
            <div className="relative pl-6 border-l-2 border-[#3b82f6]/25">
              <div className="space-y-0">
                {languages.map((language, index) => (
                  <div
                    key={language}
                    className={`group transition-all duration-180 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                    style={{ transitionDelay: `${300 + index * 80}ms` }}
                  >
                    <div className="relative -ml-6 pl-6 min-h-[52px] py-4 rounded-xl border-b border-[rgba(17,17,17,0.06)] last:border-0 transition-all duration-700 ease-out hover:bg-[#d4ebff]/40 hover:border-[#3b82f6]/20 hover:pl-7 cursor-default">
                      <div className="text-[19px] text-[#111111] tracking-[-0.01em] leading-[1.5] transition-all duration-180">
                        {language}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Technology Stack (7 columns) */}
          <div className={`lg:col-span-7 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Section Header */}
            <div className="mb-10">
              <div className="text-[12px] uppercase tracking-[0.18em] text-[#111111]/50 font-medium">
                Technology Stack
              </div>
            </div>

            {/* Definition List - Clean Two-Column Layout with Vertical Accent */}
            <div className="relative pl-6 border-l-2 border-[#3b82f6]/25">
              <div className="space-y-0">
                {stackGroups.map((group, index) => (
                  <div
                    key={group.label}
                    className={`group transition-all duration-180 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                    style={{ transitionDelay: `${500 + index * 70}ms` }}
                  >
                    <div className="flex items-baseline gap-8 min-h-[52px] py-4 px-5 -ml-6 pl-6 rounded-xl border-b border-[rgba(17,17,17,0.06)] last:border-0 transition-all duration-700 ease-out hover:bg-[#d4ebff]/40 hover:border-[#3b82f6]/20 hover:pl-7 cursor-default">
                      
                      {/* Label Column (Fixed Width) */}
                      <div className="w-28 shrink-0">
                        <div className="text-[12px] uppercase tracking-[0.18em] text-[#111111]/50 font-medium">
                          {group.label}
                        </div>
                      </div>
                      
                      {/* Value Column (Flexible) */}
                      <div className="flex-1">
                        <div className="text-[19px] text-[#111111] tracking-[-0.01em] leading-[1.5]">
                          {group.items}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}