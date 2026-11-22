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
  const docsUrl = process.env.NEXT_PUBLIC_STASH_IT_API_DOCS!

  return (
    <ProjectSection number="02" title="Backend API & Worker" meta="Go">
      <p className="max-w-2xl text-sm text-muted-foreground">
        Go API for login, saved links, collections, search, and app releases.
        A separate worker handles background jobs.
      </p>

      <TechStack items={BACKEND_TECHNOLOGIES} />

      <ProjectLinks
        items={[
          { label: "API Docs", href: docsUrl },
          { label: "GitHub Repo", href: repoUrl },
        ]}
      />
    </ProjectSection>
  )
}
