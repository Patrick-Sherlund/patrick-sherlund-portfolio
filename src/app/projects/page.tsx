import type { Metadata } from "next";
import Link from "next/link";
import { portfolioProjects } from "@/content/portfolio";
import { StructuredData } from "@/shared/seo/StructuredData";
import { projectsMetadata } from "@/shared/seo/metadata";
import { createBreadcrumbJsonLd } from "@/shared/seo/jsonld";
import "../seo-pages.css";

export const metadata: Metadata = projectsMetadata;

export default function ProjectsPage() {
  return (
    <>
      <StructuredData
        data={createBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <main className="seo-page-shell">
        <div className="seo-page-content">
          <p className="seo-eyebrow">Projects</p>
          <h1 className="seo-title">Software Applications and Case Studies</h1>
          <p className="seo-lead">
            This project directory collects the main Patrick Sherlund portfolio
            pages so each application can be discovered independently in search.
          </p>
          <div className="seo-project-list">
            {portfolioProjects.map((project) => (
              <article className="seo-project-card" key={project.id}>
                <p className="seo-project-number">{project.number}</p>
                <h2>{project.title}</h2>
                <p className="seo-project-subtitle">{project.subtitle}</p>
                <p>{project.seoDescription}</p>
                <p className="seo-project-stack">{project.techStack}</p>
                <Link href={project.route} className="seo-link-button">
                  View {project.title}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
