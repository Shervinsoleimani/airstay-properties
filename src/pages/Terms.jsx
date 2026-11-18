import { LegalPage } from './Privacy'

const SECTIONS = [
  {
    title: 'About these terms',
    body: [
      'These Terms of Use and Booking Terms ("Terms") apply to your use of airstayproperties.com and to reservations made directly with AirStay Properties ("AirStay", "we", "us"), Montréal, Québec, Canada. By using our website or making a direct booking, you agree to these Terms.',
      'Reservations made through a third-party platform (for example, an online travel agency) are also governed by that platform’s terms and by the house rules and policies shown on the listing.',
    ],
  },
  {
    title: 'Use of the website',
    list: [
      'You agree to use the website only for lawful purposes and to provide accurate information in any form you submit.',
      'You may not interfere with the website’s security or operation, attempt unauthorized access, or use automated tools to copy or collect its content.',
      'We may update, suspend or discontinue any part of the website at any time.',
    ],
  },
  {
    title: 'Listings and information',
    body: [
      'We take care to describe our residences accurately. Photos are representative, and furnishings, layouts, views and amenities may vary slightly between units of the same type. Prices, availability and offers shown on the website are subject to change until a reservation is confirmed. If we discover an error in a price or description, we will contact you before your reservation is confirmed.',
    ],
  },
  {
    title: 'Direct bookings',
    list: [
      'A booking request is not a confirmed reservation. Your reservation is confirmed only once you receive a written confirmation from AirStay and payment has been received as set out at the time of booking.',
      'The person making the reservation must be at least 18 years old (or the minimum age shown on the listing) and will be responsible for the stay and for all guests.',
      'Before access instructions are released, the main guest must complete our online check-in, including government-issued photo identification verification and acceptance of our rental agreement. Access instructions are sent only after these steps are complete.',
      'The name on the reservation must match the identification provided and, where applicable, the payment method used.',
    ],
  },
  {
    title: 'House rules',
    list: [
      'Check-in is from 4:00 PM and check-out is by 11:00 AM, unless otherwise agreed in writing.',
      'No parties or events of any kind.',
      'All residences are non-smoking, including cannabis and vaping.',
      'Quiet hours are from 10:00 PM to 7:00 AM.',
      'The number of guests may not exceed the occupancy shown on the reservation. Unregistered guests are not permitted.',
      'Guests must follow any additional rules shown on the listing or in the residence, and must respect the building, its residents and neighbours.',
    ],
    after: [
      'Serious or repeated breaches of the house rules may result in the end of the stay without refund, in addition to any applicable charges.',
    ],
  },
  {
    title: 'Cancellations and changes',
    body: [
      'Cancellations, refunds and changes are governed by the cancellation policy shown at the time of booking and in your confirmation. Changes to dates or residences are subject to availability and may change the total price.',
    ],
  },
  {
    title: 'Security deposit and damage',
    body: [
      'A security deposit, pre-authorization or damage protection may be required as shown at the time of booking. Guests are responsible for any damage, loss, excessive cleaning or rule violation that occurs during their stay, beyond normal wear and tear, and agree that the related costs may be charged to the payment method on file, in accordance with the rental agreement.',
    ],
  },
  {
    title: 'Property owners',
    body: [
      'Information, estimates and revenue projections provided to property owners through the website or in our communications are for general information only and are not guarantees of future performance. An owner inquiry, proposal or quote does not create any obligation for either party. Our property management services begin only once a written management agreement has been signed by both parties.',
    ],
  },
  {
    title: 'Intellectual property',
    body: [
      'All content on this website, including text, photographs, logos, designs and graphics, belongs to AirStay Properties or its licensors and is protected by intellectual property laws. You may not copy, reproduce, distribute or use it for commercial purposes without our prior written permission.',
    ],
  },
  {
    title: 'Third-party links and services',
    body: [
      'Our website may link to or rely on third-party services, such as booking platforms, payment processors and maps. We are not responsible for their content, terms or privacy practices.',
    ],
  },
  {
    title: 'Limitation of liability',
    body: [
      'To the extent permitted by law, AirStay is not liable for indirect, incidental or consequential damages arising from the use of the website or a stay, or for events beyond our reasonable control, such as utility interruptions, building works, weather or government measures. Guests are responsible for their personal belongings. Nothing in these Terms limits any rights you have under applicable consumer protection laws.',
    ],
  },
  {
    title: 'Privacy',
    body: [
      'Our collection and use of personal information is described in our Privacy Policy.',
    ],
  },
  {
    title: 'Governing law',
    body: [
      'These Terms are governed by the laws of the Province of Québec and the federal laws of Canada that apply there. Any dispute will be submitted to the competent courts of the judicial district of Montréal, subject to any rights you may have under applicable consumer protection laws.',
    ],
  },
  {
    title: 'Changes and contact',
    body: [
      'We may update these Terms from time to time. The version posted on this page, with its “Last updated” date, applies to your use of the website and to bookings made after that date.',
      'For any question about these Terms, please contact us at info@airstayproperties.com.',
    ],
  },
]

export default function Terms() {
  return (
    <LegalPage
      eyebrow="Legal"
      title={<>Terms of Use <em style={{ fontStyle: 'italic', color: '#C9A96E' }}>& Booking Terms</em></>}
      intro="The terms that apply when you use our website or book a residence directly with AirStay Properties."
      sections={SECTIONS}
    />
  )
}
