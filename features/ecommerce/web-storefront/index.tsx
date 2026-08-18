import Link from "next/link"
import { ImageCarousel } from "@/components/image-carousel"
import { STOREFRONT_IMAGES } from "./constants"
import { Badge } from "@/components/ui/badge"

const WEB_STOREFRONT_TECHNOLOGIES = [
  "Next.js",
  "TanStack Query",
  "Tailwind CSS",
  "shadcn/ui",
  "Zod",
]

export default function WebStorefront() {
  const demoUrl = process.env.NEXT_PUBLIC_STORE_URL!
  const repoUrl = process.env.NEXT_PUBLIC_STORE_REPO!

  return (
    <section className="space-y-4">
      <h2 className="font-medium">Web Storefront</h2>

      <ImageCarousel items={STOREFRONT_IMAGES} />

      <p className="text-sm text-muted-foreground">
        E-commerce storefront with product browsing, variant selection, cart,
        and checkout flow.
      </p>

      <div className="flex flex-wrap gap-3">
        {WEB_STOREFRONT_TECHNOLOGIES.map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>

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
