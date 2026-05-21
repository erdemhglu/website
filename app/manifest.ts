import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Erdem Hacisalihoglu',
    short_name: 'Erdem',
    description: 'Radioamateur & Softwareentwickler',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
  }
}
