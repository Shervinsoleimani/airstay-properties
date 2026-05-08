import { motion } from 'framer-motion'

export default function Loader({ onDone }) {
  return (
    <motion.div className="page-loader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}>
        <img src="/logo.svg" alt="Airstay" style={{ height: 56, width: 'auto' }} />
      </motion.div>
      <motion.p className="eyebrow mt-6"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        style={{ color: 'rgba(201,169,110,0.5)' }}>
        Elevated Living, Worldwide
      </motion.p>
      <div className="loader-progress">
        <div className="loader-fill" onAnimationEnd={onDone} />
      </div>
    </motion.div>
  )
}
