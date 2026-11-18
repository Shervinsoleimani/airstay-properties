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

export const PROPERTIES = [
  {
    id: 'le-moyne-heritage',
    name: 'Le Moyne Heritage',
    brand: 'AirStay',
    city: 'Montreal',
    country: 'Canada',
    neighbourhood: 'Downtown',
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
    name: 'Le Moyne Modern',
    brand: 'AirStay',
    city: 'Montreal',
    country: 'Canada',
    neighbourhood: 'Downtown',
    type: 'Boutique Hotel',
    tag: 'New 2024',
    basePrice: 265,
    currency: 'CAD',
    bedrooms: '1–3',
    description: 'Brand-new 2024 build. Double-height lofts, skylight atrium, rooftop terrace with fire pit and city panorama.',
    coverGradient: 'linear-gradient(155deg, #2C3E35 0%, #0D1A14 100%)',
    images: Array.from({length:9}, (_,i) => `/images/le-moyne-modern/${i+1}.jpg`),
    amenities: ['Rooftop Terrace', 'Fire Pit', 'Skylight', 'Marble Bathrooms', 'Resident Lounge'],
  },
  {
    id: 'bishop',
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

export const STATS = [
  { value: '200+', label: 'Properties Managed' },
  { value: '4,000+', label: 'Verified Guest Reviews' },
  { value: '6+', label: 'Global Booking Channels' },
  { value: '24/7', label: 'Guest & Owner Care' },
]

// Photo-led service cards (no icons): short-term, long-term, management, maintenance
export const SERVICES = [
  {
    number: '01',
    title: 'Short-Term Stays',
    desc: 'Hotel-calibre suites in Montreal’s most storied addresses. Concierge-level guest care, hotel-grade housekeeping and seamless keyless arrival.',
    image: '/images/notre-dame/4.jpg',
    link: '/stay',
  },
  {
    number: '02',
    title: 'Long-Term Residences',
    desc: 'Furnished or unfurnished homes, professionally leased and cared for. Careful tenant selection, clear leases and maintenance that never waits.',
    image: '/images/saint-paul/5.jpg',
    link: '/longterm',
  },
  {
    number: '03',
    title: 'Property Management',
    desc: 'From a single investment condo to an entire building, we operate your asset with institutional discipline and a builder’s eye for detail.',
    image: '/images/notre-dame/7.jpg',
    link: '/own',
  },
  {
    number: '04',
    title: 'Building Care & Maintenance',
    desc: 'Preventive care, rapid response and a trusted network of trades, overseen by people who understand how buildings are made.',
    image: '/images/bishop/3.jpg',
    link: '/services',
  },
]

export const WHY_OWN = [
  { title: 'Maximum Revenue', desc: 'Dynamic, data-driven pricing adjusts your rates to market demand every day, with event and seasonal strategy built in.' },
  { title: 'Zero Hassle', desc: 'We handle guests, tenants, cleaning, maintenance, compliance and reporting. You receive a payout and a clear monthly statement.' },
  { title: 'Full Transparency', desc: 'Monthly performance reports, real numbers, and a dedicated manager who knows your property by name.' },
  { title: 'Your Asset Protected', desc: 'Verified guests with government ID, signed rental agreements, firm house rules and meticulous property care.' },
  { title: 'Maximum Exposure', desc: 'Your property is marketed across Airbnb, Booking.com, Expedia, Hotels.com, Vrbo and our own direct-booking website.' },
  { title: 'Technology-Driven', desc: 'An enterprise-grade operating platform: centralised reservations, revenue management, keyless smart access and secure payments.' },
]
