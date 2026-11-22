"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ChecksumRow({ checksum }: { checksum: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(checksum)

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }

  return (
    <div className="space-y-1">
      <p className="font-mono text-[0.625rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
        SHA-256
      </p>

      <div className="flex items-center gap-1.5">
        <code className="min-w-0 flex-1 overflow-x-auto border bg-muted px-2.5 py-2 font-mono text-[0.6875rem] text-muted-foreground">
          {checksum}
        </code>

        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          onClick={handleCopy}
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
        <p className="font-mono text-[0.625rem] text-muted-foreground">Copied</p>
      )}
    </div>
  )
}
