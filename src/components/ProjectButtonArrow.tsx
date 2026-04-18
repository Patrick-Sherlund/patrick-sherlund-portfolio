'use client';

import { useTheme } from '../contexts/ThemeContext';
import { pageAssets } from '@/lib/assetPaths';

export function ProjectButtonArrow() {
  const { theme } = useTheme();
  
  return (
    <>
      <img 
        src={pageAssets.buttonArrow}
        alt="" 
        className={`button-arrow ${theme === 'light' ? 'visible' : 'hidden'}`}
        style={{ position: theme === 'dark' ? 'absolute' : 'relative' }}
      />
      <img 
        src={pageAssets.buttonArrowDark}
        alt="" 
        className={`button-arrow ${theme === 'dark' ? 'visible' : 'hidden'}`}
        style={{ position: theme === 'light' ? 'absolute' : 'relative' }}
      />
    </>
  );
}
