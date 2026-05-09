import { bishopAssets } from "@/shared/media/asset-paths";

export const bishopMediaAssets = {
  ...bishopAssets,
  videos: [
    "/assets/videos/bishop_demo.mp4",
    "/assets/videos/Bishop User Session 2.mp4",
    "/assets/videos/figma board.mp4",
    "/assets/videos/Bishop User Session.mp4",
    "/assets/videos/FigJam Board.mp4",
    "/assets/videos/bishop_demo_slowed.mp4",
    "/assets/images/bishop/annotate.mp4",
    "/assets/images/bishop/mobile_annotate.mp4",
    "/assets/images/bishop/client_video.mp4",
    "/assets/images/bishop/ai_detections.mp4",
    "/assets/images/bishop/map_demo.mp4",
  ],
  researchCarousel: [
    {
      src: "/assets/videos/Bishop User Session 2.mp4",
      className: "carousel-img-1",
      isVideo: true,
    },
    {
      src: "/assets/videos/figma board.mp4",
      className: "carousel-img-2",
      isVideo: true,
    },
    {
      src: "/assets/videos/Bishop User Session.mp4",
      className: "carousel-img-3",
      isVideo: true,
    },
    {
      src: "/assets/videos/FigJam Board.mp4",
      className: "carousel-img-4",
      isVideo: true,
    },
  ],
  personaCarousel: bishopAssets.personas.map((src, index) => ({
    src,
    className: `carousel-img-${index + 1}`,
    isVideo: false,
  })),
};
