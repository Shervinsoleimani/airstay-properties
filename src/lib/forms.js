// Shared form definitions so every page asks for the same, professional details.

const CITIES = ['Montréal', 'Vancouver', 'Other']

export const OWNER_FIELDS = [
  { name: 'name', label: 'Full Name', required: true, placeholder: 'Your full name', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'email@example.com', autoComplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Best number to reach you', autoComplete: 'tel' },
  { name: 'company', label: 'Company / Organisation', placeholder: 'If applicable' },
  { name: 'propertyAddress', label: 'Property Address', required: true, placeholder: 'Street address, unit or building name', span: 2, autoComplete: 'street-address' },
  { name: 'city', label: 'City', type: 'select', required: true, options: CITIES, placeholder: 'Select city' },
  { name: 'propertyType', label: 'Property Type', type: 'select', placeholder: 'Select type', options: ['Condo / Apartment', 'House / Townhouse', 'Multi-Unit Residential Building', 'Boutique Hotel', 'Commercial / Mixed-Use Building', 'Public / Government Building', 'Other'] },
  { name: 'units', label: 'Number of Units', placeholder: 'e.g. 1, 8, 40+' },
  { name: 'service', label: 'Service of Interest', type: 'select', placeholder: 'Select a service', options: ['Short-term rental management', 'Long-term leasing & tenant management', 'Full property & building management', 'Boutique hotel management', 'Cleaning & housekeeping', 'Landscaping & grounds care', 'Maintenance & repairs', 'Not sure yet: advise me'] },
  { name: 'message', label: 'Tell Us About Your Property', type: 'textarea', span: 2, placeholder: 'Current status (vacant, tenanted, furnished), goals, timing…' },
]

export const OWNER_FILES = { label: 'Photos, Floor Plans or Documents', hint: 'Optional · up to 5 files · JPG, PNG, HEIC, PDF, Word or Excel · photos are optimised automatically · please do not upload ID documents or payment details' }

export const OWNER_SUCCESS = {
  title: 'Thank you. Your property is in good hands.',
  body: 'Your request has been delivered to our owner-relations team.',
  steps: [
    'A senior member of our team reviews your property details and files.',
    'We contact you within one business day to arrange a complimentary walkthrough.',
    'You receive a tailored proposal comparing the options that earn you the most.',
  ],
}

export const CONTACT_FIELDS = [
  { name: 'name', label: 'Full Name', required: true, placeholder: 'Your full name', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'email@example.com', autoComplete: 'email' },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Optional', autoComplete: 'tel' },
  { name: 'iAm', label: 'I Am…', type: 'select', placeholder: 'Select one', options: ['A guest or traveller', 'A property owner or investor', 'A hotel or building manager', 'A public or government organisation', 'A partner or supplier', 'A job applicant', 'Press / media'] },
  { name: 'propertyAddress', label: 'Property Address', placeholder: 'If your request concerns a property', span: 2, autoComplete: 'street-address' },
  { name: 'message', label: 'Message', type: 'textarea', required: true, span: 2, placeholder: 'How can we help?' },
]

export const CONTACT_FILES = { label: 'Attachments', hint: 'Optional · up to 5 files · images, PDF, Word or Excel · please do not upload ID documents or payment details' }

export const CONTACT_SUCCESS = {
  title: 'Message received.',
  body: 'Thank you for writing to AirStay Properties. Your message is with our team.',
  steps: ['We reply within one business day, often much sooner.', 'Guests with a current reservation: please also message us through your booking for the fastest response.'],
}

// Optional text-message consent on the contact form (Dialpad SMS campaign, Nov 20, 2026).
// Keep this wording exactly as registered with Dialpad. Change it only together with
// the Privacy Policy's SMS sections (src/legal/privacy-*.js) and the Dialpad campaign.
export const SMS_CONSENT = {
  version: 'SMS consent wording v1, Nov 20, 2026',
  before: 'I agree to receive communications by text message regarding booking updates and guest support from AirStay Properties. You may opt out by replying STOP or ask for more information by replying HELP. Message frequency varies. Message and data rates may apply. You may review our ',
  link: 'Privacy Policy',
  after: ' to learn how your data is used.',
}

export const LONGTERM_FIELDS = [
  { name: 'name', label: 'Full Name', required: true, placeholder: 'Your full name', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'email@example.com', autoComplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Optional', autoComplete: 'tel' },
  { name: 'city', label: 'City', type: 'select', options: ['Montréal', 'Vancouver'], placeholder: 'Select city' },
  { name: 'moveIn', label: 'Move-In Month', type: 'month' },
  { name: 'budget', label: 'Monthly Budget', type: 'select', placeholder: 'Select range', options: ['Under $2,000', '$2,000–$3,500', '$3,500–$5,000', '$5,000–$8,000', '$8,000+'] },
  { name: 'furnished', label: 'Furnished?', type: 'select', placeholder: 'Select', options: ['Furnished', 'Unfurnished', 'Either'] },
  { name: 'leaseLength', label: 'Preferred Term', placeholder: 'Tell us your timing; we’ll advise' },
  { name: 'message', label: 'Requirements', type: 'textarea', span: 2, placeholder: 'Bedrooms, neighbourhood, parking, pets, occupants…' },
]

export const LONGTERM_SUCCESS = {
  title: 'Received with thanks.',
  body: 'Our leasing team will match your requirements with current and upcoming residences.',
  steps: ['We review availability for your dates and budget.', 'We reach out within one business day with suitable options and viewing times.'],
}

export const CAREERS_FIELDS = (roleOptions) => [
  { name: 'name', label: 'Full Name', required: true, placeholder: 'Your full name', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'email@example.com', autoComplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', placeholder: 'Best number to reach you', autoComplete: 'tel' },
  { name: 'city', label: 'Preferred City', type: 'select', required: true, placeholder: 'Select a city', options: ['Montréal', 'Vancouver', 'Remote (Canada)', 'Open to either'] },
  ...(roleOptions ? [{ name: 'role', label: 'Role', type: 'select', required: true, placeholder: 'Select a role', options: roleOptions, span: 2 }] : []),
  { name: 'portfolio', label: 'LinkedIn or Portfolio', type: 'url', placeholder: 'https://', span: 2 },
  { name: 'message', label: 'Why AirStay?', type: 'textarea', span: 2, placeholder: 'Tell us about your experience and what excites you about this role…' },
]

export const CAREERS_FILES = { label: 'Résumé / CV', hint: 'PDF or Word · optional but recommended' }

export const CAREERS_SUCCESS = {
  title: 'Application received.',
  body: 'Thank you for your interest in joining AirStay Properties.',
  steps: ['Our team reviews every application personally.', 'If there is a fit, we will contact you to arrange a conversation.'],
}
