import { ProjectSection } from "@/components/project-section"
import { ProjectLinks } from "@/components/project-links"
import { TechStack } from "@/components/tech-stack"

const BACKEND_TECHNOLOGIES = [
  "Go",
  "Fiber",
  "PostgreSQL",
  "pgx",
  "Redis",
  "Asynq",
  "Swagger",
]

export default function Backend() {
  const repoUrl = process.env.NEXT_PUBLIC_STASH_IT_BACKEND_REPO!

  return (
    <ProjectSection number="02" title="Backend API & Worker" meta="Go">
      <p className="max-w-2xl text-sm text-muted-foreground">
        Go API for authentication, saved items, collections, search, and client
        releases, with a separate worker for background jobs.
      </p>

      <p className="max-w-2xl text-sm text-muted-foreground">
        Includes server-side page metadata enrichment, rate limiting backed by
        Redis, token rotation with reuse detection, Swagger documentation, and
        integration tests against real PostgreSQL and Redis containers.
      </p>

      <TechStack items={BACKEND_TECHNOLOGIES} />

      <ProjectLinks items={[{ label: "GitHub Repo", href: repoUrl }]} />
    </ProjectSection>
  )
}
