import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'
import { bookingSearchUrl, BOOKING_URL } from '../lib/data'

// "Book a Stay": guests choose dates and party size, then continue to our
// secure direct-booking site for live availability, pricing and checkout.
const label = { fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.45)', display: 'block', marginBottom: 8 }

export default function BookingModal({ isOpen, onClose }) {
  const [dates, setDates] = useState({ in: '', out: '' })
  const [guests, setGuests] = useState(2)
  const today = new Date().toISOString().split('T')[0]

  const go = () => {
    if (!dates.in || !dates.out) return toast.error('Please select your arrival and departure dates')
    if (dates.out <= dates.in) return toast.error('Departure must be after arrival')
    window.location.href = bookingSearchUrl({ checkIn: dates.in, checkOut: dates.out, guests })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="modal-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={e => e.target === e.currentTarget && onClose()}>
          <motion.div className="modal-box" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }}
            style={{ maxWidth: 560, padding: 0, overflow: 'hidden' }}>
            <div style={{ height: 160, backgroundImage: 'linear-gradient(to bottom, rgba(13,12,10,0.15), rgba(13,12,10,0.75)), url(/images/le-moyne-heritage/8.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'flex-end', padding: '24px 40px' }}>
              <div>
                <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 6 }}>Reserve Direct</p>
                <h2 style={{ fontFamily: 'Playfair Display', fontSize: 30, fontWeight: 400, color: '#F2EDE4' }}>Plan your stay</h2>
              </div>
            </div>
            <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 16, right: 20, background: 'none', border: 'none', fontSize: 22, color: '#F2EDE4', cursor: 'pointer', fontFamily: 'DM Sans', fontWeight: 300 }}>×</button>

            <div style={{ padding: '32px 40px 40px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
                <div><label style={label}>Arrival</label><input type="date" className="input-light" value={dates.in} min={today} onChange={e => setDates({ ...dates, in: e.target.value })} /></div>
                <div><label style={label}>Departure</label><input type="date" className="input-light" value={dates.out} min={dates.in || today} onChange={e => setDates({ ...dates, out: e.target.value })} /></div>
              </div>
              <div style={{ marginBottom: 32 }}>
                <label style={label}>Guests</label>
                <select className="input-light" style={{ appearance: 'none' }} value={guests} onChange={e => setGuests(Number(e.target.value))}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                </select>
              </div>
              <button onClick={go}
                style={{ width: '100%', background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '17px', border: 'none', cursor: 'pointer' }}>
                Check Availability
              </button>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, gap: 12, flexWrap: 'wrap' }}>
                <a href={`${BOOKING_URL}/all-listings`} style={{ fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2C3E35', textDecoration: 'none', borderBottom: '1px solid rgba(44,62,53,0.3)', paddingBottom: 2 }}>
                  Browse all residences
                </a>
                <span style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 300, color: '#9B9590' }}>Secure direct reservations</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
