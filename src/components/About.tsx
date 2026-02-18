import { FadeInSection } from "./FadeInSection";

export function About() {
  return (
    <FadeInSection
      id="about"
      className="mx-auto mt-20 max-w-5xl px-4 sm:mt-24 sm:px-6"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] md:items-start">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/80">
            About
          </h2>
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
            Computer Science student building full‑stack web platforms.
          </h3>
          <p className="text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
            I&apos;m currently studying Computer Science at{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              Royal University
            </span>
            . Outside of class, I spend most of my time learning modern web
            technologies and building real-world projects that solve practical
            problems.
          </p>
          <p className="text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
            My main focus is on{" "}
            <span className="font-medium">React</span> and{" "}
            <span className="font-medium">TypeScript</span> on the frontend,
            combined with <span className="font-medium">Spring Boot</span> and{" "}
            <span className="font-medium">PostgreSQL</span> on the backend. I
            enjoy designing simple APIs, clean UI components, and predictable
            data flows that scale as applications grow.
          </p>
        </div>
        <div className="space-y-3 rounded-2xl border border-zinc-200 bg-zinc-50/60 p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200">
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            Quick facts
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
              <span>
                Strong interest in building <span className="font-medium">UI</span> that feels{" "}
                <span className="font-medium">fast</span>,{" "}
                <span className="font-medium">accessible</span>, and{" "}
                <span className="font-medium">maintainable</span>.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
              <span>
                Comfortable owning the whole stack: database schemas, REST
                APIs, and polished frontend experiences.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
              <span>
                Always learning – currently exploring performance optimization,
                testing strategies, and clean architecture patterns.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </FadeInSection>
  );
}

