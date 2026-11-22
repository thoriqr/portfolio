import { ProjectSection } from "@/components/project-section"
import { ProjectLinks } from "@/components/project-links"
import { TechStack } from "@/components/tech-stack"
import { ImageCarousel } from "@/components/image-carousel"
import { ChecksumRow } from "@/components/checksum-row"
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

const APK_SHA256 =
  "2DEC990BFA326A5453EE7C4832C07787EDB83722F2E617010433F9A631DE8934"

export default function MobileApp() {
  const repoUrl = process.env.NEXT_PUBLIC_STASH_IT_APP_REPO!
  const apkUrl = process.env.NEXT_PUBLIC_STASH_IT_ANDROID_APK_URL!

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
        Save a link, then open it again later from the Inbox, from a collection,
        or from search.
      </p>

      <p className="max-w-2xl text-sm text-muted-foreground">
        Share a link from another app and it lands in the Inbox. If the save
        fails, the link stays on the phone so you can try again later. Also has
        English and Indonesian localization and built-in app updates.
      </p>

      <TechStack items={MOBILE_APP_TECHNOLOGIES} />

      <ProjectLinks
        items={[
          { label: "Download APK", href: apkUrl, download: true },
          { label: "GitHub Repo", href: repoUrl },
        ]}
      />

      <div className="space-y-2">
        <p className="max-w-2xl font-mono text-[0.6875rem] leading-relaxed text-muted-foreground">
          Android build, version 1.4.0 (8). Not distributed on Google Play, so
          updates come from the app itself.
        </p>

        {APK_SHA256 && <ChecksumRow checksum={APK_SHA256} />}
      </div>
    </ProjectSection>
  )
}
