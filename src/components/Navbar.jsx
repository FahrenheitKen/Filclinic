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
  {
    name: 'Outcomes',
    path: '/outcomes',
    children: [
      { name: 'Outcomes & Impact', path: '/outcomes' },
      { name: 'Soila — Cohort 1', path: '/films/soila' },
    ],
  },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null) // desktop: link.path or null
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null)
  const { pathname } = useLocation()
  const navRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const isParentActive = (link) =>
    pathname === link.path ||
    pathname.startsWith(`${link.path}/`) ||
    link.children?.some((c) => pathname === c.path)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Film Clinic Masterclass" className="h-[50px] sm:h-[70px] w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8" ref={navRef}>
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.path} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.path ? null : link.path)}
                    className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wider transition-colors duration-200 ${
                      isParentActive(link)
                        ? 'text-gold border-b-2 border-gold pb-1'
                        : 'text-navy hover:text-gold'
                    }`}
                  >
                    {link.name}
                    <HiChevronDown className={`text-xs transition-transform duration-200 ${openDropdown === link.path ? 'rotate-180' : ''}`} />
                  </button>
                  {openDropdown === link.path && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[210px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setOpenDropdown(null)}
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
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSexDjvcO2hbxiX-zodc8Ux5YkWXjxB3hHTj9jnDsKTLUOfjqg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-dark text-navy font-bold px-6 py-2.5 rounded-full text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Apply Now
            </a>
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
                    onClick={() => setMobileOpenDropdown(mobileOpenDropdown === link.path ? null : link.path)}
                    className={`flex items-center justify-between w-full text-sm font-semibold uppercase tracking-wider py-2 ${
                      isParentActive(link) ? 'text-gold' : 'text-navy'
                    }`}
                  >
                    {link.name}
                    <HiChevronDown className={`text-xs transition-transform duration-200 ${mobileOpenDropdown === link.path ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileOpenDropdown === link.path && (
                    <div className="pl-4 border-l-2 border-gold/30 ml-2 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => { setOpen(false); setMobileOpenDropdown(null) }}
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
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSexDjvcO2hbxiX-zodc8Ux5YkWXjxB3hHTj9jnDsKTLUOfjqg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block bg-gold text-navy font-bold px-6 py-3 rounded-full text-sm uppercase tracking-wider text-center mt-4"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
