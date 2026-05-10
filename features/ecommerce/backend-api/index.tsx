import Link from "next/link"

export default function BackendApi() {
  const repoUrl = process.env.NEXT_PUBLIC_API_REPO!
  const docsUrl = process.env.NEXT_PUBLIC_API_DOCS!

  return (
    <section className="space-y-4">
      <h2 className="font-medium">Backend API</h2>

      <p className="text-sm text-muted-foreground">
        Backend API for authentication, products, checkout, orders, and payment
        handling.
      </p>

      <p className="text-sm text-muted-foreground">
        Includes payment integration, Redis caching, scheduled jobs, integration
        testing, and Swagger documentation.
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
