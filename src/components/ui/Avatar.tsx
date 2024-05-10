import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'

export default function Avatar({
  src,
  alt,
  initials,
  size = 'sm'
}: {
  src?: string | StaticImageData
  alt?: string
  initials?: string | null
  size?: 'sm' | 'md' | 'lg'
}) {
  initials = initials?.slice(0, 2)

  return (
    <div
      className={clsx(
        'text-primary relative inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle font-medium uppercase',
        size === 'sm' && 'bg-tertiary h-10 w-10 text-sm',
        size === 'md' && 'bg-tertiary h-14 w-14 text-base',
        size === 'lg' && 'bg-secondary h-24 w-24 text-2xl'
      )}
    >
      {!src || src === '' ? (
        <div>{initials || ''}</div>
      ) : (
        <Image src={src} alt={alt || ''} fill sizes='80px' />
      )}
    </div>
  )
}
