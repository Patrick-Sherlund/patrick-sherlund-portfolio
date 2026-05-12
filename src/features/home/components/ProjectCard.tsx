'use client';

import Link from 'next/link';
import BubbleIn from '@/features/motion/BubbleIn';
import type { ProjectSummary } from '../data/projects';
import { ProjectButtonArrow } from './ProjectButtonArrow';
import { DeviceFrame } from '@/shared/components/DeviceFrame';

type ProjectCardProps = Omit<ProjectSummary, "id" | "category" | "sectionId" | "seoPriority">;

export function ProjectCard({
  number,
  role,
  yearRange,
  title,
  subtitle,
  description,
  techStack,
  buttonText = 'VIEW DETAILS',
  buttonLink,
  media,
  device = 'laptop',
  useDeviceFrame = true,
}: ProjectCardProps) {
  const projectTitle = buttonLink ? (
    buttonLink.startsWith('/') ? (
      <Link href={buttonLink} className="project-title-link">
        {title}
      </Link>
    ) : (
      <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="project-title-link">
        {title}
      </a>
    )
  ) : (
    title
  );

  const mediaContent = useDeviceFrame ? (
    <DeviceFrame device={device} title={title}>
      {media}
    </DeviceFrame>
  ) : (
    <div className="project-laptop-container">
      {media}
    </div>
  );

  return (
    <section className="project-page-section">
      <div className="project-container">
        <div className="project-left">
          <BubbleIn>
            <div className="project-number">
              <span>{number}</span>
              <div className="project-heading-text">
                <strong>{projectTitle}</strong>
                {(role || yearRange) && (
                  <span className="project-heading-meta">
                    {role && <span className="project-heading-role">{role}</span>}
                    {yearRange && <span className="project-heading-year">{yearRange}</span>}
                  </span>
                )}
              </div>
            </div>
          </BubbleIn>
          <BubbleIn>
            {buttonLink ? (
              buttonLink.startsWith('/') ? (
                <Link href={buttonLink} className="project-media-link" aria-label={`View ${title} case study`}>
                  {mediaContent}
                </Link>
              ) : (
                <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="project-media-link" aria-label={`View ${title} case study`}>
                  {mediaContent}
                </a>
              )
            ) : (
              mediaContent
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
          {buttonLink ? (
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
          ) : (
            <BubbleIn>
              <button type="button" className="project-button project-button-placeholder" disabled>
                <span>{buttonText}</span>
                <ProjectButtonArrow />
              </button>
            </BubbleIn>
          )}
        </div>
      </div>
    </section>
  );
}
