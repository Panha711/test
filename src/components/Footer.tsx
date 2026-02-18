export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-background/80 py-6 text-xs text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-400">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6">
        <p className="text-center sm:text-left">
          &copy; {new Date().getFullYear()} Panha. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-center sm:justify-end sm:text-right">
          <span className="text-[11px] uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">
            Built with
          </span>
          <span className="rounded-full bg-zinc-100 px-2 py-1 text-[11px] font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
            React · TypeScript · Next.js
          </span>
          <span className="rounded-full bg-zinc-100 px-2 py-1 text-[11px] font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
            Tailwind CSS · Spring Boot · PostgreSQL
          </span>
        </div>
      </div>
    </footer>
  );
}

