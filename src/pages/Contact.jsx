import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import LeadForm from '../components/LeadForm'
import {
  CONTACT_FIELDS, CONTACT_FILES, CONTACT_SUCCESS,
  CONTACT_FIELDS_FR, CONTACT_FILES_FR, CONTACT_SUCCESS_FR,
} from '../lib/forms'
import { BOOKING_URL } from '../lib/data'

const mono = { fontFamily: 'DM Mono', letterSpacing: '0.18em', textTransform: 'uppercase' }
const accent = { fontStyle: 'italic', color: '#C9A96E' }

// /contact is English; /fr/contact is French, written in Québec French rather than
// translated line by line. Each version links to the other.
const COPY = {
  en: {
    eyebrow: 'Get In Touch',
    title: <>Let’s start a<br /><em style={accent}>conversation.</em></>,
    intro: 'Guests, property owners, boutique hotels, building managers and public-sector partners: write to us.',
    email: 'Email',
    support: 'Customer Support',
    reservations: 'Reservations',
    montreal: 'Old Montréal & downtown, Québec',
    vancouver: 'Owner enquiries open',
    staying: 'Staying with us now? For the fastest help, message us through your reservation.',
    formEyebrow: 'Write to Us',
    formTitle: 'How can we help?',
    submit: 'Send Message',
    other: { to: '/fr/contact', lang: 'fr', label: 'Français' },
  },
  fr: {
    eyebrow: 'Nous joindre',
    title: <>Une question,<br /><em style={accent}>un projet?</em></>,
    intro: 'Voyageurs, propriétaires, hôtels-boutiques, gestionnaires d’immeubles et partenaires du secteur public : écrivez-nous.',
    email: 'Courriel',
    support: 'Service à la clientèle',
    reservations: 'Réservations',
    montreal: 'Vieux-Montréal et centre-ville, Québec',
    vancouver: 'Ouvert aux demandes des propriétaires',
    staying: 'Vous séjournez chez nous? Pour obtenir de l’aide plus rapidement, écrivez-nous par la messagerie de votre réservation.',
    formEyebrow: 'Votre message',
    formTitle: 'Comment pouvons-nous vous aider?',
    submit: 'Envoyer le message',
    title_tag: 'Nous joindre | AirStay Properties',
    other: { to: '/contact', lang: 'en', label: 'English' },
  },
}

export default function Contact({ lang = 'en' }) {
  const fr = lang === 'fr'
  const t = fr ? COPY.fr : COPY.en

  // French page title while on /fr/contact; the previous title comes back on leaving.
  useEffect(() => {
    if (!fr) return undefined
    const previous = document.title
    document.title = COPY.fr.title_tag
    return () => { document.title = previous }
  }, [fr])

  return (
    <div lang={fr ? 'fr' : 'en'} className="page-in r-stack" style={{ background: '#FAF7F2', minHeight: '100vh', display: 'grid', gridTemplateColumns: '5fr 6fr' }}>
      {/* Left: photo panel */}
      <div className="r-pad" style={{ position: 'relative', overflow: 'hidden', padding: '180px 64px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#0D0C0A' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/bishop/5-stair.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,12,10,0.9), rgba(13,12,10,0.82) 50%, rgba(13,12,10,0.95))' }} />
        <div style={{ position: 'relative' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
              <div className="eyebrow" style={{ color: '#C9A96E' }}>{t.eyebrow}</div>
              <Link to={t.other.to} lang={t.other.lang} hrefLang={t.other.lang}
                style={{ ...mono, fontSize: 10, color: 'rgba(242,237,228,0.75)', textDecoration: 'none', borderBottom: '1px solid rgba(201,169,110,0.45)', paddingBottom: 3 }}>
                {t.other.label}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}><h1 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 24 }}>{t.title}</h1></Reveal>
          <Reveal delay={0.2}><p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: 'rgba(242,237,228,0.7)', lineHeight: 1.9, maxWidth: 420, marginBottom: 56 }}>{t.intro}</p></Reveal>

          <Reveal delay={0.3}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
              {[
                [t.email, <a key="e" href="mailto:info@airstayproperties.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@airstayproperties.com</a>],
                [t.support, <a key="t" href="tel:+16042562560" style={{ color: 'inherit', textDecoration: 'none' }}>(604) 256-2560</a>],
                [t.reservations, <a key="r" href={`${BOOKING_URL}/all-listings`} style={{ color: 'inherit', textDecoration: 'none' }}>book.airstayproperties.com</a>],
                ['Montréal', t.montreal],
                ['Vancouver', t.vancouver],
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
            {t.staying}
          </p>
        </Reveal>
      </div>

      {/* Right: form */}
      <div className="r-pad" style={{ padding: '180px 64px 100px', display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: 680 }}>
          <Reveal><p style={{ ...mono, fontSize: 10, color: '#C9A96E', marginBottom: 10 }}>{t.formEyebrow}</p></Reveal>
          <Reveal delay={0.05}><h2 style={{ fontFamily: 'Playfair Display', fontSize: 36, fontWeight: 400, color: '#0D0C0A', marginBottom: 40 }}>{t.formTitle}</h2></Reveal>
          <Reveal delay={0.1}>
            {fr ? (
              <LeadForm key="fr" type="contact" lang="fr" fields={CONTACT_FIELDS_FR} files={CONTACT_FILES_FR} success={CONTACT_SUCCESS_FR}
                submitLabel={t.submit} sms extra={{ formLanguage: 'French' }} />
            ) : (
              <LeadForm key="en" type="contact" fields={CONTACT_FIELDS} files={CONTACT_FILES} success={CONTACT_SUCCESS} submitLabel={t.submit} sms />
            )}
          </Reveal>
        </div>
      </div>
    </div>
  )
}
