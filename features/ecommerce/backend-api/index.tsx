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
        API for login, products, checkout, orders, and payments.
      </p>

      <p className="max-w-2xl text-sm text-muted-foreground">
        Includes Redis caching, scheduled jobs, CI/CD, and Swagger docs.
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
