import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'http://bledbonds.es/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://bledbonds.es/newsletter',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://bledbonds.es/what-is',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://bledbonds.es/app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://bledbonds.es/faq',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://bledbonds.es/register',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://bledbonds.es/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://bledbonds.es/blog/1',
      lastModified: new Date('2024-07-23'),
      changeFrequency: 'never',
      priority: 1,
    },
    {
      url: 'https://bledbonds.es/blog/2',
      lastModified: new Date('2024-07-30'),
      changeFrequency: 'never',
      priority: 1,
    },
    {
      url: 'https://bledbonds.es/blog/delete',
      lastModified: new Date('2024-09-25'),
      changeFrequency: 'never',
      priority: 1,
    },
    {
      url: 'https://bledbonds.es/blog/update',
      lastModified: new Date('2024-09-25'),
      changeFrequency: 'never',
      priority: 1,
    },
    {
      url: 'https://bledbonds.es/ciegas',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://bledbonds.es/privacidad',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ]
}