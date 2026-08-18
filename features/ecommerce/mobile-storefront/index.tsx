"use client"

import { ImageCarousel } from "@/components/image-carousel"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { MOBILE_STOREFRONT_IMAGES } from "./constants"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { useState } from "react"

const MOBILE_STOREFRONT_TECHNOLOGIES = [
  "Flutter",
  "Riverpod",
  "Dio",
  "Retrofit",
  "GoRouter",
  "Freezed",
]

export default function MobileStorefront() {
  const [copied, setCopied] = useState(false)

  const repoUrl = process.env.NEXT_PUBLIC_MOBILE_STORE_REPO!
  const apkUrl = process.env.NEXT_PUBLIC_ANDROID_APK_URL!

  const apkSha256 =
    "15F6CE59F242C0F734B7DEDEC3E9205EC89CFD9905BE5D2707C61C4A3EB59F0B"

  const handleCopySha256 = async () => {
    await navigator.clipboard.writeText(apkSha256)

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }

  return (
    <section className="space-y-4">
      <h2 className="font-medium">Mobile Storefront</h2>

      <ImageCarousel items={MOBILE_STOREFRONT_IMAGES} variant="gallery" />

      <p className="text-sm text-muted-foreground">
        Mobile e-commerce storefront for browsing products, managing cart,
        checkout, authentication, and order history.
      </p>

      <div className="flex flex-wrap gap-3">
        {MOBILE_STOREFRONT_TECHNOLOGIES.map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        <Link href={repoUrl} target="_blank" className="underline">
          GitHub Repo
        </Link>

        <a href={apkUrl} download className="underline">
          Download APK
        </a>
      </div>

      <div className="space-y-2">
        <p className="text-xs text-muted-foreground">
          Android APK provided for demonstration purposes. This app is not
          currently distributed through Google Play.
        </p>

        <div className="space-y-1">
          <p className="text-xs font-medium">SHA-256</p>

          <div className="flex items-center gap-2">
            <code className="min-w-0 flex-1 overflow-x-auto rounded-sm bg-muted px-3 py-2 font-mono text-xs">
              {apkSha256}
            </code>

            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={handleCopySha256}
              className="h-8 w-8 shrink-0"
              aria-label={copied ? "SHA-256 copied" : "Copy SHA-256 checksum"}
            >
              {copied ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </Button>
          </div>

          {copied && <p className="text-xs text-muted-foreground">Copied</p>}
        </div>
      </div>
    </section>
  )
}
