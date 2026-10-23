'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '@/features/theme/ThemeProvider';
import type { ProjectCategory } from '../data/projects';
import { ProjectNavigationHint } from '@/shared/components/ProjectNavigationHint';
import { getProjectScrollTop } from '../hooks/useProjectArrowNavigation';

type ProfessionalProjectsBannerProps = {
  activeCategory: ProjectCategory;
  firstProjectSectionId: string;
  onCategoryChange: (category: ProjectCategory) => void;
  onSeeProjects: () => void;
};

const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "software-engineering", label: "Software Engineering" },
  { id: "product-design", label: "Design Systems" },
];

export function ProfessionalProjectsBanner({
  activeCategory,
  firstProjectSectionId,
  onCategoryChange,
  onSeeProjects,
}: ProfessionalProjectsBannerProps) {
  const { theme } = useTheme();
  const reduceMotion = useReducedMotion();
  const [contentFadeProgress, setContentFadeProgress] = useState(0);
  const [stickyFadeProgress, setStickyFadeProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const firstProject = document.getElementById(firstProjectSectionId);
      const projectScrollTop = firstProject ? getProjectScrollTop(firstProject) : window.innerHeight;
      const contentFadeDistance = Math.max(1, projectScrollTop * 0.8);
      const stickyFadeDistance = Math.max(1, projectScrollTop * 0.2);
      const newContentFadeProgress = Math.min(1, Math.max(0, scrolled / contentFadeDistance));
      const newStickyFadeProgress = Math.min(1, Math.max(0, (scrolled - contentFadeDistance) / stickyFadeDistance));
      setContentFadeProgress(newContentFadeProgress);
      setStickyFadeProgress(newStickyFadeProgress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [firstProjectSectionId]);

  const contentOpacity = 1 - contentFadeProgress;
  const contentInteractive = contentOpacity > 0.05;
  const stickyInteractive = stickyFadeProgress > 0.05;
  const renderCategoryTabs = (isSticky: boolean) => (
    projectCategories.map((category) => (
      <button
        key={category.id}
        type="button"
        aria-pressed={activeCategory === category.id}
        tabIndex={isSticky ? (stickyInteractive ? undefined : -1) : (contentInteractive ? undefined : -1)}
        data-category={category.id}
        className={`project-category-tab${activeCategory === category.id ? " active" : ""}`}
        onClick={() => onCategoryChange(category.id)}
      >
        {category.label}
      </button>
    ))
  );

  return (
    <div style={{
      width: '100%',
      backgroundColor: theme === 'dark' ? '#041825' : '#E7F4FF',
      padding: '120px 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '24px'
    }}>
      <div
        className="project-category-controls project-category-controls-sticky"
        aria-label="Project category"
        aria-hidden={!stickyInteractive}
        style={{
          opacity: stickyFadeProgress,
          transform: `translateY(${(1 - stickyFadeProgress) * -16}px)`,
          pointerEvents: stickyInteractive ? 'auto' : 'none'
        }}
      >
        {renderCategoryTabs(true)}
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '36px',
        opacity: contentOpacity,
        pointerEvents: contentInteractive ? 'auto' : 'none',
        transition: 'opacity 0.1s ease-out'
      }}>
        <h2 style={{
          fontFamily: "'Google Sans', sans-serif",
          fontSize: '48px',
          fontWeight: '400',
          color: theme === 'dark' ? '#FFFFFF' : '#1A1A1A',
          margin: '0',
          letterSpacing: '-0.01em',
          lineHeight: '1.2',
          transition: 'none',
          textAlign: 'center',
          padding: '0 20px'
        }}
        className="professional-projects-title"
        >
          Professional Projects
        </h2>

        <motion.button
          type="button"
          className="project-navigation-prompt"
          data-project-navigation-prompt
          onClick={onSeeProjects}
          aria-label="See projects"
          tabIndex={contentInteractive ? undefined : -1}
          whileHover={reduceMotion ? undefined : { scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <ProjectNavigationHint variant="home" startWhenVisible>
            <span style={{
              fontFamily: "'Google Sans', sans-serif",
              fontSize: '12px',
              fontWeight: '500',
              color: theme === 'dark' ? '#FFFFFF' : '#1A1A1A',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              transition: 'none'
            }}>
              See Projects
            </span>
          
            <motion.span
              animate={reduceMotion ? { y: 0 } : { y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <ChevronDown size={32} color={theme === 'dark' ? '#FFFFFF' : '#1A1A1A'} strokeWidth={2} />
            </motion.span>
          </ProjectNavigationHint>
        </motion.button>
      </div>
    </div>
  );
}
