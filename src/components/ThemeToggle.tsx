'use client';

import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      <div className="theme-toggle-inner">
        {theme === 'light' ? (
          <Moon className="theme-icon" size={20} />
        ) : (
          <Sun className="theme-icon" size={20} />
        )}
      </div>
    </button>
  );
}
