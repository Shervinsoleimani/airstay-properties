import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Reveal } from './Reveal'

// Shared layout for the legal pages (/terms, /privacy).
// Content lives in src/legal/*.js, one file per document and language, with
// identical section ids in French and English so anchors work in both.
// French is the default; ?lang=en selects English (?lang=fr also works).
//
// Block types inside a section:
//   'text'                         paragraph
//   { h: 'Title', id: 'anchor' }   numbered sub-heading (3.1, 3.2 ...)
//   { list: ['...', '...'] }       bullet list
//   { note: '...' | ['...'] }      highlighted notice
//   { rows: [['Label', 'Value']] } label / value rows (contacts, registrations)
// Inline: **bold** and [label](href); hrefs starting with "/" are site links.

const C = {
  void: '#0D0C0A',
  ivory: '#F2EDE4',
  gold: '#C9A96E',
  bronze: '#8B7355',
  mist: '#9B9590',
  ink: '#4A4540',
  line: 'rgba(13,12,10,0.08)',
}

const S = {
  p: { fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: C.ink, lineHeight: 1.9, marginBottom: 16 },
  h2: { fontFamily: 'Playfair Display', fontSize: 28, fontWeight: 400, color: C.void, marginBottom: 20, lineHeight: 1.3 },
  h3: { fontFamily: 'Playfair Display', fontSize: 19, fontWeight: 400, color: C.void, margin: '32px 0 12px', lineHeight: 1.4, scrollMarginTop: 110 },
  h3num: { fontFamily: 'DM Mono', fontSize: 11, letterSpacing: '0.12em', color: C.bronze, marginRight: 8 },
  num: { fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(201,169,110,0.8)', marginBottom: 12 },
  li: { display: 'flex', gap: 16, fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: C.ink, lineHeight: 1.8, marginBottom: 10 },
  dash: { flex: '0 0 18px', height: 1, background: C.gold, marginTop: 14 },
  note: { borderLeft: `2px solid ${C.gold}`, background: 'rgba(201,169,110,0.08)', padding: '20px 24px 6px', margin: '8px 0 24px' },
  link: { color: C.void, textDecoration: 'underline', textDecorationColor: 'rgba(201,169,110,0.7)', textUnderlineOffset: 3 },
  mono: { fontFamily: 'DM Mono', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' },
}

// Québec French typography: non-breaking spaces inside « », before : and $,
// and between a number and its unit (16 h, 500 $ CA).
const frSpacing = (s) => s
  .replace(/« /g, '« ')
  .replace(/ (»|:|%|\$)/g, ' $1')
  .replace(/(\d) (h\b|\$)/g, '$1 $2')
  .replace(/\$ CA\b/g, () => '$ CA')

const INLINE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g

function Inline({ text }) {
  return text.split(INLINE).map((part, i) => {
    if (!part) return null
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} style={{ fontWeight: 500, color: C.void }}>{part.slice(2, -2)}</strong>
    }
    const m = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/)
    if (m) {
      const [, label, href] = m
      if (href.startsWith('/') && !/\.pdf($|#)/i.test(href)) return <Link key={i} to={href} style={S.link}>{label}</Link>
      if (/\.pdf($|#)/i.test(href)) return <a key={i} href={href} style={S.link} target="_blank" rel="noopener noreferrer">{label}</a>
      const external = /^https?:/.test(href)
      return (
        <a key={i} href={href} style={S.link} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{label}</a>
      )
    }
    return part
  })
}

function Block({ block, fix, number }) {
  if (typeof block === 'string') return <p style={S.p}><Inline text={fix(block)} /></p>
  if (block.h) {
    return (
      <h3 id={block.id} style={S.h3}>
        <span style={S.h3num}>{number}</span> {fix(block.h)}
      </h3>
    )
  }
  if (block.list) {
    return (
      <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 20px' }}>
        {block.list.map((li, j) => (
          <li key={j} style={S.li}>
            <span aria-hidden="true" style={S.dash} />
            <span><Inline text={fix(li)} /></span>
          </li>
        ))}
      </ul>
    )
  }
  if (block.note) {
    return (
      <div style={S.note}>
        {[].concat(block.note).map((p, j) => <p key={j} style={{ ...S.p, color: C.void }}><Inline text={fix(p)} /></p>)}
      </div>
    )
  }
  if (block.rows) {
    return (
      <dl style={{ margin: '8px 0 24px', borderTop: `1px solid ${C.line}` }}>
        {block.rows.map(([k, v]) => (
          <div key={k} className="legal-row" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 24, padding: '14px 0', borderBottom: `1px solid ${C.line}` }}>
            <dt style={{ ...S.mono, color: C.bronze, paddingTop: 4 }}>{fix(k)}</dt>
            <dd style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: C.void, lineHeight: 1.7 }}><Inline text={fix(v)} /></dd>
          </div>
        ))}
      </dl>
    )
  }
  return null
}

// French is presented first (Charter of the French language, arts. 52 and 55):
// /terms and /privacy default to French; ?lang=en shows English.
function LanguageSwitch({ lang, label }) {
  const { pathname, hash } = useLocation()
  const options = [
    // code, label when shown, link label (in its own language), target
    ['fr', 'Français', 'Lire en français', pathname],
    ['en', 'English', 'Read in English', `${pathname}?lang=en`],
  ]
  return (
    <nav aria-label={label} className="legal-switch" style={{ ...S.mono, display: 'flex', alignItems: 'center', gap: 14 }}>
      {options.map(([code, name, action, to], i) => (
        <span key={code} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {i > 0 && <span aria-hidden="true" style={{ color: 'rgba(155,149,144,0.5)' }}>|</span>}
          {code === lang
            ? <span lang={code} aria-current="true" style={{ color: C.ivory, borderBottom: `1px solid ${C.gold}`, paddingBottom: 4 }}>{name}</span>
            : <Link to={`${to}${hash}`} lang={code} hrefLang={code} style={{ color: C.gold, textDecoration: 'none', borderBottom: '1px solid rgba(201,169,110,0.35)', paddingBottom: 4 }}>{action}</Link>}
        </span>
      ))}
    </nav>
  )
}

const SCOPED_CSS = `
.legal-toc ol { columns: 2; column-gap: 56px; }
.legal-toc li { break-inside: avoid; }
.legal-toc a:hover, .legal-back:hover { color: ${C.bronze} !important; }
@media (max-width: 760px) {
  .legal-toc ol { columns: 1; }
  .legal-hero { padding-top: 130px !important; padding-bottom: 64px !important; }
  .legal-body { padding-top: 56px !important; padding-bottom: 80px !important; }
  .legal-row { grid-template-columns: 1fr !important; gap: 6px !important; }
}
@media print {
  nav, footer, .cursor, .legal-switch, .legal-back { display: none !important; }
  .legal-hero { background: #fff !important; padding: 0 0 24px !important; }
  .legal-hero h1, .legal-hero p, .legal-hero div { color: #000 !important; }
  .legal-body { padding: 0 !important; }
  .legal-toc ol { columns: 1; }
}
`

export default function LegalPage({ doc }) {
  const { hash } = useLocation()
  const fix = doc.lang === 'fr' ? frSpacing : (s) => s

  // Scroll to a deep link (e.g. /terms#security-hold) once the page has rendered,
  // after the app's own scroll-to-top on navigation.
  useEffect(() => {
    if (!hash) return
    const t = setTimeout(() => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (!el) return
      // Jump straight there (the site sets smooth scrolling globally).
      const html = document.documentElement
      const previous = html.style.scrollBehavior
      html.style.scrollBehavior = 'auto'
      el.scrollIntoView({ block: 'start' })
      html.style.scrollBehavior = previous
    }, 80)
    return () => clearTimeout(t)
  }, [doc.lang]) // also re-runs after a language switch, which keeps the #anchor

  return (
    <div className="page-in" lang={doc.lang} style={{ background: '#FAF7F2' }}>
      <style>{SCOPED_CSS}</style>

      {/* Hero */}
      <div className="legal-hero r-pad" style={{ background: C.void, padding: '160px 48px 90px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20, marginBottom: 28 }}>
              <div className="eyebrow" style={{ color: C.gold }}>{doc.eyebrow}</div>
              <LanguageSwitch lang={doc.lang} label={doc.ui.language} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-xl" style={{ color: C.ivory, marginBottom: 24 }}>
              {fix(doc.title)} <em style={{ fontStyle: 'italic', color: C.gold }}>{fix(doc.titleAccent)}</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: 'DM Sans', fontSize: 15, fontWeight: 300, color: C.mist, lineHeight: 1.9 }}>{fix(doc.intro)}</p>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {doc.meta.map((m) => <p key={m} style={{ ...S.mono, color: C.gold }}>{fix(m)}</p>)}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Body */}
      <div className="legal-body r-pad" style={{ padding: '72px 48px 120px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans', fontSize: 13, fontWeight: 300, fontStyle: 'italic', color: C.mist, lineHeight: 1.8, marginBottom: 40 }}>
            {fix(doc.languageNote)}
          </p>

          {doc.summary && (
            <aside aria-label={fix(doc.summary.title)} style={{ background: C.ivory, padding: '36px 40px 24px', marginBottom: 48 }}>
              <p style={{ ...S.mono, color: C.bronze, marginBottom: 20 }}>{fix(doc.summary.title)}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {doc.summary.items.map((li, j) => (
                  <li key={j} style={S.li}>
                    <span aria-hidden="true" style={S.dash} />
                    <span><Inline text={fix(li)} /></span>
                  </li>
                ))}
              </ul>
              <p style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 300, fontStyle: 'italic', color: C.mist, lineHeight: 1.7, marginTop: 12 }}>{fix(doc.summary.note)}</p>
            </aside>
          )}

          {/* Table of contents */}
          <nav id="contents" aria-labelledby="contents-title" className="legal-toc" style={{ borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}`, padding: '32px 0 24px', marginBottom: 72, scrollMarginTop: 110 }}>
            <p id="contents-title" style={{ ...S.mono, color: C.bronze, marginBottom: 20 }}>{fix(doc.ui.contents)}</p>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {doc.sections.map((s, i) => (
                <li key={s.id} style={{ marginBottom: 12, display: 'flex', gap: 14 }}>
                  <span style={{ fontFamily: 'DM Mono', fontSize: 11, color: C.gold, minWidth: 20, paddingTop: 3 }}>{i + 1}.</span>
                  <a href={`#${s.id}`} style={{ fontFamily: 'DM Sans', fontSize: 14, fontWeight: 300, color: C.void, textDecoration: 'none', lineHeight: 1.6 }}>{fix(s.title)}</a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          {doc.sections.map((s, i) => {
            let sub = 0
            return (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`}
                style={{ scrollMarginTop: 110, paddingTop: i === 0 ? 0 : 48, marginTop: i === 0 ? 0 : 48, borderTop: i === 0 ? 'none' : `1px solid ${C.line}` }}>
                <p style={S.num}>{String(i + 1).padStart(2, '0')}</p>
                <h2 id={`${s.id}-title`} style={S.h2}>{fix(s.title)}</h2>
                {s.blocks.map((b, j) => {
                  const number = b && b.h ? `${i + 1}.${++sub}` : null
                  return <Block key={j} block={b} fix={fix} number={number} />
                })}
                <a href="#contents" className="legal-back" style={{ ...S.mono, fontSize: 9, color: C.mist, textDecoration: 'none', display: 'inline-block', marginTop: 8 }}>
                  {fix(doc.ui.backToContents)}
                </a>
              </section>
            )
          })}

          <p style={{ fontFamily: 'DM Sans', fontSize: 12, fontWeight: 300, fontStyle: 'italic', color: C.mist, lineHeight: 1.8, marginTop: 72, paddingTop: 28, borderTop: `1px solid ${C.line}` }}>
            {fix(doc.closing)}
          </p>
        </div>
      </div>
    </div>
  )
}
