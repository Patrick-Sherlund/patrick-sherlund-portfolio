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
  const [titleText, setTitleText] = useState('');
  const [subtitleText, setSubtitleText] = useState('');
  const [showTitleCursor, setShowTitleCursor] = useState(true);
  const [showSubtitleCursor, setShowSubtitleCursor] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  const fullTitle = "Hey, I'm Patrick!";
  const fullSubtitle = "Senior Software Engineer at\nMarine Corps Software Factory";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let titleIndex = 0;
    let subtitleIndex = 0;

    // Type title character by character
    const titleInterval = setInterval(() => {
      if (titleIndex < fullTitle.length) {
        setTitleText(fullTitle.slice(0, titleIndex + 1));
        titleIndex++;
      } else {
        clearInterval(titleInterval);
        // Hide title cursor and start subtitle after a brief pause
        setTimeout(() => {
          setShowTitleCursor(false);
          setShowSubtitleCursor(true);

          // Start typing subtitle
          const subtitleInterval = setInterval(() => {
            if (subtitleIndex < fullSubtitle.length) {
              setSubtitleText(fullSubtitle.slice(0, subtitleIndex + 1));
              subtitleIndex++;
            } else {
              clearInterval(subtitleInterval);
              // Hide subtitle cursor and show social icons
              setTimeout(() => {
                setShowSubtitleCursor(false);
                setShowSocial(true);
              }, 300);
            }
          }, 40); // Typing speed for subtitle
        }, 500); // Pause before starting subtitle
      }
    }, 60); // Typing speed for title

    return () => {
      clearInterval(titleInterval);
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            {titleText.split('').map((char, index) => {
              const isPatrick = titleText.indexOf("Patrick") !== -1 && index >= titleText.indexOf("Patrick") && index < titleText.indexOf("Patrick") + 7;
              return (
                <span key={index} className={isPatrick ? 'hero-name' : ''}>
                  {char}
                </span>
              );
            })}
            {showTitleCursor && <span className="typing-cursor">|</span>}
          </h1>
          <p className="hero-subtitle">
            {subtitleText.split('\n').map((line, lineIndex) => (
              <span key={lineIndex}>
                {line.split('').map((char, charIndex) => {
                  const isSenior = line.startsWith("Senior Software Engineer");
                  const isInSenior = isSenior && charIndex < "Senior Software Engineer".length;
                  return (
                    <span key={charIndex} className={isInSenior ? 'hero-role' : ''}>
                      {char}
                    </span>
                  );
                })}
                {lineIndex < subtitleText.split('\n').length - 1 && <br />}
              </span>
            ))}
            {showSubtitleCursor && <span className="typing-cursor">|</span>}
          </p>
          <div className={`hero-social-links ${showSocial ? 'show-social' : ''}`}>
            <a href="https://www.linkedin.com/in/patrick-sherlund" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-1">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/patrick-sherlund" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon-2">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://www.figma.com/@patrick_sherlund" target="_blank" rel="noopener noreferrer" aria-label="Figma" className="social-icon-3">
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
