import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Programs',
    path: '/programs',
    children: [
      { name: 'Masterclass', path: '/programs/masterclass' },
      { name: 'Bootcamp', path: '/programs/bootcamp' },
    ],
  },
  { name: 'Outcomes', path: '/outcomes' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const { pathname } = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isProgramsActive = pathname.startsWith('/programs')

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Film Clinic Masterclass" className="h-[50px] sm:h-[70px] w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.path} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                      isProgramsActive
                        ? 'text-gold border-b-2 border-gold pb-1'
                        : 'text-navy hover:text-gold'
                    }`}
                  >
                    {link.name}
                    <HiChevronDown className={`text-xs transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[200px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setDropdownOpen(false)}
                          className={`block px-5 py-3 text-sm font-medium transition-colors duration-200 ${
                            pathname === child.path
                              ? 'text-gold bg-gold/5'
                              : 'text-navy hover:text-gold hover:bg-gray-50'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                    pathname === link.path
                      ? 'text-gold border-b-2 border-gold pb-1'
                      : 'text-navy hover:text-gold'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              to="/contact"
              className="bg-gold hover:bg-gold-dark text-navy font-bold px-6 py-2.5 rounded-full text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-navy p-2"
            aria-label="Toggle menu"
          >
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.path}>
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className={`flex items-center justify-between w-full text-sm font-semibold uppercase tracking-wider py-2 ${
                      isProgramsActive ? 'text-gold' : 'text-navy'
                    }`}
                  >
                    {link.name}
                    <HiChevronDown className={`text-xs transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileDropdownOpen && (
                    <div className="pl-4 border-l-2 border-gold/30 ml-2 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => { setOpen(false); setMobileDropdownOpen(false) }}
                          className={`block text-sm font-medium py-2 ${
                            pathname === child.path ? 'text-gold' : 'text-navy/70 hover:text-gold'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`block text-sm font-semibold uppercase tracking-wider py-2 ${
                    pathname === link.path ? 'text-gold' : 'text-navy'
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block bg-gold text-navy font-bold px-6 py-3 rounded-full text-sm uppercase tracking-wider text-center mt-4"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
