export default function AdminPanel() {
  return (
    <section className="space-y-4">
      <h2 className="font-medium">Admin Panel</h2>

      {/* IMAGE */}
      <div className="border p-4">
        <div className="flex h-64 items-center justify-center bg-muted text-sm text-muted-foreground">
          Admin Screenshot
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        Internal dashboard for managing products, variants, and content.
      </p>

      <p className="text-sm text-muted-foreground">
        Tech stack: Next.js, React Hook Form, Zod
      </p>

      <div className="flex gap-4 text-sm">
        <a href="#" className="underline">
          Live Demo
        </a>
        <a href="#" className="underline">
          GitHub Repo
        </a>
      </div>
    </section>
  )
}
