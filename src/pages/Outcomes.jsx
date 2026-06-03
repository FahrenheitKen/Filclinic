import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import PhotoGrid from '../components/PhotoGrid'
import usePageMeta from '../hooks/usePageTitle'
import { HiFilm, HiHand, HiBriefcase, HiEye } from 'react-icons/hi'

const outcomes = [
  {
    icon: HiFilm,
    title: 'Completed Films',
    desc: 'Every participant contributes to and walks away with a completed short film with full credits.',
    stat: '100%',
    statLabel: 'Completion Rate',
  },
  {
    icon: HiHand,
    title: 'Practical Experience',
    desc: 'Real production experience on actual sets with professional equipment and workflows.',
    stat: 'Hands-On',
    statLabel: 'Learning Approach',
  },
  {
    icon: HiBriefcase,
    title: 'Strong Portfolios',
    desc: 'Build portfolio-ready work that demonstrates your skills to the industry.',
    stat: 'Portfolio',
    statLabel: 'Ready Work',
  },
  {
    icon: HiEye,
    title: 'Industry Exposure',
    desc: 'Connect with active professionals and gain visibility in the filmmaking industry.',
    stat: 'Network',
    statLabel: 'Building',
  },
]

const impactPhotos = [
  'IMG_7491.jpg', 'IMG_7387.jpg', 'IMG_7464.jpg',
  'IMG_7641.jpg', 'IMG_7702.jpg', 'IMG_7721.jpg',
]

const morePhotos = [
  '_MG_0009.jpg', '_MG_0010.jpg', '_MG_0028.jpg',
  '_MG_0046.jpg', '_MG_0058.jpg', '_MG_0077.jpg',
  '_MG_0200.jpg', '_MG_0273.jpg',
]

const testimonials = [
  {
    quote: 'Film Clinic gave me my first real set experience. I walked in as a student and walked out as a filmmaker with a completed project.',
    role: 'Bootcamp Participant',
    photo: 'IMG_0128.JPG',
  },
  {
    quote: 'The masterclass sessions were intense but transformative. The practical approach is exactly what the industry needs.',
    role: 'Masterclass Graduate',
    photo: 'IMG_0213.JPG',
  },
  {
    quote: 'Working in structured teams with real deadlines prepared me for professional productions like nothing else could.',
    role: 'Bootcamp Alumnus',
    photo: 'IMG_0424.JPG',
  },
]

export default function Outcomes() {
  usePageMeta(
    'Outcomes & Impact',
    'See what Film Clinic Masterclass participants achieve: completed films, practical production experience, portfolio-ready work, and industry connections.',
    'filmmaking portfolio Kenya, film production results, filmmaking career Kenya, film industry networking Africa, completed short films, filmmaker success stories, film school outcomes, production experience Kenya'
  )
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <img src="/photos/IMG_7882.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" loading="eager" decoding="async" fetchpriority="high" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-gold/20 text-gold-light px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            Outcomes & Impact
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            What Participants Achieve
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Real results from real production experience. Our participants leave with more than knowledge\u2014they leave with proof of their capabilities.
          </p>
        </div>
      </section>

      {/* Outcomes Cards */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Key Outcomes"
          title="Tangible Results From Every Cohort"
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {outcomes.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-gold text-2xl" />
              </div>
              <div className="text-xl sm:text-3xl font-bold text-navy mb-1">{item.stat}</div>
              <div className="text-gold text-xs font-semibold uppercase tracking-wider mb-4">{item.statLabel}</div>
              <h3 className="text-navy font-bold text-sm sm:text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed hidden sm:block">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Gallery */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Impact Gallery"
            title="Our Work in Action"
            description="Behind every photo is a filmmaker building their craft through hands-on production."
          />
          <PhotoGrid photos={impactPhotos} columns={3} altPrefix="Film Clinic participant work in action" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Voices"
            title="From Our Participants"
            light
          />
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-navy-light rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={`/photos/${t.photo}`}
                    alt={t.role}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <div className="text-gold text-sm font-semibold">{t.role}</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Production Photos */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Production Moments"
          title="Every Frame Tells a Story"
          description="From pre-production meetings to final takes, our participants live the filmmaking experience."
        />
        <PhotoGrid photos={morePhotos} columns={4} altPrefix="Film Clinic Masterclass production moments" />
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <img src="/photos/IMG_8131.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Your Story Starts Here
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join the next cohort and become part of our growing community of filmmakers.
          </p>
          <Link
            to="/contact"
            className="bg-gold hover:bg-gold-dark text-navy font-bold px-10 py-4 rounded-full text-lg uppercase tracking-wider transition-all duration-200 shadow-lg inline-block"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </>
  )
}
