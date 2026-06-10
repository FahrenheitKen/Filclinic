import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import usePageMeta from '../hooks/usePageTitle'
import blogPosts from '../data/blogPosts'

export default function Blog() {
  usePageMeta(
    'Blog',
    'Filmmaking tips, screenwriting guides, and behind-the-scenes insights from Film Clinic Masterclass.',
    'filmmaking blog, screenwriting tips, film production, short film tips'
  )

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Insights &amp; Tips
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4">
            Blog
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Practical filmmaking advice, screenwriting guides, and stories from the Film Clinic community.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-gold font-semibold uppercase tracking-wider">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                  <h2 className="font-heading text-lg sm:text-xl font-bold text-navy mt-2 mb-3 group-hover:text-gold transition-colors duration-200 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-4 text-sm font-semibold text-gold uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-200">
                    Read More &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle
            subtitle="Start Your Journey"
            title="Ready to Make Films?"
            description="Turn your passion into practice. Join Film Clinic and learn filmmaking by doing."
            light
          />
          <Link
            to="/contact"
            className="inline-block bg-gold hover:bg-gold-dark text-navy font-bold px-10 py-4 rounded-full text-sm uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl mt-4"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </>
  )
}
