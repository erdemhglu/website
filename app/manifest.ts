import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Erdem Hacısalihoğlu',
    short_name: 'Erdem Hacısalihoğlu',
    description: 'Radioamateur & Softwareentwickler',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
  }
}
