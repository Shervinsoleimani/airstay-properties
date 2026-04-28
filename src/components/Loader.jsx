import { motion } from 'framer-motion'

export default function Loader({ onComplete }) {
  return (
    <motion.div
      className="loader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="font-display text-3xl font-light text-cream tracking-[0.2em] uppercase">
          Air<span className="text-gold">stay</span>
        </p>
      </motion.div>

      <div className="loader-bar" onAnimationEnd={onComplete} />

      <motion.p
        className="font-body text-[10px] tracking-[0.3em] uppercase text-cream/20 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Elevated Living
      </motion.p>
    </motion.div>
  )
}
