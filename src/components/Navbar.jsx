import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  ['Stay', '/stay'],
  ['Own', '/own'],
  ['Long-Term', '/longterm'],
  ['Services', '/services'],
  ['About', '/about'],
  ['Careers', '/careers'],
]

export default function Navbar({ onBook }) {
  const [scrolled, setScrolled] = useState(false)
  const [menu, setMenu] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setMenu(false), [location])

  const dark = isHome && !scrolled

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          padding: scrolled ? '14px 48px' : '28px 48px',
          background: scrolled ? 'rgba(10,9,8,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,169,110,0.1)' : 'none',
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}>
        <div className="flex items-center justify-between max-w-[1600px] mx-auto">

          {/* Logo */}
          <Link to="/">
            <img src="/logo.svg" alt="Airstay Properties" style={{ height: 36, width: 'auto', filter: scrolled ? 'none' : 'brightness(1)' }} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            {LINKS.map(([label, href]) => (
              <Link key={label} to={href}
                className="font-body text-xs tracking-[0.12em] uppercase transition-colors duration-200"
                style={{ color: dark || scrolled ? 'rgba(242,237,228,0.6)' : 'rgba(13,12,10,0.6)', fontWeight: 400 }}
                onMouseEnter={e => e.target.style.color = '#C9A96E'}
                onMouseLeave={e => e.target.style.color = dark || scrolled ? 'rgba(242,237,228,0.6)' : 'rgba(13,12,10,0.6)'}>
                {label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button onClick={onBook}
              className="font-body text-xs tracking-[0.14em] uppercase px-8 py-3 transition-all duration-300"
              style={{ background: '#2C3E35', color: '#F2EDE4', border: 'none', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.background = '#C9A96E'}
              onMouseLeave={e => e.currentTarget.style.background = '#2C3E35'}>
              Book a Stay
            </button>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2" onClick={() => setMenu(!menu)}>
            <motion.span animate={{ rotate: menu ? 45 : 0, y: menu ? 7 : 0 }}
              style={{ display: 'block', width: 24, height: 1, background: dark ? '#F2EDE4' : '#0D0C0A', marginBottom: 6 }} />
            <motion.span animate={{ opacity: menu ? 0 : 1 }}
              style={{ display: 'block', width: 24, height: 1, background: dark ? '#F2EDE4' : '#0D0C0A', marginBottom: 6 }} />
            <motion.span animate={{ rotate: menu ? -45 : 0, y: menu ? -7 : 0 }}
              style={{ display: 'block', width: 24, height: 1, background: dark ? '#F2EDE4' : '#0D0C0A' }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menu && (
          <motion.div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
            style={{ background: '#0D0C0A' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {LINKS.map(([label, href], i) => (
              <motion.div key={label}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}>
                <Link to={href}
                  className="font-display text-5xl font-light"
                  style={{ color: '#F2EDE4' }}
                  onMouseEnter={e => e.target.style.color = '#C9A96E'}
                  onMouseLeave={e => e.target.style.color = '#F2EDE4'}>
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
              onClick={() => { setMenu(false); onBook?.() }}
              style={{ background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '16px 40px', border: 'none', cursor: 'pointer', marginTop: 16 }}>
              Book a Stay
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
