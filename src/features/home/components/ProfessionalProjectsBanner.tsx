'use client';

import { useState, useEffect } from 'react';
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
  { id: "product-design", label: "Product Design" },
];

export function ProfessionalProjectsBanner({
  activeCategory,
  firstProjectSectionId,
  onCategoryChange,
}: ProfessionalProjectsBannerProps) {
  const { theme } = useTheme();
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const fadePoint = windowHeight * 0.4;
      const newOpacity = Math.max(0, 1 - (scrolled / fadePoint));
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    const projectSection = document.getElementById(firstProjectSectionId);
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        opacity: opacity,
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

        <div className="project-category-controls" aria-label="Project category">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              aria-pressed={activeCategory === category.id}
              className={`project-category-tab${activeCategory === category.id ? " active" : ""}`}
              onClick={() => onCategoryChange(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <motion.div
          onClick={scrollToProjects}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
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
