import { useState, useEffect } from 'react'

const DISMISSED_KEY = 'poster_dismissed'

export default function FloatingPoster() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(DISMISSED_KEY)) return

    const timer = setTimeout(() => setVisible(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  function close() {
    setVisible(false)
    sessionStorage.setItem(DISMISSED_KEY, '1')
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={close}>
      <div className="relative max-w-md w-[90%] animate-fade-in" onClick={e => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close popup"
          className="absolute -top-3 -right-3 z-10 bg-white text-navy w-8 h-8 rounded-full shadow-lg flex items-center justify-center text-lg font-bold hover:bg-gray-100 transition-colors"
        >
          &times;
        </button>

        {/* Poster linked to application form */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSexDjvcO2hbxiX-zodc8Ux5YkWXjxB3hHTj9jnDsKTLUOfjqg/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/photos/cohort2-poster.jpg"
            alt="Film Clinic Bootcamp 2026 Cohort 2 - Apply Now"
            className="w-full rounded-xl shadow-2xl cursor-pointer"
          />
        </a>
      </div>
    </div>
  )
}
