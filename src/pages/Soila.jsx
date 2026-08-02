import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import usePageMeta from '../hooks/usePageTitle'
import { HiChevronLeft, HiChevronRight, HiX, HiPlay } from 'react-icons/hi'
import soila from '../data/soila'

function useCountdown(targetIso) {
  const target = new Date(targetIso + 'T19:00:00+03:00').getTime() // 7pm EAT premiere
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const diff = target - now
  const released = diff <= 0
  const total = Math.max(diff, 0)
  return {
    released,
    days: Math.floor(total / 86400000),
    hours: Math.floor((total % 86400000) / 3600000),
    minutes: Math.floor((total % 3600000) / 60000),
    seconds: Math.floor((total % 60000) / 1000),
  }
}

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-gold text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] mt-1">
        {label}
      </span>
    </div>
  )
}

export default function Soila() {
  const [lightbox, setLightbox] = useState(null) // index | null
  const [expanded, setExpanded] = useState(false)
  const { released, days, hours, minutes, seconds } = useCountdown(soila.premiereDate)

  usePageMeta(
    `Soila — A Film by Film Clinic Bootcamp Cohort 1`,
    `Soila, "${soila.tagline}" — the debut short film from Film Clinic's first bootcamp cohort. Premieres ${soila.premiereLabel}, streaming on ustadifilms.ke. Explore the cast, crew, and behind-the-scenes of the production.`,
    'Soila film, Film Clinic Bootcamp film, Ustadi Films, Kenyan short film, Maasai film, filmmaking bootcamp outcome, Cohort 1 film project, African cinema, film premiere Kenya',
    { image: soila.poster }
  )

  const INITIAL = 12
  const visibleBts = expanded ? soila.bts : soila.bts.slice(0, INITIAL)
  const hasMore = soila.bts.length > INITIAL

  const navigate = useCallback((dir) => {
    setLightbox((prev) => {
      if (prev === null) return null
      const total = soila.bts.length
      return (prev + dir + total) % total
    })
  }, [])

  useEffect(() => {
    if (lightbox === null) return
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
      {/* Cinematic Hero */}
      <section className="relative overflow-hidden bg-navy-dark">
        {/* Ambient backdrop from a BTS landscape frame */}
        <img
          src="/photos/soila-bts/soila-bts-15.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          loading="eager"
          decoding="async"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/70 via-navy-dark/85 to-navy-dark" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 grid lg:grid-cols-[minmax(0,340px)_1fr] gap-8 lg:gap-14 items-center">
          {/* Poster */}
          <div className="mx-auto w-full max-w-[300px] lg:max-w-none">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src={soila.posterTeaser}
                alt={`Soila official poster — ${soila.tagline}`}
                width="1200"
                height="1697"
                className="w-full h-auto"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          {/* Details */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-gold/20 text-gold-light px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5">
              A Film Clinic Bootcamp · Cohort 1 Production
            </span>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-none mb-3">
              Soila
            </h1>
            <p className="text-gold italic font-heading text-xl sm:text-2xl mb-6">
              “{soila.tagline}”
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              {soila.synopsis}
            </p>

            {/* Countdown / status */}
            {released ? (
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider">
                  <span className="w-2 h-2 bg-navy rounded-full animate-pulse" /> Now Streaming
                </span>
              </div>
            ) : (
              <div className="mb-8">
                <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-semibold mb-3">
                  Premieres {soila.premiereLabel}
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6">
                  <CountdownUnit value={days} label="Days" />
                  <span className="text-gold/40 text-3xl font-light -mt-4">:</span>
                  <CountdownUnit value={hours} label="Hrs" />
                  <span className="text-gold/40 text-3xl font-light -mt-4">:</span>
                  <CountdownUnit value={minutes} label="Min" />
                  <span className="text-gold/40 text-3xl font-light -mt-4">:</span>
                  <CountdownUnit value={seconds} label="Sec" />
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href={soila.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
              >
                <HiPlay className="text-lg" />
                {released ? 'Watch on ustadifilms.ke' : 'Watch on ustadifilms.ke'}
              </a>
              <a
                href="#behind-the-scenes"
                className="inline-block border-2 border-white/30 hover:border-gold text-white hover:text-gold font-bold px-8 py-4 rounded-full text-sm uppercase tracking-wider transition-all duration-200 w-full sm:w-auto text-center"
              >
                Behind the Scenes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Film — synopsis + key credits */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <SectionTitle
          subtitle="The Film"
          title="Made by Cohort 1, Start to Finish"
          description="Every department on Soila — direction, camera, sound, design, and edit — was run by participants of Film Clinic’s first six-week bootcamp, working alongside professional mentors on a real set."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {soila.keyCredits.map((c) => (
            <div
              key={c.role}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 text-center"
            >
              <div className="text-gold text-xs font-semibold uppercase tracking-[0.15em] mb-2">
                {c.role}
              </div>
              <div className="text-navy font-bold text-base sm:text-lg leading-snug">
                {c.names}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Behind the Scenes */}
      <section id="behind-the-scenes" className="py-14 sm:py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Behind the Scenes"
            title="Cohort 1 on Set"
            description="From dawn call times to the last take — the crew, the cast, and the craft behind Soila."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12">
            {visibleBts.map((photo, i) => (
              <button
                key={photo}
                onClick={() => setLightbox(i)}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg cursor-pointer"
              >
                <img
                  src={`/photos/soila-bts/${photo}`}
                  alt={`Soila behind the scenes — Film Clinic Cohort 1 production ${i + 1}`}
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
                onClick={() => setExpanded((v) => !v)}
                className="bg-navy hover:bg-navy-light text-white font-bold px-8 py-3 rounded-full text-sm uppercase tracking-wider transition-all duration-200 shadow-lg"
              >
                {expanded ? 'Show Less' : `View All ${soila.bts.length} Photos`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Full Credits */}
      <section className="py-14 sm:py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Full Credits" title="Cast & Crew" light />
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 mt-8 sm:mt-12">
            {[...soila.keyCredits, ...soila.crew].map((c) => (
              <div
                key={c.role + c.names}
                className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 py-2 border-b border-gray-700/60"
              >
                <span className="text-gold text-xs font-semibold uppercase tracking-[0.15em] sm:flex-shrink-0 sm:mr-6">
                  {c.role}
                </span>
                <span className="text-gray-200 text-sm sm:text-base text-left sm:text-right">
                  {c.names}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-xs mt-10 uppercase tracking-[0.2em]">
            Ustadi Films · Omori Films · Baraza Media Lab
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <img
          src="/photos/soila-bts/soila-bts-22.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Your Film Could Be Next
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Soila is what one cohort built in six weeks. Join the next bootcamp and make yours.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center">
            <Link
              to="/programs/bootcamp"
              className="bg-gold hover:bg-gold-dark text-navy font-bold px-10 py-4 rounded-full text-base sm:text-lg uppercase tracking-wider transition-all duration-200 shadow-lg inline-block w-full sm:w-auto"
            >
              Explore the Bootcamp
            </Link>
            <Link
              to="/gallery"
              className="border-2 border-white/30 hover:border-gold text-white hover:text-gold font-bold px-10 py-4 rounded-full text-base sm:text-lg uppercase tracking-wider transition-all duration-200 inline-block w-full sm:w-auto"
            >
              See Cohort 1
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <HiX size={32} />
          </button>
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium z-10">
            {lightbox + 1} / {soila.bts.length}
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1) }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 transition-all z-10"
            aria-label="Previous photo"
          >
            <HiChevronLeft size={28} />
          </button>
          <img
            src={`/photos/soila-bts/${soila.bts[lightbox]}`}
            alt={`Soila behind the scenes ${lightbox + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); navigate(1) }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 transition-all z-10"
            aria-label="Next photo"
          >
            <HiChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  )
}
