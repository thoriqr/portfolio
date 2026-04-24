import { ProjectHeader } from "@/components/project-header"
import { ProjectLayout } from "@/components/project-layout"
import AdminPanel from "@/features/ecommerce/admin-panel"
import BackendApi from "@/features/ecommerce/backend-api"
import Storefront from "@/features/ecommerce/storefront"

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
