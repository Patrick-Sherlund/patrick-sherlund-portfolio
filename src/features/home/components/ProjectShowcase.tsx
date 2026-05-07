"use client";

import { projects } from "../data/projects";
import type { ProjectCategory } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

type ProjectShowcaseProps = {
  activeCategory: ProjectCategory;
};

export function ProjectShowcase({ activeCategory }: ProjectShowcaseProps) {
  const categoryProjects = projects.filter((project) => project.category === activeCategory);
  const visibleProjects =
    activeCategory === "software-engineering" ? [...categoryProjects].reverse() : categoryProjects;

  return (
    <>
      {visibleProjects.map((project, index) => (
        <div id={project.sectionId} key={project.id}>
          <ProjectCard {...project} number={String(index + 1).padStart(2, "0")} />
        </div>
      ))}
    </>
  );
}
