import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Loader({ onDone }) {
  // Never block the site: finish after 1.2s even if the CSS animation
  // doesn't fire (background tabs, reduced-motion settings, slow phones).
  const done = useRef(false)
  const finish = () => { if (!done.current) { done.current = true; onDone() } }
  useEffect(() => { const t = setTimeout(finish, 1200); return () => clearTimeout(t) }, [])
  return (
    <motion.div className="page-loader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}>
        <img src="/logo.svg" alt="AirStay" style={{ height: 56, width: 'auto' }} />
      </motion.div>
      <motion.p className="eyebrow mt-6"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        style={{ color: 'rgba(201,169,110,0.5)' }}>
        Old Montréal, From the Inside
      </motion.p>
      <div className="loader-progress">
        <div className="loader-fill" onAnimationEnd={finish} />
      </div>
    </motion.div>
  )
}
