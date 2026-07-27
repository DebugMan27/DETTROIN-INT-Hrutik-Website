import { useState } from 'react'
import { X } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import useScrollAnimation from '../hooks/useScrollAnimation.js'

const categories = ['All', 'Campus', 'Events', 'Sports', 'Classroom']

const photos = [
  { cat: 'Campus', img: 'https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Main Building' },
  { cat: 'Classroom', img: 'https://images.pexels.com/photos/8423025/pexels-photo-8423025.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Primary Class' },
  { cat: 'Events', img: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Annual Day' },
  { cat: 'Sports', img: 'https://images.pexels.com/photos/8088494/pexels-photo-8088494.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Sports Meet' },
  { cat: 'Campus', img: 'https://images.pexels.com/photos/8617860/pexels-photo-8617860.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Library' },
  { cat: 'Classroom', img: 'https://images.pexels.com/photos/8541941/pexels-photo-8541941.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Science Lab' },
  { cat: 'Events', img: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Robotics Win' },
  { cat: 'Sports', img: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Football Ground' },
  { cat: 'Campus', img: 'https://images.pexels.com/photos/8423135/pexels-photo-8423135.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Art Studio' },
]

export default function Gallery() {
  useScrollAnimation()
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? photos : photos.filter((p) => p.cat === active)

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A glimpse into life at Vasant Valley — learning, play, celebration and discovery."
        crumb="Gallery"
      />

      <section className="py-20 md:py-24">
        <div className="container">
          {/* Filters */}
          <div className="animate-on-scroll mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  active === c
                    ? 'bg-primary-700 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <button
                key={p.title}
                onClick={() => setLightbox(p)}
                className="animate-on-scroll group relative overflow-hidden rounded-2xl shadow-sm transition-all hover:shadow-xl"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary-950/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="p-4 text-left">
                    <span className="text-xs uppercase tracking-wide text-accent-300">{p.cat}</span>
                    <p className="font-serif text-lg font-bold text-white">{p.title}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary-950/90 p-4 backdrop-blur"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute right-5 top-5 text-white/80 hover:text-white" aria-label="Close">
            <X size={28} />
          </button>
          <div className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.title} className="max-h-[80vh] w-full rounded-2xl object-contain" />
            <p className="mt-4 text-center font-serif text-xl text-white">{lightbox.title}</p>
          </div>
        </div>
      )}
    </>
  )
}
