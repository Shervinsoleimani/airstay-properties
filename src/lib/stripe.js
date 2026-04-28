// ============================================
// STRIPE INTEGRATION
// ============================================
// Frontend Stripe setup. The SECRET key lives
// only in Vercel environment variables (server-side).
//
// SETUP:
// 1. Create account at stripe.com
// 2. Get publishable key from Developers → API Keys
// 3. Add VITE_STRIPE_PUBLISHABLE_KEY to .env.local
// 4. Add STRIPE_SECRET_KEY to Vercel env vars only

import { loadStripe } from '@stripe/stripe-js'

// Singleton — only loads once
let stripePromise = null

export function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder')
  }
  return stripePromise
}

// ─── CREATE PAYMENT INTENT ────────────────────
// This calls your Vercel serverless function /api/create-payment-intent
// which uses your Stripe SECRET key server-side
export async function createPaymentIntent(bookingData) {
  const res = await fetch('/api/create-payment-intent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: Math.round(bookingData.totalPrice * 100), // Stripe uses cents
      currency: 'cad',
      metadata: {
        listingId: String(bookingData.listingId),
        listingName: bookingData.listingName,
        checkIn: bookingData.checkIn,
        checkOut: bookingData.checkOut,
        guestEmail: bookingData.email,
        guestName: `${bookingData.firstName} ${bookingData.lastName}`,
      },
    }),
  })

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.message || 'Payment setup failed')
  }

  return await res.json() // Returns { clientSecret }
}

// ─── PRICE CALCULATIONS ───────────────────────
export function calculateBookingTotal(basePrice, checkIn, checkOut, cleaningFee = 85, serviceFeeRate = 0.12) {
  const nights = Math.round(
    (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
  )
  const subtotal = basePrice * nights
  const serviceFee = Math.round(subtotal * serviceFeeRate)
  const taxes = Math.round(subtotal * 0.13) // 13% HST/GST
  const total = subtotal + cleaningFee + serviceFee + taxes

  return {
    nights,
    subtotal,
    cleaningFee,
    serviceFee,
    taxes,
    total,
  }
}
