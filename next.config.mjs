import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: [
      'm.media-amazon.com',
      'store.storeimages.cdn-apple.com',
      'www.apple.com',
      'ae04.alicdn.com',
      'avatars.mds.yandex.net'
    ]
  }
}
export default withNextIntl(nextConfig)
