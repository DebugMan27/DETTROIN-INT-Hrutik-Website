import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div
        className={`hidden border-b border-white/10 text-xs text-white transition-all md:block ${
          scrolled ? 'max-h-0 overflow-hidden opacity-0' : 'max-h-10 opacity-100'
        }`}
        style={{ backgroundColor: '#161e54' }}
      >
        <div className="container flex h-9 items-center justify-between">
          <span className="tracking-wide">Welcome to Vasant Valley School</span>
          <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-accent-300">
            <Phone size={12} /> +91 12345 67890
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src="/favicon.svg" alt="Vasant Valley" className="h-10 w-10 md:h-12 md:w-12" />
          <span
            className={`font-serif text-lg font-bold leading-tight md:text-xl ${
              scrolled ? 'text-primary-900' : 'text-white'
            }`}
          >
            Vasant Valley
            <span className={`block text-xs font-normal tracking-wide ${scrolled ? 'text-accent-600' : 'text-accent-300'}`}>
              SCHOOL
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled ? 'text-slate-700 hover:text-primary-700' : 'text-white/90 hover:text-white'
                  } ${isActive ? (scrolled ? 'bg-primary-50 text-primary-700' : 'bg-white/15 text-white') : ''}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/admissions" className="hidden lg:inline-flex btn-primary !py-2.5">
          Apply Now
        </Link>

        <button
          className={`lg:hidden ${scrolled ? 'text-primary-900' : 'text-white'}`}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white shadow-xl transition-all duration-300 lg:hidden ${
          open ? 'max-h-[480px] border-t border-slate-100' : 'max-h-0'
        }`}
      >
        <ul className="container flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive ? 'bg-primary-50 text-primary-700' : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className="mt-2">
            <Link to="/admissions" className="btn-primary w-full">
              Apply Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
