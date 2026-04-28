import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ onBookNow }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const isDark = location.pathname === '/' && !scrolled

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'bg-parchment/95 backdrop-blur-md border-b border-gold/10 py-4' : 'py-7'
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="Airstay Properties" className="h-10 w-auto" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {[
              ['Properties', '/properties'],
              ['Services', '/#services'],
              ['For Owners', '/owners'],
              ['Careers', '/careers'],
              ['Contact', '/contact'],
            ].map(([label, href]) => (
              <Link
                key={label}
                to={href}
                className={`font-body text-xs tracking-[0.1em] uppercase font-light transition-colors duration-200 ${
                  isDark ? 'text-cream/70 hover:text-cream' : 'text-ink/60 hover:text-ink'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onBookNow}
              className="bg-gold text-cream font-body text-xs tracking-[0.12em] uppercase font-medium px-7 py-3 hover:bg-ink transition-colors duration-300"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="block w-6 h-px bg-ink" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-6 h-px bg-ink" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="block w-6 h-px bg-ink" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-ink z-30 flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[['Properties', '/properties'], ['For Owners', '/owners'], ['Careers', '/careers'], ['Contact', '/contact']].map(([label, href], i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={href} className="font-display text-4xl font-light text-cream hover:text-gold transition-colors">
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
              onClick={() => { setMenuOpen(false); onBookNow?.() }}
              className="mt-4 bg-gold text-ink font-body text-xs tracking-[0.12em] uppercase font-medium px-10 py-4"
            >
              Book Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
