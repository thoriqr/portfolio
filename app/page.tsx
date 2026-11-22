import { PageLayout } from "@/components/page-layout"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/constants/projects"
import Link from "next/link"

const LINKS = [
  { label: "GitHub", href: "https://github.com/thoriqr" },
  { label: "LinkedIn", href: "https://linkedin.com/in/thoriqrahman" },
  { label: "CV", href: "/cv/thoriq-rahman-cv.pdf" },
]

export default function HomePage() {
  return (
    <PageLayout>
      <section className="space-y-3">
        <h1 className="text-[2.375rem] leading-tight font-semibold tracking-tight">
          Thoriq Rahman
        </h1>

        <p className="max-w-xl text-muted-foreground">
          Fullstack developer. I build web and mobile apps with TypeScript,
          Flutter, and Go.
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              className="border px-2.5 py-1.5 font-mono text-[0.625rem] tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:border-foreground/30 hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-baseline gap-3 border-t pt-3 font-mono text-[0.625rem] font-semibold tracking-[0.14em] uppercase">
          <span>Projects</span>

          <span className="ml-auto tracking-[0.06em] text-muted-foreground">
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <div className="border-t">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.href}
              {...project}
              index={index + 1}
            />
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
