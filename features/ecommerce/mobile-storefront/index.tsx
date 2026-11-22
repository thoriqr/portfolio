import { ProjectSection } from "@/components/project-section"
import { ProjectLinks } from "@/components/project-links"
import { TechStack } from "@/components/tech-stack"
import { ImageCarousel } from "@/components/image-carousel"
import { ChecksumRow } from "@/components/checksum-row"
import { MOBILE_STOREFRONT_IMAGES } from "./constants"

const MOBILE_STOREFRONT_TECHNOLOGIES = [
  "Flutter",
  "Riverpod",
  "Dio",
  "Retrofit",
  "GoRouter",
  "Freezed",
]

const APK_SHA256 =
  "15F6CE59F242C0F734B7DEDEC3E9205EC89CFD9905BE5D2707C61C4A3EB59F0B"

export default function MobileStorefront() {
  const repoUrl = process.env.NEXT_PUBLIC_MOBILE_STORE_REPO!
  const apkUrl = process.env.NEXT_PUBLIC_ANDROID_APK_URL!

  return (
    <ProjectSection
      number="02"
      title="Mobile Storefront"
      meta={`${MOBILE_STOREFRONT_IMAGES.length} screens`}
    >
      <ImageCarousel items={MOBILE_STOREFRONT_IMAGES} variant="gallery" />

      <p className="max-w-2xl text-sm text-muted-foreground">
        Mobile storefront for browsing products, managing the cart, checkout,
        login, and order history.
      </p>

      <TechStack items={MOBILE_STOREFRONT_TECHNOLOGIES} />

      <ProjectLinks
        items={[
          { label: "GitHub Repo", href: repoUrl },
          { label: "Download APK", href: apkUrl, download: true },
        ]}
      />

      <div className="space-y-2">
        <p className="max-w-2xl font-mono text-[0.6875rem] leading-relaxed text-muted-foreground">
          Demo build, not distributed on Google Play. Payment and shipping still
          run in sandbox.
        </p>

        <ChecksumRow checksum={APK_SHA256} />
      </div>
    </ProjectSection>
  )
}
