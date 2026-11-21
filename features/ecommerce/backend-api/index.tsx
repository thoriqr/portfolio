import { ProjectSection } from "@/components/project-section"
import { ProjectLinks } from "@/components/project-links"
import { TechStack } from "@/components/tech-stack"

const BACKEND_API_TECHNOLOGIES = [
  "Node.js",
  "Express",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "Knex",
  "Zod",
  "Google Cloud Run",
  "Cloud Scheduler",
]

export default function BackendApi() {
  const repoUrl = process.env.NEXT_PUBLIC_API_REPO!
  const docsUrl = process.env.NEXT_PUBLIC_API_DOCS!

  return (
    <ProjectSection number="04" title="Backend API" meta="Node.js">
      <p className="max-w-2xl text-sm text-muted-foreground">
        Backend API for authentication, products, checkout, orders, and payment
        handling.
      </p>

      <p className="max-w-2xl text-sm text-muted-foreground">
        Includes payment integration, Redis caching, scheduled jobs, integration
        testing, CI/CD, and Swagger documentation.
      </p>

      <TechStack items={BACKEND_API_TECHNOLOGIES} />

      <ProjectLinks
        items={[
          { label: "API Docs", href: docsUrl },
          { label: "GitHub Repo", href: repoUrl },
        ]}
      />
    </ProjectSection>
  )
}
