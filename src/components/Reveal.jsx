import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export function Reveal({ children, delay = 0, className = '', y = 28 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 })
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

export function RevealWords({ text, delay = 0, className = '' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const words = text.split(' ')
  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.3em' }}>
          <motion.span style={{ display: 'inline-block' }}
            initial={{ y: '105%' }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.75, delay: delay + i * 0.055, ease: [0.22, 1, 0.36, 1] }}>
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  )
}

export function FadeIn({ children, delay = 0, className = '' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1.2, delay, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}
