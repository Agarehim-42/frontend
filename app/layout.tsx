"use client" // React hookları üçün "use client" direktivi

import type React from "react" // useState'i import edin
import { useState } from "react"
import Header from "@/components/Header" // Header komponentini import edirik
import Footer from "@/components/Footer" // Footer komponentini import edirik
import Container from "@/components/Container" // Container komponentini import edirik
import { ThemeProvider } from "@/components/providers" // ThemeProvider komponentini import edirik
import "./globals.css" // Stil faylını import edirik
// import ThreeDAnimation from '@/components/ThreeAnimations';
import "./css/darklight.css" // Darklight stilini import edirik
import "./css/applybutton.css"
// import TopHeader from '@/components/TopHeader';
import "./css/navbar.css" // Navbar üçün stil faylını import edirik
import Navbar1 from "@/components/Navbar1"
// import Akademiya from '@/components/Akademiya';
import "./css/navbar1.css" // Header üçün stil faylını import edirik



// import Guraba from '@/components/Guraba';
// import '../components/tedris-Dropdown';  // Header üçün stil faylını import edirik
import type { Metadata } from "next"
import Header2 from "@/components/Header2"

// export const metadata: Metadata = {
//   title: "v0 App",
//   description: "Created with v0",
//   generator: "v0.dev",
// }

// RootLayoutProps tipi tərtib etməlisiniz. Məsələn:
interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [showMainPageContent, setShowMainPageContent] = useState(true) // Ana sayfa içeriğinin görünürlüğünü kontrol eden state

  const handleHeaderContentVisibilityChange = (isVisible: boolean) => {
    setShowMainPageContent(isVisible)
  }

  return (
    <html lang="en" suppressHydrationWarning>
<head>
  {/* Google Fonts veya diğer font servisi bağlantısını ekliyoruz */}

</head>
      <body>
        {/* <TopHeader/> */}
        {/* Tema ilə bağlı komponentləri sararaq tətbiq edirik */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {" "}
            {/* Container-in əhatə etdiyi sahə */}
            <Navbar1 />
            <Container>
             
              {/* Container komponenti ətrafında */}
              <Header onContentVisibilityChange={handleHeaderContentVisibilityChange} />{" "}
              <Header2 onContentVisibilityChange={handleHeaderContentVisibilityChange} /> {/* Header'a callback prop'unu geçirin */}
              {/* Header'a callback prop'unu geçirin */}
              {/* <Guraba/> */}
              {/* <Akademiya/> */}
              {/* <ThreeDAnimation/> */}
              {showMainPageContent && <main>{children}</main>} {/* Ana səhifə komponentləri */}
              </Container>
              {showMainPageContent && <Footer isVisible={true} />} 
            
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
