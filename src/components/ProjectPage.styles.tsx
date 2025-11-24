import styled from '@emotion/styled';

export const ProjectPageSection = styled.section`
  width: 100%;
  background-color: #E7F4FF;
  padding: 0;
  min-height: 800px;
  display: flex;
  align-items: center;
`;

export const ProjectContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 100px;
  display: flex;
  align-items: center;
  gap: 120px;
  width: 100%;

  @media (max-width: 1200px) {
    padding: 0 80px;
    gap: 100px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    padding: 80px 60px;
    gap: 60px;
  }

  @media (max-width: 768px) {
    padding: 60px 40px;
    gap: 48px;
  }

  @media (max-width: 576px) {
    padding: 40px 24px;
    gap: 40px;
  }
`;

export const ProjectLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ProjectNumber = styled.div`
  font-family: 'Google Sans', sans-serif;
  font-size: 64px;
  font-weight: 400;
  color: #1A1A1A;
  margin-bottom: 80px;
  letter-spacing: -0.01em;

  strong {
    font-weight: 700;
  }

  @media (max-width: 1200px) {
    font-size: 56px;
    margin-bottom: 60px;
  }

  @media (max-width: 992px) {
    font-size: 48px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 32px;
  }

  @media (max-width: 576px) {
    font-size: 32px;
    margin-bottom: 24px;
  }
`;

export const ProjectLaptopContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
`;

export const LaptopFrame = styled.img`
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  z-index: 2;
`;

export const LaptopScreen = styled.div`
  position: absolute;
  top: 5.8%;
  left: 14.2%;
  width: 71.6%;
  height: 75.5%;
  overflow: hidden;
  border-radius: 3px;
  z-index: 1;
`;

export const ProjectScreenshot = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProjectRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
`;

export const ProjectSubtitle = styled.h2`
  font-family: 'Google Sans', sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: #1A1A1A;
  margin: 0 0 8px 0;
  line-height: 1.2;

  @media (max-width: 1200px) {
    font-size: 36px;
  }

  @media (max-width: 992px) {
    font-size: 32px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const ProjectDescription = styled.p`
  font-family: 'Google Sans', sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: #1A1A1A;
  margin: 0 0 12px 0;
  line-height: 1.5;

  @media (max-width: 1200px) {
    font-size: 18px;
  }

  @media (max-width: 992px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const ProjectTechStack = styled.p`
  font-family: 'Google Sans', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #1A1A1A;
  margin: 0 0 24px 0;

  @media (max-width: 1200px) {
    font-size: 18px;
  }

  @media (max-width: 992px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const ProjectButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 14px 32px;
  border: 2px solid #1A1A1A;
  border-radius: 4px;
  background-color: transparent;
  font-family: 'Google Sans', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #1A1A1A;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  width: fit-content;
  letter-spacing: 1px;

  &:hover {
    background-color: #1A1A1A;
    color: #FFFFFF;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:hover img {
    filter: brightness(0) invert(1);
  }

  @media (max-width: 768px) {
    padding: 12px 28px;
    font-size: 13px;
  }
`;

export const ButtonArrow = styled.img`
  width: 18px;
  height: 18px;
  transition: filter 0.3s ease;
`;

// Generic device container for non-laptop devices
export const DeviceContainer = styled.div<{ $device: string }>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $device }) => {
    switch ($device) {
      case 'ipad':
        return `max-width: 600px;`;
      case 'iphone':
        return `max-width: 300px;`;
      case 'mmc':
        return `max-width: 600px;`;
      case 'apple-display':
        return `max-width: 600px;`;
      default:
        return `max-width: 600px;`;
    }
  }}
`;

export const DeviceFrame = styled.img<{ $device: string }>`
  width: 100%;
  height: auto;
  display: block;
  position: relative;
`;

export const DeviceScreen = styled.div<{ $device: string }>`
  position: absolute;
  overflow: hidden;
  z-index: 1;

  ${({ $device }) => {
    switch ($device) {
      case 'ipad':
        return `
          top: 6.5%;
          left: 7.5%;
          width: 85%;
          height: 87%;
          border-radius: 4px;
        `;
      case 'iphone':
        return `
          top: 3.5%;
          left: 6%;
          width: 88%;
          height: 93%;
          border-radius: 8px;
        `;
      case 'mmc':
        return `
          top: 3%;
          left: 3%;
          width: 94%;
          height: 94%;
          border-radius: 2px;
        `;
      case 'apple-display':
        return `
          top: 4.5%;
          left: 4.5%;
          width: 91%;
          height: 84%;
          border-radius: 3px;
        `;
      default:
        return `
          top: 5%;
          left: 5%;
          width: 90%;
          height: 90%;
          border-radius: 3px;
        `;
    }
  }}
`;
