import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import usePageMeta from '../hooks/usePageTitle'
import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi'

const cohorts = [
  {
    id: 'cohort-1',
    name: 'Cohort 1',
    date: 'June 2025',
    description: 'Our inaugural bootcamp cohort brought together passionate filmmakers for an intensive hands-on production experience at Baraza Media Lab.',
    photos: [
      '_MG_7824.jpg', '_MG_7832.jpg', '_MG_7838.jpg', '_MG_7852.jpg',
      '_MG_7876.jpg', '_MG_7894.jpg', '_MG_7939.jpg', '_MG_7960.jpg',
      '_MG_7950.jpg', '_MG_8030.jpg', 'IMG_7910.jpg', 'IMG_7920.jpg',
      '_MG_7835.jpg', '_MG_7841.jpg', '_MG_7878.jpg', '_MG_7891.jpg',
      '_MG_7904.jpg', '_MG_7928.jpg', '_MG_7943.jpg', '_MG_7954.jpg',
      '_MG_7980.jpg', '_MG_7988.jpg', '_MG_8006.jpg', '_MG_8012.jpg',
      '_MG_8033.jpg', '_MG_8036.jpg', 'IMG_7911.jpg', 'IMG_7915.jpg',
      'IMG_7918.jpg', '_MG_7828.jpg', '_MG_7829.jpg', '_MG_7831.jpg',
      '_MG_7833.jpg', '_MG_7834.jpg', '_MG_7836.jpg', '_MG_7837.jpg',
      '_MG_7839.jpg', '_MG_7840.jpg', '_MG_7851.jpg', '_MG_7854.jpg',
      '_MG_7858.jpg', '_MG_7873.jpg', '_MG_7874.jpg', '_MG_7877.jpg',
      '_MG_7881.jpg', '_MG_7885.jpg', '_MG_7887.jpg', '_MG_7888.jpg',
      '_MG_7889.jpg', '_MG_7890.jpg', '_MG_7896.jpg', '_MG_7899.jpg',
      '_MG_7903.jpg', '_MG_7924.jpg', '_MG_7926.jpg', '_MG_7930.jpg',
      '_MG_7932.jpg', '_MG_7934.jpg', '_MG_7941.jpg', '_MG_7947.jpg',
      '_MG_7949.jpg', '_MG_7952.jpg', '_MG_7965.jpg', '_MG_7982.jpg',
      '_MG_7989.jpg', '_MG_7991.jpg', '_MG_8008.jpg', '_MG_8010.jpg',
      '_MG_8016.jpg',
    ],
  },
  // Future cohorts go here:
  // { id: 'cohort-2', name: 'Cohort 2', date: 'Dec 2025', description: '...', photos: [...] },
]

const INITIAL_COUNT = 16

export default function Gallery() {
  const [expanded, setExpanded] = useState({})
  const [lightbox, setLightbox] = useState(null) // { cohortId, index }

  usePageMeta(
    'Gallery',
    'Browse photos from Film Clinic Bootcamp cohorts. See our filmmakers in action during hands-on production experiences.',
    'Film Clinic gallery, bootcamp photos Kenya, filmmaking production photos, behind the scenes filmmaking, Film Clinic cohorts'
  )

  const toggleExpand = (cohortId) => {
    setExpanded((prev) => ({ ...prev, [cohortId]: !prev[cohortId] }))
  }

  const getLightboxCohort = () => lightbox && cohorts.find(c => c.id === lightbox.cohortId)

  const navigate = useCallback((dir) => {
    setLightbox((prev) => {
      if (!prev) return null
      const cohort = cohorts.find(c => c.id === prev.cohortId)
      if (!cohort) return null
      const total = cohort.photos.length
      const next = (prev.index + dir + total) % total
      return { ...prev, index: next }
    })
  }, [])

  useEffect(() => {
    if (!lightbox) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') navigate(1)
      if (e.key === 'ArrowLeft') navigate(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [lightbox, navigate])

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <img
          src="/photos/bootcamp-cohort-1/_MG_7939.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-gold/20 text-gold-light px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            Gallery
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Our Cohorts in Action
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Behind every frame is a filmmaker growing through hands-on production. Browse photos from our bootcamp cohorts.
          </p>
        </div>
      </section>

      {/* Cohort Sections */}
      {cohorts.map((cohort) => {
        const isExpanded = expanded[cohort.id]
        const visiblePhotos = isExpanded ? cohort.photos : cohort.photos.slice(0, INITIAL_COUNT)
        const hasMore = cohort.photos.length > INITIAL_COUNT

        return (
          <section key={cohort.id} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <SectionTitle
              subtitle={cohort.date}
              title={cohort.name}
              description={cohort.description}
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12">
              {visiblePhotos.map((photo, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox({ cohortId: cohort.id, index: i })}
                  className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg cursor-pointer"
                >
                  <img
                    src={`/photos/bootcamp-${cohort.id}/${photo}`}
                    alt={`${cohort.name} production photo ${i + 1}`}
                    width="800"
                    height="600"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-all duration-300" />
                </button>
              ))}
            </div>
            {hasMore && (
              <div className="text-center mt-8">
                <button
                  onClick={() => toggleExpand(cohort.id)}
                  className="bg-navy hover:bg-navy-light text-white font-bold px-8 py-3 rounded-full text-sm uppercase tracking-wider transition-all duration-200 shadow-lg"
                >
                  {isExpanded ? 'Show Less' : `View All ${cohort.photos.length} Photos`}
                </button>
              </div>
            )}
          </section>
        )
      })}

      {/* CTA */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <img
          src="/photos/bootcamp-cohort-1/_MG_7960.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Be Part of the Next Cohort
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Apply now and join the next generation of filmmakers at Film Clinic.
          </p>
          <Link
            to="/contact"
            className="bg-gold hover:bg-gold-dark text-navy font-bold px-10 py-4 rounded-full text-lg uppercase tracking-wider transition-all duration-200 shadow-lg inline-block"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (() => {
        const cohort = getLightboxCohort()
        if (!cohort) return null
        const photo = cohort.photos[lightbox.index]
        return (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <HiX size={32} />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium z-10">
              {lightbox.index + 1} / {cohort.photos.length}
            </div>

            {/* Previous */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1) }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 transition-all z-10"
              aria-label="Previous photo"
            >
              <HiChevronLeft size={28} />
            </button>

            {/* Image */}
            <img
              src={`/photos/bootcamp-${cohort.id}/${photo}`}
              alt={`${cohort.name} production photo ${lightbox.index + 1}`}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1) }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 transition-all z-10"
              aria-label="Next photo"
            >
              <HiChevronRight size={28} />
            </button>
          </div>
        )
      })()}
    </>
  )
}
