import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { TechStack } from "@/components/tech-stack"
import { Project } from "@/constants/projects"

type Props = Pick<Project, "title" | "description" | "technologies" | "href"> & {
  index: number
}

export function ProjectCard({
  title,
  description,
  technologies,
  href,
  index,
}: Props) {
  return (
    <Link
      href={href}
      className="group grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-x-4 gap-y-1 border-b py-6 transition-colors hover:bg-muted/40 focus-visible:bg-muted/40 md:grid-cols-[2.5rem_minmax(0,1fr)_auto]"
    >
      <span className="pt-0.5 font-mono text-[0.6875rem] text-muted-foreground transition-colors group-hover:text-foreground">
        {String(index).padStart(2, "0")}
      </span>

      <div className="space-y-2">
        <h3 className="flex items-baseline gap-2 text-lg font-semibold tracking-tight">
          {title}

          <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
        </h3>

        <p className="max-w-xl text-sm text-muted-foreground">{description}</p>

        <TechStack items={technologies} />
      </div>

      <span className="hidden pt-0.5 font-mono text-[0.625rem] tracking-[0.14em] text-muted-foreground uppercase md:block">
        View project
      </span>
    </Link>
  )
}
