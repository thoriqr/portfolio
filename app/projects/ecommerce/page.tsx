import { ProjectHeader } from "@/components/project-header"
import { ProjectLayout } from "@/components/project-layout"
import WebAdminPanel from "@/features/ecommerce/web-admin-panel"
import BackendApi from "@/features/ecommerce/backend-api"
import WebStorefront from "@/features/ecommerce/web-storefront"
import { Metadata } from "next"
import MobileStorefront from "@/features/ecommerce/mobile-storefront"

export const metadata: Metadata = {
  title: "E-Commerce Platform",
  description:
    "E-commerce platform with a web storefront, mobile app, admin dashboard, and backend API.",
}

export default function EcommercePage() {
  return (
    <ProjectLayout>
      <ProjectHeader
        title="E-Commerce Platform"
        description="E-commerce platform with a web storefront, mobile app, admin dashboard, and backend API."
      />

      <WebStorefront />
      <MobileStorefront />
      <WebAdminPanel />
      <BackendApi />
    </ProjectLayout>
  )
}
