// ============================================
// HOSTAWAY API SERVICE
// ============================================
// All Hostaway API calls go through this file.
// Docs: https://api.hostaway.com/v1
//
// SETUP:
// 1. Log into Hostaway dashboard
// 2. Go to Settings → API
// 3. Copy your Account ID and API Key
// 4. Add them to .env.local

const BASE_URL = import.meta.env.VITE_HOSTAWAY_BASE_URL || 'https://api.hostaway.com/v1'
const ACCOUNT_ID = import.meta.env.VITE_HOSTAWAY_ACCOUNT_ID
const API_KEY = import.meta.env.VITE_HOSTAWAY_API_KEY

const headers = {
  'Authorization': `Bearer ${API_KEY}`,
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache',
}

// ─── LISTINGS ───────────────────────────────
// Fetch all active property listings
export async function getListings(params = {}) {
  const query = new URLSearchParams({
    limit: 50,
    includeResources: 1,
    ...params,
  }).toString()

  const res = await fetch(`${BASE_URL}/listings?${query}`, { headers })
  if (!res.ok) throw new Error(`Hostaway error: ${res.status}`)
  const data = await res.json()
  return data.result || []
}

// Fetch a single listing by ID
export async function getListing(listingId) {
  const res = await fetch(`${BASE_URL}/listings/${listingId}?includeResources=1`, { headers })
  if (!res.ok) throw new Error(`Hostaway error: ${res.status}`)
  const data = await res.json()
  return data.result
}

// ─── AVAILABILITY ────────────────────────────
// Check availability for a listing between dates
export async function getAvailability(listingId, startDate, endDate) {
  const query = new URLSearchParams({
    listingId,
    startDate, // YYYY-MM-DD
    endDate,
  }).toString()

  const res = await fetch(`${BASE_URL}/availability?${query}`, { headers })
  if (!res.ok) throw new Error(`Hostaway error: ${res.status}`)
  const data = await res.json()
  return data.result
}

// ─── PRICING ─────────────────────────────────
// Get pricing for specific dates (Pricelabs feeds into this automatically)
export async function getPricing(listingId, startDate, endDate) {
  const query = new URLSearchParams({
    listingId,
    startDate,
    endDate,
    currency: 'CAD',
  }).toString()

  const res = await fetch(`${BASE_URL}/pricing?${query}`, { headers })
  if (!res.ok) throw new Error(`Hostaway error: ${res.status}`)
  const data = await res.json()
  return data.result
}

// ─── RESERVATIONS ─────────────────────────────
// Create a new reservation (called after Stripe payment confirmed)
export async function createReservation(bookingData) {
  const payload = {
    listingId: bookingData.listingId,
    channelId: 2000,           // 2000 = Direct booking channel in Hostaway
    source: 'direct',
    arrivalDate: bookingData.checkIn,
    departureDate: bookingData.checkOut,
    adults: bookingData.guests,
    guestFirstName: bookingData.firstName,
    guestLastName: bookingData.lastName,
    guestEmail: bookingData.email,
    guestPhone: bookingData.phone,
    totalPrice: bookingData.totalPrice,
    currency: 'CAD',
    isPaid: 1,
    stripePaymentIntentId: bookingData.stripePaymentIntentId,
    notes: bookingData.notes || '',
  }

  const res = await fetch(`${BASE_URL}/reservations`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.message || 'Failed to create reservation')
  }
  const data = await res.json()
  return data.result
}

// ─── INQUIRIES ────────────────────────────────
// Submit a booking inquiry (before payment)
export async function createInquiry(inquiryData) {
  const payload = {
    listingId: inquiryData.listingId,
    channelId: 2000,
    source: 'direct',
    arrivalDate: inquiryData.checkIn,
    departureDate: inquiryData.checkOut,
    adults: inquiryData.guests || 1,
    guestFirstName: inquiryData.firstName,
    guestLastName: inquiryData.lastName,
    guestEmail: inquiryData.email,
    guestPhone: inquiryData.phone || '',
    message: inquiryData.message || '',
  }

  const res = await fetch(`${BASE_URL}/inquiries`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error('Failed to submit inquiry')
  return await res.json()
}

// ─── DEMO DATA (used when API keys not configured) ───
export const DEMO_LISTINGS = [
  {
    id: 1,
    name: 'The Yaletown Loft',
    city: 'Vancouver',
    neighbourhood: 'Yaletown',
    type: 'Short-Term',
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 4,
    basePrice: 280,
    currency: 'CAD',
    description: 'A beautifully designed industrial-chic loft in the heart of Yaletown. Floor-to-ceiling windows with harbour views, fully equipped kitchen, and premium linens throughout.',
    amenities: ['WiFi', 'Kitchen', 'Washer/Dryer', 'Gym Access', 'Concierge', 'Parking'],
    images: ['yaletown-1', 'yaletown-2'],
    rating: 4.97,
    reviewCount: 143,
  },
  {
    id: 2,
    name: 'Maison Saint-Paul',
    city: 'Montreal',
    neighbourhood: 'Old Montreal',
    type: 'Boutique Hotel',
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    basePrice: 320,
    currency: 'CAD',
    description: 'Nestled in a 19th century stone building in Old Montreal, this boutique suite blends historic architecture with contemporary luxury. Steps from the finest restaurants in the city.',
    amenities: ['WiFi', 'Breakfast Included', 'Concierge', 'Room Service', 'City Views'],
    images: ['saint-paul-1'],
    rating: 4.99,
    reviewCount: 89,
  },
  {
    id: 3,
    name: 'Coal Harbour Penthouse',
    city: 'Vancouver',
    neighbourhood: 'Coal Harbour',
    type: 'Short-Term',
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    basePrice: 490,
    currency: 'CAD',
    description: 'The pinnacle of Vancouver luxury. Top-floor penthouse with sweeping views of the North Shore mountains, Coal Harbour marina, and Stanley Park.',
    amenities: ['WiFi', 'Kitchen', 'Rooftop Terrace', 'Concierge', 'Valet Parking', 'Spa Access'],
    images: ['coal-harbour-1'],
    rating: 5.0,
    reviewCount: 47,
  },
  {
    id: 4,
    name: 'Plateau Boutique Suite',
    city: 'Montreal',
    neighbourhood: 'Plateau-Mont-Royal',
    type: 'Short-Term',
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    basePrice: 195,
    currency: 'CAD',
    description: "Immerse yourself in Montreal's most vibrant neighbourhood. This charming suite occupies the top floor of a classic Plateau triplex, with exposed brick and private balcony.",
    amenities: ['WiFi', 'Kitchen', 'Balcony', 'Bike Rental', 'Smart TV'],
    images: ['plateau-1'],
    rating: 4.95,
    reviewCount: 212,
  },
  {
    id: 5,
    name: 'West End Residences',
    city: 'Vancouver',
    neighbourhood: 'West End',
    type: 'Long-Term',
    bedrooms: 2,
    bathrooms: 1,
    maxGuests: 4,
    basePrice: 3800,
    currency: 'CAD',
    priceUnit: 'month',
    description: 'Premium managed residences in Vancouver\'s most desirable neighbourhood, walking distance to English Bay. Fully furnished, utilities included, flexible lease terms from 3 months.',
    amenities: ['WiFi', 'Utilities Included', 'Furnished', 'Maintenance', 'Concierge', 'Storage'],
    images: ['west-end-1'],
    rating: 4.92,
    reviewCount: 34,
  },
  {
    id: 6,
    name: 'Mile End Hotel Suites',
    city: 'Montreal',
    neighbourhood: 'Mile End',
    type: 'Boutique Hotel',
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    basePrice: 265,
    currency: 'CAD',
    description: "A boutique property at the epicentre of Montreal's creative district. Thoughtfully designed rooms, a curated art collection, and a rooftop terrace with city views.",
    amenities: ['WiFi', 'Breakfast', 'Rooftop Bar', 'Concierge', 'Art Collection', 'Bike Storage'],
    images: ['mile-end-1'],
    rating: 4.96,
    reviewCount: 178,
  },
]
