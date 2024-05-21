import first from '../../public/gallery/1.jpg'
import second from '../../public/gallery/2.jpg'
import third from '../../public/gallery/me.jpg'

import Photo from './Photo'

export default function Gallery() {
  return (
    <>
      <section className='relative flex h-[268px] gap-4'>
        <Photo
          src={first}
          meta='2021-07-12'
          alt='me'
          width={324}
          height={239}
          rotate={-6}
          left={-76}
          index={1}
        />
        <Photo
          src={second}
          meta='2017-07-04'
          alt='me'
          width={230}
          height={250}
          rotate={6.3}
          left={160}
          index={2}
          flipDirection='left'
        />
        <Photo
          src={third}
          meta='2021-05-20'
          alt='me'
          width={280}
          height={235}
          rotate={-5.4}
          left={300}
          index={3}
        />
      </section>
    </>
  )
}
