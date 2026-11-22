import { Metadata } from "next"
import { ProjectHeader } from "@/components/project-header"
import { ProjectLayout } from "@/components/project-layout"
import MobileApp from "@/features/stash-it/mobile-app"
import Backend from "@/features/stash-it/backend"

const DESCRIPTION =
  "An app to save links, sort them into collections, and find them again later. Flutter client with a Go API."

export const metadata: Metadata = {
  title: "Stash-it",
  description: DESCRIPTION,
}

export default function StashItPage() {
  return (
    <ProjectLayout>
      <ProjectHeader title="Stash-it" description={DESCRIPTION} />

      <MobileApp />
      <Backend />
    </ProjectLayout>
  )
}
