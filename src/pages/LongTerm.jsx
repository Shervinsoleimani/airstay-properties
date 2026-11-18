import { Reveal } from '../components/Reveal'
import LeadForm from '../components/LeadForm'
import { LONGTERM_FIELDS, LONGTERM_SUCCESS } from '../lib/forms'

const BENEFITS = [
  { title: 'Furnished or Unfurnished', desc: 'Move-in-ready furnished homes with premium furniture and linens, or unfurnished residences ready for your own touch.' },
  { title: 'Maintenance Included', desc: 'Something breaks? We fix it. No calls to landlords, no waiting weeks for repairs.' },
  { title: 'Terms That Fit', desc: 'Long-term rentals arranged around your timeline. Tell us what you need and we’ll advise on the right option.' },
  { title: 'Smart Home Tech', desc: 'Keyless entry, smart thermostats, high-speed WiFi — the technology you expect.' },
  { title: 'Hotel-Grade Cleaning', desc: 'Professional cleaning service available. Your home, maintained to our standard.' },
  { title: 'Prime Locations', desc: 'Residences in Old Montreal and downtown, with Vancouver now launching. One application, one trusted manager.' },
]

export default function LongTerm({ onBook }) {
  return (
    <div className="page-in" style={{ background: '#FAF7F2' }}>

      {/* Hero */}
      <div className="r-pad" style={{ background: '#0D0C0A', padding: '180px 48px 110px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/saint-paul/5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,12,10,0.92), rgba(13,12,10,0.55))' }} />
        <div style={{ maxWidth: 1600, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div className="r-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <Reveal><div className="eyebrow" style={{ color: 'rgba(201,169,110,0.7)', marginBottom: 24 }}>Long-Term Rentals</div></Reveal>
              <Reveal delay={0.1}>
                <h1 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 20 }}>
                  Live better.<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>Stay longer.</em>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: 'rgba(242,237,228,0.6)', lineHeight: 1.9, marginBottom: 40 }}>
                  Professionally managed residences in Montreal, with Vancouver now launching. Furnished or unfurnished, with maintenance included and leasing handled for you: the home you deserve, without the hassle.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} style={{ background: '#C9A96E', color: '#0D0C0A', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '18px 44px', border: 'none', cursor: 'pointer' }}>
                  Inquire About Residences →
                </button>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
                {[
                  ['Inquire', 'Long-Term Rental'],
                  ['2', 'Cities'],
                  ['Your Choice', 'Furnished or Not'],
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
          <Reveal><div className="eyebrow" style={{ marginBottom: 20 }}>Why Rent with AirStay</div></Reveal>
          <Reveal delay={0.1}><h2 className="heading-lg" style={{ color: '#0D0C0A', marginBottom: 64 }}>This isn't a typical<br /><em style={{ fontStyle: 'italic', color: '#2C3E35' }}>rental experience.</em></h2></Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div style={{ background: '#F2EDE4', padding: '44px 40px', borderBottom: '3px solid #2C3E35' }}>
                  <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', color: '#C9A96E', marginBottom: 20 }}>0{i + 1}</p>
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
          <Reveal><h2 className="heading-lg" style={{ color: '#0D0C0A', marginBottom: 48 }}>AirStay vs<br /><em style={{ fontStyle: 'italic', color: '#2C3E35' }}>Traditional Rental</em></h2></Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 1 }}>
            {/* Headers */}
            <div style={{ background: '#FAF7F2', padding: '20px 24px' }} />
            {['Traditional Rental', 'AirStay Long-Term'].map((h, i) => (
              <div key={h} style={{ background: i === 1 ? '#2C3E35' : '#F2EDE4', padding: '20px 24px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: i === 1 ? '#C9A96E' : '#9B9590' }}>{h}</p>
              </div>
            ))}

            {[
              ['Furnished Option', 'Rarely offered', 'Furnished or unfurnished'],
              ['Maintenance', 'Weeks to respond', '24/7 response'],
              ['Smart Home Tech', 'Rarely included', 'Standard'],
              ['Clear, Simple Leasing', 'Paperwork on you', 'Handled for you'],
              ['Professional Cleaning', 'Not included', 'Available'],
              ['Dedicated Manager', 'Call a hotline', 'Named contact'],
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
      <div id="inquiry" className="r-pad" style={{ padding: '0 48px 120px', scrollMarginTop: 100 }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="r-pad" style={{ background: '#0D0C0A', padding: '64px' }}>
            <Reveal><p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 8 }}>Long-Term Inquiry</p></Reveal>
            <Reveal delay={0.1}><p style={{ fontFamily: 'Playfair Display', fontSize: 34, fontWeight: 400, color: '#F2EDE4', marginBottom: 40 }}>Find your next home</p></Reveal>
            <LeadForm type="longterm" theme="dark" fields={LONGTERM_FIELDS} success={LONGTERM_SUCCESS} submitLabel="Submit Inquiry" />
          </div>
        </div>
      </div>
    </div>
  )
}
