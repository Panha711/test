import { FadeInSection } from "./FadeInSection";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <FadeInSection
      id="projects"
      className="mx-auto mt-20 max-w-5xl px-4 sm:mt-24 sm:px-6"
    >
      <div className="space-y-8">
        <div className="space-y-3 text-center sm:text-left">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/80">
            Projects
          </h2>
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
            Selected work across the stack.
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
            A mix of personal and academic projects that highlight my approach
            to frontend architecture, clean code, and thoughtful UX.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}

