// app/robots.ts
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
const SITE_URL = 'https://wembleysquickfix.com';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allowed: search engines + social link-preview bots
      {
        userAgent: [
          'Googlebot',
          'Googlebot-Image',
          'Google-InspectionTool',
          'Bingbot',
          'DuckDuckBot',
          'facebookexternalhit',
          'Twitterbot',
          'LinkedInBot',
          'WhatsApp',
          'Slackbot',
        ],
        allow: '/',
        disallow: ['/api/', '/thank-you/'],
      },
      // Baaki sab bots band
      { userAgent: '*', disallow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}