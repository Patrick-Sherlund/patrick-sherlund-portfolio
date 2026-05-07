"use client";

import { useEffect, useMemo, useState } from "react";
import { usePreloadImages } from "@/hooks/usePreloadImages";
import { ThemeToggle } from "@/features/theme/ThemeToggle";
import { HomeHero } from "./components/HomeHero";
import { ProfessionalProjectsBanner } from "./components/ProfessionalProjectsBanner";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { projects } from "./data/projects";
import type { ProjectCategory } from "./data/projects";

function getFirstProjectSectionId(category: ProjectCategory) {
  const categoryProjects = projects.filter((project) => project.category === category);
  const firstProject =
    category === "software-engineering"
      ? categoryProjects[categoryProjects.length - 1]
      : categoryProjects[0];
  return firstProject?.sectionId ?? "bishop-section";
}

export function HomeRoute() {
  usePreloadImages();
  const [activeProjectCategory, setActiveProjectCategory] =
    useState<ProjectCategory>("software-engineering");
  const [pendingCenteredSectionId, setPendingCenteredSectionId] = useState<string | null>(null);
  const firstProjectSectionId = useMemo(() => {
    return getFirstProjectSectionId(activeProjectCategory);
  }, [activeProjectCategory]);

  useEffect(() => {
    if (!pendingCenteredSectionId) {
      return;
    }

    const animationFrame = window.requestAnimationFrame(() => {
      const projectSection = document.getElementById(pendingCenteredSectionId);
      if (projectSection) {
        const projectRect = projectSection.getBoundingClientRect();
        const targetScrollY =
          window.scrollY + projectRect.top - ((window.innerHeight - projectRect.height) * 0.35);
        window.scrollTo({ top: targetScrollY, behavior: "smooth" });
      }
      setPendingCenteredSectionId(null);
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [activeProjectCategory, pendingCenteredSectionId]);

  const handleProjectCategoryChange = (category: ProjectCategory) => {
    setActiveProjectCategory(category);
    setPendingCenteredSectionId(getFirstProjectSectionId(category));
  };

  return (
    <div className="min-h-screen bg-[#e7f4ff] dark:bg-[#041825]" style={{ transition: "background-color 0.4s ease-in-out" }}>
      <ThemeToggle />
      <HomeHero />
      <ProfessionalProjectsBanner
        activeCategory={activeProjectCategory}
        firstProjectSectionId={firstProjectSectionId}
        onCategoryChange={handleProjectCategoryChange}
      />
      <ProjectShowcase activeCategory={activeProjectCategory} />
    </div>
  );
}
