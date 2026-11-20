import { Reveal } from '../components/Reveal'
import LeadForm from '../components/LeadForm'
import { LONGTERM_FIELDS, LONGTERM_SUCCESS } from '../lib/forms'

const BENEFITS = [
  { title: 'Furnished or Unfurnished', desc: 'Furnished, with linens, ready on the first day. Or unfurnished, ready for your own furniture.' },
  { title: 'Maintenance Included', desc: 'Something breaks, you tell us, and we send a qualified trade. No chasing a landlord.' },
  { title: 'Terms That Fit', desc: 'Long-term rentals arranged around your timeline. Tell us what you need and we’ll advise on the right option.' },
  { title: 'Clear Leasing', desc: 'Your lease prepared and explained before you sign, and renewals raised well ahead of time.' },
  { title: 'Cleaning on Request', desc: 'Our housekeeping team can clean your home on a schedule you choose.' },
  { title: 'Montréal, Then Vancouver', desc: 'Residences in Montréal today. Vancouver enquiries are welcome. One application, one named contact.' },
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
                  A home,<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>looked after.</em>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: 'rgba(242,237,228,0.6)', lineHeight: 1.9, marginBottom: 40 }}>
                  Furnished or unfurnished residences in Montréal, with maintenance included and the lease handled for you. Vancouver enquiries are welcome.
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
                  ['Montréal', 'Where we lease'],
                  ['Included', 'Maintenance'],
                  ['Your Choice', 'Furnished or Not'],
                  ['24/7', 'Emergency line'],
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
          <Reveal delay={0.1}><h2 className="heading-lg" style={{ color: '#0D0C0A', marginBottom: 64 }}>What comes<br /><em style={{ fontStyle: 'italic', color: '#2C3E35' }}>with the lease.</em></h2></Reveal>

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
          <Reveal><h2 className="heading-lg" style={{ color: '#0D0C0A', marginBottom: 48 }}>At a<br /><em style={{ fontStyle: 'italic', color: '#2C3E35' }}>glance</em></h2></Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr', gap: 1 }}>
            {/* Headers */}
            <div style={{ background: '#FAF7F2', padding: '20px 24px' }} />
            {['AirStay Long-Term'].map((h) => (
              <div key={h} style={{ background: '#2C3E35', padding: '20px 24px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A96E' }}>{h}</p>
              </div>
            ))}

            {[
              ['Furnishing', 'Furnished or unfurnished, your choice'],
              ['Repairs', 'Included, with an emergency line 24/7'],
              ['Lease', 'Prepared and explained before you sign'],
              ['Renewals', 'Raised well ahead of time'],
              ['Cleaning', 'Available on request'],
              ['Contact', 'One named person'],
            ].map(([feature, detail]) => (
              [feature, detail].map((cell, ci) => (
                <div key={`${feature}-${ci}`} style={{ background: ci === 1 ? 'rgba(44,62,53,0.08)' : '#FAF7F2', padding: '18px 24px', borderBottom: '1px solid rgba(13,12,10,0.06)', textAlign: ci === 0 ? 'left' : 'center' }}>
                  <p style={{ fontFamily: ci === 0 ? 'DM Sans' : 'DM Mono', fontSize: ci === 0 ? 14 : 12, fontWeight: 300, color: ci === 1 ? '#2C3E35' : '#9B9590' }}>{cell}</p>
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
