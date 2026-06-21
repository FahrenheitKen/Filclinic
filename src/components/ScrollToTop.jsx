import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    // Jump instantly so the global `scroll-behavior: smooth` doesn't
    // animate the scroll up from the previous page's position.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}
