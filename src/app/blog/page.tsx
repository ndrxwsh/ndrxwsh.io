import { Metadata } from 'next'

import { constructMetadata } from '~/lib/utils'

export const metadata: Metadata = constructMetadata({
  title: 'blog | ndrxwsh',
  description: 'My blog. This is where I write about stuff I find interesting'
})

export default function Page() {
  return <div>cooming soon...</div>
}
