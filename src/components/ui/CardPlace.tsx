'use client'

import { useTranslations } from 'next-intl'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

export interface CardPlaceProps {
  title: 'student' | 'front' | 'full'
  company: 'mageinn' | 'bureau' | 'kgeu'
  imageSrc: string | StaticImageData
  time?: string
  link?: string
}

export const CardPlace = ({ title, company, imageSrc, time, link }: CardPlaceProps) => {
  const tWork = useTranslations('about.work.companies')
  const tSpec = useTranslations('about.work')
  const content = (
    <>
      <div className='flex items-center gap-4'>
        <Image src={imageSrc} alt={company} width={48} height={48} className='rounded-full' />
        <div className='flex flex-col gap-px'>
          <p className={link ? 'external-arrow' : ''}>{tSpec(title)}</p>
          <p className='text-secondary'>{tWork(company)}</p>
        </div>
      </div>
      {time && <time className='text-secondary'>{time}</time>}
    </>
  )
  return (
    <li className='transition-opacity' key={company}>
      {link ? (
        <Link
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='-mx-3 -my-2 flex w-full justify-between px-3 py-2 no-underline'
        >
          {content}
        </Link>
      ) : (
        <div className='flex justify-between '>{content}</div>
      )}
    </li>
  )
}
