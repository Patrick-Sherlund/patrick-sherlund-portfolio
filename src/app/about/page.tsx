import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { portfolioProjects } from "@/content/portfolio";
import { StructuredData } from "@/shared/seo/StructuredData";
import { aboutMetadata } from "@/shared/seo/metadata";
import { createBreadcrumbJsonLd, createProfilePageJsonLd } from "@/shared/seo/jsonld";
import "../seo-pages.css";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <>
      <StructuredData
        data={[
          createBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          createProfilePageJsonLd(),
        ]}
      />
      <main className="seo-page-shell">
        <div className="seo-page-content">
          <p className="seo-eyebrow">About</p>
          <h1 className="seo-title">Patrick Sherlund</h1>
          <p className="seo-lead">
            Patrick Sherlund is a senior software engineer focused on mission
            software, defense applications, computer vision, radar systems, and
            product-minded technical delivery.
          </p>
          <div className="seo-grid">
            <section className="seo-card">
              <h2>Profile</h2>
              <p>
                This portfolio is the central home for Patrick Sherlund project
                pages, application work samples, and technical case studies. The
                current body of work spans search and rescue software, radar
                tracking, signal tooling, biometric identity workflows, and
                operational desktop and mobile applications.
              </p>
              <p>
                Current focus areas include full-stack software engineering,
                AI-assisted workflows, computer vision pipelines, hardware-adjacent
                applications, and operational user experience for high-stakes
                environments.
              </p>
            </section>
            <section className="seo-card">
              <h2>Core Areas</h2>
              <ul className="seo-list">
                <li>Defense and mission software applications</li>
                <li>Computer vision and video intelligence workflows</li>
                <li>Radar tracking and control systems</li>
                <li>Desktop, mobile, and web application delivery</li>
                <li>C++, TypeScript, React, Kotlin, Java, C#, ONNX, and OCR</li>
              </ul>
            </section>
            <section className="seo-card">
              <h2>Applications and Case Studies</h2>
              <p>
                Recruiters, hiring teams, and collaborators looking for Patrick
                Sherlund applications, portfolio work, or engineering case studies
                should use the project pages below for the most direct view of the
                work.
              </p>
              <ul className="seo-link-list">
                {portfolioProjects.map((project) => (
                  <li key={project.id}>
                    <Link href={project.route}>
                      {project.title} {project.subtitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <section className="seo-card">
              <h2>Profiles</h2>
              <ul className="seo-link-list">
                <li>
                  <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={site.social.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={site.social.figma} target="_blank" rel="noopener noreferrer">
                    Figma
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
