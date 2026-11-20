import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'

export default function Services() {
  return (
    <div className="page-in" style={{ background: '#FAF7F2' }}>
      {/* Hero */}
      <div className="r-pad" style={{ background: '#0D0C0A', padding: '180px 48px 110px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/services/landscaping-rooftop.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,12,10,0.93), rgba(13,12,10,0.5))' }} />
        <div style={{ maxWidth: 1600, margin: '0 auto', position: 'relative' }}>
          <Reveal><div className="eyebrow" style={{ color: '#C9A96E', marginBottom: 24 }}>Our Services</div></Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 20 }}>
              Every detail.<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>No exceptions.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 16, fontWeight: 300, color: '#9B9590', maxWidth: 560, lineHeight: 1.9 }}>
              We provide end-to-end hospitality services — from short-term guest management to full building operations. One company, every service, uncompromising quality.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Services detail */}
      {[
        {
          num: '01', title: 'Short-Term Rental Management', color: '#2C3E35', image: '/images/le-moyne-heritage/5.jpg',
          items: ['Multi-channel distribution (Airbnb, Booking.com, Expedia, Hotels.com, Vrbo and direct)', 'Dynamic, data-driven pricing with event and seasonal strategy', 'Guest communications & 24/7 support', 'Professional photography and listing copywriting', 'Keyless smart lock management and automated check-in', 'Hotel-grade cleaning and linen service', 'Damage protection and guest vetting', 'Monthly performance reports and owner payouts'],
          desc: 'We manage your short-term rental like a boutique hotel — because that\'s what guests expect. From the moment they book to the moment they leave, every touchpoint is handled with care and professionalism.',
        },
        {
          num: '02', title: 'Long-Term Rental Management', color: '#8B7355', image: '/images/saint-paul/5.jpg',
          items: ['Tenant sourcing, screening, and vetting', 'Lease drafting and renewals', 'Rent collection and arrears management', 'Furnished or unfurnished management', 'Preventive and reactive maintenance coordination', 'Compliance management (health & safety, licensing)', 'Monthly financial reporting', 'Move-in / move-out inspections'],
          desc: 'Long-term rental management done properly. We find quality tenants, handle all communications, maintain the property, and keep you informed with transparent monthly reporting.',
        },
        {
          num: '03', title: 'Property & Building Management', color: '#1A1915', image: '/images/le-moyne-heritage/8.jpg',
          items: ['Full building operations (single units to 100+ unit buildings)', 'Staff management (concierge, cleaning, security)', 'Vendor and contractor management', 'Budget planning and financial reporting', 'Regulatory compliance and licensing', 'Capital improvement planning', 'Owner portal and real-time reporting', 'Multi-property and portfolio management'],
          desc: 'From a single investment condo to an entire building, we operate your asset with institutional-grade professionalism and a builder’s understanding of how it was made. Think of us as your dedicated management company, without the overhead.',
        },
        {
          num: '04', title: 'Building Care & Maintenance', color: '#2C3E35', image: '/images/bishop/3.jpg',
          items: ['24/7 emergency maintenance response', 'Preventive maintenance scheduling', 'Vetted contractor network (plumbing, electrical, HVAC, carpentry)', 'Smart home installation and support', 'Deep cleaning and turnover services', 'Post-damage restoration coordination', 'Warranty and insurance claim management', 'Annual property condition reports'],
          desc: 'We don\'t wait for things to break. Our proactive maintenance approach protects your asset, reduces costs long-term, and ensures guests and tenants always experience a property in perfect condition.',
        },
      ].map((s, i) => (
        <div key={s.num} className="r-pad" style={{ padding: '100px 48px', background: i % 2 === 0 ? '#FAF7F2' : '#F2EDE4' }}>
          <div className="r-stack" style={{ maxWidth: 1600, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
            <Reveal>
              <div>
                <p style={{ fontFamily: 'DM Mono', fontSize: 11, letterSpacing: '0.2em', color: '#C9A96E', marginBottom: 16 }}>{s.num}</p>
                <h2 className="heading-lg" style={{ color: '#0D0C0A', marginBottom: 24 }}>{s.title}</h2>
                <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: '#9B9590', lineHeight: 1.9, marginBottom: 40 }}>{s.desc}</p>
                <div style={{ aspectRatio: '16/10', backgroundImage: `url(${s.image})`, backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: 32 }} />
                <Link to={s.num === '01' ? '/stay' : '/own'} style={{ display: 'inline-block', background: s.color, padding: '12px 28px', textDecoration: 'none' }}>
                  <span style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#F2EDE4' }}>{s.num === '01' ? 'View Residences →' : 'Request a Proposal →'}</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {s.items.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '14px 0', borderBottom: '1px solid rgba(13,12,10,0.06)' }}>
                    <span style={{ width: 20, height: 1, background: '#C9A96E', marginTop: 10, flexShrink: 0 }} />
                    <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: '#9B9590', lineHeight: 1.6 }}>{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      ))}
    </div>
  )
}
