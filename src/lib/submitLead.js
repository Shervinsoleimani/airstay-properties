// Sends any website form (owner, booking, long-term, contact, careers) to
// /api/lead, which emails it, with attachments, to the AirStay team.
// Nothing opens the visitor's email app automatically: if sending fails, the
// form shows a calm error with "Try again" and an optional "Email us instead".

export const LEAD_EMAIL = 'info@airstayproperties.com'

export const LABELS = {
  owner: 'Owner inquiry',
  booking: 'Direct booking request',
  longterm: 'Long-term residence inquiry',
  contact: 'General inquiry',
  careers: 'Job application',
  services: 'Property services request',
}

// ── Attachments ─────────────────────────────────────────────
// Vercel functions accept ~4.5 MB per request, so photos are resized in the
// browser and the total is kept under ~3 MB before encoding.
export const MAX_FILES = 5
export const MAX_TOTAL_BYTES = 3 * 1024 * 1024
const IMAGE_RE = /^image\/(jpeg|png|webp|gif|heic|heif)$/i
export const ACCEPT = '.jpg,.jpeg,.png,.webp,.heic,.heif,.pdf,.doc,.docx,.xls,.xlsx'

async function compressImage(file, maxDim = 1600, quality = 0.8) {
  const bitmap = await createImageBitmap(file)
  const scale = Math.min(1, maxDim / Math.max(bitmap.width, bitmap.height))
  const w = Math.round(bitmap.width * scale)
  const h = Math.round(bitmap.height * scale)
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h)
  const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', quality))
  if (!blob || blob.size >= file.size) return file
  return new File([blob], file.name.replace(/\.[^.]+$/, '') + '.jpg', { type: 'image/jpeg' })
}

// Returns a ready-to-send file (images optimised) or throws a friendly message.
export async function prepareFile(file) {
  let out = file
  if (IMAGE_RE.test(file.type)) {
    try { out = await compressImage(file) } catch { out = file }
  }
  if (out.size > MAX_TOTAL_BYTES) {
    throw new Error(`“${file.name}” is too large to send online. Please email it to ${LEAD_EMAIL}.`)
  }
  return out
}

const toBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.onload = () => resolve(String(reader.result).split(',')[1] || '')
  reader.onerror = () => reject(new Error('Could not read file'))
  reader.readAsDataURL(file)
})

export const formatBytes = (n) => n > 1024 * 1024 ? `${(n / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(n / 1024))} KB`

export function makeReference() {
  const d = new Date()
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`
  return `AS-${ymd}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`
}

// User-initiated fallback only (shown as a button after an error).
export function mailtoHref(type, data, reference) {
  const subject = `${LABELS[type] || 'Website inquiry'} – ${data.name || ''} (${reference})`.trim()
  const body = Object.entries(data)
    .filter(([k, v]) => v !== '' && v != null && k !== 'consent')
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')
  return `mailto:${LEAD_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export async function submitLead(type, data, files = [], meta = {}) {
  const reference = makeReference()
  try {
    const attachments = await Promise.all(files.map(async f => ({ filename: f.name, type: f.type, content: await toBase64(f) })))
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, data, attachments, reference, page: window.location.pathname, website: meta.honeypot || '', elapsed: meta.elapsed || 0 }),
    })
    const json = await res.json().catch(() => ({}))
    if (res.ok) return { ok: true, reference: json.reference || reference }
    return { ok: false, reference, error: json.message || `status ${res.status}` }
  } catch (err) {
    console.error('Lead submit failed:', err)
    return { ok: false, reference, error: err.message }
  }
}
