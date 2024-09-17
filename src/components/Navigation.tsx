'use client'

import { CloseButton, Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Fragment } from 'react'

import { LangSwitcher } from './LangSwitcher'
import { ThemeSwitcher } from './ThemeSwitcher'
import { NavLink } from './ui'

const links: { label: 'about' | 'blog' | 'gear'; href: string }[] = [
  { label: 'about', href: '/about' },
  { label: 'blog', href: '/blog' },
  { label: 'gear', href: '/gear' }
]

export const Navigation = () => {
  const pathname = `/${usePathname().split('/')[1]}`

  const router = useRouter()

  const t = useTranslations('nav')

  const handleNavigate = (href: string) => {
    router.push(href)
  }

  return (
    <header className='md:mt-6'>
      <nav className='mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6'>
        <Link href={'/'} className='shrink-0 text-primary'>
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
              <NavLink href={link.href}>{t(link.label)}</NavLink>
            </li>
          ))}
        </ul>
        <div className='ml-auto mr-3 flex h-8 w-8 items-center justify-center md:ml-0 md:mr-0'>
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
        <Popover className='relative md:hidden'>
          <PopoverButton className='flex h-8 w-8 items-center justify-center rounded-lg text-secondary'>
            <Bars3Icon className='h-5 w-5 cursor-pointer text-secondary transition-colors hover:text-primary' />
          </PopoverButton>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <PopoverPanel className='absolute right-0 z-10 mt-2 w-40 origin-top-right overflow-auto rounded-xl bg-contrast p-2 text-base shadow-md focus:outline-none sm:text-sm'>
              <div className='grid'>
                {links.map(link => (
                  <CloseButton
                    key={link.href}
                    onClick={() => handleNavigate(link.href)}
                    className={clsx(
                      'rounded-md px-4 py-2 transition-colors hover:text-primary',
                      pathname === link.href ? 'bg-secondary font-medium' : 'font-normal'
                    )}
                  >
                    {t(link.label)}
                  </CloseButton>
                ))}
              </div>
            </PopoverPanel>
          </Transition>
        </Popover>
      </nav>
    </header>
  )
}
