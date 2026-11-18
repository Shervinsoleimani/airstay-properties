import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Reveal, FadeIn } from '../components/Reveal'
import { PROPERTIES, STATS, SERVICES, SECTORS, PROCESS, HERO_SLIDES, GALLERY, BOOKING_URL, bookingSearchUrl, sm } from '../lib/data'

const EASE = [0.22, 1, 0.36, 1]
const mono = { fontFamily: 'DM Mono', letterSpacing: '0.18em', textTransform: 'uppercase' }

// Animated number ("4,000+" counts up when it scrolls into view)
function Counter({ value }) {
  const m = /^([\d,]+)(\D*)$/.exec(value)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView || !m) return
    const target = parseInt(m[1].replace(/,/g, ''), 10)
    const start = performance.now()
    let raf
    const tick = (t) => {
      const p = Math.min(1, (t - start) / 1800)
      setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView])
  if (!m) return <span ref={ref}>{value}</span>
  return <span ref={ref}>{n.toLocaleString('en-US')}{m[2]}</span>
}

// ── HERO: cinematic slideshow + reservation bar ─────────
function Hero({ onOwner }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 160])
  const [i, setI] = useState(0)
  const [dates, setDates] = useState({ in: '', out: '' })
  const [guests, setGuests] = useState(2)
  const today = new Date().toISOString().split('T')[0]

  useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % HERO_SLIDES.length), 6500)
    return () => clearInterval(t)
  }, [])
  useEffect(() => { const img = new Image(); img.src = HERO_SLIDES[(i + 1) % HERO_SLIDES.length].image }, [i])

  const search = (e) => {
    e.preventDefault()
    const ok = dates.in && dates.out && dates.out > dates.in
    window.location.href = ok ? bookingSearchUrl({ checkIn: dates.in, checkOut: dates.out, guests }) : `${BOOKING_URL}/all-listings`
  }
  const slide = HERO_SLIDES[i]
  const field = { background: 'transparent', border: 'none', outline: 'none', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, width: '100%', colorScheme: 'dark', padding: '4px 0' }

  return (
    <section style={{ minHeight: '100vh', background: '#0D0C0A', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
      <motion.div style={{ position: 'absolute', inset: '-8% 0 0 0', y }}>
        <AnimatePresence>
          <motion.div key={i}
            initial={{ opacity: 0, scale: 1.14 }} animate={{ opacity: 1, scale: 1.02 }} exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.8, ease: 'easeInOut' }, scale: { duration: 9, ease: 'linear' } }}
            style={{ position: 'absolute', inset: 0, backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: slide.position }} />
        </AnimatePresence>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13,12,10,0.9) 0%, rgba(13,12,10,0.62) 48%, rgba(13,12,10,0.3) 100%), linear-gradient(to top, rgba(13,12,10,0.96) 0%, transparent 50%)' }} />
      </motion.div>

      <div className="r-pad" style={{ position: 'relative', zIndex: 10, width: '100%', padding: '170px 48px 64px', maxWidth: 1600, margin: '0 auto' }}>
        <motion.div className="eyebrow" style={{ color: '#C9A96E', marginBottom: 30 }}
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          Luxury Hospitality · Property &amp; Building Management
        </motion.div>

        {['Where luxury', 'feels like', 'home.'].map((line, k) => (
          <div key={line} style={{ overflow: 'hidden', marginBottom: k === 2 ? 30 : 6 }}>
            <motion.h1 className="heading-hero"
              style={k === 1 ? { color: 'transparent', WebkitTextStroke: '1px #C9A96E' } : { color: '#F2EDE4' }}
              initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ duration: 1.1, delay: 0.3 + k * 0.15, ease: EASE }}>
              {line}
            </motion.h1>
          </div>
        ))}

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          style={{ fontFamily: 'DM Sans', fontSize: 16, fontWeight: 300, color: 'rgba(242,237,228,0.75)', lineHeight: 1.8, maxWidth: 560, marginBottom: 40 }}>
          Boutique suites in Old Montréal, and complete care for residences, hotels and buildings, from housekeeping and landscaping to full building management.
        </motion.p>

        {/* Reservation bar */}
        <motion.form onSubmit={search} className="hero-book r-two"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.05 }}>
          <label className="hero-book-cell">
            <span style={{ ...mono, fontSize: 9, color: 'rgba(201,169,110,0.85)' }}>Arrival</span>
            <input type="date" min={today} value={dates.in} onChange={e => setDates({ ...dates, in: e.target.value })} style={field} />
          </label>
          <label className="hero-book-cell">
            <span style={{ ...mono, fontSize: 9, color: 'rgba(201,169,110,0.85)' }}>Departure</span>
            <input type="date" min={dates.in || today} value={dates.out} onChange={e => setDates({ ...dates, out: e.target.value })} style={field} />
          </label>
          <label className="hero-book-cell">
            <span style={{ ...mono, fontSize: 9, color: 'rgba(201,169,110,0.85)' }}>Guests</span>
            <select value={guests} onChange={e => setGuests(Number(e.target.value))} style={{ ...field, appearance: 'none', cursor: 'pointer' }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map(n => <option key={n} value={n} style={{ color: '#0D0C0A' }}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
            </select>
          </label>
          <button type="submit" style={{ background: '#C9A96E', color: '#0D0C0A', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0 36px', minHeight: 64, border: 'none', cursor: 'pointer' }}>
            Check Availability
          </button>
        </motion.form>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 34, gap: 24, flexWrap: 'wrap' }}>
          <button onClick={onOwner}
            style={{ background: 'transparent', color: 'rgba(242,237,228,0.85)', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', borderBottom: '1px solid rgba(242,237,228,0.35)', paddingBottom: 3 }}>
            Own a property or building? Partner with us →
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <AnimatePresence mode="wait">
              <motion.span key={slide.caption} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.5 }}
                style={{ ...mono, fontSize: 10, color: 'rgba(242,237,228,0.6)' }}>{slide.caption}</motion.span>
            </AnimatePresence>
            <div style={{ display: 'flex', gap: 6 }}>
              {HERO_SLIDES.map((_, k) => (
                <button key={k} aria-label={`Show image ${k + 1}`} onClick={() => setI(k)}
                  style={{ width: k === i ? 34 : 14, height: 2, border: 'none', padding: 0, background: k === i ? '#C9A96E' : 'rgba(242,237,228,0.3)', cursor: 'pointer', transition: 'all 0.5s' }} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ── MARQUEE ───────────────────────────────────────────
function MarqueeBar() {
  const items = ['Boutique Hotels', 'Short-Term Stays', 'Long-Term Residences', 'Building Management', 'Cleaning & Housekeeping', 'Landscaping & Grounds', 'Maintenance', 'Montréal', 'Vancouver']
  const doubled = [...items, ...items, ...items]
  return (
    <div style={{ background: '#2C3E35', padding: '14px 0', overflow: 'hidden' }}>
      <div className="marquee-inner">
        {doubled.map((item, k) => (
          <span key={k} style={{ ...mono, fontSize: 11, color: 'rgba(242,237,228,0.75)', padding: '0 28px', whiteSpace: 'nowrap' }}>
            {item}<span style={{ color: '#C9A96E', marginLeft: 56 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ── INTRO + NUMBERS ───────────────────────────────────
function Intro() {
  return (
    <section className="r-pad" style={{ background: '#FAF7F2', padding: '130px 48px 110px' }}>
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        <div className="r-stack" style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 80, alignItems: 'end', marginBottom: 90 }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 24 }}>One House, Every Detail</div>
            <h2 className="heading-xl" style={{ color: '#0D0C0A' }}>
              From a single suite<br />to an <em style={{ fontStyle: 'italic', color: '#2C3E35' }}>entire building.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 16, fontWeight: 300, color: '#6F6A64', lineHeight: 1.9 }}>
              AirStay takes care of everything a property needs: guests and tenants, housekeeping and cleaning, landscaping and grounds, maintenance and full building operations. One accountable team, one standard, for boutique hotels, private owners, commercial buildings and public-sector properties.
            </p>
          </Reveal>
        </div>
        <div className="r-two" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid rgba(13,12,10,0.1)' }}>
          {STATS.map(({ value, label }, k) => (
            <Reveal key={label} delay={k * 0.08}>
              <div style={{ padding: '36px 0 0' }}>
                <p style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(44px, 5vw, 72px)', fontWeight: 400, color: '#2C3E35', lineHeight: 1 }}><Counter value={value} /></p>
                <p style={{ ...mono, fontSize: 10, letterSpacing: '0.15em', color: '#9B9590', marginTop: 14 }}>{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── FEATURED RESIDENCES ───────────────────────────────
function FeaturedProperties({ onBook }) {
  return (
    <section className="r-pad" style={{ background: '#F2EDE4', padding: '120px 48px' }}>
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
            <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: '#6F6A64', lineHeight: 1.9, maxWidth: 420 }}>
              Heritage stone buildings, restored lofts and modern suites in Old Montréal and downtown, each run to the standard of a boutique hotel.
            </p>
          </Reveal>
        </div>

        <div className="r-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {PROPERTIES.slice(0, 4).map((p, k) => (
            <Reveal key={p.id} delay={k * 0.08}>
              <div className="prop-card" onClick={onBook} style={{ background: p.coverGradient }}>
                <div className="prop-card-img" style={{ aspectRatio: '4/5', background: p.coverGradient, position: 'relative' }}>
                  <img src={sm(p.images[0])} alt={`AirStay ${p.name}, ${p.neighbourhood}`} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
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
                    <span style={{ ...mono, fontSize: 9, color: 'rgba(242,237,228,0.55)' }}>CITQ {p.citq}</span>
                    <span style={{ ...mono, fontSize: 10, color: '#C9A96E' }}>Rates &amp; availability →</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.4}>
            <a href={`${BOOKING_URL}/all-listings`} className="svc-card" style={{ aspectRatio: '4/5', background: '#0D0C0A', minHeight: 0, height: '100%' }}>
              <img className="svc-card-bg" src={sm('/images/le-moyne-modern/6.jpg')} alt="" loading="lazy" style={{ opacity: 0.35 }} />
              <div style={{ position: 'relative', padding: '40px 32px' }}>
                <p style={{ ...mono, fontSize: 10, letterSpacing: '0.2em', color: '#C9A96E', marginBottom: 16 }}>35 Residences · Live Availability</p>
                <p style={{ fontFamily: 'Playfair Display', fontSize: 34, fontWeight: 400, color: '#F2EDE4', lineHeight: 1.15, marginBottom: 24 }}>View every<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>residence.</em></p>
                <span style={{ fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F2EDE4', borderBottom: '1px solid rgba(242,237,228,0.35)', paddingBottom: 3 }}>Browse &amp; reserve →</span>
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.5}>
            <Link to="/longterm" className="svc-card" style={{ aspectRatio: '4/5', background: '#0D0C0A', minHeight: 0, height: '100%' }}>
              <img className="svc-card-bg" src={sm('/images/saint-paul/5.jpg')} alt="A furnished long-term residence" loading="lazy" />
              <div className="svc-card-shade" />
              <div style={{ position: 'relative', padding: '40px 32px' }}>
                <p style={{ ...mono, fontSize: 10, letterSpacing: '0.2em', color: '#C9A96E', marginBottom: 16 }}>Furnished or Unfurnished</p>
                <p style={{ fontFamily: 'Playfair Display', fontSize: 34, fontWeight: 400, color: '#F2EDE4', lineHeight: 1.15, marginBottom: 24 }}>Long-term<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>residences.</em></p>
                <span style={{ fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F2EDE4', borderBottom: '1px solid rgba(242,237,228,0.35)', paddingBottom: 3 }}>Find your home →</span>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ── FULL-SERVICE PROPERTY CARE (photo cards) ──────────
function ServicesSection() {
  return (
    <section className="r-pad" style={{ background: '#FAF7F2', padding: '120px 48px' }}>
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        <div className="r-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', marginBottom: 72 }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Full-Service Property Care</div>
            <h2 className="heading-xl" style={{ color: '#0D0C0A' }}>
              We take care of<br /><em style={{ fontStyle: 'italic', color: '#2C3E35' }}>everything.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: '#6F6A64', lineHeight: 1.9 }}>
              Six disciplines, one accountable team. Whether you need a single service or complete management, every property in our care receives the attention of a five-star house.
            </p>
          </Reveal>
        </div>

        <div className="r-two" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {SERVICES.map((s, k) => (
            <Reveal key={s.number} delay={(k % 3) * 0.1}>
              <Link to={s.link} className="svc-card">
                <img className="svc-card-bg" src={sm(s.image)} alt={s.title} loading="lazy" decoding="async" />
                <div className="svc-card-shade" />
                <div style={{ position: 'relative', padding: '40px 34px' }}>
                  <p style={{ ...mono, fontSize: 11, letterSpacing: '0.2em', color: 'rgba(201,169,110,0.9)', marginBottom: 18 }}>{s.number}</p>
                  <h3 style={{ fontFamily: 'Playfair Display', fontSize: 27, fontWeight: 400, color: '#F2EDE4', marginBottom: 14, lineHeight: 1.2 }}>{s.title}</h3>
                  <p style={{ fontFamily: 'DM Sans', fontSize: 13.5, fontWeight: 300, color: 'rgba(242,237,228,0.75)', lineHeight: 1.8 }}>{s.desc}</p>
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

// ── SECTORS ───────────────────────────────────────────
function SectorsSection({ onOwner }) {
  return (
    <section className="r-pad" style={{ background: '#0D0C0A', padding: '130px 48px' }}>
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        <div className="r-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', marginBottom: 72 }}>
          <Reveal>
            <div className="eyebrow" style={{ color: '#C9A96E', marginBottom: 20 }}>Who We Serve</div>
            <h2 className="heading-xl" style={{ color: '#F2EDE4' }}>
              Boutique hotels to<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>public buildings.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: 'rgba(242,237,228,0.6)', lineHeight: 1.9, marginBottom: 28 }}>
              Private owners, investors, independent hotels, commercial landlords and public-sector organisations trust us with the places that matter to them.
            </p>
            <button onClick={onOwner} style={{ background: 'transparent', color: '#C9A96E', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', border: 'none', borderBottom: '1px solid rgba(201,169,110,0.5)', paddingBottom: 3, cursor: 'pointer' }}>
              Request a proposal →
            </button>
          </Reveal>
        </div>
        <div className="r-two" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
          {SECTORS.map((s, k) => (
            <Reveal key={s.title} delay={k * 0.1}>
              <div className="svc-card sector-card">
                <img className="svc-card-bg" src={sm(s.image)} alt={s.title} loading="lazy" decoding="async" />
                <div className="svc-card-shade" />
                <div style={{ position: 'relative', padding: '36px 30px' }}>
                  <p style={{ ...mono, fontSize: 10, color: 'rgba(201,169,110,0.9)', marginBottom: 14 }}>0{k + 1}</p>
                  <h3 style={{ fontFamily: 'Playfair Display', fontSize: 25, fontWeight: 400, color: '#F2EDE4', marginBottom: 12, lineHeight: 1.2 }}>{s.title}</h3>
                  <p className="sector-desc" style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: 'rgba(242,237,228,0.75)', lineHeight: 1.75 }}>{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── HERITAGE (story teaser) ───────────────────────────
function Heritage() {
  return (
    <section className="r-pad" style={{ background: '#FAF7F2', padding: '0 48px' }}>
      <div className="r-stack" style={{ maxWidth: 1600, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, alignItems: 'stretch' }}>
        <FadeIn>
          <div style={{ position: 'relative', minHeight: 600, height: '100%', overflow: 'hidden' }}>
            <img src={sm('/images/le-moyne-heritage/4.jpg')} alt="A heritage stone building in Old Montréal" loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </FadeIn>
        <div style={{ padding: '120px 0 120px 80px' }} className="r-noborder">
          <Reveal><div className="eyebrow" style={{ marginBottom: 24 }}>Our Heritage</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-xl" style={{ color: '#0D0C0A', marginBottom: 28 }}>
              Built by people<br />who <em style={{ fontStyle: 'italic', color: '#2C3E35' }}>build.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: '#6F6A64', lineHeight: 1.9, marginBottom: 20, maxWidth: 520 }}>
              AirStay grew out of a family background in building development, construction management and engineering. We learned early that a great building is never an accident: it is planned, engineered and cared for, detail by detail.
            </p>
            <p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: '#6F6A64', lineHeight: 1.9, marginBottom: 40, maxWidth: 520 }}>
              Today we bring that same discipline to hospitality and property care, looking after every property as if we had built it ourselves.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link to="/about" style={{ fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2C3E35', textDecoration: 'none', borderBottom: '1px solid rgba(44,62,53,0.4)', paddingBottom: 3 }}>
              Read our story →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ── THE AIRSTAY STANDARD (process) ────────────────────
function Process() {
  return (
    <section className="r-pad" style={{ background: '#F2EDE4', padding: '120px 48px' }}>
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <Reveal><div className="eyebrow" style={{ justifyContent: 'center', marginBottom: 20 }}>The AirStay Standard</div></Reveal>
          <Reveal delay={0.1}><h2 className="heading-xl" style={{ color: '#0D0C0A' }}>Four steps to a property<br /><em style={{ fontStyle: 'italic', color: '#2C3E35' }}>you never worry about.</em></h2></Reveal>
        </div>
        <div className="r-two" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 48 }}>
          {PROCESS.map((p, k) => (
            <Reveal key={p.step} delay={k * 0.12}>
              <div>
                <div style={{ height: 1, background: 'rgba(13,12,10,0.12)', marginBottom: 32, position: 'relative' }}>
                  <motion.span initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 1.4, delay: 0.3 + k * 0.25, ease: EASE }}
                    style={{ position: 'absolute', left: 0, top: 0, height: 1, background: '#C9A96E', display: 'block' }} />
                </div>
                <p style={{ fontFamily: 'Playfair Display', fontSize: 64, fontWeight: 400, color: 'rgba(44,62,53,0.18)', lineHeight: 1, marginBottom: 16 }}>{p.step}</p>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: 28, fontWeight: 400, color: '#0D0C0A', marginBottom: 14 }}>{p.title}</h3>
                <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: '#6F6A64', lineHeight: 1.8 }}>{p.desc}</p>
              </div>
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
    { name: 'Keyless Arrival', role: 'Smart Access & Security', desc: 'Secure smart locks and unique codes for every stay, delivered securely before arrival.' },
    { name: 'Verified & Secure', role: 'Payments & Identity', desc: 'Bank-grade payment processing and identity verification for direct reservations.' },
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
          {techs.map((t, k) => (
            <Reveal key={t.name} delay={k * 0.1}>
              <div style={{ background: '#0D0C0A', padding: '48px 36px', height: '100%' }}>
                <p style={{ ...mono, fontSize: 10, letterSpacing: '0.15em', color: 'rgba(201,169,110,0.6)', marginBottom: 16 }}>{t.role}</p>
                <p style={{ fontFamily: 'Playfair Display', fontSize: 26, fontWeight: 400, color: '#F2EDE4', marginBottom: 16, lineHeight: 1.2 }}>{t.name}</p>
                <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: 'rgba(242,237,228,0.5)', lineHeight: 1.8 }}>{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p style={{ textAlign: 'center', marginTop: 40, fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: 'rgba(155,149,144,0.75)' }}>
            Technology or hospitality partner? <Link to="/contact" style={{ color: '#C9A96E', textDecoration: 'none', borderBottom: '1px solid rgba(201,169,110,0.4)' }}>Let’s talk.</Link>
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
            <Reveal><div className="eyebrow" style={{ marginBottom: 20 }}>For Owners &amp; Investors</div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading-xl" style={{ color: '#0D0C0A', marginBottom: 16 }}>
                Your property.<br />Our <em style={{ fontStyle: 'italic', color: '#2C3E35' }}>expertise.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: '#6F6A64', lineHeight: 1.9, marginBottom: 48 }}>
                Short-term, long-term, furnished or unfurnished, a single condo or an entire building: we recommend the strategy that earns you the most, then run it with complete transparency.
              </p>
            </Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 52 }}>
              {[
                ['200+', 'Properties under our management'],
                ['4,000+', 'Guest reviews across Airbnb, Booking.com, Expedia, Hotels.com and Vrbo'],
                ['24/7', 'Guest, tenant and owner care'],
                ['1', 'Dedicated manager who knows your property by name'],
              ].map(([value, label], k) => (
                <Reveal key={label} delay={0.1 + k * 0.07}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, paddingTop: 20, borderTop: '1px solid rgba(13,12,10,0.08)' }}>
                    <span style={{ fontFamily: 'Playfair Display', fontSize: 40, fontWeight: 400, color: '#2C3E35', minWidth: 120 }}><Counter value={value} /></span>
                    <span style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: '#6F6A64' }}>{label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <button onClick={onOwner} style={{ background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '18px 44px', border: 'none', cursor: 'pointer' }}>
                Request a Complimentary Assessment →
              </button>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <div style={{ position: 'relative', overflow: 'hidden', minHeight: 600, display: 'flex', alignItems: 'flex-end' }}>
              <img src={sm('/images/le-moyne-heritage/9.jpg')} alt="" loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,12,10,0.95) 10%, rgba(13,12,10,0.4) 60%, rgba(13,12,10,0.15))' }} />
              <div style={{ position: 'relative', padding: '56px' }} className="r-pad">
                <p style={{ fontFamily: 'Playfair Display', fontSize: 34, fontWeight: 400, color: '#F2EDE4', lineHeight: 1.25, marginBottom: 32 }}>
                  “We care for every property as if we had <em style={{ fontStyle: 'italic', color: '#C9A96E' }}>built it ourselves</em>, because that is where we come from.”
                </p>
                <div style={{ height: 1, background: 'rgba(201,169,110,0.3)', marginBottom: 24 }} />
                <p style={{ ...mono, fontSize: 10, letterSpacing: '0.2em', color: 'rgba(242,237,228,0.65)' }}>Shervin Soleimani · Founder, AirStay Properties</p>
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
    <section className="r-pad" style={{ position: 'relative', overflow: 'hidden', padding: '150px 48px' }}>
      <img src={sm('/images/notre-dame/1.jpg')} alt="" loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,12,10,0.78)' }} />
      <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
        <Reveal><div className="eyebrow" style={{ color: '#C9A96E', justifyContent: 'center', marginBottom: 24 }}>Trusted by Guests</div></Reveal>
        <Reveal delay={0.1}>
          <p style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(64px, 10vw, 140px)', fontWeight: 400, color: '#F2EDE4', lineHeight: 1 }}><Counter value="4,000+" /></p>
        </Reveal>
        <Reveal delay={0.2}>
          <p style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', fontSize: 'clamp(22px, 2.4vw, 32px)', color: '#C9A96E', margin: '16px 0 28px' }}>verified guest reviews, and counting.</p>
        </Reveal>
        <Reveal delay={0.3}>
          <p style={{ ...mono, fontSize: 11, color: 'rgba(242,237,228,0.6)', lineHeight: 2.2 }}>
            {['Airbnb', 'Booking.com', 'Expedia', 'Hotels.com', 'Vrbo', 'Hopper'].map((n, k) => (
              <span key={n}>{k > 0 && <span style={{ color: '#C9A96E', margin: '0 10px' }}>·</span>}{n}</span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

// ── GALLERY STRIP ─────────────────────────────────────
function Gallery() {
  const items = [...GALLERY, ...GALLERY]
  return (
    <section style={{ background: '#0D0C0A', padding: '110px 0 120px', overflow: 'hidden' }}>
      <div className="r-pad" style={{ maxWidth: 1600, margin: '0 auto 56px', padding: '0 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
        <Reveal>
          <div className="eyebrow" style={{ color: '#C9A96E', marginBottom: 18 }}>A Glimpse Inside</div>
          <h2 className="heading-lg" style={{ color: '#F2EDE4' }}>Spaces we <em style={{ fontStyle: 'italic', color: '#C9A96E' }}>care for.</em></h2>
        </Reveal>
        <Reveal delay={0.15}>
          <a href={`${BOOKING_URL}/all-listings`} style={{ fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9A96E', textDecoration: 'none', borderBottom: '1px solid rgba(201,169,110,0.4)', paddingBottom: 3 }}>Explore residences →</a>
        </Reveal>
      </div>
      <div className="gallery-track">
        {items.map((src, k) => (
          <img key={k} src={sm(src)} alt="" loading="lazy" decoding="async" className="gallery-img" />
        ))}
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
              <div className="eyebrow" style={{ color: 'rgba(201,169,110,0.75)', marginBottom: 20 }}>Plan Your Stay</div>
              <h2 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 20 }}>Ready for an<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>elevated</em> stay?</h2>
              <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: 'rgba(242,237,228,0.65)', lineHeight: 1.8, marginBottom: 36 }}>Reserve directly with us for live availability and a secure, verified booking.</p>
              <button onClick={onBook} style={{ background: '#C9A96E', color: '#0D0C0A', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '18px 44px', border: 'none', cursor: 'pointer' }}>
                Check Availability →
              </button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="r-noborder" style={{ borderLeft: '1px solid rgba(201,169,110,0.2)', paddingLeft: 80 }}>
              <div className="eyebrow" style={{ color: 'rgba(201,169,110,0.75)', marginBottom: 20 }}>For Owners &amp; Buildings</div>
              <h2 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 20 }}>Let us take care<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>of everything.</em></h2>
              <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: 'rgba(242,237,228,0.65)', lineHeight: 1.8, marginBottom: 36 }}>Join the owners and organisations who trust AirStay with more than 200 properties.</p>
              <button onClick={onOwner} style={{ background: 'transparent', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '17px 44px', border: '1px solid rgba(242,237,228,0.35)', cursor: 'pointer' }}>
                Request a Proposal →
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
      <Hero onOwner={onOwner} />
      <MarqueeBar />
      <Intro />
      <FeaturedProperties onBook={onBook} />
      <ServicesSection />
      <SectorsSection onOwner={onOwner} />
      <Heritage />
      <Process />
      <TechSection />
      <OwnersSection onOwner={onOwner} />
      <ReviewsBand />
      <Gallery />
      <FinalCTA onBook={onBook} onOwner={onOwner} />
    </div>
  )
}
