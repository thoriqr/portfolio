import { existsSync } from "node:fs"
import path from "node:path"

type ImageItem = { src: string; label: string }

export function existingImages(items: ImageItem[]): ImageItem[] {
  return items.filter((item) =>
    existsSync(path.join(process.cwd(), "public", item.src))
  )
}
