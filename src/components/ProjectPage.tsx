import {
  ProjectPageSection,
  ProjectContainer,
  ProjectLeft,
  ProjectNumber,
  ProjectLaptopContainer,
  LaptopFrame,
  LaptopScreen,
  ProjectScreenshot,
  ProjectRight,
  ProjectSubtitle,
  ProjectDescription,
  ProjectTechStack,
  ProjectButton,
  ButtonArrow,
  DeviceContainer,
  DeviceFrame,
  DeviceScreen,
} from './ProjectPage.styles';
import laptopFrame from '../assets/images/pages/devices/laptop.png';
import ipadFrame from '../assets/images/pages/devices/ipad.png';
import iphoneFrame from '../assets/images/pages/devices/iphone.png';
import mmcFrame from '../assets/images/pages/devices/mmc.png';
import appleDisplayFrame from '../assets/images/pages/devices/apple-display.png';
import buttonArrow from '../assets/images/pages/button-arrow.svg';
import BubbleIn from './BubbleIn';

type DeviceType = 'laptop' | 'ipad' | 'iphone' | 'mmc' | 'apple-display';

interface ProjectPageProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string;
  buttonText?: string;
  buttonLink?: string;
  projectImage: string;
  device?: DeviceType;
}

const deviceFrames: Record<DeviceType, string> = {
  laptop: laptopFrame,
  ipad: ipadFrame,
  iphone: iphoneFrame,
  mmc: mmcFrame,
  'apple-display': appleDisplayFrame,
};

const ProjectPage = ({
  number,
  title,
  subtitle,
  description,
  techStack,
  buttonText = 'VIEW DETAILS',
  buttonLink,
  projectImage,
  device = 'laptop',
}: ProjectPageProps) => {
  const deviceFrame = deviceFrames[device];

  return (
    <ProjectPageSection>
      <ProjectContainer>
        <ProjectLeft>
          <ProjectNumber>
            {number} <strong>{title}</strong>
          </ProjectNumber>
          <BubbleIn>
            {device === 'laptop' ? (
              <ProjectLaptopContainer>
                <LaptopFrame src={deviceFrame} alt="Laptop frame" />
                <LaptopScreen>
                  <ProjectScreenshot src={projectImage} alt={title} />
                </LaptopScreen>
              </ProjectLaptopContainer>
            ) : (
              <DeviceContainer $device={device}>
                <DeviceFrame src={deviceFrame} alt={`${device} frame`} $device={device} />
                <DeviceScreen $device={device}>
                  <ProjectScreenshot src={projectImage} alt={title} />
                </DeviceScreen>
              </DeviceContainer>
            )}
          </BubbleIn>
        </ProjectLeft>

        <ProjectRight>
          <ProjectSubtitle>{subtitle}</ProjectSubtitle>
          <ProjectDescription>{description}</ProjectDescription>
          <ProjectTechStack>{techStack}</ProjectTechStack>
          {buttonLink && (
            <ProjectButton href={buttonLink} target="_blank" rel="noopener noreferrer">
              <span>{buttonText}</span>
              <ButtonArrow src={buttonArrow} alt="" />
            </ProjectButton>
          )}
        </ProjectRight>
      </ProjectContainer>
    </ProjectPageSection>
  );
};

export default ProjectPage;
