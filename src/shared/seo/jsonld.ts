import { site } from "@/content/site";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type ProjectJsonLdInput = {
  title: string;
  description: string;
  path: string;
  keywords: string[];
};

type WebPageJsonLdInput = {
  title: string;
  description: string;
  path: string;
};

export function createPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    image: `${site.url}${site.image}`,
    jobTitle: site.profession,
    worksFor: {
      "@type": "Organization",
      name: site.employer,
    },
    sameAs: [site.social.github, site.social.linkedin, site.social.figma],
  };
}

export function createWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.title,
    url: site.url,
    description: site.description,
  };
}

export function createWebPageJsonLd({ title, description, path }: WebPageJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${site.url}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: site.title,
      url: site.url,
    },
  };
}

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function createProfilePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: site.name,
      url: site.url,
      jobTitle: site.profession,
      worksFor: {
        "@type": "Organization",
        name: site.employer,
      },
      sameAs: [site.social.github, site.social.linkedin, site.social.figma],
    },
  };
}

export function createProjectJsonLd({
  title,
  description,
  path,
  keywords,
}: ProjectJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url: `${site.url}${path}`,
    author: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    about: keywords,
    image: `${site.url}${site.image}`,
  };
}
