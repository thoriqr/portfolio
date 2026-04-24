import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

type Props = {
  title: string
  description: string
  href: string
}

export function ProjectCard({ title, description, href }: Props) {
  return (
    <Link
      href={href}
      className="group block space-y-4 border p-6 transition hover:border-muted-foreground/20 hover:bg-muted/50"
    >
      <div className="space-y-2">
        <h3 className="text-lg font-medium">{title}</h3>

        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>View project</span>

        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </Link>
  )
}
