'use client';

import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { VideoOverlay } from '@/shared/components/VideoOverlay';
import { bishopMediaAssets } from '../data/bishop-assets';
import { bishopContent } from '../data/bishop-content';
import { deviceAssets } from '@/shared/media/asset-paths';

export function BishopHero() {
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
            <img src={bishopMediaAssets.logo} alt="Bishop" className="bishop-logo" />
          </div>
          
          <p className="bishop-description">{bishopContent.hero.description}</p>
          
          <p className="bishop-timeline">{bishopContent.hero.timeline}</p>
          
          <div className="bishop-team-info">
            <div className="bishop-team-column">
              <div className="bishop-team-role">{bishopContent.hero.team[0].role}</div>
              <div className="bishop-team-name">{bishopContent.hero.team[0].name}</div>
            </div>
            <div className="bishop-team-divider">|</div>
            <div className="bishop-team-column">
              <div className="bishop-team-role">{bishopContent.hero.team[1].role}</div>
              <div className="bishop-team-name">{bishopContent.hero.team[1].name}</div>
            </div>
          </div>
        </div>
        
        <div className="bishop-hero-right">
          <div className="bishop-ipad-container" style={{ transform: 'scale(1.2)' }}>
            <div className="bishop-ipad-screen">
              <VideoOverlay
                src="/assets/videos/bishop_demo.mp4"
                wrapperStyle={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                videoStyle={{
                  width: 'auto',
                  height: '75%',
                  marginTop: '-6%',
                  marginLeft: '-7%',
                  objectFit: 'cover',
                  borderRadius: '4px'
                }}
              />
            </div>
            <img 
              src={deviceAssets.devices.ipad}
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
