import { useEffect } from 'react';
import { homeAssets, pageAssets } from '@/lib/assetPaths';

export function usePreloadImages() {
  useEffect(() => {
    const imagesToPreload = [
      homeAssets.heroPattern,
      homeAssets.heroPatternMobile,
      homeAssets.patrickLight,
      pageAssets.buttonArrow,
      homeAssets.heroPatternDarkMobile,
      homeAssets.heroPatternDark,
      homeAssets.patrickDark,
      pageAssets.buttonArrowDark,
      homeAssets.figmaIcon,
      homeAssets.githubIcon,
      homeAssets.linkedinIcon
    ];

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
}
