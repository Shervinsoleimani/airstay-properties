import { useState } from 'react'
import { submitLead } from '../lib/submitLead'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import toast from 'react-hot-toast'

const JOBS = [
  { id: 1, title: 'Guest Experience Manager', type: 'Full-time', dept: 'Hospitality', desc: 'Be the voice of AirStay for our guests: anticipate needs, coordinate arrivals and make every stay exceed expectations. Hotel front-office or concierge background preferred.' },
  { id: 2, title: 'Property Operations Lead', type: 'Full-time', dept: 'Operations', desc: 'Oversee day-to-day operations across our residences, leading housekeeping, maintenance and vendor partners to a five-star standard.' },
  { id: 3, title: 'Maintenance Technician', type: 'Full-time', dept: 'Building Care', desc: 'Keep our buildings in impeccable condition through preventive care and responsive repairs. Trade experience and on-call availability required.' },
  { id: 4, title: 'Housekeeping Specialist', type: 'Full-time / Part-time', dept: 'Housekeeping', desc: 'Deliver hotel-grade presentation in every suite. Exceptional attention to detail and pride in your work are essential.' },
  { id: 5, title: 'Revenue & Pricing Analyst', type: 'Full-time', dept: 'Revenue', desc: 'Shape our pricing and distribution strategy using market data, seasonality and major-event demand to maximise owner returns.' },
  { id: 6, title: 'Business Development Manager', type: 'Full-time', dept: 'Growth', desc: 'Grow our portfolio by building relationships with owners, developers and investors, and presenting tailored management proposals.' },
  { id: 7, title: 'Marketing & Brand Coordinator', type: 'Full-time', dept: 'Marketing', desc: 'Steward the AirStay brand across our website, social channels, photography and partnerships.' },
  { id: 8, title: 'Open Application', type: 'Flexible', dept: 'General', desc: 'Exceptional people are always welcome. Tell us what you bring and where you would add the most value.' },
]

const CITY_OPTIONS = ['Montreal', 'Vancouver', 'Remote (Canada)', 'Open to either']

function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', portfolio: '', message: '' })
  const [done, setDone] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.city) return toast.error('Please add your name, email and preferred city')
    if (!(await submitLead('careers', { ...form, role: job?.title || 'General application' }))) { return }
    setDone(true)
  }

  return (
    <motion.div className="modal-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <motion.div className="modal-box" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', fontSize: 20, color: '#9B9590', cursor: 'pointer' }} aria-label="Close">×</button>

        {!done ? (
          <>
            <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 8 }}>{job.dept} · {job.type}</p>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: 30, fontWeight: 400, color: '#0D0C0A', marginBottom: 8 }}>{job.title}</h2>
            <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: '#9B9590', lineHeight: 1.7, marginBottom: 32 }}>{job.desc}</p>

            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Full Name *</label><input className="input-light" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" /></div>
                <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Email *</label><input type="email" className="input-light" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="email@example.com" /></div>
              </div>
              <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Phone</label><input className="input-light" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="Your phone number" /></div>
              <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Preferred City *</label><select className="input-light" style={{ appearance: 'none' }} value={form.city} onChange={e => setForm({...form, city: e.target.value})}><option value="">Select a city</option>{CITY_OPTIONS.map(c => <option key={c}>{c}</option>)}</select></div>
              <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>LinkedIn or Portfolio</label><input type="url" className="input-light" value={form.portfolio} onChange={e => setForm({...form, portfolio: e.target.value})} placeholder="https://" /></div>
              <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Why Airstay?</label><textarea className="input-light" style={{ resize: 'none', height: 80 }} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell us what excites you about this role..." /></div>
              <button type="submit" style={{ background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '14px 36px', border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}>Submit Application →</button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{ width: 40, height: 1, background: '#C9A96E', margin: '0 auto 28px' }} />
            <h3 style={{ fontFamily: 'Playfair Display', fontSize: 28, fontWeight: 400, color: '#0D0C0A', marginBottom: 12 }}>Application received.</h3>
            <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: '#9B9590' }}>We review every application carefully. We'll be in touch if there's a fit.</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function Careers() {
  const [activeJob, setActiveJob] = useState(null)
  const depts = ['All', ...new Set(JOBS.map(j => j.dept))]
  const [dept, setDept] = useState('All')
  const filtered = dept === 'All' ? JOBS : JOBS.filter(j => j.dept === dept)

  return (
    <div className="page-in" style={{ background: '#FAF7F2' }}>
      {/* Hero */}
      <div className="r-pad" style={{ background: '#0D0C0A', padding: '180px 48px 110px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/bishop/2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,12,10,0.92), rgba(44,62,53,0.75))' }} />
        <div className="r-stack" style={{ maxWidth: 1600, margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <Reveal><div className="eyebrow" style={{ color: 'rgba(201,169,110,0.7)', marginBottom: 24 }}>Join the Team</div></Reveal>
            <Reveal delay={0.1}><h1 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 20 }}>Build a career<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>in hospitality.</em></h1></Reveal>
            <Reveal delay={0.2}><p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: 'rgba(242,237,228,0.6)', lineHeight: 1.9 }}>Join a hospitality house built on a family heritage of building and care. We are growing across Montreal and Vancouver, we promote from within, and we hold ourselves to a five-star standard.</p></Reveal>
          </div>
          <Reveal delay={0.3}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
              {[['Excellence', 'Every detail matters.'], ['Ownership', 'Act like a founder.'], ['Hospitality', 'People always first.'], ['Growth', 'We promote from within.']].map(([title, desc]) => (
                <div key={title} style={{ background: 'rgba(13,12,10,0.3)', padding: '28px', backdropFilter: 'blur(10px)' }}>
                  <p style={{ fontFamily: 'Playfair Display', fontSize: 18, fontWeight: 400, color: '#F2EDE4', marginBottom: 6 }}>{title}</p>
                  <p style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 300, color: 'rgba(242,237,228,0.4)' }}>{desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Jobs */}
      <div style={{ padding: '100px 48px', maxWidth: 1600, margin: '0 auto' }}>
        <Reveal>
          <div style={{ display: 'flex', gap: 8, marginBottom: 48, flexWrap: 'wrap' }}>
            {depts.map(d => (
              <button key={d} onClick={() => setDept(d)}
                style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '8px 18px', border: `1px solid ${dept === d ? '#2C3E35' : 'rgba(13,12,10,0.15)'}`, background: dept === d ? '#2C3E35' : 'transparent', color: dept === d ? '#F2EDE4' : '#9B9590', cursor: 'pointer', transition: 'all 0.2s' }}>
                {d}
              </button>
            ))}
          </div>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {filtered.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.05}>
              <div onClick={() => setActiveJob(job)}
                style={{ background: '#F2EDE4', padding: '28px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'all 0.2s', gap: 24 }}
                onMouseEnter={e => e.currentTarget.style.background = '#0D0C0A'}
                onMouseLeave={e => e.currentTarget.style.background = '#F2EDE4'}>
                <div>
                  <div style={{ display: 'flex', gap: 12, marginBottom: 6 }}>
                    <span style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A96E' }}>{job.dept}</span>
                  </div>
                  <p style={{ fontFamily: 'Playfair Display', fontSize: 22, fontWeight: 400, color: 'inherit', transition: 'color 0.2s', marginBottom: 4 }}>{job.title}</p>
                  <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'inherit', opacity: 0.5 }}>{job.type}</p>
                </div>
                <span style={{ fontSize: 20, color: '#C9A96E', transition: 'transform 0.2s' }}>→</span>
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
