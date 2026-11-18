import { useState } from 'react'
import { submitLead } from '../lib/submitLead'
import { Reveal } from '../components/Reveal'
import { WHY_OWN } from '../lib/data'
import toast from 'react-hot-toast'

function AssessmentPanel() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '100%', minHeight: 640, display: 'flex', alignItems: 'flex-end' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/le-moyne-heritage/8.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,12,10,0.96) 20%, rgba(13,12,10,0.55) 70%, rgba(13,12,10,0.25))' }} />
      <div style={{ position: 'relative', padding: '56px' }}>
        <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 12 }}>Complimentary Revenue Assessment</p>
        <p style={{ fontFamily: 'Playfair Display', fontSize: 32, fontWeight: 400, color: '#F2EDE4', marginBottom: 32, lineHeight: 1.2 }}>What your property<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>could earn.</em></p>
        {[
          'A walkthrough of your property, at no cost',
          'Short-term, long-term and furnished scenarios compared',
          'A projected monthly income and a clear management proposal',
          'An honest recommendation, even if it is to wait',
        ].map(item => (
          <div key={item} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '12px 0', borderTop: '1px solid rgba(201,169,110,0.15)' }}>
            <span style={{ width: 20, height: 1, background: '#C9A96E', marginTop: 10, flexShrink: 0 }} />
            <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: 'rgba(242,237,228,0.75)', lineHeight: 1.6 }}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function OwnerForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', type: '', units: '', message: '' })
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email) return toast.error('Please fill in required fields')
    setLoading(true)
    if (!(await submitLead('owner', form))) { setLoading(false); return }
    setDone(true); setLoading(false)
  }

  if (done) return (
    <div style={{ textAlign: 'center', padding: '60px 40px' }}>
      <div style={{ width: 40, height: 1, background: '#C9A96E', margin: '0 auto 28px' }} />
      <h3 style={{ fontFamily: 'Playfair Display', fontSize: 32, fontWeight: 400, color: '#0D0C0A', marginBottom: 12 }}>Inquiry received.</h3>
      <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: '#9B9590' }}>We'll be in touch within 24 hours with a personalised revenue projection.</p>
    </div>
  )

  return (
    <div style={{ background: '#FAF7F2', padding: '56px' }}>
      <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 8 }}>Get Started</p>
      <p style={{ fontFamily: 'Playfair Display', fontSize: 28, fontWeight: 400, color: '#0D0C0A', marginBottom: 40 }}>Tell us about your property</p>

      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div><label style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Full Name *</label><input className="input-light" placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></div>
          <div><label style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Email *</label><input type="email" className="input-light" placeholder="email@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div><label style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>City</label>
            <select className="input-light" style={{ appearance: 'none' }} value={form.city} onChange={e => setForm({...form, city: e.target.value})}>
              <option value="">Select city</option>
              {['Montreal', 'Vancouver', 'Other'].map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div><label style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Property Type</label>
            <select className="input-light" style={{ appearance: 'none' }} value={form.type} onChange={e => setForm({...form, type: e.target.value})}>
              <option value="">Select type</option>
              {['Condo/Apartment', 'House', 'Multi-Unit Building', 'Commercial', 'Other'].map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>
        <div><label style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Number of Units</label><input className="input-light" placeholder="e.g. 1, 5, 20+" value={form.units} onChange={e => setForm({...form, units: e.target.value})} /></div>
        <div><label style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Tell us about your property</label><textarea className="input-light" style={{ resize: 'none', height: 80 }} placeholder="Location, size, current status..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} /></div>
        <button type="submit" style={{ background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '16px', border: 'none', cursor: 'pointer', alignSelf: 'flex-start', paddingLeft: 44, paddingRight: 44 }} disabled={loading}>
          {loading ? 'Sending...' : 'Submit Inquiry →'}
        </button>
      </form>
    </div>
  )
}

export default function Own() {
  return (
    <div className="page-in" style={{ background: '#FAF7F2' }}>
      {/* Hero */}
      <div className="r-pad" style={{ background: '#0D0C0A', padding: '180px 48px 110px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/notre-dame/7.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,12,10,0.93), rgba(13,12,10,0.5))' }} />
        <div style={{ maxWidth: 1600, margin: '0 auto', position: 'relative' }}>
          <Reveal><div className="eyebrow" style={{ color: '#C9A96E', marginBottom: 24 }}>For Property Owners</div></Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 20 }}>
              Your investment.<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>Our obsession.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 16, fontWeight: 300, color: '#9B9590', maxWidth: 560, lineHeight: 1.9 }}>
              We care for your property as if we had built it ourselves: maximising revenue, protecting your asset and handling every detail, so you don’t have to.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Why section */}
      <div style={{ padding: '100px 48px', background: '#FAF7F2' }}>
        <div style={{ maxWidth: 1600, margin: '0 auto' }}>
          <Reveal><div className="eyebrow" style={{ marginBottom: 20 }}>Why AirStay</div></Reveal>
          <Reveal delay={0.1}><h2 className="heading-lg" style={{ color: '#0D0C0A', marginBottom: 64 }}>Six reasons owners<br /><em style={{ fontStyle: 'italic', color: '#2C3E35' }}>choose us.</em></h2></Reveal>

          <div className="r-two" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {WHY_OWN.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}>
                <div style={{ background: i % 2 === 0 ? '#F2EDE4' : '#0D0C0A', padding: '44px 40px' }}>
                  <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 16 }}>0{i+1}</p>
                  <h3 style={{ fontFamily: 'Playfair Display', fontSize: 24, fontWeight: 400, color: i % 2 === 0 ? '#0D0C0A' : '#F2EDE4', marginBottom: 16 }}>{w.title}</h3>
                  <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: i % 2 === 0 ? '#9B9590' : 'rgba(242,237,228,0.45)', lineHeight: 1.8 }}>{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Calculator + Form */}
      <div style={{ padding: '0 48px 120px', background: '#FAF7F2' }}>
        <div className="r-stack" style={{ maxWidth: 1600, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          <Reveal><AssessmentPanel /></Reveal>
          <Reveal delay={0.15}><OwnerForm /></Reveal>
        </div>
      </div>
    </div>
  )
}
