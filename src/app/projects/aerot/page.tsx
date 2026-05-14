import type { Metadata } from "next";
import "@/features/bishop/styles/bishop.css";
import "@/features/aerot/styles/aerot.css";
import { AeroTRoute } from "@/features/aerot";
import { StructuredData } from "@/shared/seo/StructuredData";
import { createPageMetadata } from "@/shared/seo/metadata";
import { createBreadcrumbJsonLd, createProjectJsonLd } from "@/shared/seo/jsonld";

const aerotDescription =
  "AeroT case study by Patrick Sherlund covering a COTS-based RF training system, field devices, Command View, ATAK, Longley-Rice analysis, and real-time electromagnetic discipline feedback.";

const aerotKeywords = [
  "AeroT",
  "AEROT",
  "RF training",
  "electromagnetic discipline",
  "ATAK plugin",
  "Longley-Rice",
  "MapLibre",
  "C++",
  "React",
];

export const metadata: Metadata = createPageMetadata({
  title: "AeroT Case Study",
  description: aerotDescription,
  path: "/projects/aerot",
  keywords: ["AeroT case study", "Patrick Sherlund AeroT", ...aerotKeywords],
  type: "article",
});

export default function Page() {
  return (
    <>
      <StructuredData
        data={[
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "AeroT", path: "/projects/aerot" },
          ]),
          createProjectJsonLd({
            title: "AeroT Case Study",
            description: aerotDescription,
            path: "/projects/aerot",
            keywords: aerotKeywords,
          }),
        ]}
      />
      <AeroTRoute />
    </>
  );
}
