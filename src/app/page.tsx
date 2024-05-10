import Avatar from '~/components/ui/Avatar'

import Me from '../../public/me.jpg'

export default function Home() {
  return (
    <div className='flex flex-col gap-16 md:gap-24'>
      <div className='animate-in flex flex-col gap-8'>
        <div className='animate-in' style={{ '--index': 1 } as React.CSSProperties}>
          <Avatar src={Me} alt='Brian Ruiz' initials='br' size='lg' />
        </div>
        <div className='animate-in space-y-4' style={{ '--index': 2 } as React.CSSProperties}>
          <h1 className='text-primary text-3xl font-bold tracking-tight'>Andrew Shihalev</h1>
          <p className='text-secondary max-w-lg'>
            Hi there, I&apos;m a software engineer who builds for the web with a design-oriented
            approach.
          </p>
        </div>
      </div>
    </div>
  )
}
