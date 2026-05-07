import type { Metadata } from "next";

export const site = {
  name: "Patrick Sherlund",
  title: "Patrick Sherlund | Software Engineer Portfolio",
  description:
    "Software engineer portfolio for Patrick Sherlund featuring defense, computer vision, radar, and search-and-rescue applications, project case studies, and technical work samples.",
  url: "https://patricksherlund.com",
  image: "/assets/images/home/patrick-light.png",
  profession: "Senior Software Engineer",
  employer: "Marine Corps Software Factory",
  location: "United States",
  social: {
    github: "https://github.com/Patrick-Sherlund",
    linkedin: "https://www.linkedin.com/in/patrick-sherlund/",
    figma: "https://www.figma.com/@patricksherlund",
  },
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | Patrick Sherlund",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_US",
    images: [
      {
        url: site.image,
        width: 1200,
        height: 630,
        alt: `${site.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.image],
  },
};
