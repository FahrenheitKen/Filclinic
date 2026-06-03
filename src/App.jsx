import { lazy, Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import useAnalytics from './hooks/useAnalytics'
import usePageMeta from './hooks/usePageTitle'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Masterclass = lazy(() => import('./pages/Masterclass'))
const Bootcamp = lazy(() => import('./pages/Bootcamp'))
const Outcomes = lazy(() => import('./pages/Outcomes'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))

function NotFound() {
  usePageMeta(
    'Page Not Found',
    "The page you're looking for doesn't exist on Film Clinic Masterclass.",
    null,
    { noindex: true }
  )
  return (
    <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
      <h1 className="font-heading text-6xl font-bold text-navy mb-4">404</h1>
      <p className="text-gray-600 text-lg mb-8">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-3 rounded-full text-sm uppercase tracking-wider transition-all duration-200 shadow-lg"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default function App() {
  useAnalytics()
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="flex items-center justify-center py-32"><div className="w-10 h-10 border-4 border-gold border-t-transparent rounded-full animate-spin" /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs/masterclass" element={<Masterclass />} />
            <Route path="/programs/bootcamp" element={<Bootcamp />} />
            <Route path="/outcomes" element={<Outcomes />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {/* Partners */}
      <section className="py-10 sm:py-14 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gold">Our Partners</span>
          {/* Desktop: centered row */}
          <div className="hidden sm:flex items-center justify-center gap-16 mt-6">
            <img src="/photos/FDA.png" alt="Film Development Authority partner logo" loading="lazy" decoding="async" className="h-32 w-auto object-contain" />
            <img src="/photos/Baraza.png" alt="Baraza Media Lab partner logo" loading="lazy" decoding="async" className="h-20 w-auto object-contain" />
          </div>
          {/* Mobile: horizontal auto-scroll */}
          <div className="sm:hidden mt-6 overflow-hidden">
            <div className="flex items-center gap-12 animate-scroll-x w-max">
              <img src="/photos/FDA.png" alt="Film Development Authority partner logo" loading="lazy" decoding="async" className="h-28 w-auto object-contain flex-shrink-0" />
              <img src="/photos/Baraza.png" alt="Baraza Media Lab partner logo" loading="lazy" decoding="async" className="h-14 w-auto object-contain flex-shrink-0" />
              <img src="/photos/FDA.png" alt="" loading="lazy" decoding="async" className="h-28 w-auto object-contain flex-shrink-0" aria-hidden="true" />
              <img src="/photos/Baraza.png" alt="" loading="lazy" decoding="async" className="h-14 w-auto object-contain flex-shrink-0" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254713554560"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  )
}
