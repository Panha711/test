"use client";

import { FadeInSection } from "./FadeInSection";

const email = "your.email@example.com";
const github = "https://github.com/your-username";
const linkedin = "https://www.linkedin.com/in/your-profile";

export function Contact() {
  return (
    <FadeInSection
      id="contact"
      className="mx-auto mt-20 max-w-5xl px-4 pb-20 sm:mt-24 sm:px-6 sm:pb-24"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.6fr)] md:items-start">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary/80">
            Contact
          </h2>
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
            Let&apos;s build something together.
          </h3>
          <p className="text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
            I&apos;m open to internships, freelance work, and collaboration on
            interesting projects. The best way to reach me is by email or
            through my GitHub and LinkedIn profiles.
          </p>
          <dl className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
            <div className="flex flex-col gap-1">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                Email
              </dt>
              <dd>
                <a
                  href={`mailto:${email}`}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {email}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                GitHub
              </dt>
              <dd>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {github}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                LinkedIn
              </dt>
              <dd>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  {linkedin}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70">
          <form
            className="space-y-4"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-medium text-zinc-700 dark:text-zinc-200"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-primary/30 transition focus:border-primary focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium text-zinc-700 dark:text-zinc-200"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-primary/30 transition focus:border-primary focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
                placeholder="you@example.com"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-medium text-zinc-700 dark:text-zinc-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 outline-none ring-primary/30 transition focus:border-primary focus:ring-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
                placeholder="Tell me a bit about what you have in mind..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </FadeInSection>
  );
}

