import { FadeInSection } from "./FadeInSection";
import { skillCategories } from "../data/skills";

export function Skills() {
  return (
    <FadeInSection
      id="skills"
      className="mx-auto mt-20 max-w-5xl px-4 sm:mt-24 sm:px-6"
    >
      <div className="space-y-8">
        <div className="space-y-3 text-center sm:text-left">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/80">
            Skills
          </h2>
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
            A focused full‑stack toolkit.
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
            I work primarily with a TypeScript-first stack on the frontend and
            Java with Spring Boot on the backend, supported by reliable tooling
            and workflows.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-b from-zinc-50/80 to-white p-4 text-left shadow-sm ring-1 ring-transparent transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:ring-primary/40 dark:border-zinc-800 dark:from-zinc-900/80 dark:to-zinc-950 dark:hover:border-primary/60 dark:hover:ring-primary/50"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-primary/20" />
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {category.name}
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 transition group-hover:bg-primary/10 group-hover:text-primary dark:bg-zinc-800 dark:text-zinc-200 dark:group-hover:bg-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
}

