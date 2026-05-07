"use client";

import { useMemo, useState } from "react";
import { usePreloadImages } from "@/hooks/usePreloadImages";
import { ThemeToggle } from "@/features/theme/ThemeToggle";
import { HomeHero } from "./components/HomeHero";
import { ProfessionalProjectsBanner } from "./components/ProfessionalProjectsBanner";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { projects } from "./data/projects";
import type { ProjectCategory } from "./data/projects";

export function HomeRoute() {
  usePreloadImages();
  const [activeProjectCategory, setActiveProjectCategory] =
    useState<ProjectCategory>("software-engineering");
  const firstProjectSectionId = useMemo(() => {
    return projects.find((project) => project.category === activeProjectCategory)?.sectionId ?? "aerot-section";
  }, [activeProjectCategory]);

  return (
    <div className="min-h-screen bg-[#e7f4ff] dark:bg-[#041825]" style={{ transition: "background-color 0.4s ease-in-out" }}>
      <ThemeToggle />
      <HomeHero />
      <ProfessionalProjectsBanner
        activeCategory={activeProjectCategory}
        firstProjectSectionId={firstProjectSectionId}
        onCategoryChange={setActiveProjectCategory}
      />
      <ProjectShowcase activeCategory={activeProjectCategory} />
    </div>
  );
}
