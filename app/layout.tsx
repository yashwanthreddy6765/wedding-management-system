import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WedHub - Wedding Management Platform',
  description: 'Plan your perfect wedding with our comprehensive management platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
