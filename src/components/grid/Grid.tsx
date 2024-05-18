import { Card } from '../ui'

import Github from './Github'
import Map from './Map.jsx'
import Telegram from './Telegram'

export default function Grid() {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-6'>
      <Github />
      <Card strength={0} noPadding className='relative col-span-1 row-span-1 md:col-span-2'>
        <Map lng={49.1} lat={55.79} />
        <div className='absolute bottom-4 left-4 flex items-center rounded-lg bg-neutral-100/75 px-4 py-1.5 backdrop-blur dark:bg-neutral-900/75 md:bottom-6 md:left-6'>
          <p className='text-sm font-medium text-primary'>Kazan</p>
        </div>
      </Card>
      <Telegram />
    </div>
  )
}
