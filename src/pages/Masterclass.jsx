import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import PhotoGrid from '../components/PhotoGrid'
import usePageMeta from '../hooks/usePageTitle'
import { HiPencil, HiCamera, HiFilm, HiCog, HiStar } from 'react-icons/hi'

const masterclassAreas = [
  { icon: HiPencil, title: 'Storytelling & Script Development', desc: 'Craft compelling narratives and develop scripts that resonate with audiences.' },
  { icon: HiFilm, title: 'Directing', desc: 'Master the art of visual storytelling and working with actors on set.' },
  { icon: HiCamera, title: 'Cinematography', desc: 'Learn camera techniques, lighting, and visual composition for impactful shots.' },
  { icon: HiCog, title: 'Production Workflow', desc: 'Understand the complete production pipeline from concept to final delivery.' },
]

const masterclassPhotos = [
  'IMG_7702.jpg', 'IMG_7721.jpg', 'IMG_7882.jpg',
  'IMG_7916.jpg', 'IMG_8131.jpg', 'IMG_8313.jpg',
]

const whoShouldApply = [
  'Aspiring filmmakers seeking structured training',
  'Creatives who want to understand filmmaking disciplines',
  'Writers looking to bring their stories to screen',
  'Anyone serious about learning the craft before production',
]

export default function Masterclass() {
  usePageMeta(
    'Masterclass',
    'Join Film Clinic Masterclass for intensive filmmaking workshops in storytelling, directing, cinematography, and production workflow led by industry professionals.',
    'filmmaking masterclass Kenya, screenwriting workshop, film directing masterclass, cinematography training Nakuru, film production workflow, filmmaking intensive course, learn directing Africa, storytelling for film, script development course Kenya'
  )
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <img src="/photos/_MG_4559.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" decoding="async" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-gold/20 text-gold-light px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            Program 1
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Masterclass
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Short, intensive workshops focused on core filmmaking disciplines. Gain practical knowledge and preparation for production from experienced industry professionals.
          </p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <SectionTitle
              subtitle="What You'll Learn"
              title="Core Filmmaking Disciplines"
              description="Each masterclass session dives deep into a specific area of filmmaking, giving you focused, actionable knowledge."
            />
            <div className="space-y-4 mt-8">
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

      {/* How It Works */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="How It Works"
            title="The Masterclass Experience"
            description="Our masterclass sessions are designed to be immersive, practical, and immediately applicable."
          />
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
            {[
              { num: '1', title: 'Intensive Sessions', desc: 'Focused workshops led by industry professionals covering specific filmmaking disciplines in depth.' },
              { num: '2', title: 'Practical Exercises', desc: 'Hands-on activities that let you apply what you learn immediately, not just absorb theory.' },
              { num: '3', title: 'Expert Feedback', desc: 'Direct mentorship and critique from working filmmakers who understand industry standards.' },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-navy text-xl font-bold">{step.num}</span>
                </div>
                <h3 className="text-navy font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
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
                title="Is the Masterclass Right For You?"
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
