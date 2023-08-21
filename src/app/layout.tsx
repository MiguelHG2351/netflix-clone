import './globals.css'
import localFont from 'next/font/local'
import { ClerkProvider } from '@clerk/nextjs'
import { env } from '@/env.mjs'
import { Metadata } from 'next'

const netflixFont = localFont({
  src: [
    {
      path: '../fonts/NetflixSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/NetflixSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/NetflixSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/NetflixSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ]
})

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  creator: 'Miguel2351'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={netflixFont.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
