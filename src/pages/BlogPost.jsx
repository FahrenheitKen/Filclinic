import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import usePageMeta from '../hooks/usePageTitle'
import blogPosts from '../data/blogPosts'

const SITE_URL = 'https://filmclinicmasterclass.com'

function useBlogSchemas(post) {
  useEffect(() => {
    if (!post) return

    // BlogPosting / Article schema
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.metaDescription,
      image: `${SITE_URL}${post.image}`,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        '@type': 'Organization',
        name: post.author,
        url: SITE_URL,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Film Clinic Masterclass',
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/logo.png`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/blog/${post.slug}`,
      },
      keywords: post.keywords,
    }

    const articleScript = document.createElement('script')
    articleScript.type = 'application/ld+json'
    articleScript.id = 'article-schema'
    articleScript.textContent = JSON.stringify(articleSchema)
    document.head.appendChild(articleScript)

    // FAQPage schema
    const faqBlock = post.content.find((b) => b.type === 'faq')
    let faqScript = null
    if (faqBlock) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqBlock.items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
      faqScript = document.createElement('script')
      faqScript.type = 'application/ld+json'
      faqScript.id = 'faq-schema'
      faqScript.textContent = JSON.stringify(faqSchema)
      document.head.appendChild(faqScript)
    }

    // Set og:type to article for blog posts
    const ogType = document.querySelector('meta[property="og:type"]')
    const prevOgType = ogType?.getAttribute('content')
    if (ogType) ogType.setAttribute('content', 'article')

    // Add article-specific OG tags
    const articleTags = [
      ['article:published_time', post.date],
      ['article:author', 'Film Clinic Masterclass'],
      ['article:section', 'Filmmaking'],
    ]
    const createdTags = articleTags.map(([prop, content]) => {
      const meta = document.createElement('meta')
      meta.setAttribute('property', prop)
      meta.setAttribute('content', content)
      document.head.appendChild(meta)
      return meta
    })

    return () => {
      document.getElementById('article-schema')?.remove()
      document.getElementById('faq-schema')?.remove()
      if (ogType && prevOgType) ogType.setAttribute('content', prevOgType)
      createdTags.forEach((tag) => tag.remove())
    }
  }, [post])
}

function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const el = document.documentElement
      const scrolled = el.scrollTop
      const total = el.scrollHeight - el.clientHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-transparent">
      <div
        className="h-full bg-gold transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  usePageMeta(
    post?.title || 'Blog Post Not Found',
    post?.metaDescription || '',
    post?.keywords || '',
    { image: post?.image }
  )
  useBlogSchemas(post)

  if (!post) return <Navigate to="/blog" replace />

  const headings = post.content.filter((b) => b.type === 'heading')
  const readTime = Math.max(1, Math.ceil(
    post.content.reduce((acc, b) => {
      if (b.type === 'text' || b.type === 'callout') return acc + (b.body?.split(/\s+/).length || 0)
      if (b.type === 'list') return acc + b.items.join(' ').split(/\s+/).length
      if (b.type === 'faq') return acc + b.items.reduce((a, q) => a + q.question.split(/\s+/).length + q.answer.split(/\s+/).length, 0)
      return acc
    }, 0) / 200
  ))

  return (
    <>
      <ReadingProgress />

      {/* Hero */}
      <section className="relative bg-navy py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt=""
            className="w-full h-full object-cover opacity-15 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/85 to-navy" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gold text-sm font-semibold uppercase tracking-wider hover:text-gold-light transition-colors mb-8"
          >
            &larr; Back to Blog
          </Link>
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 sm:gap-5 mt-6 text-sm">
            <span className="text-gray-300">{post.author}</span>
            <span className="text-gray-500">&middot;</span>
            <time dateTime={post.date} className="text-gray-300">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="text-gray-500">&middot;</span>
            <span className="text-gold font-medium">{readTime} min read</span>
          </div>
        </div>
      </section>

      {/* Content area with optional sidebar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-16">

            {/* Article */}
            <article className="max-w-3xl">
              {/* Lead paragraph styling for first text block */}
              {post.content.map((block, i) => {
                switch (block.type) {
                  case 'heading':
                    return (
                      <h2
                        key={i}
                        id={block.body.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}
                        className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-navy mt-12 mb-5 scroll-mt-24"
                      >
                        {block.body}
                      </h2>
                    )
                  case 'image':
                    return (
                      <figure key={i} className="my-10">
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                          <img
                            src={block.src}
                            alt={block.alt || ''}
                            loading="lazy"
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        {block.caption && (
                          <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    )
                  case 'text':
                    return (
                      <p
                        key={i}
                        className={`text-gray-700 leading-relaxed mb-5 ${
                          i === 0
                            ? 'text-lg sm:text-xl font-medium text-gray-800'
                            : 'text-base sm:text-lg'
                        }`}
                      >
                        {block.body}
                      </p>
                    )
                  case 'callout':
                    return (
                      <blockquote
                        key={i}
                        className="border-l-4 border-gold bg-gold/5 rounded-r-xl px-6 py-5 my-8"
                      >
                        <p className="text-navy text-base sm:text-lg font-medium italic leading-relaxed">
                          {block.body}
                        </p>
                      </blockquote>
                    )
                  case 'comparison':
                    return (
                      <div key={i} className="grid sm:grid-cols-2 gap-4 my-8">
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                          <span className="text-xs font-bold uppercase tracking-wider text-red-400 mb-2 block">
                            Instead of
                          </span>
                          <p className="text-gray-700 text-base sm:text-lg italic">
                            {block.instead}
                          </p>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                          <span className="text-xs font-bold uppercase tracking-wider text-green-600 mb-2 block">
                            Show
                          </span>
                          <p className="text-gray-700 text-base sm:text-lg">
                            {block.show}
                          </p>
                        </div>
                      </div>
                    )
                  case 'list':
                    return (
                      <ul key={i} className="space-y-3 mb-6 pl-1">
                        {block.items.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-gray-700 text-base sm:text-lg leading-relaxed"
                          >
                            <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )
                  case 'numbered-list':
                    return (
                      <div key={i} className="space-y-4 my-8">
                        {block.items.map((item, j) => (
                          <div
                            key={j}
                            className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100"
                          >
                            <span className="w-9 h-9 rounded-full bg-gold text-navy font-bold text-sm flex items-center justify-center flex-shrink-0">
                              {j + 1}
                            </span>
                            <div>
                              <span className="font-semibold text-navy text-base sm:text-lg">
                                {item.label}:
                              </span>{' '}
                              <span className="text-gray-700 text-base sm:text-lg">
                                {item.text}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  case 'cta':
                    return (
                      <div
                        key={i}
                        className="relative bg-navy rounded-2xl p-8 sm:p-10 mt-12 overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                        <div className="relative">
                          <p className="text-white text-lg sm:text-xl font-medium mb-5 leading-relaxed">
                            {block.body}
                          </p>
                          <Link
                            to="/contact"
                            className="inline-block bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-3.5 rounded-full text-sm uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
                          >
                            Apply Now
                          </Link>
                        </div>
                      </div>
                    )
                  case 'faq':
                    return (
                      <div key={i} className="mt-16 mb-8">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="h-px flex-1 bg-gray-200" />
                          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-navy whitespace-nowrap">
                            Frequently Asked Questions
                          </h2>
                          <div className="h-px flex-1 bg-gray-200" />
                        </div>
                        <div className="space-y-4">
                          {block.items.map((item, j) => (
                            <details
                              key={j}
                              className="group border border-gray-200 rounded-xl overflow-hidden transition-shadow duration-200 hover:shadow-md"
                            >
                              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 bg-white hover:bg-gray-50 transition-colors duration-200 [&::-webkit-details-marker]:hidden list-none">
                                <span className="font-semibold text-navy text-base sm:text-lg pr-4 leading-snug">
                                  {item.question}
                                </span>
                                <span className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0 text-lg font-bold group-open:bg-gold group-open:text-navy transition-all duration-200 group-open:rotate-45">
                                  +
                                </span>
                              </summary>
                              <div className="px-6 pb-5 pt-1 bg-white border-t border-gray-100">
                                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                  {item.answer}
                                </p>
                              </div>
                            </details>
                          ))}
                        </div>
                      </div>
                    )
                  default:
                    return null
                }
              })}
            </article>

            {/* Sidebar — Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4">
                  In this article
                </h3>
                <nav className="space-y-1 border-l-2 border-gray-100">
                  {headings.map((h, i) => (
                    <a
                      key={i}
                      href={`#${h.body.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                      className="block pl-4 py-2 text-sm text-gray-500 hover:text-navy hover:border-l-2 hover:border-gold hover:-ml-[2px] hover:pl-[calc(1rem+2px)] transition-colors duration-200 leading-snug"
                    >
                      {h.body}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Keep Learning
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            Want More Filmmaking Tips?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto mb-8">
            Explore our programs and get hands-on experience in real film production.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/blog"
              className="border-2 border-gold text-gold hover:bg-gold hover:text-navy font-bold px-8 py-3 rounded-full text-sm uppercase tracking-wider transition-all duration-200"
            >
              More Articles
            </Link>
            <Link
              to="/programs/bootcamp"
              className="bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-3 rounded-full text-sm uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore Bootcamp
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
