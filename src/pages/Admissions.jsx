import { Link } from 'react-router-dom'
import { CheckCircle2, FileText, ClipboardList, Award, ArrowRight, Download } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import useScrollAnimation from '../hooks/useScrollAnimation.js'

const steps = [
  { icon: FileText, title: 'Enquiry', text: 'Submit the online enquiry form to express your interest. Our team will get in touch with details.' },
  { icon: ClipboardList, title: 'Application', text: 'Complete the admission form and submit the required documents along with the registration fee.' },
  { icon: Award, title: 'Interaction', text: 'An age-appropriate interaction or assessment with the student and parents.' },
  { icon: CheckCircle2, title: 'Confirmation', text: 'On selection, confirm your seat by completing the fee payment within the given window.' },
]

export default function Admissions() {
  useScrollAnimation()

  return (
    <>
      <PageHero
        title="Admissions"
        subtitle="A simple, transparent process to join the Vasant Valley family. Admissions for 2026-27 are open."
        crumb="Admissions"
      />

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="animate-on-scroll mx-auto max-w-2xl text-center">
            <span className="eyebrow">How to Apply</span>
            <h2 className="section-title">Four Simple Steps</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="animate-on-scroll relative rounded-2xl bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-700 px-3 py-1 text-xs font-bold text-white">
                  Step {i + 1}
                </span>
                <div className="mx-auto mt-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                  <s.icon size={24} />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-primary-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility + Documents */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="animate-on-scroll">
            <span className="eyebrow">Age Criteria</span>
            <h2 className="section-title">Eligibility for 2026-27</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-primary-700 text-white">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Grade</th>
                    <th className="px-5 py-3 font-semibold">Age as on 31 Mar 2026</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ['Nursery', '3 years +'],
                    ['KG', '4 years +'],
                    ['Class 1', '5 years +'],
                    ['Class 2-8', 'Age appropriate'],
                    ['Class 9-11', 'Based on prior records'],
                  ].map((r) => (
                    <tr key={r[0]} className="hover:bg-slate-50">
                      <td className="px-5 py-3 font-medium text-primary-900">{r[0]}</td>
                      <td className="px-5 py-3 text-slate-600">{r[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="animate-on-scroll">
            <span className="eyebrow">What to Bring</span>
            <h2 className="section-title">Required Documents</h2>
            <ul className="mt-6 space-y-3">
              {[
                'Birth certificate (photocopy)',
                'Passport-size photographs (4 nos.)',
                'Previous school report card / transfer certificate',
                'Aadhaar card of student and parents',
                'Address proof of parent / guardian',
                'Immunisation / health record',
              ].map((d) => (
                <li key={d} className="flex items-center gap-3 rounded-xl bg-white p-4 text-slate-700 shadow-sm">
                  <CheckCircle2 className="shrink-0 text-success-500" size={20} />
                  {d}
                </li>
              ))}
            </ul>
            <button className="btn-outline mt-6">
              <Download size={16} /> Download Prospectus
            </button>
          </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <div className="animate-on-scroll text-center">
            <span className="eyebrow">Admission Enquiry</span>
            <h2 className="section-title">Register Your Interest</h2>
            <p className="mt-3 text-slate-600">Fill in your details and our admissions team will contact you shortly.</p>
          </div>
          <form className="animate-on-scroll mt-10 space-y-5 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:p-8" onSubmit={(e) => { e.preventDefault(); alert('Thank you! This is a demo form. It will be connected to the database in a later step.') }}>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Parent / Guardian Name" name="parent" placeholder="Full name" />
              <Field label="Student Name" name="student" placeholder="Student's name" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              <Field label="Phone" name="phone" type="tel" placeholder="+91 ..." />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">Grade Applying For</label>
                <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100">
                  <option>Nursery</option>
                  <option>KG</option>
                  <option>Class 1</option>
                  <option>Class 2-5</option>
                  <option>Class 6-8</option>
                  <option>Class 9-12</option>
                </select>
              </div>
              <Field label="Current School (if any)" name="current" placeholder="Optional" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us a bit about your child..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">Submit Enquiry <ArrowRight size={16} /></button>
          </form>
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
