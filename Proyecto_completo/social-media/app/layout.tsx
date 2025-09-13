import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Código de Ética Profesional - Nicolás Gamboa",
  description: "Compromiso ético como futuro Ingeniero en Software",
  keywords: ["ética profesional", "ingeniería software", "código ética", "compromiso profesional"],
  authors: [{ name: "Nicolás Gamboa" }],
  creator: "Nicolás Gamboa",
  publisher: "Nicolás Gamboa",
  robots: {
    index: false, // No indexar en desarrollo
    follow: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
  },
  // Evitar que aparezca como "v0" en el navegador
  applicationName: "Código de Ética Profesional",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Meta tags adicionales para evitar referencias a v0 */}
        <meta name="application-name" content="Código de Ética Profesional" />
        <meta name="apple-mobile-web-app-title" content="Ética Profesional" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
