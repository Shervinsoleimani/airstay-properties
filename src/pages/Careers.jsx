import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import toast from 'react-hot-toast'

const JOBS = [
  { id: 1, title: 'Guest Experience Manager', city: 'Montreal', type: 'Full-time', dept: 'Operations', desc: 'Be the face of Airstay in Montreal. Manage guest communications, coordinate check-ins, and ensure every stay exceeds expectations across our boutique hotel portfolio.' },
  { id: 2, title: 'Guest Experience Manager', city: 'Vancouver', type: 'Full-time', dept: 'Operations', desc: 'Lead the guest experience across our Vancouver properties. Hotel hospitality background preferred.' },
  { id: 3, title: 'Property Operations Lead', city: 'Montreal', type: 'Full-time', dept: 'Operations', desc: 'Oversee day-to-day property operations across our Montreal portfolio. Coordinate cleaning teams, maintenance, and vendor relationships.' },
  { id: 4, title: 'Maintenance Technician', city: 'Montreal', type: 'Full-time', dept: 'Maintenance', desc: 'Respond to maintenance requests across our properties. General handyman skills required. 24/7 on-call rotation.' },
  { id: 5, title: 'Maintenance Technician', city: 'Vancouver', type: 'Full-time', dept: 'Maintenance', desc: 'Keep our Vancouver properties in perfect condition. Proactive maintenance and fast emergency response.' },
  { id: 6, title: 'Housekeeper / Cleaning Specialist', city: 'Montreal', type: 'Full-time / Part-time', dept: 'Housekeeping', desc: 'Hotel-grade cleaning for our boutique properties. Attention to detail is essential. Flexible scheduling available.' },
  { id: 7, title: 'Housekeeper / Cleaning Specialist', city: 'Vancouver', type: 'Full-time / Part-time', dept: 'Housekeeping', desc: 'Join our Vancouver housekeeping team. High standards, professional environment, competitive pay.' },
  { id: 8, title: 'Revenue & Pricing Analyst', city: 'Remote · Canada', type: 'Full-time', dept: 'Finance', desc: 'Optimize pricing strategy across our Pricelabs integration. Analyse occupancy trends, market rates, and seasonal patterns to maximize revenue.' },
  { id: 9, title: 'Property Acquisition Manager', city: 'Montreal / Vancouver', type: 'Full-time', dept: 'Growth', desc: 'Grow the Airstay portfolio by building relationships with property owners, presenting management proposals, and onboarding new buildings.' },
  { id: 10, title: 'Marketing & Brand Coordinator', city: 'Montreal', type: 'Full-time', dept: 'Marketing', desc: 'Manage Airstay\'s brand presence across all channels — social media, photography, partnerships, and digital marketing.' },
  { id: 11, title: 'Open Application', city: 'Any', type: 'Flexible', dept: 'General', desc: 'Don\'t see your role? We\'re always looking for exceptional people. Tell us what you bring and where you think you\'d add value.' },
]

function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', portfolio: '', message: '' })
  const [done, setDone] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email) return toast.error('Name and email required')
    await new Promise(r => setTimeout(r, 1000))
    setDone(true)
  }

  return (
    <motion.div className="modal-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={e => e.target === e.currentTarget && onClose()}>
      <motion.div className="modal-box" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', fontSize: 20, color: '#9B9590', cursor: 'pointer' }}>✕</button>

        {!done ? (
          <>
            <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 8 }}>{job.dept} · {job.city}</p>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: 30, fontWeight: 400, color: '#0D0C0A', marginBottom: 8 }}>{job.title}</h2>
            <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: '#9B9590', lineHeight: 1.7, marginBottom: 32 }}>{job.desc}</p>

            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Full Name *</label><input className="input-light" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" /></div>
                <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Email *</label><input type="email" className="input-light" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="email@example.com" /></div>
              </div>
              <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Phone</label><input className="input-light" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+1 (514) 555-0100" /></div>
              <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>LinkedIn or Portfolio</label><input type="url" className="input-light" value={form.portfolio} onChange={e => setForm({...form, portfolio: e.target.value})} placeholder="https://" /></div>
              <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Why Airstay?</label><textarea className="input-light" style={{ resize: 'none', height: 80 }} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell us what excites you about this role..." /></div>
              <button type="submit" style={{ background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '14px 36px', border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}>Submit Application →</button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 0' }}>
            <p style={{ fontFamily: 'Playfair Display', fontSize: 42, color: '#C9A96E', marginBottom: 16 }}>✦</p>
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
      <div style={{ background: '#2C3E35', padding: '160px 48px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'repeating-linear-gradient(45deg, #C9A96E 0, #C9A96E 1px, transparent 0, transparent 50%)', backgroundSize: '24px 24px' }} />
        <div style={{ maxWidth: 1600, margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <Reveal><div className="eyebrow" style={{ color: 'rgba(201,169,110,0.7)', marginBottom: 24 }}>Join the Team</div></Reveal>
            <Reveal delay={0.1}><h1 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 20 }}>Build the future<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>of hospitality.</em></h1></Reveal>
            <Reveal delay={0.2}><p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: 'rgba(242,237,228,0.6)', lineHeight: 1.9 }}>A fast-growing global hospitality company expanding across Canada, the UAE, Spain, and the USA. We promote from within, move fast, and obsess over quality.</p></Reveal>
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
                  <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'inherit', opacity: 0.5 }}>{job.city} · {job.type}</p>
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
