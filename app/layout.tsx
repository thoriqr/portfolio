import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Metadata } from "next"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Thoriq Rahman",
    template: "%s | Thoriq Rahman",
  },
  description:
    "Fullstack developer focused on building web and e-commerce applications.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>
          <div className="relative mx-auto max-w-4xl px-4">
            <div className="absolute top-6 right-4">
              <ThemeToggle />
            </div>

            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
