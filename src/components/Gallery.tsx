'use client'

import Photo from './Photo'

export default function Gallery() {
  return (
    <>
      <section className='relative flex h-[268px] gap-4'>
        <Photo
          src={'/gallery/me-after-game.jpg'}
          meta='2022-03-21'
          alt='me'
          width={350}
          height={250}
          rotate={-6}
          left={-120}
          index={1}
        />
        <Photo
          src={'/gallery/graduation.jpg'}
          meta='2019-06-29'
          alt='me'
          width={240}
          height={270}
          rotate={9}
          left={100}
          index={2}
          flipDirection='left'
        />
        <Photo
          src={'/gallery/me-with-dan.jpg'}
          meta='2024-03-05'
          alt='me'
          width={324}
          height={239}
          rotate={6}
          left={450}
          index={4}
        />
        <Photo
          src={'/gallery/on-quay.jpg'}
          meta='2021-05-20'
          alt='me'
          width={250}
          height={250}
          rotate={-5.4}
          left={300}
          index={3}
        />
      </section>
    </>
  )
}
