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
  role?: string;
  yearRange?: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string;
  buttonText?: string;
  buttonLink?: string;
  device: ProjectDevice;
  useDeviceFrame?: boolean;
  media: ReactNode;
  seoPriority: number;
};

function getPortfolioProjectRoute(id: string, fallback: string) {
  return portfolioProjects.find((project) => project.id === id)?.route ?? fallback;
}

export const projects: ProjectSummary[] = [
  {
    id: "sparta",
    category: "software-engineering",
    sectionId: "sparta-section",
    number: "01",
    role: "Software Engineer",
    yearRange: "2022 - 2024",
    title: "SPARTA",
    subtitle: "Maritime Radar Tracker",
    description:
      "Cross-platform radar tracking application that integrates commercial drones to automate maritime target acquisition and data forwarding for 450+ users.",
    techStack: "Java, Kotlin, Spring, TypeScript, React",
    buttonText: "VIEW DETAILS",
    buttonLink: getPortfolioProjectRoute("sparta", "/projects/sparta"),
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
    seoPriority: 1,
  },
  {
    id: "raider",
    category: "software-engineering",
    sectionId: "raider-section",
    number: "02",
    role: "Software Engineer",
    yearRange: "2023 - 2024",
    title: "RAIDER",
    subtitle: "RF Alerting Plugin",
    description:
      "Windows TAK plugin that automates signal violation detection, reducing analysis time from days to seconds through real-time event processing.",
    techStack: "C#, .NET, WinTAK, Hardware APIs",
    buttonText: "VIEW DETAILS",
    buttonLink: getPortfolioProjectRoute("raider", "/projects/raider"),
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
    seoPriority: 2,
  },
  {
    id: "exodus",
    category: "software-engineering",
    sectionId: "exodus-section",
    number: "03",
    role: "Senior Software Engineer",
    yearRange: "2024 - 2025",
    title: "EXODUS",
    subtitle: "Biometric Identity Tool",
    description:
      "On-device computer vision pipeline that processes identity documents in sub-second speeds for field operations without relying on cloud connectivity.",
    techStack: "Java, Kotlin, Android SDK, ONNX, OCR",
    buttonText: "VIEW DETAILS",
    buttonLink: getPortfolioProjectRoute("exodus", "/projects/exodus"),
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
    seoPriority: 3,
  },
  {
    id: "aerot",
    category: "software-engineering",
    sectionId: "aerot-section",
    number: "04",
    role: "Senior Software Engineer",
    yearRange: "2024 - 2026",
    title: "AEROT",
    subtitle: "Signal Training Tool",
    description:
      "From ideation to MVP, AeroT is the friendly force EM training tool for the United States Marine Corps.",
    techStack: "Full-stack, C++, Typescript, React",
    buttonText: "VIEW DETAILS",
    buttonLink: getPortfolioProjectRoute("aerot", "/projects/aerot"),
    device: "laptop",
    media: <VideoOverlay src="/assets/videos/aerot.mp4" className="video-container" />,
    seoPriority: 4,
  },
  {
    id: "crusader",
    category: "software-engineering",
    sectionId: "crusader-section",
    number: "05",
    role: "Senior Software Engineer",
    yearRange: "2024 - 2026",
    title: "CRUSADER",
    subtitle: "Radar Control & Tracking",
    description:
      "Full-stack radar control system with predictive tracking, clutter filtering, and target detection algorithms for Navico and Furuno hardware integration.",
    techStack: "TypeScript, React, C++, Drogon",
    buttonText: "VIEW DETAILS",
    buttonLink: getPortfolioProjectRoute("crusader", "/projects/crusader"),
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
    seoPriority: 5,
  },
  {
    id: "bishop",
    category: "software-engineering",
    sectionId: "bishop-section",
    number: "06",
    role: "Co-Founder / Lead Software Engineer",
    yearRange: "2025 - 2026",
    title: "BISHOP",
    subtitle: "SAR Video Intelligence",
    description:
      "Transforms hours of mission footage into actionable intelligence in minutes using edge-optimized computer vision for Search and Rescue.",
    techStack: "C++, TypeScript, React, Drogon, ONNX",
    buttonText: "VIEW DETAILS",
    buttonLink: getPortfolioProjectRoute("bishop", "/bishop"),
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
    seoPriority: 6,
  },
  {
    id: "atak-design-system",
    category: "product-design",
    sectionId: "atak-design-system-section",
    number: "01",
    role: "Senior Software Engineer, Design Systems Lead",
    yearRange: "2024 - 2026",
    title: "ATAK",
    subtitle: "Design System",
    description:
      "Designed and built a reusable design system for Android Tactical Assault Kit (ATAK) plugin interfaces, standardizing Android UI patterns, component libraries, and interaction states across mission-focused workflows.",
    techStack: "Product Design, Design Systems",
    device: "laptop",
    useDeviceFrame: false,
    media: (
      <img
        src="/assets/images/home/design/atak_design_system_hero.png"
        alt="ATAK Design System"
        className="project-design-system-hero"
      />
    ),
    seoPriority: 7,
  },
  {
    id: "wintak-design-system",
    category: "product-design",
    sectionId: "wintak-design-system-section",
    number: "02",
    role: "Software Engineer, Design Systems Lead",
    yearRange: "2023 - 2026",
    title: "WinTAK",
    subtitle: "Design System",
    description:
      "Designed and built a reusable design system for Windows Tactical Assault Kit (WinTAK) plugin interfaces, standardizing Windows UI patterns, component libraries, and interaction states across mission-focused workflows.",
    techStack: "Product Design, Design Systems",
    device: "laptop",
    useDeviceFrame: false,
    media: (
      <img
        src="/assets/images/home/design/wintak_design_system_hero.png"
        alt="WinTAK Design System"
        className="project-design-system-hero"
      />
    ),
    seoPriority: 8,
  },
];
