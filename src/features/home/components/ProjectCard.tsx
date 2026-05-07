'use client';

import Link from 'next/link';
import BubbleIn from '@/features/motion/BubbleIn';
import type { ProjectSummary } from '../data/projects';
import { ProjectButtonArrow } from './ProjectButtonArrow';
import { DeviceFrame } from '@/shared/components/DeviceFrame';

type ProjectCardProps = Omit<ProjectSummary, "id" | "category" | "sectionId" | "seoPriority">;

export function ProjectCard({
  number,
  title,
  subtitle,
  description,
  techStack,
  buttonText = 'VIEW DETAILS',
  buttonLink,
  media,
  device = 'laptop',
}: ProjectCardProps) {
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
            <DeviceFrame device={device} title={title}>
              {media}
            </DeviceFrame>
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
