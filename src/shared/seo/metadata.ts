import type { Metadata } from "next";
import { site } from "@/content/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
}: MetadataInput): Metadata {
  const url = `${site.url}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_US",
      type,
      images: [
        {
          url: site.image,
          width: 1200,
          height: 630,
          alt: `${title} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [site.image],
    },
  };
}

export const homeMetadata = createPageMetadata({
  title: "Patrick Sherlund | Software Engineer Portfolio",
  description:
    "Patrick Sherlund software engineer portfolio featuring defense applications, AI and radar projects, case studies, and technical project pages.",
  path: "/",
  keywords: [
    "Patrick Sherlund",
    "Patrick Sherlund portfolio",
    "Patrick Sherlund software engineer",
    "software engineer portfolio",
    "defense software engineer",
    "application case studies",
  ],
});

export const aboutMetadata = createPageMetadata({
  title: "About Patrick Sherlund",
  description:
    "About Patrick Sherlund, a senior software engineer building mission software, computer vision systems, radar applications, and technical product case studies.",
  path: "/about",
  keywords: [
    "About Patrick Sherlund",
    "Patrick Sherlund resume",
    "Patrick Sherlund applications",
    "Patrick Sherlund software engineer",
  ],
});

export const projectsMetadata = createPageMetadata({
  title: "Projects by Patrick Sherlund",
  description:
    "Project directory for Patrick Sherlund covering AEROT, Bishop, SPARTA, RAIDER, EXODUS, and CRUSADER applications.",
  path: "/projects",
  keywords: [
    "Patrick Sherlund projects",
    "software projects",
    "application portfolio",
    "Bishop case study",
  ],
});

export const bishopMetadata = createPageMetadata({
  title: "Bishop Case Study",
  description:
    "Bishop search and rescue video intelligence case study by Patrick Sherlund covering edge computer vision, mission review, and SAR workflows.",
  path: "/bishop",
  keywords: [
    "Bishop case study",
    "Patrick Sherlund Bishop",
    "search and rescue software",
    "video intelligence",
  ],
  type: "article",
});
