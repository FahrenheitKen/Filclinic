import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import PhotoGrid from '../components/PhotoGrid'
import usePageMeta from '../hooks/usePageTitle'
import { HiPencil, HiCamera, HiFilm, HiCog, HiUserGroup, HiClipboardList, HiUsers, HiStar } from 'react-icons/hi'

const masterclassAreas = [
  { icon: HiPencil, title: 'Storytelling & Script Development', desc: 'Craft compelling narratives and develop scripts that resonate with audiences.' },
  { icon: HiFilm, title: 'Directing', desc: 'Master the art of visual storytelling and working with actors on set.' },
  { icon: HiCamera, title: 'Cinematography', desc: 'Learn camera techniques, lighting, and visual composition for impactful shots.' },
  { icon: HiCog, title: 'Production Workflow', desc: 'Understand the complete production pipeline from concept to final delivery.' },
]

const bootcampFeatures = [
  { icon: HiUserGroup, title: 'Team-Based Production', desc: 'Work in structured teams that mirror professional film crews.' },
  { icon: HiClipboardList, title: 'Assigned Roles', desc: 'Take on real roles: Director, DP, Editor, Sound, and more.' },
  { icon: HiUsers, title: 'Guided Mentorship', desc: 'Receive guidance from experienced industry professionals throughout production.' },
]

const masterclassPhotos = [
  'IMG_7702.jpg', 'IMG_7721.jpg', 'IMG_7882.jpg',
  'IMG_7916.jpg', 'IMG_8131.jpg', 'IMG_8313.jpg',
]

const bootcampPhotos = [
  'IMG_8353.jpg', 'IMG_8516.jpg', 'IMG_8549.jpg',
  'IMG_8621.jpg', 'IMG_8761.jpg', 'IMG_9621.jpg',
]

const whoShouldApply = [
  'Emerging filmmakers looking to build their craft',
  'Film students wanting real production experience',
  'Creatives transitioning into the film industry',
  'Anyone serious about practical filmmaking',
]

export default function Programs() {
  usePageMeta(
    'Programs',
    'Explore Film Clinic Masterclass programs: intensive masterclass workshops in storytelling, directing, and cinematography, plus hands-on bootcamp film production.',
    'filmmaking programs Kenya, film courses Nakuru, masterclass filmmaking, bootcamp film production, storytelling workshop Kenya, directing course Africa, cinematography classes, film production training, filmmaking workshop near me'
  )
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <img src="/photos/_MG_4559.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" decoding="async" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-gold/20 text-gold-light px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            Our Programs
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Two Tracks. One Goal.
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Build your filmmaking career through intensive masterclasses and hands-on bootcamp production.
          </p>
        </div>
      </section>

      {/* Masterclass */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <span className="bg-gold text-navy text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">Program 1</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-navy mt-4 mb-4">Masterclass</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              Short, intensive workshops focused on core filmmaking disciplines. Gain practical knowledge and preparation for production from experienced industry professionals.
            </p>
            <div className="space-y-4">
              {masterclassAreas.map((area) => (
                <div key={area.title} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <area.icon className="text-gold text-xl" />
                  </div>
                  <div>
                    <h4 className="text-navy font-semibold mb-1">{area.title}</h4>
                    <p className="text-gray-500 text-sm">{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-navy/5 rounded-xl p-6 border-l-4 border-gold">
              <p className="text-navy font-medium">
                <HiStar className="inline text-gold mr-2" />
                <strong>Outcome:</strong> Participants gain practical knowledge and preparation for production.
              </p>
            </div>
          </div>
          <div>
            <PhotoGrid photos={masterclassPhotos} columns={2} />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="border-t border-gray-200" />
      </div>

      {/* Bootcamp */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="order-2 lg:order-1">
            <PhotoGrid photos={bootcampPhotos} columns={2} />
          </div>
          <div className="order-1 lg:order-2">
            <span className="bg-navy text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">Program 2</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-navy mt-4 mb-4">Bootcamp</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              A hands-on production lab where participants create films collaboratively. This is where theory meets reality\u2014you'll work on a real film from start to finish.
            </p>
            <div className="space-y-4">
              {bootcampFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                  <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-navy text-xl" />
                  </div>
                  <div>
                    <h4 className="text-navy font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-500 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-navy/5 rounded-xl p-6 border-l-4 border-navy">
              <p className="text-navy font-medium">
                <HiStar className="inline text-gold mr-2" />
                <strong>Outcome:</strong> A completed short film with full credits and production experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="py-12 sm:py-16 lg:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <SectionTitle
                subtitle="Who Should Apply"
                title="Is Film Clinic Right For You?"
                light
              />
              <ul className="space-y-4 mt-8">
                {whoShouldApply.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img src="/photos/_MG_4670.jpg" alt="Filmmakers" className="rounded-xl sm:rounded-2xl w-full h-36 sm:h-44 lg:h-56 object-cover shadow-lg" loading="lazy" decoding="async" />
              <img src="/photos/_MG_0279.jpg" alt="Filmmakers" className="rounded-xl sm:rounded-2xl w-full h-36 sm:h-44 lg:h-56 object-cover shadow-lg mt-6 sm:mt-8" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Selection Process"
          title="How to Join"
          description="Our intake process is designed to select committed individuals who are serious about filmmaking."
        />
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {[
            { num: '1', title: 'Apply', desc: 'Submit your application through our online form with your background and motivation.' },
            { num: '2', title: 'Selection', desc: 'Applications are reviewed based on commitment, potential, and readiness to learn.' },
            { num: '3', title: 'Join Cohort', desc: 'Selected applicants join a limited-size cohort for an intensive learning experience.' },
          ].map((step) => (
            <div key={step.num} className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-navy text-2xl font-bold">{step.num}</span>
              </div>
              <h3 className="text-navy font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="bg-gold hover:bg-gold-dark text-navy font-bold px-10 py-4 rounded-full text-lg uppercase tracking-wider transition-all duration-200 shadow-lg inline-block"
          >
            Start Your Application
          </Link>
        </div>
      </section>
    </>
  )
}
