export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Online store with a web storefront, mobile app, admin dashboard, and backend API.",
    technologies: ["TypeScript", "React", "Flutter", "Node.js", "PostgreSQL"],
    href: "/projects/ecommerce",
  },
  {
    title: "Stash-it",
    description:
      "An app to save links, sort them into collections, and find them again later. Flutter client with a Go API.",
    technologies: ["Go", "Fiber", "PostgreSQL", "Redis", "Flutter", "Riverpod"],
    href: "/projects/stash-it",
  },
]

export type Project = (typeof projects)[number]
