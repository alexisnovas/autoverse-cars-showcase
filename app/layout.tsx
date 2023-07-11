import './globals.css'
import type { Metadata } from 'next'
import { Navbar, Footer} from "@/components";


export const metadata: Metadata = {
  title: 'AutoVerse',
  description: 'Showcasing the most amazing cars in the world!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
