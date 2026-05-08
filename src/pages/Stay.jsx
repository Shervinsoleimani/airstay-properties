import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import { PROPERTIES, CITIES } from '../lib/data'

export default function Stay({ onBook }) {
  const [city, setCity] = useState('All')
  const [type, setType] = useState('All')

  const filtered = PROPERTIES.filter(p =>
    (city === 'All' || p.city === city) &&
    (type === 'All' || p.type === type)
  )

  return (
    <div className="page-in" style={{ paddingTop: 120, minHeight: '100vh', background: '#FAF7F2' }}>
      <div style={{ maxWidth: 1600, margin: '0 auto', padding: '0 48px 120px' }}>

        {/* Header */}
        <div style={{ paddingTop: 48, paddingBottom: 72 }}>
          <Reveal><div className="eyebrow" style={{ marginBottom: 20 }}>Our Portfolio</div></Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-xl" style={{ color: '#0D0C0A', marginBottom: 16 }}>
              Find your<br /><em style={{ fontStyle: 'italic', color: '#2C3E35' }}>perfect</em> space.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: '#9B9590', maxWidth: 480, lineHeight: 1.8 }}>
              Boutique hotels and premium rentals across 6 countries — each curated, managed, and maintained to an uncompromising standard.
            </p>
          </Reveal>
        </div>

        {/* Filters */}
        <Reveal>
          <div style={{ display: 'flex', gap: 20, marginBottom: 48, flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: 8 }}>
              {['All', 'Montreal', 'Vancouver', 'Toronto', 'Dubai', 'Barcelona'].map(c => (
                <button key={c} onClick={() => setCity(c)}
                  style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '8px 18px', border: `1px solid ${city === c ? '#2C3E35' : 'rgba(13,12,10,0.15)'}`, background: city === c ? '#2C3E35' : 'transparent', color: city === c ? '#F2EDE4' : '#9B9590', cursor: 'pointer', transition: 'all 0.2s' }}>
                  {c === 'All' ? 'All Cities' : c}
                </button>
              ))}
            </div>
            <div style={{ width: 1, height: 24, background: 'rgba(13,12,10,0.1)' }} />
            <div style={{ display: 'flex', gap: 8 }}>
              {['All', 'Boutique Hotel', 'Short-Term', 'Long-Term'].map(t => (
                <button key={t} onClick={() => setType(t)}
                  style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '8px 18px', border: `1px solid ${type === t ? '#8B7355' : 'rgba(13,12,10,0.15)'}`, background: type === t ? '#8B7355' : 'transparent', color: type === t ? '#F2EDE4' : '#9B9590', cursor: 'pointer', transition: 'all 0.2s' }}>
                  {t === 'All' ? 'All Types' : t}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9B9590', marginBottom: 32 }}>{filtered.length} properties found</p>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.07}>
              <div className="prop-card" onClick={onBook} style={{ background: '#0D0C0A' }}>
                <div style={{ aspectRatio: '3/4', background: p.coverGradient, position: 'relative', overflow: 'hidden' }}>
                  <img src={p.images[0]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.8s cubic-bezier(0.22,1,0.36,1)' }} className="prop-card-img"
                    onError={e => { e.target.style.display = 'none' }} />
                </div>
                <div className="prop-card-overlay" />
                <div style={{ position: 'absolute', top: 18, left: 18 }}>
                  <span style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A96E', background: 'rgba(13,12,10,0.7)', backdropFilter: 'blur(8px)', padding: '4px 12px' }}>{p.tag}</span>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 24px' }}>
                  <p style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 6 }}>{p.city} · {p.neighbourhood}</p>
                  <p style={{ fontFamily: 'Playfair Display', fontSize: 22, fontWeight: 400, color: '#F2EDE4', marginBottom: 4 }}>{p.brand} {p.name}</p>
                  <p style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 300, color: 'rgba(242,237,228,0.5)', marginBottom: 12 }}>{p.type}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 300, color: 'rgba(242,237,228,0.7)' }}>From ${p.basePrice} / night</span>
                    <span style={{ fontFamily: 'DM Mono', fontSize: 10, color: '#C9A96E' }}>★ {p.rating} ({p.reviews})</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p style={{ fontFamily: 'Playfair Display', fontSize: 28, color: '#9B9590' }}>No properties match your filters.</p>
            <button onClick={() => { setCity('All'); setType('All') }} style={{ marginTop: 24, fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', background: 'none', border: 'none', color: '#2C3E35', cursor: 'pointer', borderBottom: '1px solid #2C3E35', paddingBottom: 2 }}>Clear filters</button>
          </div>
        )}
      </div>
    </div>
  )
}
