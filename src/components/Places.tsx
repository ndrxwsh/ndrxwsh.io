'use client'

import { CardPlace, CardPlaceProps } from './ui'

export default function Places({ items }: { items: CardPlaceProps[] }) {
  return <ul className='animated-list flex flex-col gap-8'>{items.map(CardPlace)}</ul>
}
