type Props = {
  number: string
  title: string
  meta?: string
  children: React.ReactNode
}

export function ProjectSection({ number, title, meta, children }: Props) {
  return (
    <section className="space-y-4">
      <div className="flex items-baseline gap-3 border-t pt-3 font-mono text-[0.625rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
        <span className="text-foreground">{number}</span>

        {meta && <span className="ml-auto tracking-[0.06em]">{meta}</span>}
      </div>

      <h2 className="text-base font-semibold tracking-tight">{title}</h2>

      {children}
    </section>
  )
}
