'use client'

import Image from 'next/image'
import Link from 'next/link'

import ThemeSwitcher from './theme-switcher'
import NavLink from './ui/NavLink'

const links = [
  { label: 'About', href: '/about' },
  // { label: 'Blog', href: '/blog' },
  { label: 'Gear', href: '/gear' }
]

export default function Navigation() {
  return (
    <header className='md:mt-6'>
      <nav className='mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6'>
        <Link href={'/'} className='text-primary shrink-0'>
          <Image
            className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
            src='/66.svg'
            alt='Next.js Logo'
            width={36}
            height={36}
            priority
          />
        </Link>
        <ul className='hidden items-center gap-1 md:flex'>
          {links.map(link => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
        <div className='ml-auto flex h-8 w-8 items-center justify-center md:ml-0'>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  )
}
