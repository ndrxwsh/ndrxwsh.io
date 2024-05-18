'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import { ReactNode, useRef } from 'react'

import useMousePosition from '~/hooks/useMousePosition'

interface CardProps {
  children: ReactNode | ReactNode[]
  size?: number
  strength?: number
  className?: string
  noPadding?: boolean
}

export const Card = ({ children, size = 600, strength = 10, className, noPadding }: CardProps) => {
  const ref = useRef(null)
  const { x, y } = useMousePosition(ref)
  const offset = size / 2
  let isMobile = false
  if (typeof window !== 'undefined') {
    isMobile = window.matchMedia('(max-width: 768px)').matches
  }
  return (
    <motion.div
      ref={ref}
      className={clsx(
        'relative h-full w-full overflow-hidden rounded-xl border border-secondary bg-primary text-sm',
        noPadding ? 'p-0' : 'p-4 md:p-6',
        className
      )}
      whileHover='hover'
    >
      <motion.div
        style={
          {
            '--x': `${x ? x - offset : -offset}px`,
            '--y': `${y ? y - offset : -offset}px`,
            width: size,
            height: size,
            background: 'radial-gradient(#FFFFFF 0%, rgba(188, 255, 219, 0) 60%)'
          } as React.CSSProperties
        }
        className={`pointer-events-none absolute inset-0 z-50 translate-x-[var(--x)] translate-y-[var(--y)] opacity-0 transition-opacity`}
        variants={{
          hover: {
            opacity: isMobile ? 0 : strength / 100
          }
        }}
      />
      {children}
    </motion.div>
  )
}
