import { ProjectSection } from "@/components/project-section"
import { ProjectLinks } from "@/components/project-links"
import { TechStack } from "@/components/tech-stack"
import { ImageCarousel } from "@/components/image-carousel"
import { ADMIN_PANEL_IMAGES } from "./constants"

const ADMIN_PANEL_TECHNOLOGIES = [
  "React",
  "Vite",
  "Mantine UI",
  "TanStack Query",
  "Zod",
  "DnD Kit",
]

export default function WebAdminPanel() {
  const demoUrl = process.env.NEXT_PUBLIC_ADMIN_URL!
  const repoUrl = process.env.NEXT_PUBLIC_ADMIN_REPO!

  return (
    <ProjectSection
      number="03"
      title="Admin Panel"
      meta={`${ADMIN_PANEL_IMAGES.length} screens`}
    >
      <ImageCarousel items={ADMIN_PANEL_IMAGES} />

      <p className="max-w-2xl text-sm text-muted-foreground">
        Admin dashboard for managing products, variants, orders, and storefront
        content.
      </p>

      <TechStack items={ADMIN_PANEL_TECHNOLOGIES} />

      <ProjectLinks
        items={[
          { label: "Live Demo", href: demoUrl },
          { label: "GitHub Repo", href: repoUrl },
        ]}
      />
    </ProjectSection>
  )
}
