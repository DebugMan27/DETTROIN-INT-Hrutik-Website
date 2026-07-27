import { Link } from 'react-router-dom'
import { Target, Eye, Heart, Users, Award, BookOpen, ArrowRight, CheckCircle2, Trophy } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import useScrollAnimation from '../hooks/useScrollAnimation.js'

export default function About() {
  useScrollAnimation()

  return (
    <>
      <PageHero
        title="About Our School"
        subtitle="Three decades of nurturing curious minds, confident individuals and compassionate citizens."
        crumb="About"
      />

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-on-scroll">
            <img
              src="https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Our campus"
              className="rounded-3xl object-cover shadow-xl"
            />
          </div>
          <div className="animate-on-scroll">
            <span className="eyebrow">Our Story</span>
            <h2 className="section-title">Rooted in Values, Reaching for Excellence</h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              Vasant Valley School began in 1990 with a simple belief — that education should
              awaken a child's innate curiosity and help them grow into well-rounded, responsible
              individuals. What started as a small institution has grown into a vibrant community of
              over 1,200 students and 90 dedicated educators.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Through the years we have stayed true to our founding philosophy while evolving our
              methods to meet the demands of a modern, interconnected world.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Affiliated with a recognised national board',
                'Sprawling green campus with modern facilities',
                'Low student-teacher ratio for personalised attention',
                'A culture of respect, inclusion and inquiry',
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="shrink-0 text-success-500" size={20} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: 'Our Mission', text: 'To provide a nurturing environment where every child discovers their strengths, develops a love for learning, and grows into a confident, compassionate citizen.' },
              { icon: Eye, title: 'Our Vision', text: 'To be a centre of educational excellence that shapes lifelong learners and ethical leaders for a rapidly changing world.' },
              { icon: Heart, title: 'Our Values', text: 'Integrity, empathy, curiosity, respect and excellence — the principles that guide everything we do.' },
            ].map((c) => (
              <div key={c.title} className="animate-on-scroll card text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                  <c.icon size={26} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-primary-900">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="animate-on-scroll mx-auto max-w-2xl text-center">
            <span className="eyebrow">Our Leadership</span>
            <h2 className="section-title">Guided by Experience & Vision</h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Dr. Rekha Sharma', role: 'Principal', img: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=500' },
              { name: 'Mr. Arjun Verma', role: 'Vice Principal', img: 'https://images.pexels.com/photos/8422876/pexels-photo-8422876.jpeg?auto=compress&cs=tinysrgb&w=500' },
              { name: 'Ms. Priya Nair', role: 'Head of Academics', img: 'https://images.pexels.com/photos/5212303/pexels-photo-5212303.jpeg?auto=compress&cs=tinysrgb&w=500' },
            ].map((p) => (
              <div key={p.name} className="animate-on-scroll overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl">
                <div className="h-64 overflow-hidden">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-serif text-lg font-bold text-primary-900">{p.name}</h3>
                  <p className="text-sm text-accent-600">{p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-950 py-16 text-white">
        <div className="container grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[
            { icon: Users, value: '1,200+', label: 'Students' },
            { icon: BookOpen, value: '90+', label: 'Faculty' },
            { icon: Award, value: '35+', label: 'Years' },
            { icon: Trophy, value: '50+', label: 'Awards' },
          ].map((s) => (
            <div key={s.label} className="animate-on-scroll">
              <s.icon className="mx-auto text-accent-400" size={28} />
              <p className="mt-2 font-serif text-3xl font-bold">{s.value}</p>
              <p className="text-xs uppercase tracking-wide text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container flex flex-col items-center gap-6 py-16 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="section-title">Come see our campus in action</h2>
          <p className="mt-2 text-slate-600">Schedule a visit or explore our academic programmes.</p>
        </div>
        <div className="flex gap-4">
          <Link to="/contact" className="btn-primary">Schedule a Visit <ArrowRight size={16} /></Link>
          <Link to="/academics" className="btn-outline">View Academics</Link>
        </div>
      </section>
    </>
  )
}
