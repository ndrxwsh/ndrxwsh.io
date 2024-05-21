'use client'

import clsx from 'clsx'
import { ReactNode } from 'react'

interface SectionProps {
  heading: string
  headingAlignment?: 'right' | 'left'
  children: ReactNode
  invert?: boolean
}

export const Section = ({ heading, headingAlignment, children, invert = false }: SectionProps) => (
  <section className='col-reverse flex flex-col gap-2 md:flex-row md:gap-9'>
    <h2
      className={clsx(
        'shrink-0 md:w-32',
        headingAlignment === 'right' && 'md:text-right',
        invert ? 'font-medium text-primary' : 'text-secondary'
      )}
    >
      {heading}
    </h2>
    {children}
  </section>
)
