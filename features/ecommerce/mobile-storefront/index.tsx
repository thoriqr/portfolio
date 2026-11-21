"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { ProjectSection } from "@/components/project-section"
import { ProjectLinks } from "@/components/project-links"
import { TechStack } from "@/components/tech-stack"
import { ImageCarousel } from "@/components/image-carousel"
import { Button } from "@/components/ui/button"
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
  const [copied, setCopied] = useState(false)

  const repoUrl = process.env.NEXT_PUBLIC_MOBILE_STORE_REPO!
  const apkUrl = process.env.NEXT_PUBLIC_ANDROID_APK_URL!

  const handleCopySha256 = async () => {
    await navigator.clipboard.writeText(APK_SHA256)

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }

  return (
    <ProjectSection
      number="02"
      title="Mobile Storefront"
      meta={`${MOBILE_STOREFRONT_IMAGES.length} screens`}
    >
      <ImageCarousel items={MOBILE_STOREFRONT_IMAGES} variant="gallery" />

      <p className="max-w-2xl text-sm text-muted-foreground">
        Mobile e-commerce storefront for browsing products, managing cart,
        checkout, authentication, and order history.
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
          Android APK provided for demonstration purposes. This app is not
          currently distributed through Google Play.
        </p>

        <div className="space-y-1">
          <p className="font-mono text-[0.625rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            SHA-256
          </p>

          <div className="flex items-center gap-1.5">
            <code className="min-w-0 flex-1 overflow-x-auto border bg-muted px-2.5 py-2 font-mono text-[0.6875rem] text-muted-foreground">
              {APK_SHA256}
            </code>

            <Button
              type="button"
              variant="outline"
              size="icon-sm"
              onClick={handleCopySha256}
              aria-label={copied ? "SHA-256 copied" : "Copy SHA-256 checksum"}
            >
              {copied ? (
                <Check className="size-3.5" />
              ) : (
                <Copy className="size-3.5" />
              )}
            </Button>
          </div>

          {copied && (
            <p className="font-mono text-[0.625rem] text-muted-foreground">
              Copied
            </p>
          )}
        </div>
      </div>
    </ProjectSection>
  )
}
