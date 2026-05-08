import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'

export default function OwnerModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', type: '', units: '', message: '' })
  const [done, setDone] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email) return toast.error('Name and email required')
    await new Promise(r => setTimeout(r, 1000))
    setDone(true)
  }

  const handleClose = () => { onClose(); setTimeout(() => setDone(false), 400) }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="modal-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={e => e.target === e.currentTarget && handleClose()}>
          <motion.div className="modal-box" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }}
            style={{ maxHeight: '88vh', overflowY: 'auto' }}>
            <button onClick={handleClose} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', fontSize: 20, color: '#9B9590', cursor: 'pointer' }}>✕</button>

            {!done ? (
              <>
                <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 8 }}>Property Owners</p>
                <h2 style={{ fontFamily: 'Playfair Display', fontSize: 30, fontWeight: 400, color: '#0D0C0A', marginBottom: 10 }}>Partner with Airstay</h2>
                <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: '#9B9590', lineHeight: 1.7, marginBottom: 36 }}>Tell us about your property and we'll get back to you within 24 hours with a personalised revenue projection.</p>

                <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                    <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Full Name *</label><input className="input-light" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" /></div>
                    <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Email *</label><input type="email" className="input-light" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="email@example.com" /></div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                    <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>City</label>
                      <select className="input-light" style={{ appearance: 'none' }} value={form.city} onChange={e => setForm({...form, city: e.target.value})}>
                        <option value="">Select</option>
                        {['Montreal', 'Vancouver', 'Toronto', 'Dubai', 'Barcelona', 'Other'].map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Property Type</label>
                      <select className="input-light" style={{ appearance: 'none' }} value={form.type} onChange={e => setForm({...form, type: e.target.value})}>
                        <option value="">Select</option>
                        {['Condo / Apartment', 'House', 'Multi-Unit Building', 'Commercial', 'Other'].map(t => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Number of Units</label><input className="input-light" value={form.units} onChange={e => setForm({...form, units: e.target.value})} placeholder="e.g. 1, 5, 20+" /></div>
                  <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Tell us about your property</label><textarea className="input-light" style={{ resize: 'none', height: 80 }} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Location, current status, goals..." /></div>
                  <button type="submit" style={{ background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '16px 44px', border: 'none', cursor: 'pointer', alignSelf: 'flex-start' }}>Submit Inquiry →</button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <p style={{ fontFamily: 'Playfair Display', fontSize: 56, color: '#C9A96E', marginBottom: 20 }}>✦</p>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: 32, fontWeight: 400, color: '#0D0C0A', marginBottom: 12 }}>Thank you.</h3>
                <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: '#9B9590', marginBottom: 32 }}>We'll be in touch within 24 hours with a personalised revenue projection for your property.</p>
                <button onClick={handleClose} style={{ background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '14px 36px', border: 'none', cursor: 'pointer' }}>Close</button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
