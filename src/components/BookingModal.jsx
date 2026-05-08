import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROPERTIES } from '../lib/data'
import toast from 'react-hot-toast'

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [selected, setSelected] = useState(null)
  const [dates, setDates] = useState({ in: '', out: '' })
  const [guests, setGuests] = useState(2)
  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' })
  const [done, setDone] = useState(false)

  const reset = () => { setStep(1); setSelected(null); setDates({ in: '', out: '' }); setDone(false) }

  const nights = dates.in && dates.out
    ? Math.max(0, Math.round((new Date(dates.out) - new Date(dates.in)) / 86400000))
    : 0

  const submit = async () => {
    if (!form.name || !form.email) return toast.error('Name and email required')
    await new Promise(r => setTimeout(r, 1200))
    setDone(true)
    toast.success('Booking request received!')
  }

  const handleClose = () => { onClose(); setTimeout(reset, 400) }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="modal-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={e => e.target === e.currentTarget && handleClose()}>
          <motion.div className="modal-box" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }}
            style={{ maxHeight: '88vh', overflowY: 'auto', maxWidth: 600 }}>
            <button onClick={handleClose} style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', fontSize: 20, color: '#9B9590', cursor: 'pointer' }}>✕</button>

            {/* Progress */}
            <div style={{ display: 'flex', gap: 4, marginBottom: 36 }}>
              {[1,2,3].map(s => <div key={s} style={{ flex: 1, height: 2, background: s <= step ? '#2C3E35' : 'rgba(13,12,10,0.1)', transition: 'background 0.4s' }} />)}
            </div>

            {!done ? (
              <>
                {step === 1 && (
                  <div>
                    <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 8 }}>Step 1 of 3</p>
                    <h2 style={{ fontFamily: 'Playfair Display', fontSize: 30, fontWeight: 400, color: '#0D0C0A', marginBottom: 32 }}>Choose your space</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxHeight: 320, overflowY: 'auto', marginBottom: 28 }}>
                      {PROPERTIES.map(p => (
                        <button key={p.id} onClick={() => setSelected(p)}
                          style={{ textAlign: 'left', padding: '16px 20px', border: `1px solid ${selected?.id === p.id ? '#2C3E35' : 'rgba(13,12,10,0.1)'}`, background: selected?.id === p.id ? 'rgba(44,62,53,0.05)' : 'transparent', cursor: 'pointer', transition: 'all 0.2s' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                              <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 400, color: '#0D0C0A' }}>{p.brand} {p.name}</p>
                              <p style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9B9590', marginTop: 4 }}>{p.city} · {p.type}</p>
                            </div>
                            <p style={{ fontFamily: 'Playfair Display', fontSize: 18, color: '#C9A96E' }}>${p.basePrice}/night</p>
                          </div>
                        </button>
                      ))}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
                      <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Check In</label><input type="date" className="input-light" value={dates.in} onChange={e => setDates({...dates, in: e.target.value})} min={new Date().toISOString().split('T')[0]} /></div>
                      <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Check Out</label><input type="date" className="input-light" value={dates.out} onChange={e => setDates({...dates, out: e.target.value})} min={dates.in} /></div>
                    </div>

                    <div style={{ marginBottom: 36 }}>
                      <label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Guests</label>
                      <select className="input-light" style={{ appearance: 'none' }} value={guests} onChange={e => setGuests(Number(e.target.value))}>
                        {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                      </select>
                    </div>

                    <button onClick={() => { if (!selected) return toast.error('Please select a property'); if (!dates.in || !dates.out) return toast.error('Please select dates'); setStep(2) }}
                      style={{ width: '100%', background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '16px', border: 'none', cursor: 'pointer' }}>
                      Continue →
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 8 }}>Step 2 of 3</p>
                    <h2 style={{ fontFamily: 'Playfair Display', fontSize: 30, fontWeight: 400, color: '#0D0C0A', marginBottom: 24 }}>Your details</h2>

                    {selected && nights > 0 && (
                      <div style={{ background: '#F2EDE4', padding: '20px', marginBottom: 28 }}>
                        <p style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#9B9590', marginBottom: 4 }}>{selected.brand} {selected.name}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <p style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 300, color: '#9B9590' }}>${selected.basePrice} × {nights} nights</p>
                          <p style={{ fontFamily: 'Playfair Display', fontSize: 20, color: '#2C3E35' }}>${(selected.basePrice * nights).toLocaleString()} CAD</p>
                        </div>
                      </div>
                    )}

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 36 }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                        <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Full Name *</label><input className="input-light" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" /></div>
                        <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Email *</label><input type="email" className="input-light" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="email@example.com" /></div>
                      </div>
                      <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Phone</label><input className="input-light" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+1 (514) 555-0100" /></div>
                      <div><label style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(13,12,10,0.4)', display: 'block', marginBottom: 8 }}>Special Requests</label><textarea className="input-light" style={{ resize: 'none', height: 64 }} value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} placeholder="Early check-in, dietary requirements..." /></div>
                    </div>

                    <div style={{ display: 'flex', gap: 12 }}>
                      <button onClick={() => setStep(1)} style={{ fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'none', border: 'none', color: '#9B9590', cursor: 'pointer' }}>← Back</button>
                      <button onClick={() => setStep(3)} style={{ flex: 1, background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '16px', border: 'none', cursor: 'pointer' }}>Review & Confirm →</button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 8 }}>Step 3 of 3</p>
                    <h2 style={{ fontFamily: 'Playfair Display', fontSize: 30, fontWeight: 400, color: '#0D0C0A', marginBottom: 28 }}>Review & confirm</h2>

                    <div style={{ background: '#F2EDE4', padding: '28px', marginBottom: 28 }}>
                      <p style={{ fontFamily: 'DM Mono', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 16 }}>Booking Summary</p>
                      {[
                        ['Property', `${selected?.brand} ${selected?.name}`],
                        ['City', selected?.city],
                        ['Check In', dates.in],
                        ['Check Out', dates.out],
                        ['Nights', nights],
                        ['Guests', guests],
                        ['Guest', form.name],
                        ['Email', form.email],
                        ['Total (estimate)', `$${((selected?.basePrice || 0) * nights).toLocaleString()} CAD`],
                      ].map(([label, value]) => (
                        <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(13,12,10,0.06)' }}>
                          <span style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9B9590' }}>{label}</span>
                          <span style={{ fontFamily: 'DM Sans', fontSize: 13, color: '#0D0C0A' }}>{value}</span>
                        </div>
                      ))}
                    </div>

                    <p style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 300, color: '#9B9590', marginBottom: 24, lineHeight: 1.6 }}>
                      Our team will confirm availability and payment details within a few hours of receiving your request.
                    </p>

                    <div style={{ display: 'flex', gap: 12 }}>
                      <button onClick={() => setStep(2)} style={{ fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'none', border: 'none', color: '#9B9590', cursor: 'pointer' }}>← Back</button>
                      <button onClick={submit} style={{ flex: 1, background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '16px', border: 'none', cursor: 'pointer' }}>Confirm Booking →</button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <p style={{ fontFamily: 'Playfair Display', fontSize: 56, color: '#C9A96E', marginBottom: 20 }}>✦</p>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: 32, fontWeight: 400, color: '#0D0C0A', marginBottom: 12 }}>Booking confirmed.</h3>
                <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: '#9B9590', marginBottom: 32 }}>We'll be in touch within a few hours to confirm availability and arrange payment.</p>
                <button onClick={handleClose} style={{ background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '14px 36px', border: 'none', cursor: 'pointer' }}>Close</button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
