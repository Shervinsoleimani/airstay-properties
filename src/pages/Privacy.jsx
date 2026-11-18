import { Reveal } from '../components/Reveal'

const SECTIONS = [
  {
    title: 'Who we are',
    body: [
      'AirStay Properties ("AirStay", "we", "us") is a hospitality and property management company based in Montréal, Québec, Canada. We operate furnished short-term residences and manage short-term and long-term rentals on behalf of property owners.',
      'This Privacy Policy explains how we collect, use, share and protect personal information through our website, our direct bookings, our owner services and our recruitment. It is designed to meet the requirements of the Québec Act respecting the protection of personal information in the private sector (as amended by Law 25) and the federal Personal Information Protection and Electronic Documents Act (PIPEDA).',
    ],
  },
  {
    title: 'Person in charge of the protection of personal information',
    body: [
      'Our Privacy Officer is responsible for our compliance with privacy laws and for answering your questions and requests.',
    ],
    list: [
      'Privacy Officer: Shervin Soleimani, Founder',
      'Email: info@airstayproperties.com',
      'Address: AirStay Properties, Montréal, Québec, Canada',
    ],
  },
  {
    title: 'Information we collect',
    body: ['We only collect the personal information we need for the purposes described below.'],
    list: [
      'Website forms: your name, email address, phone number, city, and the details you choose to share with us, such as property type, number of units, preferred dates, budget or message.',
      'Booking and stay information: guest names, contact details, stay dates, number of guests, special requests and communications with our team.',
      'Identity verification: where required to confirm a reservation, a government-issued photo ID and related verification results, processed through a secure third-party verification provider.',
      'Payment information: payments are processed by a secure third-party payment processor. We do not store full card numbers on our systems.',
      'Owner information: property address and details, ownership and contact information, and the information needed to prepare a proposal or management agreement.',
      'Job applications: your name, contact details, resume, portfolio or profile link, and the information you include in your application.',
      'Technical information: device and browser type, pages visited and similar data collected through cookies and analytics tools, as described below.',
    ],
  },
  {
    title: 'How we use your information',
    list: [
      'To respond to your inquiries and requests.',
      'To process, confirm and manage reservations, including identity verification, payment, check-in and guest support.',
      'To protect our guests, properties, owners and neighbours, and to prevent fraud, damage and unauthorized use.',
      'To prepare proposals and provide property management services to owners.',
      'To evaluate job applications.',
      'To operate, secure and improve our website and services.',
      'To meet our legal, tax, regulatory and accounting obligations.',
      'To send you marketing communications, only where you have consented and with an easy way to unsubscribe.',
    ],
  },
  {
    title: 'Consent',
    body: [
      'We collect, use and share your personal information with your consent, except where the law permits or requires otherwise. By submitting a form or making a booking, you consent to the use of your information for the purposes described in this policy.',
      'You may withdraw your consent at any time by contacting our Privacy Officer, subject to legal or contractual restrictions. Withdrawing consent may mean we can no longer provide a service, such as completing a reservation.',
    ],
  },
  {
    title: 'Sharing with service providers',
    body: [
      'We do not sell your personal information. We share it only with trusted service providers that help us run our business, and only to the extent necessary, including:',
    ],
    list: [
      'Online booking platforms and channel partners through which you reserve.',
      'Our property management and reservation systems.',
      'Payment processors.',
      'Identity verification providers.',
      'Email and communication providers.',
      'Website hosting and analytics providers.',
      'Cleaning, maintenance and operations personnel, who receive only the information needed to prepare and service a residence.',
    ],
    after: [
      'These providers are required by contract to protect your information and to use it only for the services they provide to us. We may also disclose information where required by law, or to protect the rights, property or safety of AirStay, our guests or others.',
    ],
  },
  {
    title: 'Storage outside Québec',
    body: [
      'Some of our service providers may store or process personal information outside Québec, including elsewhere in Canada and in the United States. Before any such transfer, we assess whether the information will receive adequate protection, and we put contractual and technical safeguards in place. Information stored outside Québec may be subject to the laws of that jurisdiction.',
    ],
  },
  {
    title: 'Retention',
    body: [
      'We keep personal information only as long as needed for the purposes for which it was collected, or as required by law (for example, tax and accounting records). Identity verification data is kept only as long as needed to confirm a reservation and to handle any related claim or dispute. When information is no longer needed, we securely destroy or anonymize it.',
    ],
  },
  {
    title: 'Security',
    body: [
      'We use reasonable administrative, technical and physical safeguards to protect personal information against loss, theft and unauthorized access, use or disclosure. Access is limited to people who need it to do their work. If a confidentiality incident presents a risk of serious injury, we will notify the affected individuals and the Commission d’accès à l’information du Québec as required by law.',
    ],
  },
  {
    title: 'Your rights',
    body: ['Subject to applicable law, you have the right to:'],
    list: [
      'Access the personal information we hold about you.',
      'Ask us to correct information that is inaccurate, incomplete or out of date.',
      'Withdraw your consent to the use or sharing of your information.',
      'Ask us to stop disseminating your information or to de-index any hyperlink attached to your name, where the law allows.',
      'Receive computerized personal information you provided to us in a structured, commonly used technological format.',
      'File a complaint with the Commission d’accès à l’information du Québec or the Office of the Privacy Commissioner of Canada.',
    ],
    after: [
      'To exercise these rights, write to our Privacy Officer at info@airstayproperties.com. We may ask you to confirm your identity, and we will respond within 30 days.',
    ],
  },
  {
    title: 'Cookies and analytics',
    body: [
      'Our website uses cookies and similar technologies to make the site work, remember your preferences and understand how visitors use it. Where cookies are not essential, we ask for your consent, and you can change your browser settings to refuse or delete cookies at any time. Some parts of the website may not work properly without them.',
    ],
  },
  {
    title: 'Children',
    body: [
      'Our website and services are intended for adults. We do not knowingly collect personal information from children under 14. Reservations must be made by an adult guest.',
    ],
  },
  {
    title: 'Changes to this policy',
    body: [
      'We may update this Privacy Policy from time to time. The updated version will be posted on this page with a new “Last updated” date. If the changes are significant, we will let you know through our website or by other appropriate means.',
    ],
  },
  {
    title: 'Contact us',
    body: [
      'For any question, request or complaint about this policy or your personal information, please contact our Privacy Officer at info@airstayproperties.com.',
    ],
  },
]

export function LegalPage({ eyebrow, title, intro, sections }) {
  return (
    <div className="page-in" style={{ background: '#FAF7F2' }}>
      {/* Hero */}
      <div style={{ background: '#0D0C0A', padding: '160px 48px 90px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Reveal><div className="eyebrow" style={{ color: '#C9A96E', marginBottom: 24 }}>{eyebrow}</div></Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-xl" style={{ color: '#F2EDE4', marginBottom: 24 }}>{title}</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: '#9B9590', lineHeight: 1.9 }}>{intro}</p>
            <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginTop: 28 }}>Last updated: November 18, 2026</p>
          </Reveal>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '90px 48px 120px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          {sections.map((s, i) => (
            <Reveal key={s.title}>
              <section style={{ paddingTop: i === 0 ? 0 : 48, marginTop: i === 0 ? 0 : 48, borderTop: i === 0 ? 'none' : '1px solid rgba(13,12,10,0.08)' }}>
                <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(201,169,110,0.8)', marginBottom: 12 }}>{String(i + 1).padStart(2, '0')}</p>
                <h2 style={{ fontFamily: 'Playfair Display', fontSize: 28, fontWeight: 400, color: '#0D0C0A', marginBottom: 20, lineHeight: 1.3 }}>{s.title}</h2>
                {(s.body || []).map((p, j) => (
                  <p key={j} style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: '#4A4540', lineHeight: 1.9, marginBottom: 16 }}>{p}</p>
                ))}
                {s.list && (
                  <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 16px' }}>
                    {s.list.map((li, j) => (
                      <li key={j} style={{ display: 'flex', gap: 16, fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: '#4A4540', lineHeight: 1.8, marginBottom: 10 }}>
                        <span style={{ flex: '0 0 18px', height: 1, background: '#C9A96E', marginTop: 14 }} />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {(s.after || []).map((p, j) => (
                  <p key={j} style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: '#4A4540', lineHeight: 1.9, marginBottom: 16 }}>{p}</p>
                ))}
              </section>
            </Reveal>
          ))}

          <p style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 300, fontStyle: 'italic', color: '#9B9590', lineHeight: 1.8, marginTop: 72, paddingTop: 28, borderTop: '1px solid rgba(13,12,10,0.08)' }}>
            This document is provided for general information and may be updated.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Privacy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title={<>Privacy <em style={{ fontStyle: 'italic', color: '#C9A96E' }}>Policy</em></>}
      intro="Your trust matters to us. This policy explains what personal information we collect, why we collect it, and how we protect it."
      sections={SECTIONS}
    />
  )
}
