import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import toast from 'react-hot-toast'

const JOBS = [
  { id: 1, title: 'Guest Experience Manager', city: 'Vancouver', type: 'Full-time', dept: 'Operations', description: 'Be the face of Airstay for our Vancouver guests. You\'ll manage check-ins, handle guest communications, and ensure every stay exceeds expectations. A background in hospitality and a passion for detail are essential.' },
  { id: 2, title: 'Property Operations Lead', city: 'Montreal', type: 'Full-time', dept: 'Operations', description: 'Oversee day-to-day operations across our Montreal portfolio. Coordinate cleaning teams, maintenance technicians, and vendor relationships to keep every property in immaculate condition.' },
  { id: 3, title: 'Maintenance Technician', city: 'Vancouver', type: 'Full-time', dept: 'Maintenance', description: 'Respond to maintenance requests across our Vancouver properties. You\'ll diagnose and repair issues quickly, coordinate specialist contractors, and ensure properties are always guest-ready.' },
  { id: 4, title: 'Revenue & Pricing Analyst', city: 'Remote · Canada', type: 'Full-time', dept: 'Finance', description: 'Work alongside our Pricelabs integration to optimise pricing strategies across all markets. Analyse occupancy trends, competitive rates, and seasonal patterns to maximise owner revenue.' },
  { id: 5, title: 'Marketing & Brand Coordinator', city: 'Vancouver', type: 'Full-time', dept: 'Marketing', description: 'Shape how Airstay shows up across all channels — social media, photography direction, partnerships, and brand consistency as we expand into new markets.' },
  { id: 6, title: 'Property Acquisition Specialist', city: 'Vancouver / Montreal', type: 'Full-time', dept: 'Growth', description: 'Build relationships with property owners and developers to grow the Airstay portfolio. You\'ll present revenue projections, negotiate management agreements, and onboard new properties.' },
]

function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', linkedin: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email) return toast.error('Name and email are required')
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <motion.div className="modal-panel max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }}>
        <button onClick={onClose} className="absolute top-5 right-5 text-muted hover:text-ink text-xl">✕</button>

        {!submitted ? (
          <>
            <div className="eyebrow mb-3">Apply Now</div>
            <h2 className="heading-md text-ink mb-1">{job.title}</h2>
            <p className="font-body text-xs text-gold tracking-wider uppercase mb-8">{job.city} · {job.type}</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">Full Name *</label>
                <input className="input-luxury" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">Email *</label>
                <input type="email" className="input-luxury" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="email@example.com" />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">LinkedIn or Portfolio URL</label>
                <input type="url" className="input-luxury" value={form.linkedin} onChange={e => setForm({...form, linkedin: e.target.value})} placeholder="https://linkedin.com/in/yourname" />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">Why Airstay?</label>
                <textarea className="input-luxury resize-none h-24" value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell us what excites you about this role and Airstay..." />
              </div>
              <button type="submit" className="btn-primary w-full justify-center" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Application →'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-4xl mb-6">✦</div>
            <h3 className="font-display text-3xl font-light text-ink mb-3">Application received.</h3>
            <p className="font-body text-sm text-muted font-light max-w-sm mx-auto mb-8">
              Thank you for your interest in joining Airstay. We review every application carefully and will be in touch if there's a fit.
            </p>
            <button onClick={onClose} className="btn-outline">Close</button>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function Careers() {
  const [activeJob, setActiveJob] = useState(null)

  return (
    <div className="page-enter pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-16 mb-20 items-end">
          <div>
            <Reveal><div className="eyebrow">Join the Team</div></Reveal>
            <Reveal delay={0.1}>
              <h1 className="heading-display text-ink mt-2">
                Build the future<br />of <em className="italic text-gold">hospitality.</em>
              </h1>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="font-body font-light text-muted text-base leading-relaxed">
              We're a fast-growing company with big ambitions — expanding across Canada and into the US. We look for people who are obsessed with quality, take pride in their craft, and genuinely care about the guest experience.
            </p>
          </Reveal>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/10 mb-20">
          {[
            ['Excellence', 'We hold every detail to a high standard — in our properties and in ourselves.'],
            ['Ownership', 'Act like an owner. Take initiative, make decisions, and stand by your work.'],
            ['Hospitality', 'Genuine care for guests, owners, and colleagues is at the core of everything.'],
            ['Growth', 'We\'re expanding — and we promote from within. Your ambition has room here.'],
          ].map(([title, desc], i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="bg-parchment p-8">
                <h3 className="font-display text-2xl font-light text-ink mb-3">{title}</h3>
                <p className="font-body text-sm font-light text-muted leading-relaxed">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Jobs */}
        <Reveal><h2 className="heading-lg text-ink mb-10">Open Positions</h2></Reveal>

        <div className="space-y-px">
          {JOBS.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.06}>
              <div
                className="bg-surface border border-gold/10 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-gold/30 transition-all duration-200 group cursor-pointer"
                onClick={() => setActiveJob(job)}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] tracking-widest uppercase text-gold font-body">{job.dept}</span>
                  </div>
                  <h3 className="font-display text-2xl font-light text-ink mb-1">{job.title}</h3>
                  <p className="font-body text-xs text-muted">{job.city} · {job.type}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-body text-xs tracking-widest uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200">Apply Now</span>
                  <span className="text-gold text-xl group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeJob && <ApplyModal job={activeJob} onClose={() => setActiveJob(null)} />}
      </AnimatePresence>
    </div>
  )
}
