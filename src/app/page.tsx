"use client";

import { useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Community } from "@/components/sections/Community";
import { Skills } from "@/components/sections/Skills";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { Contact } from "@/components/sections/Contact";
import { ProjectModal } from "@/components/sections/ProjectModal";
import { ProjectItem } from "@/data/projects";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <div className="relative w-full max-w-full overflow-x-clip">
      <Hero />
      <About />
      <StatsCounter />
      <Journey />
      <Education />
      <Experience />
      <Community />
      <Skills />
      <FeaturedProject onOpenModal={setSelectedProject} />
      <Projects onOpenModal={setSelectedProject} />
      <Achievements />
      <Contact />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
