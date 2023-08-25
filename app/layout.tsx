import './globals.css'
import type { Metadata } from 'next'
import ToasterContext from './context/ToasterContext'
import { Inter } from 'next/font/google'
import AuthContext from './context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Messenger',
  description: 'BEUmate Messenger',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
        {children}
        </AuthContext>
        
      </body>
    </html>
  )
}
