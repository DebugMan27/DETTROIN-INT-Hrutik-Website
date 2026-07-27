import { useState } from 'react'
import { Calendar, ArrowRight, Tag } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import useScrollAnimation from '../hooks/useScrollAnimation.js'

const allNews = [
  { id: 1, tag: 'Event', date: '12 Aug 2026', title: 'Annual Cultural Fest "Utsav 2026"', img: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=800', excerpt: 'A three-day celebration of music, dance, drama and art featuring performances by students across all grades.' },
  { id: 2, tag: 'Achievement', date: '28 Jul 2026', title: 'Students Win National Robotics Championship', img: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800', excerpt: 'Our robotics team bagged the top honour at the National STEM Challenge held in Bengaluru.' },
  { id: 3, tag: 'Notice', date: '20 Jul 2026', title: 'Admissions Open for 2026-27 Session', img: 'https://images.pexels.com/photos/8423135/pexels-photo-8423135.jpeg?auto=compress&cs=tinysrgb&w=800', excerpt: 'Online registrations for the new academic session are now open. Limited seats available across grades.' },
  { id: 4, tag: 'Sports', date: '15 Jul 2026', title: 'Inter-House Athletics Meet Concludes', img: 'https://images.pexels.com/photos/8088494/pexels-photo-8088494.jpeg?auto=compress&cs=tinysrgb&w=800', excerpt: 'House Everest emerged champions after a week of thrilling track and field events.' },
  { id: 5, tag: 'Event', date: '08 Jul 2026', title: 'Investiture Ceremony for Student Council', img: 'https://images.pexels.com/photos/8617860/pexels-photo-8617860.jpeg?auto=compress&cs=tinysrgb&w=800', excerpt: 'The new student council took oath in a solemn ceremony, ready to lead the school for the year.' },
  { id: 6, tag: 'Achievement', date: '01 Jul 2026', title: 'Outstanding Class XII Board Results', img: 'https://images.pexels.com/photos/8423029/pexels-photo-8423029.jpeg?auto=compress&cs=tinysrgb&w=800', excerpt: '100% pass with 18 students scoring above 95% in the board examinations.' },
]

const tags = ['All', 'Event', 'Achievement', 'Notice', 'Sports']

export default function News() {
  useScrollAnimation()
  const [active, setActive] = useState('All')
  const list = active === 'All' ? allNews : allNews.filter((n) => n.tag === active)

  return (
    <>
      <PageHero
        title="News & Events"
        subtitle="Stay up to date with the latest happenings, achievements and announcements from our school."
        crumb="News"
      />

      <section className="py-20 md:py-24">
        <div className="container">
          <div className="animate-on-scroll mb-10 flex flex-wrap justify-center gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                  active === t ? 'bg-primary-700 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((n) => (
              <article
                key={n.id}
                className="animate-on-scroll group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={n.img} alt={n.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-white">
                    <Tag size={11} /> {n.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="flex items-center gap-2 text-xs text-slate-400">
                    <Calendar size={13} /> {n.date}
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-bold text-primary-900">{n.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-slate-500">{n.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 group-hover:text-primary-800">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
