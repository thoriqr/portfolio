import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

type Props = {
  title: string
  description: string
}

export function ProjectHeader({ title, description }: Props) {
  return (
    <section className="space-y-4">
      {/* BACK BUTTON */}
      <Button asChild variant="ghost" size="sm" className="w-fit gap-2">
        <Link href="/">
          <ChevronLeft className="size-4" />
          Back to Home
        </Link>
      </Button>

      {/* TITLE */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>

        <p className="max-w-2xl text-muted-foreground">{description}</p>
      </div>
    </section>
  )
}
