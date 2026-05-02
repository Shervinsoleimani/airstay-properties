import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal, RevealLine } from '../components/Reveal'

const BUILDINGS = [
  {
    id: 'le-moyne-heritage',
    name: 'Airstay Le Moyne',
    subtitle: 'The Heritage',
    tagline: 'Where history lives between the walls.',
    neighbourhood: 'Downtown · McGill',
    type: 'Boutique Hotel',
    description: 'Housed in a stunning 19th-century stone building, Le Moyne Heritage is Old Montreal\'s most character-rich boutique hotel. Exposed brick walls, soaring ceilings, and a legendary Central Perk-inspired common lounge — this is where history and hospitality meet. Every suite tells a story.',
    highlights: ['Common Lounge & Games Room', 'Exposed Brick & Original Stone', 'Floor-to-Ceiling Windows', 'Pool Table & Fireplace', 'Fully Equipped Kitchens'],
    photos: Array.from({length: 9}, (_, i) => `/images/le-moyne-heritage/${i+1}.jpg`),
    color: '#8B6840',
  },
  {
    id: 'le-moyne-modern',
    name: 'Airstay Le Moyne',
    subtitle: 'The Modern',
    tagline: 'New-build luxury, steps from the old city.',
    neighbourhood: 'Downtown · McGill',
    type: 'Boutique Hotel',
    description: 'Built in 2024 and located directly beside its heritage twin, Le Moyne Modern is a statement in contemporary design. Polished concrete ceilings, double-height loft suites, skylight atriums, and a rooftop terrace with fire pit and panoramic Montreal skyline views. Pure, elevated living.',
    highlights: ['Rooftop Terrace & Fire Pit', 'Double-Height Loft Suites', 'Skylight Atrium', 'Marble Bathrooms', 'Resident Lounge'],
    photos: Array.from({length: 9}, (_, i) => `/images/le-moyne-modern/${i+1}.jpg`),
    color: '#4A5568',
  },
  {
    id: 'bishop',
    name: 'Airstay Bishop',
    subtitle: '',
    tagline: 'Old Montreal aristocracy, reimagined.',
    neighbourhood: 'Downtown · Bishop Street',
    type: 'Boutique Hotel',
    description: 'From the moment you step through the door and see the dramatic black Victorian staircase, you know Bishop is different. A boutique hotel with a reception desk, golden lion crest, and suites that blend industrial-chic with old-world elegance. This is Montreal at its most atmospheric.',
    highlights: ['Reception & Concierge', 'Victorian Grand Staircase', 'Exposed Brick Suites', 'Industrial-Chic Design', 'Prime Downtown Location'],
    photos: Array.from({length: 5}, (_, i) => `/images/bishop/${i+1}.jpg`),
    color: '#2D3748',
  },
  {
    id: 'saint-paul',
    name: 'Airstay Saint-Paul',
    subtitle: '',
    tagline: 'The most photographed corner in Old Montreal.',
    neighbourhood: 'Old Montreal · Saint-Paul Street',
    type: 'Boutique Hotel',
    description: 'An iconic corner building in the heart of Old Montreal, Airstay Saint-Paul is unmistakable — a living moss wall climbing three storeys, illuminated at night with warm gold light against 300-year-old stone. Inside, the suites are immaculate: walnut kitchens, original stone walls, and views straight onto the cobblestone streets.',
    highlights: ['Living Moss Wall Exterior', 'Original 300-Year-Old Stone Walls', 'Walnut & Gold Kitchens', 'Old Montreal Views', 'Steps from the Port'],
    photos: Array.from({length: 5}, (_, i) => `/images/saint-paul/${i+1}.jpg`),
    color: '#2F855A',
  },
  {
    id: 'notre-dame',
    name: 'Airstay Notre-Dame',
    subtitle: '',
    tagline: 'A private garden in the heart of the city.',
    neighbourhood: 'Old Montreal · Notre-Dame Street',
    type: 'Boutique Hotel',
    description: 'Tucked behind a centuries-old stone façade on Notre-Dame Street, Airstay Notre-Dame has a secret: a candlelit garden terrace that feels like Paris. The rooms are intimate and romantic — four-poster beds, original stone walls, black-and-gold bathrooms, and yellow velvet accents throughout.',
    highlights: ['Private Candlelit Garden Terrace', 'Four-Poster Beds', 'Original Stone Walls', 'Gold & Black Bathrooms', 'Yellow Velvet Accents'],
    photos: Array.from({length: 8}, (_, i) => `/images/notre-dame/${i+1}.jpg`),
    color: '#744210',
  },
]

function PhotoGallery({ photos, name }) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(null)

  return (
    <div>
      {/* Main photo */}
      <div
        className="relative overflow-hidden cursor-pointer"
        style={{ aspectRatio: '16/9' }}
        onClick={() => setLightbox(active)}
      >
        <motion.img
          key={active}
          src={photos[active]}
          alt={name}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onError={(e) => { e.target.style.background = '#2a2520'; e.target.style.display = 'block' }}
        />
        <div className="absolute bottom-4 right-4 bg-ink/60 backdrop-blur-sm text-cream/70 text-xs font-body tracking-wider px-3 py-1.5">
          {active + 1} / {photos.length}
        </div>
        <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 hover:opacity-100 transition-opacity">
          <button onClick={(e) => { e.stopPropagation(); setActive(a => Math.max(0, a-1)) }}
            className="w-10 h-10 bg-ink/50 backdrop-blur-sm text-cream flex items-center justify-center text-lg hover:bg-ink/80 transition-colors">‹</button>
          <button onClick={(e) => { e.stopPropagation(); setActive(a => Math.min(photos.length-1, a+1)) }}
            className="w-10 h-10 bg-ink/50 backdrop-blur-sm text-cream flex items-center justify-center text-lg hover:bg-ink/80 transition-colors">›</button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
        {photos.map((photo, i) => (
          <button key={i} onClick={() => setActive(i)}
            className={`flex-shrink-0 w-16 h-12 overflow-hidden transition-all duration-200 ${active === i ? 'ring-2 ring-gold' : 'opacity-50 hover:opacity-80'}`}>
            <img src={photo} alt="" className="w-full h-full object-cover"
              onError={(e) => { e.target.parentElement.style.background = '#2a2520' }} />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 bg-ink/95 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={photos[lightbox]}
              alt={name}
              className="max-w-full max-h-full object-contain"
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
            />
            <button onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-cream/60 hover:text-cream text-3xl font-light">✕</button>
            <button onClick={e => { e.stopPropagation(); setLightbox(l => Math.max(0, l-1)) }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-cream/60 hover:text-cream text-4xl font-light">‹</button>
            <button onClick={e => { e.stopPropagation(); setLightbox(l => Math.min(photos.length-1, l+1)) }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-cream/60 hover:text-cream text-4xl font-light">›</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Montreal({ onBookNow }) {
  return (
    <div className="page-enter pt-32 pb-24">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">

        {/* Header */}
        <Reveal>
          <div className="eyebrow">Montreal Collection</div>
          <h1 className="heading-display text-ink mt-2 mb-6">
            Five buildings.<br />One <em className="italic text-gold">city.</em>
          </h1>
          <p className="font-body font-light text-muted text-base max-w-xl mb-16 leading-relaxed">
            Our Montreal portfolio spans five distinct boutique hotels — each with its own character, architecture, and story. From heritage stone buildings to brand-new 2024 construction, all in the heart of the city.
          </p>
        </Reveal>

        <RevealLine className="mb-20" />

        {/* Buildings */}
        {BUILDINGS.map((building, index) => (
          <div key={building.id} id={building.id} className="mb-28">
            <div className={`grid md:grid-cols-2 gap-16 items-start ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>

              {/* Photos */}
              <Reveal delay={0.1} direction={index % 2 === 1 ? 'right' : 'left'}
                className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <PhotoGallery photos={building.photos} name={building.name} />
              </Reveal>

              {/* Info */}
              <Reveal delay={0.2} direction={index % 2 === 1 ? 'left' : 'right'}
                className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <div>
                  {/* Type badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-body text-[10px] tracking-[0.25em] uppercase text-gold">{building.type}</span>
                    <span className="text-gold/30">·</span>
                    <span className="font-body text-[10px] tracking-[0.15em] uppercase text-muted">{building.neighbourhood}</span>
                  </div>

                  {/* Name */}
                  <h2 className="heading-lg text-ink mb-1">{building.name}</h2>
                  {building.subtitle && (
                    <p className="font-display text-2xl font-light italic text-gold mb-4">— {building.subtitle}</p>
                  )}
                  <p className="font-display text-xl font-light italic text-muted mb-6">"{building.tagline}"</p>

                  {/* Description */}
                  <p className="font-body font-light text-muted text-sm leading-relaxed mb-8">{building.description}</p>

                  {/* Highlights */}
                  <div className="mb-8">
                    <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-4">Highlights</p>
                    <ul className="space-y-2">
                      {building.highlights.map(h => (
                        <li key={h} className="flex items-center gap-3 font-body text-sm text-ink">
                          <span className="w-4 h-px bg-gold flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-4">
                    <button onClick={onBookNow} className="btn-primary">Book This Building</button>
                    <button onClick={onBookNow} className="btn-ghost">Check Availability →</button>
                  </div>
                </div>
              </Reveal>
            </div>

            {index < BUILDINGS.length - 1 && <RevealLine className="mt-28" />}
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="text-center py-20 border-t border-gold/10">
          <Reveal>
            <h3 className="heading-lg text-ink mb-4">Not sure which building?</h3>
            <p className="font-body font-light text-muted mb-8 max-w-md mx-auto">Tell us your dates and we'll match you with the perfect space across all five properties.</p>
            <button onClick={onBookNow} className="btn-primary">Find My Perfect Stay</button>
          </Reveal>
        </div>

      </div>
    </div>
  )
}
