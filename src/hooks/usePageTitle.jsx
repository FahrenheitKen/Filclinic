import { useEffect } from 'react'

const BASE = 'Film Clinic Masterclass'

export default function usePageMeta(title, description, keywords) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} | Practical Filmmaking Training in Kenya`
    if (description) {
      const descMeta = document.querySelector('meta[name="description"]')
      if (descMeta) descMeta.setAttribute('content', description)
    }
    if (keywords) {
      const kwMeta = document.querySelector('meta[name="keywords"]')
      if (kwMeta) kwMeta.setAttribute('content', keywords)
    }
  }, [title, description, keywords])
}
