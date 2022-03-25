import { useContext } from "react";
import ProjectCard from "../project-card/project-card.component";

import ProjectsContext from "../../contexts/projects/projects.context";

function ProjectsOverview() {
  const { projects } = useContext(ProjectsContext);

  return (
    <div>
      <div class="font-bold text-3xl uppercase ">Sample Projects</div>
      <div>
        Here you can find a few sample projects that I wrote to check my code.
      </div>
      <div class="max-w-full">
        <div class=" my-4 overflow-x-auto py-4 flex">
          {console.log(projects)}
          {projects?.map((project) => (
            <ProjectCard key={project.id} {...project}></ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsOverview;
