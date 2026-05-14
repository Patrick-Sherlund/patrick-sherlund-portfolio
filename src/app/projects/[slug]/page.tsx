import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredProjects, getProjectBySlug } from "@/content/portfolio";
import { StructuredData } from "@/shared/seo/StructuredData";
import { createPageMetadata } from "@/shared/seo/metadata";
import { createBreadcrumbJsonLd, createProjectJsonLd } from "@/shared/seo/jsonld";
import "../../seo-pages.css";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return featuredProjects
    .filter((project) => project.slug !== "aerot")
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.slug === "bishop" || project.slug === "aerot") {
    return {};
  }

  return createPageMetadata({
    title: `${project.title} ${project.subtitle}`,
    description: project.seoDescription,
    path: project.route,
    keywords: [project.title, project.subtitle, ...project.keywords, "Patrick Sherlund"],
    type: "article",
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || project.slug === "bishop" || project.slug === "aerot") {
    notFound();
  }

  const relatedProjects = featuredProjects.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <>
      <StructuredData
        data={[
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: project.title, path: project.route },
          ]),
          createProjectJsonLd({
            title: `${project.title} ${project.subtitle}`,
            description: project.seoDescription,
            path: project.route,
            keywords: [project.title, project.subtitle, ...project.keywords],
          }),
        ]}
      />
      <main className="seo-page-shell">
        <div className="seo-page-content">
          <p className="seo-eyebrow">Project {project.number}</p>
          <h1 className="seo-title">
            {project.title} <span>{project.subtitle}</span>
          </h1>
          <p className="seo-lead">{project.seoDescription}</p>
          <div className="seo-grid">
            <section className="seo-card">
              <h2>Project Summary</h2>
              <p>{project.description}</p>
              <p>{project.applicationSummary}</p>
            </section>
            <section className="seo-card">
              <h2>Problem</h2>
              <p>{project.problem}</p>
            </section>
            <section className="seo-card">
              <h2>Role</h2>
              <p>{project.role}</p>
            </section>
            <section className="seo-card">
              <h2>Outcome</h2>
              <p>{project.outcome}</p>
            </section>
          </div>
          <section className="seo-card seo-stack-card">
            <h2>Technology</h2>
            <p>{project.techStack}</p>
          </section>
          <section className="seo-card">
            <h2>Related Pages</h2>
            <ul className="seo-link-list">
              <li>
                <Link href="/about">About Patrick Sherlund</Link>
              </li>
              <li>
                <Link href="/projects">All Projects</Link>
              </li>
              {relatedProjects.map((relatedProject) => (
                <li key={relatedProject.id}>
                  <Link href={relatedProject.route}>
                    {relatedProject.title} {relatedProject.subtitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/bishop">Bishop Case Study</Link>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
