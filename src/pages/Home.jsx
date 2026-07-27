import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Award,
  Users,
  Heart,
  Microscope,
  Palette,
  Trophy,
  Music,
  Quote,
  Calendar,
} from 'lucide-react'
import useScrollAnimation from '../hooks/useScrollAnimation.js'

export default function Home() {
  useScrollAnimation()

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/8617715/pexels-photo-8617715.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="School campus"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/70 to-primary-900/40" />
        </div>

        <div className="container relative pt-24">
          <div className="max-w-2xl">
            <span className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent-300 backdrop-blur">
              Welcome to Vasant Valley School
            </span>
            <h1 className="animate-fade-up mt-5 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Nurturing Excellence, Inspiring Futures
            </h1>
            <p className="animate-fade-up mt-5 max-w-xl text-lg text-white/80" style={{ animationDelay: '0.1s' }}>
              A centre of learning where curiosity is kindled, character is shaped, and every child
              is empowered to discover their unique potential.
            </p>
            <div className="animate-fade-up mt-8 flex flex-wrap gap-4" style={{ animationDelay: '0.2s' }}>
              <Link to="/admissions" className="btn-primary">
                Begin Admission <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn-secondary">
                Discover Our School
              </Link>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="absolute inset-x-0 bottom-0 bg-white/5 backdrop-blur-md">
          <div className="container grid grid-cols-2 divide-x divide-white/10 py-6 md:grid-cols-4">
            {[
              { icon: Users, value: '1,200+', label: 'Students' },
              { icon: BookOpen, value: '90+', label: 'Expert Faculty' },
              { icon: Award, value: '35+', label: 'Years of Excellence' },
              { icon: Trophy, value: '100%', label: 'Board Results' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 px-2 text-center">
                <s.icon className="text-accent-400" size={22} />
                <span className="font-serif text-2xl font-bold text-white">{s.value}</span>
                <span className="text-xs uppercase tracking-wide text-white/60">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome / About */}
      <section className="py-20 md:py-28">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-on-scroll relative">
            <img
              src="https://images.pexels.com/photos/8617860/pexels-photo-8617860.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Students learning"
              className="rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-primary-700 p-6 text-white shadow-xl md:block">
              <p className="font-serif text-3xl font-bold">35+</p>
              <p className="text-sm text-white/80">Years of nurturing young minds</p>
            </div>
          </div>
          <div className="animate-on-scroll">
            <span className="eyebrow">About Our School</span>
            <h2 className="section-title">A Tradition of Excellence in Education</h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              Founded in 1990, Vasant Valley School has grown into one of the most respected
              educational institutions in the country. We believe that every child is unique, and
              our role is to provide an environment where that uniqueness flourishes.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Our holistic approach blends rigorous academics with rich co-curricular programmes,
              helping students become thoughtful, confident and compassionate individuals ready for
              a changing world.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Heart, title: 'Holistic Growth', text: 'Mind, body and character nurtured together.' },
                { icon: Award, title: 'Academic Rigour', text: 'Consistent top results across boards.' },
              ].map((f) => (
                <div key={f.title} className="flex gap-3 rounded-xl border border-slate-100 p-4">
                  <f.icon className="mt-0.5 shrink-0 text-primary-600" size={22} />
                  <div>
                    <p className="font-semibold text-primary-900">{f.title}</p>
                    <p className="text-sm text-slate-500">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-outline mt-7">
              Read Our Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container">
          <div className="animate-on-scroll mx-auto max-w-2xl text-center">
            <span className="eyebrow">Academic Programs</span>
            <h2 className="section-title">Learning for Every Stage</h2>
            <p className="mt-4 text-slate-600">
              From first steps to final exams, our curriculum grows with your child — age-appropriate,
              engaging and rooted in strong values.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Palette, title: 'Pre-Primary', text: 'Play-based foundation for ages 3-5.', img: 'https://images.pexels.com/photos/8472898/pexels-photo-8472898.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { icon: BookOpen, title: 'Primary School', text: 'Curiosity-led learning for classes 1-5.', img: 'https://images.pexels.com/photos/8423025/pexels-photo-8423025.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { icon: Microscope, title: 'Middle School', text: 'Concept-driven exploration for classes 6-8.', img: 'https://images.pexels.com/photos/8541941/pexels-photo-8541941.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { icon: Award, title: 'Senior School', text: 'Board excellence for classes 9-12.', img: 'https://images.pexels.com/photos/8423029/pexels-photo-8423029.jpeg?auto=compress&cs=tinysrgb&w=600' },
            ].map((p) => (
              <div key={p.title} className="animate-on-scroll group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-44 overflow-hidden">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary-700">
                    <p.icon size={20} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-primary-900">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-500">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="animate-on-scroll mt-10 text-center">
            <Link to="/academics" className="btn-outline">
              Explore Academics <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Co-curricular */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="animate-on-scroll mx-auto max-w-2xl text-center">
            <span className="eyebrow">Beyond the Classroom</span>
            <h2 className="section-title">A World of Co-curricular Opportunities</h2>
            <p className="mt-4 text-slate-600">
              We believe learning happens everywhere — on the field, on stage, in the lab and in the
              community.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Trophy, title: 'Sports & Athletics', text: 'Cricket, football, athletics, swimming and more, led by expert coaches.' },
              { icon: Music, title: 'Music & Performing Arts', text: 'Vocal, instrumental, dance and drama — creativity in every form.' },
              { icon: Palette, title: 'Visual Arts', text: 'Painting, sculpture, photography and design studios.' },
              { icon: Microscope, title: 'Science & Robotics', text: 'Hands-on labs and a thriving robotics and coding club.' },
              { icon: Users, title: 'Community Service', text: 'Outreach programmes that build empathy and leadership.' },
              { icon: BookOpen, title: 'Literary & Debate', text: 'Model UN, quizzes, public speaking and a vibrant library.' },
            ].map((c) => (
              <div key={c.title} className="animate-on-scroll card flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  <c.icon size={22} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary-900">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-500">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-primary-950 py-20 text-white md:py-28">
        <div className="container">
          <div className="animate-on-scroll mx-auto max-w-3xl text-center">
            <Quote className="mx-auto text-accent-400" size={40} />
            <p className="mt-6 font-serif text-2xl font-medium leading-relaxed text-white/90 md:text-3xl">
              "Vasant Valley gave our daughter not just an education, but the confidence to dream big
              and the values to chase those dreams responsibly. We could not have asked for a better
              foundation."
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120"
                alt="Parent"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-accent-400"
              />
              <div className="text-left">
                <p className="font-semibold text-white">Anjali Mehta</p>
                <p className="text-sm text-white/60">Parent, Class X</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News teaser */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="animate-on-scroll flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Latest Updates</span>
              <h2 className="section-title">News & Events</h2>
            </div>
            <Link to="/news" className="btn-outline">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { tag: 'Event', date: '12 Aug 2026', title: 'Annual Cultural Fest "Utsav 2026"', img: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=700' },
              { tag: 'Achievement', date: '28 Jul 2026', title: 'Students Win National Robotics Championship', img: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=700' },
              { tag: 'Notice', date: '20 Jul 2026', title: 'Admissions Open for 2026-27 Session', img: 'https://images.pexels.com/photos/8423135/pexels-photo-8423135.jpeg?auto=compress&cs=tinysrgb&w=700' },
            ].map((n) => (
              <article key={n.title} className="animate-on-scroll group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img src={n.img} alt={n.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-white">{n.tag}</span>
                </div>
                <div className="p-5">
                  <p className="flex items-center gap-2 text-xs text-slate-400">
                    <Calendar size={13} /> {n.date}
                  </p>
                  <h3 className="mt-2 font-serif text-lg font-bold text-primary-900">{n.title}</h3>
                  <Link to="/news" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-800">
                    Read more <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary-700 py-16 md:py-20">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 10% 10%, #f59e0b 0, transparent 35%), radial-gradient(circle at 90% 90%, #3366ff 0, transparent 35%)',
          }}
        />
        <div className="container relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Ready to join the Vasant Valley family?
            </h2>
            <p className="mt-2 text-white/80">Admissions for 2026-27 are now open. Begin your journey today.</p>
          </div>
          <Link to="/admissions" className="btn-secondary !border-white/30">
            Apply for Admission <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
