import Link from "next/link"

type ProjectLink = {
  label: string
  href: string
  download?: boolean
}

export function ProjectLinks({ items }: { items: ProjectLink[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          target="_blank"
          download={item.download}
          className="border px-2.5 py-1.5 font-mono text-[0.625rem] tracking-[0.1em] text-muted-foreground uppercase transition-colors hover:border-foreground/30 hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}
