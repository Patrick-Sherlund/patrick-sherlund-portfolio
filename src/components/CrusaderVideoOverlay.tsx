import styled from '@emotion/styled';

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Video = styled.video`
  width: 95%;
  height: 100%;
  object-fit: fill;
  border-radius: 3px;
`;

const CrusaderVideoOverlay = () => {
  return (
    <VideoContainer>
      <Video
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/videos/crusader.mp4" type="video/mp4" />
      </Video>
    </VideoContainer>
  );
};

export default CrusaderVideoOverlay;
