import type { Metadata } from "next";
import "@/features/bishop/styles/bishop.css";
import { BishopRoute } from "@/features/bishop";
import { bishopMetadata } from "@/shared/seo/metadata";
import { StructuredData } from "@/shared/seo/StructuredData";
import { createBreadcrumbJsonLd, createProjectJsonLd } from "@/shared/seo/jsonld";

export const metadata: Metadata = bishopMetadata;

export default function Page() {
  return (
    <>
      <StructuredData
        data={[
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Bishop", path: "/bishop" },
          ]),
          createProjectJsonLd({
            title: "Bishop Case Study",
            description:
              "Bishop search and rescue video intelligence case study by Patrick Sherlund covering edge computer vision, mission review, and SAR workflows.",
            path: "/bishop",
            keywords: ["Bishop", "search and rescue", "computer vision", "video intelligence"],
          }),
        ]}
      />
      <BishopRoute />
    </>
  );
}
