import { ImageCarousel } from "@/components/image-carousel"
import Link from "next/link"
import { ADMIN_PANEL_IMAGES } from "./constants"

export default function AdminPanel() {
  const demoUrl = process.env.COMMERCE_ADMIN!
  const repoUrl = process.env.ADMIN_REPO!

  return (
    <section className="space-y-4">
      <h2 className="font-medium">Admin Panel</h2>

      {/* IMAGE */}
      <ImageCarousel items={ADMIN_PANEL_IMAGES} />

      <p className="text-sm text-muted-foreground">
        Admin dashboard for managing products, variants, and store content,
        featuring a variant-centric product system with dynamic option
        generation.
      </p>

      <p className="text-sm text-muted-foreground">
        Tech stack: React (Vite), Mantine UI, TanStack Query, Zod, DnD Kit
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
