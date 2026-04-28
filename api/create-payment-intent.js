// ============================================
// VERCEL SERVERLESS FUNCTION
// File: /api/create-payment-intent.js
// ============================================
// This runs on Vercel's servers — never in the browser.
// Your Stripe SECRET key is safe here.
//
// Deploy to Vercel and add STRIPE_SECRET_KEY
// in your Vercel project's Environment Variables.

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { amount, currency, metadata } = req.body

    if (!amount || amount < 50) {
      return res.status(400).json({ message: 'Invalid amount' })
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: currency || 'cad',
      metadata,
      automatic_payment_methods: { enabled: true },
      description: `Airstay Properties — ${metadata.listingName}`,
      receipt_email: metadata.guestEmail,
    })

    res.status(200).json({ clientSecret: paymentIntent.client_secret })
  } catch (err) {
    console.error('Stripe error:', err)
    res.status(500).json({ message: err.message })
  }
}
