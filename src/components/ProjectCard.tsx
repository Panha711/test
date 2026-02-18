import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-gradient-to-b from-zinc-50/80 via-white to-zinc-50/80 p-5 text-sm shadow-sm ring-1 ring-transparent transition hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-2xl hover:ring-primary/40 dark:border-zinc-700/80 dark:from-zinc-900/80 dark:via-zinc-950 dark:to-zinc-900/80 dark:hover:border-primary/60 dark:hover:ring-primary/50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-primary/15 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-primary/25" />
      <div className="flex-1 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            {project.title}
          </h4>
          <span className="rounded-full border border-emerald-200/70 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-900/40 dark:text-emerald-200">
            Full‑stack
          </span>
        </div>
        <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">
          GitHub
        </span>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-full bg-zinc-900 px-3 py-1.5 text-[11px] font-medium text-zinc-100 shadow-sm transition group-hover:bg-primary dark:bg-zinc-100 dark:text-zinc-900 dark:group-hover:bg-primary dark:group-hover:text-white"
        >
          View repository
          <span className="transition-transform group-hover:translate-x-0.5">
            ↗
          </span>
        </a>
      </div>
    </article>
  );
}

