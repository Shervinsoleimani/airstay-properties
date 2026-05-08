import { Reveal } from '../components/Reveal'
import toast from 'react-hot-toast'
import { useState } from 'react'

const BENEFITS = [
  { icon: '🏠', title: 'Fully Furnished', desc: 'Move-in ready. Premium furniture, appliances, linens, and kitchenware — all included.' },
  { icon: '🔧', title: 'Maintenance Included', desc: 'Something breaks? We fix it. No calls to landlords, no waiting weeks for repairs.' },
  { icon: '📱', title: 'Flexible Terms', desc: 'Leases from 3 months to 2+ years. We work around your timeline, not ours.' },
  { icon: '🔐', title: 'Smart Home Tech', desc: 'Keyless entry, smart thermostats, high-speed WiFi — the technology you expect.' },
  { icon: '⭐', title: 'Hotel-Grade Cleaning', desc: 'Professional cleaning service available. Your home, maintained to our standard.' },
  { icon: '🌍', title: 'Global Portfolio', desc: 'Montreal, Vancouver, Toronto, Dubai, Barcelona — one application for any city.' },
]

export default function LongTerm({ onBook }) {
  const [form, setForm] = useState({ name: '', email: '', city: '', budget: '', move: '', message: '' })
  const [done, setDone] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email) return toast.error('Please fill required fields')
    await new Promise(r => setTimeout(r, 1000))
    setDone(true)
  }

  return (
    <div className="page-in" style={{ background: '#FAF7F2' }}>

      {/* Hero */}
      <div style={{ background: '#2C3E35', padding: '160px 48px 100px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'repeating-linear-gradient(45deg, #C9A96E 0, #C9A96E 1px, transparent 0, transparent 50%)', backgroundSize: '24px 24px' }} />
        <div style={{ maxWidth: 1600, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <Reveal><div className="eyebrow" style={{ color: 'rgba(201,169,110,0.7)', marginBottom: 24 }}>Long-Term Rentals</div></Reveal>
              <Reveal delay={0.1}>
                <h1 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 20 }}>
                  Live better.<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>Stay longer.</em>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: 'rgba(242,237,228,0.6)', lineHeight: 1.9, marginBottom: 40 }}>
                  Premium managed residences across 5 cities. Fully furnished, maintenance included, flexible leases — the home experience you deserve, without the hassle.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <button onClick={onBook} style={{ background: '#C9A96E', color: '#0D0C0A', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '18px 44px', border: 'none', cursor: 'pointer' }}>
                  View Available Units →
                </button>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
                {[
                  ['3 mo+', 'Minimum Lease'],
                  ['5', 'Cities'],
                  ['100%', 'Furnished'],
                  ['24/7', 'Maintenance'],
                ].map(([value, label]) => (
                  <div key={label} style={{ background: 'rgba(13,12,10,0.3)', padding: '32px 28px', backdropFilter: 'blur(10px)' }}>
                    <p style={{ fontFamily: 'Playfair Display', fontSize: 36, fontWeight: 400, color: '#C9A96E' }}>{value}</p>
                    <p style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(242,237,228,0.4)', marginTop: 8 }}>{label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Why section */}
      <div style={{ padding: '100px 48px' }}>
        <div style={{ maxWidth: 1600, margin: '0 auto' }}>
          <Reveal><div className="eyebrow" style={{ marginBottom: 20 }}>Why Rent with Airstay</div></Reveal>
          <Reveal delay={0.1}><h2 className="heading-lg" style={{ color: '#0D0C0A', marginBottom: 64 }}>This isn't a typical<br /><em style={{ fontStyle: 'italic', color: '#2C3E35' }}>rental experience.</em></h2></Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div style={{ background: '#F2EDE4', padding: '44px 40px', borderBottom: '3px solid #2C3E35' }}>
                  <div style={{ fontSize: 32, marginBottom: 20 }}>{b.icon}</div>
                  <h3 style={{ fontFamily: 'Playfair Display', fontSize: 22, fontWeight: 400, color: '#0D0C0A', marginBottom: 12 }}>{b.title}</h3>
                  <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: '#9B9590', lineHeight: 1.8 }}>{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison */}
      <div style={{ padding: '0 48px 100px' }}>
        <div style={{ maxWidth: 1600, margin: '0 auto' }}>
          <Reveal><h2 className="heading-lg" style={{ color: '#0D0C0A', marginBottom: 48 }}>Airstay vs<br /><em style={{ fontStyle: 'italic', color: '#2C3E35' }}>Traditional Rental</em></h2></Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 1 }}>
            {/* Headers */}
            <div style={{ background: '#FAF7F2', padding: '20px 24px' }} />
            {['Traditional Rental', 'Airstay Long-Term'].map((h, i) => (
              <div key={h} style={{ background: i === 1 ? '#2C3E35' : '#F2EDE4', padding: '20px 24px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: i === 1 ? '#C9A96E' : '#9B9590' }}>{h}</p>
              </div>
            ))}

            {[
              ['Fully Furnished', '❌ Usually unfurnished', '✅ Always included'],
              ['Maintenance', '⏳ Weeks to respond', '✅ 24/7 same day'],
              ['Smart Home Tech', '❌ Rarely included', '✅ Standard'],
              ['Flexible Lease', '❌ 1 year minimum', '✅ From 3 months'],
              ['Professional Cleaning', '❌ Not included', '✅ Available'],
              ['Dedicated Manager', '❌ Call a hotline', '✅ Named contact'],
            ].map(([feature, no, yes]) => (
              [feature, no, yes].map((cell, ci) => (
                <div key={`${feature}-${ci}`} style={{ background: ci === 2 ? 'rgba(44,62,53,0.08)' : '#FAF7F2', padding: '18px 24px', borderBottom: '1px solid rgba(13,12,10,0.06)', textAlign: ci === 0 ? 'left' : 'center' }}>
                  <p style={{ fontFamily: ci === 0 ? 'DM Sans' : 'DM Mono', fontSize: ci === 0 ? 14 : 12, fontWeight: 300, color: ci === 2 ? '#2C3E35' : '#9B9590' }}>{cell}</p>
                </div>
              ))
            ))}
          </div>
        </div>
      </div>

      {/* Inquiry form */}
      <div style={{ padding: '0 48px 120px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ background: '#0D0C0A', padding: '64px' }}>
            {!done ? (
              <>
                <Reveal><p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 8 }}>Long-Term Inquiry</p></Reveal>
                <Reveal delay={0.1}><p style={{ fontFamily: 'Playfair Display', fontSize: 32, fontWeight: 400, color: '#F2EDE4', marginBottom: 40 }}>Find your next home</p></Reveal>
                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    <div><label style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.6)', display: 'block', marginBottom: 8 }}>Name *</label><input className="input-field" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Full name" /></div>
                    <div><label style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.6)', display: 'block', marginBottom: 8 }}>Email *</label><input type="email" className="input-field" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="email@example.com" /></div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                    <div><label style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.6)', display: 'block', marginBottom: 8 }}>City</label>
                      <select className="select-field" value={form.city} onChange={e => setForm({...form, city: e.target.value})}><option value="">Select city</option>{['Montreal', 'Vancouver', 'Toronto', 'Dubai', 'Barcelona'].map(c => <option key={c}>{c}</option>)}</select>
                    </div>
                    <div><label style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.6)', display: 'block', marginBottom: 8 }}>Move-In Date</label><input type="month" className="input-field" value={form.move} onChange={e => setForm({...form, move: e.target.value})} /></div>
                  </div>
                  <div><label style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.6)', display: 'block', marginBottom: 8 }}>Monthly Budget</label>
                    <select className="select-field" value={form.budget} onChange={e => setForm({...form, budget: e.target.value})}><option value="">Select range</option>{['Under $2,000', '$2,000–$3,500', '$3,500–$5,000', '$5,000–$8,000', '$8,000+'].map(b => <option key={b}>{b}</option>)}</select>
                  </div>
                  <div><label style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.6)', display: 'block', marginBottom: 8 }}>Requirements</label><textarea className="input-field" style={{ resize: 'none', height: 80 }} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Bedrooms needed, preferences, lease length..." /></div>
                  <button type="submit" style={{ background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '16px 44px', border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}>Submit Inquiry →</button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <p style={{ fontFamily: 'Playfair Display', fontSize: 42, color: '#C9A96E', marginBottom: 16 }}>✦</p>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: 32, fontWeight: 400, color: '#F2EDE4', marginBottom: 12 }}>Received.</h3>
                <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: '#9B9590' }}>We'll match you with available units and reach out within 24 hours.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
