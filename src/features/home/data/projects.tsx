import type { ReactNode } from "react";
import { VideoOverlay } from "@/shared/components/VideoOverlay";
import { portfolioProjects } from "@/content/portfolio";

export type ProjectDevice =
  | "laptop"
  | "ipad"
  | "iphone"
  | "mmc"
  | "apple-display";

export type ProjectCategory = "software-engineering" | "product-design";

export type ProjectSummary = {
  id: string;
  category: ProjectCategory;
  sectionId: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string;
  buttonText?: string;
  buttonLink?: string;
  device: ProjectDevice;
  media: ReactNode;
  seoPriority: number;
};

function DesignSystemPlaceholder({ title }: { title: string }) {
  return (
    <div className="project-design-placeholder">
      <div className="project-design-placeholder-sidebar">
        <span />
        <span />
        <span />
      </div>
      <div className="project-design-placeholder-content">
        <div className="project-design-placeholder-bar" />
        <div className="project-design-placeholder-grid">
          <span />
          <span />
          <span />
          <span />
        </div>
        <strong>{title}</strong>
      </div>
    </div>
  );
}

export const projects: ProjectSummary[] = [
  {
    id: "aerot",
    category: "software-engineering",
    sectionId: "aerot-section",
    number: "01",
    title: "AEROT",
    subtitle: "Signal Training Tool",
    description:
      "From ideation to MVP, AeroT is the friendly force EM training tool for the United States Marine Corps.",
    techStack: "Full-stack, C++, Typescript, React",
    buttonText: "VIEW DETAILS",
    buttonLink: portfolioProjects[0].route,
    device: "laptop",
    media: <VideoOverlay src="/assets/videos/aerot.mp4" className="video-container" />,
    seoPriority: 1,
  },
  {
    id: "bishop",
    category: "software-engineering",
    sectionId: "bishop-section",
    number: "02",
    title: "BISHOP",
    subtitle: "SAR Video Intelligence",
    description:
      "Transforms hours of mission footage into actionable intelligence in minutes using edge-optimized computer vision for Search and Rescue.",
    techStack: "C++, TypeScript, React, Drogon, ONNX",
    buttonText: "VIEW DETAILS",
    buttonLink: portfolioProjects[1].route,
    device: "ipad",
    media: (
      <VideoOverlay
        src="/assets/videos/bishop_demo.mp4"
        wrapperStyle={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        videoStyle={{
          width: "auto",
          height: "75%",
          marginTop: "-6%",
          marginLeft: "-7%",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />
    ),
    seoPriority: 2,
  },
  {
    id: "sparta",
    category: "software-engineering",
    sectionId: "sparta-section",
    number: "03",
    title: "SPARTA",
    subtitle: "Maritime Radar Tracker",
    description:
      "Cross-platform radar tracking application that integrates commercial drones to automate maritime target acquisition and data forwarding for 450+ users.",
    techStack: "Java, Kotlin, Spring, TypeScript, React",
    buttonText: "VIEW DETAILS",
    buttonLink: portfolioProjects[2].route,
    device: "iphone",
    media: (
      <VideoOverlay
        src="/assets/videos/sparta.mp4"
        wrapperStyle={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        videoStyle={{
          width: "92%",
          height: "92%",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
    ),
    seoPriority: 3,
  },
  {
    id: "raider",
    category: "software-engineering",
    sectionId: "raider-section",
    number: "04",
    title: "RAIDER",
    subtitle: "RF Alerting Plugin",
    description:
      "Windows TAK plugin that automates signal violation detection, reducing analysis time from days to seconds through real-time event processing.",
    techStack: "C#, .NET, WinTAK, Hardware APIs",
    buttonText: "VIEW DETAILS",
    buttonLink: portfolioProjects[3].route,
    device: "mmc",
    media: (
      <VideoOverlay
        src="/assets/videos/raider.mp4"
        wrapperStyle={{
          marginTop: "-1%",
          marginLeft: "-1%",
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        videoStyle={{
          width: "74%",
          height: "72%",
          objectFit: "cover",
          borderRadius: "2px",
        }}
      />
    ),
    seoPriority: 4,
  },
  {
    id: "exodus",
    category: "software-engineering",
    sectionId: "exodus-section",
    number: "05",
    title: "EXODUS",
    subtitle: "Biometric Identity Tool",
    description:
      "On-device computer vision pipeline that processes identity documents in sub-second speeds for field operations without relying on cloud connectivity.",
    techStack: "Java, Kotlin, Android SDK, ONNX, OCR",
    buttonText: "VIEW DETAILS",
    buttonLink: portfolioProjects[4].route,
    device: "apple-display",
    media: (
      <VideoOverlay
        src="/assets/videos/exodus.mp4"
        wrapperStyle={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        videoStyle={{
          width: "95%",
          height: "100%",
          objectFit: "fill",
          borderRadius: "3px",
        }}
      />
    ),
    seoPriority: 5,
  },
  {
    id: "crusader",
    category: "software-engineering",
    sectionId: "crusader-section",
    number: "06",
    title: "CRUSADER",
    subtitle: "Radar Control & Tracking",
    description:
      "Full-stack radar control system with predictive tracking, clutter filtering, and target detection algorithms for Navico and Furuno hardware integration.",
    techStack: "TypeScript, React, C++, Drogon",
    buttonText: "VIEW DETAILS",
    buttonLink: portfolioProjects[5].route,
    device: "apple-display",
    media: (
      <VideoOverlay
        src="/assets/videos/crusader.mp4"
        wrapperStyle={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        videoStyle={{
          width: "95%",
          height: "100%",
          objectFit: "fill",
          borderRadius: "3px",
        }}
      />
    ),
    seoPriority: 6,
  },
  {
    id: "atak-design-system",
    category: "product-design",
    sectionId: "atak-design-system-section",
    number: "01",
    title: "ATAK Design System",
    subtitle: "Design System",
    description:
      "A structured placeholder for a future ATAK design system project.",
    techStack: "Product Design, Design Systems",
    device: "laptop",
    media: <DesignSystemPlaceholder title="ATAK Design System" />,
    seoPriority: 7,
  },
  {
    id: "wintak-design-system",
    category: "product-design",
    sectionId: "wintak-design-system-section",
    number: "02",
    title: "WinTAK Design System",
    subtitle: "Design System",
    description:
      "A structured placeholder for a future WinTAK design system project.",
    techStack: "Product Design, Design Systems",
    device: "laptop",
    media: <DesignSystemPlaceholder title="WinTAK Design System" />,
    seoPriority: 8,
  },
];
