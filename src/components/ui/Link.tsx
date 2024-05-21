import clsx from 'clsx'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { ReactNode } from 'react'

type LinkProps = {
  children: ReactNode
  className?: string
  underline?: boolean
} & NextLinkProps

export const Link = (props: LinkProps) => {
  const isExternal = !props.href.toString().startsWith('/')
  const { underline, ...rest } = props
  return (
    <NextLink
      {...rest}
      className={clsx(
        'underline-offset-4',
        (isExternal || underline) && 'underline',
        props.className
      )}
      target={isExternal ? '_blank' : undefined}
    >
      {props.children}
    </NextLink>
  )
}
