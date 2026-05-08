import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import toast from 'react-hot-toast'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [done, setDone] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return toast.error('Please fill all required fields')
    await new Promise(r => setTimeout(r, 1000))
    setDone(true)
  }

  return (
    <div className="page-in" style={{ background: '#FAF7F2', minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      {/* Left */}
      <div style={{ background: '#0D0C0A', padding: '160px 64px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Reveal><div className="eyebrow" style={{ color: '#C9A96E', marginBottom: 24 }}>Get In Touch</div></Reveal>
          <Reveal delay={0.1}><h1 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 24 }}>Let's start a<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>conversation.</em></h1></Reveal>
          <Reveal delay={0.2}><p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: '#9B9590', lineHeight: 1.9, maxWidth: 380, marginBottom: 60 }}>Whether you're a guest, a property owner, an investor, or just curious — we'd love to hear from you.</p></Reveal>

          <Reveal delay={0.3}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[['📧', 'Email', 'info@airstayproperties.com'], ['📍', 'Montreal', 'Old Montreal, QC'], ['📍', 'Vancouver', 'Downtown, BC']].map(([icon, label, value]) => (
                <div key={label} style={{ display: 'flex', gap: 16 }}>
                  <span style={{ fontSize: 16 }}>{icon}</span>
                  <div>
                    <p style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.5)', marginBottom: 4 }}>{label}</p>
                    <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: 'rgba(242,237,228,0.6)' }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div style={{ display: 'flex', gap: 20, marginTop: 40 }}>
            {['Instagram', 'LinkedIn', 'Facebook'].map(s => (
              <a key={s} href="#" style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(155,149,144,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#C9A96E'}
                onMouseLeave={e => e.target.style.color = 'rgba(155,149,144,0.4)'}>
                {s}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Right */}
      <div style={{ padding: '160px 64px 80px', display: 'flex', alignItems: 'center' }}>
        {!done ? (
          <div style={{ width: '100%' }}>
            <Reveal><h2 style={{ fontFamily: 'Playfair Display', fontSize: 32, fontWeight: 400, color: '#0D0C0A', marginBottom: 48 }}>Send a message</h2></Reveal>
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <Reveal delay={0.1}><div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Full Name *</label><input className="input-light" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" /></div></Reveal>
              <Reveal delay={0.15}><div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Email *</label><input type="email" className="input-light" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="email@example.com" /></div></Reveal>
              <Reveal delay={0.2}><div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>I am a...</label>
                <select className="input-light" style={{ appearance: 'none' }} value={form.type} onChange={e => setForm({...form, type: e.target.value})}>
                  <option value="">Select one</option>
                  {['Guest / Traveller', 'Property Owner', 'Investor', 'Partner / Agency', 'Job Applicant', 'Press / Media'].map(t => <option key={t}>{t}</option>)}
                </select>
              </div></Reveal>
              <Reveal delay={0.25}><div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Message *</label><textarea className="input-light" style={{ resize: 'none', height: 120 }} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="How can we help?" /></div></Reveal>
              <Reveal delay={0.3}><button type="submit" style={{ background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '16px 44px', border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}>Send Message →</button></Reveal>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', width: '100%' }}>
            <p style={{ fontFamily: 'Playfair Display', fontSize: 56, color: '#C9A96E', marginBottom: 20 }}>✦</p>
            <h3 style={{ fontFamily: 'Playfair Display', fontSize: 36, fontWeight: 400, color: '#0D0C0A', marginBottom: 12 }}>Message received.</h3>
            <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: '#9B9590' }}>We'll respond within one business day.</p>
          </div>
        )}
      </div>
    </div>
  )
}
