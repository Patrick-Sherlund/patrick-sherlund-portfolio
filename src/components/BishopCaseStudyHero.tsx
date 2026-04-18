'use client';

import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { BishopVideoOverlay } from './BishopVideoOverlay';
import { bishopAssets, pageAssets } from '@/lib/assetPaths';

export function BishopCaseStudyHero() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fadeDistance = 400;
      const opacity = Math.max(0, 1 - scrollPosition / fadeDistance);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToStack = () => {
    const stackSection = document.getElementById('the-stack');
    if (stackSection) {
      stackSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bishop-hero-section">
      <div className="bishop-hero-container">
        <div className="bishop-hero-left">
          <div className="bishop-number">02</div>
          
          <div className="bishop-logo-container">
            <img src={bishopAssets.logo} alt="Bishop" className="bishop-logo" />
          </div>
          
          <p className="bishop-description">
            AI-powered drone search & rescue platform designed for speed, safety, and hope.
          </p>
          
          <p className="bishop-timeline">6 months to MVP</p>
          
          <div className="bishop-team-info">
            <div className="bishop-team-column">
              <div className="bishop-team-role">Software Engineer</div>
              <div className="bishop-team-name">Patrick Sherlund</div>
            </div>
            <div className="bishop-team-divider">|</div>
            <div className="bishop-team-column">
              <div className="bishop-team-role">Product Designer</div>
              <div className="bishop-team-name">Shelby Reilly :)</div>
            </div>
          </div>
        </div>
        
        <div className="bishop-hero-right">
          <div className="bishop-ipad-container" style={{ transform: 'scale(1.2)' }}>
            <div className="bishop-ipad-screen">
              <BishopVideoOverlay />
            </div>
            <img 
              src={pageAssets.devices.ipad}
              alt="iPad frame" 
              className="bishop-ipad-frame"
            />
          </div>
        </div>
      </div>
      
      <div 
        className="bishop-scroll-indicator" 
        onClick={handleScrollToStack} 
        style={{ cursor: 'pointer', opacity: scrollOpacity, transition: 'opacity 0.1s linear' }}
      >
        <span className="bishop-scroll-text">See case study below</span>
        <motion.div
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <ChevronDown size={32} color="#6b7280" strokeWidth={2} />
        </motion.div>
      </div>
    </section>
  );
}
