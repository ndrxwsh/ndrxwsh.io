import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type NavLinkProps = {
  href: string
  children: ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = `/${usePathname().split('/')[1]}`
  const active = pathname === href

  return (
    <Link
      className={clsx(
        'hover:text-primary rounded-lg px-4 py-2 text-sm transition-colors',
        active ? 'bg-secondary text-primary' : 'text-secondary'
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
