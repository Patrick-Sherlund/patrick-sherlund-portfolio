import { useEffect, useState } from 'react';
import './HeroSection.css';
import heroPattern from '../assets/images/home/hero-pattern.svg';
import heroPatternMobile from '../assets/images/home/hero-pattern-mobile.svg';
import patrickLight from '../assets/images/home/patrick-light.png';
import linkedinIcon from '../assets/images/home/linkedin-icon.svg';
import githubIcon from '../assets/images/home/github-icon.svg';
import figmaIcon from '../assets/images/home/figma-icon.svg';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hey, I'm <span className="hero-name">Patrick!</span>
          </h1>
          <p className="hero-subtitle">
            <span className="hero-role">Senior Software Engineer</span> at
            <br />
            Marine Corps Software Factory
          </p>
          <div className="hero-social-links">
            <a href="https://www.linkedin.com/in/patrick-sherlund" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/patrick-sherlund" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://www.figma.com/@patrick_sherlund" target="_blank" rel="noopener noreferrer" aria-label="Figma">
              <img src={figmaIcon} alt="Figma" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-pattern-container">
        <img src={isMobile ? heroPatternMobile : heroPattern} alt="" className="hero-pattern" />
      </div>
      <div className="hero-image-container">
        <img src={patrickLight} alt="Patrick Sherlund" className="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;
