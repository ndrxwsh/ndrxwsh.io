import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navigation from '~/components/Navigation'
import { ThemeProvider } from '~/components/ThemeProvider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'andrxw66',
  description: 'Kazan-based Software Engineer.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          inter.className,
          'width-full bg-white text-primary antialiased dark:bg-black'
        )}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navigation />
          <div className='mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20'>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
