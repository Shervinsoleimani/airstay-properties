import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import OwnerModal from './components/OwnerModal'

import Home from './pages/Home'
import Properties from './pages/Properties'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [ownerOpen, setOwnerOpen] = useState(false)
  const location = useLocation()

  if (loading) {
    return (
      <AnimatePresence>
        <Loader onComplete={() => setTimeout(() => setLoading(false), 200)} />
      </AnimatePresence>
    )
  }

  return (
    <>
      <Cursor />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontFamily: 'Jost, sans-serif',
            fontSize: '13px',
            borderRadius: '0',
            background: '#0b0a08',
            color: '#f4efe6',
            border: '0.5px solid rgba(184,144,90,0.3)',
          },
        }}
      />

      <Navbar onBookNow={() => setBookingOpen(true)} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <Home
              onBookNow={() => setBookingOpen(true)}
              onOwnerInquiry={() => setOwnerOpen(true)}
            />
          } />
          <Route path="/properties" element={<Properties onBookNow={() => setBookingOpen(true)} />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/owners" element={
            <div className="pt-32 pb-24 text-center">
              <div className="max-w-lg mx-auto px-8">
                <h1 className="heading-lg text-ink mb-6">For Property Owners</h1>
                <p className="font-body text-muted mb-8">Let us manage your property and maximise your returns.</p>
                <button onClick={() => setOwnerOpen(true)} className="btn-primary">Submit Your Property</button>
              </div>
            </div>
          } />
          <Route path="/booking-confirmed" element={
            <div className="pt-32 pb-24 text-center">
              <div className="max-w-lg mx-auto px-8">
                <div className="font-display text-6xl text-gold mb-6">✦</div>
                <h1 className="heading-lg text-ink mb-4">Booking Confirmed</h1>
                <p className="font-body text-muted mb-8">Thank you! Check your email for confirmation details.</p>
                <a href="/" className="btn-primary">Back to Home</a>
              </div>
            </div>
          } />
        </Routes>
      </AnimatePresence>

      <Footer onOwnerInquiry={() => setOwnerOpen(true)} />

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
      <OwnerModal isOpen={ownerOpen} onClose={() => setOwnerOpen(false)} />
    </>
  )
}
