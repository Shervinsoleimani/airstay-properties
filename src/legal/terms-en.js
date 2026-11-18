// Terms of Use and Booking Terms (English).
// French is the default version (/terms); this one is served at /terms?lang=en.
// Keep section and sub-section ids identical in terms-fr.js.
// Review notes: legal/website-legal-alignment-2026-11-18.md

const terms = {
  lang: 'en',
  ui: { language: 'Language', contents: 'Contents', backToContents: 'Back to contents' },
  eyebrow: 'Legal',
  title: 'Terms of Use',
  titleAccent: '& Booking Terms',
  intro: 'The terms that apply when you use our website, book a stay directly with AirStay Properties, or reserve one of our residences through a booking platform.',
  meta: ['Version 1.0', 'Last updated: November 18, 2026', 'Booking terms effective: November 20, 2026'],
  languageNote: 'This document is available in French and in English. In case of any discrepancy, the French version prevails.',

  summary: {
    title: 'At a glance: direct bookings',
    items: [
      'Prices include all mandatory fees, including cleaning. GST, QST and any applicable lodging tax are added at checkout.',
      'We email you a confirmation, including these Terms, within 15 days of booking.',
      'The Responsible Guest must be 18 or older and complete online check-in with a government-issued photo ID and identity verification. Access instructions are sent only after verification.',
      'A pre-authorization hold (CAD $500, or up to CAD $1,000 for our largest residences) may be placed up to 3 days before arrival and is released within 7 days after check-out if there is no claim. The amount is shown before you pay.',
      'Check-in from 4:00 p.m., check-out by 11:00 a.m. Quiet hours from 10:00 p.m. to 7:00 a.m.',
      'No parties or events. No smoking or vaping in the unit, on balconies and terraces, or in the building, including common areas. No pets unless approved in writing before arrival.',
      'We charge only documented actual costs for damage, loss or excessive cleaning, after sending you a description with photos or invoices and giving you an opportunity to respond.',
      'Bookings made through a platform follow that platform’s terms and the listing’s house rules (Section 4).',
    ],
    note: 'This summary is provided for convenience. The full terms below apply.',
  },

  sections: [
    {
      id: 'about',
      title: 'About us and scope of these Terms',
      blocks: [
        'AirStay Properties Inc. (“AirStay”, “we”, “us” or “our”) is a corporation incorporated under the laws of British Columbia. We operate in Montréal, Québec, where we manage short-term and long-term rental residences on behalf of their owners (“Owners”) and provide property and building management, cleaning and housekeeping, landscaping and grounds care, and maintenance services. We are expanding to Vancouver, British Columbia.',
        {
          rows: [
            ['Legal name', 'AirStay Properties Inc.'],
            ['Registered office', 'Suite 1915, 610 Granville Street, Vancouver, BC V6C 3T3'],
            ['Québec enterprise number (NEQ)', 'Registration in progress'],
            ['CITQ registration nos.', '295420 (2055 Bishop Street), 304411 (386 Le Moyne Street), 312667 (380 Le Moyne Street), 316300 (155 Saint-Paul Street East)'],
          ],
        },
        'Our short-term residences are offered in tourist accommodation establishments registered with the Corporation de l’industrie touristique du Québec (CITQ). The registration number of each establishment is shown on its listing.',
        'These Terms of Use and Booking Terms (the “Terms”) apply to:',
        {
          list: [
            'your use of airstayproperties.com (the “Website”);',
            'reservations made directly with us, including through our booking site at book.airstayproperties.com (the “Booking Site”), and any reservation paid to AirStay directly (Section 3);',
            'reservations of our residences made through third-party booking platforms, to the extent described in Section 4;',
            'inquiries about long-term rentals, owner services and careers (Sections 5 to 7).',
          ],
        },
        '**In short:** if you book on our website or Booking Site, or pay AirStay directly, these Terms and the rental agreement provided with your booking apply. Airbnb reservations are governed by Airbnb’s terms and the listing’s house rules.',
        'By using the Website or making a direct booking, you accept these Terms. If you do not accept them, please do not use the Website or make a booking. How we handle personal information is explained in our [Privacy Policy](/privacy?lang=en).',
      ],
    },

    {
      id: 'website',
      title: 'Using our Website',
      blocks: [
        { h: 'Acceptable use', id: 'acceptable-use' },
        'You may use the Website only for lawful purposes and in accordance with these Terms. You agree not to:',
        {
          list: [
            'provide false or misleading information, impersonate another person, or submit a request or booking on someone’s behalf without their authorization;',
            'interfere with the security or operation of the Website, attempt to gain unauthorized access to it, or introduce viruses or other harmful code;',
            'use robots, scrapers or other automated means to copy, collect or monitor its content, or reproduce our listings, photos or descriptions to advertise any property elsewhere;',
            'use the Website to send unsolicited messages or for any fraudulent purpose.',
          ],
        },
        { h: 'Accuracy of information', id: 'accuracy' },
        'We take care to describe our residences and services accurately. Photos and descriptions are representative: furnishings, finishes, layouts, views and amenities may vary between residences of the same type and may change over time. Availability, prices and booking conditions are confirmed on the Booking Site at the time of booking and in your booking confirmation. Content on the Website is general information and is not an offer to rent.',
        { h: 'Availability of the Website', id: 'availability' },
        'We may update, suspend or discontinue any part of the Website at any time. We do our best to keep it available and accurate, but we do not guarantee that it will be uninterrupted or free of errors.',
        { h: 'Age', id: 'age' },
        'You must be at least 18 years old to make a booking or to enter into any agreement with us.',
      ],
    },

    {
      id: 'direct-bookings',
      title: 'Direct bookings',
      blocks: [
        'This Section applies to reservations made directly with AirStay, through the Booking Site or confirmed in writing by our team (“direct bookings”), that are confirmed on or after November 20, 2026.',

        { h: 'Documents that apply to your booking', id: 'booking-documents' },
        'Each direct booking is subject to these Terms and to the rental agreement and house rules provided with your booking confirmation, as well as to the cancellation policy shown at the time of booking. If the rental agreement and these Terms are inconsistent, the provision more favourable to the guest applies.',
        'The accommodation contract, version 2.2 (the French version prevails), for each establishment:',
        {
          list: [
            '[Accommodation contract, version 2.2: 155 Saint-Paul Street East · CITQ 316300 (PDF)](/legal/AirStay-Contrat-v2.2-155-Saint-Paul-CITQ-316300.pdf)',
            '[Accommodation contract, version 2.2: 380 Le Moyne Street · CITQ 312667 (PDF)](/legal/AirStay-Contrat-v2.2-380-Le-Moyne-CITQ-312667.pdf)',
            '[Accommodation contract, version 2.2: 386 Le Moyne Street · CITQ 304411 (PDF)](/legal/AirStay-Contrat-v2.2-386-Le-Moyne-CITQ-304411.pdf)',
            '[Accommodation contract, version 2.2: 2055 Bishop Street · CITQ 295420 (PDF)](/legal/AirStay-Contrat-v2.2-Bishop-2055-CITQ-295420.pdf)',
          ],
        },
        'Your booking is a short-term tourist accommodation contract in an establishment registered with the CITQ. It is not a lease of a dwelling within the meaning of article 1892 of the Civil Code of Québec, and no landlord-tenant relationship is created.',

        { h: 'Price and confirmation', id: 'price-confirmation' },
        'Prices shown include all mandatory fees, including cleaning. GST, QST and any applicable lodging tax are added at checkout, and the total is shown before you confirm. Amounts are in Canadian dollars unless otherwise indicated.',
        'A booking request, inquiry, quote or hold on dates is not a confirmed reservation. Your reservation is confirmed once payment has been received or authorized as shown at checkout and, for a booking request, once we have accepted it. We will email you a confirmation, including these Terms, within 15 days of booking.',
        'We may decline a booking request for a legitimate reason, for example if the payment fails, the information provided is incomplete or inconsistent, we suspect fraud, or the booking presents a risk to the property, the building or other residents. We never refuse a booking on a ground of discrimination prohibited by the Québec Charter of human rights and freedoms.',

        { h: 'Payment and authentication', id: 'payment' },
        'Payment is due as shown at the time of booking. Payments are processed by our third-party payment processor, and we do not store full payment card numbers. Charges appear on your card statement as **AirStay (Rentals by Shervin)**.',
        'To protect you against card fraud, your card issuer may ask you to authenticate a payment or the saving of your card (for example, with a one-time code or in your banking app). If authentication is not completed, the payment may be declined and the booking will not be confirmed.',

        { h: 'Responsible Guest and identity verification', id: 'verification' },
        'The guest who makes the booking (the “Responsible Guest”) must be at least 18 years old and must stay at the property. The Responsible Guest is responsible for:',
        {
          list: [
            'making sure every guest follows these Terms, the rental agreement and the house rules;',
            'completing our online check-in form before arrival, including a government-issued photo ID and identity verification through our payment processor (the link is sent with your booking confirmation);',
            'making sure the name on the reservation matches the ID provided and the name of the cardholder on the payment card;',
            'reporting any damage or problem to us right away.',
          ],
        },
        'Where identity verification uses facial comparison (a selfie), we ask for your express consent, and you may instead choose a manual identity check by our team. Verification information is used only to verify your identity and prevent fraud, as explained in our [Privacy Policy](/privacy?lang=en).',
        'For the security of our guests and buildings, access instructions are sent only after verification is complete. If verification is not completed at least **24 hours before arrival** despite our reminders, we may cancel the reservation; any refund is determined by the cancellation policy that applied at the time of booking.',

        { h: 'Security hold', id: 'security-hold' },
        'We may place a pre-authorization hold on the Responsible Guest’s card for direct bookings and, as described in Section 4, for certain platform reservations for which AirStay processes the payment. The amount is shown in the listing and in your booking confirmation before you pay: **CAD $500** for standard units and up to **CAD $1,000** for four-bedroom lofts, the top-floor units at 155 Saint-Paul and the 380 Le Moyne penthouse.',
        'The hold may be placed up to **3 days before arrival**. Because a pre-authorization expires after a few days under card-network rules, we may renew it during your stay; your payment authorization remains valid even if the pre-authorization has expired. The hold is released no later than **7 days after check-out** unless we have sent you a claim notice (see Section 3.9). The time it takes for released funds to become available again depends on your card issuer.',
        'A hold is not a charge. It is not a penalty, and it does not limit your liability for documented costs.',

        { h: 'Check-in, check-out and late departures', id: 'check-in-out' },
        'Check-in is from **4:00 p.m.** on the arrival date and check-out is by **11:00 a.m.** on the departure date, unless we agree otherwise in writing. Early check-in and late check-out may be possible on request but are never guaranteed in advance.',
        'Staying past check-out without our consent may result in an obligation to leave the property, and the documented costs it causes may be charged as set out in Section 3.9.',

        { h: 'Occupancy and permitted use', id: 'occupancy' },
        'The property may be used only for personal lodging. Only the guests on the reservation may stay at the property, and their number may not exceed the occupancy shown on the listing. Adding a guest requires our approval before arrival and may carry an additional fee, which will be shown to you before you accept it.',
        'You may not sublet, assign or transfer your booking, or allow anyone other than the guests on the reservation to use the property, without our written consent.',

        { h: 'House rules and prohibited activities', id: 'house-rules' },
        'The following are prohibited:',
        {
          list: [
            'parties, events or gatherings, and any commercial use (including commercial photography or filming) without our prior written permission;',
            'smoking or vaping of any substance, including cannabis, in the unit, on balconies and terraces, or in the building, including common areas. Outside, please move away from the building’s doors, windows and air intakes;',
            'pets, unless approved in writing before arrival. Service animals assisting a person with a disability are not pets; please let us know before arrival;',
            'noise during quiet hours, from **10:00 p.m. to 7:00 a.m.**, and any breach of the building’s rules;',
            'exceeding the number of guests on the reservation;',
            'any unlawful, unsafe or hazardous activity, including disabling or tampering with a smoke detector, a lock or building equipment.',
          ],
        },
        'Additional house rules may be provided with your booking confirmation or shown on the listing; they form part of your booking.',
        'A serious or repeated breach of these rules by you or your guests may result in the end of the stay. Any refund will be determined in accordance with the cancellation policy and applicable law, and any documented costs may be charged as set out below.',

        { h: 'Damage and documented costs', id: 'charges' },
        'You are responsible for damage, loss, excessive cleaning or rule violations caused during your stay by you, your guests or anyone you allow into the property, beyond normal wear and tear. This includes any fine imposed by the City of Montréal or a condominium board because of conduct during your stay.',
        'You authorize AirStay and its payment processor to charge the card provided for the reservation and taxes and, where applicable, for the documented actual costs described above. We charge such costs only after we have sent you a description of the damage with photos or invoices and given you an opportunity to respond. This authorization also covers documented costs relating to your stay that are identified after check-out.',
        '**Claims process.** If we intend to charge documented costs, we send you a claim notice within **14 days after check-out**, with a description and supporting photos or invoices. You then have **7 days** to respond. After that period, and after considering your response, we may charge the documented amount to the card on file. Any amount charged in excess is refunded. You may contest a claim before the Small Claims Division of the Court of Québec.',

        { h: 'Smart locks and security cameras', id: 'locks-cameras' },
        'Our residences use smart locks with a unique code for each guest. The lock records the date and time of each entry. Some buildings have security cameras in certain common areas, such as hallways and entrances. There are never cameras inside the units. These records are used for safety, incident investigation, dispute resolution and claims, as described in our [Privacy Policy](/privacy?lang=en).',

        { h: 'Condition of the property and check-out', id: 'condition' },
        'We provide the property clean and in good order at check-in. Please leave it in the same condition, normal wear and tear excepted, and tell us promptly about any issue.',
        'Before you leave, please:',
        {
          list: [
            'put used dishes in the sink;',
            'gather used towels in the bathroom;',
            'put trash in the indoor bins;',
            'switch off the lights and the air conditioning;',
            'lock the door, and reply “CHECKED OUT” to our message.',
          ],
        },

        { h: 'Entry to the property', id: 'entry' },
        'AirStay or the Owner may enter the property at reasonable times, with prior notice, for maintenance, repairs or inspection. In an emergency, such as a fire, a water leak or imminent danger, we may enter without notice.',

        { h: 'Cancellations, changes, early departures and no-shows', id: 'cancellation' },
        // PENDING SHERVIN APPROVAL: direct-booking cancellation policy (contract v2.2, §7.1.1). Confirm before go-live.
        'For direct bookings: free cancellation within 48 hours of booking if arrival is 30 days or more away; regular dates: 100% refund 30 days or more before arrival, 50% from 14 to 29 days, no refund within 14 days; event and peak dates (indicated at booking): 100% refund 60 days or more before arrival, no refund after that; an optional non-refundable rate (10% discount); one free date change 30 days or more before arrival, subject to any price difference. If we re-let cancelled or unused nights, we refund the amount we received for those nights, up to what you paid. Refunds are made without deducting processing fees. For Vrbo, Expedia and other channels, the channel’s policy applies.',
        'Any refund is made to the original payment method. The full policy is set out in Section 7 of the accommodation contract.',
        'No refund is given for no-shows, and unused nights are not refunded if you leave before the end of your stay, except as provided by the cancellation policy or required by law.',
        'Changes to dates, residences or the number of guests are subject to availability and to our written confirmation, and may change the price.',
        'We recommend that you purchase travel insurance.',
        'If we cancel your booking for a reason other than a breach of these Terms or the rental agreement, we will refund the amounts paid for the cancelled nights or, if you prefer, offer you a comparable residence if one is available.',

        { h: 'Events beyond our control', id: 'force-majeure' },
        'Neither you nor we are responsible for a failure to perform caused by superior force (force majeure), such as a fire, a flood, a prolonged utility outage, a building emergency, an order of public authorities, a strike or an epidemic. If such an event prevents us from providing the property, we will offer a comparable alternative if one is available or refund the amounts paid for the nights we cannot provide. Please report any interruption to us right away so we can address it.',

        { h: 'Personal belongings, parking and amenities', id: 'belongings' },
        'Subject to the rules of the Civil Code of Québec on the liability of hotelkeepers (arts. 2298 and following) and except where we are at fault, AirStay is not responsible for loss, theft or damage to guests’ personal belongings, or for vehicles and parking, which guests arrange at their own risk. Parking is not included unless the listing says so. Any parking suggestions we provide concern third-party operators, who set their own rates, hours and conditions.',
        'Shared building amenities, where offered, are subject to the building’s rules and hours and may be temporarily unavailable.',

        { h: 'Electronic records and signatures', id: 'electronic' },
        'You agree that these Terms, the rental agreement and your booking may be accepted, signed, communicated and kept in electronic form. Your electronic acceptance, such as ticking a box, clicking to confirm or signing in the online check-in form, has the same effect as a handwritten signature, in accordance with the Act to establish a legal framework for information technology (Québec). Our electronic records of your booking, your acceptance, verification results and our communications may be used as evidence. When you accept these Terms and the rental agreement, we record the date and time of your acceptance, the IP address used and the version of the documents accepted.',

        { h: 'Billing questions and card disputes', id: 'billing-disputes' },
        'If you have a question or concern about a charge, please contact us first at [info@airstayproperties.com](mailto:info@airstayproperties.com). To the extent permitted by law, you agree to give us a reasonable opportunity to resolve it before disputing the charge with your card issuer. This does not limit any right you have under the Consumer Protection Act (Québec) or your card agreement.',
        'If a charge is disputed, we may provide our payment processor and the card issuer with the information reasonably needed to respond, including: your acceptance of these Terms; the results of identity verification; the messages exchanged with you; check-in and check-out information, including door access logs; and photos, invoices or other documents supporting the charge. We keep booking records, acceptance records, messages and verification results for at least 180 days after check-out, or longer while a dispute, chargeback or claim is open. Door access logs relating to a dispute or claim are preserved for as long as needed.',
      ],
    },

    {
      id: 'platform-bookings',
      title: 'Bookings through third-party platforms',
      blocks: [
        'When you book one of our residences through a third-party platform, such as Airbnb, Vrbo, Booking.com, Expedia, Hotels.com or Hopper, your reservation is made through that platform. The platform’s terms and the listing’s house rules apply, and, unless AirStay processes your payment, payments, refunds and cancellations are handled through the platform. If these Terms differ from the platform’s terms for a platform booking, the platform’s terms prevail.',
        'We follow each platform’s policies. Where a platform does not allow separate rental agreements, identity document collection or host fines, we do not impose them.',
        'For Vrbo, Expedia or Hotels.com reservations for which AirStay processes the payment, these Terms and the accommodation contract apply in addition to the platform’s terms, where the contract is attached to the listing or you accept it, including in our online check-in. The security hold described in Section 3 applies to these reservations when it is indicated in the listing before booking; Vrbo’s refundable damage deposit is not used. The platform’s cancellation policy applies.',
        'Airbnb reservations are governed only by Airbnb’s terms and the listing’s house rules.',
      ],
    },

    {
      id: 'long-term',
      title: 'Long-term residential rentals',
      blocks: [
        'Long-term rentals of furnished or unfurnished dwellings are leases of a dwelling governed by the Civil Code of Québec. They are concluded only by signing the mandatory lease form of the Tribunal administratif du logement, with any schedules required by law, and your rights and obligations are those set out in that lease and by law.',
        'Listings, prices, availability and descriptions on the Website, and any inquiry or visit, are not an offer to lease and do not reserve a dwelling. A dwelling is reserved only when a lease is signed by both parties.',
        'The personal information requested to assess a rental application is limited to what the law allows, as described in our [Privacy Policy](/privacy?lang=en).',
      ],
    },

    {
      id: 'owners',
      title: 'Property owners and service clients',
      blocks: [
        'Inquiries, rental assessments and proposals are free and non-binding, for you and for us.',
        'Revenue projections, occupancy rates, prices and other estimates are based on assumptions and on the market information available when they are prepared. They are estimates only, not guarantees of future revenue, occupancy or results.',
        'An assessment is not legal, tax or financial advice. In Montréal, short-term rental is subject to, among other things, zoning by-laws, registration with the CITQ and the rules of any declaration of co-ownership. An assessment does not confirm that a property may legally be rented on a short-term basis.',
        'Our management, cleaning, grounds care and maintenance services are provided only under a written agreement or an accepted quote, signed or approved by both parties, which then governs our relationship instead of these Terms.',
        'When you send us information about a property, you confirm that you own it or are authorized to share that information.',
      ],
    },

    {
      id: 'careers',
      title: 'Careers',
      blocks: [
        'Job postings on the Website are for information and may be changed or withdrawn at any time. Submitting an application does not create an employment relationship or any obligation to hire. Please make sure the information you provide is accurate and complete. We contact references only with your permission. We handle applicant information as described in our [Privacy Policy](/privacy?lang=en).',
      ],
    },

    {
      id: 'submissions',
      title: 'Your submissions and uploads',
      blocks: [
        'When you send us information or files through the Website, such as photos, documents, a CV or a portfolio, you confirm that:',
        {
          list: [
            'the information is accurate, and you have the right to share it;',
            'if it includes personal information about other people (for example, co-owners, tenants or guests), you are authorized to share it with us for the purpose of your request;',
            'the files are free of viruses or other harmful code and contain nothing unlawful, defamatory or infringing.',
          ],
        },
        'You keep ownership of your files. You allow us to use, copy and store them only as needed to respond to your request and to provide the related services. We may refuse, delete or not act on any submission that does not comply with these Terms.',
        'Do not upload identity documents or payment information through website forms, and do not send them by email. When we need them, we will ask for them through a secure channel.',
      ],
    },

    {
      id: 'intellectual-property',
      title: 'Intellectual property',
      blocks: [
        'The Website and its content, including text, photographs, videos, logos, trade names, designs and software, belong to AirStay or its licensors and are protected by copyright and trademark laws. You may view and print pages for your personal, non-commercial use. Any other use, including copying, reproducing, distributing, framing or modifying the content, requires our prior written permission. Our listing photos and descriptions may not be used to advertise any property elsewhere.',
      ],
    },

    {
      id: 'third-party',
      title: 'Third-party sites and services',
      blocks: [
        'Our Booking Site runs on a third-party reservation platform, and payments are handled by a third-party payment processor. The Website also links to booking platforms, maps, social networks and other third-party sites. These services are governed by their own terms and privacy policies, and we are not responsible for their content, availability or practices.',
        'If you receive an offer to book one of our residences from a website or a person you do not recognize, please contact us at [info@airstayproperties.com](mailto:info@airstayproperties.com) before making any payment.',
      ],
    },

    {
      id: 'liability',
      title: 'Disclaimers and limitation of liability',
      blocks: [
        'The Website and its content are provided for general information. We do not guarantee that the Website will be available at all times or free of errors.',
        {
          note: '**Notice to consumers in Québec:** under the Consumer Protection Act, a merchant may not exclude itself from the consequences of its own act or of the act of its representative. The limitations in the next paragraph therefore do not apply to consumers in Québec to the extent that Act prohibits them.',
        },
        'Subject to the notice above and to the extent permitted by law, AirStay’s total liability for any claim relating to a stay is limited to the amount paid for the reservation, and AirStay is not liable for indirect damages.',
        'For guests who book for business purposes and are not consumers within the meaning of the Consumer Protection Act, AirStay’s liability is limited to the price of the stay and excludes indirect damages, except for bodily or moral injury and for injury caused intentionally or through gross fault.',
        'Nothing in these Terms excludes or limits liability for bodily or moral injury, or for material injury caused intentionally or through gross fault (Civil Code of Québec, art. 1474), or any right or remedy you have under mandatory law, including the Consumer Protection Act.',
      ],
    },

    {
      id: 'governing-law',
      title: 'Governing law and disputes',
      blocks: [
        'These Terms and any direct booking are governed by the laws of the Province of Québec and the federal laws of Canada that apply there. Any dispute will be heard by the competent courts of the judicial district of Montréal, subject to the mandatory rights of consumers.',
        'If you are a consumer, this Section does not deprive you of any right you have under mandatory law, including the right to bring proceedings before the court of your place of domicile where the law allows it, and the protection of the mandatory rules of the law of your place of residence where they apply.',
        'We encourage you to contact us first so that we can try to resolve any concern quickly. This does not limit your right to go to court.',
      ],
    },

    {
      id: 'changes',
      title: 'Changes to these Terms',
      blocks: [
        'We may update these Terms to reflect changes in our services, in the law or in the requirements of booking platforms. The updated version is published on this page with a new “Last updated” date. Changes apply only to bookings confirmed after they take effect and to your use of the Website after they are published. A booking is governed by the version in force when it was confirmed. Previous versions are available on request.',
        'The booking terms in Sections 3 and 4 take effect on November 20, 2026 and apply to bookings confirmed on or after that date. Bookings confirmed earlier remain governed by the terms accepted at the time of booking.',
      ],
    },

    {
      id: 'language',
      title: 'Language',
      blocks: [
        'These Terms are available in French and in English. The French version is presented first; use the language selector at the top of this page to switch versions. In case of any discrepancy, the French version prevails.',
      ],
    },

    {
      id: 'general',
      title: 'General provisions and contact',
      blocks: [
        {
          list: [
            '**Entire agreement.** For a direct booking, these Terms, the rental agreement and house rules provided with your booking confirmation, and the cancellation policy shown at the time of booking form the entire agreement between you and us about your stay.',
            '**Severability.** If any provision is found invalid or unenforceable, the other provisions remain in force.',
            '**No waiver.** If we do not exercise a right under these Terms, we do not waive it.',
            '**Assignment.** You may not transfer your booking or your rights under these Terms without our written consent. We may assign our rights to an affiliate or a successor, provided your rights are not reduced.',
            '**Notices.** We may send you notices at the email address or phone number on your booking. You may send notices to us at info@airstayproperties.com.',
          ],
        },
        'To reach us:',
        {
          rows: [
            ['Company', 'AirStay Properties Inc.'],
            ['Registered office', 'Suite 1915, 610 Granville Street, Vancouver, BC V6C 3T3'],
            ['Québec enterprise number (NEQ)', 'Registration in progress'],
            ['Email', '[info@airstayproperties.com](mailto:info@airstayproperties.com)'],
            ['Card statement name', 'AirStay (Rentals by Shervin)'],
          ],
        },
      ],
    },
  ],

  closing: 'AirStay Properties Inc. · Terms of Use and Booking Terms · Version of November 18, 2026, booking terms effective November 20, 2026',
}

export default terms
