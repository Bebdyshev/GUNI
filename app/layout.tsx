import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
// Импортируем AuthProvider
import { AuthProvider } from "@/context/auth-context"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata = {
  title: "GUNI - Образовательный проект",
  description: "Современная образовательная платформа для студентов",
}

// Обновляем RootLayout, оборачивая ThemeProvider в AuthProvider
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
