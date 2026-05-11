import type { ProjectDevice } from "@/features/home/data/projects";

export type PortfolioProject = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  route: string;
  number: string;
  description: string;
  seoDescription: string;
  techStack: string;
  device: ProjectDevice;
  seoPriority: number;
  keywords: string[];
  problem: string;
  role: string;
  outcome: string;
  applicationSummary: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "aerot",
    slug: "aerot",
    title: "AEROT",
    subtitle: "Signal Training Tool",
    route: "/projects/aerot",
    number: "01",
    description:
      "From ideation to MVP, AeroT is the friendly force EM training tool for the United States Marine Corps.",
    seoDescription:
      "AEROT is a signal training application led by Patrick Sherlund from ideation through MVP for Marine Corps electromagnetic training workflows.",
    techStack: "Full-stack, C++, Typescript, React",
    device: "laptop",
    seoPriority: 1,
    keywords: ["AEROT", "signal training tool", "Marine Corps", "C++", "TypeScript", "React"],
    problem:
      "Training teams needed a practical way to simulate and evaluate electromagnetic workflows without relying on disconnected tools or manual coordination.",
    role:
      "Patrick Sherlund drove the product from early concept through MVP delivery, shaping the workflow, frontend experience, and supporting full-stack implementation.",
    outcome:
      "The result was a focused training tool built for military operators who needed clearer instruction loops, faster scenario setup, and more realistic practice conditions.",
    applicationSummary:
      "This project shows product ownership, full-stack execution, and defense-oriented application delivery.",
  },
  {
    id: "bishop",
    slug: "bishop",
    title: "BISHOP",
    subtitle: "SAR Video Intelligence",
    route: "/bishop",
    number: "01",
    description:
      "Transforms hours of mission footage into actionable intelligence in minutes using edge-optimized computer vision for Search and Rescue.",
    seoDescription:
      "Bishop is a search and rescue video intelligence case study by Patrick Sherlund covering edge computer vision, mission review workflows, and rapid human-detection analysis.",
    techStack: "C++, TypeScript, React, Drogon, ONNX",
    device: "ipad",
    seoPriority: 2,
    keywords: ["Bishop", "search and rescue", "computer vision", "ONNX", "React", "Drogon"],
    problem:
      "Search and rescue teams lose critical time when operators must manually review large volumes of drone footage under fatigue and time pressure.",
    role:
      "Patrick Sherlund engineered the video intelligence workflow and supporting product experience to surface human detections faster and reduce review burden.",
    outcome:
      "Bishop turned raw footage into prioritized leads, reducing time-to-first-find and demonstrating measurable throughput and usability improvements.",
    applicationSummary:
      "This project demonstrates applied AI, mission-critical UX, and end-to-end ownership in a high-stakes environment.",
  },
  {
    id: "sparta",
    slug: "sparta",
    title: "SPARTA",
    subtitle: "Maritime Radar Tracker",
    route: "/projects/sparta",
    number: "03",
    description:
      "Cross-platform radar tracking application that integrates commercial drones to automate maritime target acquisition and data forwarding for 450+ users.",
    seoDescription:
      "SPARTA is a maritime radar tracking application by Patrick Sherlund combining drone integration, target acquisition workflows, and cross-platform operational software.",
    techStack: "Java, Kotlin, Spring, TypeScript, React",
    device: "iphone",
    seoPriority: 3,
    keywords: ["SPARTA", "maritime radar", "target acquisition", "Java", "Kotlin", "React"],
    problem:
      "Operators needed a dependable way to track maritime targets and move sensor data quickly between systems without slowing mission execution.",
    role:
      "Patrick Sherlund contributed to the application design and software delivery across frontend and backend surfaces supporting operational users.",
    outcome:
      "SPARTA supported large-scale usage with streamlined tracking, automated forwarding, and better operational awareness across teams.",
    applicationSummary:
      "This project highlights cross-platform systems work, mission software, and multi-user operational tooling.",
  },
  {
    id: "raider",
    slug: "raider",
    title: "RAIDER",
    subtitle: "RF Alerting Plugin",
    route: "/projects/raider",
    number: "04",
    description:
      "Windows TAK plugin that automates signal violation detection, reducing analysis time from days to seconds through real-time event processing.",
    seoDescription:
      "RAIDER is an RF alerting plugin by Patrick Sherlund for WinTAK workflows, real-time event processing, and rapid signal violation detection.",
    techStack: "C#, .NET, WinTAK, Hardware APIs",
    device: "mmc",
    seoPriority: 4,
    keywords: ["RAIDER", "RF alerting", "WinTAK", ".NET", "C#", "hardware APIs"],
    problem:
      "Signal violations were slow to detect and investigate when analysts had to manually correlate events across hardware and TAK workflows.",
    role:
      "Patrick Sherlund built plugin functionality around real-time event handling and hardware integration for analyst-facing operations.",
    outcome:
      "RAIDER compressed analysis from days to seconds and gave operators an immediate path from detection to action.",
    applicationSummary:
      "This project demonstrates desktop plugin engineering, real-time processing, and hardware-adjacent application work.",
  },
  {
    id: "exodus",
    slug: "exodus",
    title: "EXODUS",
    subtitle: "Biometric Identity Tool",
    route: "/projects/exodus",
    number: "05",
    description:
      "On-device computer vision pipeline that processes identity documents in sub-second speeds for field operations without relying on cloud connectivity.",
    seoDescription:
      "EXODUS is a biometric identity tool by Patrick Sherlund focused on on-device computer vision, OCR pipelines, and offline field-ready document processing.",
    techStack: "Java, Kotlin, Android SDK, ONNX, OCR",
    device: "apple-display",
    seoPriority: 5,
    keywords: ["EXODUS", "biometric identity", "OCR", "Android SDK", "ONNX", "computer vision"],
    problem:
      "Field users needed identity processing that worked quickly and reliably in disconnected environments where cloud dependence was not acceptable.",
    role:
      "Patrick Sherlund helped deliver the on-device processing experience and supporting application workflow around identity-document handling.",
    outcome:
      "EXODUS enabled fast document processing in the field with local inference and operationally useful turnaround times.",
    applicationSummary:
      "This project demonstrates mobile software, on-device AI, and field-ready application design.",
  },
  {
    id: "crusader",
    slug: "crusader",
    title: "CRUSADER",
    subtitle: "Radar Control & Tracking",
    route: "/projects/crusader",
    number: "06",
    description:
      "Full-stack radar control system with predictive tracking, clutter filtering, and target detection algorithms for Navico and Furuno hardware integration.",
    seoDescription:
      "CRUSADER is a radar control and tracking system by Patrick Sherlund featuring predictive tracking, clutter filtering, and hardware-integrated full-stack software.",
    techStack: "TypeScript, React, C++, Drogon",
    device: "apple-display",
    seoPriority: 6,
    keywords: ["CRUSADER", "radar control", "predictive tracking", "React", "C++", "Drogon"],
    problem:
      "Radar operators needed modern control software that could pair low-level hardware integration with clear interfaces and useful target tracking behavior.",
    role:
      "Patrick Sherlund contributed across the software stack to support detection, tracking, and interface workflows tied to commercial radar hardware.",
    outcome:
      "CRUSADER brought control, filtering, and tracking into one operational system with hardware-specific integration requirements.",
    applicationSummary:
      "This project highlights full-stack systems engineering, radar software, and hardware integration depth.",
  },
];

export const featuredProjects = portfolioProjects.filter((project) => project.slug !== "bishop");

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
