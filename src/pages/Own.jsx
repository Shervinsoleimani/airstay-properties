import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { WHY_OWN } from '../lib/data'
import toast from 'react-hot-toast'

function ROICalculator() {
  const [value, setValue] = useState('')
  const [city, setCity] = useState('Montreal')
  const [type, setType] = useState('STR')
  const [result, setResult] = useState(null)

  const calculate = () => {
    if (!value) return toast.error('Please enter a property value')
    const v = parseFloat(value.replace(/,/g, ''))
    const rates = {
      'Montreal': { STR: 0.12, LTR: 0.08 },
      'Vancouver': { STR: 0.10, LTR: 0.07 },
      'Toronto': { STR: 0.11, LTR: 0.07 },
      'Dubai': { STR: 0.14, LTR: 0.09 },
      'Barcelona': { STR: 0.13, LTR: 0.08 },
    }
    const baseRate = rates[city]?.[type] || 0.10
    const selfManaged = Math.round(v * baseRate)
    const withAirstay = Math.round(selfManaged * 1.38)
    const airstayFee = Math.round(withAirstay * 0.20)
    const netEarnings = withAirstay - airstayFee
    setResult({ selfManaged, withAirstay, airstayFee, netEarnings })
  }

  return (
    <div style={{ background: '#0D0C0A', padding: '56px' }}>
      <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 8 }}>Revenue Calculator</p>
      <p style={{ fontFamily: 'Playfair Display', fontSize: 28, fontWeight: 400, color: '#F2EDE4', marginBottom: 40 }}>How much could your property earn?</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
        <div>
          <label style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.6)', display: 'block', marginBottom: 8 }}>Property Value (CAD)</label>
          <input className="input-field" placeholder="e.g. 500,000" value={value} onChange={e => setValue(e.target.value)} style={{ fontSize: 16 }} />
        </div>
        <div>
          <label style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.6)', display: 'block', marginBottom: 8 }}>City</label>
          <select className="select-field" value={city} onChange={e => setCity(e.target.value)}>
            {['Montreal', 'Vancouver', 'Toronto', 'Dubai', 'Barcelona'].map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
      </div>

      <div style={{ marginBottom: 32 }}>
        <label style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.6)', display: 'block', marginBottom: 8 }}>Rental Type</label>
        <div style={{ display: 'flex', gap: 8 }}>
          {[['STR', 'Short-Term'], ['LTR', 'Long-Term']].map(([val, label]) => (
            <button key={val} onClick={() => setType(val)}
              style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '10px 20px', border: `1px solid ${type === val ? '#C9A96E' : 'rgba(201,169,110,0.2)'}`, background: type === val ? 'rgba(201,169,110,0.1)' : 'transparent', color: type === val ? '#C9A96E' : 'rgba(201,169,110,0.4)', cursor: 'pointer' }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <button onClick={calculate}
        style={{ width: '100%', background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '16px', border: 'none', cursor: 'pointer', marginBottom: 32 }}>
        Calculate My Revenue →
      </button>

      {result && (
        <div style={{ borderTop: '1px solid rgba(201,169,110,0.15)', paddingTop: 28 }}>
          {[
            ['Self-managed', result.selfManaged, false],
            ['With Airstay (gross)', result.withAirstay, false],
            ['Airstay fee (20%)', result.airstayFee, false],
            ['Your net earnings', result.netEarnings, true],
          ].map(([label, val, highlight]) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '10px 0', borderBottom: '1px solid rgba(201,169,110,0.08)' }}>
              <span style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: 'rgba(242,237,228,0.5)' }}>{label}</span>
              <span style={{ fontFamily: 'Playfair Display', fontSize: highlight ? 28 : 18, fontWeight: 400, color: highlight ? '#C9A96E' : 'rgba(242,237,228,0.7)' }}>
                ${val.toLocaleString()}/yr
              </span>
            </div>
          ))}
          <p style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.3)', marginTop: 16 }}>
            * Estimates based on market averages. Actual results may vary.
          </p>
        </div>
      )}
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
    await new Promise(r => setTimeout(r, 1200))
    setDone(true); setLoading(false)
  }

  if (done) return (
    <div style={{ textAlign: 'center', padding: '60px 40px' }}>
      <p style={{ fontFamily: 'Playfair Display', fontSize: 42, color: '#C9A96E', marginBottom: 8 }}>✦</p>
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
              {['Montreal', 'Vancouver', 'Toronto', 'Dubai', 'Barcelona', 'Other'].map(c => <option key={c}>{c}</option>)}
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
      <div style={{ background: '#0D0C0A', padding: '160px 48px 100px' }}>
        <div style={{ maxWidth: 1600, margin: '0 auto' }}>
          <Reveal><div className="eyebrow" style={{ color: '#C9A96E', marginBottom: 24 }}>For Property Owners</div></Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 20 }}>
              Your investment.<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>Our obsession.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 16, fontWeight: 300, color: '#9B9590', maxWidth: 560, lineHeight: 1.9 }}>
              We manage your property like it's our own — maximising revenue, protecting your asset, and handling every detail so you don't have to.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Why section */}
      <div style={{ padding: '100px 48px', background: '#FAF7F2' }}>
        <div style={{ maxWidth: 1600, margin: '0 auto' }}>
          <Reveal><div className="eyebrow" style={{ marginBottom: 20 }}>Why Airstay</div></Reveal>
          <Reveal delay={0.1}><h2 className="heading-lg" style={{ color: '#0D0C0A', marginBottom: 64 }}>Six reasons owners<br /><em style={{ fontStyle: 'italic', color: '#2C3E35' }}>choose us.</em></h2></Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
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
        <div style={{ maxWidth: 1600, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          <Reveal><ROICalculator /></Reveal>
          <Reveal delay={0.15}><OwnerForm /></Reveal>
        </div>
      </div>
    </div>
  )
}
