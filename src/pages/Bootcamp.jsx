import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import PhotoGrid from '../components/PhotoGrid'
import usePageMeta from '../hooks/usePageTitle'
import { HiUserGroup, HiClipboardList, HiUsers, HiStar } from 'react-icons/hi'

const bootcampFeatures = [
  { icon: HiUserGroup, title: 'Team-Based Production', desc: 'Work in structured teams that mirror professional film crews.' },
  { icon: HiClipboardList, title: 'Assigned Roles', desc: 'Take on real roles: Director, DP, Editor, Sound, and more.' },
  { icon: HiUsers, title: 'Guided Mentorship', desc: 'Receive guidance from experienced industry professionals throughout production.' },
]

const bootcampPhotos = [
  'IMG_8353.jpg', 'IMG_8516.jpg', 'IMG_8549.jpg',
  'IMG_8621.jpg', 'IMG_8761.jpg', 'IMG_9621.jpg',
]

const whoShouldApply = [
  'Masterclass graduates ready for real production',
  'Film students wanting hands-on set experience',
  'Creatives transitioning into the film industry',
  'Anyone serious about producing a completed film',
]

export default function Bootcamp() {
  usePageMeta(
    'Bootcamp',
    'Film Clinic Bootcamp is a hands-on production lab where participants collaborate in teams to create completed short films with professional mentorship.',
    'filmmaking bootcamp Kenya, hands-on film production, short film production course, film crew training, film set experience Kenya, collaborative filmmaking, film production mentorship, make a short film Kenya, post-production training Africa'
  )
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <img src="/photos/IMG_8353.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" loading="eager" decoding="async" fetchpriority="high" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-gold/20 text-gold-light px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            Program 2
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Bootcamp
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            A hands-on production lab where participants create films collaboratively. This is where theory meets reality — you'll work on a real film from start to finish.
          </p>
        </div>
      </section>

      {/* What You'll Do */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <PhotoGrid photos={bootcampPhotos} columns={2} altPrefix="Film Clinic Bootcamp production lab" />
          </div>
          <div>
            <SectionTitle
              subtitle="What You'll Do"
              title="Real Production. Real Films."
              description="The Bootcamp is an intensive production experience where you collaborate with a team to create a completed short film."
            />
            <div className="space-y-4 mt-8">
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

      {/* The Bootcamp Journey */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="The Journey"
            title="From Script to Screen"
            description="The Bootcamp takes you through the complete filmmaking pipeline in a structured, guided environment."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8 sm:mt-12">
            {[
              { num: '1', title: 'Pre-Production', desc: 'Story development, script breakdown, casting, and production planning with your team.' },
              { num: '2', title: 'Production', desc: 'On-set filming with professional equipment, guided by experienced mentors.' },
              { num: '3', title: 'Post-Production', desc: 'Editing, sound design, color grading, and final assembly of your film.' },
              { num: '4', title: 'Showcase', desc: 'Screen your completed film and receive feedback from industry professionals.' },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-xl font-bold">{step.num}</span>
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
                title="Is the Bootcamp Right For You?"
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
              <img src="/photos/IMG_8621.jpg" alt="Film Clinic Bootcamp crew filming a short film on location" width="600" height="450" className="rounded-xl sm:rounded-2xl w-full h-36 sm:h-44 lg:h-56 object-cover shadow-lg" loading="lazy" decoding="async" />
              <img src="/photos/IMG_8761.jpg" alt="Director and DP collaborating on a Film Clinic Bootcamp set" width="600" height="450" className="rounded-xl sm:rounded-2xl w-full h-36 sm:h-44 lg:h-56 object-cover shadow-lg mt-6 sm:mt-8" loading="lazy" decoding="async" />
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
            { num: '3', title: 'Join Cohort', desc: 'Selected applicants join a limited-size cohort for an intensive production experience.' },
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
