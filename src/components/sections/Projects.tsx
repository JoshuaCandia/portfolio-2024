import { featuredProjects } from "@/data/projects";
import type { iProjects } from "@/types";
import { cn } from "@/utils/cn";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState, type FC } from "react";
import CardWithHover from "../CardWithHover";

const Projects: FC = () => {
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <section className="w-full mx-auto flex flex-col space-y-4 mb-12 max-w-xl">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-xl font-medium dark:text-white">Proyectos</h2>
        {currentPath !== "/projects" && (
          <a
            href="/projects"
            className="group flex items-center space-x-2 text-sm font-medium text-neutral-500 duration-100 dark:text-neutral-400 dark:hover:text-white hover:text-black"
          >
            <span>Más</span>
            <ArrowUpRight />
          </a>
        )}
      </div>

      <div
        className={cn(
          "grid gap-6",
          currentPath === "/projects"
            ? "grid-cols-1"
            : "grid-cols-1 md:grid-cols-2"
        )}
      >
        {featuredProjects.map((project: iProjects) => (
          <CardWithHover
            isProjectPath={currentPath === "/projects"}
            key={project.title}
            title={project.title}
            description={project.description}
            icon={project.icon}
            websiteUrl={project.url}
            githubUrl={project.githubUrl}
            mainTechIcon={project.mainTech.techIcon}
            mainTechUrl={project.mainTech.url}
            mainTechName={project.mainTech.title}
            tags={project.tags}
            latest={project.latest}
            progress={project.progress}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
