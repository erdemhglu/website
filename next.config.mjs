/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/bluesky',
        destination: 'https://bsky.app/profile/ta2edh.com',
        permanent: true,
      },
      {
        source: '/blog',
        destination: 'https://blog.ta2edh.com',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.com/users/1216321857548980375',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/ta2edh',
        permanent: true,
      },
      {
        source: '/hackernews',
        destination: 'https://news.ycombinator.com/user?id=ta2edh',
        permanent: true,
      },
      {
        source: '/hn',
        destination: 'https://news.ycombinator.com/user?id=ta2edh',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'http://instagram.com/erdemhglu',
        permanent: true,
      },
      {
        source: '/ig',
        destination: 'http://instagram.com/erdemhglu',
        permanent: true,
      },
      {
        source: '/keybase',
        destination: 'https://keybase.io/ta2edh',
        permanent: true,
      },
      {
        source: '/lemmy',
        destination: 'https://lemmy.world/u/ta2edh',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/erdemhacisalihoglu/',
        permanent: true,
      },
      {
        source: '/mastodon',
        destination: 'https://mastodon.social/@ta2edh',
        permanent: true,
      },
      {
        source: '/matrix',
        destination: 'https://matrix.to/#/@ta2edh:matrix.org',
        permanent: true,
      },
      {
        source: '/medium',
        destination: 'https://medium.com/@ta2edh',
        permanent: true,
      },
      {
        source: '/qrz',
        destination: 'https://www.qrz.com/db/W6/TA2EDH',
        permanent: true,
      },
      {
        source: '/signal',
        destination: 'https://signal.me/#eu/hKRNDYlWdknbk948hkD8QHtFe1IsveuJFv4GVNqH-HYe6Okb3PRAGI5RP8v-8iQu',
        permanent: true,
      },
      {
        source: '/steam',
        destination: 'https://steamcommunity.com/id/ta2edh/',
        permanent: true,
      },
      {
        source: '/telegram',
        destination: 'https://t.me/ta2edh',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://x.com/ta2edh',
        permanent: true,
      },
      {
        source: '/x',
        destination: 'https://x.com/ta2edh',
        permanent: true,
      },
      {
        source: '/wechat',
        destination: 'https://u.wechat.com/kIH4NveDHohDupxa5Vl0B3M?s=2',
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://youtube.com/@ta2edh',
        permanent: true,
      },
      {
        source: '/yt',
        destination: 'https://youtube.com/@ta2edh',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
