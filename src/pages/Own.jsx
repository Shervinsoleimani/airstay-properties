import { Reveal } from '../components/Reveal'
import LeadForm from '../components/LeadForm'
import { OWNER_FIELDS, OWNER_FILES, OWNER_SUCCESS } from '../lib/forms'
import { WHY_OWN } from '../lib/data'

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
  return (
    <div style={{ background: '#FAF7F2', padding: '56px', height: '100%' }} className="r-pad">
      <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 8 }}>Get Started</p>
      <p style={{ fontFamily: 'Playfair Display', fontSize: 30, fontWeight: 400, color: '#0D0C0A', marginBottom: 12 }}>Tell us about your property</p>
      <p style={{ fontFamily: 'DM Sans', fontSize: 13.5, fontWeight: 300, color: '#6F6A64', lineHeight: 1.8, marginBottom: 36 }}>Residences, buildings, boutique hotels and public or commercial properties. Share the address and a few photos for the most accurate assessment.</p>
      <LeadForm type="owner" fields={OWNER_FIELDS} files={OWNER_FILES} success={OWNER_SUCCESS} submitLabel="Request My Assessment" />
    </div>
  )
}

export default function Own() {
  return (
    <div className="page-in" style={{ background: '#FAF7F2' }}>
      {/* Hero */}
      <div className="r-pad" style={{ background: '#0D0C0A', padding: '180px 48px 110px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/services/building-entrance.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
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
