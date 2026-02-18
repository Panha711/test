export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React",
    ],
  },
  {
    name: "Backend",
    skills: ["Java", "Spring Boot"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Docker"],
  },
];

