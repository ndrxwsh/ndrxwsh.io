import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { Montserrat } from 'next/font/google'
import { ReactNode } from 'react'

import { Navigation } from '~/components/Navigation'
import { ThemeProvider } from '~/components/ThemeProvider'

import { constructMetadata } from '~/lib/utils'

import './globals.css'

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = constructMetadata()

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body
        className={clsx(
          inter.className,
          'width-full bg-white text-primary antialiased dark:bg-primary'
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <Navigation />
            <div className='mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20'>
              {children}
              <SpeedInsights />
              <Analytics />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
