export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto max-w-4xl space-y-16 px-4 py-16">{children}</main>
  )
}
