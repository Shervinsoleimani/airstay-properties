// ============================================
// VERCEL SERVERLESS FUNCTION: /api/lead
// ============================================
// Emails every website form submission (with attachments) to the AirStay team.
//
// Vercel environment variables (Settings → Environment Variables):
//   RESEND_API_KEY   – added automatically by the "Resend for Vercel" integration
//   LEAD_TO          – optional, defaults to info@airstayproperties.com
//   LEAD_FROM        – optional, e.g. "AirStay Website <website@airstayproperties.com>"
//                      (needs the domain verified in Resend; until then the
//                      default onboarding@resend.dev sender is used, which can
//                      only deliver to the Resend account owner's address)
// Without RESEND_API_KEY it returns 503 and the form shows a polite error with
// a "Try again" / "Email us instead" choice. Nothing is silently lost.

const LABELS = {
  owner: 'Owner inquiry',
  booking: 'Direct booking request',
  longterm: 'Long-term residence inquiry',
  contact: 'General inquiry',
  careers: 'Job application',
  services: 'Property services request',
}

const ALLOWED_EXT = /\.(jpe?g|png|webp|gif|heic|heif|pdf|docx?|xlsx?)$/i
const MAX_FILES = 5
const MAX_TOTAL = 3.3 * 1024 * 1024

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const pretty = (k) => String(k).replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, (c) => c.toUpperCase())

function makeReference() {
  const d = new Date()
  const ymd = `${String(d.getUTCFullYear()).slice(2)}${String(d.getUTCMonth() + 1).padStart(2, '0')}${String(d.getUTCDate()).padStart(2, '0')}`
  return `AS-${ymd}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })

  const { type, data, attachments = [], reference: clientRef, page, website, elapsed } = req.body || {}
  const reference = /^AS-\d{6}-[A-Z0-9]{4}$/.test(String(clientRef || '')) ? clientRef : makeReference()

  // Spam protection: hidden honeypot field, or a form completed impossibly fast.
  if (website || (typeof elapsed === 'number' && elapsed > 0 && elapsed < 2500)) {
    return res.status(200).json({ ok: true, reference })
  }
  if (!data || typeof data !== 'object' || !data.email || !data.name) {
    return res.status(400).json({ message: 'Name and email are required' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email))) {
    return res.status(400).json({ message: 'Please enter a valid email address' })
  }

  // Attachments
  if (!Array.isArray(attachments) || attachments.length > MAX_FILES) {
    return res.status(400).json({ message: `Up to ${MAX_FILES} files can be attached` })
  }
  let total = 0
  const files = []
  for (const a of attachments) {
    const filename = String(a?.filename || '').replace(/[^\w.\- ()]/g, '_').slice(0, 120)
    if (!filename || !ALLOWED_EXT.test(filename)) return res.status(400).json({ message: `File type not accepted: ${filename || 'unnamed'}` })
    const content = String(a?.content || '')
    const size = Buffer.byteLength(content, 'base64')
    total += size
    if (total > MAX_TOTAL) return res.status(413).json({ message: 'Attachments are too large. Please email larger files.' })
    files.push({ filename, content })
  }

  // SMS consent record (Dialpad / CASL): yes or no, the time we received it, the
  // phone number and the exact wording shown. The record is kept in the email to the
  // team (subject marked "SMS opt-in" when ticked) and noted in the function log.
  const smsRows = []
  let smsOptIn = false
  if (data.smsConsent != null) {
    smsOptIn = String(data.smsConsent).toLowerCase() === 'yes'
    const phone = String(data.phone || '').trim().slice(0, 40)
    const now = new Date()
    const montreal = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Toronto', dateStyle: 'long', timeStyle: 'short' }).format(now)
    smsRows.push(['SMS consent', smsOptIn ? 'Yes, agreed to receive text messages' : 'No, box not ticked'])
    smsRows.push(['SMS consent time', `${now.toISOString().replace('T', ' ').slice(0, 19)} UTC (${montreal}, Montréal)`])
    smsRows.push(['SMS consent phone', phone || 'None given'])
    if (smsOptIn) {
      const version = data.smsConsentVersion ? ` [${String(data.smsConsentVersion).slice(0, 80)}]` : ''
      smsRows.push(['SMS consent wording', `${String(data.smsConsentText || '').slice(0, 1000)}${version}`])
    }
    console.log('[sms-consent]', JSON.stringify({ reference, consent: smsOptIn ? 'yes' : 'no', at: now.toISOString(), phoneLast4: phone.replace(/\D/g, '').slice(-4) || null }))
  }

  const key = process.env.RESEND_API_KEY
  if (!key) return res.status(503).json({ message: 'Email service not configured', reference })

  const entries = Object.entries(data)
    .filter(([k]) => !['consent', 'smsConsent', 'smsConsentText', 'smsConsentVersion'].includes(k))
    .slice(0, 40)
    .map(([k, v]) => [String(k).slice(0, 60), String(v ?? '').slice(0, 5000)])
    .filter(([, v]) => v !== '')

  const label = LABELS[type] || 'Website inquiry'
  const subject = `[${reference}] ${label} – ${String(data.name).slice(0, 80)}${data.city ? ` · ${String(data.city).slice(0, 40)}` : ''}${smsOptIn ? ' · SMS opt-in' : ''}`
  const allRows = [...entries, ...smsRows]
  const rows = allRows
    .map(([k, v]) => `<tr><td style="padding:10px 16px;color:#8B7355;font:12px/1.5 Arial,sans-serif;text-transform:uppercase;letter-spacing:.08em;vertical-align:top;white-space:nowrap">${esc(pretty(k))}</td><td style="padding:10px 16px;color:#0D0C0A;font:15px/1.6 Arial,sans-serif;white-space:pre-wrap">${esc(v)}</td></tr>`)
    .join('')
  const fileList = files.length
    ? `<p style="font:13px/1.6 Arial,sans-serif;color:#555;margin:20px 0 0">Attachments (${files.length}): ${files.map((f) => esc(f.filename)).join(', ')}</p>`
    : ''
  const html = `<div style="background:#FAF7F2;padding:32px">
<div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #eee">
<div style="background:#0D0C0A;padding:24px 28px"><p style="margin:0;font:11px/1 Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#C9A96E">AirStay Properties · Website</p>
<h1 style="margin:10px 0 0;font:400 24px/1.3 Georgia,serif;color:#F2EDE4">${esc(label)}</h1>
<p style="margin:8px 0 0;font:12px/1 Arial,sans-serif;color:#9B9590">Reference ${esc(reference)}</p></div>
<table style="width:100%;border-collapse:collapse;margin:12px 0">${rows}</table>
<div style="padding:0 28px 24px">${fileList}
<p style="font:12px/1.6 Arial,sans-serif;color:#999;margin:20px 0 0">Submitted from airstayproperties.com${page ? esc(page) : ''} on ${new Date().toISOString().replace('T', ' ').slice(0, 16)} UTC. Reply to this email to answer ${esc(data.name)} directly.</p></div>
</div></div>`
  const text = `${label} (${reference})\n\n` + allRows.map(([k, v]) => `${pretty(k)}: ${v}`).join('\n') + (files.length ? `\n\nAttachments: ${files.map((f) => f.filename).join(', ')}` : '')

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.LEAD_FROM || 'AirStay Website <onboarding@resend.dev>',
        to: [process.env.LEAD_TO || 'info@airstayproperties.com'],
        reply_to: String(data.email),
        subject,
        html,
        text,
        attachments: files.length ? files : undefined,
      }),
    })
    if (!r.ok) {
      console.error('Resend error', r.status, await r.text())
      return res.status(502).json({ message: 'Email send failed', reference })
    }
    return res.status(200).json({ ok: true, reference })
  } catch (err) {
    console.error('Lead email error:', err)
    return res.status(500).json({ message: 'Email send failed', reference })
  }
}
