// Generates sitemap.xml from the static route list + blog posts so it never
// drifts as content is added. Writes to public/ (source of truth, picked up in
// dev and committed) and to dist/ (the deployed build) when it exists.
//
// Run as part of `npm run build`.

import { readFile, writeFile, access } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const SITE_URL = 'https://filmclinicmasterclass.com'

// Static routes (path → metadata). Keep in sync with the <Route>s in App.jsx.
const staticRoutes = [
  { path: '/', changefreq: 'weekly', priority: '1.0', lastmod: '2026-05-06' },
  { path: '/about', changefreq: 'monthly', priority: '0.8', lastmod: '2026-05-06' },
  { path: '/programs/masterclass', changefreq: 'monthly', priority: '0.9', lastmod: '2026-05-06' },
  { path: '/programs/bootcamp', changefreq: 'monthly', priority: '0.9', lastmod: '2026-05-06' },
  { path: '/outcomes', changefreq: 'monthly', priority: '0.7', lastmod: '2026-05-06' },
  { path: '/films/soila', changefreq: 'weekly', priority: '0.9', lastmod: '2026-08-02' },
  { path: '/gallery', changefreq: 'monthly', priority: '0.7', lastmod: '2026-05-06' },
  { path: '/contact', changefreq: 'yearly', priority: '0.6', lastmod: '2026-05-06' },
]

function urlEntry({ path, lastmod, changefreq, priority }) {
  return [
    '  <url>',
    `    <loc>${SITE_URL}${path}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    changefreq ? `    <changefreq>${changefreq}</changefreq>` : null,
    priority ? `    <priority>${priority}</priority>` : null,
    '  </url>',
  ]
    .filter(Boolean)
    .join('\n')
}

async function main() {
  const { default: blogPosts } = await import(
    new URL('../src/data/blogPosts.js', import.meta.url)
  )

  // Most recent post date drives the /blog index lastmod.
  const latestPostDate = blogPosts
    .map((p) => p.date)
    .sort()
    .at(-1)

  const entries = [
    ...staticRoutes,
    {
      path: '/blog',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: latestPostDate || '2026-05-06',
    },
    ...blogPosts.map((post) => ({
      path: `/blog/${post.slug}`,
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: post.date,
    })),
  ]

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(urlEntry),
    '</urlset>',
    '',
  ].join('\n')

  const targets = [join(root, 'public', 'sitemap.xml')]
  const distDir = join(root, 'dist')
  try {
    await access(distDir)
    targets.push(join(distDir, 'sitemap.xml'))
  } catch {
    // dist doesn't exist (e.g. running outside a build) — only update public.
  }

  for (const target of targets) {
    await writeFile(target, xml, 'utf8')
    console.log(`sitemap written: ${target} (${entries.length} urls)`)
  }
}

main().catch((err) => {
  console.error('generate-sitemap failed:', err)
  process.exit(1)
})
