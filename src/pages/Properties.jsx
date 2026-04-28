import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import PropertyCard from '../components/PropertyCard'
import { DEMO_LISTINGS } from '../lib/hostaway'

export default function Properties({ onBookNow }) {
  const [city, setCity] = useState('all')
  const [type, setType] = useState('all')

  const filtered = DEMO_LISTINGS.filter(l =>
    (city === 'all' || l.city === city) &&
    (type === 'all' || l.type === type)
  )

  return (
    <div className="page-enter pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <Reveal>
          <div className="eyebrow">Our Portfolio</div>
          <h1 className="heading-display text-ink mt-2 mb-6">
            Find your<br /><em className="italic text-gold">perfect</em> space.
          </h1>
          <p className="font-body font-light text-muted text-base max-w-md mb-14">
            Every property is personally curated, professionally maintained, and ready for an exceptional stay.
          </p>
        </Reveal>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          <div className="flex gap-2 mr-6">
            {['all', 'Vancouver', 'Montreal'].map(c => (
              <button key={c} onClick={() => setCity(c)}
                className={`text-xs tracking-widest uppercase font-body px-5 py-2.5 border transition-all duration-200 ${city === c ? 'border-gold bg-gold text-cream' : 'border-gold/30 text-muted hover:border-gold'}`}>
                {c === 'all' ? 'All Cities' : c}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {['all', 'Boutique Hotel', 'Short-Term', 'Long-Term'].map(t => (
              <button key={t} onClick={() => setType(t)}
                className={`text-xs tracking-widest uppercase font-body px-5 py-2.5 border transition-all duration-200 ${type === t ? 'border-ink bg-ink text-cream' : 'border-ink/20 text-muted hover:border-ink'}`}>
                {t === 'all' ? 'All Types' : t}
              </button>
            ))}
          </div>
        </div>

        <p className="font-body text-xs text-muted mb-8">{filtered.length} properties</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {filtered.map((listing, i) => (
            <Reveal key={listing.id} delay={i * 0.08}>
              <PropertyCard listing={listing} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
