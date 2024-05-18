import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

import { Card } from '../ui'

export default function Github() {
  return (
    <Card className='col-span-1 row-span-1 flex aspect-square flex-col gap-1.5'>
      <div className='flex aspect-square h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-bl from-[#000] to-[#000]'>
        <FaGithub className='text-2xl text-white' />
      </div>
      <p className='text-secondary'>@andrxw66</p>
      <p className='line-clamp-2'>Reach my portfolio</p>

      <Link
        className='mt-auto flex w-fit items-center gap-1.5 rounded-full bg-tertiary px-4 py-1.5 text-sm no-underline'
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/andrxw66'
      >
        <span className='font-medium text-primary'>Let&apos;s go</span>
      </Link>
    </Card>
  )
}
