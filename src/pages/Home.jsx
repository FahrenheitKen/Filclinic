import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import PhotoGrid from '../components/PhotoGrid'
import usePageMeta from '../hooks/usePageTitle'
import { HiAcademicCap, HiFilm, HiLightBulb, HiUserGroup, HiPlay } from 'react-icons/hi'

const heroPhotos = ['_MG_0009.jpg', '_MG_0010.jpg', '_MG_0028.jpg']
const galleryPhotos = [
  'IMG_0128.JPG', 'IMG_0213.JPG', 'IMG_0424.JPG',
  'IMG_0427.JPG', 'IMG_0430.JPG', 'IMG_0449.JPG',
  'IMG_0509.jpg', 'IMG_0552.JPG', 'IMG_0589.JPG',
  'IMG_0592.JPG', 'IMG_0652.JPG', 'IMG_1075.JPG',
]
const processPhotos = [
  '_MG_0046.jpg', '_MG_0058.jpg', '_MG_0077.jpg',
  '_MG_0200.jpg', '_MG_0273.jpg',
]

const steps = [
  { num: '01', title: 'Learn', desc: 'Intensive masterclass sessions with industry professionals', icon: HiAcademicCap },
  { num: '02', title: 'Develop', desc: 'Story development and pre-production planning', icon: HiLightBulb },
  { num: '03', title: 'Produce', desc: 'Collaborative film production on real sets', icon: HiFilm },
  { num: '04', title: 'Refine', desc: 'Editing and post-production excellence', icon: HiPlay },
  { num: '05', title: 'Release', desc: 'Showcase and distribution readiness', icon: HiUserGroup },
]

const gains = [
  'A completed short film (credited role)',
  'Hands-on production experience',
  'Portfolio-ready work',
  'Industry-relevant workflow exposure',
  'A network of active filmmakers',
]

export default function Home() {
  usePageMeta(
    null,
    'Film Clinic Masterclass offers practical filmmaking training through intensive masterclasses and hands-on bootcamps in Nakuru, Kenya. Learn, produce, and launch your filmmaking career.',
    'filmmaking training Kenya, film school Kenya, film production course, learn filmmaking Nakuru, practical filmmaking, filmmaking bootcamp Kenya, cinematography training, film directing course Africa, Ustadi Films, hands-on film training'
  )
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background mosaic */}
        <div className="absolute inset-0 grid grid-cols-3 opacity-30">
          {heroPhotos.map((p, i) => (
            <img key={i} src={`/photos/${p}`} alt="" className="w-full h-full object-cover" />
          ))}
        </div>
        <div className="absolute inset-0 bg-navy/90 lg:bg-gradient-to-r lg:from-navy lg:via-navy/95 lg:to-navy/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <span className="inline-block bg-gold/20 text-gold-light px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-6">
              Film Clinic Masterclass
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Practical Filmmaking.{' '}
              <span className="text-gold">Real Production.</span>{' '}
              Measurable Outcomes.
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-xl">
              A structured filmmaking pipeline where creators learn, collaborate, and produce films through intensive masterclasses and hands-on bootcamps.
            </p>
            <Link
              to="/contact"
              className="bg-gold hover:bg-gold-dark text-navy font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
            >
              Apply Now
            </Link>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="/photos/IMG_7387.jpg" alt="Film production" className="w-full h-48 object-cover" loading="eager" decoding="async" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="/photos/IMG_8313.jpg" alt="Film production" className="w-full h-64 object-cover" loading="eager" decoding="async" />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="/photos/IMG_7464.jpg" alt="Film production" className="w-full h-64 object-cover" loading="eager" decoding="async" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="/photos/IMG_7641.jpg" alt="Film production" className="w-full h-48 object-cover" loading="eager" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="What We Do"
          title="We Build Filmmakers Through Execution"
          description="We don't teach filmmaking in isolation. Film Clinic operates through two integrated programs designed to move you from concept to completed film."
        />
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {/* Masterclass card */}
          <Link to="/programs/masterclass" className="group relative rounded-2xl overflow-hidden shadow-xl block">
            <img src="/photos/IMG_1538.JPG" alt="Masterclass" className="w-full h-60 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Masterclass</span>
              <h3 className="text-white text-xl sm:text-2xl font-bold mt-3 mb-2">Focused Training</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Intensive workshops in storytelling, directing, cinematography, and production led by experienced filmmakers.
              </p>
            </div>
          </Link>
          {/* Bootcamp card */}
          <Link to="/programs/bootcamp" className="group relative rounded-2xl overflow-hidden shadow-xl block">
            <img src="/photos/IMG_1658.JPG" alt="Bootcamp" className="w-full h-60 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
              <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Bootcamp</span>
              <h3 className="text-white text-xl sm:text-2xl font-bold mt-3 mb-2">Hands-On Production</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A structured production environment where participants create real films with real crews on real sets.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="How It Works"
            title="A Clear, Structured Pipeline"
            description="From learning to release, every step is designed to build your skills and deliver real results."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mt-8 sm:mt-12">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1 last:col-span-2 sm:last:col-span-1"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gold/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-gold/20 transition-colors">
                  <step.icon className="text-gold text-xl sm:text-2xl" />
                </div>
                <span className="text-gold font-bold text-xs sm:text-sm">{step.num}</span>
                <h3 className="text-navy font-bold text-base sm:text-lg mt-1 mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Photos */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Behind The Scenes"
          title="Real Production. Real Experience."
          description="Our participants work on actual film sets with professional equipment and mentorship."
        />
        <PhotoGrid photos={processPhotos} columns={3} />
      </section>

      {/* What You Gain */}
      <section className="py-12 sm:py-16 lg:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="What You Gain"
            title="More Than Just Training"
            light
          />
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mt-8 sm:mt-12">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img src="/photos/IMG_3390.jpg" alt="Production" className="rounded-xl sm:rounded-2xl w-full h-32 sm:h-40 md:h-48 object-cover shadow-lg" loading="lazy" decoding="async" />
              <img src="/photos/IMG_3538.jpg" alt="Production" className="rounded-xl sm:rounded-2xl w-full h-32 sm:h-40 md:h-48 object-cover shadow-lg mt-6 sm:mt-8" loading="lazy" decoding="async" />
              <img src="/photos/IMG_3557.jpg" alt="Production" className="rounded-xl sm:rounded-2xl w-full h-32 sm:h-40 md:h-48 object-cover shadow-lg" loading="lazy" decoding="async" />
              <img src="/photos/IMG_4501.jpg" alt="Production" className="rounded-xl sm:rounded-2xl w-full h-32 sm:h-40 md:h-48 object-cover shadow-lg mt-6 sm:mt-8" loading="lazy" decoding="async" />
            </div>
            <div>
              <ul className="space-y-5">
                {gains.map((gain, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-white text-base sm:text-lg">{gain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Our Gallery"
          title="Moments from Film Clinic"
          description="A glimpse into our masterclasses, bootcamps, and productions."
        />
        <PhotoGrid photos={galleryPhotos} columns={4} />
      </section>

      {/* Powered By */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gold">Powered By</span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-navy mt-2 mb-4">Ustadi Films Ltd</h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Film Clinic Masterclass is an initiative of Ustadi Films Ltd, a production company focused on documentaries and corporate storytelling. This connection ensures real industry exposure, professional production standards, and ongoing collaboration opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6 sm:mt-8">
            {['Real Industry Exposure', 'Professional Standards', 'Ongoing Collaboration'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-navy font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <img src="/photos/_MG_9736.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
            Limited Slots Per Cohort
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Selection is application-based. Don't miss your chance to join the next cohort of Film Clinic Masterclass.
          </p>
          <Link
            to="/contact"
            className="bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </>
  )
}
