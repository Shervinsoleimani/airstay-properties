import { Link } from 'react-router-dom'
import { RevealLine } from './Reveal'

export default function Footer({ onOwnerInquiry }) {
  return (
    <footer className="bg-ink text-cream/60 font-body">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-20">
        <RevealLine className="mb-16" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-display text-2xl font-medium tracking-[0.14em] uppercase text-cream mb-4">
              <img src="/logo.svg" alt="Airstay" style={{height:"40px",width:"auto"}} />
            </div>
            <p className="text-sm font-light leading-relaxed mb-6 max-w-[220px]">
              Boutique hotels, curated rentals, and exceptional stays across Canada.
            </p>
            <div className="flex gap-4">
              {['IG', 'LI', 'FB'].map(s => (
                <a key={s} href="#" className="w-9 h-9 border border-cream/10 flex items-center justify-center text-xs hover:border-gold hover:text-gold transition-all duration-200">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Properties */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-5">Properties</p>
            <ul className="space-y-3">
              {['Vancouver', 'Montreal', 'Boutique Hotels', 'Short-Term', 'Long-Term'].map(item => (
                <li key={item}><Link to="/properties" className="text-sm font-light hover:text-cream transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-5">Company</p>
            <ul className="space-y-3">
              {[['About Us', '/about'], ['For Owners', '/owners'], ['Careers', '/careers'], ['Press', '/press'], ['Contact', '/contact']].map(([label, href]) => (
                <li key={label}><Link to={href} className="text-sm font-light hover:text-cream transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold mb-5">Get In Touch</p>
            <div className="space-y-3 text-sm font-light">
              <p>Vancouver, BC</p>
              <a href="mailto:hello@airstayproperties.com" className="block hover:text-cream transition-colors">hello@airstayproperties.com</a>
              <button onClick={onOwnerInquiry} className="block hover:text-cream transition-colors text-left">Owner Inquiries →</button>
            </div>
          </div>
        </div>

        <RevealLine className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
          <p>© {new Date().getFullYear()} Airstay Properties Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} href="#" className="hover:text-cream transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
