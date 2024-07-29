import { Metadata } from 'next'

import { GearItem } from '~/components/GearItem'

import { gear } from '~/utils/constants'

export const metadata: Metadata = {
  title: 'Gear | ndrxwsh',
  description: 'My toolbox. This is gear I actually own and recommend.'
}

export default function Gear() {
  const categories = gear.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category)
    }
    return acc
  }, [] as string[])

  categories.sort()
  return (
    <div className='flex flex-col gap-16 md:gap-24'>
      <div className='flex animate-in flex-col gap-8'>
        <div>
          <h1 className='animate-in text-3xl font-bold tracking-tight'>Gear</h1>
          <p className='animate-in text-secondary' style={{ '--index': 1 } as React.CSSProperties}>
            My toolbox.
          </p>
        </div>
        <p
          className='max-w-md animate-in text-tertiary'
          style={{ '--index': 2 } as React.CSSProperties}
        >
          This is all gear I actually own and like. Updated on June 2024.
        </p>
      </div>

      {categories.map((category, index) => (
        <section
          className='flex animate-in flex-col gap-8'
          key={index}
          style={{ '--index': 3 } as React.CSSProperties}
        >
          <h2 className='text-secondary'>{category}</h2>
          <ul className='animated-list grid gap-x-6 gap-y-8 md:grid-cols-2'>
            {gear.map((item, index) => {
              if (item.category === category) {
                return (
                  <GearItem
                    key={index}
                    title={item.name}
                    description={item.description}
                    image={item.image}
                    link={item.link}
                  />
                )
              } else {
                return null
              }
            })}
          </ul>
        </section>
      ))}
    </div>
  )
}
