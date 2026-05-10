import { PageLayout } from "@/components/page-layout"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/constants/projects"
import Link from "next/link"

export default function HomePage() {
  return (
    <PageLayout>
      <section className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight">
            Thoriq Rahman
          </h1>

          <p className="max-w-xl text-muted-foreground">
            Fullstack developer focused on building web and e-commerce
            applications using TypeScript, React, Node.js, and PostgreSQL.
          </p>
        </div>

        <div className="flex gap-4 text-sm">
          <Link
            href="https://github.com/thoriqr"
            target="_blank"
            className="underline underline-offset-4"
          >
            GitHub
          </Link>

          <Link
            href="https://linkedin.com/in/thoriqrahman"
            target="_blank"
            className="underline underline-offset-4"
          >
            LinkedIn
          </Link>

          <Link
            href="/thoriq-rahman-cv.pdf"
            target="_blank"
            className="underline underline-offset-4"
          >
            CV
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Projects</h2>

        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
