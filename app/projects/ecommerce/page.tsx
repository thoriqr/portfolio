import { ProjectHeader } from "@/components/project-header"
import { ProjectLayout } from "@/components/project-layout"
import AdminPanel from "@/features/ecommerce/admin-panel"
import BackendApi from "@/features/ecommerce/backend-api"
import Storefront from "@/features/ecommerce/storefront"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "E-Commerce Project",
  description:
    "E-commerce application with a storefront, admin dashboard, and backend API.",
}

export default function EcommercePage() {
  return (
    <ProjectLayout>
      <ProjectHeader
        title="E-Commerce Project"
        description="Storefront, admin dashboard, and backend API for an e-commerce application."
      />

      <Storefront />
      <AdminPanel />
      <BackendApi />
    </ProjectLayout>
  )
}
