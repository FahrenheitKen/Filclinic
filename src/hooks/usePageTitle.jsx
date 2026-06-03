import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_NAME = 'Film Clinic Masterclass'
const SITE_URL = 'https://filmclinicmasterclass.com'
const DEFAULT_TITLE = `${SITE_NAME} | Practical Filmmaking Training in Kenya`
const DEFAULT_DESCRIPTION =
  'Film Clinic Masterclass offers practical filmmaking training through intensive masterclasses and hands-on bootcamps in Nakuru, Kenya. Learn, produce, and launch your filmmaking career.'
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function usePageMeta(title, description, keywords, options = {}) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
    const desc = description || DEFAULT_DESCRIPTION
    const url = `${SITE_URL}${pathname === '/' ? '' : pathname}`
    const ogImage = options.image ? `${SITE_URL}${options.image}` : DEFAULT_OG_IMAGE

    document.title = fullTitle

    setMeta('meta[name="description"]', 'content', desc)
    if (keywords) setMeta('meta[name="keywords"]', 'content', keywords)

    setLink('canonical', url)

    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', desc)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[property="og:image"]', 'content', ogImage)

    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', desc)
    setMeta('meta[name="twitter:image"]', 'content', ogImage)

    setMeta(
      'meta[name="robots"]',
      'content',
      options.noindex ? 'noindex, nofollow' : 'index, follow'
    )
  }, [title, description, keywords, pathname, options.image, options.noindex])
}
