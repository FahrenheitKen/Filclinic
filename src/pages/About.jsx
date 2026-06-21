import SectionTitle from '../components/SectionTitle'
import PhotoGrid from '../components/PhotoGrid'
import usePageMeta from '../hooks/usePageTitle'

const teamPhotos = [
  '_MG_9228.jpg', '_MG_9456 (1).jpg', '_MG_9493 (1).jpg',
  '_MG_9831.jpg', '_MG_9898.jpg', '_MG_9901.jpg',
]

const approachPhotos = [
  'IMG_4932.jpg', 'IMG_5183.jpg', 'IMG_6614.jpg', 'IMG_6631.jpg',
]

const missionValues = [
  {
    title: 'Mission',
    text: 'To equip filmmakers with practical skills, real production experience, and structured mentorship that enables them to create, complete, and distribute impactful films.',
  },
  {
    title: 'Vision',
    text: "To become Africa's leading practical filmmaking pipeline\u2014developing world-class storytellers and consistently producing films that compete on global platforms.",
  },
]

const goals = [
  { title: 'Develop Industry-Ready Filmmakers', desc: 'Train participants through hands-on learning that reflects real production environments, not classroom simulations.' },
  { title: 'Produce High-Quality Films', desc: 'Facilitate the creation of short films and visual projects through structured bootcamps, ensuring every participant contributes to a completed production.' },
  { title: 'Bridge Learning and Industry', desc: 'Create a direct pathway from training to professional opportunities through mentorship, collaboration, and integration into active productions.' },
  { title: 'Build a Strong Filmmaking Community', desc: 'Establish a network of filmmakers who collaborate, grow together, and contribute to a sustainable creative ecosystem.' },
  { title: 'Expand Access to Film Education', desc: 'Provide accessible, practical filmmaking knowledge to emerging creators across Kenya and beyond.' },
  { title: 'Foster Creative Excellence', desc: 'Encourage original African stories while maintaining high standards in craft, structure, and production quality.' },
]

const approach = [
  'Learn by doing',
  'Work in real production environments',
  'Collaborate in structured teams',
  'Deliver completed film projects',
]

export default function About() {
  usePageMeta(
    'About Us',
    'Learn about Film Clinic Masterclass, a practical filmmaking platform by Ustadi Films Ltd. Our mission is to train, develop, and activate filmmakers through real production experience.',
    'about Film Clinic, Ustadi Films Ltd, filmmaking education Kenya, film school mission, African filmmakers, filmmaking community Nakuru, film training program Africa, practical film education'
  )
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <img src="/photos/20230725_200937.JPG" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" loading="eager" decoding="async" fetchpriority="high" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-gold/20 text-gold-light px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            About Us
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Who We Are
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Film Clinic Masterclass is a practical filmmaking platform designed to train, develop, and activate filmmakers through structured learning and real production experience.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gold">Our Philosophy</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-navy mt-2 mb-4 sm:mb-6">
              Filmmaking is Not Learned in Theory
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              It is mastered through execution. We focus on execution. Participants don't just learn they create, complete, and collaborate on films within a guided system.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              The filmmaking landscape is saturated with theory but lacks structured pathways into real production. Film Clinic exists to bridge that gap by providing a system where filmmakers move from learning to actual film creation and industry readiness.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <img src="/photos/20230719_150229.JPG" alt="Film Clinic mentor guiding participants on set" width="600" height="400" className="rounded-xl sm:rounded-2xl w-full h-36 sm:h-48 lg:h-64 object-cover shadow-lg" loading="lazy" decoding="async" />
            <img src="/photos/20230723_123123.JPG" alt="Film Clinic team blocking a scene in pre-production" width="600" height="400" className="rounded-xl sm:rounded-2xl w-full h-36 sm:h-48 lg:h-64 object-cover shadow-lg mt-6 sm:mt-8" loading="lazy" decoding="async" />
            <img src="/photos/20230723_123603.JPG" alt="Film Clinic crew preparing camera and lighting equipment" width="600" height="400" className="rounded-xl sm:rounded-2xl w-full h-36 sm:h-48 lg:h-64 object-cover shadow-lg" loading="lazy" decoding="async" />
            <img src="/photos/P1144441.JPG" alt="Film Clinic participants collaborating on script development" width="600" height="400" className="rounded-xl sm:rounded-2xl w-full h-36 sm:h-48 lg:h-64 object-cover shadow-lg mt-6 sm:mt-8" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {missionValues.map((item) => (
              <div key={item.title} className="bg-navy-light rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-gray-700">
                <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.title}
                </span>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-4 sm:mt-6">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Our Goals"
          title="What We're Building Towards"
          description="Every program, every bootcamp, every masterclass serves these core objectives."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {goals.map((goal, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gold font-bold text-lg">{i + 1}</span>
              </div>
              <h3 className="text-navy font-bold text-lg mb-2">{goal.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{goal.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <SectionTitle
                subtitle="Our Approach"
                title="How We Train Filmmakers"
              />
              <ul className="space-y-4 mt-8">
                {approach.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-10 h-10 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-navy text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <PhotoGrid photos={approachPhotos} columns={2} altPrefix="Film Clinic training approach in action" />
          </div>
        </div>
      </section>

      {/* Team Photos */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          subtitle="Our Community"
          title="The Film Clinic Family"
          description="Meet the filmmakers, mentors, and creators who make Film Clinic what it is."
        />
        <PhotoGrid photos={teamPhotos} columns={3} altPrefix="Film Clinic Masterclass community and mentors" />
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <img src="/photos/IMG_7260.JPG" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Filmmaking Journey?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join our next cohort and experience practical filmmaking firsthand.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSexDjvcO2hbxiX-zodc8Ux5YkWXjxB3hHTj9jnDsKTLUOfjqg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-dark text-navy font-bold px-10 py-4 rounded-full text-lg uppercase tracking-wider transition-all duration-200 shadow-lg inline-block"
          >
            Apply Now
          </a>
        </div>
      </section>
    </>
  )
}
