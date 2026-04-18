import { useEffect } from 'react';

export function usePreloadImages() {
  useEffect(() => {
    const imagesToPreload = [
      // Light mode images
      "https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/home/hero-pattern.svg",
      "https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/home/hero-pattern-mobile.svg",
      "https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/home/patrick-light.png",
      "https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/pages/button-arrow.svg",
      
      // Dark mode images
      "https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/home/mobile-hero-section-dark.svg",
      "https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/home/hero-pattern-dark.svg",
      "https://github.com/Patrick-Sherlund/patrick-sherlund-portfolio/blob/master/src/assets/images/home/patrick-dark.png?raw=true",
      "https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/pages/button-arrow-dark.svg",
      
      // Social icons
      "https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/home/figma-icon.svg",
      "https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/home/github-icon.svg",
      "https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/home/linkedin-icon.svg"
    ];

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
}