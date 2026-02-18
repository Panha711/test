export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: "task-flow",
    title: "TaskFlow – Productivity Dashboard",
    description:
      "A responsive task management dashboard with Kanban boards, analytics, and real-time updates designed for small development teams.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
    githubUrl: "https://github.com/your-username/taskflow",
  },
  {
    id: "uni-portal",
    title: "University Portal",
    description:
      "A portal for managing courses, schedules, and grades, built with a strong focus on clean architecture and maintainable code.",
    techStack: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],
    githubUrl: "https://github.com/your-username/university-portal",
  },
  {
    id: "dev-notes",
    title: "Dev Notes – Markdown Notebook",
    description:
      "A developer-focused note-taking app with markdown support, code highlighting, and powerful search.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/your-username/dev-notes",
  },
];

