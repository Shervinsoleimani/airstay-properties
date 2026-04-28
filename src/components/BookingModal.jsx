import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { getStripe, createPaymentIntent, calculateBookingTotal } from '../lib/stripe'
import { createReservation } from '../lib/hostaway'
import { DEMO_LISTINGS } from '../lib/hostaway'
import toast from 'react-hot-toast'

// Step 1: Date & Guest Selection
function StepSearch({ onNext, listing, setListing }) {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(1)
  const [selectedCity, setSelectedCity] = useState('all')

  const filtered = DEMO_LISTINGS.filter(l =>
    selectedCity === 'all' || l.city === selectedCity
  )

  const handleNext = () => {
    if (!checkIn || !checkOut || !listing) return toast.error('Please select a property and dates')
    if (new Date(checkOut) <= new Date(checkIn)) return toast.error('Check-out must be after check-in')
    onNext({ checkIn, checkOut, guests })
  }

  return (
    <div>
      <div className="eyebrow mb-4">Find Your Stay</div>
      <h2 className="heading-md text-ink mb-8">Where would you like to go?</h2>

      {/* City Filter */}
      <div className="flex gap-3 mb-6">
        {['all', 'Vancouver', 'Montreal'].map(city => (
          <button
            key={city}
            onClick={() => setSelectedCity(city)}
            className={`text-xs tracking-widest uppercase font-body px-5 py-2.5 border transition-all duration-200 ${
              selectedCity === city
                ? 'border-gold bg-gold text-cream'
                : 'border-gold/30 text-muted hover:border-gold hover:text-ink'
            }`}
          >
            {city === 'all' ? 'All Cities' : city}
          </button>
        ))}
      </div>

      {/* Property List */}
      <div className="space-y-2 max-h-48 overflow-y-auto mb-6 pr-1">
        {filtered.map(l => (
          <button
            key={l.id}
            onClick={() => setListing(l)}
            className={`w-full text-left px-4 py-3 border transition-all duration-200 ${
              listing?.id === l.id
                ? 'border-gold bg-gold/5'
                : 'border-gold/20 hover:border-gold/50'
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-body text-sm font-medium text-ink">{l.name}</p>
                <p className="font-body text-xs text-muted mt-0.5">{l.city} · {l.type}</p>
              </div>
              <span className="font-body text-xs text-gold">
                ${l.basePrice}{l.priceUnit === 'month' ? '/mo' : '/night'}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Dates & Guests */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">Check In</label>
          <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="input-luxury" />
        </div>
        <div>
          <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">Check Out</label>
          <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)}
            min={checkIn || new Date().toISOString().split('T')[0]}
            className="input-luxury" />
        </div>
      </div>

      <div className="mb-8">
        <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">Guests</label>
        <select value={guests} onChange={e => setGuests(Number(e.target.value))} className="select-luxury">
          {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
        </select>
      </div>

      <button onClick={handleNext} className="btn-primary w-full justify-center">
        Continue <span>→</span>
      </button>
    </div>
  )
}

// Step 2: Guest Details
function StepGuest({ onNext, onBack, bookingInfo }) {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', notes: '' })

  const handleNext = () => {
    if (!form.firstName || !form.lastName || !form.email) return toast.error('Please fill in required fields')
    onNext(form)
  }

  return (
    <div>
      <div className="eyebrow mb-4">Your Details</div>
      <h2 className="heading-md text-ink mb-8">Who's staying?</h2>

      {/* Price summary */}
      {bookingInfo.listing && bookingInfo.checkIn && bookingInfo.checkOut && (
        <div className="bg-surface border border-gold/20 p-4 mb-6">
          <p className="font-body text-xs text-muted mb-1">{bookingInfo.listing.name}</p>
          {(() => {
            const calc = calculateBookingTotal(bookingInfo.listing.basePrice, bookingInfo.checkIn, bookingInfo.checkOut)
            return (
              <div className="space-y-1">
                <div className="flex justify-between font-body text-xs">
                  <span className="text-muted">${bookingInfo.listing.basePrice} × {calc.nights} nights</span>
                  <span>${calc.subtotal}</span>
                </div>
                <div className="flex justify-between font-body text-xs">
                  <span className="text-muted">Cleaning fee</span>
                  <span>${calc.cleaningFee}</span>
                </div>
                <div className="flex justify-between font-body text-xs">
                  <span className="text-muted">Service fee</span>
                  <span>${calc.serviceFee}</span>
                </div>
                <div className="flex justify-between font-body text-xs">
                  <span className="text-muted">Taxes (HST)</span>
                  <span>${calc.taxes}</span>
                </div>
                <div className="border-t border-gold/20 mt-2 pt-2 flex justify-between font-body text-sm font-medium">
                  <span>Total (CAD)</span>
                  <span className="text-gold">${calc.total.toLocaleString()}</span>
                </div>
              </div>
            )
          })()}
        </div>
      )}

      <div className="space-y-5 mb-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">First Name *</label>
            <input className="input-luxury" placeholder="Alex" value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} />
          </div>
          <div>
            <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">Last Name *</label>
            <input className="input-luxury" placeholder="Chambers" value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} />
          </div>
        </div>
        <div>
          <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">Email *</label>
          <input type="email" className="input-luxury" placeholder="alex@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        </div>
        <div>
          <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">Phone</label>
          <input type="tel" className="input-luxury" placeholder="+1 (604) 555-0100" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
        </div>
        <div>
          <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">Special Requests</label>
          <textarea className="input-luxury resize-none h-16" placeholder="Early check-in, dietary requirements, etc." value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} />
        </div>
      </div>

      <div className="flex gap-3">
        <button onClick={onBack} className="btn-ghost">← Back</button>
        <button onClick={handleNext} className="btn-primary flex-1 justify-center">Proceed to Payment →</button>
      </div>
    </div>
  )
}

// Step 3: Stripe Payment Form
function PaymentForm({ bookingData, onSuccess }) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setLoading(true)
    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        redirect: 'if_required',
        confirmParams: {
          return_url: `${window.location.origin}/booking-confirmed`,
          receipt_email: bookingData.email,
        },
      })

      if (error) {
        toast.error(error.message)
      } else if (paymentIntent.status === 'succeeded') {
        // Create reservation in Hostaway
        await createReservation({
          ...bookingData,
          stripePaymentIntentId: paymentIntent.id,
        })
        toast.success('Booking confirmed!')
        onSuccess(paymentIntent)
      }
    } catch (err) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="eyebrow mb-4">Secure Payment</div>
      <h2 className="heading-md text-ink mb-6">Complete your booking</h2>
      <p className="font-body text-xs text-muted mb-6 flex items-center gap-2">
        <span>🔒</span> Secured by Stripe. Your card details are never stored by Airstay.
      </p>

      <div className="mb-8">
        <PaymentElement options={{ layout: 'tabs' }} />
      </div>

      <button type="submit" disabled={!stripe || loading} className="btn-primary w-full justify-center">
        {loading ? 'Processing...' : `Confirm & Pay $${bookingData.total?.toLocaleString()} CAD`}
      </button>
    </form>
  )
}

// Main Modal Orchestrator
export default function BookingModal({ isOpen, onClose, defaultListing = null }) {
  const [step, setStep] = useState(1)
  const [listing, setListing] = useState(defaultListing)
  const [bookingInfo, setBookingInfo] = useState({})
  const [guestInfo, setGuestInfo] = useState({})
  const [clientSecret, setClientSecret] = useState(null)
  const [calc, setCalc] = useState(null)

  const handleSearchNext = async (dateInfo) => {
    const calculation = calculateBookingTotal(listing.basePrice, dateInfo.checkIn, dateInfo.checkOut)
    setCalc(calculation)
    setBookingInfo({ ...dateInfo, listing })
    setStep(2)
  }

  const handleGuestNext = async (guest) => {
    setGuestInfo(guest)
    try {
      const { clientSecret: cs } = await createPaymentIntent({
        totalPrice: calc.total,
        listingId: listing.id,
        listingName: listing.name,
        ...bookingInfo,
        ...guest,
      })
      setClientSecret(cs)
      setStep(3)
    } catch {
      // Demo mode — skip real Stripe if no keys configured
      toast('Demo mode: Stripe keys not configured yet', { icon: 'ℹ️' })
      setStep(3)
    }
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => { setStep(1); setClientSecret(null) }, 300)
  }

  const stripeOptions = {
    clientSecret: clientSecret || 'pi_demo_secret_demo',
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#b8905a',
        colorBackground: '#faf6ef',
        fontFamily: 'Jost, sans-serif',
        borderRadius: '0px',
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            className="modal-panel max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
          >
            {/* Close */}
            <button onClick={handleClose} className="absolute top-5 right-5 text-muted hover:text-ink text-xl font-light">✕</button>

            {/* Step indicator */}
            <div className="flex items-center gap-2 mb-8">
              {[1,2,3].map(s => (
                <div key={s} className={`h-px flex-1 transition-all duration-500 ${s <= step ? 'bg-gold' : 'bg-gold/20'}`} />
              ))}
            </div>

            {step === 1 && <StepSearch onNext={handleSearchNext} listing={listing} setListing={setListing} />}
            {step === 2 && <StepGuest onNext={handleGuestNext} onBack={() => setStep(1)} bookingInfo={bookingInfo} />}
            {step === 3 && (
              clientSecret ? (
                <Elements stripe={getStripe()} options={stripeOptions}>
                  <PaymentForm
                    bookingData={{ ...bookingInfo, ...guestInfo, ...calc, listingId: listing?.id, listingName: listing?.name }}
                    onSuccess={() => { handleClose(); toast.success('🎉 Booking confirmed! Check your email.') }}
                  />
                </Elements>
              ) : (
                <div className="text-center py-12">
                  <div className="eyebrow justify-center mb-4">Demo Mode</div>
                  <p className="font-body text-sm text-muted mb-6">Add your Stripe keys in .env.local to enable live payments.</p>
                  <button onClick={handleClose} className="btn-primary">Got It</button>
                </div>
              )
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
