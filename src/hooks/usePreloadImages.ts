import { useEffect } from 'react';
import { homeAssets } from '@/features/home/data/home-assets';
import { sharedAssets } from '@/shared/media/asset-paths';

export function usePreloadImages() {
  useEffect(() => {
    const imagesToPreload = [
      homeAssets.heroPattern,
      homeAssets.heroPatternMobile,
      homeAssets.patrickLight,
      sharedAssets.buttonArrow,
      homeAssets.heroPatternDarkMobile,
      homeAssets.heroPatternDark,
      homeAssets.patrickDark,
      sharedAssets.buttonArrowDark,
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
