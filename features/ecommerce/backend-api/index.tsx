import Link from "next/link"

export default function BackendApi() {
  const repoUrl = process.env.NEXT_PUBLIC_API_REPO!
  const docsUrl = process.env.NEXT_PUBLIC_API_DOCS!

  return (
    <section className="space-y-4">
      <h2 className="font-medium">Backend API</h2>

      <p className="text-sm text-muted-foreground">
        Production-oriented e-commerce backend focused on transactional checkout
        flows, payment synchronization, snapshot-based order architecture, and
        variant-driven commerce workflows.
      </p>

      <p className="text-sm text-muted-foreground">
        Includes Midtrans payment integration, Redis caching, scheduled jobs,
        integration testing, Swagger documentation, and GitHub Actions CI.
      </p>

      <p className="text-sm text-muted-foreground">
        Tech stack: Node.js, Express, TypeScript, PostgreSQL, Redis, Knex, Zod
      </p>

      <div className="flex gap-4 text-sm">
        <Link href={docsUrl} target="_blank" className="underline">
          API Docs
        </Link>

        <Link href={repoUrl} target="_blank" className="underline">
          GitHub Repo
        </Link>
      </div>
    </section>
  )
}
