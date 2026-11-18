// Where we operate today. Add a city here when it truly opens.
export const CITIES = [
  { id: 'montreal', name: 'Montreal', country: 'Québec, Canada', status: 'Flagship' },
  { id: 'vancouver', name: 'Vancouver', country: 'British Columbia, Canada', status: 'Now Launching' },
]

// Hostaway direct-booking website (live prices, availability and checkout)
export const BOOKING_URL = 'https://book.airstayproperties.com'
export const bookingSearchUrl = ({ checkIn, checkOut, guests } = {}) => {
  if (!checkIn || !checkOut) return `${BOOKING_URL}/all-listings`
  const q = new URLSearchParams({ start: checkIn, end: checkOut, numberOfGuests: String(guests || 2) })
  return `${BOOKING_URL}/search?${q.toString()}`
}

const ALL_PROPERTIES = [
  {
    id: 'le-moyne-heritage',
    cover: '/images/le-moyne-heritage/1-tvoff.jpg',
    citq: '304411',
    name: 'Le Moyne Heritage',
    brand: 'AirStay',
    city: 'Montreal',
    country: 'Canada',
    neighbourhood: 'Old Montreal',
    type: 'Boutique Hotel',
    tag: 'Iconic',
    basePrice: 220,
    currency: 'CAD',
    bedrooms: '1–3',
    description: 'A 19th-century stone building with a private games lounge, exposed-brick suites and a billiards room.',
    coverGradient: 'linear-gradient(155deg, #5C4A2A 0%, #1A1208 100%)',
    images: Array.from({length:9}, (_,i) => `/images/le-moyne-heritage/${i+1}.jpg`),
    amenities: ['Games Lounge', 'Pool Table', 'Fireplace', 'Exposed Brick', 'Full Kitchen'],
  },
  {
    id: 'le-moyne-modern',
    cover: '/images/services/skylight-living.jpg',
    citq: '312667',
    name: 'Le Moyne Modern',
    brand: 'AirStay',
    city: 'Montreal',
    country: 'Canada',
    neighbourhood: 'Old Montreal',
    type: 'Boutique Hotel',
    tag: 'Modern Lofts',
    basePrice: 265,
    currency: 'CAD',
    bedrooms: '1–3',
    description: 'Double-height lofts, a skylight atrium and a landscaped rooftop terrace with fire pit and city panorama.',
    coverGradient: 'linear-gradient(155deg, #2C3E35 0%, #0D1A14 100%)',
    images: Array.from({length:9}, (_,i) => `/images/le-moyne-modern/${i+1}.jpg`),
    amenities: ['Rooftop Terrace', 'Fire Pit', 'Skylight', 'Marble Bathrooms', 'Resident Lounge'],
  },
  {
    id: 'bishop',
    cover: '/images/bishop/2.jpg',
    citq: '295420',
    name: 'Bishop',
    brand: 'AirStay',
    city: 'Montreal',
    country: 'Canada',
    neighbourhood: 'Bishop Street',
    type: 'Boutique Hotel',
    tag: 'Most Distinctive',
    basePrice: 195,
    currency: 'CAD',
    bedrooms: '1–2',
    description: 'Victorian grandeur meets modern luxury. Dramatic black staircase, reception desk, golden lion crest.',
    coverGradient: 'linear-gradient(155deg, #1A1A1A 0%, #0A0A0A 100%)',
    images: Array.from({length:5}, (_,i) => `/images/bishop/${i+1}.jpg`),
    amenities: ['Reception & Concierge', 'Grand Staircase', 'Exposed Brick', 'Industrial Design'],
  },
  {
    id: 'saint-paul',
    cover: '/images/saint-paul/1-top.jpg',
    citq: '316300',
    name: 'Saint-Paul',
    brand: 'AirStay',
    city: 'Montreal',
    country: 'Canada',
    neighbourhood: 'Old Montreal',
    type: 'Boutique Hotel',
    tag: 'Most Photographed',
    basePrice: 245,
    currency: 'CAD',
    bedrooms: '1–2',
    description: 'The iconic corner building with a living moss wall. Original 300-year-old stone walls inside.',
    coverGradient: 'linear-gradient(155deg, #1C3025 0%, #081510 100%)',
    images: Array.from({length:5}, (_,i) => `/images/saint-paul/${i+1}.jpg`),
    amenities: ['Living Moss Wall', 'Stone Walls', 'Walnut Kitchens', 'Old Montreal Views'],
  },
  {
    id: 'notre-dame',
    name: 'Notre-Dame',
    brand: 'AirStay',
    city: 'Montreal',
    country: 'Canada',
    neighbourhood: 'Old Montreal',
    type: 'Boutique Hotel',
    tag: 'Most Romantic',
    basePrice: 210,
    currency: 'CAD',
    bedrooms: '1',
    description: 'Candlelit garden terrace, four-poster beds, original stone walls. The most romantic address in Old Montreal.',
    coverGradient: 'linear-gradient(155deg, #3D2A1A 0%, #150D06 100%)',
    images: Array.from({length:8}, (_,i) => `/images/notre-dame/${i+1}.jpg`),
    amenities: ['Garden Terrace', 'Four-Poster Beds', 'Stone Walls', 'Gold & Black Bathrooms'],
  },
]

// Only residences with a CITQ registration are advertised for short stays.
// (Notre-Dame is kept for imagery but not listed until its registration is confirmed.)
export const PROPERTIES = ALL_PROPERTIES.filter(p => p.citq)

export const STATS = [
  { value: '200+', label: 'Properties Managed' },
  { value: '4,000+', label: 'Verified Guest Reviews' },
  { value: '6+', label: 'Global Booking Channels' },
  { value: '24/7', label: 'Guest & Owner Care' },
]

// Small (1000px) versions for cards and backgrounds; full size for hero shots.
export const sm = (path) => path.replace(/^\/images\/([^/]+)\/([^/]+)$/, '/images/sm/$1-$2')

// Full-service property care (photo-led, no icons)
export const SERVICES = [
  {
    number: '01',
    title: 'Boutique Hotel & Short-Term Management',
    short: 'Hotel & Short-Term',
    desc: 'Hotel-calibre operations for boutique hotels and furnished suites: global distribution, revenue management, 24/7 guest care and seamless keyless arrival.',
    image: '/images/services/suite-bedroom.jpg',
    link: '/services#hospitality',
  },
  {
    number: '02',
    title: 'Long-Term Leasing & Residences',
    short: 'Leasing & Residences',
    desc: 'Furnished or unfurnished homes, professionally leased and cared for, with careful tenant selection, clear leases and responsive maintenance.',
    image: '/images/saint-paul/5.jpg',
    link: '/longterm',
  },
  {
    number: '03',
    title: 'Property & Building Management',
    short: 'Building Management',
    desc: 'Complete operation of residential, commercial and public-sector buildings: vendors, budgets, compliance, amenities and transparent reporting.',
    image: '/images/services/amenities-lounge.jpg',
    link: '/services#management',
  },
  {
    number: '04',
    title: 'Cleaning & Housekeeping',
    short: 'Cleaning & Housekeeping',
    desc: 'Hotel-grade housekeeping, turnovers, deep cleaning and common-area care, delivered by trained teams to our written cleaning standards.',
    image: '/images/services/housekeeping-shower.jpg',
    link: '/services#cleaning',
  },
  {
    number: '05',
    title: 'Landscaping & Grounds Care',
    short: 'Landscaping & Grounds',
    desc: 'Courtyards, rooftop terraces, planters and green walls, thoughtfully designed and kept immaculate, so every arrival makes an impression.',
    image: '/images/services/grounds-rooftop-aerial.jpg',
    link: '/services#landscaping',
  },
  {
    number: '06',
    title: 'Maintenance & Building Care',
    short: 'Maintenance & Repairs',
    desc: 'Preventive maintenance, rapid repairs and a trusted network of qualified trades, overseen by people who understand how buildings are made.',
    image: '/images/bishop/3.jpg',
    link: '/services#maintenance',
  },
]

// Who we serve
export const SECTORS = [
  {
    title: 'Boutique Hotels',
    desc: 'Full operation or targeted support for independent hotels: front-of-house standards, housekeeping, revenue and distribution.',
    image: '/images/services/lobby-green-wall.jpg',
  },
  {
    title: 'Private Residences & Condominiums',
    desc: 'For owners, investors and condominium buildings: short-term, long-term or furnished strategies, managed end to end.',
    image: '/images/services/kitchen-island.jpg',
  },
  {
    title: 'Commercial & Mixed-Use Buildings',
    desc: 'Lobbies, amenities, common areas and tenant services kept to a hospitality standard, with clear budgets and reporting.',
    image: '/images/services/elevator-lobby.jpg',
  },
  {
    title: 'Public & Government Buildings',
    desc: 'Reliable, discreet and fully documented cleaning, grounds care, maintenance and building operations, delivered to specification.',
    image: '/images/le-moyne-heritage/facade.jpg',
  },
]

// The AirStay Standard: how we take on a property
export const PROCESS = [
  { step: '01', title: 'Assess', desc: 'A complimentary walkthrough of your property, its condition, its potential and your goals.' },
  { step: '02', title: 'Prepare', desc: 'Design, furnishing, photography, cleaning and maintenance plans, so the property is ready to perform.' },
  { step: '03', title: 'Operate', desc: 'Guests, tenants, housekeeping, grounds and repairs, handled daily by our own team and trusted trades.' },
  { step: '04', title: 'Report', desc: 'Clear monthly statements, real numbers and a dedicated manager who answers when you call.' },
]

// Every image on the site follows marketing/social/photo-standards.md (no cables, bins, TVs on, brand posters,
// street numbers or drawings). Rejected originals stay in /public/images but are no longer referenced.
export const HERO_SLIDES = [
  { image: '/images/saint-paul/1-top.jpg', caption: 'AirStay Saint-Paul · Old Montréal', position: 'center 35%' },
  { image: '/images/bishop/2.jpg', caption: 'AirStay Bishop · Downtown Montréal', position: 'center 40%' },
  { image: '/images/le-moyne-heritage/8.jpg', caption: 'Le Moyne Heritage · Old Montréal', position: 'center' },
  { image: '/images/services/landscaping-rooftop.jpg', caption: 'Rooftop gardens · Le Moyne, Old Montréal', position: 'center 60%' },
]

export const GALLERY = [
  '/images/services/landscaping-rooftop.jpg', '/images/le-moyne-heritage/9.jpg', '/images/services/kitchen-island.jpg',
  '/images/le-moyne-heritage/5.jpg', '/images/saint-paul/1-top.jpg', '/images/bishop/3.jpg',
  '/images/le-moyne-heritage/1-tvoff.jpg', '/images/services/suite-bedroom.jpg', '/images/saint-paul/5.jpg',
  '/images/services/grounds-rooftop-aerial.jpg', '/images/bishop/5-stair.jpg', '/images/le-moyne-heritage/8.jpg',
]

export const WHY_OWN = [
  { title: 'Maximum Revenue', desc: 'Dynamic, data-driven pricing adjusts your rates to market demand every day, with event and seasonal strategy built in.' },
  { title: 'Zero Hassle', desc: 'We handle guests, tenants, cleaning, maintenance, compliance and reporting. You receive a payout and a clear monthly statement.' },
  { title: 'Full Transparency', desc: 'Monthly performance reports, real numbers, and a dedicated manager who knows your property by name.' },
  { title: 'Your Asset Protected', desc: 'Verified guests with government ID, signed rental agreements, firm house rules and meticulous property care.' },
  { title: 'Maximum Exposure', desc: 'Your property is marketed across Airbnb, Booking.com, Expedia, Hotels.com, Vrbo and our own direct-booking website.' },
  { title: 'Technology-Driven', desc: 'An enterprise-grade operating platform: centralised reservations, revenue management, keyless smart access and secure payments.' },
]
