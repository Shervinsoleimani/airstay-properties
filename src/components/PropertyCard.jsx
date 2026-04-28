import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const GRADIENTS = {
  1: 'from-amber-900/40 via-stone-700/60 to-stone-900',
  2: 'from-slate-700/40 via-stone-600/50 to-stone-900',
  3: 'from-stone-600/40 via-zinc-700/50 to-stone-900',
  4: 'from-orange-900/30 via-stone-700/50 to-stone-900',
  5: 'from-teal-900/30 via-stone-700/50 to-stone-900',
  6: 'from-zinc-700/40 via-stone-600/50 to-stone-900',
}

const BG_COLORS = {
  1: '#8B6840',
  2: '#5D8A8F',
  3: '#7A6040',
  4: '#7A5030',
  5: '#5A8078',
  6: '#6B5840',
}

export default function PropertyCard({ listing, index = 0, size = 'normal' }) {
  const isLarge = size === 'large'
  const priceDisplay = listing.priceUnit === 'month'
    ? `$${listing.basePrice.toLocaleString()} / mo`
    : `From $${listing.basePrice} / night`

  return (
    <Link to={`/properties/${listing.id}`}>
      <motion.div
        className="card-property"
        whileHover={{ scale: 1.015 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Image placeholder — replace with real <img> when you have photos */}
        <div
          className={`w-full ${isLarge ? 'aspect-[4/5]' : 'aspect-[3/4]'} bg-gradient-to-br`}
          style={{ background: `linear-gradient(145deg, ${BG_COLORS[listing.id] || '#7a6040'}dd, #1a1510)` }}
        >
          {/* Noise overlay */}
          <div className="w-full h-full opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Gradient overlay */}
        <div className="card-property-overlay" />

        {/* Type badge */}
        <div className="absolute top-5 left-5">
          <span className="text-[10px] font-body font-medium tracking-[0.18em] uppercase text-cream/80 bg-ink/40 backdrop-blur-sm px-3 py-1.5">
            {listing.type}
          </span>
        </div>

        {/* Content */}
        <div className="card-property-content">
          <p className="text-[10px] font-body tracking-[0.2em] uppercase text-gold mb-2">
            {listing.city} · {listing.neighbourhood}
          </p>
          <h3 className="font-display text-2xl font-light text-cream mb-1">{listing.name}</h3>
          <div className="flex items-center justify-between mt-3">
            <span className="text-cream/60 font-body text-xs font-light">{priceDisplay}</span>
            <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-gold text-xs">★ {listing.rating}</span>
              <span className="text-cream/40 text-xs">({listing.reviewCount})</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
