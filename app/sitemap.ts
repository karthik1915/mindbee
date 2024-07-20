import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();
  return [
    {
      url: 'https://mindbeesconsulting.com/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },

  ]
}