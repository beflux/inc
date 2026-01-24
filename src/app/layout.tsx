import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@/components/Analytics"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Beflux, Inc.",
  description: "BeFlux, Inc. - Official Website",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={inter.variable}>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
