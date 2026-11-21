import { ProjectSection } from "@/components/project-section"
import { ProjectLinks } from "@/components/project-links"
import { TechStack } from "@/components/tech-stack"
import { ImageCarousel } from "@/components/image-carousel"
import { existingImages } from "@/lib/existing-images"
import { MOBILE_APP_IMAGES } from "./constants"

const MOBILE_APP_TECHNOLOGIES = [
  "Flutter",
  "Dart",
  "Riverpod",
  "GoRouter",
  "Dio",
  "Retrofit",
  "Freezed",
]

export default function MobileApp() {
  const repoUrl = process.env.NEXT_PUBLIC_STASH_IT_APP_REPO!

  const screenshots = existingImages(MOBILE_APP_IMAGES)

  return (
    <ProjectSection
      number="01"
      title="Mobile App"
      meta={screenshots.length > 0 ? `${screenshots.length} screens` : undefined}
    >
      {screenshots.length > 0 && (
        <ImageCarousel items={screenshots} variant="gallery" />
      )}

      <p className="max-w-2xl text-sm text-muted-foreground">
        Flutter client for saving links, browsing the Inbox, filing saved items
        into collections, and searching what has already been kept.
      </p>

      <p className="max-w-2xl text-sm text-muted-foreground">
        Includes Android share intake, device-local pending links, Google
        Sign-In, English and Indonesian localization, and a signed release
        updater.
      </p>

      <TechStack items={MOBILE_APP_TECHNOLOGIES} />

      <ProjectLinks items={[{ label: "GitHub Repo", href: repoUrl }]} />
    </ProjectSection>
  )
}
