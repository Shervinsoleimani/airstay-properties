// ============================================
// VERCEL SERVERLESS FUNCTION: /api/lead
// ============================================
// Emails every website form submission to the AirStay team.
//
// Needs these Vercel environment variables (Settings → Environment Variables):
//   RESEND_API_KEY   – from resend.com (free tier: 3,000 emails/month)
//   LEAD_TO          – optional, defaults to info@airstayproperties.com
//   LEAD_FROM        – optional, e.g. "AirStay Website <website@airstayproperties.com>"
//                      (needs the domain verified in Resend; until then the
//                      default onboarding@resend.dev sender is used)
// Without RESEND_API_KEY it returns 503 and the website falls back to opening
// the visitor's email app, so no lead is lost.

const LABELS = {
  owner: 'Owner inquiry',
  booking: 'Direct booking request',
  longterm: 'Long-term rental inquiry',
  contact: 'Contact form',
  careers: 'Job application',
}

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' })

  const { type, data, page, website } = req.body || {}
  // Honeypot: bots fill hidden fields. Pretend success, send nothing.
  if (website) return res.status(200).json({ ok: true })
  if (!data || typeof data !== 'object' || !data.email || !data.name) {
    return res.status(400).json({ message: 'Name and email are required' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email))) {
    return res.status(400).json({ message: 'Invalid email' })
  }
  const entries = Object.entries(data).slice(0, 30).map(([k, v]) => [String(k).slice(0, 60), String(v ?? '').slice(0, 5000)])

  const key = process.env.RESEND_API_KEY
  if (!key) return res.status(503).json({ message: 'Email service not configured' })

  const label = LABELS[type] || 'Website inquiry'
  const subject = `[Website] ${label} – ${String(data.name).slice(0, 80)}`
  const rows = entries
    .filter(([, v]) => v !== '')
    .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#666;vertical-align:top"><b>${esc(k)}</b></td><td style="padding:6px 12px;white-space:pre-wrap">${esc(v)}</td></tr>`)
    .join('')
  const html = `<h2 style="font-family:Georgia,serif">${esc(label)}</h2>
<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">${rows}</table>
<p style="font-family:Arial,sans-serif;font-size:12px;color:#999">Sent from airstayproperties.com${page ? esc(page) : ''} · ${new Date().toISOString()}</p>`
  const text = entries.filter(([, v]) => v !== '').map(([k, v]) => `${k}: ${v}`).join('\n')

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
      }),
    })
    if (!r.ok) {
      console.error('Resend error', r.status, await r.text())
      return res.status(502).json({ message: 'Email send failed' })
    }
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Lead email error:', err)
    return res.status(500).json({ message: 'Email send failed' })
  }
}
