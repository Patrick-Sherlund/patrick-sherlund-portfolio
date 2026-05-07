import type { MetadataRoute } from "next";
import { navigation } from "@/content/navigation";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return navigation.map((item) => ({
    url: `${site.url}${item.href}`,
    lastModified: new Date(),
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : item.href === "/about" || item.href === "/projects" ? 0.9 : 0.8,
  }));
}
