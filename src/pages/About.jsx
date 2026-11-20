import { Reveal, FadeIn } from '../components/Reveal'
import { STATS } from '../lib/data'

const body = { fontFamily: 'DM Sans', fontSize: 16, fontWeight: 300, color: '#6F6A64', lineHeight: 1.95, marginBottom: 24 }

export default function About() {
  return (
    <div className="page-in" style={{ background: '#FAF7F2' }}>
      {/* Hero */}
      <div className="r-pad" style={{ position: 'relative', overflow: 'hidden', padding: '200px 48px 120px', background: '#0D0C0A' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/le-moyne-heritage/facade.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,12,10,0.92), rgba(13,12,10,0.55))' }} />
        <div style={{ position: 'relative', maxWidth: 1600, margin: '0 auto' }}>
          <Reveal><div className="eyebrow" style={{ color: '#C9A96E', marginBottom: 24 }}>Our Story</div></Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 28, maxWidth: 900 }}>
              A family of builders,<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>now looking after yours.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 17, fontWeight: 300, color: 'rgba(242,237,228,0.7)', lineHeight: 1.9, maxWidth: 620 }}>
              AirStay Properties is a hospitality and property-management house rooted in a family background of building development, construction management and engineering.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Chapter 1: the foundation */}
      <div className="r-pad" style={{ padding: '120px 48px' }}>
        <div className="r-stack" style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '5fr 6fr', gap: 100, alignItems: 'center' }}>
          <FadeIn>
            <div style={{ aspectRatio: '4/5', backgroundImage: 'url(/images/bishop/3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </FadeIn>
          <div>
            <Reveal><p style={{ fontFamily: 'DM Mono', fontSize: 11, letterSpacing: '0.2em', color: '#C9A96E', marginBottom: 16 }}>I. THE FOUNDATION</p></Reveal>
            <Reveal delay={0.1}><h2 className="heading-lg" style={{ color: '#0D0C0A', marginBottom: 32 }}>Raised among <em style={{ fontStyle: 'italic', color: '#2C3E35' }}>builders.</em></h2></Reveal>
            <Reveal delay={0.2}>
              <p style={body}>
                Long before AirStay welcomed its first guest, our family was developing properties, managing construction sites and engineering buildings.
              </p>
              <p style={body}>
                That upbringing taught us how a building is made, where it is vulnerable, and what it takes to keep it working year after year. You cannot learn that from a booking dashboard.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Chapter 2: hospitality */}
      <div className="r-pad" style={{ padding: '0 48px 120px' }}>
        <div className="r-stack" style={{ maxWidth: 1400, margin: '0 auto', display: 'grid', gridTemplateColumns: '6fr 5fr', gap: 100, alignItems: 'center' }}>
          <div>
            <Reveal><p style={{ fontFamily: 'DM Mono', fontSize: 11, letterSpacing: '0.2em', color: '#C9A96E', marginBottom: 16 }}>II. THE HOUSE OF HOSPITALITY</p></Reveal>
            <Reveal delay={0.1}><h2 className="heading-lg" style={{ color: '#0D0C0A', marginBottom: 32 }}>A builder’s eye <em style={{ fontStyle: 'italic', color: '#2C3E35' }}>on every stay.</em></h2></Reveal>
            <Reveal delay={0.2}>
              <p style={body}>
                Founder Shervin Soleimani brought that foundation into hospitality with one conviction: a managed residence should be kept like a good hotel, and an owner’s property cared for with the discipline of the people who built it.
              </p>
              <p style={body}>
                AirStay began in Old Montréal. Today we care for more than 200 properties: boutique suites, long-term residences and complete buildings, along with housekeeping, landscaping and maintenance services for hotels, private owners, commercial landlords and public-sector clients. Our guests have left more than 4,000 reviews on Airbnb, Booking.com, Expedia, Hotels.com and Vrbo, and we now take owner enquiries in Vancouver too.
              </p>
            </Reveal>
          </div>
          <FadeIn>
            <div style={{ aspectRatio: '4/5', backgroundImage: 'url(/images/sm/services-suite-bedroom.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
          </FadeIn>
        </div>
      </div>

      {/* Founder quote */}
      <div className="r-pad" style={{ padding: '120px 48px', background: '#0D0C0A' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <Reveal>
            <p style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(30px, 3.6vw, 52px)', fontWeight: 400, lineHeight: 1.3, color: '#F2EDE4' }}>
              “Anyone can list a property. We know how buildings are made, so we know how to <em style={{ fontStyle: 'italic', color: '#C9A96E' }}>take care of them</em>, and the people inside them.”
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginTop: 36 }}>Shervin Soleimani · Founder &amp; CEO</p>
          </Reveal>
        </div>
      </div>

      {/* Values */}
      <div className="r-pad" style={{ padding: '120px 48px' }}>
        <div style={{ maxWidth: 1600, margin: '0 auto' }}>
          <Reveal><div className="eyebrow" style={{ marginBottom: 20 }}>Our Principles</div></Reveal>
          <Reveal delay={0.1}><h2 className="heading-lg" style={{ color: '#0D0C0A', marginBottom: 64 }}>What we<br /><em style={{ fontStyle: 'italic', color: '#2C3E35' }}>hold to.</em></h2></Reveal>
          <div className="r-two" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {[
              { title: 'Built to Last', desc: 'We think like builders: preventive care, quality materials and decisions that protect the long-term value of every asset.' },
              { title: 'One Standard', desc: 'We set a standard and hold it, for every property, every guest and every owner. There are no off days.' },
              { title: 'Real Numbers', desc: 'Owners see exactly what is happening with their asset: real numbers, clear reporting, honest conversations.' },
              { title: 'Proven Tools', desc: 'We use proven systems because they make us faster and safer, for guests and owners alike.' },
              { title: 'People First', desc: 'Guests, tenants, owners and our team. Every decision starts with what is right for the people involved.' },
              { title: 'Always Improving', desc: 'We review every stay, every maintenance request and every owner report, looking for the detail that makes it better.' },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div style={{ background: i % 2 === 0 ? '#0D0C0A' : '#F2EDE4', padding: '44px 40px', height: '100%' }}>
                  <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 16 }}>0{i + 1}</p>
                  <h3 style={{ fontFamily: 'Playfair Display', fontSize: 22, fontWeight: 400, color: i % 2 === 0 ? '#F2EDE4' : '#0D0C0A', marginBottom: 16 }}>{v.title}</h3>
                  <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: i % 2 === 0 ? 'rgba(242,237,228,0.5)' : '#9B9590', lineHeight: 1.8 }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Numbers */}
      <div className="r-pad" style={{ background: '#2C3E35', padding: '80px 48px' }}>
        <div className="r-two" style={{ maxWidth: 1600, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
          {STATS.map(({ value, label }) => (
            <div key={label} style={{ background: 'rgba(13,12,10,0.2)', padding: '40px 28px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'Playfair Display', fontSize: 40, fontWeight: 400, color: '#C9A96E' }}>{value}</p>
              <p style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(242,237,228,0.5)', marginTop: 8 }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
