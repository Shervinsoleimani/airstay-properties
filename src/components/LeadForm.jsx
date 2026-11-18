import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  submitLead, prepareFile, mailtoHref, formatBytes,
  MAX_FILES, MAX_TOTAL_BYTES, ACCEPT, LEAD_EMAIL,
} from '../lib/submitLead'

// One elegant, professional form used across the site.
// fields: [{ name, label, type: 'text'|'email'|'tel'|'url'|'month'|'select'|'textarea', required, placeholder, options, span: 2 }]
// files:  { label, hint, required } or null
// success: { title, body, steps: [] }

const ERR = '#A4493D'

export default function LeadForm({ type, theme = 'light', fields, files: fileCfg = null, submitLabel = 'Submit Request', success = {}, onClose, extra = {} }) {
  const dark = theme === 'dark'
  const initial = Object.fromEntries(fields.map(f => [f.name, f.defaultValue || '']))
  const [values, setValues] = useState(initial)
  const [consent, setConsent] = useState(false)
  const [attached, setAttached] = useState([])
  const [preparing, setPreparing] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [reference, setReference] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const started = useRef(Date.now())
  const fileInput = useRef(null)

  const c = {
    label: { fontFamily: 'DM Mono', fontSize: 9.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: dark ? 'rgba(201,169,110,0.7)' : 'rgba(13,12,10,0.5)', display: 'block', marginBottom: 6 },
    input: dark ? 'input-field' : 'input-light',
    select: dark ? 'select-field' : 'input-light',
    text: dark ? 'rgba(242,237,228,0.75)' : '#6F6A64',
    strong: dark ? '#F2EDE4' : '#0D0C0A',
    line: dark ? 'rgba(201,169,110,0.25)' : 'rgba(13,12,10,0.15)',
  }

  const set = (name, v) => { setValues(s => ({ ...s, [name]: v })); if (errors[name]) setErrors(e => ({ ...e, [name]: null })) }

  const addFiles = async (list) => {
    const incoming = Array.from(list || [])
    if (!incoming.length) return
    setPreparing(true)
    const next = [...attached]
    const problems = []
    for (const f of incoming) {
      if (next.length >= MAX_FILES) { problems.push(`You can attach up to ${MAX_FILES} files.`); break }
      try {
        const ready = await prepareFile(f)
        const total = next.reduce((s, x) => s + x.size, 0) + ready.size
        if (total > MAX_TOTAL_BYTES) { problems.push(`“${f.name}” would exceed the ${formatBytes(MAX_TOTAL_BYTES)} total. Please email larger files to ${LEAD_EMAIL}.`); continue }
        next.push(ready)
      } catch (err) { problems.push(err.message) }
    }
    setAttached(next)
    setPreparing(false)
    setErrors(e => ({ ...e, files: problems.length ? problems.join(' ') : null }))
  }

  const validate = () => {
    const e = {}
    for (const f of fields) {
      const v = String(values[f.name] || '').trim()
      if (f.required && !v) e[f.name] = 'Required'
      if (f.type === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) e[f.name] = 'Please enter a valid email'
    }
    if (fileCfg?.required && !attached.length) e.files = 'Please attach a file'
    if (!consent) e.consent = 'Please confirm to continue'
    setErrors(e)
    return !Object.values(e).some(Boolean)
  }

  const send = async (ev) => {
    ev?.preventDefault?.()
    if (status === 'sending' || preparing) return
    if (!validate()) return
    setStatus('sending')
    const payload = { ...extra, ...Object.fromEntries(Object.entries(values).map(([k, v]) => [k, String(v).trim()])) }
    const r = await submitLead(type, payload, attached, { honeypot, elapsed: Date.now() - started.current })
    setReference(r.reference)
    setStatus(r.ok ? 'sent' : 'error')
  }

  if (status === 'sent') {
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ padding: '24px 0' }}>
        <div style={{ width: 48, height: 1, background: '#C9A96E', marginBottom: 28 }} />
        <p style={{ fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: 10 }}>Request received · {reference}</p>
        <h3 style={{ fontFamily: 'Playfair Display', fontSize: 34, fontWeight: 400, color: c.strong, marginBottom: 14, lineHeight: 1.2 }}>{success.title || 'Thank you.'}</h3>
        <p style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: c.text, lineHeight: 1.8, marginBottom: 28, maxWidth: 520 }}>{success.body || 'A member of our team will be in touch shortly.'}</p>
        {success.steps?.length > 0 && (
          <div style={{ borderTop: `1px solid ${c.line}`, marginBottom: 28 }}>
            {success.steps.map((s, i) => (
              <div key={s} style={{ display: 'flex', gap: 18, padding: '14px 0', borderBottom: `1px solid ${c.line}` }}>
                <span style={{ fontFamily: 'DM Mono', fontSize: 10, color: '#C9A96E', paddingTop: 3 }}>0{i + 1}</span>
                <span style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: c.text, lineHeight: 1.6 }}>{s}</span>
              </div>
            ))}
          </div>
        )}
        <p style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 300, color: c.text, opacity: 0.8 }}>Please quote your reference if you write to us at {LEAD_EMAIL}.</p>
        {onClose && (
          <button onClick={onClose} style={{ marginTop: 28, background: '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '14px 36px', border: 'none', cursor: 'pointer' }}>Close</button>
        )}
      </motion.div>
    )
  }

  const sending = status === 'sending'

  return (
    <form onSubmit={send} noValidate style={{ position: 'relative' }}>
      {/* Honeypot: hidden from people, irresistible to bots */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={e => setHoneypot(e.target.value)}
        style={{ position: 'absolute', left: -9999, width: 1, height: 1, opacity: 0 }} aria-hidden="true" />

      <div className="r-two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 24, rowGap: 26 }}>
        {fields.map(f => (
          <div key={f.name} style={{ gridColumn: f.span === 2 ? '1 / -1' : 'auto' }}>
            <label htmlFor={`${type}-${f.name}`} style={c.label}>{f.label}{f.required ? ' *' : ''}</label>
            {f.type === 'select' ? (
              <select id={`${type}-${f.name}`} className={c.select} style={{ appearance: 'none' }} value={values[f.name]} disabled={sending}
                onChange={e => set(f.name, e.target.value)}>
                <option value="">{f.placeholder || 'Select'}</option>
                {f.options.map(o => <option key={o}>{o}</option>)}
              </select>
            ) : f.type === 'textarea' ? (
              <textarea id={`${type}-${f.name}`} className={c.input} style={{ resize: 'vertical', minHeight: 96 }} value={values[f.name]} disabled={sending}
                placeholder={f.placeholder} onChange={e => set(f.name, e.target.value)} />
            ) : (
              <input id={`${type}-${f.name}`} type={f.type || 'text'} className={c.input} value={values[f.name]} disabled={sending}
                placeholder={f.placeholder} autoComplete={f.autoComplete} onChange={e => set(f.name, e.target.value)} />
            )}
            {errors[f.name] && <p style={{ fontFamily: 'DM Sans', fontSize: 12, color: ERR, marginTop: 6 }}>{errors[f.name]}</p>}
          </div>
        ))}

        {fileCfg && (
          <div style={{ gridColumn: '1 / -1' }}>
            <span style={c.label}>{fileCfg.label}{fileCfg.required ? ' *' : ''}</span>
            <div
              onClick={() => !sending && fileInput.current?.click()}
              onDragOver={e => { e.preventDefault(); setDragging(true) }}
              onDragLeave={() => setDragging(false)}
              onDrop={e => { e.preventDefault(); setDragging(false); if (!sending) addFiles(e.dataTransfer.files) }}
              role="button" tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInput.current?.click() } }}
              style={{ marginTop: 6, border: `1px dashed ${dragging ? '#C9A96E' : c.line}`, background: dragging ? 'rgba(201,169,110,0.06)' : 'transparent', padding: '22px 20px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.25s' }}>
              <p style={{ fontFamily: 'Playfair Display', fontSize: 17, color: c.strong, marginBottom: 6 }}>
                {preparing ? 'Optimising your files…' : <>Drag &amp; drop files here, or <span style={{ color: '#C9A96E', borderBottom: '1px solid rgba(201,169,110,0.5)' }}>browse</span></>}
              </p>
              <p style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 300, color: c.text }}>{fileCfg.hint}</p>
              <input ref={fileInput} type="file" multiple accept={ACCEPT} style={{ display: 'none' }}
                onChange={e => { addFiles(e.target.files); e.target.value = '' }} />
            </div>
            {attached.length > 0 && (
              <div style={{ marginTop: 10 }}>
                {attached.map((f, i) => (
                  <div key={`${f.name}-${i}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: `1px solid ${c.line}` }}>
                    <span style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: c.strong, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '75%' }}>{f.name}</span>
                    <span style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                      <span style={{ fontFamily: 'DM Mono', fontSize: 10, color: c.text }}>{formatBytes(f.size)}</span>
                      <button type="button" aria-label={`Remove ${f.name}`} disabled={sending}
                        onClick={() => setAttached(a => a.filter((_, j) => j !== i))}
                        style={{ background: 'none', border: 'none', color: c.text, fontSize: 18, cursor: 'pointer', lineHeight: 1 }}>×</button>
                    </span>
                  </div>
                ))}
              </div>
            )}
            {errors.files && <p style={{ fontFamily: 'DM Sans', fontSize: 12, color: ERR, marginTop: 8 }}>{errors.files}</p>}
          </div>
        )}

        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: 'pointer' }}>
            <input type="checkbox" checked={consent} disabled={sending} onChange={e => { setConsent(e.target.checked); if (errors.consent) setErrors(x => ({ ...x, consent: null })) }}
              style={{ marginTop: 3, accentColor: '#2C3E35', width: 15, height: 15, flexShrink: 0 }} />
            <span style={{ fontFamily: 'DM Sans', fontSize: 12.5, fontWeight: 300, color: c.text, lineHeight: 1.7 }}>
              I agree that AirStay Properties may use the information and files I provide to respond to this request, as described in our{' '}
              <Link to="/privacy" style={{ color: '#C9A96E', textDecoration: 'none', borderBottom: '1px solid rgba(201,169,110,0.4)' }}>Privacy Policy</Link>.
            </span>
          </label>
          {errors.consent && <p style={{ fontFamily: 'DM Sans', fontSize: 12, color: ERR, marginTop: 6 }}>{errors.consent}</p>}
        </div>
      </div>

      <AnimatePresence>
        {status === 'error' && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            style={{ overflow: 'hidden', marginTop: 28 }}>
            <div style={{ borderLeft: '2px solid #C9A96E', background: dark ? 'rgba(201,169,110,0.06)' : 'rgba(201,169,110,0.08)', padding: '18px 20px' }}>
              <p style={{ fontFamily: 'Playfair Display', fontSize: 18, color: c.strong, marginBottom: 6 }}>We couldn’t send your request just now.</p>
              <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, color: c.text, lineHeight: 1.7, marginBottom: 14 }}>
                Your details are still here. Please try again in a moment. If it persists, email us at {LEAD_EMAIL} quoting reference {reference}{attached.length ? ' and attach your files' : ''}.
              </p>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                <button type="submit" style={{ background: 'none', border: 'none', padding: 0, fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A96E', cursor: 'pointer', borderBottom: '1px solid rgba(201,169,110,0.5)' }}>Try again</button>
                <a href={mailtoHref(type, { ...extra, ...values }, reference)} style={{ fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: c.text, textDecoration: 'none', borderBottom: `1px solid ${c.line}` }}>Email us instead</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button type="submit" disabled={sending || preparing}
        style={{ marginTop: 32, background: sending ? '#3D5248' : '#2C3E35', color: '#F2EDE4', fontFamily: 'DM Sans', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '17px 44px', border: 'none', cursor: sending ? 'wait' : 'pointer', position: 'relative', overflow: 'hidden', minWidth: 230 }}>
        {sending ? 'Sending securely…' : `${submitLabel} →`}
        {sending && <span className="send-bar" />}
      </button>
    </form>
  )
}
