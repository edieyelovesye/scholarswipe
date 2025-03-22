// src/app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] })

// Keep existing metadata configuration

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
        
        {/* Google Analytics Scripts - KEEP THESE */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9ME3SSV483"
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