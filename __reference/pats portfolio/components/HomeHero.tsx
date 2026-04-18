import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import './HomeHero.css';

export function HomeHero() {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [showTitleCursor, setShowTitleCursor] = useState(true);
  const [showSubtitleCursor, setShowSubtitleCursor] = useState(false);
  const [showSocialIcons, setShowSocialIcons] = useState(false);

  const fullTitle = "Hey, I'm Patrick!";
  const fullSubtitle = "Senior Software Engineer at\nMarine Corps Software Factory";

  // Calculate Patrick's position in the title
  const patrickStartIndex = fullTitle.indexOf("Patrick");
  const patrickEndIndex = patrickStartIndex + "Patrick".length;

  // Split displayed title into parts for coloring
  const beforePatrick = displayedTitle.slice(0, Math.min(displayedTitle.length, patrickStartIndex));
  const patrickPart = displayedTitle.slice(patrickStartIndex, Math.min(displayedTitle.length, patrickEndIndex));
  const afterPatrick = displayedTitle.slice(patrickEndIndex);

  // Split subtitle for different font weights
  const boldPart = "Senior Software Engineer ";
  const regularPart = "at\nMarine Corps Software Factory";
  const boldSubtitle = displayedSubtitle.slice(0, Math.min(displayedSubtitle.length, boldPart.length));
  const regularSubtitle = displayedSubtitle.slice(boldPart.length);

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
        setDisplayedTitle(fullTitle.slice(0, titleIndex + 1));
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
              setDisplayedSubtitle(fullSubtitle.slice(0, subtitleIndex + 1));
              subtitleIndex++;
            } else {
              clearInterval(subtitleInterval);
              // Hide subtitle cursor and show social icons
              setTimeout(() => {
                setShowSubtitleCursor(false);
                setShowSocialIcons(true);
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
            {beforePatrick}
            {patrickPart && <span className="hero-name">{patrickPart}</span>}
            {afterPatrick}
            {showTitleCursor && <span className="typing-cursor">|</span>}
          </h1>
          <p className="hero-subtitle">
            <span style={{ fontWeight: 700 }}>{boldSubtitle}</span>
            <span style={{ fontWeight: 400 }}>{regularSubtitle}</span>
            {showSubtitleCursor && <span className="typing-cursor">|</span>}
          </p>
        </div>
        <div className={`hero-social-links ${showSocialIcons ? 'show-social' : ''}`}>
          <a href="https://www.figma.com/@patricksherlund" target="_blank" rel="noopener noreferrer" className="social-icon-1">
            <img src="https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/home/figma-icon.svg" alt="Figma" />
          </a>
          <a href="https://github.com/Patrick-Sherlund" target="_blank" rel="noopener noreferrer" className="social-icon-2">
            <img src="https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/home/github-icon.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/patrick-sherlund/" target="_blank" rel="noopener noreferrer" className="social-icon-3">
            <img src="https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/home/linkedin-icon.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* Preload both patterns for instant switching */}
      <div className="hero-pattern-container">
        <img 
          src={isMobile 
            ? "https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/home/hero-pattern-mobile.svg"
            : "https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/home/hero-pattern.svg"
          }
          alt="" 
          className={`hero-pattern ${theme === 'light' ? 'visible' : 'hidden'}`}
        />
        <img 
          src={isMobile 
            ? "https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/home/mobile-hero-section-dark.svg"
            : "https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/home/hero-pattern-dark.svg"
          }
          alt="" 
          className={`hero-pattern ${theme === 'dark' ? 'visible' : 'hidden'}`}
          style={{ display: 'block', width: '100%', margin: 0, padding: 0, position: 'relative', left: 0 }}
        />
      </div>

      {/* Preload both Patrick images for instant switching */}
      <div className="hero-image-container">
        <img 
          src="https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/home/patrick-light.png"
          alt="Patrick Sherlund" 
          className={`hero-image ${theme === 'light' ? 'visible' : 'hidden'}`}
        />
        <img 
          src="https://github.com/Patrick-Sherlund/patrick-sherlund-portfolio/blob/master/src/assets/images/home/patrick-dark.png?raw=true"
          alt="Patrick Sherlund" 
          className={`hero-image ${theme === 'dark' ? 'visible' : 'hidden'}`}
        />
      </div>

      {/* Floating Peace Patrick Animation */}
      <motion.div
        key="peace-patrick-animation"
        className="peace-patrick-container"
        initial={isMobile ? { right: '-100%' } : { top: '-100%' }}
        animate={isMobile 
          ? { right: ['-100%', '-5%', '-100%'] }
          : { top: ['-100%', '-20%', '-100%'] }
        }
        transition={{
          duration: 8,
          ease: 'easeInOut'
        }}
      >
        <img 
          src="https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/home/peace-patrick.png"
          alt="" 
          className="peace-patrick-image"
        />
      </motion.div>
    </section>
  );
}