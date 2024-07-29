import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'

import { Card } from '../ui'

export default function Instagram() {
  return (
    <Card className='col-span-1 row-span-1 flex aspect-square flex-col gap-1.5'>
      <div className='flex aspect-square h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-bl from-[#7638FA] via-[#FF006A] to-[#FED702]'>
        <FaInstagram className='text-2xl text-white' />
      </div>
      <p className='text-secondary'>@ndrxwsh</p>
      <p className='line-clamp-2'>Photos and all</p>

      <Link
        className='mt-auto flex w-fit items-center gap-1.5 rounded-full bg-tertiary px-4 py-1.5 text-sm no-underline'
        target='_blank'
        rel='noopener noreferrer'
        href='https://instagram.com/ndrxwsh'
      >
        <span className='font-medium text-primary'>Follow</span>
        <span className='text-tertiary'>10</span>
      </Link>
    </Card>
  )
}
