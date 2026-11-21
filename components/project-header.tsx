import Link from "next/link"
import { ChevronLeft } from "lucide-react"

type Props = {
  title: string
  description: string
}

export function ProjectHeader({ title, description }: Props) {
  return (
    <section className="space-y-4">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-mono text-[0.625rem] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-foreground"
      >
        <ChevronLeft className="size-3.5" />
        Index
      </Link>

      <div className="space-y-2">
        <h1 className="text-[2.125rem] leading-tight font-semibold tracking-tight text-balance">
          {title}
        </h1>

        <p className="max-w-xl text-muted-foreground">{description}</p>
      </div>
    </section>
  )
}
