import { useEffect, useRef, useState } from 'react';
import './BishopChallengeVision.css';
import sparkleImage from 'figma:asset/08260a88d14496c7a8e5e2cd31aebc19e2db6767.png';
import imgBubble1 from "figma:asset/1ca06ad10ee3f4f354867e4fd48454fdf9facf29.png";
import imgBubble2 from "figma:asset/d814839de618ba574b116daa184d98fcfea3b973.png";
import imgBubble3 from "figma:asset/045e7e5023edbc53d97e728a94a03a57da710d1b.png";
import imgBubble4 from "figma:asset/45767f26cdf5a353c43b9dbeffc4b2223dba9c47.png";
import imgBubble5 from "figma:asset/d904f53daaba1a31c37e00fb156644c4af4e80e5.png";

// Fixed random positions for each bubble (percentage-based)
const bubblePositions = [
  // Top row - 3 images
  { top: '8%', left: '5%', width: 213.63, height: 150 },     // Top left
  { top: '5%', left: '40%', width: 278.39, height: 150 },    // Top center-left
  { top: '10%', left: '75%', width: 211.83, height: 150 },   // Top right (swapped position with bottom left)
  
  // Bottom row - 2 images
  { top: '68%', left: '8%', width: 281.76, height: 150 },    // Bottom left (swapped position with top right)
  { top: '70%', left: '70%', width: 280.28, height: 150 },   // Bottom right
];

const bubbleImages = [
  imgBubble1,
  imgBubble2,
  imgBubble3,
  imgBubble4,
  imgBubble5,
];

function BishopChallengeVision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [challengeVisionProgress, setChallengeVisionProgress] = useState(0);
  const [bubbleProgress, setBubbleProgress] = useState<number[]>([0, 0, 0, 0, 0]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Phase 1: Challenge → Vision crossfade (0 to 1 viewport of scrolling)
      if (rect.top <= 0 && rect.top > -viewportHeight) {
        const scrollDistance = Math.abs(rect.top);
        const newProgress = Math.min(Math.max(scrollDistance / viewportHeight, 0), 1);
        setChallengeVisionProgress(newProgress);
        setBubbleProgress([0, 0, 0, 0, 0]); // Reset bubbles
      } else if (rect.top > 0) {
        // Before the section
        setChallengeVisionProgress(0);
        setBubbleProgress([0, 0, 0, 0, 0]);
      } else if (rect.top <= -viewportHeight) {
        // Phase 2: Bubbles appear one by one
        setChallengeVisionProgress(1); // Keep vision at full opacity
        
        // Calculate bubble progress
        // Each bubble gets ~50vh of scroll (0.5 viewport)
        const bubbleScrollStart = viewportHeight; // Start after first viewport
        const scrollPerBubble = viewportHeight * 0.5;
        const totalBubbleScroll = scrollPerBubble * 5;
        
        const bubbleScrollDistance = Math.abs(rect.top) - bubbleScrollStart;
        
        if (bubbleScrollDistance < 0) {
          // Haven't reached bubble phase yet
          setBubbleProgress([0, 0, 0, 0, 0]);
        } else if (bubbleScrollDistance > totalBubbleScroll) {
          // All bubbles fully visible
          setBubbleProgress([1, 1, 1, 1, 1]);
        } else {
          // Calculate individual bubble progress
          const newBubbleProgress = bubbleImages.map((_, index) => {
            const bubbleStart = index * scrollPerBubble;
            const bubbleEnd = bubbleStart + scrollPerBubble;
            const progress = (bubbleScrollDistance - bubbleStart) / scrollPerBubble;
            return Math.min(Math.max(progress, 0), 1);
          });
          setBubbleProgress(newBubbleProgress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bishop-challenge-vision-wrapper" ref={containerRef}>
      <div className="bishop-challenge-vision-content">
        {/* The Challenge Panel */}
        <div 
          className="bishop-challenge-panel"
          style={{ opacity: 1 - challengeVisionProgress }}
        >
          <h2 className="bishop-cv-title">The Challenge</h2>
          <p className="bishop-cv-text">
            Locating <strong>distressed humans</strong> quickly & efficiently during <strong>search & rescue</strong> missions.
          </p>
        </div>

        {/* The Vision Panel */}
        <div 
          className="bishop-vision-panel"
          style={{ opacity: challengeVisionProgress }}
        >
          <h2 className="bishop-cv-title bishop-vision-title">
            <img src={sparkleImage} alt="" className="vision-sparkle-img" /> The Vision
          </h2>
          <p className="bishop-cv-text">
            <strong>AI powered</strong> drone search & rescue application designed for <strong>speed, safety,</strong> and <strong>hope.</strong>
          </p>
        </div>

        {/* Bubble Images */}
        {bubbleImages.map((img, index) => {
          const position = bubblePositions[index];
          const progress = bubbleProgress[index];
          // First 3 images are top row (indices 0, 1, 2)
          // Last 2 images are bottom row (indices 3, 4)
          const isTopRow = index < 3;
          
          return (
            <div
              key={index}
              className={`bishop-bubble-image ${isTopRow ? 'bishop-bubble-top' : 'bishop-bubble-bottom'}`}
              style={{
                top: position.top,
                left: position.left,
                width: `${position.width}px`,
                height: `${position.height}px`,
                opacity: progress,
                transform: `scale(${0.5 + progress * 0.5})`,
              }}
            >
              <img src={img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BishopChallengeVision;