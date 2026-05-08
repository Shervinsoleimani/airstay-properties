import { Reveal } from '../components/Reveal'

export default function About() {
  return (
    <div className="page-in" style={{ background: '#FAF7F2' }}>
      {/* Hero */}
      <div style={{ background: '#0D0C0A', padding: '160px 48px 100px' }}>
        <div style={{ maxWidth: 1600, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <Reveal><div className="eyebrow" style={{ color: '#C9A96E', marginBottom: 24 }}>Our Story</div></Reveal>
            <Reveal delay={0.1}>
              <h1 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 20 }}>
                Built on one<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>obsession.</em>
              </h1>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 16, fontWeight: 300, color: '#9B9590', lineHeight: 1.9, paddingTop: 80 }}>
              Airstay Properties was founded with a single conviction: that a stay in a managed rental should feel as good as — or better than — a five-star hotel. We started in Montreal. We're now in 6 countries. The conviction hasn't changed.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Mission */}
      <div style={{ padding: '100px 48px', background: '#FAF7F2' }}>
        <div style={{ maxWidth: 1600, margin: '0 auto' }}>
          <Reveal>
            <p style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(32px, 4vw, 60px)', fontWeight: 400, lineHeight: 1.2, color: '#0D0C0A', maxWidth: 900 }}>
              "We don't manage properties.<br />We <em style={{ fontStyle: 'italic', color: '#2C3E35' }}>craft</em> the experience of feeling at home — anywhere in the world."
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginTop: 32 }}>Shervin Soleimani · Founder & CEO</p>
          </Reveal>
        </div>
      </div>

      {/* Values */}
      <div style={{ padding: '0 48px 100px' }}>
        <div style={{ maxWidth: 1600, margin: '0 auto' }}>
          <Reveal><div className="eyebrow" style={{ marginBottom: 20 }}>Our Values</div></Reveal>
          <Reveal delay={0.1}><h2 className="heading-lg" style={{ color: '#0D0C0A', marginBottom: 64 }}>What drives<br /><em style={{ fontStyle: 'italic', color: '#2C3E35' }}>everything we do.</em></h2></Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {[
              { title: 'Uncompromising Quality', desc: 'We set a standard and we hold it — for every property, every guest, every owner, every time. There are no off days.' },
              { title: 'Radical Transparency', desc: 'We tell owners exactly what\'s happening with their asset. Real numbers, real reporting, real conversations.' },
              { title: 'Technology-Forward', desc: 'We invest in the best tools — Hostaway, Pricelabs, smart locks — because they make us better, faster, and more profitable for everyone.' },
              { title: 'People Always First', desc: 'Guests, owners, and our team. Every decision starts with the question: what\'s the right thing for the people involved?' },
              { title: 'Local Expertise, Global Reach', desc: 'We operate globally but our teams are local. We know every neighbourhood we work in.' },
              { title: 'Continuous Improvement', desc: 'We review every stay, every maintenance ticket, every owner report. We\'re always looking for the 1% that makes it better.' },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <div style={{ background: i % 2 === 0 ? '#0D0C0A' : '#F2EDE4', padding: '44px 40px' }}>
                  <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 16 }}>0{i+1}</p>
                  <h3 style={{ fontFamily: 'Playfair Display', fontSize: 22, fontWeight: 400, color: i % 2 === 0 ? '#F2EDE4' : '#0D0C0A', marginBottom: 16 }}>{v.title}</h3>
                  <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: i % 2 === 0 ? 'rgba(242,237,228,0.45)' : '#9B9590', lineHeight: 1.8 }}>{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Global presence numbers */}
      <div style={{ background: '#2C3E35', padding: '80px 48px' }}>
        <div style={{ maxWidth: 1600, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 1 }}>
          {[['50+', 'Properties'], ['6', 'Countries'], ['5', 'Cities, Active'], ['1,200+', 'Guests Hosted'], ['4.9★', 'Avg. Rating'], ['2024', 'Founded']].map(([v, l]) => (
            <div key={l} style={{ background: 'rgba(13,12,10,0.2)', padding: '36px 28px', textAlign: 'center' }}>
              <p style={{ fontFamily: 'Playfair Display', fontSize: 36, fontWeight: 400, color: '#C9A96E' }}>{v}</p>
              <p style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(242,237,228,0.4)', marginTop: 8 }}>{l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
