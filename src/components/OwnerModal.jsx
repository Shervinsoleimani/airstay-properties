import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LeadForm from './LeadForm'
import { OWNER_FIELDS, OWNER_FILES, OWNER_SUCCESS } from '../lib/forms'

export default function OwnerModal({ isOpen, onClose }) {
  const [key, setKey] = useState(0)
  const handleClose = () => { onClose(); setTimeout(() => setKey(k => k + 1), 400) }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="modal-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={e => e.target === e.currentTarget && handleClose()}>
          <motion.div className="modal-box" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }}
            style={{ maxHeight: '90vh', overflowY: 'auto', maxWidth: 720 }}>
            <button onClick={handleClose} style={{ position: 'absolute', top: 18, right: 22, background: 'none', border: 'none', fontSize: 24, fontWeight: 300, color: '#9B9590', cursor: 'pointer' }} aria-label="Close">×</button>
            <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 8 }}>Property Owners &amp; Buildings</p>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: 32, fontWeight: 400, color: '#0D0C0A', marginBottom: 10 }}>Partner with AirStay</h2>
            <p style={{ fontFamily: 'DM Sans', fontSize: 13.5, fontWeight: 300, color: '#6F6A64', lineHeight: 1.8, marginBottom: 32 }}>
              Tell us about your property or building. A senior member of our team will be in touch within one business day to arrange a complimentary assessment.
            </p>
            <LeadForm key={key} type="owner" fields={OWNER_FIELDS} files={OWNER_FILES} success={OWNER_SUCCESS} submitLabel="Request My Assessment" onClose={handleClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
