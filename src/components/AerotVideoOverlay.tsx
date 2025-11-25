import styled from '@emotion/styled';

const VideoContainer = styled.div`

  margin-top: -17%;
  margin-left: -2.7%;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Video = styled.video`
  width: 92%;
  height: 60%;
  object-fit: fill;
  border-radius: 3px;
`;

const AerotVideoOverlay = () => {
  return (
    <VideoContainer>
      <Video
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/videos/aerot.mp4" type="video/mp4" />
      </Video>
    </VideoContainer>
  );
};

export default AerotVideoOverlay;
