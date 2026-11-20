import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Reveal, FadeIn } from '../components/Reveal'
import { PROPERTIES, STATS, SERVICES, BOOKING_URL } from '../lib/data'

const EASE = [0.22, 1, 0.36, 1]
const mono = { fontFamily: 'DM Mono', letterSpacing: '0.18em', textTransform: 'uppercase' }

// ── HERO ──────────────────────────────────────────────
function Hero({ onBook, onOwner }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 160])

  return (
    <section style={{ minHeight: '100vh', background: '#0D0C0A', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
      {/* Photo background: AirStay Saint-Paul, Old Montreal */}
      <motion.div style={{ position: 'absolute', inset: '-8% 0 0 0', y }}>
        <motion.div
          initial={{ scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease: EASE }}
          style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/saint-paul/1-top.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 35%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,12,10,0.92) 0%, rgba(13,12,10,0.7) 45%, rgba(13,12,10,0.35) 100%), linear-gradient(to top, rgba(13,12,10,0.95) 0%, transparent 45%)' }} />
      </motion.div>

      <div className="r-pad" style={{ position: 'relative', zIndex: 10, width: '100%', padding: '160px 48px 72px', maxWidth: 1600, margin: '0 auto' }}>
        <motion.div className="eyebrow" style={{ color: '#C9A96E', marginBottom: 32 }}
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          Luxury Hospitality &amp; Property Management
        </motion.div>

        {['Where luxury', 'feels like', 'home.'].map((line, i) => (
          <div key={line} style={{ overflow: 'hidden', marginBottom: i === 2 ? 40 : 6 }}>
            <motion.h1 className="heading-hero"
              style={i === 1 ? { color: 'transparent', WebkitTextStroke: '1px #C9A96E' } : { color: '#F2EDE4' }}
              initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.3 + i * 0.15, ease: EASE }}>
              {line}
            </motion.h1>
          </div>
        ))}

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          style={{ ...mono, fontSize: 11, color: 'rgba(242,237,228,0.55)', marginBottom: 44 }}>
          Montreal <span style={{ color: '#C9A96E', margin: '0 12px' }}>·</span> Vancouver
        </motion.p>

        <motion.div style={{ display: 'flex', gap: 28, alignItems: 'center', marginBottom: 72, flexWrap: 'wrap' }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }}>
          <button onClick={onBook}
            style={{ background: '#C9A96E', color: '#0D0C0A', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '18px 44px', border: 'none', cursor: 'pointer' }}>
            Reserve Your Stay
          </button>
          <button onClick={onOwner}
            style={{ background: 'transparent', color: 'rgba(242,237,228,0.8)', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', borderBottom: '1px solid rgba(242,237,228,0.35)', paddingBottom: 3 }}>
            I own a property →
          </button>
        </motion.div>

        <motion.div className="r-two" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid rgba(201,169,110,0.18)' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          {STATS.map(({ value, label }) => (
            <div key={label} style={{ padding: '28px 0' }}>
              <p style={{ fontFamily: 'Playfair Display', fontSize: 38, fontWeight: 400, color: '#F2EDE4', lineHeight: 1 }}>{value}</p>
              <p style={{ ...mono, fontSize: 10, letterSpacing: '0.15em', color: 'rgba(242,237,228,0.5)', marginTop: 10 }}>{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ── MARQUEE ───────────────────────────────────────────
function MarqueeBar() {
  const items = ['Boutique Suites', 'Short-Term Stays', 'Long-Term Residences', 'Property Management', 'Building Care', 'Montreal', 'Vancouver']
  const doubled = [...items, ...items, ...items, ...items]
  return (
    <div style={{ background: '#2C3E35', padding: '14px 0', overflow: 'hidden' }}>
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i} style={{ ...mono, fontSize: 11, color: 'rgba(242,237,228,0.7)', padding: '0 28px', whiteSpace: 'nowrap' }}>
            {item}<span style={{ color: '#C9A96E', marginLeft: 56 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ── FEATURED RESIDENCES ───────────────────────────────
function FeaturedProperties({ onBook }) {
  return (
    <section className="r-pad" style={{ background: '#FAF7F2', padding: '120px 48px' }}>
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <Reveal><div className="eyebrow" style={{ marginBottom: 16 }}>Our Residences</div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading-xl" style={{ color: '#0D0C0A' }}>
                Curated addresses,<br /><em style={{ fontStyle: 'italic', color: '#2C3E35' }}>extraordinary</em> stays.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: '#9B9590', lineHeight: 1.9, maxWidth: 420 }}>
              Heritage stone buildings, restored lofts and modern suites in Old Montreal and downtown, each run to the standard of a boutique hotel.
            </p>
          </Reveal>
        </div>

        <div className="r-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {PROPERTIES.slice(0, 6).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <div className="prop-card" onClick={onBook} style={{ background: p.coverGradient }}>
                <div className="prop-card-img" style={{ aspectRatio: '4/5', background: p.coverGradient, position: 'relative' }}>
                  <img src={p.cover || p.images[0]} alt={`AirStay ${p.name}, ${p.neighbourhood}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={e => { e.target.style.display = 'none' }} />
                </div>
                <div className="prop-card-overlay" />
                <div style={{ position: 'absolute', top: 20, left: 20, background: 'rgba(13,12,10,0.55)', backdropFilter: 'blur(8px)', padding: '5px 12px' }}>
                  <span style={{ ...mono, fontSize: 9, color: '#C9A96E' }}>{p.tag}</span>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 24px' }}>
                  <p style={{ ...mono, fontSize: 9, letterSpacing: '0.2em', color: '#C9A96E', marginBottom: 6 }}>{p.city} · {p.neighbourhood}</p>
                  <p style={{ fontFamily: 'Playfair Display', fontSize: 24, fontWeight: 400, color: '#F2EDE4', marginBottom: 4 }}>{p.brand} {p.name}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <span style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.12em', color: 'rgba(242,237,228,0.55)' }}>CITQ {p.citq}</span>
                    <span style={{ ...mono, fontSize: 10, color: '#C9A96E' }}>Reserve →</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.4}>
            <a href={`${BOOKING_URL}/all-listings`} style={{ position: 'relative', display: 'flex', aspectRatio: '4/5', height: '100%', alignItems: 'flex-end', textDecoration: 'none', overflow: 'hidden', background: '#0D0C0A' }} className="svc-card">
              <div className="svc-card-bg" style={{ backgroundImage: 'url(/images/le-moyne-heritage/5.jpg)', opacity: 0.35 }} />
              <div style={{ position: 'relative', padding: '40px 32px' }}>
                <p style={{ ...mono, fontSize: 10, letterSpacing: '0.2em', color: '#C9A96E', marginBottom: 16 }}>35 Residences · Live Availability</p>
                <p style={{ fontFamily: 'Playfair Display', fontSize: 34, fontWeight: 400, color: '#F2EDE4', lineHeight: 1.15, marginBottom: 24 }}>View every<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>residence.</em></p>
                <span style={{ fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F2EDE4', borderBottom: '1px solid rgba(242,237,228,0.35)', paddingBottom: 3 }}>Browse &amp; reserve →</span>
              </div>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div style={{ textAlign: 'center', marginTop: 48, display: 'none' }}>
            <a href={`${BOOKING_URL}/all-listings`} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2C3E35', textDecoration: 'none', borderBottom: '1px solid rgba(44,62,53,0.3)', paddingBottom: 2 }}>
              View all residences &amp; availability →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ── HERITAGE (story teaser) ───────────────────────────
function Heritage() {
  return (
    <section className="r-pad" style={{ background: '#0D0C0A', padding: '0 48px', position: 'relative', overflow: 'hidden' }}>
      <div className="r-stack" style={{ maxWidth: 1600, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, alignItems: 'stretch' }}>
        <FadeIn>
          <div style={{ minHeight: 560, height: '100%', backgroundImage: 'url(/images/le-moyne-heritage/facade.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </FadeIn>
        <div style={{ padding: '120px 0 120px 80px' }} className="r-noborder">
          <Reveal><div className="eyebrow" style={{ color: '#C9A96E', marginBottom: 24 }}>Our Heritage</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 28 }}>
              Built by people<br />who <em style={{ fontStyle: 'italic', color: '#C9A96E' }}>build.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: '#9B9590', lineHeight: 1.9, marginBottom: 20, maxWidth: 520 }}>
              AirStay grew out of a family background in building development, construction management and engineering. We learned early that a great building is never an accident: it is planned, engineered and cared for, detail by detail.
            </p>
            <p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: '#9B9590', lineHeight: 1.9, marginBottom: 40, maxWidth: 520 }}>
              Today we bring that same discipline to hospitality, caring for every property as if we had built it ourselves.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link to="/about" style={{ fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9A96E', textDecoration: 'none', borderBottom: '1px solid rgba(201,169,110,0.4)', paddingBottom: 3 }}>
              Read our story →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ── SERVICES (photo cards) ────────────────────────────
function ServicesSection() {
  return (
    <section className="r-pad" style={{ background: '#F2EDE4', padding: '120px 48px' }}>
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        <div className="r-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', marginBottom: 72 }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 20 }}>What We Do</div>
            <h2 className="heading-xl" style={{ color: '#0D0C0A' }}>
              Every detail.<br /><em style={{ fontStyle: 'italic', color: '#2C3E35' }}>No exceptions.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: '#9B9590', lineHeight: 1.9 }}>
              From the moment a guest reserves to the day a tenant renews, and everything that happens in between, we handle each detail with the care of a five-star house.
            </p>
          </Reveal>
        </div>

        <div className="r-two" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.1}>
              <Link to={s.link} className="svc-card">
                <div className="svc-card-bg" style={{ backgroundImage: `url(${s.image})` }} />
                <div className="svc-card-shade" />
                <div style={{ position: 'relative', padding: '40px 32px' }}>
                  <p style={{ ...mono, fontSize: 11, letterSpacing: '0.2em', color: 'rgba(201,169,110,0.85)', marginBottom: 18 }}>{s.number}</p>
                  <h3 style={{ fontFamily: 'Playfair Display', fontSize: 26, fontWeight: 400, color: '#F2EDE4', marginBottom: 14, lineHeight: 1.2 }}>{s.title}</h3>
                  <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: 'rgba(242,237,228,0.7)', lineHeight: 1.8 }}>{s.desc}</p>
                  <div className="service-line" style={{ width: 24, height: 1, background: '#C9A96E', marginTop: 24 }} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── TECHNOLOGY (no vendor names) ──────────────────────
function TechSection() {
  const techs = [
    { name: 'One Operating Platform', role: 'Reservations & Operations', desc: 'Every reservation, guest, task and channel synchronised in real time across our entire portfolio.' },
    { name: 'Revenue Intelligence', role: 'Dynamic Pricing', desc: 'Data-driven rates that respond to demand, seasons and major events every day of the year.' },
    { name: 'Keyless Arrival', role: 'Smart Access & Security', desc: 'Secure smart locks, unique codes for every stay and access released only after identity verification.' },
    { name: 'Verified & Secure', role: 'Payments & Identity', desc: 'Bank-grade payment processing, government-ID verification and signed rental agreements for every stay.' },
  ]

  return (
    <section className="r-pad" style={{ background: '#0D0C0A', padding: '120px 48px' }}>
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <Reveal><div className="eyebrow" style={{ color: '#C9A96E', justifyContent: 'center', marginBottom: 20 }}>Technology</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-xl" style={{ color: '#F2EDE4' }}>
              Industry-leading<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>technology,</em> quietly at work.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: '#9B9590', lineHeight: 1.9, maxWidth: 600, margin: '24px auto 0' }}>
              We operate on the most advanced platforms in hospitality and integrate them into one seamless system, so guests feel effortless service and owners see results.
            </p>
          </Reveal>
        </div>

        <div className="r-two" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'rgba(201,169,110,0.08)' }}>
          {techs.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div style={{ background: '#0D0C0A', padding: '48px 36px', height: '100%' }}>
                <p style={{ ...mono, fontSize: 10, letterSpacing: '0.15em', color: 'rgba(201,169,110,0.6)', marginBottom: 16 }}>{t.role}</p>
                <p style={{ fontFamily: 'Playfair Display', fontSize: 26, fontWeight: 400, color: '#F2EDE4', marginBottom: 16, lineHeight: 1.2 }}>{t.name}</p>
                <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: 'rgba(242,237,228,0.45)', lineHeight: 1.8 }}>{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p style={{ textAlign: 'center', marginTop: 40, fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: 'rgba(155,149,144,0.7)' }}>
            Technology or hospitality partner? <Link to="/contact" style={{ color: '#C9A96E', textDecoration: 'none', borderBottom: '1px solid rgba(201,169,110,0.4)' }}>Let's talk.</Link>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

// ── FOR OWNERS ────────────────────────────────────────
function OwnersSection({ onOwner }) {
  return (
    <section className="r-pad" style={{ background: '#FAF7F2', padding: '120px 48px' }}>
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        <div className="r-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center' }}>
          <div>
            <Reveal><div className="eyebrow" style={{ marginBottom: 20 }}>For Property Owners</div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading-xl" style={{ color: '#0D0C0A', marginBottom: 16 }}>
                Your property.<br />Our <em style={{ fontStyle: 'italic', color: '#2C3E35' }}>expertise.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: '#9B9590', lineHeight: 1.9, marginBottom: 48 }}>
                Short-term, long-term, furnished or unfurnished, a single condo or an entire building: we recommend the strategy that earns you the most, then run it with complete transparency.
              </p>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 52 }}>
              {[
                ['200+', 'Properties under our management'],
                ['4,000+', 'Guest reviews across Airbnb, Booking.com, Expedia, Hotels.com and Vrbo'],
                ['24/7', 'Guest, tenant and owner care'],
                ['1', 'Dedicated manager who knows your property by name'],
              ].map(([value, label], i) => (
                <Reveal key={label} delay={0.1 + i * 0.07}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, paddingTop: 20, borderTop: '1px solid rgba(13,12,10,0.08)' }}>
                    <span style={{ fontFamily: 'Playfair Display', fontSize: 40, fontWeight: 400, color: '#2C3E35', minWidth: 120 }}>{value}</span>
                    <span style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: '#9B9590' }}>{label}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <button onClick={onOwner} style={{ background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '18px 44px', border: 'none', cursor: 'pointer' }}>
                Request a Revenue Assessment →
              </button>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div style={{ position: 'relative', overflow: 'hidden', minHeight: 560, display: 'flex', alignItems: 'flex-end' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/le-moyne-heritage/9.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,12,10,0.95) 10%, rgba(13,12,10,0.4) 60%, rgba(13,12,10,0.15))' }} />
              <div style={{ position: 'relative', padding: '56px' }}>
                <p style={{ fontFamily: 'Playfair Display', fontSize: 34, fontWeight: 400, color: '#F2EDE4', lineHeight: 1.25, marginBottom: 32 }}>
                  “We care for every property as if we had <em style={{ fontStyle: 'italic', color: '#C9A96E' }}>built it ourselves</em>, because that is where we come from.”
                </p>
                <div style={{ height: 1, background: 'rgba(201,169,110,0.3)', marginBottom: 24 }} />
                <p style={{ ...mono, fontSize: 10, letterSpacing: '0.2em', color: 'rgba(242,237,228,0.6)' }}>Shervin Soleimani · Founder, AirStay Properties</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ── REVIEWS BAND ──────────────────────────────────────
function ReviewsBand() {
  return (
    <section className="r-pad" style={{ position: 'relative', overflow: 'hidden', padding: '140px 48px' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/le-moyne-heritage/8.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,12,10,0.78)' }} />
      <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <Reveal><div className="eyebrow" style={{ color: '#C9A96E', justifyContent: 'center', marginBottom: 24 }}>Trusted by Guests</div></Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(56px, 9vw, 128px)', fontWeight: 400, color: '#F2EDE4', lineHeight: 1 }}>4,000+</p>
        </Reveal>
        <Reveal delay={0.2}>
          <p style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', fontSize: 'clamp(22px, 2.4vw, 32px)', color: '#C9A96E', margin: '16px 0 28px' }}>verified guest reviews, and counting.</p>
        </Reveal>
        <Reveal delay={0.3}>
          <p style={{ ...mono, fontSize: 11, color: 'rgba(242,237,228,0.55)', lineHeight: 2.2 }}>
            Airbnb <span style={{ color: '#C9A96E', margin: '0 10px' }}>·</span> Booking.com <span style={{ color: '#C9A96E', margin: '0 10px' }}>·</span> Expedia <span style={{ color: '#C9A96E', margin: '0 10px' }}>·</span> Hotels.com <span style={{ color: '#C9A96E', margin: '0 10px' }}>·</span> Vrbo <span style={{ color: '#C9A96E', margin: '0 10px' }}>·</span> Hopper
          </p>
        </Reveal>
      </div>
    </section>
  )
}

// ── FINAL CTA ─────────────────────────────────────────
function FinalCTA({ onBook, onOwner }) {
  return (
    <section className="r-pad" style={{ background: '#2C3E35', padding: '140px 48px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1600, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="r-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <Reveal>
            <div>
              <div className="eyebrow" style={{ color: 'rgba(201,169,110,0.7)', marginBottom: 20 }}>Plan Your Stay</div>
              <h2 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 20 }}>Ready for an<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>elevated</em> stay?</h2>
              <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: 'rgba(242,237,228,0.6)', lineHeight: 1.8, marginBottom: 36 }}>Reserve directly with us for live availability and secure, verified booking.</p>
              <button onClick={onBook} style={{ background: '#C9A96E', color: '#0D0C0A', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '18px 44px', border: 'none', cursor: 'pointer' }}>
                Check Availability →
              </button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="r-noborder" style={{ borderLeft: '1px solid rgba(201,169,110,0.2)', paddingLeft: 80 }}>
              <div className="eyebrow" style={{ color: 'rgba(201,169,110,0.7)', marginBottom: 20 }}>For Property Owners</div>
              <h2 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 20 }}>Let your property<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>work for you.</em></h2>
              <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: 'rgba(242,237,228,0.6)', lineHeight: 1.8, marginBottom: 36 }}>Join the owners who trust AirStay with more than 200 properties.</p>
              <button onClick={onOwner} style={{ background: 'transparent', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '17px 44px', border: '1px solid rgba(242,237,228,0.35)', cursor: 'pointer' }}>
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
      <Heritage />
      <ServicesSection />
      <TechSection />
      <OwnersSection onOwner={onOwner} />
      <ReviewsBand />
      <FinalCTA onBook={onBook} onOwner={onOwner} />
    </div>
  )
}
