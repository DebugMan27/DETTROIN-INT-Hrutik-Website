import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Share2, Camera, Video, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-slate-300">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* About */}
        <div>
          <div className="flex items-center gap-3">
            <img src="/favicon.svg" alt="Vasant Valley" className="h-12 w-12" />
            <div>
              <p className="font-serif text-lg font-bold text-white">Vasant Valley</p>
              <p className="text-xs uppercase tracking-wide text-accent-400">School</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            A centre of academic excellence nurturing curious minds, confident individuals and
            compassionate citizens since 1990.
          </p>
          <div className="mt-5 flex gap-3">
            {[Share2, Camera, Video, MessageCircle].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-500 hover:text-primary-950"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-4 font-serif text-base font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { name: 'About Us', path: '/about' },
              { name: 'Academics', path: '/academics' },
              { name: 'Admissions', path: '/admissions' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'News & Events', path: '/news' },
              { name: 'Contact', path: '/contact' },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-slate-400 transition-colors hover:text-accent-400">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="mb-4 font-serif text-base font-semibold text-white">Our Programs</h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>Pre-Primary</li>
            <li>Primary School</li>
            <li>Middle School</li>
            <li>Senior School</li>
            <li>Co-curricular</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-serif text-base font-semibold text-white">Reach Us</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent-400" />
              <span>Vasant Valley Road, New Delhi 110070, India</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-accent-400" />
              <a href="tel:+911234567890" className="hover:text-accent-400">+91 12345 67890</a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-accent-400" />
              <a href="mailto:info@vasantvalley.edu" className="hover:text-accent-400">info@vasantvalley.edu</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Vasant Valley School. All rights reserved.</p>
          <p>Designed with care for nurturing excellence.</p>
        </div>
      </div>
    </footer>
  )
}
