"use client";

import { projects } from "../data/projects";
import type { ProjectCategory } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

type ProjectShowcaseProps = {
  activeCategory: ProjectCategory;
};

export function ProjectShowcase({ activeCategory }: ProjectShowcaseProps) {
  const visibleProjects = projects.filter((project) => project.category === activeCategory);

  return (
    <>
      {visibleProjects.map((project) => (
        <div id={project.sectionId} key={project.id}>
          <ProjectCard {...project} />
        </div>
      ))}
    </>
  );
}
