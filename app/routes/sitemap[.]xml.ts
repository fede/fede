import { LoaderFunction } from '@remix-run/node'

const SITE_URL = 'https://federatier.com'

const staticPages = [
  { path: '/', priority: 1.0 },
  { path: '/cv', priority: 0.8 },
]

export const loader: LoaderFunction = async () => {
  const urlSet = staticPages
    .map((page) => {
      return `
      <url>
        <loc>${SITE_URL}${page.path}</loc>
        <priority>${page.priority}</priority>
      </url>`
    })
    .join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlSet}
    </urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
