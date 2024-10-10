import React from "react";
import CardWithHover from "./CardWithHover";
import { featuredProjects } from "../data/projects";
import type { iProjects } from "../types/projects.types";
import { ArrowUpRight } from "lucide-react";
const CardsContainer: React.FC = () => {
  return (
    <section className="flex flex-col space-y-4">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-xl font-medium">Projects</h2>
        <a
          href="/projects"
          className="group flex items-center space-x-2 text-sm font-medium text-neutral-500 duration-100 hover:text-black dark:text-neutral-400 dark:hover:text-white"
        >
          <span>More</span>
          <ArrowUpRight />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {featuredProjects.map((project: iProjects) => (
          <CardWithHover
            key={project.title}
            title={project.title}
            description={project.description}
            icon={project.icon}
            websiteUrl={project.url}
            githubUrl={project.githubUrl}
            mainTechIcon={project.techIcon}
            mainTechUrl={project.mainTech.url}
            mainTechName={project.mainTech.title}
            tags={project.tags}
            latest={project.latest}
          />
        ))}
      </div>
    </section>
  );
};

export default CardsContainer;
