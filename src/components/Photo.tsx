import clsx from 'clsx'
import { motion } from 'framer-motion'
import localFont from 'next/font/local'
import Image, { StaticImageData } from 'next/image'
import { ReactNode } from 'react'

import { Card } from './ui'

const ticketingFont = localFont({
  src: '../../public/fonts/ticketing.woff2',
  display: 'swap'
})

interface PhotoProps {
  src: StaticImageData | string
  meta?: ReactNode
  filename?: string
  alt: string
  width: number
  height: number
  rotate: number
  left: number
  index: number
  flipDirection?: 'left' | 'right'
  children?: ReactNode
}

export default function Photo({
  src,
  alt,
  filename,
  width,
  height,
  rotate,
  left,
  index,
  flipDirection,
  meta,
  children
}: PhotoProps) {
  const fileName =
    filename || (typeof src !== 'string' && `${src.src.split('/').at(-1)?.split('.')[0]}.jpg`)
  const shared = 'absolute h-full w-full rounded-xl overflow-hidden'
  return (
    <motion.div
      className={`absolute mx-auto cursor-grab hover:before:absolute hover:before:-left-7 hover:before:-top-8 hover:before:block hover:before:h-[300px] hover:before:w-[calc(100%+55px)]`}
      style={{ rotate: `${rotate}deg`, left, width, height, perspective: 1000 }}
      initial={{
        width,
        height,
        rotate: (rotate || 0) - 20,
        y: 200 + index * 20,
        x: index === 1 ? -60 : index === 2 ? -30 : index === 3 ? 30 : 60,
        opacity: 0
      }}
      transition={{
        default: {
          type: 'spring',
          bounce: 0.2,
          duration: index === 1 ? 0.8 : index === 2 ? 0.85 : index === 3 ? 0.9 : 1,
          delay: index * 0.15
        },
        opacity: {
          duration: 0.7,
          ease: [0.23, 0.64, 0.13, 0.99],
          delay: index * 0.15
        },
        scale: { duration: 0.12 }
      }}
      animate={{ width, height, rotate, y: 0, opacity: 1, x: 0 }}
      drag
      whileTap={{ scale: 1.1, cursor: 'grabbing' }}
      whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
      whileHover='flipped'
    >
      <motion.div
        className='relative h-full w-full rounded-xl shadow-md will-change-transform'
        style={{ transformStyle: 'preserve-3d' }}
        transition={{ type: 'spring', duration: 0.4 }}
        variants={{
          flipped: {
            scale: 1.1,
            rotateY: flipDirection === 'right' ? -180 : 180,
            rotateX: 5
          }
        }}
      >
        <div className={shared} style={{ backfaceVisibility: 'hidden' }}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className='pointer-events-none absolute inset-0 h-full w-full rounded-xl bg-neutral-400 object-cover'
            priority
          />
          {children}
        </div>
        <div
          className={clsx(shared, 'flex items-center overflow-hidden rounded-xl bg-[#FFFAF2]')}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <Card strength={50} className='flex items-center'>
            <span className="absolute h-[500px] w-[500px] rotate-[-20deg] bg-[url('/photopaper.png')] bg-[length:280px] bg-repeat" />
            <div className='z-[1] px-6'>
              <div className={clsx(ticketingFont.className, 'flex flex-col gap-1 uppercase')}>
                <p className='text-secondary'>{fileName}</p>
                {meta && <p className='text-sm text-secondary'>{meta}</p>}
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  )
}
