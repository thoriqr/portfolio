import { Metadata } from "next"
import { ProjectHeader } from "@/components/project-header"
import { ProjectLayout } from "@/components/project-layout"
import WebAdminPanel from "@/features/ecommerce/web-admin-panel"
import BackendApi from "@/features/ecommerce/backend-api"
import WebStorefront from "@/features/ecommerce/web-storefront"
import MobileStorefront from "@/features/ecommerce/mobile-storefront"

const DESCRIPTION =
  "Online store with a web storefront, mobile app, admin dashboard, and backend API."

export const metadata: Metadata = {
  title: "E-Commerce Platform",
  description: DESCRIPTION,
}

export default function EcommercePage() {
  return (
    <ProjectLayout>
      <ProjectHeader title="E-Commerce Platform" description={DESCRIPTION} />

      <WebStorefront />
      <MobileStorefront />
      <WebAdminPanel />
      <BackendApi />
    </ProjectLayout>
  )
}
