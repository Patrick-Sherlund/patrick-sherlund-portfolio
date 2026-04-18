import { useEffect } from 'react';
import { BishopCaseStudyHero } from '../components/BishopCaseStudyHero';
import BishopMyRoleStack from '../components/BishopMyRoleStack';
import BishopChallengeVision from '../components/BishopChallengeVision';
import BishopUsersSaw from '../components/BishopUsersSaw';
import { BishopDiscover } from '../components/BishopDiscover';
import { BackToProjects } from '../components/BackToProjects';

// All videos used in the Bishop case study
const BISHOP_VIDEOS = [
  // Hero video
  "https://github.com/Patrick-Sherlund/patrick-sherlund-portfolio/raw/refs/heads/master/public/assets/videos/bishop_demo.mp4",
  
  // Carousel videos in Discover section
  "https://github.com/Patrick-Sherlund/patrick-sherlund-portfolio/raw/refs/heads/master/public/assets/videos/Bishop%20User%20Session%202.mp4",
  "https://github.com/Patrick-Sherlund/patrick-sherlund-portfolio/raw/refs/heads/master/public/assets/videos/figma%20board.mp4",
  "https://github.com/Patrick-Sherlund/patrick-sherlund-portfolio/raw/refs/heads/master/public/assets/videos/Bishop%20User%20Session.mp4",
  "https://github.com/Patrick-Sherlund/patrick-sherlund-portfolio/raw/refs/heads/master/public/assets/videos/FigJam%20Board.mp4",
  
  // Process video
  "https://github.com/Patrick-Sherlund/patrick-sherlund-portfolio/raw/refs/heads/master/public/assets/videos/bishop_demo_slowed.mp4"
];

export default function BishopCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Preload all videos immediately when the page loads
    BISHOP_VIDEOS.forEach((videoUrl) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'video';
      link.href = videoUrl;
      document.head.appendChild(link);
    });

    // Cleanup: remove preload links when component unmounts
    return () => {
      const preloadLinks = document.querySelectorAll('link[rel="preload"][as="video"]');
      preloadLinks.forEach(link => {
        if (BISHOP_VIDEOS.some(url => link.getAttribute('href') === url)) {
          link.remove();
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#e7f4ff]">
      <BackToProjects />
      <BishopCaseStudyHero />
      <BishopMyRoleStack />
      <BishopChallengeVision />
      <BishopUsersSaw />
      <BishopDiscover />
    </div>
  );
}