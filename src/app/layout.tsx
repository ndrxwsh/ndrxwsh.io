import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { ReactNode } from 'react'

import { Navigation } from '~/components/Navigation'
import { ThemeProvider } from '~/components/ThemeProvider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ndrxwsh',
  description: 'Kazan-based Software Engineer.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <Script strategy='afterInteractive' src='https://mc.yandex.ru/metrika/tag.js' />
        <script type='text/javascript'>
          {`(function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {
              if (document.scripts[j].src === r) {
                return;
              }
            }
            k=e.createElement(t),a=e.getElementsByTagName(t)[0];
            k.async=1;
            k.src=r;a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          `}
        </script>
      </head>
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
        {/* Noscript part */}
        <noscript>
          <div>
            <img
              src='https://mc.yandex.ru/watch/97941467'
              style={{ position: 'absolute', left: '-9999px' }}
              alt=''
            />
          </div>
        </noscript>
      </body>
    </html>
  )
}
