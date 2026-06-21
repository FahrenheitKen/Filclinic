// Post-build prerender for blog posts.
//
// This is a client-side SPA, so og:image / twitter:image set in React are
// never seen by social crawlers (Facebook, WhatsApp, LinkedIn, X, Slack) —
// they don't run JS and just read the static HTML nginx serves. This script
// writes a per-post dist/blog/<slug>/index.html with the post's featured
// image (and other meta) baked into the static head, so share previews work.
//
// nginx `try_files $uri $uri.html $uri/ /index.html` serves /blog/<slug>.html
// for the /blog/<slug> route (200, no redirect), while the SPA still hydrates.

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
  const { default: blogPosts } = await import(
    new URL('../src/data/blogPosts.js', import.meta.url)
  )

  for (const post of blogPosts) {
    const fullTitle = `${post.title} | ${SITE_NAME}`
    const url = `${SITE_URL}/blog/${post.slug}`
    const image = `${SITE_URL}${post.image}`
    const desc = post.metaDescription

    let html = template
    html = setTitle(html, fullTitle)
    html = setCanonical(html, url)
    html = setMetaName(html, 'description', desc)
    if (post.keywords) html = setMetaName(html, 'keywords', post.keywords)

    // Open Graph — article + featured image
    html = setMetaProp(html, 'og:type', 'article')
    html = setMetaProp(html, 'og:title', fullTitle)
    html = setMetaProp(html, 'og:description', desc)
    html = setMetaProp(html, 'og:image', image)
    html = setMetaProp(html, 'og:image:alt', post.title)
    html = setMetaProp(html, 'og:url', url)
    // Drop the logo's fixed dimensions — they don't apply to the featured image.
    html = html.replace(/\s*<meta property="og:image:width"[^>]*>/, '')
    html = html.replace(/\s*<meta property="og:image:height"[^>]*>/, '')

    // Twitter
    html = setMetaName(html, 'twitter:title', fullTitle)
    html = setMetaName(html, 'twitter:description', desc)
    html = setMetaName(html, 'twitter:image', image)
    html = setMetaName(html, 'twitter:image:alt', post.title)

    const blogDir = join(distDir, 'blog')
    await mkdir(blogDir, { recursive: true })
    await writeFile(join(blogDir, `${post.slug}.html`), html, 'utf8')
    console.log(`prerendered /blog/${post.slug} -> og:image ${image}`)
  }
}

main().catch((err) => {
  console.error('prerender-blog failed:', err)
  process.exit(1)
})
