import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: " Yabesh Thapa | Fanmade Website",
  description: "Fanmade website of Yabesh Thapa - Music, Videos, Merch and more",
  openGraph: {
    title: "Yabesh Thapa | Fanmade Website",
    description: "Fanmade website of Yabesh Thapa - Music, Videos, Merch and more",
    images: ['/bg.jpg'],
  },
  twitter: {
    title: "Yabesh Thapa | Fanmade Website",
    description: "Fanmade website of Yabesh Thapa - Music, Videos, Merch and more",
    images: ['/bg.jpg'],
    card: "summary_large_image",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  )
}