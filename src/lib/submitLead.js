// Sends any website form (owner, booking request, long-term, contact, careers)
// to /api/lead, which emails info@airstayproperties.com.
// If the email service isn't available, we open the visitor's email app with
// everything pre-filled, so a lead is never silently lost.
import toast from 'react-hot-toast'

export const LEAD_EMAIL = 'info@airstayproperties.com'

const LABELS = {
  owner: 'Owner inquiry',
  booking: 'Direct booking request',
  longterm: 'Long-term rental inquiry',
  contact: 'Contact form',
  careers: 'Job application',
}

function mailtoFallback(type, data) {
  const subject = `${LABELS[type] || 'Website inquiry'} – ${data.name || ''}`.trim()
  const body = Object.entries(data)
    .filter(([, v]) => v !== '' && v != null)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')
  window.location.href = `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export async function submitLead(type, data) {
  try {
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, data, page: window.location.pathname, website: '' }),
    })
    if (res.ok) return true
    throw new Error(`status ${res.status}`)
  } catch (err) {
    console.error('Lead submit failed:', err)
    toast.error(`We couldn't send this automatically. Your email app is opening. Please press send, or write to ${LEAD_EMAIL}.`, { duration: 9000 })
    mailtoFallback(type, data)
    return false
  }
}
