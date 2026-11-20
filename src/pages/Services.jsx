import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Reveal, FadeIn } from '../components/Reveal'
import { SECTORS, PROCESS, sm } from '../lib/data'

const mono = { fontFamily: 'DM Mono', letterSpacing: '0.2em', textTransform: 'uppercase' }

const DETAIL = [
  {
    id: 'hospitality', num: '01', title: 'Boutique Hotel & Short-Term Management', image: '/images/services/suite-bedroom.jpg',
    desc: 'We run furnished suites and boutique hotels like a small hotel: presented with care, priced every day and answered around the clock, from the first enquiry to the final review.',
    items: ['Distribution across Airbnb, Booking.com, Expedia, Hotels.com, Vrbo and our own direct-booking site', 'Dynamic revenue management with event and seasonal strategy', '24/7 guest communication and on-call support', 'Secure keyless arrival and verified direct reservations', 'Hotel-style housekeeping, white linen and amenities', 'Professional photography, listing design and brand standards', 'Front-of-house standards and training for boutique hotels', 'Monthly performance reporting and owner payouts'],
  },
  {
    id: 'leasing', num: '02', title: 'Long-Term Leasing & Residences', image: '/images/saint-paul/5.jpg',
    desc: 'Furnished or unfurnished, we lease and look after long-term homes with the same care we give our guests: steady income for owners, a well-kept home for residents.',
    items: ['Marketing, viewings and tenant selection', 'Leases prepared in line with provincial requirements', 'Rent collection and arrears follow-up', 'Furnished or unfurnished management', 'Move-in and move-out inspections with photo records', 'Maintenance coordination and renewals', 'Clear monthly statements'],
  },
  {
    id: 'management', num: '03', title: 'Property & Building Management', image: '/images/services/amenities-lounge.jpg',
    desc: 'From a single investment condo to a complete building, we run your property with a builder’s understanding of how it was made, for private, commercial and public-sector owners.',
    items: ['Day-to-day building operations for residential, commercial and public-sector properties', 'Vendor, contractor and service-contract management', 'Budgets, financial reporting and capital planning', 'Regulatory compliance, permits and registrations', 'Lobbies, gyms, lounges, rooftops and other amenities', 'Common-area standards and inspections', 'Emergency response and incident documentation'],
  },
  {
    id: 'cleaning', num: '04', title: 'Cleaning & Housekeeping', image: '/images/services/housekeeping-bath.jpg',
    desc: 'Our housekeeping teams prepare every suite, office and common area to one standard: beds made hotel-style in white linen, surfaces clear, bins emptied, curtains even.',
    items: ['Turnovers, linen and amenity replenishment', 'Monthly deep cleans, logged', 'Lobbies, corridors and common-area cleaning', 'Move-in and move-out cleaning', 'Quality inspections', 'Photo reports on request'],
  },
  {
    id: 'landscaping', num: '05', title: 'Landscaping & Grounds Care', image: '/images/services/grounds-rooftop-aerial.jpg',
    desc: 'Guests see the entrance before anything else. We design, plant and maintain courtyards, terraces and green walls so a property looks cared for from the street.',
    items: ['Courtyards, gardens and entrance landscaping', 'Rooftop terraces, planters and outdoor lounges', 'Green walls and interior plantscapes', 'Seasonal planting, pruning and refreshes', 'Grounds cleanliness and regular upkeep', 'Outdoor furniture and lighting care'],
  },
  {
    id: 'maintenance', num: '06', title: 'Maintenance & Building Care', image: '/images/bishop/3.jpg',
    desc: 'We don’t wait for things to break. Preventive care and qualified trades keep each property safe and comfortable, with a photo and a note after every job.',
    items: ['24/7 emergency response', 'Preventive maintenance schedules', 'Plumbing, electrical, HVAC, carpentry and glass through qualified trades', 'Smart-lock and building-systems support', 'Damage restoration coordination', 'Insurance and warranty claim support', 'Annual property condition reports'],
  },
]

export default function Services({ onOwner }) {
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300)
    return () => clearTimeout(t)
  }, [hash])

  return (
    <div className="page-in" style={{ background: '#FAF7F2' }}>
      {/* Hero */}
      <div className="r-pad" style={{ background: '#0D0C0A', padding: '200px 48px 120px', position: 'relative', overflow: 'hidden' }}>
        <img src="/images/services/landscaping-rooftop.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,12,10,0.94), rgba(13,12,10,0.55))' }} />
        <div style={{ maxWidth: 1600, margin: '0 auto', position: 'relative' }}>
          <Reveal><div className="eyebrow" style={{ color: '#C9A96E', marginBottom: 24 }}>Our Services</div></Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 24 }}>
              From lobby<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>to rooftop.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 17, fontWeight: 300, color: 'rgba(242,237,228,0.75)', maxWidth: 620, lineHeight: 1.9, marginBottom: 40 }}>
              Hospitality, leasing, building management, cleaning, landscaping and maintenance: six services from one team, for boutique hotels, private owners, commercial buildings and public-sector properties.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {DETAIL.map(d => (
                <a key={d.id} href={`#${d.id}`} onClick={e => { e.preventDefault(); document.getElementById(d.id)?.scrollIntoView({ behavior: 'smooth' }) }}
                  style={{ ...mono, fontSize: 10, color: 'rgba(242,237,228,0.75)', textDecoration: 'none', border: '1px solid rgba(201,169,110,0.3)', padding: '9px 16px' }}>
                  {d.title.split(' & ')[0].replace('Boutique Hotel', 'Hotels')}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Six services */}
      {DETAIL.map((s, i) => (
        <div key={s.id} id={s.id} className="r-pad" style={{ padding: '110px 48px', background: i % 2 === 0 ? '#FAF7F2' : '#F2EDE4', scrollMarginTop: 80 }}>
          <div className="r-stack" style={{ maxWidth: 1500, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 90, alignItems: 'center' }}>
            {(() => {
              const media = (
            <FadeIn>
              <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
                <img src={sm(s.image)} alt={s.title} loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </FadeIn>
              )
              const copy = (
            <div>
              <Reveal><p style={{ ...mono, fontSize: 11, color: '#C9A96E', marginBottom: 16 }}>{s.num}</p></Reveal>
              <Reveal delay={0.05}><h2 className="heading-lg" style={{ color: '#0D0C0A', marginBottom: 24 }}>{s.title}</h2></Reveal>
              <Reveal delay={0.1}><p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: '#6F6A64', lineHeight: 1.9, marginBottom: 32 }}>{s.desc}</p></Reveal>
              <Reveal delay={0.15}>
                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 36 }}>
                  {s.items.map(item => (
                    <div key={item} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '12px 0', borderBottom: '1px solid rgba(13,12,10,0.07)' }}>
                      <span style={{ width: 20, height: 1, background: '#C9A96E', marginTop: 11, flexShrink: 0 }} />
                      <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: '#4F4A44', lineHeight: 1.6 }}>{item}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                {s.id === 'hospitality'
                  ? <Link to="/stay" style={{ display: 'inline-block', background: '#2C3E35', color: '#F2EDE4', textDecoration: 'none', ...mono, letterSpacing: '0.15em', fontSize: 10, padding: '14px 30px' }}>View Our Residences →</Link>
                  : <button onClick={onOwner} style={{ background: '#2C3E35', color: '#F2EDE4', border: 'none', cursor: 'pointer', ...mono, letterSpacing: '0.15em', fontSize: 10, padding: '14px 30px' }}>Request a Proposal →</button>}
              </Reveal>
            </div>
              )
              return i % 2 === 0 ? <>{media}{copy}</> : <>{copy}{media}</>
            })()}
          </div>
        </div>
      ))}

      {/* Sectors */}
      <div id="sectors" className="r-pad" style={{ background: '#0D0C0A', padding: '120px 48px', scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1600, margin: '0 auto' }}>
          <Reveal><div className="eyebrow" style={{ color: '#C9A96E', marginBottom: 20 }}>Who We Serve</div></Reveal>
          <Reveal delay={0.1}><h2 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 64 }}>Boutique hotels to<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>public buildings.</em></h2></Reveal>
          <div className="r-two" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {SECTORS.map((s, k) => (
              <Reveal key={s.title} delay={k * 0.1}>
                <div className="svc-card sector-card">
                  <img className="svc-card-bg" src={sm(s.image)} alt={s.title} loading="lazy" decoding="async" />
                  <div className="svc-card-shade" />
                  <div style={{ position: 'relative', padding: '36px 30px' }}>
                    <p style={{ ...mono, fontSize: 10, color: 'rgba(201,169,110,0.9)', marginBottom: 14 }}>0{k + 1}</p>
                    <h3 style={{ fontFamily: 'Playfair Display', fontSize: 25, fontWeight: 400, color: '#F2EDE4', marginBottom: 12, lineHeight: 1.2 }}>{s.title}</h3>
                    <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: 'rgba(242,237,228,0.75)', lineHeight: 1.75 }}>{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="r-pad" style={{ padding: '120px 48px' }}>
        <div style={{ maxWidth: 1600, margin: '0 auto' }}>
          <Reveal><div className="eyebrow" style={{ marginBottom: 20 }}>The AirStay Standard</div></Reveal>
          <Reveal delay={0.1}><h2 className="heading-lg" style={{ color: '#0D0C0A', marginBottom: 64 }}>How we take on<br /><em style={{ fontStyle: 'italic', color: '#2C3E35' }}>a new property.</em></h2></Reveal>
          <div className="r-two" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {PROCESS.map((p, k) => (
              <Reveal key={p.step} delay={k * 0.1}>
                <div style={{ background: k % 2 === 0 ? '#0D0C0A' : '#F2EDE4', padding: '44px 36px', height: '100%' }}>
                  <p style={{ fontFamily: 'Playfair Display', fontSize: 52, color: k % 2 === 0 ? 'rgba(201,169,110,0.35)' : 'rgba(44,62,53,0.2)', lineHeight: 1, marginBottom: 18 }}>{p.step}</p>
                  <h3 style={{ fontFamily: 'Playfair Display', fontSize: 26, fontWeight: 400, color: k % 2 === 0 ? '#F2EDE4' : '#0D0C0A', marginBottom: 12 }}>{p.title}</h3>
                  <p style={{ fontFamily: 'DM Sans', fontSize: 13.5, fontWeight: 300, color: k % 2 === 0 ? 'rgba(242,237,228,0.6)' : '#6F6A64', lineHeight: 1.8 }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="r-pad" style={{ position: 'relative', overflow: 'hidden', padding: '130px 48px', textAlign: 'center' }}>
        <img src={sm('/images/saint-paul/1-top.jpg')} alt="" loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,12,10,0.8)' }} />
        <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto' }}>
          <Reveal><div className="eyebrow" style={{ color: '#C9A96E', justifyContent: 'center', marginBottom: 20 }}>Let’s Talk</div></Reveal>
          <Reveal delay={0.1}><h2 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 24 }}>One call. <em style={{ fontStyle: 'italic', color: '#C9A96E' }}>One team.</em></h2></Reveal>
          <Reveal delay={0.2}><p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: 'rgba(242,237,228,0.7)', lineHeight: 1.9, marginBottom: 40 }}>Tell us about your property or building. We’ll arrange a complimentary walkthrough and a tailored proposal.</p></Reveal>
          <Reveal delay={0.3}>
            <button onClick={onOwner} style={{ background: '#C9A96E', color: '#0D0C0A', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '18px 48px', border: 'none', cursor: 'pointer' }}>Request a Proposal →</button>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
