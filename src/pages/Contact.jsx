import { Reveal } from '../components/Reveal'
import LeadForm from '../components/LeadForm'
import { CONTACT_FIELDS, CONTACT_FILES, CONTACT_SUCCESS } from '../lib/forms'
import { BOOKING_URL } from '../lib/data'

const mono = { fontFamily: 'DM Mono', letterSpacing: '0.18em', textTransform: 'uppercase' }

export default function Contact() {
  return (
    <div className="page-in r-stack" style={{ background: '#FAF7F2', minHeight: '100vh', display: 'grid', gridTemplateColumns: '5fr 6fr' }}>
      {/* Left: photo panel */}
      <div className="r-pad" style={{ position: 'relative', overflow: 'hidden', padding: '180px 64px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#0D0C0A' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/bishop/2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,12,10,0.9), rgba(13,12,10,0.82) 50%, rgba(13,12,10,0.95))' }} />
        <div style={{ position: 'relative' }}>
          <Reveal><div className="eyebrow" style={{ color: '#C9A96E', marginBottom: 24 }}>Get In Touch</div></Reveal>
          <Reveal delay={0.1}><h1 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 24 }}>Let’s start a<br /><em style={{ fontStyle: 'italic', color: '#C9A96E' }}>conversation.</em></h1></Reveal>
          <Reveal delay={0.2}><p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: 'rgba(242,237,228,0.7)', lineHeight: 1.9, maxWidth: 420, marginBottom: 56 }}>Guests, property owners, boutique hotels, building managers and public-sector partners: we would be delighted to hear from you.</p></Reveal>

          <Reveal delay={0.3}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
              {[
                ['Email', <a key="e" href="mailto:info@airstayproperties.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@airstayproperties.com</a>],
                ['Reservations', <a key="r" href={`${BOOKING_URL}/all-listings`} style={{ color: 'inherit', textDecoration: 'none' }}>book.airstayproperties.com</a>],
                ['Montreal', 'Old Montreal & Downtown, Québec'],
                ['Vancouver', 'Now launching'],
              ].map(([label, value]) => (
                <div key={label} style={{ display: 'flex', gap: 16 }}>
                  <span style={{ width: 20, height: 1, background: '#C9A96E', marginTop: 8, flexShrink: 0 }} />
                  <div>
                    <p style={{ ...mono, fontSize: 9, color: 'rgba(201,169,110,0.7)', marginBottom: 4 }}>{label}</p>
                    <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: 'rgba(242,237,228,0.8)' }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.4}>
          <p style={{ position: 'relative', fontFamily: 'DM Sans', fontSize: 12, fontWeight: 300, color: 'rgba(242,237,228,0.45)', lineHeight: 1.8, marginTop: 48, maxWidth: 420 }}>
            Staying with us now? For the fastest help, message us through your reservation.
          </p>
        </Reveal>
      </div>

      {/* Right: form */}
      <div className="r-pad" style={{ padding: '180px 64px 100px', display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: 680 }}>
          <Reveal><p style={{ ...mono, fontSize: 10, color: '#C9A96E', marginBottom: 10 }}>Write to Us</p></Reveal>
          <Reveal delay={0.05}><h2 style={{ fontFamily: 'Playfair Display', fontSize: 36, fontWeight: 400, color: '#0D0C0A', marginBottom: 40 }}>How can we help?</h2></Reveal>
          <Reveal delay={0.1}>
            <LeadForm type="contact" fields={CONTACT_FIELDS} files={CONTACT_FILES} success={CONTACT_SUCCESS} submitLabel="Send Message" />
          </Reveal>
        </div>
      </div>
    </div>
  )
}
