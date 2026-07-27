import { Link } from 'react-router-dom'
import { BookOpen, Microscope, Palette, Award, Calculator, Globe, FlaskConical, Languages, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import useScrollAnimation from '../hooks/useScrollAnimation.js'

const stages = [
  {
    icon: Palette,
    name: 'Pre-Primary',
    grades: 'Nursery — KG (Ages 3-5)',
    img: 'https://images.pexels.com/photos/8472898/pexels-photo-8472898.jpeg?auto=compress&cs=tinysrgb&w=800',
    text: 'A joyful, play-based foundation where children develop language, motor skills and a love for learning through exploration and storytelling.',
  },
  {
    icon: BookOpen,
    name: 'Primary School',
    grades: 'Classes 1-5 (Ages 6-10)',
    img: 'https://images.pexels.com/photos/8423025/pexels-photo-8423025.jpeg?auto=compress&cs=tinysrgb&w=800',
    text: 'Curiosity-led learning that builds strong foundations in literacy, numeracy and enquiry, supported by art, music and physical education.',
  },
  {
    icon: Microscope,
    name: 'Middle School',
    grades: 'Classes 6-8 (Ages 11-13)',
    img: 'https://images.pexels.com/photos/8541941/pexels-photo-8541941.jpeg?auto=compress&cs=tinysrgb&w=800',
    text: 'Concept-driven exploration across subjects with growing emphasis on critical thinking, collaboration and independent research.',
  },
  {
    icon: Award,
    name: 'Senior School',
    grades: 'Classes 9-12 (Ages 14-18)',
    img: 'https://images.pexels.com/photos/8423029/pexels-photo-8423029.jpeg?auto=compress&cs=tinysrgb&w=800',
    text: 'Rigorous board preparation with streamed subject choices, career guidance and a strong focus on application and analysis.',
  },
]

const subjects = [
  { icon: Calculator, name: 'Mathematics' },
  { icon: FlaskConical, name: 'Science' },
  { icon: Languages, name: 'Languages' },
  { icon: Globe, name: 'Social Studies' },
  { icon: Palette, name: 'Arts' },
  { icon: BookOpen, name: 'Literature' },
]

export default function Academics() {
  useScrollAnimation()

  return (
    <>
      <PageHero
        title="Academics"
        subtitle="A curriculum that grows with your child — engaging, rigorous and rooted in strong values."
        crumb="Academics"
      />

      {/* Stages */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="animate-on-scroll mx-auto max-w-2xl text-center">
            <span className="eyebrow">Stages of Learning</span>
            <h2 className="section-title">Our Academic Journey</h2>
            <p className="mt-4 text-slate-600">
              Every stage is designed to meet the developmental needs of the child while building
              towards academic excellence.
            </p>
          </div>

          <div className="mt-14 space-y-12">
            {stages.map((s, i) => (
              <div
                key={s.name}
                className={`animate-on-scroll grid items-center gap-8 lg:grid-cols-2 ${
                  i % 2 === 1 ? 'lg:[&>img]:order-2' : ''
                }`}
              >
                <div className="overflow-hidden rounded-3xl shadow-lg">
                  <img src={s.img} alt={s.name} className="h-64 w-full object-cover md:h-72" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                      <s.icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-primary-900">{s.name}</h3>
                      <p className="text-sm text-accent-600">{s.grades}</p>
                    </div>
                  </div>
                  <p className="mt-4 leading-relaxed text-slate-600">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container">
          <div className="animate-on-scroll mx-auto max-w-2xl text-center">
            <span className="eyebrow">Core Subjects</span>
            <h2 className="section-title">A Broad & Balanced Curriculum</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {subjects.map((s) => (
              <div key={s.name} className="animate-on-scroll flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <s.icon size={22} />
                </div>
                <p className="text-sm font-semibold text-primary-900">{s.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container flex flex-col items-center gap-6 py-16 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="section-title">Ready to begin the journey?</h2>
          <p className="mt-2 text-slate-600">Admissions for 2026-27 are open. Apply today.</p>
        </div>
        <Link to="/admissions" className="btn-primary">Apply Now <ArrowRight size={16} /></Link>
      </section>
    </>
  )
}
