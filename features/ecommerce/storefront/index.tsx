import Link from "next/link"
import { StorefrontCarousel } from "./storefront-carousel"

export default function Storefront() {
  const demoUrl = process.env.COMMERCE_STORE_FRONT!
  const repoUrl = process.env.STORE_FRONT_REPO!

  return (
    <section className="space-y-4">
      <h2 className="font-medium">Storefront</h2>

      {/* IMAGE */}
      <StorefrontCarousel />

      <p className="text-sm text-muted-foreground">
        Customer-facing interface for browsing products and completing checkout.
      </p>

      <p className="text-sm text-muted-foreground">
        Tech stack: Next.js, React Query
      </p>

      <div className="flex gap-4 text-sm">
        <Link href={demoUrl} target="_blank" className="underline">
          Live Demo
        </Link>
        <Link href={repoUrl} target="_blank" className="underline">
          GitHub Repo
        </Link>
      </div>
    </section>
  )
}
