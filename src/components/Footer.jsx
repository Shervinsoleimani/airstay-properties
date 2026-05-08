import { Link } from 'react-router-dom'

export default function Footer({ onBook, onOwner }) {
  return (
    <footer style={{ background: '#0D0C0A', color: '#9B9590', fontFamily: 'DM Sans' }}>
      <div style={{ maxWidth: 1600, margin: '0 auto', padding: '80px 48px 40px' }}>

        {/* Top CTA strip */}
        <div style={{ borderTop: '1px solid rgba(201,169,110,0.15)', borderBottom: '1px solid rgba(201,169,110,0.15)', padding: '40px 0', marginBottom: 64, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <p style={{ fontFamily: 'Playfair Display', fontSize: 32, fontWeight: 400, color: '#F2EDE4', marginBottom: 6 }}>
              Ready to elevate your stay?
            </p>
            <p style={{ fontSize: 14, fontWeight: 300, color: '#9B9590' }}>Boutique hotels and premium rentals across 6 countries.</p>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button onClick={onBook} style={{ background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '14px 32px', border: 'none', cursor: 'pointer' }}>
              Browse Properties
            </button>
            <button onClick={onOwner} style={{ background: 'transparent', color: '#C9A96E', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '13px 32px', border: '1px solid rgba(201,169,110,0.4)', cursor: 'pointer' }}>
              List Your Property
            </button>
          </div>
        </div>

        {/* Main footer grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 64 }}>
          <div>
            <img src="/logo.svg" alt="Airstay" style={{ height: 44, width: 'auto', marginBottom: 20 }} />
            <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.8, maxWidth: 240, color: 'rgba(155,149,144,0.8)' }}>
              Global luxury hospitality company. Boutique hotels, premium rentals, and full-service property management.
            </p>
            <p style={{ fontSize: 12, color: '#C9A96E', marginTop: 16, letterSpacing: '0.1em' }}>info@airstayproperties.com</p>
          </div>

          {[
            ['Stays', [['Browse All', '/stay'], ['Montreal', '/stay?city=montreal'], ['Vancouver', '/stay?city=vancouver'], ['Dubai', '/stay?city=dubai'], ['Spain', '/stay?city=spain']]],
            ['Company', [['About Us', '/about'], ['Services', '/services'], ['For Owners', '/own'], ['Long-Term', '/longterm'], ['Careers', '/careers']]],
            ['Support', [['Contact', '/contact'], ['FAQ', '/faq'], ['Book a Stay', '#'], ['Owner Portal', '#'], ['Maintenance', '#']]],
          ].map(([title, links]) => (
            <div key={title}>
              <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 20 }}>{title}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} style={{ fontSize: 13, fontWeight: 300, color: 'rgba(155,149,144,0.7)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#F2EDE4'}
                      onMouseLeave={e => e.target.style.color = 'rgba(155,149,144,0.7)'}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(201,169,110,0.1)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, fontWeight: 300 }}>© {new Date().getFullYear()} Airstay Properties Inc. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms', 'Cookies'].map(item => (
              <a key={item} href="#" style={{ fontSize: 12, color: 'rgba(155,149,144,0.5)', textDecoration: 'none' }}
                onMouseEnter={e => e.target.style.color = '#9B9590'}
                onMouseLeave={e => e.target.style.color = 'rgba(155,149,144,0.5)'}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
