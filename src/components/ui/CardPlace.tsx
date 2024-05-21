'use client'

import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

export interface CardPlaceProps {
  title: string
  company: string
  imageSrc: string | StaticImageData
  time?: string
  link?: string
}

export const CardPlace = ({ title, company, imageSrc, time, link }: CardPlaceProps) => {
  const content = (
    <>
      <div className='flex items-center gap-4'>
        <Image
          src={imageSrc}
          alt={company}
          width={48}
          height={48}
          className={clsx('rounded-full', company === 'University of Houston' && 'bg-neutral-50')}
        />
        <div className='flex flex-col gap-px'>
          <p className={link ? 'external-arrow' : ''}>{title}</p>
          <p className='text-secondary'>{company}</p>
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
