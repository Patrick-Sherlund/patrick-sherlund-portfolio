"use client";

import { useEffect, useMemo, useState } from "react";
import { usePreloadImages } from "@/hooks/usePreloadImages";
import { HomeHero } from "./components/HomeHero";
import { ProfessionalProjectsBanner } from "./components/ProfessionalProjectsBanner";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { projects } from "./data/projects";
import type { ProjectCategory } from "./data/projects";
import { useProjectArrowNavigation } from "./hooks/useProjectArrowNavigation";

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
  const scrollToProject = useProjectArrowNavigation();
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
      scrollToProject(pendingCenteredSectionId);
      setPendingCenteredSectionId(null);
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [activeProjectCategory, pendingCenteredSectionId, scrollToProject]);

  const handleProjectCategoryChange = (category: ProjectCategory) => {
    setActiveProjectCategory(category);
    setPendingCenteredSectionId(getFirstProjectSectionId(category));
  };

  return (
    <div className="min-h-screen bg-[#e7f4ff] dark:bg-[#041825]" style={{ transition: "background-color 0.4s ease-in-out" }}>
      <HomeHero />
      <ProfessionalProjectsBanner
        activeCategory={activeProjectCategory}
        firstProjectSectionId={firstProjectSectionId}
        onSeeProjects={() => scrollToProject(firstProjectSectionId)}
        onCategoryChange={handleProjectCategoryChange}
      />
      <ProjectShowcase activeCategory={activeProjectCategory} />
    </div>
  );
}
