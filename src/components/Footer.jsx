import { Link } from 'react-router-dom'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <img src="/logo.png" alt="Film Clinic Masterclass" className="h-12 sm:h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Practical filmmaking. Real production. Measurable outcomes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Outcomes', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-gold text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://ustadifilms.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold text-sm transition-colors"
                >
                  Ustadi Films
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><Link to="/programs/masterclass" className="text-gray-400 hover:text-gold text-sm transition-colors">Masterclass</Link></li>
              <li><Link to="/programs/bootcamp" className="text-gray-400 hover:text-gold text-sm transition-colors">Bootcamp</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-gold text-sm transition-colors">Apply Now</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold uppercase tracking-wider text-sm mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <HiPhone className="text-gold flex-shrink-0" />
                <a href="tel:+254713554560" className="text-gray-400 hover:text-gold text-sm transition-colors">
                  +254 713 554560
                </a>
              </li>
              <li className="flex items-start gap-3 min-w-0">
                <HiMail className="text-gold flex-shrink-0 mt-0.5" />
                <a href="mailto:info@filmclinicmasterclass.com" className="text-gray-400 hover:text-gold text-xs sm:text-sm transition-colors break-all leading-relaxed">
                  info@filmclinicmasterclass.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <HiLocationMarker className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Nakuru, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Film Clinic Masterclass. All rights reserved. Developed by Bluechange Technology
          </p>
          <p className="text-gray-500 text-sm">
            An initiative of <span className="text-gold font-medium">Ustadi Films Ltd</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
