import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function PageHero({ title, subtitle, crumb }) {
  return (
    <section
      className="relative flex items-end pt-32 pb-12 md:pt-40 md:pb-16"
      style={{ backgroundColor: '#161e54' }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #3366ff 0, transparent 40%), radial-gradient(circle at 80% 80%, #f59e0b 0, transparent 40%)',
        }}
      />
      <div className="container relative">
        <nav className="mb-3 flex items-center gap-1.5 text-xs text-white/60">
          <Link to="/" className="hover:text-white">Home</Link>
          <ChevronRight size={12} />
          <span className="text-accent-300">{crumb || title}</span>
        </nav>
        <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-white/70 md:text-lg">{subtitle}</p>}
      </div>
    </section>
  )
}
