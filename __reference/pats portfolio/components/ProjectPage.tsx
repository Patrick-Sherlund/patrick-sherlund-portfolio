import './ProjectPage.css';
import BubbleIn from './BubbleIn';
import { useTheme } from '../contexts/ThemeContext';
import { ProjectButtonArrow } from './ProjectButtonArrow';
import { Link } from 'react-router-dom';

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
  laptop: 'https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/pages/devices/laptop.png',
  ipad: 'https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/pages/devices/ipad.png',
  iphone: 'https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/pages/devices/iphone.png',
  mmc: 'https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/pages/devices/mmc.png',
  'apple-display': 'https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/pages/devices/apple-display.png',
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
  const { theme } = useTheme();
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
                  to={buttonLink}
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