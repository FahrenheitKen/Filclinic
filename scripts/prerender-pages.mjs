// Post-build prerender for static (non-blog) routes.
//
// This is a client-side SPA, so the title/description/keywords/OG tags that
// usePageMeta() sets in React are never seen by non-JS crawlers or "View
// Source" — they read the static HTML nginx serves, which is the same
// index.html for every route. This script writes a per-route dist/<route>.html
// with that route's meta baked into the static <head>, so each page has a
// unique, crawlable title, description, and keywords.
//
// nginx `try_files $uri $uri.html $uri/ /index.html` serves /about.html for the
// /about route (200, no redirect), while the SPA still hydrates. Mirrors the
// approach in prerender-blog.mjs. Source of truth: src/data/routeMeta.js.

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const distDir = join(root, 'dist')

const SITE_NAME = 'Film Clinic Masterclass'
const SITE_URL = 'https://filmclinicmasterclass.com'

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function setMetaProp(html, prop, value) {
  const re = new RegExp(`(<meta property="${prop}" content=")[^"]*(")`)
  return html.replace(re, `$1${escapeHtml(value)}$2`)
}

function setMetaName(html, name, value) {
  const re = new RegExp(`(<meta name="${name}" content=")[^"]*(")`)
  return html.replace(re, `$1${escapeHtml(value)}$2`)
}

function setTitle(html, value) {
  return html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(value)}</title>`)
}

function setCanonical(html, url) {
  return html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
}

async function main() {
  const template = await readFile(join(distDir, 'index.html'), 'utf8')
  const { default: routeMeta } = await import(
    new URL('../src/data/routeMeta.js', import.meta.url)
  )

  for (const route of routeMeta) {
    const fullTitle = `${route.title} | ${SITE_NAME}`
    const url = `${SITE_URL}${route.path}`
    const desc = route.description

    let html = template
    html = setTitle(html, fullTitle)
    html = setCanonical(html, url)
    html = setMetaName(html, 'description', desc)
    if (route.keywords) html = setMetaName(html, 'keywords', route.keywords)

    // Open Graph
    html = setMetaProp(html, 'og:title', fullTitle)
    html = setMetaProp(html, 'og:description', desc)
    html = setMetaProp(html, 'og:url', url)

    // Twitter
    html = setMetaName(html, 'twitter:title', fullTitle)
    html = setMetaName(html, 'twitter:description', desc)

    // Optional per-route share image (falls back to the template's logo)
    if (route.image) {
      const image = `${SITE_URL}${route.image}`
      html = setMetaProp(html, 'og:image', image)
      html = setMetaProp(html, 'og:image:alt', route.title)
      html = setMetaName(html, 'twitter:image', image)
      html = setMetaName(html, 'twitter:image:alt', route.title)
      // The logo's fixed dimensions don't apply to a custom image.
      html = html.replace(/\s*<meta property="og:image:width"[^>]*>/, '')
      html = html.replace(/\s*<meta property="og:image:height"[^>]*>/, '')
    }

    const outFile = join(distDir, `${route.path.replace(/^\//, '')}.html`)
    await mkdir(dirname(outFile), { recursive: true })
    await writeFile(outFile, html, 'utf8')
    console.log(`prerendered ${route.path} -> ${outFile.replace(distDir, 'dist')}`)
  }
}

main().catch((err) => {
  console.error('prerender-pages failed:', err)
  process.exit(1)
})
