import Link from "next/link"
import { ImageCarousel } from "@/components/image-carousel"
import { STOREFRONT_IMAGES } from "./constants"

export default function Storefront() {
  const demoUrl = process.env.COMMERCE_STORE_FRONT!
  const repoUrl = process.env.STORE_FRONT_REPO!

  return (
    <section className="space-y-4">
      <h2 className="font-medium">Storefront</h2>

      {/* IMAGE */}
      <ImageCarousel items={STOREFRONT_IMAGES} />

      <p className="text-sm text-muted-foreground">
        E-commerce storefront built around a variant-centric product system,
        enabling flexible product browsing and selection.
      </p>

      <p className="text-sm text-muted-foreground">
        Tech stack: Next.js, TanStack Query, Tailwind CSS, shadcn/ui, Zod
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
