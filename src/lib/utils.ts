import { Metadata } from 'next'

export function constructMetadata({
  title = 'ndrxwsh | software engineer',
  description = 'Kazan-based software sngineer',
  image = '/thumbnail.png',
  icons = '/favicon.ico'
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }]
    },
    icons,
    metadataBase: new URL('https://ndrxwsh.app/')
  }
}
