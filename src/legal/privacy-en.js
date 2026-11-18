// Privacy Policy (English).
// French is the default version (/privacy); this one is served at /privacy?lang=en.
// Keep section and sub-section ids identical in privacy-fr.js.
// Review notes: legal/website-legal-alignment-2026-11-18.md

const OFFICER_ROWS = [
  ['Privacy Officer', 'Shervin Soleimani, Founder'],
  ['Email', '[info@airstayproperties.com](mailto:info@airstayproperties.com) (subject: “Privacy”)'],
  ['Mail', 'AirStay Properties Inc., Attention: Privacy Officer, Suite 1915, 610 Granville Street, Vancouver, BC V6C 3T3'],
]

const privacy = {
  lang: 'en',
  ui: { language: 'Language', contents: 'Contents', backToContents: 'Back to contents' },
  eyebrow: 'Legal',
  title: 'Privacy',
  titleAccent: 'Policy',
  intro: 'How AirStay Properties collects, uses, shares and protects personal information, and how you can exercise your rights.',
  meta: ['Version 1.0', 'Last updated: November 18, 2026'],
  languageNote: 'This document is available in French and in English. In case of any discrepancy, the French version prevails.',

  sections: [
    {
      id: 'scope',
      title: 'Who we are and what this policy covers',
      blocks: [
        'AirStay Properties Inc. (“AirStay”, “we”, “us” or “our”) is a corporation incorporated under the laws of British Columbia, with its registered office at Suite 1915, 610 Granville Street, Vancouver, BC V6C 3T3 (Québec enterprise number (NEQ): registration in progress). We operate in Montréal, Québec, where we manage short-term and long-term rental residences on behalf of their owners and provide property management and related services, and we are expanding to Vancouver.',
        'This policy explains how we handle personal information, meaning any information about an individual that allows them to be identified, directly or indirectly. It applies to information we collect through airstayproperties.com (the “Website”) and our booking site at book.airstayproperties.com (the “Booking Site”), through direct and platform bookings, during stays, in our communications with guests, owners and service clients, and in recruitment.',
        'We apply the Act respecting the protection of personal information in the private sector (Québec), as amended by Law 25, the Personal Information Protection and Electronic Documents Act (Canada) and, where applicable, the Personal Information Protection Act (British Columbia).',
        'When you book through a platform such as Airbnb, Vrbo, Booking.com, Expedia, Hotels.com or Hopper, that platform also collects and handles your information under its own privacy policy.',
      ],
    },

    {
      id: 'privacy-officer',
      title: 'Person in charge of the protection of personal information',
      blocks: [
        'Our Privacy Officer, the person in charge of the protection of personal information, is Shervin Soleimani, Founder. He ensures that we comply with privacy laws, approves our governance policies, and handles access and correction requests and complaints.',
        { rows: OFFICER_ROWS },
      ],
    },

    {
      id: 'governance',
      title: 'Our governance policies',
      blocks: [
        'Our policies and practices for the governance of personal information provide, in particular, that:',
        {
          list: [
            '**Access by role.** Team members and contractors may access personal information only when their duties require it, and they are bound by confidentiality.',
            '**Incident register.** We keep a register of confidentiality incidents and take measures to reduce the risk of injury (see Section 13).',
            '**Privacy impact assessments.** We carry out a privacy impact assessment before engaging a new service provider that will handle personal information, before any communication of personal information outside Québec, and before acquiring, developing or overhauling an information system or electronic service that involves personal information.',
            '**Retention periods.** We set a retention period for each category of information and securely destroy or anonymize information at the end of it (see Section 10).',
            '**Service providers.** Providers that handle personal information for us must protect it under a written agreement, use it only for their mandate and return or destroy it at the end of the mandate.',
            '**Requests and complaints.** Requests and complaints are handled in writing by the Privacy Officer and answered within 30 days.',
          ],
        },
        'Questions about these policies may be sent to our Privacy Officer (Section 2).',
      ],
    },

    {
      id: 'collection',
      title: 'Information we collect',
      blocks: [
        'We collect personal information directly from you, from booking platforms and service providers acting for us, and from the people you authorize. The information depends on how you interact with us.',

        { h: 'Website forms and uploads', id: 'forms' },
        'When you contact us, request a booking, submit an owner, long-term rental or service request, or apply for a job, we collect your name, email address and phone number, and the details you choose to provide, such as your city, the property address and its characteristics, dates and number of guests, budget or move-in date, your message, and any files you upload (for example, photos, documents, a CV or a portfolio). We also record the page from which the form was sent and the time it was sent, and use limited technical signals to filter spam.',
        'Do not upload identity documents or payment information through website forms.',

        { h: 'Bookings and stays', id: 'bookings' },
        'For a booking, we collect the name and contact details of the Responsible Guest, the stay dates, the residence, the number of guests, the price and payment status, special requests, and our communications before, during and after the stay. Payments are processed by our payment processor: we receive limited card information, such as the card type and last four digits, but never the full card number. We also keep check-in and check-out records and any incident or damage reports, including photos. When you accept our terms and the rental agreement, we record the date and time, the IP address used and the version of the documents accepted, as evidence of your acceptance.',

        { h: 'Identity verification', id: 'verification' },
        'For direct bookings and Vrbo reservations for which AirStay processes the payment, the Responsible Guest completes our online check-in form. It collects a government-issued photo ID (its image and details such as your name, date of birth, document number and expiry date) and includes an identity check through our payment processor, which also acts as our identity-verification provider. This information is sensitive: we collect it only with your express consent and use it only to verify your identity and prevent fraud.',
        'For reservations made through third-party platforms, we follow each platform’s policies. Where a platform does not allow us to collect identity documents, we do not collect them.',

        { h: 'Biometric verification', id: 'biometrics' },
        'Identity verification may compare a photo of your face (a selfie) with the photo on your ID. We use facial comparison only with your express consent, and we offer a non-biometric alternative: a manual identity check by our team. The images used for facial comparison are handled by our identity-verification provider, and we keep only the verification result.',

        { h: 'Smart locks and security cameras', id: 'locks-cameras' },
        'Our residences use smart locks with a unique code for each guest. We keep the door access logs (the date and time of each entry) and may use them for security, dispute resolution and claims, including by sharing them with booking platforms, payment processors or insurers when needed.',
        'Some buildings have security cameras in certain common areas, such as hallways and entrances. They are used for safety and to investigate incidents. There are never cameras inside the units.',

        { h: 'Information from booking platforms', id: 'platforms' },
        'When you book through a platform, it sends us the information needed to manage your stay, such as your name, the contact details it provides, the dates and number of guests, the amount of the booking and the messages you send us.',

        { h: 'Owners and service clients', id: 'owners' },
        'We collect owners’ names and contact details, information about the property, its ownership and their authority to act, and, under a management agreement, the information needed to pay revenue and report on it, such as banking details and tax registration numbers.',

        { h: 'Job applicants', id: 'applicants' },
        'We collect the information in your application, such as your CV, portfolio, cover message and the position you are interested in, as well as our interview notes. We contact references only with your permission.',

        { h: 'Long-term rental applicants', id: 'rental-applicants' },
        'If you apply for a long-term rental, we collect the information needed to assess your application and prepare the lease, within the limits allowed by law.',

        { h: 'Information about other people', id: 'others' },
        'If you give us information about other people, such as the guests travelling with you or the co-owners of a property, please make sure you are authorized to do so and that they are aware of this policy.',

        { h: 'Website technical information', id: 'technical' },
        'When you visit the Website, our hosting provider automatically receives technical information such as your IP address, browser type, the pages requested and the date and time. It is used to deliver the Website, keep it secure and prevent abuse. The service that delivers our website fonts also receives your IP address. See Section 11 about cookies.',
      ],
    },

    {
      id: 'purposes',
      title: 'Why we use it',
      blocks: [
        'We use personal information to:',
        {
          list: [
            'answer your inquiries and provide the quotes, assessments and services you request;',
            'process, confirm and manage reservations, send access instructions and assist you before, during and after your stay;',
            'verify the identity of guests and prevent fraud, unauthorized occupancy and damage;',
            'keep our residences and buildings safe and investigate incidents, including through door access logs and security cameras in certain common areas;',
            'process payments, security holds, refunds and documented charges, and respond to payment disputes, chargebacks and claims;',
            'manage properties on behalf of their owners, including revenue statements and incident reports;',
            'assess job applications and rental applications;',
            'operate, secure and improve the Website and our services;',
            'meet our legal obligations, such as tax, accounting and tourist accommodation requirements, and establish, exercise or defend legal claims;',
            'send you news or offers, only if you have agreed to receive them, with an easy way to unsubscribe in every message, in accordance with Canada’s anti-spam legislation.',
          ],
        },
        'We use personal information only for these purposes, for compatible purposes or with your consent, unless the law allows or requires otherwise.',
      ],
    },

    {
      id: 'consent',
      title: 'Consent',
      blocks: [
        'We collect, use and share personal information with your consent, except where the law allows or requires otherwise. We ask for consent in clear and simple terms, for specific purposes, and separately from other information.',
        'We obtain your express consent before collecting or using sensitive information, such as identity documents and the comparison of your facial image with your ID. When you send us a form or a message, you consent to our using the information to answer you and follow up on your request.',
        'You may withdraw your consent at any time by writing to our Privacy Officer, subject to legal and contractual restrictions. Withdrawing consent may prevent us from providing a service: for example, if identity verification is not completed for a booking that requires it, the reservation may be cancelled under the applicable cancellation policy. You may choose a manual identity check instead of facial comparison.',
        'Consent concerning a minor under 14 years of age must be given by a parent or tutor.',
      ],
    },

    {
      id: 'automation',
      title: 'Automated decisions and AI-assisted tools',
      blocks: [
        'We do not make decisions about you based exclusively on the automated processing of your personal information. If we ever do, we will inform you no later than at the time of the decision. You may then ask about the personal information used and the reasons and main factors that led to the decision, have that information corrected, and submit observations to a member of our team who can review the decision.',
        'Identity verification uses automated tools from our identity-verification provider, but a failed or inconclusive verification is reviewed by a member of our team before any decision is made about your booking. Our payment processor may also use automated fraud-prevention tools when processing payments.',
        'We may use software, including AI-assisted tools, to help us manage reservations and answer messages. These tools are used under human oversight, and decisions that significantly affect you, such as refusing or cancelling a booking or charging your card for damage, are made by a member of our team.',
      ],
    },

    {
      id: 'sharing',
      title: 'Who we share it with',
      blocks: [
        'We do not sell or rent personal information. We share it only as needed for the purposes described above, with:',
        {
          list: [
            '**booking platforms** through which you book, to manage the reservation, and when needed to resolve a dispute or claim;',
            '**our reservation platform**, a third-party property-management and booking system that hosts the Booking Site, guest messaging and online check-in;',
            '**our payment processor**, which processes payments and identity verification, and card issuers when a charge is disputed, as described in our [Terms](/terms?lang=en);',
            '**communication and email service providers**, including the provider that delivers website form submissions to our team;',
            '**our website hosting provider** and other technology providers, such as document storage, productivity and AI-assisted software;',
            '**cleaning, maintenance and operations personnel and contractors**, who receive only what they need to prepare and service a residence;',
            '**the owner of the residence** you stay in or ask about, for limited booking, revenue and incident information;',
            '**building managers or condominium boards**, where building rules require it or to handle an incident;',
            '**insurers and professional advisers**, such as lawyers and accountants, who are bound by confidentiality, for example when a claim is made;',
            '**public authorities**, when the law requires or allows it, for example under a court order or to prevent an act of violence;',
            '**a buyer or successor** in a business transaction, under an agreement that protects the information, as the law allows.',
          ],
        },
        'Service providers act under written agreements that require them to protect the information, use it only to perform their mandate, and return or destroy it at the end of the mandate.',
      ],
    },

    {
      id: 'transfers',
      title: 'Storage and transfers outside Québec',
      blocks: [
        'Some of our service providers store or process personal information outside Québec, elsewhere in Canada or abroad, including in the United States. For example, the Website is hosted by a cloud provider outside Québec, and website form submissions are delivered to our team through an email service provider outside Québec.',
        'Before communicating personal information outside Québec, we carry out a privacy impact assessment that considers the sensitivity of the information, the purposes of its use, the protection measures, including contractual ones, and the legal framework of the place where it will be processed. We communicate it only if the assessment shows that it will receive adequate protection, and under a written agreement. Information held outside Québec may be accessible to the authorities of that place under its laws.',
      ],
    },

    {
      id: 'retention',
      title: 'How long we keep it',
      blocks: [
        '**Identity documents.** ID images and check-in documents are kept for 180 days after check-out, or longer while a dispute, chargeback or claim is open. Only team members who need them can access them. They are stored only in our reservation and payment platforms, never in email or chat, and are securely deleted at the end of that period.',
        '**Facial comparison.** The images used for facial comparison are handled by our identity-verification provider; we keep only the verification result.',
        '**Booking and evidence records.** Booking details, records of your acceptance of our terms, messages, verification results and door access logs are kept for at least 180 days after check-out, or longer while a dispute, chargeback or claim is open, and longer where the law requires it.',
        '**Other information.** We keep other personal information only as long as needed for the purposes for which it was collected, including the resolution of disputes and claims, or longer where the law requires it, for example for tax and accounting records.',
        'When information is no longer needed, we destroy it securely or anonymize it in accordance with the law.',
      ],
    },

    {
      id: 'cookies',
      title: 'Cookies and similar technologies',
      blocks: [
        'Our Website uses only essential cookies, which are needed for it to work and to stay secure. It uses no analytics or advertising cookies, which is why we do not display a cookie consent banner.',
        'If we add analytics in the future, they will remain off until you accept them, and the option to refuse will be just as visible as the option to accept. We will also update this policy.',
        'The Booking Site runs on a third-party platform with its own cookie settings, described on that site. You can also control or delete cookies through your browser settings.',
      ],
    },

    {
      id: 'security',
      title: 'Security',
      blocks: [
        'We use administrative, technical and physical safeguards suited to the sensitivity of the information, such as role-based access, strong authentication where available, encryption of data in transit and reputable service providers. Identity documents are handled only through our secure online check-in.',
        'Please do not send identity documents or payment card numbers by email, text message, chat or website form.',
        'No method of transmission or storage is completely secure, but we work to protect your information and to improve our safeguards.',
      ],
    },

    {
      id: 'incidents',
      title: 'Confidentiality incidents',
      blocks: [
        'If we have reason to believe that a confidentiality incident has occurred (unauthorized access to, use or communication of personal information, or its loss), we promptly take reasonable measures to reduce the risk of injury and to prevent new incidents. We record every incident in our register. If an incident presents a risk of serious injury, we promptly notify the Commission d’accès à l’information and the persons concerned, as well as the Office of the Privacy Commissioner of Canada and any other authority when the law requires it.',
      ],
    },

    {
      id: 'rights',
      title: 'Your rights',
      blocks: [
        'Subject to the law, you have the right to:',
        {
          list: [
            'access the personal information we hold about you and obtain a copy;',
            'have inaccurate, incomplete or equivocal information corrected, and have information deleted if its collection, communication or retention is not authorized by law;',
            'withdraw your consent to the use or communication of your information;',
            'ask us to stop disseminating your information or to de-index any hyperlink attached to your name, where the law allows;',
            'receive computerized personal information you provided to us in a structured, commonly used technological format, or have it transferred to a person or body you designate;',
            'be informed of the personal information used to make a decision based exclusively on automated processing, and submit observations;',
            'know the categories of persons within AirStay who have access to your information and how long it is kept;',
            'file a complaint with us and with the competent authority.',
          ],
        },
        'To exercise a right, write to our Privacy Officer. We may ask you to confirm your identity. We will help you prepare your request if needed and will respond in writing within 30 days of receiving it. Access is free of charge; a reasonable fee may be charged for transcribing, reproducing or transmitting information, and we will tell you the amount before processing the request. If we refuse a request, we will explain why and tell you about your recourse.',
        'You may file a complaint with the Commission d’accès à l’information du Québec ([cai.gouv.qc.ca](https://www.cai.gouv.qc.ca)), the Office of the Privacy Commissioner of Canada ([priv.gc.ca](https://www.priv.gc.ca)) or, for matters under British Columbia law, the Office of the Information and Privacy Commissioner for British Columbia ([oipc.bc.ca](https://www.oipc.bc.ca)). We encourage you to contact us first so that we can try to resolve your concern.',
      ],
    },

    {
      id: 'children',
      title: 'Children',
      blocks: [
        'The Website and our services are intended for adults. We do not knowingly collect personal information about children under 14 without the consent of a parent or tutor. Bookings must be made by a Responsible Guest aged 18 or older.',
      ],
    },

    {
      id: 'changes',
      title: 'Changes to this policy',
      blocks: [
        'We may update this policy to reflect changes in our practices or in the law. The updated version is published on this page with a new “Last updated” date. If the changes are significant, we will inform you through the Website or by other appropriate means.',
      ],
    },

    {
      id: 'contact',
      title: 'Contact us',
      blocks: [
        'For any question, request or complaint about this policy or your personal information, please contact our Privacy Officer:',
        { rows: OFFICER_ROWS },
      ],
    },
  ],

  closing: 'AirStay Properties Inc. · Privacy Policy · Version of November 18, 2026',
}

export default privacy
