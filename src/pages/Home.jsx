import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Reveal, RevealWords, FadeIn } from '../components/Reveal'
import { PROPERTIES, STATS, SERVICES, CITIES } from '../lib/data'

// ── HERO ──────────────────────────────────────────────
function Hero({ onBook, onOwner }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, 140])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  const [activeCity, setActiveCity] = useState(0)
  const cities = ['Montreal', 'Vancouver', 'Dubai', 'Barcelona', 'Toronto']
  useEffect(() => {
    const t = setInterval(() => setActiveCity(c => (c + 1) % cities.length), 2800)
    return () => clearInterval(t)
  }, [])

  return (
    <section style={{ minHeight: '100vh', background: '#0D0C0A', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
      {/* Background texture */}
      <motion.div style={{ position: 'absolute', inset: 0, y }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 70% at 70% 40%, rgba(44,62,53,0.35) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 20% 80%, rgba(201,169,110,0.08) 0%, transparent 50%)',
        }} />
        {/* Grid lines */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }} preserveAspectRatio="none">
          {Array.from({length: 12}).map((_, i) => (
            <line key={i} x1={`${(i+1)*8.33}%`} y1="0%" x2={`${(i+1)*8.33}%`} y2="100%" stroke="#C9A96E" strokeWidth="0.5" />
          ))}
          {Array.from({length: 8}).map((_, i) => (
            <line key={i} x1="0%" y1={`${(i+1)*12.5}%`} x2="100%" y2={`${(i+1)*12.5}%`} stroke="#C9A96E" strokeWidth="0.5" />
          ))}
        </svg>
        {/* Noise */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      </motion.div>

      {/* Vertical gold lines */}
      {[20, 75].map((pos, i) => (
        <motion.div key={i} style={{ position: 'absolute', top: '15%', left: `${pos}%`, width: 1, background: `linear-gradient(to bottom, transparent, rgba(201,169,110,${i===0?0.35:0.2}), transparent)`, height: '55%' }}
          initial={{ scaleY: 0, originY: 0 }} animate={{ scaleY: 1 }}
          transition={{ duration: 2, delay: 1.5 + i * 0.3, ease: [0.22, 1, 0.36, 1] }} />
      ))}

      {/* Content */}
      <motion.div style={{ position: 'relative', zIndex: 10, width: '100%', padding: '0 48px 80px', maxWidth: 1600, margin: '0 auto', paddingTop: 160 }} >

        {/* Eyebrow */}
        <motion.div className="eyebrow" style={{ color: '#C9A96E', marginBottom: 32 }}
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}>
          Global Luxury Hospitality
        </motion.div>

        {/* Main headline */}
        <div style={{ overflow: 'hidden', marginBottom: 6 }}>
          <motion.h1 className="heading-hero" style={{ color: '#F2EDE4' }}
            initial={{ y: '100%' }} animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}>
            Where luxury
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: 6 }}>
          <motion.h1 className="heading-hero" style={{ color: 'transparent', WebkitTextStroke: '1px #C9A96E' }}
            initial={{ y: '100%' }} animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 2.65, ease: [0.22, 1, 0.36, 1] }}>
            feels like
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: 40 }}>
          <motion.h1 className="heading-hero" style={{ color: '#F2EDE4' }}
            initial={{ y: '100%' }} animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}>
            home.
          </motion.h1>
        </div>

        {/* City cycling */}
        <motion.div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48, height: 28 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.1 }}>
          <span style={{ fontFamily: 'DM Mono', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(242,237,228,0.4)' }}>Now in</span>
          <AnimatePresence mode="wait">
            <motion.span key={activeCity}
              style={{ fontFamily: 'DM Mono', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E' }}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}>
              {cities[activeCity]}
            </motion.span>
          </AnimatePresence>
          <span style={{ width: 40, height: 1, background: 'rgba(201,169,110,0.3)' }} />
          <span style={{ fontFamily: 'DM Mono', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(242,237,228,0.3)' }}>+ 4 more cities</span>
        </motion.div>

        {/* CTAs */}
        <motion.div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 80 }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.3 }}>
          <button onClick={onBook}
            style={{ background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '18px 44px', border: 'none', cursor: 'pointer' }}>
            Explore Properties
          </button>
          <button onClick={onOwner}
            style={{ background: 'transparent', color: 'rgba(242,237,228,0.6)', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0', border: 'none', cursor: 'pointer', borderBottom: '1px solid rgba(242,237,228,0.2)', paddingBottom: 2 }}>
            I own a property →
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid rgba(201,169,110,0.1)', paddingTop: 0 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}>
          {STATS.slice(0,4).map(({ value, label }) => (
            <div key={label} style={{ padding: '28px 0', borderRight: '1px solid rgba(201,169,110,0.1)' }}>
              <p style={{ fontFamily: 'Playfair Display', fontSize: 36, fontWeight: 400, color: '#F2EDE4', lineHeight: 1 }}>{value}</p>
              <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(155,149,144,0.7)', marginTop: 8 }}>{label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div style={{ position: 'absolute', bottom: 32, right: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4 }}>
        <span style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(242,237,228,0.25)', writingMode: 'vertical-rl' }}>Scroll</span>
        <motion.div style={{ width: 1, height: 60, background: 'linear-gradient(to bottom, rgba(201,169,110,0.4), transparent)' }}
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 0.4 }} />
      </motion.div>
    </section>
  )
}

// ── MARQUEE ───────────────────────────────────────────
function MarqueeBar() {
  const items = ['Boutique Hotels', '·', 'Short-Term Rentals', '·', 'Long-Term Residences', '·', 'Property Management', '·', 'Montreal', '·', 'Vancouver', '·', 'Dubai', '·', 'Barcelona', '·', 'Toronto', '·']
  const doubled = [...items, ...items]
  return (
    <div style={{ background: '#2C3E35', padding: '14px 0', overflow: 'hidden' }}>
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i} style={{ fontFamily: 'DM Mono', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(242,237,228,0.7)', padding: '0 20px', whiteSpace: 'nowrap' }}>{item}</span>
        ))}
      </div>
    </div>
  )
}

// ── FEATURED PROPERTIES ───────────────────────────────
function FeaturedProperties({ onBook }) {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Boutique Hotel', 'Short-Term', 'Long-Term']

  return (
    <section style={{ background: '#FAF7F2', padding: '120px 48px' }}>
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <Reveal><div className="eyebrow" style={{ marginBottom: 16 }}>Our Portfolio</div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading-xl" style={{ color: '#0D0C0A' }}>
                Curated spaces,<br /><em style={{ fontStyle: 'italic', color: '#2C3E35' }}>extraordinary</em> stays.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div style={{ display: 'flex', gap: 8 }}>
              {filters.map(f => (
                <button key={f} onClick={() => setFilter(f)}
                  style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '8px 18px', border: `1px solid ${filter === f ? '#2C3E35' : 'rgba(13,12,10,0.15)'}`, background: filter === f ? '#2C3E35' : 'transparent', color: filter === f ? '#F2EDE4' : '#9B9590', cursor: 'pointer', transition: 'all 0.2s' }}>
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Property grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {PROPERTIES.slice(0, 6).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <div className="prop-card" onClick={onBook} style={{ background: p.coverGradient }}>
                <div className="prop-card-img" style={{ aspectRatio: i < 2 ? '4/5' : '3/4', background: p.coverGradient, position: 'relative' }}>
                  <img src={p.images[0]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={e => { e.target.style.display = 'none' }} />
                </div>
                <div className="prop-card-overlay" />
                {/* Tag */}
                <div style={{ position: 'absolute', top: 20, left: 20, background: 'rgba(44,62,53,0.85)', backdropFilter: 'blur(8px)', padding: '4px 12px' }}>
                  <span style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A96E' }}>{p.tag}</span>
                </div>
                {/* Content */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 24px' }}>
                  <p style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 6 }}>{p.city} · {p.neighbourhood}</p>
                  <p style={{ fontFamily: 'Playfair Display', fontSize: 22, fontWeight: 400, color: '#F2EDE4', marginBottom: 4 }}>{p.brand} {p.name}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <span style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 300, color: 'rgba(242,237,228,0.6)' }}>From ${p.basePrice} / night</span>
                    <span style={{ fontFamily: 'DM Mono', fontSize: 10, color: '#C9A96E' }}>★ {p.rating}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/stay" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2C3E35', textDecoration: 'none', borderBottom: '1px solid rgba(44,62,53,0.3)', paddingBottom: 2 }}>
              View all properties →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ── GLOBAL PRESENCE MAP ───────────────────────────────
function GlobalMap() {
  const [active, setActive] = useState(null)

  return (
    <section style={{ background: '#0D0C0A', padding: '120px 48px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'center' }}>
          <div>
            <Reveal>
              <div className="eyebrow" style={{ color: '#C9A96E', marginBottom: 20 }}>Global Presence</div>
              <h2 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 24 }}>
                6 countries.<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>One standard.</em>
              </h2>
              <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: '#9B9590', lineHeight: 1.8, marginBottom: 40 }}>
                From the cobblestone streets of Old Montreal to the towers of Dubai — Airstay brings the same obsession with quality to every market we enter.
              </p>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {CITIES.map((city, i) => (
                <Reveal key={city.id} delay={i * 0.07}>
                  <div onMouseEnter={() => setActive(city.id)} onMouseLeave={() => setActive(null)}
                    style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 0', borderBottom: '1px solid rgba(201,169,110,0.08)', cursor: 'pointer', transition: 'all 0.2s' }}>
                    <span style={{ fontSize: 18 }}>{city.flag}</span>
                    <div style={{ flex: 1 }}>
                      <span style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: active === city.id ? '#F2EDE4' : '#9B9590', transition: 'color 0.2s' }}>{city.name}</span>
                      <span style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(155,149,144,0.5)', marginLeft: 10 }}>{city.country}</span>
                    </div>
                    {city.active
                      ? <span style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#2C3E35', background: 'rgba(44,62,53,0.3)', padding: '3px 8px' }}>Active</span>
                      : <span style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8B7355', background: 'rgba(139,115,85,0.15)', padding: '3px 8px' }}>Coming Soon</span>
                    }
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Map */}
          <FadeIn delay={0.3}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', background: 'rgba(44,62,53,0.08)', border: '1px solid rgba(201,169,110,0.1)', padding: '20px', borderRadius: 2 }}>
                {/* Simplified world map SVG */}
                <svg viewBox="0 0 800 450" style={{ width: '100%', opacity: 0.6 }} fill="none">
                  {/* North America */}
                  <path d="M 80 80 L 200 60 L 220 100 L 200 160 L 160 200 L 120 190 L 80 160 Z" fill="rgba(44,62,53,0.4)" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
                  {/* South America */}
                  <path d="M 160 220 L 200 210 L 210 280 L 190 340 L 160 350 L 140 300 Z" fill="rgba(44,62,53,0.3)" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
                  {/* Europe */}
                  <path d="M 360 70 L 430 60 L 440 100 L 420 130 L 380 130 L 360 110 Z" fill="rgba(44,62,53,0.4)" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
                  {/* Africa */}
                  <path d="M 370 150 L 430 140 L 450 200 L 440 290 L 400 310 L 360 280 L 350 220 Z" fill="rgba(44,62,53,0.3)" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
                  {/* Asia */}
                  <path d="M 440 60 L 650 50 L 680 130 L 640 180 L 560 190 L 480 160 L 440 120 Z" fill="rgba(44,62,53,0.4)" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
                  {/* Australia */}
                  <path d="M 600 280 L 680 270 L 700 330 L 660 360 L 600 350 Z" fill="rgba(44,62,53,0.3)" stroke="rgba(201,169,110,0.2)" strokeWidth="0.5" />
                </svg>

                {/* City dots on map */}
                {[
                  { id: 'montreal', x: '25%', y: '32%', active: true },
                  { id: 'vancouver', x: '14%', y: '28%', active: true },
                  { id: 'toronto', x: '23%', y: '33%', active: true },
                  { id: 'barcelona', x: '46%', y: '28%', active: true },
                  { id: 'dubai', x: '60%', y: '42%', active: true },
                  { id: 'miami', x: '20%', y: '42%', active: false },
                  { id: 'new-york', x: '22%', y: '34%', active: false },
                ].map(dot => (
                  <div key={dot.id} className={`map-dot ${!dot.active ? 'coming-soon' : ''}`}
                    style={{ position: 'absolute', left: dot.x, top: dot.y,
                      background: active === dot.id ? '#E2C99A' : (dot.active ? '#C9A96E' : '#8B7355'),
                      boxShadow: active === dot.id ? '0 0 20px rgba(201,169,110,0.6)' : 'none' }} />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// ── SERVICES SECTION ──────────────────────────────────
function ServicesSection() {
  return (
    <section style={{ background: '#F2EDE4', padding: '120px 48px' }}>
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', marginBottom: 80 }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 20 }}>What We Do</div>
            <h2 className="heading-xl" style={{ color: '#0D0C0A' }}>
              A to Z.<br /><em style={{ fontStyle: 'italic', color: '#2C3E35' }}>Zero exceptions.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: '#9B9590', lineHeight: 1.9 }}>
              From the moment a guest books to the moment they leave — and everything that happens between guest stays — we handle every single detail with the same obsession over quality.
            </p>
          </Reveal>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
          {[
            { num: '01', icon: '🏨', title: 'Short-Term\nRentals', desc: 'Full-service boutique hotel management. Guest comms, cleaning, pricing, maintenance — all handled.' },
            { num: '02', icon: '🏠', title: 'Long-Term\nRentals', desc: 'Premium managed residences. Tenant vetting, lease management, maintenance included.' },
            { num: '03', icon: '🏢', title: 'Property\nManagement', desc: 'End-to-end building operations for owners and investors. Single units to entire buildings.' },
            { num: '04', icon: '🔧', title: 'Maintenance\nServices', desc: '24/7 response, vetted contractors, preventive care. Your asset protected like our own.' },
          ].map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              <div style={{ background: '#0D0C0A', padding: '48px 36px', height: '100%', cursor: 'default', transition: 'background 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#2C3E35'}
                onMouseLeave={e => e.currentTarget.style.background = '#0D0C0A'}>
                <p style={{ fontFamily: 'DM Mono', fontSize: 11, letterSpacing: '0.2em', color: 'rgba(201,169,110,0.5)', marginBottom: 28 }}>{s.num}</p>
                <div style={{ fontSize: 32, marginBottom: 24, opacity: 0.7 }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: 22, fontWeight: 400, color: '#F2EDE4', marginBottom: 16, whiteSpace: 'pre-line' }}>{s.title}</h3>
                <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: 'rgba(242,237,228,0.45)', lineHeight: 1.8 }}>{s.desc}</p>
                <div style={{ width: 24, height: 1, background: '#C9A96E', marginTop: 28, transition: 'width 0.3s' }} className="service-line" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── TECHNOLOGY SECTION ────────────────────────────────
function TechSection() {
  const techs = [
    { name: 'Hostaway', role: 'Property Management System', desc: 'Industry-leading PMS. Every booking, guest, task, and channel in perfect sync across all properties.' },
    { name: 'Pricelabs', role: 'Dynamic Pricing Engine', desc: 'AI-powered pricing that adjusts your rates in real-time. On average, 38% more revenue vs self-managed.' },
    { name: 'Smart Locks', role: 'Keyless Access Control', desc: 'Automated check-in codes, remote access management, real-time security monitoring.' },
    { name: 'Stripe', role: 'Secure Payment Processing', desc: 'Bank-grade payment security. Instant booking confirmations and automated owner payouts.' },
  ]

  return (
    <section style={{ background: '#0D0C0A', padding: '120px 48px' }}>
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <Reveal><div className="eyebrow" style={{ color: '#C9A96E', justifyContent: 'center', marginBottom: 20 }}>Technology Stack</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-xl" style={{ color: '#F2EDE4' }}>
              The most advanced<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>platform</em> in the industry.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: '#9B9590', lineHeight: 1.9, maxWidth: 560, margin: '24px auto 0' }}>
              We don't just use the best tools — we integrate them into a seamless system that runs your property like a five-star operation, automatically.
            </p>
          </Reveal>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'rgba(201,169,110,0.08)' }}>
          {techs.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div style={{ background: '#0D0C0A', padding: '48px 36px', height: '100%' }}>
                <p style={{ fontFamily: 'Playfair Display', fontSize: 28, fontWeight: 400, color: '#C9A96E', marginBottom: 8 }}>{t.name}</p>
                <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(155,149,144,0.5)', marginBottom: 20 }}>{t.role}</p>
                <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: 'rgba(242,237,228,0.4)', lineHeight: 1.8 }}>{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── FOR OWNERS ────────────────────────────────────────
function OwnersSection({ onOwner }) {
  return (
    <section style={{ background: '#FAF7F2', padding: '120px 48px' }}>
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }}>
          <div>
            <Reveal><div className="eyebrow" style={{ marginBottom: 20 }}>For Property Owners</div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading-xl" style={{ color: '#0D0C0A', marginBottom: 16 }}>
                Your property.<br />Our <em style={{ fontStyle: 'italic', color: '#2C3E35' }}>expertise.</em><br />Their experience.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: '#9B9590', lineHeight: 1.9, marginBottom: 48 }}>
                Whether you own a single condo in Montreal or a building in Dubai — we manage your investment like it's our own. Maximum revenue, zero hassle, full transparency.
              </p>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 52 }}>
              {[
                ['38%', 'Average revenue increase vs self-managed'],
                ['84%', 'Average occupancy across our portfolio'],
                ['<4h', 'Average maintenance response time'],
                ['4.9/5', 'Owner satisfaction rating'],
              ].map(([value, label], i) => (
                <Reveal key={label} delay={0.1 + i * 0.07}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, paddingTop: 20, borderTop: '1px solid rgba(13,12,10,0.08)' }}>
                    <span style={{ fontFamily: 'Playfair Display', fontSize: 40, fontWeight: 400, color: '#2C3E35', minWidth: 80 }}>{value}</span>
                    <span style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: '#9B9590' }}>{label}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <button onClick={onOwner} style={{ background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '18px 44px', border: 'none', cursor: 'pointer' }}>
                Submit Your Property →
              </button>
            </Reveal>
          </div>

          {/* Visual panel */}
          <Reveal delay={0.3}>
            <div style={{ background: '#0D0C0A', padding: '56px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, opacity: 0.06, backgroundImage: 'repeating-linear-gradient(45deg, #C9A96E 0, #C9A96E 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontFamily: 'Playfair Display', fontSize: 42, fontWeight: 400, color: '#F2EDE4', lineHeight: 1.15, marginBottom: 40 }}>
                  "We've managed <em style={{ fontStyle: 'italic', color: '#C9A96E' }}>2,000+ stays</em> and counting — and we're just getting started."
                </p>
                <div style={{ height: 1, background: 'rgba(201,169,110,0.2)', marginBottom: 32 }} />
                <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(155,149,144,0.5)' }}>Shervin Soleimani · Founder, Airstay Properties</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ── TESTIMONIALS ──────────────────────────────────────
function Testimonials() {
  const reviews = [
    { quote: 'Airstay manages two of my Montreal condos. Revenue is up 40% and I genuinely do nothing — they handle everything with incredible professionalism.', name: 'Marcus T.', role: 'Property Owner · Montreal', type: 'owner' },
    { quote: 'Staying at Le Moyne Modern was unlike any Airbnb I\'ve ever experienced. It felt like a proper boutique hotel — the quality of everything was exceptional.', name: 'Sophia R.', role: 'Guest · Vancouver', type: 'guest' },
    { quote: 'As an investor in two markets, I needed a management company that could operate at a high level. Airstay is the only one that came close to my standards.', name: 'James K.', role: 'Investor · Dubai / Montreal', type: 'investor' },
    { quote: 'We stayed at Notre-Dame for our anniversary. The garden terrace, the four-poster bed — it was more romantic than any hotel we\'d ever been to.', name: 'Camille & Éric', role: 'Guests · Paris', type: 'guest' },
    { quote: 'The maintenance response time is what sets them apart. A leak at 2am — they had a contractor there within the hour. That\'s not normal.', name: 'David L.', role: 'Building Owner · Montreal', type: 'owner' },
    { quote: 'I handed over my entire 8-unit building to Airstay. Best business decision I\'ve made. The monthly reports are detailed, revenue is strong.', name: 'Fatima A.', role: 'Building Owner · Toronto', type: 'investor' },
  ]

  return (
    <section style={{ background: '#F2EDE4', padding: '120px 48px' }}>
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
          <div>
            <Reveal><div className="eyebrow" style={{ marginBottom: 16 }}>What People Say</div></Reveal>
            <Reveal delay={0.1}><h2 className="heading-xl" style={{ color: '#0D0C0A' }}>Trusted by guests,<br /><em style={{ fontStyle: 'italic', color: '#2C3E35' }}>owners, and investors.</em></h2></Reveal>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{ background: i % 2 === 0 ? '#FAF7F2' : '#0D0C0A', padding: '44px 40px', height: '100%' }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 20 }}>
                  {Array.from({length:5}).map((_, s) => <span key={s} style={{ color: '#C9A96E', fontSize: 13 }}>★</span>)}
                </div>
                <p style={{ fontFamily: 'Playfair Display', fontSize: 18, fontWeight: 400, fontStyle: 'italic', color: i % 2 === 0 ? '#0D0C0A' : '#F2EDE4', lineHeight: 1.7, marginBottom: 28 }}>"{r.quote}"</p>
                <div>
                  <p style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 500, letterSpacing: '0.05em', color: i % 2 === 0 ? '#0D0C0A' : '#F2EDE4' }}>{r.name}</p>
                  <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A96E', marginTop: 4 }}>{r.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── FINAL CTA ─────────────────────────────────────────
function FinalCTA({ onBook, onOwner }) {
  return (
    <section style={{ background: '#2C3E35', padding: '140px 48px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'repeating-linear-gradient(45deg, #C9A96E 0, #C9A96E 1px, transparent 0, transparent 50%)', backgroundSize: '24px 24px' }} />
      <div style={{ maxWidth: 1600, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <Reveal>
            <div>
              <div className="eyebrow" style={{ color: 'rgba(201,169,110,0.6)', marginBottom: 20 }}>Plan Your Stay</div>
              <h2 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 20 }}>Ready for an<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>elevated</em> experience?</h2>
              <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: 'rgba(242,237,228,0.5)', lineHeight: 1.8, marginBottom: 36 }}>Browse boutique hotels and premium rentals across Montreal, Vancouver, Dubai, Barcelona, and Toronto.</p>
              <button onClick={onBook} style={{ background: '#C9A96E', color: '#0D0C0A', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '18px 44px', border: 'none', cursor: 'pointer' }}>
                Browse All Properties →
              </button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ borderLeft: '1px solid rgba(201,169,110,0.2)', paddingLeft: 80 }}>
              <div className="eyebrow" style={{ color: 'rgba(201,169,110,0.6)', marginBottom: 20 }}>For Property Owners</div>
              <h2 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 20 }}>Let your property<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>work for you.</em></h2>
              <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: 'rgba(242,237,228,0.5)', lineHeight: 1.8, marginBottom: 36 }}>Join 50+ owners who earn more and stress less with Airstay managing their investment.</p>
              <button onClick={onOwner} style={{ background: 'transparent', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '17px 44px', border: '1px solid rgba(242,237,228,0.3)', cursor: 'pointer' }}>
                Submit Your Property →
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ── MAIN HOME ─────────────────────────────────────────
export default function Home({ onBook, onOwner }) {
  return (
    <div className="page-in">
      <Hero onBook={onBook} onOwner={onOwner} />
      <MarqueeBar />
      <FeaturedProperties onBook={onBook} />
      <GlobalMap />
      <ServicesSection />
      <TechSection />
      <OwnersSection onOwner={onOwner} />
      <Testimonials />
      <FinalCTA onBook={onBook} onOwner={onOwner} />
    </div>
  )
}
