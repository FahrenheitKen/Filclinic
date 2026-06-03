import { useState } from 'react'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'
import usePageMeta from '../hooks/usePageTitle'

const contactInfo = [
  {
    icon: HiPhone,
    title: 'Phone',
    value: '+254 713 554560',
    href: 'tel:+254713554560',
  },
  {
    icon: HiMail,
    title: 'Email',
    value: 'info@filmclinicmasterclass.com',
    href: 'mailto:info@filmclinicmasterclass.com',
  },
  {
    icon: HiLocationMarker,
    title: 'Location',
    value: 'Nakuru, Kenya',
    href: null,
  },
]

export default function Contact() {
  usePageMeta(
    'Contact Us',
    'Contact Film Clinic Masterclass in Nakuru, Kenya. Get in touch to learn more about our filmmaking programs and upcoming cohorts.',
    'contact Film Clinic, filmmaking enquiry Kenya, film school contact, filmmaking training Nakuru, film production course enquiry, filmmaking classes Kenya'
  )
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('https://formsubmit.co/ajax/info@filmclinicmasterclass.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          _subject: `[Film Clinic Contact] ${formData.subject}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || data.success === 'false') {
        throw new Error(data.message || 'Something went wrong sending your message.')
      }
      setSubmitted(true)
    } catch (err) {
      setError(err.message || 'Failed to send. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <img src="/photos/IMG_9621.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" loading="eager" decoding="async" fetchpriority="high" />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-gold/20 text-gold-light px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            Get In Touch
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Contact Us
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Have a question or want to learn more about our programs? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Contact Information</span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy mt-2 mb-4 sm:mb-6">Let's Connect</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Have questions about our programs? Want to know more about the next cohort? Reach out to us through any of the channels below.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-gold text-xl" />
                  </div>
                  <div>
                    <h4 className="text-navy font-semibold text-sm uppercase tracking-wider">{info.title}</h4>
                    {info.href ? (
                      <a href={info.href} className="text-gray-600 hover:text-gold transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-600">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 p-5 sm:p-8 md:p-10">
              <h3 className="font-heading text-2xl font-bold text-navy mb-2">Send Us a Message</h3>
              <p className="text-gray-500 mb-8">Fill in your details and we'll get back to you as soon as possible.</p>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Message Sent!</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Thank you for reaching out. We will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-navy text-sm font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-navy"
                      />
                    </div>
                    <div>
                      <label className="block text-navy text-sm font-semibold mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-navy"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-navy text-sm font-semibold mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+254 7XX XXX XXX"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-navy"
                      />
                    </div>
                    <div>
                      <label className="block text-navy text-sm font-semibold mb-2">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What is this about?"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-navy"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-navy text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-navy resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-600 text-sm text-center" role="alert">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gold hover:bg-gold-dark disabled:opacity-60 disabled:cursor-not-allowed text-navy font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-gray-400 text-xs text-center">
                    By submitting this form, you agree to be contacted regarding Film Clinic Masterclass programs.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder with more photos */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-gold">Our Space</span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy mt-2">Where the Magic Happens</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <img src="/photos/IMG_0592.JPG" alt="Film Clinic Masterclass workspace in Nakuru" width="600" height="450" className="rounded-lg sm:rounded-xl w-full h-32 sm:h-40 md:h-48 object-cover shadow-md" loading="lazy" decoding="async" />
            <img src="/photos/IMG_0652.JPG" alt="Film Clinic studio set used for productions" width="600" height="450" className="rounded-lg sm:rounded-xl w-full h-32 sm:h-40 md:h-48 object-cover shadow-md" loading="lazy" decoding="async" />
            <img src="/photos/IMG_1075.JPG" alt="Film Clinic editing and post-production space" width="600" height="450" className="rounded-lg sm:rounded-xl w-full h-32 sm:h-40 md:h-48 object-cover shadow-md" loading="lazy" decoding="async" />
            <img src="/photos/IMG_1538.JPG" alt="Film Clinic classroom during a workshop" width="600" height="450" className="rounded-lg sm:rounded-xl w-full h-32 sm:h-40 md:h-48 object-cover shadow-md" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>
    </>
  )
}
