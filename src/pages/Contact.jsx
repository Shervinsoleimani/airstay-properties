import { useState } from 'react'
import { Reveal } from '../components/Reveal'
import toast from 'react-hot-toast'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return toast.error('Please fill in all required fields')
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="page-enter pt-32 pb-0">
      <div className="grid md:grid-cols-2 min-h-[80vh]">
        {/* Left — Dark info panel */}
        <div className="bg-ink px-8 md:px-16 py-20 flex flex-col justify-between">
          <div>
            <Reveal><div className="eyebrow" style={{ color: '#b8905a' }}>Get In Touch</div></Reveal>
            <Reveal delay={0.1}>
              <h1 className="heading-lg text-cream mt-2 mb-8">
                Let's start a<br /><em className="italic text-gold">conversation.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-body font-light text-cream/50 text-sm leading-relaxed mb-12 max-w-xs">
                Whether you're a guest, a property owner, or an investor — we'd love to hear from you. We respond within one business day.
              </p>
            </Reveal>

            {/* Locations */}
            <Reveal delay={0.3}>
              <div className="space-y-8">
                {[
                  { city: 'Vancouver', email: 'hello.van@airstayproperties.com' },
                  { city: 'Montreal', email: 'hello.mtl@airstayproperties.com' },
                ].map(({ city, email }) => (
                  <div key={city} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="font-display text-xl font-light text-cream">{city}</p>
                      <a href={`mailto:${email}`} className="font-body text-xs text-cream/40 hover:text-gold transition-colors mt-1 block">{email}</a>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4}>
            <div className="flex gap-3 mt-16">
              {['Instagram', 'LinkedIn', 'Facebook'].map(s => (
                <a key={s} href="#" className="font-body text-[10px] tracking-widest uppercase text-cream/30 hover:text-gold transition-colors">{s}</a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right — Form */}
        <div className="bg-parchment px-8 md:px-16 py-20 flex flex-col justify-center">
          {!submitted ? (
            <>
              <Reveal>
                <h2 className="heading-md text-ink mb-10">Send us a message</h2>
              </Reveal>
              <form onSubmit={handleSubmit} className="space-y-7">
                <Reveal delay={0.1}>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">Your Name *</label>
                    <input className="input-luxury" placeholder="Full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                  </div>
                </Reveal>
                <Reveal delay={0.15}>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">Email *</label>
                    <input type="email" className="input-luxury" placeholder="your@email.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                  </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">I am a...</label>
                    <select className="select-luxury" value={form.type} onChange={e => setForm({...form, type: e.target.value})}>
                      <option value="">Select one</option>
                      <option>Guest / Traveller</option>
                      <option>Property Owner</option>
                      <option>Investor</option>
                      <option>Potential Partner</option>
                      <option>Job Applicant</option>
                      <option>Press / Media</option>
                    </select>
                  </div>
                </Reveal>
                <Reveal delay={0.25}>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-gold font-body block mb-2">Message *</label>
                    <textarea className="input-luxury resize-none h-28" placeholder="How can we help you?" value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                  </div>
                </Reveal>
                <Reveal delay={0.3}>
                  <button type="submit" className="btn-primary" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message →'}
                  </button>
                </Reveal>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="font-display text-6xl text-gold mb-6">✦</div>
              <h3 className="heading-md text-ink mb-4">Message received.</h3>
              <p className="font-body text-sm text-muted font-light max-w-sm mx-auto">
                Thank you for reaching out. We'll get back to you within one business day.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
