import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import useScrollAnimation from '../hooks/useScrollAnimation.js'

export default function Contact() {
  useScrollAnimation()
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out for admissions, visits or any questions."
        crumb="Contact"
      />

      <section className="py-20 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-2">
          {/* Info */}
          <div className="animate-on-scroll">
            <span className="eyebrow">Get in Touch</span>
            <h2 className="section-title">Visit or Call Us</h2>
            <p className="mt-4 text-slate-600">
              Our team is available Monday to Saturday to answer your questions and schedule campus
              visits.
            </p>

            <div className="mt-8 space-y-5">
              {[
                { icon: MapPin, title: 'Address', lines: ['Vasant Valley Road', 'New Delhi 110070, India'] },
                { icon: Phone, title: 'Phone', lines: ['+91 12345 67890', '+91 98765 43210'] },
                { icon: Mail, title: 'Email', lines: ['info@vasantvalley.edu', 'admissions@vasantvalley.edu'] },
                { icon: Clock, title: 'Office Hours', lines: ['Mon - Fri: 8:00 AM - 4:00 PM', 'Sat: 8:00 AM - 12:00 PM'] },
              ].map((c) => (
                <div key={c.title} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    <c.icon size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-primary-900">{c.title}</p>
                    {c.lines.map((l) => (
                      <p key={l} className="text-sm text-slate-500">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="animate-on-scroll">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:p-8">
              <h3 className="font-serif text-xl font-bold text-primary-900">Send a Message</h3>
              <p className="mt-1 text-sm text-slate-500">We'll respond within two working days.</p>

              {sent ? (
                <div className="mt-6 rounded-2xl bg-success-500/10 p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success-500 text-white">
                    <Send size={20} />
                  </div>
                  <p className="mt-3 font-semibold text-success-700">Message sent!</p>
                  <p className="mt-1 text-sm text-slate-600">Thank you for reaching out. Our team will contact you soon.</p>
                  <button onClick={() => setSent(false)} className="btn-outline mt-4">Send another</button>
                </div>
              ) : (
                <form
                  className="mt-6 space-y-5"
                  onSubmit={(e) => { e.preventDefault(); setSent(true) }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" name="name" placeholder="Your name" />
                    <Field label="Email" name="email" type="email" placeholder="you@example.com" />
                  </div>
                  <Field label="Subject" name="subject" placeholder="How can we help?" />
                  <div>
                    <label htmlFor="msg" className="mb-1.5 block text-sm font-medium text-slate-700">Message</label>
                    <textarea
                      id="msg"
                      rows={5}
                      placeholder="Write your message..."
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    Send Message <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container pb-20 md:pb-28">
        <div className="animate-on-scroll overflow-hidden rounded-3xl shadow-sm">
          <iframe
            title="School location"
            src="https://www.google.com/maps?q=New+Delhi&output=embed"
            className="h-80 w-full border-0"
            loading="lazy"
          />
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-slate-700">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
      />
    </div>
  )
}
