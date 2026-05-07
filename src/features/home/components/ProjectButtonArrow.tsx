'use client';

import { useTheme } from '@/features/theme/ThemeProvider';
import { sharedAssets } from '@/shared/media/asset-paths';

export function ProjectButtonArrow() {
  const { theme } = useTheme();
  
  return (
    <>
      <img 
        src={sharedAssets.buttonArrow}
        alt="" 
        className={`button-arrow ${theme === 'light' ? 'visible' : 'hidden'}`}
        style={{ position: theme === 'dark' ? 'absolute' : 'relative' }}
      />
      <img 
        src={sharedAssets.buttonArrowDark}
        alt="" 
        className={`button-arrow ${theme === 'dark' ? 'visible' : 'hidden'}`}
        style={{ position: theme === 'light' ? 'absolute' : 'relative' }}
      />
    </>
  );
}
