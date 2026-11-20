// Where we operate today. Add a city here when it truly opens.
export const CITIES = [
  { id: 'montreal', name: 'Montréal', country: 'Québec, Canada', status: 'Flagship' },
  { id: 'vancouver', name: 'Vancouver', country: 'British Columbia, Canada', status: 'Owner enquiries open' },
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
    city: 'Montréal',
    country: 'Canada',
    neighbourhood: 'Old Montréal',
    type: 'Boutique Hotel',
    tag: 'Brick lofts',
    basePrice: 220,
    currency: 'CAD',
    bedrooms: '1–3',
    description: 'Bare brick, high ceilings and tall windows onto Old Montréal stone. Four-bedroom lofts over two floors, one with a pool table by the fire.',
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
    city: 'Montréal',
    country: 'Canada',
    neighbourhood: 'Old Montréal',
    type: 'Boutique Hotel',
    tag: 'Suites & penthouse',
    basePrice: 265,
    currency: 'CAD',
    bedrooms: '1–3',
    description: 'Modern suites, a gym on the lower level, and the Penthouse: a pool table under the skylight and a private rooftop facing downtown.',
    coverGradient: 'linear-gradient(155deg, #2C3E35 0%, #0D1A14 100%)',
    images: Array.from({length:9}, (_,i) => `/images/le-moyne-modern/${i+1}.jpg`),
    amenities: ['Gym', 'Penthouse Skylight', 'Pool Table (Penthouse)', 'Private Rooftop (Penthouse)', 'Fire Table (Penthouse)'],
  },
  {
    id: 'bishop',
    cover: '/images/bishop/3.jpg',
    citq: '295420',
    name: 'Bishop',
    brand: 'AirStay',
    city: 'Montréal',
    country: 'Canada',
    neighbourhood: 'Downtown',
    type: 'Boutique Hotel',
    tag: 'Two residences',
    basePrice: 195,
    currency: 'CAD',
    bedrooms: '1–2',
    description: 'Black wood panelling, a staircase of turned balusters under a skylight, and a gold lion at the door. Crescent Street is one block over.',
    coverGradient: 'linear-gradient(155deg, #1A1A1A 0%, #0A0A0A 100%)',
    images: Array.from({length:5}, (_,i) => `/images/bishop/${i+1}.jpg`),
    amenities: ['Reception Desk', 'Turned-Baluster Staircase', 'Skylight', 'Exposed Brick'],
  },
  {
    id: 'saint-paul',
    cover: '/images/saint-paul/1-top.jpg',
    citq: '316300',
    name: 'Saint-Paul',
    brand: 'AirStay',
    city: 'Montréal',
    country: 'Canada',
    neighbourhood: 'Old Montréal',
    type: 'Boutique Hotel',
    tag: 'Stone-wall lofts',
    basePrice: 245,
    currency: 'CAD',
    bedrooms: '1–2',
    description: 'A corner building with a green wall at street level. Lofts with stone walls and tall black-framed windows, and a top-floor loft with its own pool table.',
    coverGradient: 'linear-gradient(155deg, #1C3025 0%, #081510 100%)',
    images: Array.from({length:5}, (_,i) => `/images/saint-paul/${i+1}.jpg`),
    amenities: ['Green Wall', 'Stone Walls', 'Black-Framed Windows', 'Pool Table (Top-Floor Loft)'],
  },
  {
    id: 'notre-dame',
    name: 'Notre-Dame',
    brand: 'AirStay',
    city: 'Montréal',
    country: 'Canada',
    neighbourhood: 'Old Montréal',
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
  { value: '6', label: 'Booking Channels' },
  { value: '24/7', label: 'Guest Care' },
]

// Small (1000px) versions for cards and backgrounds; full size for hero shots.
export const sm = (path) => path.replace(/^\/images\/([^/]+)\/([^/]+)$/, '/images/sm/$1-$2')

// Full-service property care (photo-led, no icons)
export const SERVICES = [
  {
    number: '01',
    title: 'Boutique Hotel & Short-Term Management',
    short: 'Hotel & Short-Term',
    desc: 'For boutique hotels and furnished suites: six booking channels and our own site, rates reviewed daily, guest messages answered around the clock, and keyless arrival.',
    image: '/images/services/suite-bedroom.jpg',
    link: '/services#hospitality',
  },
  {
    number: '02',
    title: 'Long-Term Leasing & Residences',
    short: 'Leasing & Residences',
    desc: 'Furnished or unfurnished homes, leased and looked after: tenant selection, leases, rent collection and repairs.',
    image: '/images/saint-paul/5.jpg',
    link: '/longterm',
  },
  {
    number: '03',
    title: 'Property & Building Management',
    short: 'Building Management',
    desc: 'Day-to-day operation of residential, commercial and public-sector buildings: vendors, budgets, compliance, amenities and monthly reporting.',
    image: '/images/services/amenities-lounge.jpg',
    link: '/services#management',
  },
  {
    number: '04',
    title: 'Cleaning & Housekeeping',
    short: 'Cleaning & Housekeeping',
    desc: 'Turnovers, monthly deep cleans and common areas, with beds made hotel-style in white linen.',
    image: '/images/services/housekeeping-bath.jpg',
    link: '/services#cleaning',
  },
  {
    number: '05',
    title: 'Landscaping & Grounds Care',
    short: 'Landscaping & Grounds',
    desc: 'Courtyards, rooftop terraces, planters and green walls, planted and kept up through the seasons.',
    image: '/images/services/grounds-rooftop-aerial.jpg',
    link: '/services#landscaping',
  },
  {
    number: '06',
    title: 'Maintenance & Building Care',
    short: 'Maintenance & Repairs',
    desc: 'Preventive maintenance and repairs by qualified trades, with a photo and a note after every job.',
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
  { step: '04', title: 'Report', desc: 'A monthly statement with the real numbers, and a named contact who answers when you call.' },
]

// Every image on the site follows marketing/social/photo-standards.md (no cables, bins, TVs on, brand posters,
// street numbers or drawings). Rejected originals stay in /public/images but are no longer referenced.
export const HERO_SLIDES = [
  { image: '/images/saint-paul/1-top.jpg', caption: 'AirStay Saint-Paul · Old Montréal', position: 'center 35%' },
  { image: '/images/le-moyne-heritage/5.jpg', caption: 'Le Moyne Heritage · Old Montréal', position: 'center' },
  { image: '/images/services/kitchen-island.jpg', caption: 'Le Moyne Modern · Old Montréal', position: 'center' },
  { image: '/images/services/landscaping-rooftop.jpg', caption: 'Rooftop terrace · Le Moyne Modern, Old Montréal', position: 'center 60%' },
]

export const GALLERY = [
  '/images/services/landscaping-rooftop.jpg', '/images/services/skylight-living.jpg', '/images/services/kitchen-island.jpg',
  '/images/le-moyne-heritage/5.jpg', '/images/saint-paul/1-top.jpg', '/images/bishop/3.jpg',
  '/images/le-moyne-heritage/1-tvoff.jpg', '/images/services/suite-bedroom.jpg', '/images/saint-paul/5.jpg',
  '/images/services/grounds-rooftop-aerial.jpg', '/images/bishop/5-stair.jpg', '/images/services/lobby-green-wall.jpg',
]

export const WHY_OWN = [
  { title: 'Pricing, Every Day', desc: 'Rates move with demand, seasons and events like the Grand Prix, and we review them daily. Any projection we give you is an estimate, never a guarantee.' },
  { title: 'One Team', desc: 'Guests, tenants, cleaning, maintenance, compliance and reporting, handled by us. You receive a payout and a monthly statement.' },
  { title: 'Real Numbers', desc: 'A monthly statement you can check line by line, and a named contact who knows your property.' },
  { title: 'Your Property Protected', desc: 'On direct and Vrbo bookings: ID verification and a signed agreement. On Airbnb: Airbnb’s own verification and AirCover. House rules in every listing.' },
  { title: 'Wide Reach', desc: 'We can list your property on Airbnb, Booking.com, Expedia, Hotels.com, Vrbo and Hopper, and on our own booking site.' },
  { title: 'Keyless & Connected', desc: 'Smart locks, one reservation system for every channel, and secure card payments.' },
]
