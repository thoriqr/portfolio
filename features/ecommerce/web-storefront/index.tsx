import { ProjectSection } from "@/components/project-section"
import { ProjectLinks } from "@/components/project-links"
import { TechStack } from "@/components/tech-stack"
import { ImageCarousel } from "@/components/image-carousel"
import { STOREFRONT_IMAGES } from "./constants"

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
    <ProjectSection
      number="01"
      title="Web Storefront"
      meta={`${STOREFRONT_IMAGES.length} screens`}
    >
      <ImageCarousel items={STOREFRONT_IMAGES} />

      <p className="max-w-2xl text-sm text-muted-foreground">
        E-commerce storefront with product browsing, variant selection, cart,
        and checkout flow.
      </p>

      <TechStack items={WEB_STOREFRONT_TECHNOLOGIES} />

      <ProjectLinks
        items={[
          { label: "Live Demo", href: demoUrl },
          { label: "GitHub Repo", href: repoUrl },
        ]}
      />
    </ProjectSection>
  )
}
