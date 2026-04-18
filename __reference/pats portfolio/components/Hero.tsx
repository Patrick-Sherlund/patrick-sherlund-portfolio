import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import ipadFrame from 'figma:asset/12e96c7fba43a4a64482628512e322222b0b0731.png';
import bishopLogo from 'figma:asset/e161ef2452b69158431cb89c88af2b4bfb993745.png';

interface HeroProps {
  onReadStory: () => void;
}

export function Hero({ onReadStory }: HeroProps) {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const fadeEnd = 400;
      const scrollY = window.scrollY;
      
      if (scrollY === 0) {
        setScrollOpacity(1);
      } else if (scrollY >= fadeEnd) {
        setScrollOpacity(0);
      } else {
        const opacity = 1 - (scrollY / fadeEnd);
        setScrollOpacity(opacity);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen lg:h-screen flex items-center">
      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-14 py-16 lg:py-18">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col space-y-10">
          <div className="space-y-6 bubble-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-[#4b5563]/50 tracking-[0.2em] uppercase text-xs">01</div>
            
            <div className="space-y-4">
              <img 
                src={bishopLogo} 
                alt="Bishop"
                className="h-[52px] sm:h-[64px] w-auto"
              />
              <p className="text-lg text-[#4b5563] leading-[1.5]">
                AI-powered drone search & rescue platform designed for faster, safer human detection review.
              </p>
            </div>

            <div className="text-sm text-[#4b5563]/70">
              Lead Engineer • 2-person team • 6 months
            </div>
          </div>

          {/* Demo Preview */}
          <div className="bubble-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img 
                src={ipadFrame}
                alt="iPad mockup"
                className="w-full h-auto relative z-10"
              />
              
              <div className="absolute left-[50%] top-[48%] translate-x-[-50%] translate-y-[-50%] w-[77%] h-[77%] z-20">
                <video 
                  src="https://patricksherlund.com/assets/videos/bishop_demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-[4px]"
                />
              </div>
            </div>
            <div className="mt-3 text-xs text-[#4b5563]/60 text-center">
              Hurricane Milton SAR — detection review workflow
            </div>
          </div>
        </div>

        {/* Desktop Layout - 12 Column Grid */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-12 gap-12 items-start">
            {/* Left Column - 5 columns */}
            <div className="col-span-5 flex flex-col justify-start pt-8 space-y-10 bubble-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-[#4b5563]/50 tracking-[0.2em] uppercase text-xs">01</div>
              
              <div className="space-y-5">
                <img 
                  src={bishopLogo} 
                  alt="Bishop"
                  className="h-[64px] w-auto"
                />
                <p className="text-[18px] text-[#4b5563] leading-[1.4] max-w-[480px]">
                  AI-powered drone search & rescue platform designed for faster, safer human detection review.
                </p>
              </div>

              <div className="text-[15px] text-[#4b5563]/70">
                Lead Engineer • 2-person team • 6 months
              </div>
            </div>

            {/* Right Column - 7 columns */}
            <div className="col-span-7 flex items-center bubble-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-full">
                <div className="relative scale-[1.08] origin-center">
                  <img 
                    src={ipadFrame}
                    alt="iPad mockup"
                    className="w-full h-auto relative z-10"
                  />
                  
                  <div className="absolute left-[50%] top-[48%] translate-x-[-50%] translate-y-[-50%] w-[77%] h-[77%] z-20">
                    <video 
                      src="https://patricksherlund.com/assets/videos/bishop_demo.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-[4px]"
                    />
                  </div>
                </div>
                <div className="mt-4 text-xs text-[#4b5563]/60 text-center">
                  Hurricane Milton SAR — detection review workflow
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-0 right-0 flex justify-center transition-opacity duration-500 pointer-events-none"
        style={{ opacity: scrollOpacity }}
      >
        <div className="text-xs text-[#4b5563]/50 flex items-center gap-1">
          <span>Scroll</span>
          <ChevronDown className="w-3 h-3" strokeWidth={2} />
        </div>
      </div>
    </section>
  );
}