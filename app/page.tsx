import { PageLayout } from "@/components/page-layout"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/constants/projects"

export default function HomePage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">Thoriq Rahman</h1>

        <p className="max-w-xl text-muted-foreground">
          Fullstack developer focused on building scalable e-commerce systems,
          from storefront UX to backend architecture.
        </p>
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
