import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ScholarMatch - AI-Powered Scholarship Discovery Platform",
  description: "Find scholarships tailored to your profile with our AI-powered platform. Simplify your scholarship search and secure funding for your education.",
  keywords: "scholarships, education funding, AI scholarship matching, student grants",
  openGraph: {
    title: "ScholarMatch - AI-Powered Scholarship Discovery Platform",
    description: "Find scholarships tailored to your profile with our AI-powered platform",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ScholarMatch - AI-Powered Scholarship Discovery Platform",
    description: "Find scholarships tailored to your profile with our AI-powered platform"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-9ME3SSV483`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9ME3SSV483');
          `}
        </Script>
      </body>
    </html>
  )
}