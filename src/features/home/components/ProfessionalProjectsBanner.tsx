'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '@/features/theme/ThemeProvider';
import type { ProjectCategory } from '../data/projects';

type ProfessionalProjectsBannerProps = {
  activeCategory: ProjectCategory;
  firstProjectSectionId: string;
  onCategoryChange: (category: ProjectCategory) => void;
};

const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "software-engineering", label: "Software Engineering" },
  { id: "product-design", label: "Design Systems" },
];

export function ProfessionalProjectsBanner({
  activeCategory,
  firstProjectSectionId,
  onCategoryChange,
}: ProfessionalProjectsBannerProps) {
  const { theme } = useTheme();
  const stickyControlsRef = useRef<HTMLDivElement | null>(null);
  const [contentFadeProgress, setContentFadeProgress] = useState(0);
  const [stickyFadeProgress, setStickyFadeProgress] = useState(0);
  const [dimmedStickyTabs, setDimmedStickyTabs] = useState<Record<ProjectCategory, boolean>>({
    "software-engineering": false,
    "product-design": false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const contentFadeDistance = windowHeight * 0.4;
      const stickyFadeDistance = windowHeight * 0.18;
      const newContentFadeProgress = Math.min(1, Math.max(0, scrolled / contentFadeDistance));
      const newStickyFadeProgress = Math.min(1, Math.max(0, (scrolled - contentFadeDistance) / stickyFadeDistance));
      setContentFadeProgress(newContentFadeProgress);
      setStickyFadeProgress(newStickyFadeProgress);

      const stickyTabs = Array.from(
        stickyControlsRef.current?.querySelectorAll<HTMLButtonElement>('.project-category-tab') ?? []
      );
      const overlapTargets = Array.from(
        document.querySelectorAll<HTMLElement>(
          '.project-number, .project-laptop-container, .laptop-screen, .laptop-frame, .video-container, .video-container video, .device-container, .project-subtitle, .project-description, .project-tech-stack, .project-button'
        )
      );
      const targetRects = overlapTargets.map((target) => target.getBoundingClientRect());
      const nextDimmedStickyTabs = projectCategories.reduce<Record<ProjectCategory, boolean>>((dimmedTabs, category) => {
        const tab = stickyTabs.find((stickyTab) => stickyTab.dataset.category === category.id);
        const tabRect = tab?.getBoundingClientRect();
        dimmedTabs[category.id] = Boolean(tabRect && targetRects.some((targetRect) => (
          tabRect.left < targetRect.right &&
          tabRect.right > targetRect.left &&
          tabRect.top < targetRect.bottom &&
          tabRect.bottom > targetRect.top
        )));
        return dimmedTabs;
      }, {
        "software-engineering": false,
        "product-design": false,
      });
      setDimmedStickyTabs(nextDimmedStickyTabs);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [firstProjectSectionId]);

  const scrollToProjects = () => {
    const projectSection = document.getElementById(firstProjectSectionId);
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        className={`project-category-tab${activeCategory === category.id ? " active" : ""}${isSticky && dimmedStickyTabs[category.id] ? " project-category-tab-dimmed" : ""}`}
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
        ref={stickyControlsRef}
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

        <motion.div
          onClick={scrollToProjects}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            cursor: 'pointer'
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
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
          
          <motion.div
            animate={{
              y: [0, 8, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <ChevronDown size={32} color={theme === 'dark' ? '#FFFFFF' : '#1A1A1A'} strokeWidth={2} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
