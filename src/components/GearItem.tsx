import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface GearItemProps {
  title: string
  description: string
  image: string
  link: string
}

export const GearItem = ({ title, description, image, link }: GearItemProps) => {
  const t = useTranslations('gear')
  return (
    <li className='flex items-center gap-4 transition-opacity'>
      <a
        className='relative aspect-square h-[4rem] w-[4rem] min-w-[4rem] overflow-hidden rounded-xl border border-secondary bg-tertiary shadow-sm'
        href={link}
        target='_blank'
      >
        <Image
          src={image}
          alt={title}
          className='h-full w-full object-cover object-center'
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </a>
      <div className='flex grow items-center justify-between gap-2'>
        <div className='space-y-1'>
          <h3 className='line-clamp-2 font-medium leading-tight text-primary'>{title}</h3>
          <p className='line-clamp-3 text-sm leading-tight text-secondary'>{description}</p>
        </div>
        <div>
          <a
            className='ml-auto h-fit rounded-full bg-tertiary px-4 py-1 text-sm'
            href={link}
            target='_blank'
          >
            {t('get')}
          </a>
        </div>
      </div>
    </li>
  )
}
