import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Home() {
  const t = useTranslations('home')

  return (
    <div className='flex flex-col gap-16 md:gap-24'>
      <div className='flex animate-in flex-col gap-8'>
        <div className='animate-in space-y-4' style={{ '--index': 1 } as React.CSSProperties}>
          <h1 className='text-3xl font-bold tracking-tight text-primary'>{t('title')}</h1>
          <p className='max-w-lg text-secondary'>{t('description')}</p>
        </div>
        <div
          className='flex animate-in flex-row gap-3 text-sm'
          style={{ '--index': 2 } as React.CSSProperties}
        >
          {socials.map(social => (
            <Link
              key={social.key}
              href={social.link}
              target='_blank'
              className='flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline underline-offset-4 hover:bg-tertiary'
              rel='noopener noreferrer'
            >
              {t(social.key)}
              <ArrowUpRightIcon className='h-4 w-4 text-tertiary' />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

interface Socials {
  link: string
  key: 'links.tg' | 'links.ig' | 'links.gh'
}

const socials: Socials[] = [
  {
    link: 'https://t.me/ndrxwsh',
    key: 'links.tg'
  },
  {
    link: 'https://www.instagram.com/ndrxwsh',
    key: 'links.ig'
  },
  {
    link: 'https://github.com/ndrxwsh',
    key: 'links.gh'
  }
]
