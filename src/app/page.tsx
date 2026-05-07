import type { Metadata } from "next";
import "@/features/home/styles/home.css";
import { HomeRoute } from "@/features/home";
import { homeMetadata } from "@/shared/seo/metadata";
import { StructuredData } from "@/shared/seo/StructuredData";
import { createWebPageJsonLd } from "@/shared/seo/jsonld";

export const metadata: Metadata = homeMetadata;

export default function Page() {
  return (
    <>
      <StructuredData
        data={createWebPageJsonLd({
          title: "Patrick Sherlund Software Engineer Portfolio",
          description:
            "Homepage portfolio for Patrick Sherlund featuring software engineering applications, case studies, and project pages.",
          path: "/",
        })}
      />
      <section className="sr-only" aria-label="Portfolio summary">
        <h1>Patrick Sherlund Software Engineer Portfolio</h1>
        <p>
          Patrick Sherlund is a senior software engineer building mission software,
          search and rescue applications, radar systems, computer vision tools, and
          technical project case studies.
        </p>
      </section>
      <HomeRoute />
    </>
  );
}
