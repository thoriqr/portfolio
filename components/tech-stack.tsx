import { Badge } from "@/components/ui/badge"

export function TechStack({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <Badge
          key={item}
          className="border px-1.5 py-0.5 font-mono text-[0.625rem] font-medium tracking-normal text-muted-foreground normal-case"
        >
          {item}
        </Badge>
      ))}
    </div>
  )
}
