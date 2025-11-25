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
  width: 92%;
  height: 92%;
  object-fit: cover;
  border-radius: 8px;
`;

const SpartaGifOverlay = () => {
  return (
    <VideoContainer>
      <Video
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/videos/sparta.mp4" type="video/mp4" />
      </Video>
    </VideoContainer>
  );
};

export default SpartaGifOverlay;
