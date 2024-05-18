import { Metadata } from "next"

import { Inter, Playfair_Display } from "next/font/google"

import "styles/globals.css"
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair-display",
})

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html data-mode="light">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
