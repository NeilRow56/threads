import { Inter } from 'next/font/google'

import { ClerkProvider } from '@clerk/nextjs'

import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Threads',
  description: 'A next.js 13 Meta Threads Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          <div className="flex min-h-screen w-full items-center justify-center">
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
