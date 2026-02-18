"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [activeId, setActiveId] = useState<string>("hero");

  useEffect(() => {
    const sectionIds = navItems
      .map((i) => i.href.replace("#", ""))
      .filter(Boolean);

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        const id = visible[0]?.target?.id;
        if (id) setActiveId(id);
      },
      { root: null, threshold: [0.2, 0.35, 0.5], rootMargin: "-35% 0px -55% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-zinc-200/70 bg-background/70 backdrop-blur-md shadow-[0_12px_40px_-30px_rgba(79,70,229,0.65)] dark:border-zinc-800 dark:bg-zinc-950/70">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="#hero"
          className="group inline-flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <span className="rounded-full border border-zinc-200 bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
            Dev
          </span>
          <span className="bg-gradient-to-r from-primary via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">
            Panha
          </span>
          <span className="text-zinc-900 dark:text-zinc-100">.</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden items-center gap-2 text-sm font-medium sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 transition ${
                  activeId === item.href.replace("#", "")
                    ? "bg-primary/10 text-primary ring-1 ring-primary/20 dark:bg-primary/20 dark:ring-primary/30"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden items-center rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-primary sm:inline-flex dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-primary dark:hover:text-white"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="rounded-full border border-zinc-200 bg-zinc-50 p-1.5 text-xs text-zinc-700 shadow-sm transition hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-white hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
          >
            {theme === "dark" ? "☾" : "☼"}
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 transition hover:bg-zinc-100 sm:hidden dark:text-zinc-200 dark:hover:bg-zinc-900"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle menu</span>
            <span className="flex h-4 w-4 flex-col justify-between">
              <span className="h-0.5 w-4 rounded bg-current" />
              <span className="h-0.5 w-4 rounded bg-current" />
            </span>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="border-t border-zinc-200/70 bg-background/95 px-4 py-2 text-sm text-zinc-700 shadow-sm sm:hidden dark:border-zinc-800 dark:bg-zinc-950/95 dark:text-zinc-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-md px-2 py-1 transition-colors ${
                  activeId === item.href.replace("#", "")
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-zinc-100 dark:hover:bg-zinc-900"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-white shadow-sm transition hover:bg-primary dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-primary dark:hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

