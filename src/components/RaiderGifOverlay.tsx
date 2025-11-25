import styled from '@emotion/styled';

const VideoContainer = styled.div`
  margin-top: -1%;
  margin-left: -1%;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Video = styled.video`
  width: 74%;
  height: 72%;
  object-fit: cover;
  border-radius: 2px;
`;

const RaiderGifOverlay = () => {
  return (
    <VideoContainer>
      <Video
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/videos/raider.mp4" type="video/mp4" />
      </Video>
    </VideoContainer>
  );
};

export default RaiderGifOverlay;
