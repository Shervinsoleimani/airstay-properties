import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Reveal, RevealText, RevealLine } from '../components/Reveal'
import PropertyCard from '../components/PropertyCard'
import { DEMO_LISTINGS } from '../lib/hostaway'

const MARQUEE_ITEMS = ['Boutique Hotels', '·', 'Short-Term Stays', '·', 'Long-Term Rentals', '·', 'Property Management', '·', 'Vancouver', '·', 'Montreal', '·', 'Boutique Hotels', '·', 'Short-Term Stays', '·', 'Long-Term Rentals', '·', 'Property Management', '·', 'Vancouver', '·', 'Montreal', '·']

export default function Home({ onBookNow, onOwnerInquiry }) {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 600], [0, 120])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <div className="page-enter">
      {/* ── HERO ──────────────────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-ink">
        {/* Background */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-900 to-ink" />
          {/* Grain texture */}
          <div className="absolute inset-0 opacity-[0.08]"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
          {/* Gold accent lines */}
          <motion.div
            className="absolute top-1/3 right-[8%] w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent"
            style={{ height: '40vh' }}
            initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
            transition={{ duration: 1.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute top-1/2 right-[16%] w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent"
            style={{ height: '25vh' }}
            initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
            transition={{ duration: 1.4, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* City labels floating */}
        <motion.div
          className="absolute top-32 right-12 text-right hidden lg:block"
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-2">Currently operating</p>
          <p className="font-display text-2xl font-light text-cream/60">Vancouver</p>
          <p className="font-display text-2xl font-light text-cream/60">Montreal</p>
        </motion.div>

        {/* Hero content */}
        <motion.div className="relative z-10 w-full pb-20 pt-40 px-8 md:px-16 max-w-[1440px] mx-auto" style={{ opacity: heroOpacity }}>
          <motion.div
            className="flex items-center gap-3 text-gold text-[10px] tracking-[0.3em] uppercase font-body mb-10"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
          >
            <span className="w-8 h-px bg-gold inline-block" />
            Boutique Hospitality · Canada
          </motion.div>

          <div className="overflow-hidden mb-4">
            <motion.h1
              className="font-display font-light text-cream"
              style={{ fontSize: 'clamp(56px, 8vw, 110px)', lineHeight: 1.0 }}
              initial={{ y: '100%' }} animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 2.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Where luxury
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-4">
            <motion.h1
              className="font-display font-light"
              style={{ fontSize: 'clamp(56px, 8vw, 110px)', lineHeight: 1.0, color: 'transparent', WebkitTextStroke: '1px #b8905a' }}
              initial={{ y: '100%' }} animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 2.45, ease: [0.22, 1, 0.36, 1] }}
            >
              feels like
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-12">
            <motion.h1
              className="font-display font-light text-cream"
              style={{ fontSize: 'clamp(56px, 8vw, 110px)', lineHeight: 1.0 }}
              initial={{ y: '100%' }} animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 2.6, ease: [0.22, 1, 0.36, 1] }}
            >
              home.
            </motion.h1>
          </div>

          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center gap-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
          >
            <button onClick={onBookNow} className="bg-gold text-ink font-body text-xs tracking-[0.15em] uppercase font-medium px-12 py-4 hover:bg-cream transition-all duration-300">
              Explore Properties
            </button>
            <button onClick={onOwnerInquiry} className="font-body text-xs tracking-[0.1em] uppercase text-cream/50 hover:text-cream border-b border-cream/20 hover:border-cream/50 pb-0.5 transition-all duration-200">
              I own a property →
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-12 mt-16 pt-12 border-t border-cream/10"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.2 }}
          >
            {[['50+', 'Properties'], ['4.9★', 'Avg. Rating'], ['2', 'Cities'], ['1,200+', 'Happy Guests']].map(([num, label]) => (
              <div key={label}>
                <p className="font-display text-3xl font-light text-cream">{num}</p>
                <p className="font-body text-xs tracking-widest uppercase text-cream/40 mt-1">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          <span className="font-body text-[9px] tracking-[0.3em] uppercase text-cream/30">Scroll</span>
          <motion.div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
          />
        </motion.div>
      </section>

      {/* ── MARQUEE ────────────────────────────── */}
      <div className="bg-gold py-4 overflow-hidden">
        <div className="marquee-track">
          {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, i) => (
            <span key={i} className="font-body text-xs tracking-[0.15em] uppercase text-ink/70 px-5 whitespace-nowrap">{item}</span>
          ))}
        </div>
      </div>

      {/* ── INTRO ──────────────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-16 py-28">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="eyebrow">About Airstay</div>
            <h2 className="heading-lg text-ink mt-2">
              We don't just manage<br />properties — we <em className="font-display italic text-gold not-italic">craft</em><br />experiences.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body font-light text-muted leading-relaxed text-base mb-8">
              Airstay Properties is a premium hospitality company based in Vancouver and Montreal. We manage boutique hotels, curated short-term stays, and long-term residences — each one maintained to an uncompromising standard of quality, powered by industry-leading technology.
            </p>
            <p className="font-body font-light text-muted leading-relaxed text-base mb-10">
              Our platform integrates Hostaway for seamless property management and Pricelabs for dynamic pricing — so your stay is always priced fairly, and our owners always earn at their full potential.
            </p>
            <div className="flex gap-4">
              <button onClick={onBookNow} className="btn-primary">Browse Properties</button>
              <button onClick={onOwnerInquiry} className="btn-ghost">For Owners →</button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────── */}
      <section className="bg-ink py-28" id="services">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <Reveal><div className="eyebrow" style={{ color: '#b8905a' }}>What We Offer</div></Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <Reveal delay={0.1}>
              <h2 className="heading-lg text-cream">Full-spectrum<br /><em className="italic text-gold">hospitality.</em></h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body font-light text-cream/50 text-sm max-w-xs leading-relaxed">
                One company, four specialisations — all managed with the same obsession over quality.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-cream/5">
            {[
              { icon: '🏨', name: 'Boutique Hotels', desc: 'Handpicked properties with full hotel services, concierge, and curated local experiences.' },
              { icon: '🗝️', name: 'Short-Term Rentals', desc: 'Premium apartments and suites for stays from 3 nights to 3 months — fully furnished.' },
              { icon: '🏠', name: 'Long-Term Rentals', desc: 'Managed residences with flexible leases, maintenance included, and dedicated support.' },
              { icon: '🔧', name: 'Property Maintenance', desc: 'End-to-end care for every property we manage — proactive, responsive, meticulous.' },
            ].map((service, i) => (
              <Reveal key={service.name} delay={i * 0.1}>
                <div className="bg-ink p-10 h-full group cursor-default hover:bg-stone-950 transition-colors duration-300 border border-cream/5">
                  <div className="text-3xl mb-8 opacity-70">{service.icon}</div>
                  <h3 className="font-display text-2xl font-light text-cream mb-4">{service.name}</h3>
                  <p className="font-body font-light text-cream/40 text-sm leading-relaxed">{service.desc}</p>
                  <div className="mt-8 w-6 h-px bg-gold/40 group-hover:w-12 transition-all duration-300" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROPERTIES ─────────────────── */}
      <section className="py-28">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="flex items-end justify-between mb-16">
            <div>
              <Reveal><div className="eyebrow">Our Portfolio</div></Reveal>
              <Reveal delay={0.1}><h2 className="heading-lg text-ink mt-2">Curated spaces,<br /><em className="italic text-gold">exceptional</em> stays.</h2></Reveal>
            </div>
            <Reveal delay={0.2}>
              <a href="/properties" className="btn-ghost hidden md:flex">View all properties →</a>
            </Reveal>
          </div>

          {/* Mosaic grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {DEMO_LISTINGS.slice(0, 3).map((listing, i) => (
              <Reveal key={listing.id} delay={i * 0.1}>
                <PropertyCard listing={listing} index={i} />
              </Reveal>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {DEMO_LISTINGS.slice(3, 5).map((listing, i) => (
              <Reveal key={listing.id} delay={i * 0.1}>
                <PropertyCard listing={listing} index={i} size="large" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR OWNERS ──────────────────────────── */}
      <section className="bg-surface py-28" id="owners">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <Reveal><div className="eyebrow">For Property Owners</div></Reveal>
              <Reveal delay={0.1}><h2 className="heading-lg text-ink mt-2">Put your<br />property<br />to <em className="italic text-gold">work.</em></h2></Reveal>
              <Reveal delay={0.2}>
                <ul className="mt-10 space-y-6">
                  {[
                    ['Maximum Revenue', 'Pricelabs dynamic pricing ensures your property earns at its peak potential — automatically.'],
                    ['Zero Hassle', 'We handle guests, cleaning, maintenance, compliance, and monthly reporting.'],
                    ['Full Transparency', 'Real-time dashboard, monthly statements, and a dedicated property manager.'],
                    ['Your Investment Protected', 'Vetted guests, insurance compliance, and meticulous property care.'],
                  ].map(([title, desc], i) => (
                    <li key={title} className="flex gap-5">
                      <span className="font-display text-2xl font-light text-gold flex-shrink-0 mt-0.5">0{i+1}</span>
                      <div>
                        <p className="font-body font-medium text-ink text-sm mb-1">{title}</p>
                        <p className="font-body font-light text-muted text-sm leading-relaxed">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <button onClick={onOwnerInquiry} className="btn-outline mt-12">Submit Your Property →</button>
              </Reveal>
            </div>

            {/* Visual panel */}
            <Reveal delay={0.3} direction="left">
              <div className="relative bg-ink p-12 overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'repeating-linear-gradient(45deg, #b8905a 0, #b8905a 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
                <div className="relative z-10">
                  <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold mb-6">Average Owner Results</p>
                  {[
                    { label: 'Revenue increase vs self-managed', value: '+38%' },
                    { label: 'Occupancy rate', value: '84%' },
                    { label: 'Response to maintenance requests', value: '<4 hrs' },
                    { label: 'Guest satisfaction score', value: '4.9 / 5' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-baseline py-4 border-b border-cream/10 last:border-0">
                      <span className="font-body text-xs font-light text-cream/50">{label}</span>
                      <span className="font-display text-2xl font-light text-gold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────── */}
      <section className="py-28">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <Reveal><div className="eyebrow">Testimonials</div></Reveal>
          <Reveal delay={0.1}><h2 className="heading-lg text-ink mt-2 mb-16">Trusted by guests<br />and owners <em className="italic text-gold">alike.</em></h2></Reveal>

          <div className="grid md:grid-cols-3 gap-px bg-gold/10">
            {[
              { quote: 'Staying at the Yaletown Loft was effortless. The quality and responsiveness of the team was genuinely five-star — felt better than any hotel I\'ve stayed in.', name: 'Sophia R.', role: 'Guest · Vancouver' },
              { quote: 'Airstay manages two of my condos. Revenue is up over 35% compared to when I was managing them myself, and I genuinely do nothing — they handle absolutely everything.', name: 'Marcus T.', role: 'Property Owner · Montreal' },
              { quote: 'We stayed six weeks on a work assignment. Having a beautifully managed space made the whole experience — the attention to detail in every corner of the apartment was remarkable.', name: 'Yuki & James', role: 'Long-Term Guests · Montreal' },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="bg-parchment p-10 h-full">
                  <div className="text-gold tracking-widest mb-6">★★★★★</div>
                  <p className="font-display text-xl font-light italic text-ink leading-relaxed mb-8">"{t.quote}"</p>
                  <div>
                    <p className="font-body text-xs font-medium tracking-widest uppercase text-ink">{t.name}</p>
                    <p className="font-body text-xs text-gold mt-1 tracking-wider">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH SECTION ────────────────────────── */}
      <section className="bg-ink py-20">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 text-center">
          <Reveal>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold/70 mb-6">Powered by</p>
            <div className="flex items-center justify-center gap-16 flex-wrap">
              {[['Hostaway', 'Property Management'], ['Pricelabs', 'Dynamic Pricing'], ['Stripe', 'Secure Payments']].map(([name, role]) => (
                <div key={name} className="text-center">
                  <p className="font-display text-2xl font-light text-cream/70">{name}</p>
                  <p className="font-body text-[10px] tracking-widest uppercase text-gold/50 mt-1">{role}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 to-cream" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 text-center">
          <Reveal>
            <h2 className="heading-display text-ink mb-8">
              Ready for an<br /><em className="italic text-gold">elevated</em> stay?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-body font-light text-muted text-base mb-12 max-w-md mx-auto">
              Browse our curated portfolio of boutique hotels and premium rentals across Vancouver and Montreal.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={onBookNow} className="btn-primary">Explore Properties</button>
              <button onClick={onOwnerInquiry} className="btn-outline">I Own a Property</button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
