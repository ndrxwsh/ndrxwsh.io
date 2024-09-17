import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ReactNode } from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import Gallery from '~/components/Gallery'
import Places from '~/components/Places'
import { Link, Section } from '~/components/ui'

import { constructMetadata } from '~/lib/utils'

export const metadata: Metadata = constructMetadata({
  title: 'about me | ndrxwsh',
  description: 'A glimpse into me.'
})

export default function About() {
  const t = useTranslations('about')
  const tConnect = useTranslations('about.connect.links')
  return (
    <div className='flex flex-col gap-16 md:gap-24'>
      <div>
        <h1 className='animate-in text-3xl font-bold tracking-tight text-primary'>{t('title')}</h1>
        <p className='animate-in text-secondary' style={{ '--index': 1 } as React.CSSProperties}>
          {t('subtitle')}
        </p>
      </div>
      <div className='mb-8 md:hidden'>
        <div className='animate-in' style={{ '--index': 1 } as React.CSSProperties}>
          <Image
            src={'/gallery/me-after-game.jpg'}
            alt={'me'}
            width={324}
            height={139}
            className='pointer-events-none relative inset-0 h-60 -rotate-6 rounded-xl bg-gray-400 object-cover shadow-md'
            priority
          />
        </div>

        <div className='animate-in' style={{ '--index': 2 } as React.CSSProperties}>
          <Image
            src={'/gallery/graduation.jpg'}
            alt={'me'}
            width={180}
            height={200}
            className='pointer-events-none absolute inset-0 -top-64 left-[50%] rotate-6 rounded-xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56'
            priority
          />
        </div>

        <div className='animate-in' style={{ '--index': 2 } as React.CSSProperties}>
          <Image
            src={'/gallery/on-quay.jpg'}
            alt={'me'}
            width={180}
            height={200}
            className='pointer-events-none absolute inset-0 -top-24 left-[50%] rotate-12 rounded-xl bg-gray-400 object-cover shadow-md md:left-[60%] md:w-56'
            priority
          />
        </div>
      </div>
      <div className='hidden md:block'>
        <Gallery />
      </div>
      <div
        className='flex animate-in flex-col gap-16 md:gap-24'
        style={{ '--index': 3 } as React.CSSProperties}
      >
        <Section heading={t('title')} headingAlignment='left'>
          <div className='flex flex-col gap-6'>
            <p>{t('description1', { years: new Date().getFullYear() - 2021 })}</p>
            <p>{t('description2')}</p>
          </div>
        </Section>
        <Section heading={t('connect.title')} headingAlignment='left'>
          <ul className='animated-list grid flex-grow grid-cols-1 gap-3 md:grid-cols-2'>
            {connectLinks.map(link => (
              <li className='col-span-1' key={link.label}>
                <Link
                  href={link.href}
                  className='inline-grid w-full rounded-lg bg-secondary p-4 no-underline '
                >
                  <div className='flex items-center gap-3'>
                    <span className='text-xl'>{link.icon}</span>
                    {tConnect(link.label)}
                    <ArrowUpRightIcon className='ml-auto h-5 w-5 text-tertiary' />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
        <Section heading={t('education.title')} headingAlignment='left'>
          <div className='flex w-full flex-col gap-8'>
            <p>{t('education.description')}</p>
            <Places items={educationplaces} />
          </div>
        </Section>
        <Section heading={t('work.title')} headingAlignment='left'>
          <div className='flex w-full flex-col gap-8'>
            <p>{t('work.description')}</p>
            <Places items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  )
}

interface Places {
  title: 'student' | 'front' | 'full'
  company: 'mageinn' | 'bureau' | 'kgeu'
  time: string
  imageSrc: string
  link: string
}

const workplaces: Places[] = [
  {
    title: 'full',
    company: 'mageinn',
    time: '2023 - 2024',
    imageSrc: '/work/mageinn.png',
    link: 'https://mageinn.com/'
  },
  {
    title: 'front',
    company: 'bureau',
    time: '2021 - 2023',
    imageSrc: '/work/buro1440.png',
    link: 'https://1440.space/'
  }
]

const educationplaces: Places[] = [
  {
    title: 'student',
    company: 'kgeu',
    time: '2021 - 2025',
    imageSrc: '/education/kgeu.png',
    link: 'https://www.kgeu.ru/'
  }
]

interface ConnectLink {
  label: 'tg' | 'ig' | 'gh' | 'x' | 'linkedin'
  href: string
  icon: ReactNode
}

const connectLinks: ConnectLink[] = [
  {
    label: 'tg',
    href: 'https://t.me/ndrxwsh',
    icon: <FaTelegram />
  },
  {
    label: 'ig',
    href: 'https://www.instagram.com/ndrxwsh/',
    icon: <FaInstagram />
  },
  {
    label: 'x',
    href: 'https://twitter.com/ndrxwsh',
    icon: <FaXTwitter />
  },
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/ndrxwsh/',
    icon: <FaLinkedin />
  },
  {
    label: 'gh',
    href: 'https://github.com/ndrxwsh',
    icon: <FaGithub />
  }
]
