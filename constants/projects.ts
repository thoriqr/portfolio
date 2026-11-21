export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Fullstack e-commerce platform with a web storefront, mobile app, admin dashboard, and backend API.",
    technologies: ["TypeScript", "React", "Flutter", "Node.js", "PostgreSQL"],
    href: "/projects/ecommerce",
  },
  {
    title: "Stash-it",
    description:
      "A personal library for links found on the internet, built with a Flutter client and a Go API and worker.",
    technologies: ["Go", "Fiber", "PostgreSQL", "Redis", "Flutter", "Riverpod"],
    href: "/projects/stash-it",
  },
]

export type Project = (typeof projects)[number]
