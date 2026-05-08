import { ProjectHeader } from "@/components/project-header"
import { ProjectLayout } from "@/components/project-layout"
import AdminPanel from "@/features/ecommerce/admin-panel"
import BackendApi from "@/features/ecommerce/backend-api"
import Storefront from "@/features/ecommerce/storefront"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "E-Commerce Platform",
  description:
    "Modern e-commerce ecosystem consisting of a storefront, admin dashboard, and backend API built with TypeScript and Node.js.",
}

export default function EcommercePage() {
  return (
    <ProjectLayout>
      <ProjectHeader
        title="E-commerce Platform"
        description="Fullstack system consisting of storefront, admin panel, and backend API."
      />

      <Storefront />
      <AdminPanel />
      <BackendApi />
    </ProjectLayout>
  )
}
