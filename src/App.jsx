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
import Stay from './pages/Stay'
import Own from './pages/Own'
import LongTerm from './pages/LongTerm'
import Services from './pages/Services'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [bookOpen, setBookOpen] = useState(false)
  const [ownerOpen, setOwnerOpen] = useState(false)
  const location = useLocation()

  if (loading) {
    return (
      <AnimatePresence>
        <Loader onDone={() => setTimeout(() => setLoading(false), 200)} />
      </AnimatePresence>
    )
  }

  return (
    <>
      <Cursor />
      <Toaster position="bottom-right" toastOptions={{
        style: { fontFamily: 'DM Sans', fontSize: 13, borderRadius: 0, background: '#0D0C0A', color: '#F2EDE4', border: '1px solid rgba(201,169,110,0.2)' }
      }} />

      <Navbar onBook={() => setBookOpen(true)} />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home onBook={() => setBookOpen(true)} onOwner={() => setOwnerOpen(true)} />} />
        <Route path="/stay" element={<Stay onBook={() => setBookOpen(true)} />} />
        <Route path="/own" element={<Own onOwner={() => setOwnerOpen(true)} />} />
        <Route path="/longterm" element={<LongTerm onBook={() => setBookOpen(true)} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer onBook={() => setBookOpen(true)} onOwner={() => setOwnerOpen(true)} />

      <BookingModal isOpen={bookOpen} onClose={() => setBookOpen(false)} />
      <OwnerModal isOpen={ownerOpen} onClose={() => setOwnerOpen(false)} />
    </>
  )
}
