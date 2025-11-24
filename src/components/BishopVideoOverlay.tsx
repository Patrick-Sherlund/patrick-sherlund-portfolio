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
  width: 'auto';
  height: 75%;
  margin-top: -6%;
  margin-left: -7%;
  object-fit: cover;
  border-radius: 4px;
`;

const BishopVideoOverlay = () => {
  return (
    <VideoContainer>
      <Video
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/videos/bishop_demo.mp4" type="video/mp4" />
      </Video>
    </VideoContainer>
  );
};

export default BishopVideoOverlay;
