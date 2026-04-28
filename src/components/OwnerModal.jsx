import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'

export default function OwnerModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '', propertyType: '', units: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.city) return toast.error('Please fill in required fields')
    setLoading(true)
    // In production: POST to /api/owner-inquiry or your CRM
    await new Promise(r => setTimeout(r, 1200))
    setSubmitted(true)
    setLoading(false)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => setSubmitted(false), 400)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            className="modal-panel max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }}
          >
            <button onClick={handleClose} className="absolute top-5 right-5 text-muted hover:text-ink text-xl font-light">✕</button>

            {!submitted ? (
              <>
                <div className="eyebrow mb-4">For Property Owners</div>
                <h2 className="heading-md text-ink mb-2">Partner with Airstay</h2>
                <p className="font-body text-sm text-muted mb-8 font-light">We'll respond within 24 hours with a personalised revenue projection for your property.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">Full Name *</label>
                      <input className="input-luxury" placeholder="Your name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">Email *</label>
                      <input type="email" className="input-luxury" placeholder="email@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">City *</label>
                      <select className="select-luxury" value={form.city} onChange={e => setForm({...form, city: e.target.value})}>
                        <option value="">Select city</option>
                        <option>Vancouver</option>
                        <option>Montreal</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">Property Type</label>
                      <select className="select-luxury" value={form.propertyType} onChange={e => setForm({...form, propertyType: e.target.value})}>
                        <option value="">Select type</option>
                        <option>Condo / Apartment</option>
                        <option>House</option>
                        <option>Multi-Unit Building</option>
                        <option>Commercial</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">Number of Units</label>
                    <input className="input-luxury" placeholder="e.g. 1, 3, 10+" value={form.units} onChange={e => setForm({...form, units: e.target.value})} />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">Tell us about your property</label>
                    <textarea className="input-luxury resize-none h-20" placeholder="Location, size, current rental status..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center" disabled={loading}>
                    {loading ? 'Sending...' : 'Submit Inquiry →'}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl mb-6">✦</div>
                <h3 className="font-display text-3xl font-light text-ink mb-3">Thank you.</h3>
                <p className="font-body text-sm text-muted font-light max-w-sm mx-auto mb-8">
                  We've received your inquiry and will be in touch within 24 hours with a personalised revenue projection.
                </p>
                <button onClick={handleClose} className="btn-outline">Close</button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
