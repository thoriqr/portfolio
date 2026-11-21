import { Metadata } from "next"
import { ProjectHeader } from "@/components/project-header"
import { ProjectLayout } from "@/components/project-layout"
import MobileApp from "@/features/stash-it/mobile-app"
import Backend from "@/features/stash-it/backend"

export const metadata: Metadata = {
  title: "Stash-it",
  description:
    "A personal library for links found on the internet, built with a Flutter client and a Go API and worker.",
}

export default function StashItPage() {
  return (
    <ProjectLayout>
      <ProjectHeader
        title="Stash-it"
        description="A personal library for links found on the internet, built with a Flutter client and a Go API and worker."
      />

      <MobileApp />
      <Backend />
    </ProjectLayout>
  )
}
