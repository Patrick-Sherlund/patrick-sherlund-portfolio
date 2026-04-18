'use client';

import BubbleIn from './BubbleIn';
import { useTheme } from '../contexts/ThemeContext';
import { ProjectButtonArrow } from './ProjectButtonArrow';
import Link from 'next/link';
import { pageAssets } from '@/lib/assetPaths';

type DeviceType = 'laptop' | 'ipad' | 'iphone' | 'mmc' | 'apple-display';

interface ProjectPageProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string;
  buttonText?: string;
  buttonLink?: string;
  projectImage: string | React.ReactNode;
  device?: DeviceType;
}

const deviceFrames: Record<DeviceType, string> = {
  laptop: pageAssets.devices.laptop,
  ipad: pageAssets.devices.ipad,
  iphone: pageAssets.devices.iphone,
  mmc: pageAssets.devices.mmc,
  'apple-display': pageAssets.devices.appleDisplay,
};

export function ProjectPage({
  number,
  title,
  subtitle,
  description,
  techStack,
  buttonText = 'VIEW DETAILS',
  buttonLink,
  projectImage,
  device = 'laptop',
}: ProjectPageProps) {
  useTheme();
  const deviceFrame = deviceFrames[device];

  return (
    <section className="project-page-section">
      <div className="project-container">
        <div className="project-left">
          <BubbleIn>
            <div className="project-number">
              {number} <strong>{title}</strong>
            </div>
          </BubbleIn>
          <BubbleIn>
            {device === 'laptop' ? (
              <div className="project-laptop-container">
                <div className="laptop-screen">
                  {typeof projectImage === 'string' ? (
                    <img src={projectImage} alt={title} className="project-screenshot" />
                  ) : (
                    projectImage
                  )}
                </div>
                <img 
                  src={deviceFrame}
                  alt="Laptop frame" 
                  className="laptop-frame"
                />
              </div>
            ) : (
              <div className={`device-container device-${device}`}>
                <div className={`device-screen device-screen-${device}`}>
                  {typeof projectImage === 'string' ? (
                    <img src={projectImage} alt={title} className="project-screenshot" />
                  ) : (
                    projectImage
                  )}
                </div>
                <img 
                  src={deviceFrame}
                  alt={`${device} frame`} 
                  className={`device-frame device-frame-${device}`}
                />
              </div>
            )}
          </BubbleIn>
        </div>

        <div className="project-right">
          <BubbleIn>
            <h2 className="project-subtitle">{subtitle}</h2>
          </BubbleIn>
          <BubbleIn>
            <p className="project-description">{description}</p>
          </BubbleIn>
          <BubbleIn>
            <p className="project-tech-stack">{techStack}</p>
          </BubbleIn>
          {buttonLink && (
            <BubbleIn>
              {buttonLink.startsWith('/') ? (
                <Link 
                  href={buttonLink}
                  className="project-button"
                >
                  <span>{buttonText}</span>
                  <ProjectButtonArrow />
                </Link>
              ) : (
                <a 
                  href={buttonLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  <span>{buttonText}</span>
                  <ProjectButtonArrow />
                </a>
              )}
            </BubbleIn>
          )}
        </div>
      </div>
    </section>
  );
}
