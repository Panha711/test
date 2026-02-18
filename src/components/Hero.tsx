"use client";

import Link from "next/link";
import { FadeInSection } from "./FadeInSection";

export function Hero() {
  return (
    <FadeInSection
      id="hero"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.25),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.28),_transparent_60%)]" />
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-10 px-4 sm:px-6 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
            Full‑Stack Web Engineer
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl dark:text-zinc-50">
            Hi, I&apos;m{" "}
            <span className="text-primary underline-offset-4">
              Panha
            </span>
            .
          </h1>
          <p className="text-lg font-medium text-zinc-800 sm:text-xl dark:text-zinc-200">
            Full‑Stack Developer&nbsp;|&nbsp;React, TypeScript, Spring Boot, PostgreSQL
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base dark:text-zinc-300">
            I&apos;m a Computer Science student at Royal University with a
            passion for building clean, scalable web applications. I design
            frontends in React &amp; TypeScript and backends with Spring Boot
            and PostgreSQL, focusing on maintainable architecture end‑to‑end.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
              React &amp; TypeScript
            </span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-900/40 dark:text-emerald-200">
              Spring Boot APIs
            </span>
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-800 dark:border-sky-900/60 dark:bg-sky-900/40 dark:text-sky-100">
              PostgreSQL data models
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-white shadow-md shadow-primary/30 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-800 transition hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-50 via-white to-primary/20 shadow-[0_20px_60px_rgba(15,23,42,0.45)] sm:h-48 sm:w-48 md:h-56 md:w-56 dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-950 dark:to-primary/30">
            <div className="flex flex-col items-center gap-1 text-xs font-medium text-zinc-700 sm:text-sm dark:text-zinc-200">
              <span className="rounded-full bg-zinc-900 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900">
                Full‑Stack
              </span>
              <span>React · TypeScript</span>
              <span>Spring Boot · PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}

